
/**
 * Shader的类型
 */
 export const enum ShaderType{
    /**顶点着色器 */
    VERTEX = 35633,
    /**片段着色器 */
    FRAGMENT = 35632,
}
/**
 * 绘制的类型
 */
 export const enum DrawType{
    POINTS  = 0,
    LINES = 1,
    LINE_LOOP = 2,
    LINE_STRIP = 3,
    TRIANGLES = 4,
    TRIANGLE_STRIP = 5,
    TRIANGLE_FAN = 6,
}
/**
 * shader enable的类型
 */
export const enum ShaderEnableType{
    CULL_FACE                      = 0x0B44,
    BLEND                          = 0x0BE2,
    DITHER                         = 0x0BD0,
    STENCIL_TEST                   = 0x0B90,
    DEPTH_TEST                     = 0x0B71,
    SCISSOR_TEST                   = 0x0C11,
    POLYGON_OFFSET_FILL            = 0x8037,
    SAMPLE_ALPHA_TO_COVERAGE       = 0x809E,
    SAMPLE_COVERAGE                = 0x80A0,
}

export const enum PixelFormat{
    DEPTH_COMPONENT                = 0x1902,
    ALPHA                          = 0x1906,
    RGB                            = 0x1907,
    RGBA                           = 0x1908,
    LUMINANCE                      = 0x1909,
    LUMINANCE_ALPHA                = 0x190A,
}


export const enum TextureWrapMode{
    REPEAT                         = 0x2901,
    CLAMP_TO_EDGE                  = 0x812F,
    MIRRORED_REPEAT                = 0x8370,
}


export const enum TextureMagFilter{
    NEAREST                        = 0x2600,
    LINEAR                         = 0x2601,
}

export const enum TextureMinFilter {
    NEAREST                        = 0x2600,
    LINEAR                         = 0x2601,
    NEAREST_MIPMAP_NEAREST         = 0x2700,
    LINEAR_MIPMAP_NEAREST          = 0x2701,
    NEAREST_MIPMAP_LINEAR          = 0x2702,
    LINEAR_MIPMAP_LINEAR           = 0x2703,

}

export const enum TextureCubeMapPos{
    // TEXTURE_CUBE_MAP               = 0x8513,
    // TEXTURE_BINDING_CUBE_MAP       = 0x8514,
    TEXTURE_CUBE_MAP_POSITIVE_X    = 0x8515,
    TEXTURE_CUBE_MAP_NEGATIVE_X    = 0x8516,
    TEXTURE_CUBE_MAP_POSITIVE_Y    = 0x8517,
    TEXTURE_CUBE_MAP_NEGATIVE_Y    = 0x8518,
    TEXTURE_CUBE_MAP_POSITIVE_Z    = 0x8519,
    TEXTURE_CUBE_MAP_NEGATIVE_Z    = 0x851A,
    // MAX_CUBE_MAP_TEXTURE_SIZE      = 0x851C,
}

export const enum TextureTarget {

    TEXTURE_2D                     = 0x0DE1,
    TEXTURE                        = 0x1702,
    
    TEXTURE_CUBE_MAP               = 0x8513,
    TEXTURE_BINDING_CUBE_MAP       = 0x8514,
}

export const enum ClearBufferMask{
    DEPTH_BUFFER_BIT               = 0x00000100,
    STENCIL_BUFFER_BIT             = 0x00000400,
    COLOR_BUFFER_BIT               = 0x00004000,
}

export const enum DataType {

    BYTE                           = 0x1400,
    UNSIGNED_BYTE                  = 0x1401,
    SHORT                          = 0x1402,
    UNSIGNED_SHORT                 = 0x1403,
    INT                            = 0x1404,
    UNSIGNED_INT                   = 0x1405,
    FLOAT                          = 0x1406,
}