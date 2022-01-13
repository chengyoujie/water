precision highp float;
uniform samplerCube uCube;
uniform sampler2D uTiles;
varying vec3 vCoord;

void main(){
    gl_FragColor = textureCube(uCube, vCoord);
}