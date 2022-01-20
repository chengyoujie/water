import { GLArray } from "./utils/GLArray";
import { ShaderParamData, WebGL } from "./webgl/WebGL";

import cubeFrag from "./shader/cube.frag"
import cubeVert from "./shader/cube.vert"
import testFrag from "./shader/test.frag"
import testVert from "./shader/test.vert"
import causticsFrag from "./shader/caustics.frag"
import causticsVert from "./shader/caustics.vert"
import sphereFrag from "./shader/sphere.frag"
import sphereVert from "./shader/sphere.vert"
import waterSurfaceDownFrag from "./shader/waterSurfaceDown.frag"
import waterSurfaceUpFrag from "./shader/waterSurfaceUp.frag"
import waterSurfaceVert from "./shader/waterSurface.vert"
import waterInfoDropFrag from "./shader/waterInfoDrop.frag"
import waterInfoUpdateFrag from "./shader/waterInfoUpdate.frag"
import waterInfoNormalFrag from "./shader/waterInfoNormal.frag"
import waterInfo from "./shader/waterInfo.vert"
import xneg from "./res/xneg.jpg"
import zneg from "./res/zneg.jpg"
import xpos from "./res/xpos.jpg"
import ypos from "./res/ypos.jpg"
import zpos from "./res/zpos.jpg"
import tilesImg from "./res/tiles.jpg"
import { ComUtils } from "./utils/ComUtils";
import { CubeMap } from "./webgl/CubeMap";
import { MatrixContext, MatrixStatusType } from "./swaming/MartixContext";
import { PlaneMesh } from "./swaming/mesh/PlaneMesh";
import { SphereMesh } from "./swaming/mesh/SphereMesh";
import { CubeMesh } from "./swaming/mesh/CubeMesh";
import { Vec3 } from "./math/Vec3";
import { ClearBufferMask, CullFaceMode, DataType, DrawType, ShaderEnableType, TextureMagFilter, TextureMinFilter, TextureWrapMode } from "./webgl/WebGLInterface";
import { Texture } from "./webgl/Texture";
import { Vec2 } from "./math/Vec2";

export class App{
    public width:number;
    public height:number;
    private _mainCanvas:HTMLCanvasElement;
    private _gl:WebGLRenderingContext;
    private _programs:WebGL[] = [];
    private _programsFrameBuff:WebGL[] = [];
    public matrixContext:MatrixContext;
    private _images:{[name:string]:TexImageSource} = {};
    

    constructor(mainCanvas:HTMLCanvasElement, width:number, height:number){
        let s = this;
        s.matrixContext = new MatrixContext();
        s._mainCanvas = mainCanvas;
        s._gl = s._mainCanvas.getContext("webgl");
        s.resize(width, height);
    }

    public statr(){
        ComUtils.loadImages([
            {name:"xpos", src:xpos}, {name:"ypos", src:ypos}, {name:"zpos", src:zpos}, 
            {name:"xneg", src:xneg}, {name:"yneg", src:ypos}, {name:"zneg", src:zneg}, 
            {name:"tiles", src:tilesImg}
        ]).then((imgs:any)=>{
            for(let i=0; i<imgs.length; i++)this._images[imgs[i].name] = imgs[i].img;
            this.init();
            console.log(imgs)
        })
    }

