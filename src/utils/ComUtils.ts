import { GLArray } from "./GLArray";

export class ComUtils{

    /**绑定数据 */
    public static bindData<T extends Object&{__defineSetter__?:any, __defineGetter__?:any}>(orginData:T, prop:keyof T, listener:(prop:string, newValue:any)=>any, listenerThis:any){
        let hideKey = "_$_"+prop;
        let data = orginData[prop];
        if(data instanceof GLArray)//数组的每一项发生改变
        {
            data.addChangeListener(()=>{
                let old = orginData[hideKey];
                orginData[hideKey] = data;
                listener.call(listenerThis, prop, orginData[hideKey], old);
            }, listenerThis)
        }

        orginData[hideKey] = data;
        orginData.__defineSetter__(prop, function(value){
            let old = orginData[hideKey];
            orginData[hideKey] = value;
            listener.call(listenerThis, prop, orginData[hideKey], old);
        });
        orginData.__defineGetter__(prop, function(){
            let hideKey = "_$_"+prop;
            return orginData[hideKey];
        });
    }

    /**
     * 创建一个canvas
     * @param width 
     * @param height 
     */
    public static createCanvas(width:number, height:number){
        let canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        return canvas;
    }

    /**
     * 加载图片
     * @param images 
     * @returns 
     */
    public static loadImages(images:{name:string, src:string}[]){
        return Promise.all(
                images.map(
                    (src, i)=>{
                        return ComUtils.loadOneImg(images[i]);
                    }
                )
            );
    }

    private static loadOneImg(info:{name:string, src:string}){
        let s = this;
        return new Promise((resolve:(value:any)=>void, reject:(reason?:any)=>void)=>{
            var img = new Image();
            img.onload = function(){
                // s.imgDic[info.name] = img;
               resolve({name:info.name, img:img});
            }
            img.onerror = function(){
                reject("加载错误"+info.src);
            }
            img.src = info.src;

        })
    }
    /**
     * 在from 到 to之间随机一个值， randomFun是随机值的中间处理过程
     * @param from 
     * @param to 
     * @param randomFun 
     * @returns 
     */
    public static random(from:number=null, to:number=null, randomFun?:(num:number)=>number){
        if(from==null){
            from = 0;
            to = 1;
        }else if(to == null){
            to = from;
            from = 0;//如果只设置了from，没有设置to, 则认为随机值从0-from
        }
        const delt = to - from;
        if(!randomFun){
            randomFun = (n)=>n;
        }
        return from + randomFun(Math.random())*delt;
    }
    /**
     * 将value取值在from与to之间
     * @param value 
     * @param from 
     * @param to 
     * @returns 
     */
    public static range(value:number, from:number, to:number){
        if(value<from)return from;
        if(value>to)return to;
        return value;
    }
    /**
     * 0-1范围内   随机值是否小于value
     * @param value 
     * @returns 
     */
    public static chance(value:number){
        return Math.random()<=value;
    }

    /**
     * 求亮点的距离
     * @param r1 
     * @param r2 
     * @returns 
     */
    public static distance(r1:{x:number, y:number}, r2:{x:number, y:number}){
        return Math.sqrt((r2.x-r1.x)*(r2.x-r1.x) + (r2.y - r1.y)*(r2.y - r1.y));
    }
}