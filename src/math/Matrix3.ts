import { Matrix } from "./Matrix";

export class Matrix3 extends Matrix{
    constructor(){
        super(3);
    }
    
}
Matrix.regist(3, Matrix3);