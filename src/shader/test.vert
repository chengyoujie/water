attribute vec3 aPos;
attribute vec3 aColor;
uniform mat4 uMat;
varying vec3 coord;


varying vec3 vColor;
void main(){
    vColor = aColor;
    coord = aPos;
    gl_Position = uMat*vec4(aPos, 1.0);
    // coord = normalize(gl_Position).xyz;
}