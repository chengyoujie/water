import { Log } from "../utils/Log";

export abstract class Vec{

    protected _size:number = 0;

    protected _data:number[] = [];

    constructor(size:number){
        this._size = size;
        Vec._vecDic[size] = this;
    }

    /**
     * 加上负号
     */
    public negative(){
        let s = this;
        for(let i=0; i<s._size; i++)
        {
            s._data[i] = -s._data[i];
        }
        return s;
    }

    /**
     * 向量相加
     * @param vec 
     */
    public add(vec:Vec|number){
        let s = this;
        if(typeof vec == "number")
        {
            for(let i=0; i<s._size; i++)
            {
                s._data[i] += vec;
            }
        }else{
            if(vec.size != s._size){
                Log.warn("不同大小的向量不能相互运算");
                return;
            }
            for(let i=0; i<s._size; i++)
            {
                s._data[i] += vec.data[i];
            }
        }
        return s;
    }
    /**
     * 向量相减
     * @param vec 
     */
    subtract(vec:Vec|number){
        let s = this;
        if(typeof vec == "number")
        {
            for(let i=0; i<s._size; i++)
            {
                s._data[i] -= vec;
            }
        }else{
            if(vec.size != s._size){
                Log.warn("不同大小的向量不能相互运算");
                return;
            }
            for(let i=0; i<s._size; i++)
            {
                s._data[i] -= vec.data[i];
            }
        }
        return s;
    }
    /**
     * 向量相乘
     * @param vec 
     * @returns 
     */
    multiply(vec:Vec|number){
        let s = this;
        if(typeof vec == "number")
        {
            for(let i=0; i<s._size; i++)
            {
                s._data[i] *= vec;
            }
        }else{
            if(vec.size != s._size){
                Log.warn("不同大小的向量不能相互运算");
                return;
            }
            for(let i=0; i<s._size; i++)
            {
                s._data[i] *= vec.data[i];
            }
        }
        return s;
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
    /**
     * 判断两个向量是否相等
     * @param vec 
     * @returns 
     */
    public equals(vec:Vec){
        let s = this;
        if(vec.size != s._size){
            Log.warn("两个不同的向量不能相除 ");
            return;
        }
        for(let i=0; i<s._size; i++){
            if(s._data[i] != vec.data[i])return false;
        }
        return true;
    }
    /**
     * 点乘
     * @param vec 
     */
    dot(vec:Vec){
        let s = this;
        if(vec.size != s._size){
            Log.warn("两个不同的向量不能相除 ");
            return;
        }
        let result = 0;
        for(let i=0; i<s._size; i++){
            result += s._data[i] * vec.data[i];
        }
        return result;
    }


    /**向量的长度 */
    length(){
        let s = this;
        let result = 0;
        for(let i=0; i<s._size; i++)
        {
            result += s._size[i]*s._size[i];
        }
        return Math.sqrt(result);
    }
    /**向量归一化 */
    unit(){
        let s = this;
        return s.divide(s.length());
    }

    /**向量中最小的一个值 */
    min(){
        let s = this;
        let result = s._data[0];
        for(let i=1; i<s._size; i++)
        {
            if(result>s._data[i])result = s._data[i];
        }
        return result;
    }
    /**向量中最大的一个值 */
    max(){
        let s = this;
        let result = s._data[0];
        for(let i=1; i<s._size; i++)
        {
            if(result<s._data[i])result = s._data[i];
        }
        return result;
    }
    /**克隆一个vec */
    clone(){
        let s = this;
        let result = Vec.get(s._size);
        for(let i=0; i<s._size; i++)result.data[i] = s._data[i];
        return result;
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