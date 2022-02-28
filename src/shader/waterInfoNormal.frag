precision highp float;

uniform vec2 uSize;//x=1/screenW, y=1/screenH  可以理解为每个像素的大小 x水平， y竖直
uniform sampler2D uTexture;//水面信息的纹理 r表示高度
varying vec2 vCoord;//当前的uv坐标

/**水面高度信息  生成水面法线的*/
void main(){
    vec4 info = texture2D(uTexture, vCoord);//获取当前水面信息

    //xy平面内的向量和yz平面内的向量叉积 的结果必定是xz平面内的向量
    /** 
         ↘
        ─╮
         ┃
        将uSize中的x及对应的y(纹理中r)的差值，放到xy平面内，得到从原点的切线
         
    */
    vec3 dx = vec3(uSize.x, texture2D(uTexture, vec2(vCoord.x+uSize.x, vCoord.y)).r -info.r, 0.0);
    //将uSize中y及对应的y(纹理中r)的差值,放到yz平面内，得到从原点的切线
    vec3 dy = vec3(0.0, texture2D(uTexture, vec2(vCoord.x, vCoord.y+uSize.y)).r - info.r, uSize.y);
    //两个切线的叉积 在xz平面内
    info.ba = normalize(cross(dy, dx)).xz;
    gl_FragColor = info;
}