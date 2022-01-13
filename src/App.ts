import { GLArray } from "./utils/GLArray";
import { DrawType, ShaderParamData, WebGL } from "./webgl/WebGL";

import cubeFrag from "./shader/cube.frag"
import cubeVert from "./shader/cube.vert"
import sphereFrag from "./shader/sphere.frag"
import sphereVert from "./shader/sphere.vert"
import xneg from "./res/xneg.jpg"
import zneg from "./res/zneg.jpg"
import xpos from "./res/xpos.jpg"
import ypos from "./res/ypos.jpg"
import zpos from "./res/zpos.jpg"
import tiles from "./res/tiles.jpg"
import { ComUtils } from "./utils/ComUtils";
import { CubeMap } from "./webgl/CubeMap";
import { MatrixContext, MatrixStatusType } from "./swaming/MartixContext";
import { PlaneMesh } from "./swaming/mesh/PlaneMesh";
import { SphereMesh } from "./swaming/mesh/SphereMesh";
import { CubeMesh } from "./swaming/mesh/CubeMesh";
import { Vec3 } from "./math/Vec3";

export class App{
    public width:number;
    public height:number;
    private _mainCanvas:HTMLCanvasElement;
    private _gl:WebGLRenderingContext;
    private _programs:WebGL[] = [];
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
            {name:"tiles", src:tiles}
        ]).then((imgs:any)=>{
            for(let i=0; i<imgs.length; i++)this._images[imgs[i].name] = imgs[i].img;
            this.init();
            console.log(imgs)
        })
    }

    private init(){
        let s = this;

        s.matrixContext.status = MatrixStatusType.Project;
        s.matrixContext.indentity();
        s.matrixContext.perspective(45, s.width/s.height, 0.01, 100);
        // s.matrixContext.lookAt(0.0, 0.0, 7.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0);
        s.matrixContext.status = MatrixStatusType.ModelView;

        s.matrixContext.indentity();
        let angle = 0;
        s.matrixContext.translate(0, 0, -6);
        s.matrixContext.rotate(angle, 1, 0, 0);
        s.matrixContext.rotate(angle, 0, 1, 0);
        s.matrixContext.translate(0, 0.5, 0)

        // s.matrixContext.translate(0, 0, -20)
        //全局变量
        let center = new Vec3(-0.4, -0.75, 0.2);
        let oldCenter = center;
        let radius = 0.25;
        let lightDir = new Vec3(2.0, 2.0, -1.0);

        let mvp = s.matrixContext.projectionMatrix.multiply(s.matrixContext.modelViewMatrix);
        mvp.transpose();//需要转置下
        console.log(mvp.data)

        //水池
        let cube = new CubeMap();
        cube.negX = s._images["xneg"];
        cube.posX = s._images["xpos"];
        cube.negY = s._images["yneg"];
        cube.posY = s._images["ypos"];
        cube.negZ = s._images["zneg"];
        cube.posZ = s._images["zpos"];
        let cubeMesh = new CubeMesh();
        cubeMesh.indexs.splice(12, 6);//去掉顶部的顶点

        let cubeData:ShaderParamData = {
            aPos:new GLArray(cubeMesh.vertext),
            uMat:mvp,
            uCube:cube,
            uTiles:tiles,
            indexs:new GLArray(cubeMesh.indexs),
            drawType:DrawType.TRIANGLES
        }
        let cubeProgram = new WebGL(s._gl, cubeVert, cubeFrag);
        cubeProgram.resize(s.width, s.height)
        cubeProgram.bindData(cubeData)
        s._programs.push(cubeProgram)

        //球体
        let sphereMesh = new SphereMesh(12);
        let sphereData:ShaderParamData = {
            aPos:new GLArray(sphereMesh.vertext),
            uMat:mvp,
            uSphereCenter:center,
            uSphereRadius:radius,
            indexs:new GLArray(sphereMesh.indexs),
            drawType:DrawType.TRIANGLES
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
        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.enable(gl.DEPTH_TEST);
        gl.enable(gl.CULL_FACE);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
        for(let i=0; i<s._programs.length; i++){
            s._programs[i].render();
        }
        gl.disable(gl.DEPTH_TEST);
        gl.disable(gl.CULL_FACE);
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