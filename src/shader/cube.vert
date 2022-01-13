attribute vec3 aPos;
uniform mat4 uMat;
const float poolHeight = 1.0;//水池的高度
varying vec3 vCoord;

void main(){
    vCoord = aPos.xyz;
     vCoord.y = ((1.0 - vCoord.y) * (7.0 / 12.0) - 1.0) * 1.0;
    gl_Position = uMat*vec4(vCoord, 1.0);
}