precision highp float;
uniform vec3 uSphereCenter;//圆的坐标
uniform float uSphereRadius;//圆的半径
varying vec3 vPosition;

/**获取圆的颜色*/
vec3 getSphereColor(vec3 position){
    vec3 color = vec3(0.5);
    color *= 1.0 - 0.9/pow((1.0+uSphereRadius - abs(position.x)) / uSphereRadius, 3.0);//1-0.9/pow(1+0.25-abs(x)/0.25, 3)的形状 ╭╮
    color *= 1.0 - 0.9/pow((1.0 + uSphereRadius - abs(position.z)) / uSphereRadius, 3.0);
    color *= 1.0 - 0.9/pow((position.y + 1.0 + uSphereRadius) / uSphereRadius, 3.0);//1.0 - 0.9/Math.pow((x+ 1.0 + 0.25) / 0.25, 3.0) 的形状 ╭─

    return color;
}

void main(){
    gl_FragColor = vec4(getSphereColor(vPosition), 1.0);
}