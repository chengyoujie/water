// import { Log } from "./../utils/Log";


import { Matrix } from "../math/Matrix";
import { Vec } from "../math/Vec";
import { GLArray } from "../utils/GLArray";
import { Log } from "../utils/Log";
import { CubeMap } from "./CubeMap";
import { Texture } from "./Texture";
import { ClearBufferMask, DrawType, ShaderEnableType, ShaderType, TextureTarget } from "./WebGLInterface";



export class WebGL implements ICanBindTexture{
    /**webGL程序 */
    private _program:WebGLProgram;
    /**gl 对象 */
    private _gl:WebGLRenderingContext;
    /**shader中用到的attribute属性  name需要和bindData中的数据对应 */
    private _attribute:{[name:string]:AttributeData} = {};
    /**索引数组数据 */
    private _indexs:IndexsData = {data:null, count:0, buff:null};
    /**shader 中用到的uniform 属性 */
    public _unifrom:{[name:string]:UniformData} = {};
    // /**界面尺寸是否发生变化 */
    // private _sizeChange = false;
    /**shader 的数据*/
    private _renderData:ShaderParamData;
    // ---帧缓存相关
    /**是否使用帧缓存 */
    private _useFrameBuffer:boolean = false;
    /**帧缓存的buffer */
    private _frameBuffer:WebGLFramebuffer;
    /**帧缓存的渲染buffer */
    private _frameRenderBuffer:WebGLRenderbuffer;
    /**帧缓存的texture */
    private _frameTexture:Texture;
    /**frame的宽度 */
    private _frameWidth:number = 0;
    /**frame的高度 */
    private _frameHeight:number = 0;

    /**渲染完成后的回调 */
    private _onRenderEndFun:Function;


    private _width:number=800;

    private _height:number=800;


    constructor(gl:WebGLRenderingContext,vertexShader:string, fragmentShader:string){
        let s = this;
        s._gl = gl;
        this.initProgram(vertexShader,fragmentShader);
    }

    /**初始化程序 */
    private initProgram(vertexShaderStr:string, fragmentShaderStr:string){
        let s = this;
        let gl = s._gl;
        s._program = gl.createProgram();
        let vertexShader = s.compileShader(ShaderType.VERTEX, vertexShaderStr);
        let fragmentShader = s.compileShader(ShaderType.FRAGMENT, fragmentShaderStr);
        if(!vertexShader || !fragmentShader){
            gl.deleteShader(vertexShader);
            gl.deleteShader(fragmentShader);
            Log.error("ShaderProgram 初始化失败");
            return;
        }
        gl.attachShader(s._program, vertexShader);
        gl.attachShader(s._program, fragmentShader);
        gl.linkProgram(s._program);
        let status = gl.getProgramParameter(s._program, gl.LINK_STATUS);
        if(!status){
            let err = gl.getProgramInfoLog(s._program);
            Log.error("Shader 链接错误 "+err);
            return;
        }
    }

    /**编译代码 */
    private compileShader(type:ShaderType, source:string){
        let s = this;
        let gl = s._gl;
        let shader = gl.createShader(type);
        if(!shader){
            Log.error("Shader 创建失败");
            return;
        }
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        let status = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
        if(!status){
            let err = gl.getShaderInfoLog(shader);
            Log.error("Shader 编译失败"+err);
            gl.deleteShader(shader);
            return;
        }
        return shader;
    }

