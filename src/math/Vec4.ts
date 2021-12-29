import { Vec } from "./Vec";

export class Vec4 extends Vec{
    
    constructor(x:number, y:number, z:number, w:number){
        super(4);
        let s = this;
        s._data[0] = x;
        s._data[1] = y;
        s._data[2] = z;
        s._data[3] = w;
    }
}