import  *  as  winston  from  'winston';
import  DailyRotateFile from 'winston-daily-rotate-file';

const transport: DailyRotateFile = new DailyRotateFile({
    filename: 'log/app-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '1024m',
    maxFiles: '30d'
  });

const netLogger = winston.createLogger({
    // format: winston.format.combine(
    //     // winston.format.label({ label: 'right meow!' }),
    //     winston.format.timestamp(),
    //     // winston.format.prettyPrint(),
    // ),
    transports: [
        // 控制台输出
        // new winston.transports.Console(),
        // 标准文件输出
        // new winston.transports.File({ filename: 'log/net.log' }),
        // 按时间切割文件
        transport
    ]
})

// 日志工具(实际存储文件日志)
function info(info: string) {
    netLogger.info(info);

}
function request(info: string) {
    netLogger.info(info);

}
function response(info: string) {
    netLogger.info(info);

}
function warning(info: string) {
    netLogger.info(info);

}
function error(info: string) {
    netLogger.info(info);

}
export {
    info, request, response, warning, error
}