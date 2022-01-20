attribute vec3 aPos;
varying vec3 vCoord;
uniform mat4 uMat;

void main(){
    vCoord = aPos.xyz*0.5+0.5;
    gl_Position = vec4(aPos.xyz, 1.0);
}