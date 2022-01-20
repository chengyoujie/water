attribute vec3 aPos;
varying vec3 vOldPos;
varying vec3 vNewPos;
varying vec3 vRay;
uniform vec3 uLightDir;
uniform sampler2D uWater;
const float IOR_AIR = 1.0;//空气的折射率
const float IOR_WATER = 1.333;//水的折射率
  const float poolHeight = 1.0;//水池的高度

vec2 intersectCube(vec3 origin, vec3 ray, vec3 cubeMin, vec3 cubeMax){
    vec3 tMin = (cubeMin - origin) / ray;
    vec3 tMax = (cubeMax - origin) / ray;
    vec3 t1 = min(tMin, tMax);
    vec3 t2 = max(tMin, tMax);
    float tNear  = max(max(t1.x, t1.y), t1.z);
    float tFar = min(min(t2.x, t2.y), t2.z);
    return vec2(tNear, tFar);
}


vec3 project(vec3 origin , vec3 ray, vec3 refractedLight){
    vec2 tcube = intersectCube(origin, ray, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0,1.0));
    origin += ray * tcube.y;
    float tplane = (-origin.y - 1.0) / refractedLight.y;
    return origin + refractedLight *tplane;
}

void main(){
    vec4 info = texture2D(uWater, aPos.xy*0.5 + 0.5);
    info.ba *= 0.5;
    vec3 normal = vec3(info.b, sqrt(1.0 - dot(info.ba, info.ba)), info.a);

    vec3 refractedLight = refract(-uLightDir, vec3(0.0, 1.0, 0.0), IOR_AIR/IOR_WATER);
    vRay = refract(-uLightDir, normal, IOR_AIR/IOR_WATER);
    vOldPos = project(aPos.xzy, refractedLight, refractedLight);
    vNewPos = project(aPos.xzy+vec3(0.0, info.r, 0.0), vRay, refractedLight);


    gl_Position = vec4(0.75*(vNewPos.xz + refractedLight.xz/refractedLight.y), 0.0, 1.0);
}