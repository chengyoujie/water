import { Vec3 } from "../math/Vec3";

export class HitTest{
    public t:number;
    public hit:Vec3;
    public normal:Vec3;

    constructor(t:number, hit:Vec3, normal:Vec3){
        let s = this;
        if(t==undefined)t = Number.MAX_VALUE;
        s.hit = hit;
        s.normal = normal;
    }

    public mergeWith(other:HitTest){
        let s = this;
        if(other.t>0 && other.t<s.t){
            s.t = other.t;
            s.hit = other.hit;
            s.normal = other.normal;
        }
    }
}