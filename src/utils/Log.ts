export class Log{
    /**普通日志 */
    public static log(msg:string){
        console.log(msg);
    }

    /**错误日志 */
    public static error(msg:string){
        console.error(msg);
    }

    /**警告日志 */
    public static warn(msg:string){
        console.warn(msg);
    }
}