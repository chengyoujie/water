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
import waterInfoSpherelFrag from "./shader/waterInfoSphere.frag"
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
import { ClearBufferMask, CullFaceMode, DataType, DrawType, PixelFormat, ShaderEnableType, TextureMagFilter, TextureMinFilter, TextureWrapMode } from "./webgl/WebGLInterface";
import { Texture } from "./webgl/Texture";
import { Vec2 } from "./math/Vec2";
import { Raytracer } from "./swaming/Raytracer";
import { Matrix4 } from "./math/Matrix4";

export class App{
    public width:number;
    public height:number;
    private _mainCanvas:HTMLCanvasElement;
    private _gl:WebGLRenderingContext;
    private _programs:WebGL[] = [];
    private _programsFrameBuff:WebGL[] = [];
    public matrixContext:MatrixContext;
    private _images:{[name:string]:TexImageSource} = {};
    public ratio = 1;
    //渲染变量
    private _sphereCenter:Vec3;
    private _sphereOldCenter:Vec3;
    private _sphereRadius:number;

    private _waterDropData:ShaderParamData;
    private _waterDropProgram:WebGL;
    private _angleX:number = -87;
    private _angleY:number = -181;

    private _mvpMatrix:Matrix4;
    private _eye:Vec3;


    constructor(mainCanvas:HTMLCanvasElement, width:number, height:number, ratio?:number){
        let s = this;
        s._mainCanvas = mainCanvas;
        s.ratio = ratio ||1;
        s._gl = s._mainCanvas.getContext("webgl");
        s.matrixContext = new MatrixContext(s._gl);
        s.resize(width, height);
    }

