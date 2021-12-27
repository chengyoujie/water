import { Matrix } from "./math/Matrix";
import { Matrix4 } from "./math/Matrix4";
import { Log } from "./utils/Log";

export class App{
    public width:800;
    public height:800;

    constructor(){
        this.init();
    }

    private init(){
        let mat = new Matrix4();
        for(let i=0; i<16; i++)
            mat.data[i] = (1+i%9);
        // mat.set(1, 1, 2);
        // mat.set(1,2, 3);
        // mat.set(0,2, 4);
        // mat.set(0,3, 8);
        //转置
        // Log.log(mat.toString());
        // mat.transpose();
        // Log.log(mat.toString());
        //相乘
        let mat2 = new Matrix4();
        for(let i=0; i<16; i++)
            mat2.data[i] = (9-i%9);
        let mat3 = mat.multiply(mat2, new Matrix4())
        Log.log(mat+"\n*\n"+mat2+"\n = \n"+mat3)

    }
}