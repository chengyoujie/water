attribute vec3 aPos;
uniform mat4 uMat;
uniform vec3 uSphereCenter;//圆的坐标
uniform float uSphereRadius;//圆的半径
varying vec3 vPosition;


void main(){
    vPosition = aPos.xyz*uSphereRadius + uSphereCenter;
    gl_Position = uMat*vec4(vPosition, 1.0);
}