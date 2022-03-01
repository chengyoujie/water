import {
    Vec3
} from "../../math/Vec3";
import {
    Mesh
} from "./Mesh";

/**
 * 球型的顶点坐标
 */
export class SphereMesh extends Mesh {

    constructor(detail: number = 6) {
        super();
        let s = this;
        s.vertext = [];//存储x，y，z坐标
        s.indexs = [];//三角形列表（索引值）
        s.uv = [];//存储纹理坐标u，v，纹理坐标与顶点坐标一一对应
        var colNum = detail; //纬度带  竖直线条个数
        var rowNum = detail; //经度带 水平线条个数

        for (var col = 0; col <= colNum; col++) {
            var lat = col * Math.PI / colNum - Math.PI / 2; //纬度范围从-π/2到π/2
            var sinLat = Math.sin(lat);
            var cosLat = Math.cos(lat);

            for (var row = 0; row <= rowNum; row++) {
                var lon = row * 2 * Math.PI / rowNum - Math.PI; //经度范围从-π到π
                var sinLon = Math.sin(lon);
                var cosLon = Math.cos(lon);

                var x = cosLat * cosLon;
                var y = cosLat * sinLon;
                var z = sinLat;
                var u = (row / rowNum);
                var v = (col / colNum);

                s.vertext.push(x, y, z);
                s.uv.push(u, v);
            }
        }

        for (var col = 0; col < colNum; col++) {
            for (var row = 0; row < rowNum; row++) {
                var first = col * (rowNum + 1) + row;
                var second = first + rowNum + 1;
                s.indexs.push(first, first + 1, second);
                s.indexs.push(second, second + 1, first + 1);
            }
        }

    }
}