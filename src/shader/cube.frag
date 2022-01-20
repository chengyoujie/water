precision highp float;
uniform sampler2D uTiles;
varying vec3 vPosition;
uniform vec3 uSphereCenter;//圆的坐标
uniform float uSphereRadius;//圆的半径
uniform sampler2D uWater;
uniform vec3 uLightDir;
const float poolHeight = 1.0;//水池的高度
uniform sampler2D uCaustics;
const float IOR_AIR = 1.0;//空气的折射率
const float IOR_WATER = 1.333;//水的折射率
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);//水下面的颜色

vec2 intersectCube(vec3 origin, vec3 ray, vec3 cubeMin, vec3 cubeMax){
    vec3 tMin = (cubeMin - origin) / ray;
    vec3 tMax = (cubeMax - origin) / ray;
    vec3 t1 = min(tMin, tMax);
    vec3 t2 = max(tMin, tMax);
    float tNear = max(max(t1.x, t1.y), t1.z);
    float tFar = min(min(t2.x, t2.y), t2.z);
    return vec2(tNear, tFar);
}


/**获取墙体的颜色*/
vec3 getWallColor(vec3 point){
    float scale = 0.5;//最终的颜色变得暗点
    vec3 wallColor;//墙体的颜色
    vec3 noraml;//法线
    if(abs(point.x) > 0.999){//最左边和最右边的两个面  point.yz范围[-1,1]  --> ([0.5, 1.5], [0, 1])
        wallColor = texture2D(uTiles, point.yz*0.5+vec2(1.0, 0.5)).rgb;
        noraml = vec3(-point.x, 0.0, 0.0);
    }else if(abs(point.z)>0.999){//z=-1或者-1的    前面两个面  point.yx 范围[-1, 1] --> ([0.5, 1.5], [0, 1])
        wallColor = texture2D(uTiles, point.yx*0.5 + vec2(1.0, 0.5)).rgb;
        noraml = vec3(0.0, 0.0, -point.z);
    }else {//上下两个面  point.xz 范围[-1, 1]  --> ([0, 1], [0, 1])
        wallColor = texture2D(uTiles, point.xz * 0.5 + 0.5).rgb;
        noraml = vec3(0.0, 1.0, 0.0);
    }

    scale /= length(point);//池子的遮挡
    scale *= 1.0 - 0.9 / pow(length(point - uSphereCenter)/uSphereRadius, 4.0);//球体的遮挡

    //焦散
    vec3 refractedLight = -refract(-uLightDir, vec3(0.0, 1.0, 0.0), IOR_AIR/IOR_WATER);//折射光
    float diffuse = max(0.0, dot(refractedLight, noraml));
    vec4 info = texture2D(uWater, point.xz*0.5+0.5);
    if(point.y < info.r){
        vec4 caustic = texture2D(uCaustics, 0.75 * (point.xz - point.y* refractedLight.xz/refractedLight.y) * 0.5 + 0.5);
        scale += diffuse * caustic.r * 2.0 * caustic.g;
    }else{
        vec2 t = intersectCube(vPosition, refractedLight, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));
        diffuse *= 1.0/(1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0) ));
        scale += diffuse * 0.5;
    }
    return wallColor*scale;
}

void main(){
    gl_FragColor = vec4(getWallColor(vPosition), 1.0);
    vec4 info = texture2D(uWater, vPosition.xz*0.5+0.5);
    if(vPosition.y<info.r){
        gl_FragColor.rgb *= underwaterColor*1.2;
    }
}