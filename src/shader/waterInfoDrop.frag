precision highp float;

const float PI = 3.141592653589793;
uniform vec2 uCenter;//波动的中心
uniform float uRadius;//波动的半径
uniform float uStrength;//波动的强度
uniform sampler2D uTexture;//水面信息的纹理图片  r表示高度
varying vec2 vCoord;//纹理坐标

/**水面高度信息 给水面添加一个波动 */
void main(){
    vec4 info = texture2D(uTexture, vCoord); 

    //1-当前坐标距离中心点的距离/半径， 即中心点drop=1,>=半径的drop=0,中间线性  __r/￣center￣\r__    00-1-00
    float drop = max(0.0, 1.0-length(uCenter * 0.5 + 0.5 - vCoord)/uRadius );
    // 表达式cos(drop*PI) 中drop取值(0 1 0)对应结果->取值范围(1 (-1) 1)  ￣∪￣
    // 表达式0.5-cos(drop*PI)*0.5 中取值范围(0  1  0)╭⌒╮
    drop = 0.5 - cos(drop*PI) * 0.5;
    info.r += drop * uStrength;//将drop值进行缩放uStrength 在加到纹理图像内  获得的高度添加到水面信息r里面
    gl_FragColor = info;
}