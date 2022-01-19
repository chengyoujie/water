import { Log } from "../utils/Log";
import { ICanBindTexture } from "./WebGL";
import { PixelFormat, TextureCubeMapPos, TextureMagFilter, TextureMinFilter, TextureTarget, TextureWrapMode } from "./WebGLInterface";

export class CubeMap implements ICanBindTexture{

    private _texture:WebGLTexture;

    private _cubeParam:CubeParam;

    private _cubeList:{pos:TextureCubeMapPos, img:TexImageSource, format?:PixelFormat}[];

    private _gl:WebGLRenderingContext;

    private _textureChange = false;

    private _textureIdx:number=-1;


    constructor(gl:WebGLRenderingContext, 
        posX:string|TexImageSource, negX:string|TexImageSource, 
        posY:string|TexImageSource, negY:string|TexImageSource, 
        posZ:string|TexImageSource, negZ:string|TexImageSource,
        cubeParam?:CubeParam){
        let s = this;
        s._gl = gl;
        s._cubeParam = cubeParam ||{};
        s._texture = gl.createTexture();
        if(!s._texture){
            Log.warn("Frame Buffer 创建纹理失败");
            return;
        }
        s._cubeList = [
            s.getCubeItem(TextureCubeMapPos.TEXTURE_CUBE_MAP_POSITIVE_X, posX, s._cubeParam.fromatPosX),
            s.getCubeItem(TextureCubeMapPos.TEXTURE_CUBE_MAP_NEGATIVE_X, negX, s._cubeParam.fromatNegX),
            s.getCubeItem(TextureCubeMapPos.TEXTURE_CUBE_MAP_POSITIVE_Y, posY, s._cubeParam.fromatPosY),
            s.getCubeItem(TextureCubeMapPos.TEXTURE_CUBE_MAP_NEGATIVE_Y, negY, s._cubeParam.fromatNegY),
            s.getCubeItem(TextureCubeMapPos.TEXTURE_CUBE_MAP_POSITIVE_Z, posZ, s._cubeParam.fromatPosZ),
            s.getCubeItem(TextureCubeMapPos.TEXTURE_CUBE_MAP_NEGATIVE_Z, negZ, s._cubeParam.fromatNegZ),
        ];
        s._textureChange = true;
    }

    public set textureIndex(value:number){
        let s = this;
        if(s._textureIdx != value){
            s._textureIdx = value;
            s._textureChange = true;
        }
    }

    public get textureIndex(){
        return this._textureIdx;
    }
    
    private getCubeItem(pos:TextureCubeMapPos,cubeItem:string|TexImageSource, fromat?:PixelFormat){
        if(!cubeItem){
            return {pos:pos, img:null, fromat:fromat}
        }else if(typeof cubeItem == "string"){
            let img = new Image();
            img.src = cubeItem;
            return {pos:pos, img:img, fromat:fromat}
        }else{
            return {pos:pos, img:cubeItem, fromat:fromat}
        }
    }   
    
    public get texture(){return this._texture};

    public bindTexture(gl:WebGLRenderingContext, target:TextureTarget){
        let s = this;
        if(gl != s._gl){
            Log.warn("CubeMap 中bindTexture 的gl 与传过来的gl不是同一个");
        }
        if(s._textureIdx<0){
            Log.error("CubeMap 需要先初始化 textureIndex");
            return null;
        }
        gl.bindTexture(target, s._texture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
        if(s._textureChange){   
            let gl = s._gl;
            for(let i=0; i<s._cubeList.length; i++)
            {
                gl.texImage2D(s._cubeList[i].pos, s._textureIdx, s._cubeList[i].format || gl.RGBA, s._cubeList[i].format || gl.RGBA, gl.UNSIGNED_BYTE, s._cubeList[i].img);
            }
            gl.generateMipmap(gl.TEXTURE_CUBE_MAP);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, s._cubeParam.filterMag || s._cubeParam.filter || gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER,  s._cubeParam.filterMig || s._cubeParam.filter || gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, s._cubeParam.wrapS || s._cubeParam.wrap || gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, s._cubeParam.wrapT || s._cubeParam.wrap || gl.CLAMP_TO_EDGE);
            s._textureChange = false;
        }
        return s._texture;
    }

}


export interface CubeParam{

    wrap?:TextureWrapMode;

    wrapS?:TextureWrapMode;

    wrapT?:TextureWrapMode;

    filter?:TextureMagFilter;
    
    filterMag?:TextureMagFilter;
    
    filterMig?:TextureMinFilter;

    fromatNegX?:PixelFormat;
    fromatPosX?:PixelFormat;
    fromatNegY?:PixelFormat;
    fromatPosY?:PixelFormat;
    fromatNegZ?:PixelFormat;
    fromatPosZ?:PixelFormat;
}