import { GLArray } from "./utils/GLArray";
import { ShaderParamData, WebGL } from "./webgl/WebGL";
import testFrag from "./shader/test.frag"
import testVert from "./shader/test.vert"
import { Matrix4 } from "./math/Matrix4";

export class App{
    public width:number;
    public height:number;
    private _mainCanvas:HTMLCanvasElement;
    private _gl:WebGLRenderingContext;
    private _programs:WebGL[] = [];
    

    constructor(mainCanvas:HTMLCanvasElement, width:number, height:number){
        let s = this;
        s._mainCanvas = mainCanvas;
        s._gl = s._mainCanvas.getContext("webgl");
        s.resize(width, height);
        s.init();
    }

    private init(){
        let s = this;
        let vert:GLArray = new GLArray([
                1.0, 1.0, 1.0,      
               -1.0, 1.0, 1.0,      
               -1.0, -1.0, 1.0,     
               1.0, -1.0, 1.0,      

               1.0, 1.0, -1.0,      
               -1.0, 1.0, -1.0,     
               -1.0, -1.0, -1.0,    
               1.0, -1.0, -1.0,     
        ])
        for(let i=0; i<vert.length; i++){
            vert.setValue(i, vert.getValue(i)*0.5)
        }
        let color:GLArray = new GLArray([
            1.0, 0.0, 0.0,
            0.0, 0.5, 0.0,
            1.0, 1.0, 1.0,
            0.5, 0.0, 0.0,
             1.0, 0.0, 0.0,
             0.0, 0.5, 0.0,
             1.0, 1.0, 1.0,
             0.5, 0.0, 0.0
        ]);

        let mat = new Matrix4();
        mat.scale(0.1, 0.5, 0.5)

        let testData:ShaderParamData = {
            aPos:vert,
            aColor:color,
            mat:mat,
            indexs:new GLArray(
                [
                    0, 1, 2,    0,2,3,//前
                    0, 1, 5,    0,5,4,//上
                    0,4,7,      0,7,3,//右
                    1,2,6,      1,6,5,//左
                    2,6,7,      2,7,3,//下
                    5,6,7,      5,7,4,//后
                ])
        }
        let program = new WebGL(s._gl, testVert, testFrag);
        program.bindData(testData)
        s._programs.push(program)
        s.update();
    }

    private update(){
        let s = this;
        for(let i=0; i<s._programs.length; i++){
            s._programs[i].render();
        }
        requestAnimationFrame(this.update.bind(s));
    }

    public resize(width:number, height:number){
        let s = this;
        s.width = width; 
        s.height = height;
        s._mainCanvas.width = width;
        s._mainCanvas.height = height;
        s._mainCanvas.style.width = width + "px";
        s._mainCanvas.style.height = height + "px";


    }
}