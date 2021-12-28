import { Matrix } from "./Matrix";

export class Matrix2 extends Matrix{
    constructor(){
        super(2);
    }
    
}
Matrix.regist(2, Matrix2);