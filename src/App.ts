import { GLArray } from "./utils/GLArray";
import { DrawType, ShaderParamData, WebGL } from "./webgl/WebGL";
import testFrag from "./shader/test.frag"
import testVert from "./shader/test.vert"
import meshFrag from "./shader/mesh.frag"
import meshVert from "./shader/mesh.vert"
import { Matrix4 } from "./math/Matrix4";
import xneg from "./res/xneg.jpg"
import zneg from "./res/zneg.jpg"
import xpos from "./res/xpos.jpg"
import ypos from "./res/ypos.jpg"
import zpos from "./res/zpos.jpg"
import { ComUtils } from "./utils/ComUtils";
import { CubeMap } from "./webgl/CubeMap";
import { Matrix } from "./math/Matrix";
import { MatrixContext, MatrixStatusType } from "./swaming/MartixContext";
import { PlaneMesh } from "./swaming/mesh/PlaneMesh";
import { SphereMesh } from "./swaming/mesh/SphereMesh";

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
        ]).then((imgs:any)=>{
            for(let i=0; i<imgs.length; i++)this._images[imgs[i].name] = imgs[i].img;
            this.init();
            console.log(imgs)
        })
    }

    private init(){
        let s = this;
        let vert:GLArray = new GLArray([
                1, 1, 1,  -1, 1, 1,  -1,-1, 1,   1,-1, 1,    // v0-v1-v2-v3 front
                1, 1, 1,   1,-1, 1,   1,-1,-1,   1, 1,-1,    // v0-v3-v4-v5 right
                1, 1, 1,   1, 1,-1,  -1, 1,-1,  -1, 1, 1,    // v0-v5-v6-v1 up
                -1, 1, 1,  -1, 1,-1,  -1,-1,-1,  -1,-1, 1,    // v1-v6-v7-v2 left
                -1,-1,-1,   1,-1,-1,   1,-1, 1,  -1,-1, 1,    // v7-v4-v3-v2 down
                1,-1,-1,  -1,-1,-1,  -1, 1,-1,   1, 1,-1     // v4-v7-v6-v5 back
        ])
        // for(let i=0; i<vert.length; i++) if(i%3!=0)vert.setValue(i, vert.getValue(i)*0.5)
        let color:GLArray = new GLArray([
            0.4, 0.4, 1.0,  0.4, 0.4, 1.0,  0.4, 0.4, 1.0,  0.4, 0.4, 1.0,  // v0-v1-v2-v3 front
            0.4, 1.0, 0.4,  0.4, 1.0, 0.4,  0.4, 1.0, 0.4,  0.4, 1.0, 0.4,  // v0-v3-v4-v5 right
            1.0, 0.4, 0.4,  1.0, 0.4, 0.4,  1.0, 0.4, 0.4,  1.0, 0.4, 0.4,  // v0-v5-v6-v1 up
            1.0, 1.0, 0.4,  1.0, 1.0, 0.4,  1.0, 1.0, 0.4,  1.0, 1.0, 0.4,  // v1-v6-v7-v2 left
            1.0, 1.0, 1.0,  1.0, 1.0, 1.0,  1.0, 1.0, 1.0,  1.0, 1.0, 1.0,  // v7-v4-v3-v2 down
            0.4, 1.0, 1.0,  0.4, 1.0, 1.0,  0.4, 1.0, 1.0,  0.4, 1.0, 1.0   // v4-v7-v6-v5 back
        ]);

        s.matrixContext.status = MatrixStatusType.Project;
        s.matrixContext.indentity();
        s.matrixContext.perspective(45, s.width/s.height, 0.01, 100);
        s.matrixContext.status = MatrixStatusType.ModelView;

        s.matrixContext.indentity();
        let angle = 0;
        s.matrixContext.translate(0, 0, -4);
        s.matrixContext.rotate(angle, 1, 0, 0);
        s.matrixContext.rotate(angle, 0, 1, 0);
        s.matrixContext.translate(0, 0.5, 0)

        // s.matrixContext.translate(0, 0, -20)


        let mvp = s.matrixContext.projectionMatrix.multiply(s.matrixContext.modelViewMatrix);
        console.log(mvp.data)
        let cube = new CubeMap();
        cube.negX = s._images["xneg"];
        cube.posX = s._images["xpos"];
        cube.negY = s._images["yneg"];
        cube.posY = s._images["ypos"];
        cube.negZ = s._images["zneg"];
        cube.posZ = s._images["zpos"];
        let idx = new GLArray([
                        0, 1, 2,   0, 2, 3,    // front
                        4, 5, 6,   4, 6, 7,    // right
                        8, 9,10,   8,10,11,    // up
                       12,13,14,  12,14,15,    // left
                       16,17,18,  16,18,19,    // down
                       20,21,22,  20,22,23     // back
                    ])

        // let testData:ShaderParamData = {
        //     aPos:vert,
        //     aColor:color,
        //     uMat:mvp,
        //     uCube:cube,
        //     indexs:idx
        // }
        // let program = new WebGL(s._gl, testVert, testFrag);
        // program.resize(s.width, s.height)
        // program.bindData(testData)
        // s._programs.push(program)

        
        let mesh = new SphereMesh(10);

        let testMesh:ShaderParamData = {
            aPos:new GLArray(mesh.vertext),
            uMat:mvp,
            indexs:new GLArray(mesh.indexs),
            drawType:DrawType.LINES
        }
        let meshProgram = new WebGL(s._gl, meshVert, meshFrag);
        meshProgram.resize(s.width, s.height)
        meshProgram.bindData(testMesh)
        s._programs.push(meshProgram)


        s.update();
    }


    private update(){
        let s = this;
        let gl = s._gl;
        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        // gl.enable(gl.DEPTH_TEST);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
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