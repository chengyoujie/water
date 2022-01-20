precision highp float;
varying vec3 vCoord;
uniform samplerCube uSky;
uniform vec3 uEye;
uniform sampler2D uWater;
const float IOR_AIR = 1.0;//空气的折射率
const float IOR_WATER = 1.333;//水的折射率
const vec3 abovewaterColor = vec3(0.25, 1.0, 1.25);//水上面的颜色
uniform samplerCube uCube;
uniform sampler2D uTiles;
uniform vec3 uLightDir;
uniform vec3 uSphereCenter;//圆的坐标
uniform float uSphereRadius;//圆的半径
const float poolHeight = 1.0;//水池的高度

//判断是否与球体相交
float intersectSphere(vec3 orgin, vec3 ray, vec3 sphereCenter, float sphereRadius){
    vec3 toSphere = orgin - sphereCenter;
    float a = dot(ray, ray);
    float b = 2.0 * dot(toSphere, ray);
    float c = dot(toSphere, toSphere) - sphereRadius *sphereRadius;
    float discriminant = b*b - 4.0*a*c;//判别式
    if(discriminant > 0.0){
        float t = (-b - sqrt(discriminant)) / (2.0 * a);
        if(t > 0.0)return t;
    }
    return 1.0e6;
}
//获取球体的颜色
vec3 getSphereColor(vec3 point){
    vec3 color = vec3(0.5);
    color *= 1.0 - 0.9/ pow((1.0 + uSphereRadius - abs(point.x)) / uSphereRadius, 3.0);
    color *= 1.0 - 0.9/ pow( (1.0 + uSphereRadius - abs(point.z)) / uSphereRadius, 3.0 );
    color *= 1.0 - 0.9/ pow((point.y + 1.0 + uSphereRadius) / uSphereRadius, 3.0);
    return color;
}

vec3 getWallColor(vec3 point){
    float scale = 0.5;
    vec3 wallColor;
    vec3 normal;
    if(abs(point.x) > 0.999){
        wallColor = texture2D(uTiles, point.yz*0.5+vec2(1.0, 0.5)).rgb;
        normal = vec3(-point.x, 0.0, 0.0);
    }else if(abs(point.z) > 0.999){
        wallColor = texture2D(uTiles, point.yx*0.5 + vec2(1.0, 0.5)).rgb;
        normal = vec3(0.0, 0.0, -point.z);
    }else{
        wallColor = texture2D(uTiles, point.xz*0.5+0.5).rgb;
        normal = vec3(0.0, 1.0, 0.0);
    }
    scale /= length(point);
    scale *= 1.0 - 0.9 / pow(length(point - uSphereCenter)/uSphereRadius, 4.0);
    return wallColor * scale;
}

//
vec2 intersectCube(vec3 origin, vec3 ray, vec3 cubeMin, vec3 cubeMax){
    vec3 tMin = (cubeMin - origin) / ray;
    vec3 tMax = (cubeMax - origin) / ray;
    vec3 t1 = min(tMin, tMax);
    vec3 t2 = max(tMin, tMax);
    float tNear = max(max(t1.x, t1.y), t1.z);
    float tFar = min(min(t2.x, t2.y), t2.z);
    return vec2(tNear, tFar);
}

vec3 getSurfaceRayColor(vec3 origin, vec3 ray, vec3 waterColor){
    vec3 color;
    float q = intersectSphere(origin, ray, uSphereCenter, uSphereRadius);
    if(q < 1.0e6){
        color = getSphereColor(origin+ray*q);
    }else if(ray.y < 0.0){
        vec2 t = intersectCube(origin, ray, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));
        color = getWallColor(origin + ray * t.y);
    }else{
        vec2 t = intersectCube(origin, ray, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0 ,1.0) );
        vec3 hit = origin + ray * t.y;
        if(hit.y < 2.0 /12.0){
            color = getWallColor(hit);
        }else{
            color = textureCube(uSky, ray).rgb;
            color += vec3(pow(max(0.0, dot(uLightDir, ray) ), 5000.0  )) * vec3(10.0, 8.0, 6.0);
        }
    }
    if(ray.y < 0.0) color *= waterColor;
    return color;
}

void main(){
    vec2 coord = vCoord.xy*0.5+0.5;
    vec4 info = texture2D(uWater, coord);
    for(int i=0; i<5; i++){
        coord += info.ba * 0.005;
        info = texture2D(uWater, coord);
    }
    vec3 normal = vec3(info.b, sqrt(1.0 - dot(info.ba, info.ba)), info.a  );
    vec3 incomingRay = normalize(vCoord - uEye);
    //水面上方

    vec3 reflectedRay = reflect(incomingRay, normal);//发射光
    vec3 refractedRay = refract(incomingRay, normal, IOR_AIR/IOR_WATER);//折射光

    float fresnel = mix(0.25, 1.0, pow(1.0-dot(normal , -incomingRay), 3.0));

    vec3 reflectedColor = getSurfaceRayColor(vCoord, reflectedRay, abovewaterColor);
    vec3 refractedColor = getSurfaceRayColor(vCoord, refractedRay, abovewaterColor) * vec3(0.8, 1.0, 1.0);

    gl_FragColor = vec4(mix(reflectedColor, refractedColor, fresnel), 1.0);
}