precision highp float;

uniform sampler2D uTexture;
varying vec2 vCoord;
uniform vec3 uOldSphereCenter;//旧的圆心坐标
uniform vec3 uNewSphereCenter;//新的圆心坐标
uniform float uSphereRadius;//圆的半径

float volumeInSphere(vec3 center){
    vec3 toCenter = vec3(vCoord.x*2.0-1.0, 0.0, vCoord.y*2.0-1.0) - center;
    float t = length(toCenter) / uSphereRadius;
    float dy = exp(-pow(t*1.5, 6.0));
    float ymin = min(0.0, center.y - dy);
    float ymax = min(max(0.0, center.y + dy), ymin+2.0*dy);
    return (ymax - ymin) * 0.1;
}

void main(){
    vec4 info = texture2D(uTexture, vCoord);
    info.r += volumeInSphere(uOldSphereCenter);
    info.r -= volumeInSphere(uNewSphereCenter);
    gl_FragColor = info;
}