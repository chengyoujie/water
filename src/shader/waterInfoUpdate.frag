precision mediump float;

uniform sampler2D uTexture;
uniform vec2 uSize;//计算平均振幅时，找相邻多远位置的点
varying vec2 vCoord;
void main() {
    vec2 coord = vCoord;//vec2(-1.0, -1.0);
    vec4 info = texture2D(uTexture, vCoord);
    vec2 dx = vec2(uSize.x, 0.0);//相邻x方向的点距离
    vec2 dy = vec2(0.0, uSize.y);//相邻y方向的点距离
    float average = (
    texture2D(uTexture, coord - dx).r +
    texture2D(uTexture, coord - dy).r +
    texture2D(uTexture, coord + dx).r +
    texture2D(uTexture, coord + dy).r
    ) * 0.25;
    
    info.g += (average- info.r)*2.0; 
    info.g *= 0.995;
    info.r += info.g;

    gl_FragColor =info;
}