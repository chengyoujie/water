import { Log } from "../utils/Log";
import { Vec } from "./Vec";

export abstract class Matrix{

    protected _size:number = 0;
    protected _data:number[] = [];

    constructor(size:2|3|4){
        this._size = size;
        this.identity();
    }

    /**
     * 重置矩阵， 对角线为1， 其他为0
     */
     public identity(){
        let s = this;
        let idx = 0;
        for(let row=0; row<s._size; row++){
            for(let col=0; col<s._size; col++){
                if(row == col)
                {
                    s._data[idx] = 1;
                }else{
                    s._data[idx] = 0;
                }
                idx ++;
            }
        }
        return s;
    }

    /**
     * 矩阵转置
     * 行和列互换
     */
    public transpose(){
        let s = this;
        let data = s._data;
        let idx1:number;
        let idx2:number;
        let temp:number;
        for(let row=0; row<s._size; row++){
            for(let col=row+1; col<s._size; col++){
                idx1 = row*s._size+col;
                idx2 = col*s._size+row;
                temp = data[idx1];
                data[idx1] = data[idx2];
                data[idx2] = temp; 
            }
        }
        return s;
    }
    
    /**
     * 矩阵相乘
     * @param matrix 
     */
    public multiply(matrix:Matrix, result?:Matrix){
        let s = this;
        result = result || Matrix.get(s._size);
        let left = s.data;
        let right = matrix.data;
        let idxLeft:number;
        let value = 0;
        let resultIdx = 0;
        for(let row=0; row<s._size; row++){
            idxLeft = row*s._size;
            for(let col=0; col<s._size; col++){
                value = 0;
                for(let m=0; m<s._size; m++){
                    value += left[idxLeft+m]*right[col+s._size*m]
                }
                result.data[resultIdx] = value;
                resultIdx ++;
            }
        }
        return result;
    }

    /**
     * 将点转换   vec2 = Mat*vec 并将vec2的最后一行化为1即向量的w为1
     * @param vec 
     * @returns 
     */
    transformPoint(vec:Vec){
        let s = this;
        if(s.size != vec.size){
            Log.warn("矩阵与向量不同size 不能相乘 matrix.size:"+s.size+" vec.size:"+vec.size);
            return;
        }
        let result:Vec = Vec.get(s.size);
        let idx:number = 0;
        for(let i=0; i<s._size; i++){
            let vecValue = 0;
            for(let j=0; j<s._size; j++){
                vecValue += s._data[idx]*vec.get(j);
                idx ++;
            }
            if(i==s._size-1){//最后一行
                result.divide(vecValue);
            }else{
                result.set(i, vecValue);
            }
        }
        return result;
    }

    /** 
     * 转换一个向量  向量的w=0
     * @param vec 
     */
    transformVector(vec:Vec){
        let s = this;
        if(s.size != vec.size){
            Log.warn("矩阵与向量不同size 不能相乘 matrix.size:"+s.size+" vec.size:"+vec.size);
            return;
        }
        let result:Vec = Vec.get(s.size);
        let idx:number = 0;
        for(let i=0; i<s._size; i++){
            if(i==s._size-1){//最后一行为0
                result.set(i, 0);
            }else{
                let vecValue = 0;
                for(let j=0; j<s._size; j++){
                    vecValue += s._data[idx]*vec.get(j);
                    idx ++;
                }
                result.set(i, vecValue);
            }
        }
        return result;
    }

    /**
     * 求矩阵的逆
     */
    public invert(result?:Matrix){
        let s = this;
        result = result || Matrix.get(s.size);
        let adjointMat = s.adjoint(result);
        let det = s.det(s._data, s._size);
        let idx:number = 0;
        for(let row=0; row<s._size; row++){
            for(let col=0; col<s._size; col++){
                result.data[idx] = adjointMat.data[idx]/det;
                idx++;
            }
        }
        return result;
    }


    /**测试用，后面要删掉 */
    public test(){
        let s= this;
        return s.adjoint();
    }