    public statr(){
        ComUtils.loadImages([
            {name:"xpos", src:xpos}, {name:"ypos", src:ypos}, {name:"zpos", src:zpos}, 
            {name:"xneg", src:xneg}, {name:"zneg", src:zneg}, 
            {name:"tiles", src:tilesImg}
        ]).then((imgs:any)=>{
            for(let i=0; i<imgs.length; i++)this._images[imgs[i].name] = imgs[i].img;
            this.init();
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
        s.matrixContext.translate(0, 0, -4);
        s.matrixContext.rotate(-s._angleX, 1, 0, 0);
        s.matrixContext.rotate(-s._angleY, 0, 1, 0);
        s.matrixContext.translate(0, 0.5, 0)

        //全局变量
        s._sphereCenter = new Vec3(-0.4, -0.75, 0.2);
        s._sphereOldCenter = s._sphereCenter.clone() as Vec3;
        s._sphereRadius = 0.25;
        s._eye = new Vec3(0.0036560758674491246, 3.4975610107321784, -0.13961990474388142);
        let lightDir = new Vec3(2.0, 2.0, -1.0).unit();

        s._mvpMatrix = s.matrixContext.projectionMatrix.multiply(s.matrixContext.modelViewMatrix);
        s._mvpMatrix.transpose();//需要转置下 

        //水的信息（包含位置，速度， 法向量）waterInfo
        let waterInfoPlan = new PlaneMesh();
        let hasDerivatives = !!gl.getExtension("OES_standard_derivatives");
        //Texure的Float 和 LINEAR 要设置下，否则显示效果有问题
        let filter = !!gl.getExtension('OES_texture_float_linear')?TextureMagFilter.LINEAR:TextureMagFilter.NEAREST;
        let waterInfoTexure1:Texture = new Texture(s._gl, 256, 256, {type:DataType.FLOAT, filter:filter});
        let waterInfoTexure2:Texture = new Texture(s._gl, 256, 256, {type:DataType.FLOAT, filter:filter});
        let causticTexure:Texture = new Texture(gl, 1024, 1024);
        let waterSurfaceMesh = new PlaneMesh(200, 200);
        let tiles:Texture = new Texture(gl, tilesImg, {wrap:TextureWrapMode.REPEAT, filterMig:TextureMinFilter.LINEAR, format:PixelFormat.RGB});
        let cube = new CubeMap(gl, s._images["xpos"], s._images["xneg"], s._images["ypos"], s._images["ypos"], s._images["zpos"], s._images["zneg"], {
            filter:TextureMagFilter.LINEAR, wrap:TextureWrapMode.CLAMP_TO_EDGE, format:PixelFormat.RGB
        })
        /** */
        //添加水面的波纹
        s._waterDropData = {
            aPos:new GLArray(waterInfoPlan.vertext),
            indexs:new GLArray(waterInfoPlan.indexs),
            uTexture:waterInfoTexure1,
            uStrength:0.01,//0.01,
            uRadius:0.03,//0.03,
            uCenter:new Vec2(0, 0),//x, z
        }
        s._waterDropProgram = new WebGL(s._gl, waterInfo, waterInfoDropFrag);
        s._waterDropProgram.resize(s.width, s.height)
        s._waterDropProgram.bindData(s._waterDropData);
        s._waterDropProgram.enableUseFrameBuffer(waterInfoTexure2);
        s._waterDropProgram.onRenderFun(()=>{
            waterInfoTexure1.swapTexture(waterInfoTexure2)
        })
        
        for (var i = 0; i < 20; i++) {
            s.addDrop(Math.random() * 2 - 1, Math.random() * 2 - 1, 0.03, 0.01);
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
        
        //更新水面中球体的信息
        let waterSphereData:ShaderParamData = {
            aPos:new GLArray(waterInfoPlan.vertext),
            indexs:new GLArray(waterInfoPlan.indexs),
            uTexture:waterInfoTexure1,
            uOldSphereCenter:s._sphereOldCenter,//旧的圆心坐标
            uNewSphereCenter:s._sphereCenter,//新的圆心坐标
            uSphereRadius:s._sphereRadius,//圆的半径
        }
        let waterSphereProgram = new WebGL(s._gl, waterInfo, waterInfoSpherelFrag);
        waterSphereProgram.resize(s.width, s.height);
        waterSphereProgram.bindData(waterSphereData);
        waterSphereProgram.enableUseFrameBuffer(waterInfoTexure2);
        waterSphereProgram.onRenderFun(()=>{
            waterInfoTexure1.swapTexture(waterInfoTexure2);
            s._sphereOldCenter.copy(s._sphereCenter);
        })
        s._programsFrameBuff.push(waterSphereProgram);

        //焦散
        if(hasDerivatives)
        {
            let causticData:ShaderParamData = {
                aPos:new GLArray(waterSurfaceMesh.vertext),
                indexs:new GLArray(waterSurfaceMesh.indexs),
                uWater:waterInfoTexure1,
                uLightDir:lightDir,
                uSphereCenter:s._sphereCenter,
                uSphereRadius:s._sphereRadius,
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
        //     aPos:new GLArray(waterSurfaceMesh.vertext),
        //     indexs:new GLArray(waterSurfaceMesh.indexs),
        //     uTexture:causticTexure,
        //     uMat:s._mvpMatrix,
        //     uSize:new GLArray([1/causticTexure.width, 1/causticTexure.height]),
        //     // drawType:DrawType.LINES
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
            uMat:s._mvpMatrix,
            uSphereCenter:s._sphereCenter,
            uSphereRadius:s._sphereRadius,
            uWater:waterInfoTexure1,
            uTiles:tiles,
            uLightDir:lightDir,
            uCaustics:causticTexure,
            indexs:new GLArray(cubeMesh.indexs),
            enable:[ShaderEnableType.CULL_FACE]
        }
        let cubeProgram = new WebGL(s._gl, cubeVert, cubeFrag);
        cubeProgram.resize(s.width, s.height)
        cubeProgram.bindData(cubeData)
        s._programs.push(cubeProgram)
        //水平面  上方
        let waterSurfaceUpData:ShaderParamData = {
            aPos:new GLArray(waterSurfaceMesh.vertext),
            uMat:s._mvpMatrix,
            uWater:waterInfoTexure1,
            uEye:s._eye,
            uLightDir:lightDir,
            uTiles:tiles,
            uCausitcs:causticTexure,
            uSphereCenter:s._sphereCenter,
            uSphereRadius:s._sphereRadius,
            uSky:cube,
            indexs:new GLArray(waterSurfaceMesh.indexs),
            enable:[ShaderEnableType.CULL_FACE],
            cullFace:CullFaceMode.FRONT,
        }
        let waterSurfaceUpProgram = new WebGL(s._gl, waterSurfaceVert, waterSurfaceUpFrag);
        waterSurfaceUpProgram.resize(s.width, s.height)
        waterSurfaceUpProgram.bindData(waterSurfaceUpData)
        s._programs.push(waterSurfaceUpProgram)
        //水平面  下方
        let waterSurfaceDownData:ShaderParamData = {
            aPos:new GLArray(waterSurfaceMesh.vertext),
            uMat:s._mvpMatrix,
            uWater:waterInfoTexure1,
            uEye:s._eye,
            uLightDir:lightDir,
            uTiles:tiles,
            uCausitcs:causticTexure,
            uSphereCenter:s._sphereCenter,
            uSphereRadius:s._sphereRadius,
            uSky:cube,
            indexs:new GLArray(waterSurfaceMesh.indexs),
            enable:[ShaderEnableType.CULL_FACE],
            cullFace:CullFaceMode.BACK,
        }
        let waterSurfaceDownProgram = new WebGL(s._gl, waterSurfaceVert, waterSurfaceDownFrag);
        waterSurfaceDownProgram.resize(s.width, s.height)
        waterSurfaceDownProgram.bindData(waterSurfaceDownData)
        s._programs.push(waterSurfaceDownProgram)
        
        
        
        //球体
        let sphereMesh = new SphereMesh(15);
        let sphereData:ShaderParamData = {
            aPos:new GLArray(sphereMesh.vertext),
            uMat:s._mvpMatrix,
            uSphereCenter:s._sphereCenter,
            uSphereRadius:s._sphereRadius,
            uLightDir:lightDir,
            uCaustics:causticTexure,
            uWater:waterInfoTexure1,
            indexs:new GLArray(sphereMesh.indexs),
            // drawType:DrawType.LINES,
        }
        let sphereProgram = new WebGL(s._gl, sphereVert, sphereFrag);
        sphereProgram.resize(s.width, s.height)
        sphereProgram.bindData(sphereData)
        s._programs.push(sphereProgram)

        s.update();
    }

    /**给水面添加一个波动 */
    private addDrop(x:number, y:number, streng:number, radius:number){
        let s = this;
        let pos = s._waterDropData.uCenter as Vec2;
        pos.set(0, x);
        pos.set(1, y);
        s._waterDropData.uStrength = streng;
        s._waterDropData.uRadius = radius;
        s._waterDropProgram.render();
    }

    /**更新界面 */
    private update(){
        let s = this;
        let gl = s._gl;
        for(let i=0; i<s._programsFrameBuff.length; i++){
            s._programsFrameBuff[i].render();
        }
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.enable(gl.DEPTH_TEST);
        
        s.matrixContext.indentity();
        s.matrixContext.translate(0, 0, -4);
        s.matrixContext.rotate(-s._angleX, 1, 0,0);
        s.matrixContext.rotate(-s._angleY, 0, 1, 0);
        s.matrixContext.translate(0, 0.5, 0);

        let mvp = s.matrixContext.projectionMatrix.multiply(s.matrixContext.modelViewMatrix);
        mvp.transpose();//需要转置下 
        s._mvpMatrix.copy(mvp)

        // console.log("angleX: "+s._angleX+" angleY: "+s._angleY);
        // console.log(mvp.toString())

        for(let i=0; i<s._programs.length; i++){
            // if(s._programs[i].renderData["uMat"])s._programs[i].renderData["uMat"] = mvp;
            s._programs[i].render();
        }
        gl.disable(gl.DEPTH_TEST);
        requestAnimationFrame(this.update.bind(s));
    }

    public resize(width:number, height:number){
        let s = this;
        // width = 800;
        // height = 800;
        height =width;// = Math.min(width, height);//等比例缩放
        s.width = width*s.ratio;//width; 
        s.height = height*s.ratio;//height;
        s._mainCanvas.width = s.width;
        s._mainCanvas.height = s.height;
        s._mainCanvas.style.width = width + "px";
        s._mainCanvas.style.height = height + "px";
        s._gl.viewport(0, 0, s.width, s.height);
        for(let i=0; i<s._programs.length; i++){
            s._programs[i].resize(s.width, s.height)
        }
    }

    private _oldTouchX:number = 0;
    private _oldTouchY:number = 0;
    private _touchTarget:TouchTarget;
    private _prevHit:Vec3;
    private _planeNormal:Vec3;
    public onTouchStart(mouseX:number, mouseY:number){
        let s = this;;
        s._oldTouchX = mouseX;
        s._oldTouchY = mouseY;
        let tracer = new Raytracer(s._gl, s.matrixContext);
        s._eye.copy(tracer.eye);
        let ray = tracer.getRayForPixel(mouseX*s.ratio, mouseY*s.ratio);
        let pointOnPlane = tracer.eye.clone().add(ray.clone().multiply(-tracer.eye.get(1) / ray.get(1)));
        let sphereHitTest = Raytracer.hitTestSphere(tracer.eye, ray, s._sphereCenter, s._sphereRadius);
        if(sphereHitTest){
            s._touchTarget = TouchTarget.Sphere;
            s._prevHit = sphereHitTest.hit;
            s._planeNormal = tracer.getRayForPixel(s.width/2, s.height/2).negative();
            console.log("点击球")
        }else if(Math.abs(pointOnPlane.get(0))<1 && Math.abs(pointOnPlane.get(2))<1 ){
            s._touchTarget = TouchTarget.Water;
            s.onToucheMove(mouseX, mouseY);
            console.log("点击水面")
        }else{
            console.log("点击cube")
            s._touchTarget = TouchTarget.Cube;
        }
    }

    public onToucheMove(mouseX:number, mouseY:number){
        let s = this;
        let tracer:Raytracer;
        let ray:Vec3;
        switch(s._touchTarget){
            case TouchTarget.Water:
                tracer = new Raytracer(s._gl, s.matrixContext);
                ray = tracer.getRayForPixel(mouseX*s.ratio, mouseY*s.ratio);
                let pointOnPlane = tracer.eye.clone().add(ray.clone().multiply(-tracer.eye.get(1) / ray.get(1)));
                s.addDrop(pointOnPlane.get(0), pointOnPlane.get(2), 0.03, 0.01);
            break;
            case TouchTarget.Sphere:
                tracer = new Raytracer(s._gl, s.matrixContext);
                ray = tracer.getRayForPixel(mouseX*s.ratio, mouseY*s.ratio);
                let t = -s._planeNormal.clone().dot(tracer.eye.clone().subtract(s._prevHit)) / s._planeNormal.clone().dot(ray);
                let nextHit = tracer.eye.clone().add(ray.clone().multiply(t)) as Vec3;
                s._sphereCenter.add(nextHit.clone().subtract(s._prevHit));
                s._sphereCenter.set(0, Math.max(s._sphereRadius-1, Math.min(1-s._sphereRadius, s._sphereCenter.get(0))));
                s._sphereCenter.set(1, Math.max(s._sphereRadius-1, Math.min(10, s._sphereCenter.get(1))));
                s._sphereCenter.set(2, Math.max(s._sphereRadius-1, Math.min(1-s._sphereRadius, s._sphereCenter.get(2))));
                console.log(s._sphereCenter+"")
                s._prevHit = nextHit;
            break;
            case TouchTarget.Cube:
                tracer = new Raytracer(s._gl, s.matrixContext);
                s._eye.copy(tracer.eye);
                s._angleY -= mouseX - s._oldTouchX;
                s._angleX -= mouseY - s._oldTouchY;
                s._angleX = Math.max(-89.999, Math.min(89.9999, s._angleX));
            break;
        }
        s._oldTouchX = mouseX;
        s._oldTouchY = mouseY;
    }

    public onToucheEnd(){
        let s = this;
        let tracer = new Raytracer(s._gl, s.matrixContext);
        s._eye.copy(tracer.eye);
        s._touchTarget = TouchTarget.None;
    }
}

const enum TouchTarget{
    None = 0,
    Cube = 1,
    Water = 2,
    Sphere = 3,

}