precision highp float;
uniform vec3 uSphereCenter;//圆的坐标
uniform float uSphereRadius;//圆的半径
varying vec3 vPosition;
uniform sampler2D uWater;
uniform sampler2D uCaustics;
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);//水下面的颜色
const float IOR_AIR = 1.0;//空气的折射率
const float IOR_WATER = 1.333;//水的折射率
uniform vec3 uLightDir;

/**获取圆的颜色*/
vec3 getSphereColor(vec3 position){
    vec3 color = vec3(0.5);
    color *= 1.0 - 0.9/pow((1.0+uSphereRadius - abs(position.x)) / uSphereRadius, 3.0);//1-0.9/pow(1+0.25-abs(x)/0.25, 3)的形状 ╭╮
    color *= 1.0 - 0.9/pow((1.0 + uSphereRadius - abs(position.z)) / uSphereRadius, 3.0);
    color *= 1.0 - 0.9/pow((position.y + 1.0 + uSphereRadius) / uSphereRadius, 3.0);//1.0 - 0.9/Math.pow((x+ 1.0 + 0.25) / 0.25, 3.0) 的形状 ╭─

    //caustics
    vec3 sphereNormal = (vPosition - uSphereCenter)/uSphereRadius;
    vec3 refractedLight = refract(-uLightDir, vec3(0.0, 1.0, 0.0), IOR_AIR/IOR_WATER);
    float diffuse = max(0.0, dot(-refractedLight, sphereNormal)) * 0.5;
    vec4 info = texture2D(uWater, vPosition.xz*0.5+0.5);
    if(vPosition.y < info.r){
        vec4 caustic = texture2D(uCaustics, 0.75*(vPosition.xz - vPosition.y * refractedLight.xz/refractedLight.y)*0.5 + 0.5);
        diffuse *= caustic.r * 4.0;
    }
    color += diffuse;

    return color;
}

void main(){
    vec4 info = texture2D(uWater, vPosition.xz*0.5+0.5);
    gl_FragColor = vec4(getSphereColor(vPosition), 1.0);
    if(vPosition.y < info.r){
        gl_FragColor.rgb *= underwaterColor * 1.2;
    }
}