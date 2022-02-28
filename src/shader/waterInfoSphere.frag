precision highp float;

uniform sampler2D uTexture;//水面信息的纹理
varying vec2 vCoord;//uv坐标
uniform vec3 uOldSphereCenter;//旧的圆心坐标
uniform vec3 uNewSphereCenter;//新的圆心坐标
uniform float uSphereRadius;//圆的半径

/**球体的体积*/
float volumeInSphere(vec3 center){
    //当前点到先换算到[-1, 1]坐标内，xz平面内球的中心点的向量
    vec3 toCenter = vec3(vCoord.x*2.0-1.0,   0.0,   vCoord.y*2.0-1.0) - center;
    //toCenter向量的长度/圆的半径
    float t = length(toCenter) / uSphereRadius;
    //           ╭───╮
    //函数图像  __│   ┃___  在0-1内有值， 其他的时候为0
    float dy = exp(-pow(t*1.5, 6.0));//
    float ymin = min(0.0, center.y - dy);
    float ymax = min(max(0.0, center.y + dy), ymin+2.0*dy);
    return (ymax - ymin) * 0.1;
}
/**水面高度信息  当水中放入球体的效果*/
void main(){
    vec4 info = texture2D(uTexture, vCoord);
    //加上老的球的体积
    info.r += volumeInSphere(uOldSphereCenter);
    //减去现在的体积
    info.r -= volumeInSphere(uNewSphereCenter);
    gl_FragColor = info;
}