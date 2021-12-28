import { Log } from "../utils/Log";

export abstract class Vec{

    private _size:number = 0;

    private _data:number[] = [];

    constructor(size:number){
        this._size = size;
        Vec._vecDic[size] = this;
    }

    /**
     * 向量除以某个值或者某个同size的向量
     * @param vec 
     */
    public divide(vec:Vec|number){
        let s = this;
        if(typeof vec == "number"){
            for(let i=0; i<s._size; i++){
                s._data[i] = s._data[i]/vec;
            }
        }else{
            if(vec.size != s._size){
                Log.warn("两个不同的向量不能相除 ");
                return;
            }
            for(let i=0; i<s._size; i++){
                s._data[i] = s._data[i]/vec.get(i);
            }
        }
        return s;
    }

    public set(index:number, value:number){
        let s = this;
        if(index>=s._size)return;
        s._data[index] = value;
    }

    public get (index:number){
        let s = this;
        if(index>=s._size)return null;
        return s._data[index];
    }

    
    /**向量的原始数据 */
    public get data(){
        return this._data;
    }
    /**向量的大小 */
    public get size(){
        return this._size;
    }

    private static _vecDic:{[size:number]:Vec} = {};
    /**
     * 获取对应维度的向量
     * @param size 
     * @returns 
     */
    public static get(size:number){
        return Vec._vecDic[size];
    }

}