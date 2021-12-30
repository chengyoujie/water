precision mediump float;
varying vec3 vColor;
uniform samplerCube uCube;
varying vec3 coord;

void main(){

    gl_FragColor = textureCube(uCube, normalize(coord));//vec4(vColor, 1.0);
}