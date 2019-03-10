export class LoggingService{
    logInfo(msg:string):void{
        console.log("Info: "+msg);
    }
    logDebug(msg:string):void{
        console.log("Debug: "+msg);
    }
    logWarn(msg:string):string{
        return "Warn: "+msg;
    }
    logError(msg:string):string{
        return "Error: "+msg;
    }
}