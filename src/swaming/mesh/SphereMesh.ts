import { Vec3 } from "../../math/Vec3";
import { Mesh } from "./Mesh";

/**
 * 球型的顶点坐标
 */
export class SphereMesh extends Mesh{
    
    constructor(detail:number=6){
        super();
        let s = this;
        s.vertext = [];
        s.indexs = [];
        for(let i=0; i<=detail; i++){
            let rowAng = Math.PI*i/detail;//Math.PI*i/detail - Math.PI/2;
            let xz = Math.sin(rowAng);
            let y = Math.cos(rowAng);
            console.log(xz)
            for(let j=0; j<=detail; j++){
                let colAng = 2*Math.PI*j/detail;
                s.vertext.push(xz*Math.sin(colAng), y, xz*Math.cos(colAng));
            }
            
        }
        for(let i=0; i<detail; i++){
            
            for(let j=0; j<detail; j++){

                let k1 = i*(detail+1)+j;
                let k2 = k1+detail +1;
                // s.indexs.push(i*detail+j)
                s.indexs.push(k1, k2, k1+1);
                s.indexs.push(k1+1, k2, k2+1)
                // if(i!=0){
                //     s.indexs.push(k1, k2, k1+1)
                // }
                // if(i != (detail-1)){
                //     s.indexs.push(k1+1, k2, k2+1);
                // }
                // s.indexs.push(k1);
                // s.indexs.push(k2);
                // if(i!=0){
                //     s.indexs.push(k1);
                //     s.indexs.push(k1+1);
                // }
            }
        }
        // for(let posNum=0; posNum<=8; posNum++){
        //     let pos = s.getPosByBinaryValue(posNum);
        //     let flip = pos[0]*pos[1]*pos[2];
        //     let flipVer = new Vec3(pos[0], pos[1], pos[2]);
        //     let data = [];
        //     for(let i=0; i<=detail; i++){
        //         for(let j=0; j<=detail; j++){
        //             let a = i/detail;
        //             let b = j/detail;
        //             let c = (detail - a - b)/detail;
        //             let ver = new Vec3(s.fix(a), s.fix(b), s.fix(c));
        //             ver.unit().multiply(flipVer)
        //             data.push(...ver.data)
        //             s.vertext.push(...ver.data)
        //         }
        //         if(i>0){
        //             for(let j=0; i+j<=detail; j++){
        //                 let m = (i-1) * (detail+1) + ((i-1) - (i-1)*(i-1))/2 + j;
        //                 let n = i*(detail + 1) + (i- i*i)/2 + j;
        //                 s.tri(flip, s.indexs, data[m], data[m+1], data[n]);
        //                 if(i+j<detail){
        //                     s.tri(flip, s.indexs, data[n], data[m+1], data[n+1]);
        //                 }
        //             }
        //         }
        //     }
        // }
    }

    // private tri(flip:number, arr, a:number, b:number, c:number){
    //     return flip?arr.push(a, c, b):arr.push(a, b, c);
    // }

    // private fix(x:number){
    //     return x+(x-x*x)/2;
    // }
}