attribute vec3 aPos;
uniform mat4 uMat;
uniform sampler2D uWater;


void main(){
    vec4 info = texture2D(uWater, aPos.xy*0.5+0.5);
    vec3 pos = aPos.xzy;//vec3(aPos.x, 0.0, aPos.y);
    pos.y += info.r;
    gl_Position = uMat*vec4(pos, 1.0);
}