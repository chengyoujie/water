import { Vec } from "./Vec";

export class Vec2 extends Vec{
    
    constructor(x:number, y:number){
        super(2);
        let s = this;
        s._data[0] = x;
        s._data[1] = y;
    }
}
Vec.regist(2, Vec2);