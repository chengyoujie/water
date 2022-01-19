attribute vec3 aPos;
uniform mat4 uMat;
uniform sampler2D uWater;
varying vec3 vCoord;


void main(){
    vec4 info = texture2D(uWater, aPos.xy*0.5+0.5);
    vCoord = aPos.xzy;
    vCoord.y += info.r;
    gl_Position = uMat*vec4(vCoord, 1.0);
}