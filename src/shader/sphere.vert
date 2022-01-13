attribute vec3 aPos;
uniform mat4 uMat;
uniform vec3 uSphereCenter;//圆的坐标
uniform float uSphereRadius;//圆的半径


void main(){
    vec3 pos = aPos.xyz*uSphereRadius + uSphereCenter;
    gl_Position = uMat*vec4(pos, 1.0);
}