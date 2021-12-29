attribute vec3 aPos;
attribute vec3 aColor;
uniform mat4 mat;

varying vec3 vColor;
void main(){
    vColor = aColor;
    gl_Position = mat*vec4(aPos, 1.0);
}