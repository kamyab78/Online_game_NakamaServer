function rpcshop(ctx: nkruntime.Context, logger: nkruntime.Logger, nk: nkruntime.Nakama, payload: string) {
    // let json = JSON.parse(payload);

    // logger.debug('user_id: %s, payload: %q', ctx.userId, json);
let shoparr=[{id:1,cost:60,count:400},{id:2,cost:190,count:1000},{id:3,cost:280,count:2500},{id:4,cost:430,count:5000},{id:2,cost:590,count:8000},{id:2,cost:790,count:15000}]
return JSON.stringify(shoparr);
// return JSON.stringify({success : true , message: "new new"});
}
