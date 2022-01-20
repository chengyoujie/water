#extension GL_OES_standard_derivatives:enable
precision highp float;

varying vec3 vOldPos;
varying vec3 vNewPos;
uniform vec3 uLightDir;
const float IOR_AIR = 1.0;//空气的折射率
const float IOR_WATER = 1.333;//水的折射率
const float poolHeight = 1.0;//水池的高度
uniform vec3 uSphereCenter;//圆的坐标
uniform float uSphereRadius;//圆的半径

vec2 intersectCube(vec3 origin, vec3 ray, vec3 cubeMin, vec3 cubeMax){
    vec3 tMin = (cubeMin - origin) / ray;
    vec3 tMax = (cubeMax - origin) / ray;
    vec3 t1 = min(tMin, tMax);
    vec3 t2 = max(tMax, tMax);
    float tNear = max(max(t1.x, t1.y), t1.z);
    float tFar = min(min(t2.x, t2.y), t2.z);
    return vec2(tNear, tFar);
}


void main(){
    float oldArea = length(dFdx(vOldPos)) * length(dFdy(vOldPos));
    float newArea = length(dFdx(vNewPos)) * length(dFdy(vNewPos));
    gl_FragColor = vec4(oldArea/newArea*0.2, 1.0, 0.0, 0.0);
    
    vec3 refractedLight = refract(-uLightDir, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);

    vec3 dir = (uSphereCenter - vNewPos) / uSphereRadius;
    vec3 area = cross(dir, refractedLight);
    float shadow = dot(area, area);
    float dist = dot(dir, -refractedLight);
    shadow = 1.0 + (shadow - 1.0) / (0.05 + dist * 0.025);
    shadow = clamp(1.0/(1.0+exp(-shadow)), 0.0, 1.0);
    shadow = mix(1.0, shadow, clamp(dist*2.0, 0.0, 1.0));
    gl_FragColor.g = shadow;

    vec2 t = intersectCube(vNewPos, -refractedLight, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));
    gl_FragColor.r *= 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (vNewPos.y - refractedLight.y * t.y - 2.0/12.0)));

    // gl_FragColor = vec4(0.94, 0.74, 0.74, 0.5);
}