attribute vec3 aPos;
varying vec2 vCoord;

void main(){
    vCoord = aPos.xy*0.5+0.5;
    gl_Position = vec4(aPos.xyz, 1.0);
}