## 水池
仿照大神：[Evan Wallace（ESBuild作者)](https://github.com/evanw)  的  [https://madebyevan.com/webgl-water/](https://madebyevan.com/webgl-water/)

## 预览地址
项目编译后预览地址
[https://chengyoujie.github.io/water/build](https://chengyoujie.github.io/water/build)


## 开发环境

使用VSCode 开发

`TypeScript` + `webpack5.64.2` + `webgl`

shader 可安装插件`WebGL GLSL Editor` 代码提示


## 安装

项目根目录下执行cmd `npm install`安装需要的依赖

## 运行

项目根目录下执行cmd `webpack server`运行服务， 

## 发布

项目根目录下执行cmd `webpack build`生成在项目的`build`目录中

## 遇到的问题记录

1. `webgl` 的 `indexs` 使用`16位`记录，`8位`记录在水平面的`detial`超过`30`,或者球面分的网格(`Mesh`)比较多时，出现显示不全的问题。

2. `webgl` 中用的矩阵需要转置下，使用列矩阵。

3. 网页视图在`resize`的时候,canvas要设置`width=width`, `sytle.width=width*devicePixelRatio` (`devicePixelRatio`表示当前设备的物理像素与css像素的比值，即多少屏幕像素来绘制一个css像素)