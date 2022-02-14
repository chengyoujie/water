
import { App } from "./App"
import "./css/test.css"

export let app:App;

window.onload = function(){
    let canvs = document.getElementById("webgl") as HTMLCanvasElement;
    app = new App(canvs, window.innerWidth, window.innerHeight, window.devicePixelRatio); 
    app.statr();   
}

function debounce(callFun, waitTime){
    let timer = null;
    return function(){
        if(timer != null){
            clearTimeout(timer);
        }
        timer = setTimeout(callFun, waitTime);
    }
    
}

function resize(){
    if(app)app.resize(window.innerWidth, window.innerHeight)
}

window.onresize = debounce(resize, 100);

//手机上的touch事件
document.ontouchstart = function(e:TouchEvent){
    e.preventDefault();
    if(app&&e.touches.length>0)app.onTouchStart(e.touches[0].pageX, e.touches[0].pageY);
}
document.ontouchmove = function(e:TouchEvent){
    if(app&&e.touches.length>0)app.onToucheMove(e.touches[0].pageX, e.touches[0].pageY);
}
document.ontouchend = function(e:TouchEvent){
    if(app&&e.touches.length>0)app.onToucheEnd();
}
//网页上的event
document.onmouseup = function(e:MouseEvent){
    e.preventDefault();
    if(app)app.onTouchStart(e.pageX, e.pageY);
}
document.onmousemove = function(e:MouseEvent){
    if(app)app.onToucheMove(e.pageX, e.pageY);
}
document.onmousedown = function(e:MouseEvent){
    if(app)app.onToucheEnd();
}