precision highp float;
varying vec3 vPosition;
uniform samplerCube uSky;
uniform vec3 uEye;
uniform sampler2D uWater;
const float IOR_AIR = 1.0;//空气的折射率
const float IOR_WATER = 1.333;//水的折射率
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);//水下面的颜色
uniform sampler2D uTiles;
uniform vec3 uLightDir;
uniform vec3 uSphereCenter;//圆的坐标
uniform float uSphereRadius;//圆的半径
uniform sampler2D uCausitcs;
const float poolHeight = 1.0;//水池的高度

//判断是否与球体相交
float intersectSphere(vec3 orgin, vec3 ray, vec3 sphereCenter, float sphereRadius){
    vec3 toSphere = orgin - sphereCenter;
    float a = dot(ray, ray);
    float b = 2.0 * dot(toSphere, ray);
    float c = dot(toSphere, toSphere) - sphereRadius * sphereRadius;
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
    //
    vec3 sphereNormal = (point - uSphereCenter) / uSphereRadius;
    vec3 refractedLight = refract(-uLightDir, vec3(0.0, 1.0, 0.0), IOR_AIR/ IOR_WATER);
    float diffuse = max(0.0, dot(-refractedLight, sphereNormal)) * 0.5;
    vec4 info = texture2D(uWater, point.xz * 0.5 + 0.5);
    if(point.y < info.r){
        vec4 caustic = texture2D(uCausitcs, 0.75 * (point.xz - point.y * refractedLight.xz/refractedLight.y) * 0.5 + 0.5);
        diffuse *= caustic.r * 4.0;
    }
    color += diffuse;
    return color;
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
    //
    vec3 refractedLight = -refract(-uLightDir, vec3(0.0, 1.0, 0.0), IOR_AIR/IOR_WATER);
    float diffuse = max(0.0, dot(refractedLight, normal));
    vec4 info = texture2D(uWater, point.xz * 0.5 + 0.5);
    if(point.y < info.r){
        vec4 caustic = texture2D(uCausitcs, 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5);
        scale += diffuse * caustic.r * 2.0 * caustic.g;
    }else{
        vec2 t = intersectCube(point, refractedLight, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));
        diffuse *= 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0/12.0)));
        scale += diffuse * 0.5;
    }
    return wallColor * scale;
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

/**水面下方 */
void main(){
    //将vposition中 xz（水平面）平面内的坐标转化为[0-1]uv坐标
    vec2 coord = vPosition.xz*0.5+0.5;
    //将平面内对应的水面信息取出来
    vec4 info = texture2D(uWater, coord);
    //让水面看起来更尖
    
    for(int i=0; i<5; i++){
        coord += info.ba * 0.005;
        info = texture2D(uWater, coord);
    }
    vec3 normal = vec3(info.b, sqrt(1.0 - dot(info.ba, info.ba)), info.a  );
    vec3 incomingRay = normalize(vPosition - uEye);
    normal = -normal;

    vec3 reflectedRay = reflect(incomingRay, normal);//发射光
    vec3 refractedRay = refract(incomingRay, normal, IOR_WATER/IOR_AIR);//折射光

    float fresnel = mix(0.5, 1.0, pow(1.0-dot(normal , -incomingRay), 3.0));

    vec3 reflectedColor = getSurfaceRayColor(vPosition, reflectedRay, underwaterColor);
    vec3 refractedColor = getSurfaceRayColor(vPosition, refractedRay, vec3(1.0)) * vec3(0.8, 1.0, 1.1);

    gl_FragColor = vec4(mix(reflectedColor, refractedColor, (1.0-fresnel)*length(refractedRay)), 1.0);
    // gl_FragColor = info;//vec4(0.25, 1.0, 1.25, 1.0);
}