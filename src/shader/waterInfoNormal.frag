precision highp float;

uniform vec2 uSize;
uniform sampler2D uTexture;
varying vec2 vCoord;

void main(){
    vec4 info = texture2D(uTexture, vCoord);
    
    vec3 dx = vec3(uSize.x, texture2D(uTexture, vec2(vCoord.x+uSize.x, vCoord.y)).r -info.r, 0.0);
    vec3 dy = vec3(0.0, texture2D(uTexture, vec2(vCoord.x, vCoord.y+uSize.y)).r - info.r, uSize.y);

    info.ba = normalize(cross(dy, dx)).xz;
    gl_FragColor = info;
}