    /**绑定数据 */
    public bindData(renderData:ShaderParamData){
        let s = this;
        let gl = s._gl;
        s._renderData = renderData;
        let activeAttribute = gl.getProgramParameter(s._program, gl.ACTIVE_ATTRIBUTES);
        s._attribute = {};
        for(let i=0; i<activeAttribute; i++){
            let attribData = gl.getActiveAttrib(s._program, i);
            let name = attribData.name;
            if(!renderData[name])
            {
                Log.error("bindData 没有找到Attribute: "+attribData.name+" 对应的数组");
                continue;
            }
            let data = renderData[name];
            let arr:Float32Array;
            if(data instanceof GLArray)
            {
                arr = data.getFloat32Array();
            }else{
                Log.error("顶点着色器中 "+name+" 必须使用GLArray")
            }
            let buff = s.createBuffer(arr);
            if(!buff)continue;
            let idx = gl.getAttribLocation(s._program, name);
            let count = s.getAttributeSize(attribData.type);
            s._attribute[name] = {location:idx, buff:buff, count:count};
            console.log(attribData);
        }
        let unifromNum = gl.getProgramParameter(s._program, gl.ACTIVE_UNIFORMS);
        for(let i=0; i<unifromNum; i++){
            let unifromData = gl.getActiveUniform(s._program, i);
            let name = unifromData.name;
            let data = renderData[name];
            if(!data){
                Log.error("bindData 没有找到Unifrom: "+name+" 对应的数据");
                continue;
            }
            let idx = gl.getUniformLocation(s._program, name);
            s._unifrom[name] = s.getUnifromInfo(unifromData, idx, data);
            if(unifromData.type == gl.SAMPLER_2D){
                if(data instanceof Texture || data instanceof WebGL){
                    s._unifrom[name].texure = data;
                }else{
                    s._unifrom[name].texure = new Texture(gl, data)
                }
            }else if(unifromData.type == gl.SAMPLER_CUBE){
                if(data instanceof CubeMap || data instanceof WebGL){
                    s._unifrom[name].texure = data;
                }else{
                    s._unifrom[name].texure = new CubeMap(gl, data, data, data, data, data, data)
                }
            }
        }
        if(renderData.indexs){
            let data = renderData.indexs.getUnit8Array();;
            let buff = s.createIndexBuffer(data);
            s._indexs.buff = buff;
            s._indexs.data = buff;
            s._indexs.count = data.length;
            // ComUtils.bindData(renderData, "indexs", s.handleIndexChange, s);
        }
    }


