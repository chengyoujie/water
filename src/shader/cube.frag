precision highp float;
uniform samplerCube uCube;
uniform sampler2D uTiles;
varying vec3 vCoord;
uniform vec3 uSphereCenter;//圆的坐标
uniform float uSphereRadius;//圆的半径
uniform sampler2D uWater;
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);//水下面的颜色

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

    //z
    
    return wallColor*scale;
}

void main(){
    vec4 info = texture2D(uWater, vCoord.xz*0.5+0.5);
    gl_FragColor = vec4(getWallColor(vCoord), 1.0);
    if(vCoord.y<info.r){
        gl_FragColor.rgb = underwaterColor*1.2;
    }
}