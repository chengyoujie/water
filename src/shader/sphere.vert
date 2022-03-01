attribute vec3 aPos;
attribute vec2 aSphereUv;//球体的uv坐标
varying vec2 vSphereUv;//差值后球体的uv坐标
uniform mat4 uMat;
uniform vec3 uSphereCenter;//圆的坐标
uniform float uSphereRadius;//圆的半径
varying vec3 vPosition;


void main(){
    vPosition = aPos.xyz*uSphereRadius + uSphereCenter;
    vSphereUv = aSphereUv;
    gl_Position = uMat*vec4(vPosition, 1.0);
}