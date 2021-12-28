import { Matrix } from "./Matrix";

export class Matrix4 extends Matrix{
    constructor(){
        super(4);
    }

}
Matrix.regist(4, Matrix4);