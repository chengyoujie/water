export abstract class Mesh{
    /**顶点坐标 */
    public vertext:number[];
    /**法线 */
    public noramals:number[];

    public coords:number[];
    /**顶点索引*/
    public indexs:number[];

    /**
     * 根据二进制位上的数返回坐标
     * 将一个数二进制的后三位分别表示z,y,x,如果二进制位上有值则对应的位置为1，没有值则对应为为-1
     *   z    y    x
     *   0    0    0
     * @param v 
     * @returns 
     */
    protected getPosByBinaryValue(v:number){
        return [(v&1)*2-1, (v&2)*2-1, (v&4)*2-1]
    }
}