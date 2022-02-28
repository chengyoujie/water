precision highp float;

uniform sampler2D uTexture;//水面信息的纹理 r表示高度  g表示速度
uniform vec2 uSize;//x=1/screenW, y=1/screenH  可以理解为每个像素的大小 x水平， y竖直
varying vec2 vCoord;//当前的uv坐标
/**水面高度信息更新 */
void main() {
    vec4 info = texture2D(uTexture, vCoord);
    vec2 dx = vec2(uSize.x, 0.0);//相邻x方向的点距离
    vec2 dy = vec2(0.0, uSize.y);//相邻y方向的点距离
    //当前uv周围四个点的高度，取平均
    float average = (
    texture2D(uTexture, vCoord - dx).r +
    texture2D(uTexture, vCoord - dy).r +
    texture2D(uTexture, vCoord + dx).r +
    texture2D(uTexture, vCoord + dy).r
    ) * 0.25;
    //更改水面的移动速度，向平均值移动
    info.g += (average- info.r)*2.0; 
    //波浪每次移动衰减一点， 防止波浪一直持续下去
    info.g *= 0.995;
    //更新波浪的高度
    info.r += info.g;

    gl_FragColor =info;
}