import { Vec } from "./Vec";

export class Vec3 extends Vec{
    
    constructor(){
        super(3);
    }
}
// export class Vec3{
    
//     x:number;
//     y:number;
//     z:number;

//     constructor(x:Vec3)
//     constructor(x?:number, y?:number, z?:number)
//     constructor(x?:number|Vec3, y?:number, z?:number)
//     {
//         let s = this;
//         if(x instanceof Vec3){
//             s.x = x.x;
//             s.y = x.y;
//             s.z = x.z;
//         }else{
//             s.x = x||0;
//             s.y = y||0;
//             s.z = z||0;
//         }
//     }

//     dot(vec:Vec3){
//         let s = this;
//         return s.x*vec.x+s.y+vec.y+s.z*vec.z;
//     }

//     mult(vec:Vec3|number){
//         let s = this;
//         if(vec instanceof Vec3)
//         {
//             let x = s.y*vec.z-s.z*vec.y;
//             let y = s.z*vec.x-s.x*vec.z;
//             let z = s.x*vec.y-s.y*vec.x;
//             s.x = x;
//             s.y = y;
//             s.z = z;
//         }else{
//             s.x *= vec;
//             s.y *= vec;
//             s.z *= vec;
//         }
//     }

//     add(vec:Vec3|number){
//         let s = this;
//         if(vec instanceof Vec3)
//         {
//             s.x += vec.x;
//             s.y += vec.y;
//             s.z += vec.z;
//         }else{
//             s.x += vec;
//             s.y += vec;
//             s.z += vec;
//         }
//     }

//     plus(vec:Vec3|number){
//         let s = this;
//         if(vec instanceof Vec3)
//         {
//             s.x -= vec.x;
//             s.y -= vec.y;
//             s.z -= vec.z;
//         }else{
//             s.x -= vec;
//             s.y -= vec;
//             s.z -= vec;
//         }
//     }

//     divide(vec:Vec3|number){
//         let s = this;
//         if(vec instanceof Vec3){
//             s.x /= vec.x;
//             s.y /= vec.y
//             s.z /= vec.z
//         }else{
//             s.x /= vec;
//             s.y /= vec;
//             s.z /= vec;
//         }
//     }

//     clone(){
//         let s = this;
//         return new Vec3(s.x, s.y, s.z);
//     }


// }