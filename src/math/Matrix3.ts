import { Matrix } from "./Matrix";

export class Matrix3 extends Matrix<Matrix3>{
    constructor(){
        super(3);
    }
    
}
Matrix.regist(3, Matrix3);