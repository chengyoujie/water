attribute vec3 aPos;
uniform mat4 uMat;


void main(){
    vec3 pos = vec3(aPos.x, 0.0, aPos.y);
    gl_Position = uMat*vec4(pos, 1.0);
}