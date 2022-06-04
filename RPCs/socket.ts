// import {Client} from "@heroiclabs/nakama-js"
// var client = new nakamajs.Client("defaultkey", "127.0.0.1", 7350);
// const socket = client.createSocket();
// const session = await client.authenticateDevice('00000000-0000-0000-0000-000000000000', true, "mycustomusername");
// var appearOnline = true;
// var connectionTimeout = 30;
// await socket.connect(session, appearOnline, connectionTimeout);



// Op Codes as a static class
function rpcgetmatchid(ctx: nkruntime.Context, logger: nkruntime.Logger, nk: nkruntime.Nakama, payload: string) {
   // let json = JSON.parse(payload);
    var templateId=Math.floor(Math.random() * 10)+1
    var seednumber=Math.random()
    var acc=nk.accountGetId(ctx.userId)
    //logger.debug(acc);
var Response = {"templateId":templateId,"seednumber":seednumber,"host":'',"what":acc}
   // logger.debug('user_id: %s, payload: %q', ctx.userId, json);
    return JSON.stringify(Response)
}
