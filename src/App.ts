import { Matrix } from "./math/Matrix";
import { Matrix3 } from "./math/Matrix3";
import { Matrix4 } from "./math/Matrix4";
import { Log } from "./utils/Log";

export class App{
    public width:800;
    public height:800;

    constructor(){
        this.init();
    }

    private init(){
        // let mat = new Matrix4();
        // for(let i=0; i<16; i++)
        //     mat.data[i] = (1+i%9);
        // mat.set(1, 1, 2);
        // mat.set(1,2, 3);
        // mat.set(0,2, 4);
        // mat.set(0,3, 8);
        //转置
        // Log.log(mat.toString());
        // mat.transpose();
        // Log.log(mat.toString());
        //相乘
        // let mat2 = new Matrix4();
        // for(let i=0; i<16; i++)
        //     mat2.data[i] = (9-i%9);
        // let mat3 = mat.multiply(mat2, new Matrix4())
        // Log.log(mat+"\n*\n"+mat2+"\n = \n"+mat3)
        //求逆
        // let mat4 = new Matrix4();
        // let a  = [3, 0, 2, 2,  
        //           2, 8, -2, 1,
        //           1, 5, 5, 2,
        //           1, 2, 1, 2];

        let mat4 = new Matrix3();
        let a  = [3, 0, 2,   
                  2, 8, -2,
                  1, 5, 5];

        // for(let i=1; i<=16; i++)mat4.data[i-1] = i;
        for(let i=0; i<a.length; i++)mat4.data[i] = a[i];
        console.log("余子式： \n"+mat4.test())
        console.log(mat4+"")
        let mat5 = mat4.invert();
        console.log("结果：\n"+mat5)
        console.log("相乘：\n"+mat5.multiply(mat4))
    }
}