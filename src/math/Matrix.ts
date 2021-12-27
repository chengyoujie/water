import { Matrix2 } from "./Matrix2";
import { Matrix3 } from "./Matrix3";
import { Matrix4 } from "./Matrix4";

export abstract class Matrix{

    protected _size:number = 0;
    protected _data:number[] = [];

    constructor(size:2|3|4){
        this._size = size;
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
    public multiply(matrix:Matrix, result:Matrix){
        let s = this;
        result = result;
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

    public get data(){
        return this._data;
    }

    /**
     * 获取一个矩阵
     * @param size 
     * @returns 
     */
    public static get(size:number){
        if(size==2)return new Matrix2();
        if(size==3)return new Matrix3();
        if(size==4)return new Matrix4();
    }

}