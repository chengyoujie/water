import { Matrix } from "./Matrix";

export class Matrix2 extends Matrix<Matrix2>{
    constructor(){
        super(2);
    }
    
}
Matrix.regist(2, Matrix2);