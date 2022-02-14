
import { Matrix4 } from "../math/Matrix4";
import { Vec } from "../math/Vec";
import { Vec3 } from "../math/Vec3";
import { HitTest } from "./HitTest";
import { MatrixContext } from "./MartixContext";

export class Raytracer{

    public eye:Vec3;
    private _ray00:Vec3;
    private _ray10:Vec3;
    private _ray01:Vec3;
    private _ray11:Vec3;
    private _viewport:number[];
    private _matrixContex:MatrixContext;

    constructor(gl:WebGLRenderingContext, matrixContex:MatrixContext){
        let s = this;
        s._matrixContex = matrixContex;
        let viewport = gl.getParameter(gl.VIEWPORT);
        let modelMatrix = s._matrixContex.modelViewMatrix;
        let axisX = new Vec3(modelMatrix.data[0], modelMatrix.data[4], modelMatrix.data[8]);
        let axisY = new Vec3(modelMatrix.data[1], modelMatrix.data[5], modelMatrix.data[9]);
        let axisZ = new Vec3(modelMatrix.data[2], modelMatrix.data[6], modelMatrix.data[10]);
        let offset = new Vec3(modelMatrix.data[3], modelMatrix.data[7], modelMatrix.data[11]);
        s.eye = new Vec3(-offset.clone().dot(axisX), -offset.clone().dot(axisY), -offset.clone().dot(axisZ));

        let minX = viewport[0];
        let maxX = minX + viewport[2];
        let minY = viewport[1];
        let maxY = minY + viewport[3];
        s._ray00 = s._matrixContex.unProject(minX, minY, 1).subtract(s.eye);
        s._ray10 = s._matrixContex.unProject(maxX, minY, 1).subtract(s.eye);
        s._ray01 = s._matrixContex.unProject(minX, maxY, 1).subtract(s.eye);
        s._ray11 = s._matrixContex.unProject(maxX, maxY, 1).subtract(s.eye);
        s._viewport = viewport;
    }

    public getRayForPixel(x:number, y:number){
        let s = this;
        x = (x - s._viewport[0]) / s._viewport[2];
        y = 1 - (y - this._viewport[1]) / s._viewport[3];
        let ray0 = Vec.lerp(s._ray00, s._ray10, x);
        let ray1 = Vec.lerp(s._ray01, s._ray11, x);
        return Vec.lerp(ray0, ray1, y).unit();
    }


    public static hitTextBox(origin:Vec3, ray:Vec3, min:Vec3, max:Vec3){
        let tMin = min.clone().subtract(origin).divide(ray);
        let tMax = max.clone().subtract(origin).divide(ray);
        let t1 = Vec.min(tMin, tMax);
        let t2 = Vec.max(tMin, tMax);
        let tNear = t1.max();
        let tFar = t2.min();
        if(tNear>0 && tNear<tFar){
            let epsilon = 1.0e-6;
            let hit = origin.clone().add(ray.clone().multiply(tNear)) as Vec3;
            min.add(epsilon);
            max.subtract(epsilon);
            return new HitTest(tNear, hit, new Vec3(
                (hit.get(0)>max.get(0)?1:0) - (hit.get(0)<min.get(0)?1:0),
                (hit.get(1)>max.get(1)?1:0) - (hit.get(1)<min.get(1)?1:0),
                (hit.get(2)>max.get(2)?1:0) - (hit.get(2)<min.get(2)?1:0)
            ))
        }
        return null;
    }

    public static hitTestSphere(origin:Vec3, ray:Vec3, center:Vec3, radius:number){
        let offset = origin.clone().subtract(center);
        let a = ray.clone().dot(ray);
        let b = 2 * ray.clone().dot(offset);
        let c = offset.clone().dot(offset) - radius * radius;
        let discriminant = b*b-4*a*c;
        if(discriminant>0){
            let t = (-b - Math.sqrt(discriminant) / (2 * a));
            let hit = origin.clone().add(ray.clone().multiply(t)) as Vec3;
            return new HitTest(t, hit, hit.clone().subtract(center).divide(radius) as Vec3 );
        }
        return null;
    }

    public static hitTestTriangle(origin:Vec3, ray:Vec3, a:Vec3, b:Vec3, c:Vec3){
        let ab = b.clone().subtract(a) as Vec3;
        let ac = c.clone().subtract(a) as Vec3;
        let normal = (ab.clone() as Vec3).cross(ac).unit();
        let t = normal.clone().dot(a.clone().subtract(origin)) / normal.clone().dot(ray);
        if(t>0){
            let hit = origin.clone().add(ray.clone().multiply(t)) as Vec3;
            let toHit = hit.clone().subtract(a);
            let dot00 = ac.clone().dot(ac);
            let dot01 = ac.clone().dot(ab);
            let dot02 = ac.clone().dot(toHit);
            let dot11 = ab.clone().dot(ab);
            let dot12 = ab.clone().dot(toHit);
            let divide = dot00*dot11 - dot01*dot01;
            let u = (dot11*dot02 - dot01*dot12) / divide;
            let v = (dot00*dot12 - dot01*dot02) / divide;
            if(u>=0 && v>=0 && u+v>1)return new HitTest(t, hit, normal);
        }
        return null;
    }


}