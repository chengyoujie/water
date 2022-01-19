/**
 * egret AutoCodeEui 初始化
 * 默认配置如果是ts文件按下F12会执行此条命令（autocode.config.js  可以用 >Egret AutoCode  打开生成代码配置 打开编辑)
 * 输出当前文件的选择内容
 */
var fs = require("fs");
var path = require("path");
var progress = require("process");
console.log("开始解析ts文件");
console.log("===输入参数====");
for(let key in progress.argv)
{
	console.log("key: "+key+ " value:"+progress.argv[key]);
}
let url = progress.argv[2];
let selectStart = progress.argv[3];
let selectEnd = progress.argv[4];
if(!fs.existsSync(url))
{
    console.log("没有找到："+url);
    return;
}
let txt = fs.readFileSync(url, "utf-8");
if(txt)
{
    let selectTxt = txt.substring(selectStart, selectEnd);
    console.log("选中文本： "+selectTxt);
}else{
    console.log("文件内容为空： "+url);
}