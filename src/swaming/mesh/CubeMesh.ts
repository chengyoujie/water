import { Mesh } from "./Mesh";

export class CubeMesh extends Mesh{
    private static CubeData = [
        //0, 1, 2, 3  四个顶点 组成一个面
        //4，5，6  前面四个点组成面的法线
        [0, 4, 2, 6, -1, 0, 0], // -x
        [1, 3, 5, 7, +1, 0, 0], // +x
        [0, 1, 4, 5, 0, -1, 0], // -y
        [2, 6, 3, 7, 0, +1, 0], // +y
        [0, 2, 1, 3, 0, 0, -1], // -z
        [4, 5, 6, 7, 0, 0, +1]  // +z
    ]

    constructor(){
        super();
        let s = this;
        s.vertext = [];
        s.indexs = [];
        let cubeData = CubeMesh.CubeData;
        for(let i=0; i<cubeData.length; i++){
            let data = cubeData[i];
            let idx = i*4;
            for(let j=0; j<4; j++)
            {
                let vdata = data[j]
                s.splitOneNum(vdata, s.vertext);
            }
            /*
                idx---idx+1
                 |    /  |
                 |   /   |
                idx+2--idx+3
            */
            s.indexs.push(idx, idx+1, idx+2);
            s.indexs.push(idx+2, idx+1, idx+3);
        }
    }

    /**
     * 将一个num(0-7范围内)数，分解成三个-1,1范围的内数，填充到fillArr数组中
     * num 二进制的从右到左的第1位表示x  0表示-1， 1表示1
     * num 二进制的从右到左的第2位表示y  0表示-1， 1表示1
     * num 二进制的从右到左的第3位表示z  0表示-1， 1表示1
     * @param num 
     * @param fillArr 
     */
    private splitOneNum(num:number, fillArr:number[]){
        fillArr.push((num&1)*2-1, (num&2)-1, (num&4)/2-1);
    }
}