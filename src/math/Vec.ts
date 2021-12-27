import { Vec2 } from "./Vec2";
import { Vec3 } from "./Vec3";
import { Vec4 } from "./Vec4";

export abstract class Vec{

    private _size:number = 0;

    constructor(size:number){

    }

    public static get(size:number){
        if(size==2)return new Vec2();
        if(size==3)return new Vec3();
        if(size==4)return new Vec4();
    }


}