
import { App } from "./App"
import "./css/test.css"

export let app:App;

window.onload = function(){
    let canvs = document.getElementById("webgl") as HTMLCanvasElement;
    app = new App(canvs, window.innerWidth, window.innerHeight);    
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