    /**刷新数据 */
    public render(){
        let s = this;
        // if(!s._dirty)return;
        let gl = s._gl;
        
        gl.useProgram(s._program);
        if(s._renderData.enable){
            for(let i=0; i<s._renderData.enable.length; i++)gl.enable(s._renderData.enable[i]);
        }
        let textureIdx = 0;
        if(s._useFrameBuffer){//使用帧缓存
            if(!s._frameBuffer)
            {
                s.initFrameBuffer();
            }
            gl.bindFramebuffer(gl.FRAMEBUFFER, s._frameBuffer);
            gl.bindRenderbuffer(gl.RENDERBUFFER, s._frameRenderBuffer);
            if(s._frameTexture.width != s._frameWidth || s._frameTexture.height != s._frameHeight){
                s._frameWidth = s._frameTexture.width;
                s._frameHeight = s._frameTexture.height;
                gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, s._frameWidth, s._frameHeight);
            }
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, s._frameTexture.texture, 0);
            gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, s._frameRenderBuffer);
            // textureIdx ++;
            gl.viewport(0, 0, s._frameWidth, s._frameHeight);
        }else{
            gl.viewport(0, 0, s._width, s._height)
        }
        if(s._renderData.clearn){
            let data=0;
            for(let i=0; i<s._renderData.clearn.length; i++)data = data | s._renderData.clearn[i];
            gl.clear(data);
        }
        let activeAttribute = gl.getProgramParameter(s._program, gl.ACTIVE_ATTRIBUTES);
        
        for(let i=0; i<activeAttribute; i++){
            let attribData = gl.getActiveAttrib(s._program, i);
            let name = attribData.name;
            let data = s._attribute[name];
            gl.bindBuffer(gl.ARRAY_BUFFER, data.buff);
            gl.vertexAttribPointer(data.location, data.count, gl.FLOAT, false, 0, 0);
            gl.enableVertexAttribArray(data.location);
        }
        let unifromNum = gl.getProgramParameter(s._program, gl.ACTIVE_UNIFORMS);
        for(let i=0; i<unifromNum; i++){
            let unifromData = gl.getActiveUniform(s._program, i);
            let data = s._unifrom[unifromData.name];
            if(unifromData.type == gl.SAMPLER_2D){
                gl.activeTexture(gl.TEXTURE0+textureIdx);
                data.texure.bindTexture(gl, TextureTarget.TEXTURE_2D)
                data.fun.call(gl, data.location, textureIdx);
                textureIdx ++;
            }else if (unifromData.type == gl.SAMPLER_CUBE){
                gl.activeTexture(gl.TEXTURE0+textureIdx);
                if(data.texure instanceof CubeMap){
                    data.texure.textureIndex = textureIdx;
                }
                data.texure.bindTexture(gl, TextureTarget.TEXTURE_CUBE_MAP)
                data.fun.call(gl, data.location, textureIdx);
                textureIdx ++;
            }else{
                let udata = data.data;
                if(data.openParam){
                    if(udata instanceof GLArray)
                    {
                        data.fun.call(gl, data.location, ...udata.orginData);
                    }else if(udata instanceof Matrix){
                        data.fun.call(gl, data.location, ...udata.data);
                    }else if(udata instanceof Vec){
                        data.fun.call(gl, data.location, ...udata.data);
                    }else{
                        Log.warn("请检查 unfirom 数据类型是否正确");
                        data.fun.call(gl, data.location, udata);
                    }
                }else{
                    if(udata instanceof GLArray)
                    {
                        data.fun.call(gl, data.location, ...udata.orginData);
                    }else if(udata instanceof Matrix){
                        data.fun.call(gl, data.location, new Float32Array(udata.data));
                    }else if(udata instanceof Vec){
                        data.fun.call(gl, data.location, new Float32Array(udata.data));
                    }else{
                        // Log.warn("请检查 unfirom 数据类型是否正确");
                        data.fun.call(gl, data.location, udata);
                    }
                    // data.fun.call(gl, data.location, data.data);
                }
            }

        }
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, s._indexs.buff);
        if(s._indexs.changeData)
        {
            let data = s._indexs.changeData.getUnit8Array();
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, data, gl.DYNAMIC_DRAW);
            s._indexs.changeData = null;
        }
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, s._indexs.data);
        let drawType =  s._renderData.drawType==undefined?DrawType.TRIANGLES:s._renderData.drawType;
        gl.drawElements(drawType, s._indexs.count, gl.UNSIGNED_BYTE, 0);
        if(s._renderData.enable){
            for(let i=0; i<s._renderData.enable.length; i++)gl.disable(s._renderData.enable[i]);
        }
        gl.bindTexture(gl.TEXTURE_2D, null);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
        gl.useProgram(null);
        if(s._onRenderEndFun){
            s._onRenderEndFun();
        }
    }

    /**
     * 再后台渲染到一张图片上
     */
    private initFrameBuffer(){
        let s = this;
        let gl = s._gl;
        s._frameBuffer = gl.createFramebuffer();
        if(!s._frameBuffer){
            Log.warn("Frame Buffer 创建失败");
            return;
        }
        if(!s._frameTexture){
            s._frameTexture = new Texture(gl, 1024, 1024)
        }
        s._frameTexture.bindTexture(gl, gl.TEXTURE_2D);
        //缓冲区
        s._frameRenderBuffer = gl.createRenderbuffer();
        if(!s._frameRenderBuffer){
            Log.warn("渲染缓冲区创建失败");
            return;
        }
        gl.bindRenderbuffer(gl.RENDERBUFFER, s._frameRenderBuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, s._frameTexture.width, s._frameTexture.height);
        s._frameWidth = s._frameTexture.width;
        s._frameHeight = s._frameTexture.height;

        gl.bindFramebuffer(gl.FRAMEBUFFER, s._frameBuffer);
        //将纹理指定为镇缓冲区的颜色关联对象
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, s._frameTexture.texture, 0);
        //将渲染缓冲区指定为帧的深度关联对象
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, s._frameRenderBuffer);
        //检查
        let frameStatus = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
        if(frameStatus != gl.FRAMEBUFFER_COMPLETE){
            Log.warn("Frame Buffer is Complete "+frameStatus.toString());
            return;
        }
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.bindTexture(gl.TEXTURE_2D, null);
        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
    }

    /**
     * 启用frameBuffer
     * @param bufferWidth 
     * @param bufferHeight 
     */
    public enableUseFrameBuffer(frameTexture?:Texture){
        let s = this;
        s._useFrameBuffer = true;
        s._frameTexture = frameTexture || s._frameTexture;
        // s._sizeChange = true;
    }

    /**
     * 禁用framebuffer
     */
    public disbaleFrameBuffer(){
        let s = this;
        s._useFrameBuffer = false;
    }

    public onRenderFun(value:Function){
        let s = this;
        s._onRenderEndFun = value;
    }

    /**
     * 启用framebuffer后的图片纹理
     * @returns 
     */
    public get frameTexture(){
        return this._frameTexture;
    }

    public bindTexture(gl:WebGLRenderingContext, target:TextureTarget){
        let s = this;
        if(!s._frameTexture)return;
        if(gl != s._gl){
            Log.warn("WebGL 中bindTexture 的gl 与传过来的gl不是同一个");
        }
        gl.bindTexture(target, s._frameTexture.texture)
    }

    /**重新设置大小 */
    public resize(width:number, height:number){
        let s = this;
        s._width = width;
        s._height = height;
        // s._frameTexture.resize(s._width, s._height);
        // s._sizeChange = true;
    }

    // private handleSizeChange(){
    //     let s = this;
    //     let gl = s._gl;
    //     if(s._useFrameBuffer){
    //         s._frameTexture.bindTexture(gl, TextureTarget.TEXTURE_2D);
    //         gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, s._frameTexture.width, s._frameTexture.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    //         gl.bindRenderbuffer(gl.RENDERBUFFER, s._frameRenderBuffer);
    //         gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, s._frameTexture.width, s._frameTexture.height);
    //     }
    //     s._sizeChange = false;
    // }
    

    /**创建Buffer */
    private createBuffer(data:any){
        let s = this;
        let gl = s._gl;
        let buff = gl.createBuffer();
        if(!buff){
            Log.error("Buffer 创建失败");
            return;
        }
        gl.bindBuffer(gl.ARRAY_BUFFER, buff);
        gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
        return buff;
    }

    /**创建索引Buffer */
    private createIndexBuffer(data:any){
        let s = this;
        let gl = s._gl;
        let buff = gl.createBuffer();
        if(!buff){
            Log.error("Index Buffer 创建失败");
            return;
        }
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buff);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, data, gl.STATIC_DRAW);
        return buff;
    }

    
    /**获取Attribute的大小 */
    private getAttributeSize(type:number){
        let gl = this._gl;
        switch(type){
            case gl.FLOAT_VEC2:return 2;
            case gl.FLOAT_VEC3:return 3;
            case gl.FLOAT_VEC4:return 4;
        }
        return 1;
    }

    /**获取Uniform信息 */
    private getUnifromInfo(uniformInfo:WebGLActiveInfo, location:WebGLUniformLocation, data:any){
        let s = this;
        let gl = s._gl;
        let fun:(location:WebGLUniformLocation, ...data)=>void;
        let openParam = true;
        switch(uniformInfo.type){
            case gl.FLOAT:
                fun= gl.uniform1f;
                openParam = false;
                break;
            case gl.FLOAT_VEC2:
                fun=  gl.uniform2f;
                break;
            case gl.FLOAT_VEC3:
                fun=  gl.uniform3f;
                break;
            case gl.FLOAT_VEC4:
                fun=  gl.uniform4f;
                break;
            case gl.INT:
            case gl.BOOL:
            case gl.SAMPLER_2D:
            case gl.SAMPLER_CUBE:
                fun=  gl.uniform1i;
                openParam = false;
                break;
            case gl.INT_VEC2:
            case gl.BOOL_VEC2:
                fun=  gl.uniform2i;
                break;
            case gl.INT_VEC3:
            case gl.BOOL_VEC3:
                fun=  gl.uniform3i;
                break;
            case gl.INT_VEC4:
            case gl.BOOL_VEC4:
                fun=  gl.uniform4i;
                break;
            case gl.FLOAT_MAT2:
                fun=  s.uniformMatrix2fv.bind(s);
                openParam = false;
                break;
            case gl.FLOAT_MAT3:
                fun=  s.uniformMatrix3fv.bind(s);
                openParam = false;
                break;
            case gl.FLOAT_MAT4:
                fun=  s.uniformMatrix4fv.bind(s);
                openParam = false;
                break;
        }

        return {fun:fun, openParam:openParam, location:location, data:data}
    }

    /**包装的unifromMatrix2fv 使其参数成为(location, data)*/
    private uniformMatrix2fv(index:WebGLUniformLocation, data:Float32List){
        this._gl.uniformMatrix2fv(index, false, data);
    }
    
    /**包装的unifromMatrix3fv 使其参数成为(location, data)*/
    private uniformMatrix3fv(index:WebGLUniformLocation, data:Float32List){
        this._gl.uniformMatrix3fv(index, false, data);
    }
    
    /**包装的unifromMatrix4fv 使其参数成为(location, data)*/
    private uniformMatrix4fv(index:WebGLUniformLocation, data:Float32List){
        this._gl.uniformMatrix4fv(index, false, data);
    }


}

