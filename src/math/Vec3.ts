import { Log } from "../utils/Log";
import { Vec } from "./Vec";

export class Vec3 extends Vec{
    
    constructor(x:number, y:number, z:number){
        super(3);
        let s = this;
        s._data[0] = x;
        s._data[1] = y;
        s._data[2] = z;
    }

    
    /**
     * 叉乘
     * @param vec 
     * @returns 
     */
    public cross(vec:Vec3, result?:Vec3){
        let s = this;
        result = result || new Vec3(0, 0, 0);
        result.data[0] = s._data[1]*vec.data[2] - s._data[2]*vec.data[1];
        result.data[1] = s._data[2]*vec.data[0] - s._data[0]*vec.data[2];
        result.data[2] = s._data[0]*vec.data[1] - s._data[1]*vec.data[0];
        return result;
    }


}
Vec.regist(3, Vec3);