    private init(){
        let s = this;
        let gl = s._gl;
        gl.clearColor(0, 0, 0, 1);
        s.matrixContext.status = MatrixStatusType.Project;
        s.matrixContext.indentity();
        s.matrixContext.perspective(45, s.width/s.height, 0.01, 100);
        s.matrixContext.status = MatrixStatusType.ModelView;

        s.matrixContext.indentity();
        let angle = 0;
        s.matrixContext.translate(0, 0, -6);
        s.matrixContext.rotate(angle, 1, 0, 0);
        s.matrixContext.rotate(angle, 0, 1, 0);
        s.matrixContext.translate(0, 0.5, 0)

        //全局变量
        let center = new Vec3(-0.4, -0.75, 0.2);
        let oldCenter = center;
        let radius = 0.25;
        let lightDir = new Vec3(2.0, 2.0, -1.0);

        let mvp = s.matrixContext.projectionMatrix.multiply(s.matrixContext.modelViewMatrix);
        mvp.transpose();//需要转置下 

        //水的信息（包含位置，速度， 法向量）waterInfo
        let waterInfoPlan = new PlaneMesh();
        let hasDerivatives = !!gl.getExtension("OES_standard_derivatives");
        //Texure的Float 和 LINEAR 要设置下，否则显示效果有问题
        let filter = !!gl.getExtension('OES_texture_float_linear')?TextureMagFilter.LINEAR:TextureMagFilter.NEAREST;
        let waterInfoTexure1:Texture = new Texture(s._gl, 256, 256, {type:DataType.FLOAT, filter:filter});
        let waterInfoTexure2:Texture = new Texture(s._gl, 256, 256, {type:DataType.FLOAT, filter:filter});
        let causticTexure:Texture = new Texture(gl, 1024, 1024);
        let waterSurfaceMesh = new PlaneMesh(10, 10);
        let tiles:Texture = new Texture(gl, tilesImg, {wrap:TextureWrapMode.REPEAT});
        let cube = new CubeMap(gl, s._images["xpos"], s._images["xneg"], s._images["ypos"], s._images["ypos"], s._images["zpos"], s._images["zneg"])
        /** */
        //添加水面的波纹
        let waterDropData:ShaderParamData = {
            aPos:new GLArray(waterInfoPlan.vertext),
            uTexture:waterInfoTexure1,
            uStrength:0.01,//0.01,
            uRadius:0.03,//0.03,
            uCenter:new Vec2(0, 0),//x, z
            indexs:new GLArray(waterInfoPlan.indexs)
        }
        let waterDropProgram = new WebGL(s._gl, waterInfo, waterInfoDropFrag);
        waterDropProgram.resize(s.width, s.height)
        waterDropProgram.bindData(waterDropData);
        waterDropProgram.enableUseFrameBuffer(waterInfoTexure2);
        waterDropProgram.onRenderFun(()=>{
            waterInfoTexure1.swapTexture(waterInfoTexure2)
        })
        function addDrop(x, y){
            let pos = waterDropData.uCenter as Vec2;
            pos.set(0, x);
            pos.set(1, y);
            waterDropProgram.render();
        }
        for (var i = 0; i < 20; i++) {
            addDrop(Math.random() * 2 - 1, Math.random() * 2 - 1);
        }

        //更新水面的信息
        let waterUpdateData:ShaderParamData = {
            aPos:new GLArray(waterInfoPlan.vertext),
            uTexture:waterInfoTexure1,
            uSize:new GLArray([1/waterInfoTexure1.width, 1/waterInfoTexure1.height]),
            indexs:new GLArray(waterInfoPlan.indexs)
        }
        let waterUpdateProgram = new WebGL(s._gl, waterInfo, waterInfoUpdateFrag);
        waterUpdateProgram.resize(s.width, s.height)
        waterUpdateProgram.bindData(waterUpdateData)
        waterUpdateProgram.enableUseFrameBuffer(waterInfoTexure2);
        waterUpdateProgram.onRenderFun(()=>{
            waterInfoTexure1.swapTexture(waterInfoTexure2)
        })
        s._programsFrameBuff.push(waterUpdateProgram)

        
        //更新水面的法线
        let waterNormalData:ShaderParamData = {
            aPos:new GLArray(waterInfoPlan.vertext),
            uTexture:waterInfoTexure1,
            uSize:new GLArray([1/waterInfoTexure1.width, 1/waterInfoTexure1.height]),
            indexs:new GLArray(waterInfoPlan.indexs)
        }
        let waterNormalProgram = new WebGL(s._gl, waterInfo, waterInfoNormalFrag);
        waterNormalProgram.resize(s.width, s.height)
        waterNormalProgram.bindData(waterNormalData)
        waterNormalProgram.enableUseFrameBuffer(waterInfoTexure2);
        waterNormalProgram.onRenderFun(()=>{
            waterInfoTexure1.swapTexture(waterInfoTexure2)
        })
        s._programsFrameBuff.push(waterNormalProgram)
        
        //焦散
        if(hasDerivatives)
        {
            let causticData:ShaderParamData = {
                aPos:new GLArray(waterSurfaceMesh.vertext),
                indexs:new GLArray(waterSurfaceMesh.indexs),
                uWater:waterInfoTexure1,
                uLightDir:lightDir,
                uSphereCenter:center,
                uSphereRadius:radius,
                drawType:DrawType.TRIANGLES,
                clearn:[ClearBufferMask.COLOR_BUFFER_BIT]
            }
            let causticsProgram = new WebGL(s._gl, causticsVert, causticsFrag);
            causticsProgram.resize(s.width, s.height)
            causticsProgram.bindData(causticData)
            causticsProgram.enableUseFrameBuffer(causticTexure);
            s._programsFrameBuff.push(causticsProgram)
        }
        
        //test 测试显示
        // let waterTestlData:ShaderParamData = {
        //     aPos:new GLArray(waterInfoPlan.vertext),
        //     uTexture:causticTexure,
        //     uMat:mvp,
        //     uSize:new GLArray([1/causticTexure.width, 1/causticTexure.height]),
        //     indexs:new GLArray(waterInfoPlan.indexs)
        // }
        // let waterTestlProgram = new WebGL(s._gl, testVert, testFrag);
        // waterTestlProgram.resize(s.width, s.height);
        // waterTestlProgram.bindData(waterTestlData);
        // s._programs.push(waterTestlProgram)

        //水池
        let cubeMesh = new CubeMesh();
        cubeMesh.indexs.splice(12, 6);//去掉顶部的顶点索引
        let cubeData:ShaderParamData = {
            aPos:new GLArray(cubeMesh.vertext),
            uMat:mvp,
            uSphereCenter:center,
            uSphereRadius:radius,
            uWater:waterInfoTexure1,
            uTiles:tiles,
            uLightDir:lightDir,
            uCaustic:causticTexure,
            indexs:new GLArray(cubeMesh.indexs),
            drawType:DrawType.TRIANGLES,
            enable:[ShaderEnableType.CULL_FACE, ShaderEnableType.DEPTH_TEST]
        }
        let cubeProgram = new WebGL(s._gl, cubeVert, cubeFrag);
        cubeProgram.resize(s.width, s.height)
        cubeProgram.bindData(cubeData)
        s._programs.push(cubeProgram)
        //水平面  上方
        let waterSurfaceUpData:ShaderParamData = {
            aPos:new GLArray(waterSurfaceMesh.vertext),
            uMat:mvp,
            uWater:waterInfoTexure1,
            uEye:new Vec3(0, -0.5, 4),
            uLightDir:lightDir,
            uTiles:tiles,
            uSphereCenter:center,
            uSphereRadius:radius,
            uSky:cube,
            indexs:new GLArray(waterSurfaceMesh.indexs),
            enable:[ShaderEnableType.CULL_FACE],
            cullFace:CullFaceMode.FRONT,
            drawType:DrawType.TRIANGLES
        }
        let waterSurfaceUpProgram = new WebGL(s._gl, waterSurfaceVert, waterSurfaceUpFrag);
        waterSurfaceUpProgram.resize(s.width, s.height)
        waterSurfaceUpProgram.bindData(waterSurfaceUpData)
        s._programs.push(waterSurfaceUpProgram)
        //水平面  下方
        let waterSurfaceDownData:ShaderParamData = {
            aPos:new GLArray(waterSurfaceMesh.vertext),
            uMat:mvp,
            uWater:waterInfoTexure1,
            uEye:new Vec3(0, -0.5, 4),
            uLightDir:lightDir,
            uTiles:tiles,
            uSphereCenter:center,
            uSphereRadius:radius,
            uSky:cube,
            indexs:new GLArray(waterSurfaceMesh.indexs),
            enable:[ShaderEnableType.CULL_FACE],
            cullFace:CullFaceMode.BACK,
            drawType:DrawType.TRIANGLES
        }
        let waterSurfaceDownProgram = new WebGL(s._gl, waterSurfaceVert, waterSurfaceDownFrag);
        waterSurfaceDownProgram.resize(s.width, s.height)
        waterSurfaceDownProgram.bindData(waterSurfaceDownData)
        s._programs.push(waterSurfaceDownProgram)
        
        
        
        //球体
        let sphereMesh = new SphereMesh(12);
        let sphereData:ShaderParamData = {
            aPos:new GLArray(sphereMesh.vertext),
            uMat:mvp,
            uSphereCenter:center,
            uSphereRadius:radius,
            uWater:waterInfoTexure1,
            indexs:new GLArray(sphereMesh.indexs),
            drawType:DrawType.TRIANGLES,
            // enable:[ShaderEnableType.DEPTH_TEST]
        }
        let sphereProgram = new WebGL(s._gl, sphereVert, sphereFrag);
        sphereProgram.resize(s.width, s.height)
        sphereProgram.bindData(sphereData)
        s._programs.push(sphereProgram)

        s.update();
    }


    private update(){
        let s = this;
        let gl = s._gl;
        for(let i=0; i<s._programsFrameBuff.length; i++){
            s._programsFrameBuff[i].render();
        }
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.enable(gl.DEPTH_TEST);
        for(let i=0; i<s._programs.length; i++){
            s._programs[i].render();
        }
        gl.disable(gl.DEPTH_TEST);
        requestAnimationFrame(this.update.bind(s));
    }

    public resize(width:number, height:number){
        let s = this;
        s.width = 800;//width; 
        s.height = 800;//height;
        s._mainCanvas.width = width;
        s._mainCanvas.height = height;
        s._mainCanvas.style.width = width + "px";
        s._mainCanvas.style.height = height + "px";
        s._gl.viewport(0, 0, s.width, s.height);
        for(let i=0; i<s._programs.length; i++){
            s._programs[i].resize(s.width, s.height)
        }
        console.log("resize");


    }
}