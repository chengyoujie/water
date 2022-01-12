attribute vec3 aPos;
uniform mat4 uMat;

void main(){
    gl_PointSize = 4.0;
    vec3 center = vec3( -0.4, -0.75, 0.2);
    vec3 pos = center + aPos*0.25;
    gl_Position = uMat*vec4(pos, 1.0);
}