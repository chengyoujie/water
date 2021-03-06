import { Matrix } from "../math/Matrix";
import { Matrix4 } from "../math/Matrix4";
import { Vec3 } from "../math/Vec3";
import { Log } from "../utils/Log";

/**
 * 矩阵的状态机
 */
export class MatrixContext{

    private _tempMatrix:Matrix4;
    private _resultMatrix:Matrix4;
    private _status:MatrixStatusType;
    public modelViewMatrix:Matrix4;
    public projectionMatrix:Matrix4;
    private _curMatrix:Matrix4;
    private _gl:WebGLRenderingContext;

    constructor(gl:WebGLRenderingContext){
        let s = this;
        s._gl = gl;
        s._tempMatrix = new Matrix4();
        s._resultMatrix = new Matrix4();
        s.modelViewMatrix = new Matrix4();
        s.projectionMatrix = new Matrix4();
        s.status = MatrixStatusType.ModelView;
    }

    /**
     * 初始化矩阵
     */
    public indentity(){
        let s = this;
        s._curMatrix.identity();
    }

    /**矩阵相乘 */
    public mult(matrix:Matrix4){
        let s = this;
        s._curMatrix.copy(s._curMatrix.multiply(matrix, s._resultMatrix));
    }

    public perspective(fov:number, aspect:number, near:number, far:number){
        let s = this;
        let mat = new Matrix4();
        mat.perspective(fov, aspect, near, far, s._tempMatrix)
        s.mult(s._tempMatrix);
    }

    public translate(x:number, y:number, z:number){
        let s = this;
        s._tempMatrix.identity();
        s._tempMatrix.translate(x, y, z);
        s.mult(s._tempMatrix);
    }

    public rotate(angle:number, x:number, y:number, z:number){
        let s = this;
        let mat = new Matrix4();
        mat.roate(angle, x, y, z, s._tempMatrix);
        s.mult(s._tempMatrix);
    }

    public lookAt(ex:number, ey:number, ez:number, cx:number, cy:number, cz:number, ux:number, uy:number, uz:number){
        let s = this;
        let mat = new Matrix4();
        mat.lookAt(ex, ey, ez, cx, cy, cz, ux, uy, uz);
        s.mult(mat);
    }

    public unProject(winX:number, winY:number, winZ:number, modelViewMatrix?:Matrix4, projectMatrix?:Matrix4, viewPort?:number[]){
        let s = this;
        modelViewMatrix = modelViewMatrix || s.modelViewMatrix;
        projectMatrix = projectMatrix || s.projectionMatrix;
        viewPort = viewPort || s._gl.getParameter(s._gl.VIEWPORT);
        let point = new Vec3((winX-viewPort[0])/viewPort[2]*2-1,   (winY-viewPort[1])/viewPort[3]*2-1, winZ*2 - 1);
        let tempMatrix = s._tempMatrix;
        projectMatrix.multiply(modelViewMatrix, tempMatrix);
        return tempMatrix.invert().transformPoint(point);
    }



    /**矩阵状态 */
    public get status(){
        return this._status;
    }
    /**矩阵状态 */
    public set status(value:MatrixStatusType){
        let s = this;
        s._status = value;
        switch(s._status){
            case MatrixStatusType.ModelView:
                s._curMatrix = s.modelViewMatrix;
            break;
            case MatrixStatusType.Project:
                s._curMatrix = s.projectionMatrix;
            break;
            default:
                Log.error("没有找到对应的矩阵状态");
                return;
        }
    }
}

/**矩阵当前的状态 */
export const enum MatrixStatusType{
    /**模型视图矩阵状态 */
    ModelView = 0,
    /**project状态 */
    Project = 1,
}