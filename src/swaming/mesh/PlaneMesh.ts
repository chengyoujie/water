import { Mesh } from "./Mesh";

/**
 * 平面网格
 */
export class PlaneMesh extends Mesh{

    constructor(detailX:number=1, detailY:number=1){
        super();
        let s = this;
        s.vertext = [];
        s.indexs = [];
        let idx = 0;
        for(let y=0; y<=detailY; y++){
            let yRatio = y/detailY;//0-1
            for(let x=0; x<=detailX; x++){
                let xRatio = x/detailX;//0-1
                s.vertext.push(2*xRatio-1, 2*yRatio-1, 0);//将xRatio,yRatio的0-1范围放到-1,1范围内
                if(x<detailX && y<detailY){//最上面的一行以下，开始拼接三角形的索引
                    // let idx = x + (y*detailY);//当前第几个
                    s.indexs.push(idx, idx+1, idx+detailX+1);
                    s.indexs.push(idx+detailX+1, idx+1, idx+detailX+2);
                }
                idx++;
            }
        }
    }
}