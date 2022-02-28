attribute vec3 aPos;//顶点位置
varying vec2 vCoord;//uv坐标
/**水面高度信息 的 顶点着色器*/
void main(){
    vCoord = aPos.xy*0.5+0.5;
    gl_Position = vec4(aPos.xyz, 1.0);
}