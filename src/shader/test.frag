precision highp float;

uniform sampler2D uTexture;
varying vec3 vCoord;

void main(){
    vec4 info = texture2D(uTexture, vCoord.xy); 
    gl_FragColor =info;// vec4(1.0, 0.0, 0.0, 1.0);//info;
}