// export type Vec = Vec2|Vec3|Vec4;
// export type Matrix = Matrix2|Matrix3|Matrix4;
// export type ShaderDateType = Vec|Matrix|Float32Array|number;


/**
 * Shader 的参数
 * 规定 
 * a开头的是 顶点坐标变量
 * u开头的是全局变量
 * indexs是索引坐标
 */
export interface ShaderParamData{
    // unifrom?:{[key:string]:ShaderDateType},
    // attribute?:number[],
    /**顶点索引 */
    indexs:GLArray;
    /**绘制类型 默认使用TRIANGLES*/
    drawType?:DrawType;
    /**绘制时enable的参数  默认为空*/
    enable?:ShaderEnableType[],
    /**绘制时是否执行clearn */
    clearn?:ClearBufferMask[],
    /**以a_xxx开头的顶点坐标 */
    [vertext:`${"a_"|"a"}${string}`]:GLArray|number|Matrix<any>|Vec;
    /**以u_xxx开头的全局变量 */
    [unifrom:`${"u_"|"u"}${string}`]:GLArray|number|boolean|string|Texture|TexImageSource|WebGL|Matrix<any>|Vec|CubeMap;
    //之前的没有区分顶点和全局变量的
    // [propName:string]:GLArray|number|boolean|string|WebGL|Matrix|Vec|CubeMap;
}

/**
 * 使用帧缓存是的参数
 */
// export interface FramebufferData{
//     framebufferW:2|4|8|16|32|64|128|256|512|1024|2048;
//     framebufferH:2|4|8|16|32|64|128|256|512|1024|2048;
// }

/**
 * 顶点数据类型
 */
export interface AttributeData{
    location:number;
    buff:WebGLBuffer;
    count:number;
}
/**
 * 索引数据类型
 */
export interface IndexsData{
    data:WebGLBuffer;
    buff:WebGLBuffer;
    count:number;
    changeData?:GLArray;
}
/**
 * Unfirom变量数据类型
 */
export interface UniformData{
    fun:(location:WebGLUniformLocation, ...data)=>void;
    /**变量的位置 */
    location:WebGLUniformLocation;
    /**参数需要展开 */
    openParam:boolean;
    texure?:ICanBindTexture;//Texture|CubeMap|WebGL;
    data:GLArray|number|boolean|string|Float32Array;
}

export interface ICanBindTexture{
    bindTexture(gl:WebGLRenderingContext, target:TextureTarget);
}