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
            let rowAng = Math.PI*i/detail;
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
                s.indexs.push(k1, k2, k1+1);
                s.indexs.push(k1+1, k2, k2+1);
            }
        }
    }
}