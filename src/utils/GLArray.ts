import { Log } from "./Log";

export class GLArray{
    private _data:number[];
    private _listener:{fun:(prop:string|number, newValue:any, oldValue:any)=>any, listenerThis:any}[] = [];
    constructor(data?:number[]){
        let s= this;
        s._data = data || [];

    }

    public addChangeListener(listener:(prop:string|number, newValue:any, oldValue:any)=>any, listenerThis:any){
        let s = this;
        if(s._listener.length>0){
            for(let i=0; i<s._listener.length; i++){
                if(s._listener[i].fun == listener){
                    Log.warn("监听重复注册");
                    return;
                }
            }
        }
        s._listener.push({fun:listener, listenerThis:listenerThis})
    }

    public notify(prop:string|number, newValue:any, oldValue:any){
        let s = this;
        let len = s._listener.length;
        if(len == 0)return;
        for(let i=len-1; i>=0; i--){
            let listener = s._listener[i];
            listener.fun.call(listener.listenerThis, prop, newValue, oldValue)
        }
    }

    public add(value:number){
        let s = this;
        s.setValue(s._data.length, value);
    }

    public setValue(index:number, value:number){
        let s = this;
        let old = s._data[index];
        s._data[index] = value;
        s.notify(index, value, old);
    }

    public getValue(index:number){
        return this._data[index];
    }

    public get length(){
        return this._data.length;
    }

    


    public  get orginData(){
        return this._data;
    }

    public getFloat32Array(){
        let s = this;
        return new Float32Array(s._data)
    }

    public getUnit8Array(){
        return new Uint8Array(this._data);
    }
    
    public getUnit16Array(){
        return new Uint16Array(this._data);
    }
}