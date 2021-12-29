import { Matrix } from "./Matrix";
import { Vec3 } from "./Vec3";

export class Matrix4 extends Matrix{
    constructor(){
        super(4);
    }

    /**
     * 透视投影
     * @param fov 透视角 (角度0-360)
     * @param aspect 宽/高  宽高比
     * @param near 近界面z值
     * @param far 远截面z值
     * @param result 返回结果的matrix 如果为空则用新的
     */
    public perspective(fov:number, aspect:number, near:number, far:number, result?:Matrix4){
        let s = this;
        result = result || new Matrix4();
        let y = Math.tan(fov*Math.PI/360)*near;//tan(θ/2)*n;
        let x = y * aspect;//aspet = w/h
        let left = -x;
        let right = x;
        let top = y;
        let bottom = -y;
        result.data[0] = 2*near/(right-left);
        result.data[1] = 0;
        result.data[2] = (right+left)/(right-left);
        result.data[3] = 0;

        result.data[4] = 0;
        result.data[5] = 2*near/(top-bottom);
        result.data[6] = (top+bottom)/(top-bottom);
        result.data[7] = 0;

        result.data[8] = 0;
        result.data[9] = 0;
        result.data[10] = -(far+near)/(far-near);
        result.data[11] = -2*far*near/(far-near);

        result.data[12] = 0;
        result.data[13] = 0;
        result.data[14] = -1;
        result.data[15] = 0;
        return result;
    }

    public ortho(left:number, right:number, bottom:number, top:number, near:number, far:number, result?:Matrix4){
        result = result || new Matrix4();
        result.data[0] = 2/(right-left);
        result.data[1] = 0;
        result.data[2] = 0;
        result.data[3] = -(right+left)/(right-left);

        result.data[4] = 0;
        result.data[5] = 2/(top-bottom);
        result.data[6] = 0;
        result.data[7] = -(top+bottom)/(top-bottom);

        result.data[8] = 0;
        result.data[9] = 0;
        result.data[10] = -2/(far-near);
        result.data[11] = -(far+near)/(far-near);

        result.data[12] = 0;
        result.data[13] = 0;
        result.data[14] = 0;
        result.data[15] = 1;
        return result;
    }

    public scale(scaleX?:number, scaleY?:number, scaleZ?:number){
        let s = this;
        s.identity();
        if(scaleX!=undefined)s._data[0] = scaleX;
        if(scaleY!=undefined)s._data[5] = scaleX;
        if(scaleZ!=undefined)s._data[10] = scaleX;
    }

    public translate(x?:number, y?:number, z?:number){
        let s = this;
        s.identity();
        if(x!=undefined)s._data[3] = x;
        if(y!=undefined)s._data[7] = y;
        if(z!=undefined)s._data[11] = z;
    }
    /**
     * 绕着fromX, fromY, fromZ 旋转多少度
     * 将原来的矩阵重置掉
     * @param angle 旋转的角度，0-360
     * @param fromX 
     * @param fromY 
     * @param fromZ 
     */
    public roate(angle:number, fromX:number, fromY:number, fromZ:number){
        let s = this;
        s.identity();
        let dis = Math.sqrt(fromX*fromX+fromY*fromY+fromZ*fromZ);
        angle = angle*Math.PI/180;//转换成弧度
        let x = fromX/dis;
        let y = fromY/dis;
        let z = fromZ/dis;
        let cos = Math.cos(angle);
        let sin = Math.sin(angle);
        let t = 1 - cos;
        s._data[0] = x*x*t+cos;
        s._data[1] = x*y*t-z*sin;
        s._data[2] = x*z*t+y*sin;
        s._data[3] = 0;

        s._data[4] = y*x*t+z*sin;
        s._data[5] = y*y*t+cos;
        s._data[6] = y*z*t-x*sin;
        s._data[7] = 0;

        s._data[8] = z*x*t-y*sin;
        s._data[9] = z*y*t+x*sin;
        s._data[10] = z*z*t+cos;
        s._data[11] = 0;

        s._data[12] = 0;
        s._data[13] = 0;
        s._data[14] = 0;
        s._data[15] = 1;

        return s;

    }

    /**
     * 观察矩阵 ex,ey,ez 眼睛的位置， cx,cy,cz中心点的位置， ux,uy,uz向上的方向
     * @param ex 
     * @param ey 
     * @param ez 
     * @param cx 
     * @param cy 
     * @param cz 
     * @param ux 
     * @param uy 
     * @param uz 
     */
    public lookAt(ex:number, ey:number, ez:number, cx:number, cy:number, cz:number, ux:number, uy:number, uz:number){
        let ts = this;
        let e = new Vec3(ex, ey, ez);
        let c = new Vec3(cx, cy, cz);
        let u = new Vec3(ux, uy, uz);
        let f = e.subtract(c).unit();
        let s = u.cross(f).unit();
        let t = f.cross(s).unit();

        ts._data[0] = s.data[0];
        ts._data[1] = s.data[1];
        ts._data[2] = s.data[2];
        ts._data[3] = -s.dot(e);
        
        ts._data[4] = t.data[0];
        ts._data[5] = t.data[1];
        ts._data[6] = t.data[2];
        ts._data[7] = -t.dot(e);
        
        ts._data[8] = f.data[0];
        ts._data[9] = f.data[1];
        ts._data[10] = f.data[2];
        ts._data[11] = -f.dot(e);
        
        ts._data[12] = 0;
        ts._data[13] = 0;
        ts._data[14] = 0;
        ts._data[15] = 1;

        return ts;
    }

}
Matrix.regist(4, Matrix4);