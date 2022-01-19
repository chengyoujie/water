precision highp float;

const float PI = 3.141592653589793;
uniform vec2 uCenter;
uniform float uRadius;
uniform float uStrength;
uniform sampler2D uTexture;
varying vec2 vCoord;

void main(){
    vec4 info = texture2D(uTexture, vCoord); 

    float drop = max(0.0, 1.0-length(uCenter * 0.5 + 0.5 - vCoord)/uRadius );
    drop = 0.5 - cos(drop*PI) * 0.5;
    info.r += drop * uStrength;
    gl_FragColor = info;
}