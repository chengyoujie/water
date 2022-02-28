attribute vec3 aPos;//水面的顶点坐标
uniform mat4 uMat;//mvp矩阵
uniform sampler2D uWater;//水面高度信息
varying vec3 vPosition;//水面的高度位置

/**渲染的水面*/
void main(){
    //获取水面高度信息
    vec4 info = texture2D(uWater, aPos.xy*0.5+0.5);
    //获取顶点的xyz位置
    vPosition = aPos.xzy;
    //将水面高度信息中的 高度r加到顶点坐标y上
    vPosition.y += info.r;
    
    gl_Position = uMat*vec4(vPosition, 1.0);
}