    /**求行列式的值 */
    private det(data:number[], size:number){
        if(size>3){
            let result = 0;
            let tempArr = [];
            //取第0行的col列计算行列式的值
            for(let col=0; col<size; col++){
                tempArr.length = 0;
                let idx = 0;
                for(let i=0; i<data.length; i++)
                {
                    if(i%size==col || Math.floor(i/size)==0)continue;
                    tempArr[idx] = data[i];
                    idx ++;
                }
                result += data[col]*Math.pow(-1, col)*this.det(tempArr, size-1);
            }
            return result;
        }else if(size == 3){
            return   data[0]*data[4]*data[8] 
                    +data[1]*data[5]*data[6] 
                    +data[2]*data[3]*data[7] 
                    -data[2]*data[4]*data[6]
                    -data[0]*data[5]*data[7]
                    -data[1]*data[3]*data[8]
        }else if(size == 2){
            return data[0]*data[3]-data[1]*data[2];
        }else if(size == 1){
            return data[0];
        }
        return 0;
    }

    /**
     * 伴随矩阵
     */
    private adjoint(result?:Matrix){
        let s = this;
        result = result || Matrix.get(s._size);
        if(result.size != result.size)
        {
            Log.warn("计算伴随矩阵是 保存结果的矩阵大小不一致");
            return;
        }
        for(let row=0; row<s._size; row++){
            for(let col=0; col<s._size; col++){
                let tempArr = [];
                for(let i=0; i<s._data.length; i++)
                {
                    if(i%s._size==col || Math.floor(i/s._size)==row)continue;
                    tempArr.push(s._data[i]);
                }
                result.data[col*s._size+row] = Math.pow(-1, row+col)*this.det(tempArr, s._size-1);
            }
        }
        return result;
    }

    /**
     * 设置矩阵中的数据
     * @param row 索引从1开始
     * @param col 索引从1开始
     * @param value 
     * @returns 
     */
    public set(row:number, col:number, value:number){
        let s = this;
        if(row>s._size || col >s._size)return;
        let idx = (row-1)*s._size+(col-1);
        this._data[idx] = value;
    }


    /**
     * 获取矩阵中的数据
     * @param row 索引从1开始
     * @param col 索引从1开始
     * @returns 
     */
    public get (row:number, col:number){
        let s = this;
        if(row>s._size || col >s._size)return;
        let idx = (row-1)*s._size+(col-1);
        return this._data[idx];
    }

    /**
     * 将矩阵转换成字符串的形式
     * @returns 
     */
    public toString(){
        let s = this;
        let str = "";
        let fillLen = 0;//非最后一行的最长长度
        let lastLine = 0;//最后一行的最长长度
        let col = 0;
        for(let i=0; i<s._data.length; i++)
        {
            let strLen = (s._data[i]+"").length;
            if(i%s._size - 1)lastLine = Math.max(lastLine, strLen);
            else fillLen = Math.max(fillLen, strLen);
        }
        fillLen += 1;
        for(let i=0; i<s._data.length; i++){
            col = i%s._size;
            if(col==0){
                str += "|"+s.fillStr(s._data[i], fillLen);
            }else if(col==s._size-1){
                str += s.fillStr(s._data[i], lastLine)+"|";
                if(i!=s._data.length-1)str += "\n";
            }else{
                str += s.fillStr(s._data[i], fillLen);
            }
        }
        return str;
    }

    /**用空格填充文本长度 */
    private fillStr(str:string|number, size:number){
        str = str+"";
        for(let i=str.length; i<size; i++){
            str += " ";
        }
        return str;
    }
    /**矩阵的原始数据 */
    public get data(){
        return this._data;
    }
    /**矩阵的大小 */
    public get size(){
        return this._size;
    }

    private static _matrixDic:{[size:number]:{new(...args):Matrix}} = {};
    /**
     * 获取一个矩阵
     * @param size 
     * @returns 
     */
    public static get(size:number){
        return new Matrix._matrixDic[size];
    }

    public static regist(size:number, matCls:{new(...args):Matrix}){
        Matrix._matrixDic[size] = matCls;
    }

}