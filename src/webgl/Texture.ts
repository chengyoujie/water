
import { Log } from "../utils/Log";
import { ICanBindTexture } from "./WebGL";
import { DataType, PixelFormat, TextureMagFilter, TextureMinFilter, TextureTarget, TextureWrapMode } from "./WebGLInterface";

export class Texture implements ICanBindTexture{

    /**webgl纹理 对象*/
    private _texture:WebGLTexture;

    private _params:TextureParam;

    private _src:string | TexImageSource;

    private _imgSource:TexImageSource;

    private _textureChange:boolean = false;

    private _imgSourceChange:boolean = false;

    private _gl:WebGLRenderingContext;

    private _width:number;

    private _height:number;
    
    constructor(gl:WebGLRenderingContext,src:string|TexImageSource, textureParam?:TextureParam)
    constructor(gl:WebGLRenderingContext, width:number, height:number, textureParam?:TextureParam)
    constructor(gl:WebGLRenderingContext,srcOrWidth?:number|string|TexImageSource, textureParamOrheight?:number|TextureParam, textureParam?:TextureParam){
        let s = this;
        s._texture = gl.createTexture();
        if(!s._texture){
            Log.warn("Frame Buffer 创建纹理失败");
            return;
        }
        s._params = textureParam;
        s._gl = gl;
        if(typeof srcOrWidth == "number")
        {
            s._width = srcOrWidth;
        }else{
            s.src = srcOrWidth;
        }
        if(typeof textureParamOrheight == "number"){
            s._height = textureParamOrheight;
        }else{
            s._params = textureParamOrheight;
        }
        if(textureParam){
            s._params = textureParam;
        }
        if(!s._params)s._params = {};
        s._textureChange = true;
        s._imgSourceChange = true;
    }

    public resize(width:number, height:number){
        let s = this;
        s._width = width;
        s._height = height;
        s._textureChange = true;
    }

    public refush(textureParam?:TextureParam){
        let s = this;
        if(textureParam)s._params = textureParam;
        s._textureChange = true;
    }

    public set src(value:string|TexImageSource){
        let s = this;
        s._src = value;
        if(!s._src){
            s._imgSource = null;
        }else if(typeof s._src == "string"){
            s._imgSource = new Image(s._width, s._height);
            s._imgSource.src = s._src;

        }else{
            s._imgSource = s._src;;
        }
        s._imgSourceChange = true;
    }

    public get src(){
        return this._src;
    }

    public get width(){return this._width;}

    public get height(){return this._height;}

    public get texture(){return this._texture};

    public swapTexture(texture:Texture){
        let s = this;
        let temp = s._texture;
        let oldW = s.width;
        let oldH = s.height;
        s._texture = texture._texture;
        // s._textureChange = true;
        s._width = texture.width;
        s._height = texture.height;
        texture._texture = temp;
        texture._width = oldW;
        texture._height = oldH;
        // texture._textureChange = true;
    }

    /**
     * 获取当前的texture
     * 注意：执行前先gl.bindTexture(xxx,xxxx)
     */
    public bindTexture(gl:WebGLRenderingContext, target:TextureTarget){
        let s = this;
        if(gl != s._gl){
            Log.warn("Texture 中bindTexture 的gl 与传过来的gl不是同一个");
        }
        gl.bindTexture(target, s._texture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
        if(s._textureChange){    
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, s._params.filterMag || s._params.filter || gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER,  s._params.filterMig || s._params.filter || gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, s._params.wrapS || s._params.wrap || gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, s._params.wrapT || s._params.wrap || gl.CLAMP_TO_EDGE);
            
            s._textureChange = false;
        }
        if(s._imgSourceChange){
            let format = s._params.format || gl.RGBA; 
            let type = s._params.type || gl.UNSIGNED_BYTE;
            if(type == DataType.FLOAT)
            {
                if(!gl.getExtension('OES_texture_float')){
                    Log.error("Texture 不支持Float类型")
                }
            }
            if(s._imgSource){
                gl.texImage2D(gl.TEXTURE_2D, 0, format, format, type, s._imgSource);
            }else{
                gl.texImage2D(gl.TEXTURE_2D, 0, format, s._width, s._height, 0, format, type, null);
            }
            s._imgSourceChange = false;
        }
        return s._texture;
    }
}
/**
 * 纹理的一些参数
 */
export interface TextureParam{

    format?:PixelFormat;

    wrap?:TextureWrapMode;

    wrapS?:TextureWrapMode;

    wrapT?:TextureWrapMode;

    filter?:TextureMagFilter;
    
    filterMag?:TextureMagFilter;
    
    filterMig?:TextureMinFilter;

    type?:DataType,

}
