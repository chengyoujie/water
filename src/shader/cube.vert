attribute vec3 aPos;
uniform mat4 uMat;
const float poolHeight = 1.0;//水池的高度
varying vec3 vPosition;


void main(){
    vPosition = aPos.xyz;
    vPosition.y = ((1.0 - vPosition.y) * (7.0 / 12.0) - 1.0) * poolHeight;
    gl_Position = uMat*vec4(vPosition, 1.0);
}