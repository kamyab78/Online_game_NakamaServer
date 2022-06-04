// import {Client} from "@heroiclabs/nakama-js"
// var client = new nakamajs.Client("defaultkey", "127.0.0.1", 7350);
// const socket = client.createSocket();
// const session = await client.authenticateDevice('00000000-0000-0000-0000-000000000000', true, "mycustomusername");
// var appearOnline = true;
// var connectionTimeout = 30;
// await socket.connect(session, appearOnline, connectionTimeout);



// Op Codes as a static class
function userinforpc(ctx: nkruntime.Context, logger: nkruntime.Logger, nk: nkruntime.Nakama, payload: string) {
   // let json = JSON.parse(payload);
    
    var acc=nk.accountGetId(ctx.userId)
    //logger.debug(acc);
    logger.debug("meta",acc.user.metadata)
    if(Object.keys(acc.user.metadata).length === 0 && acc.user.metadata.constructor === Object){

	        let metadata = {
		trophy: 0,
		win_games: 0,
		lose_games: 0,
		current_win_streak: 0,
	        match_played: 0,
		coins:0,
		
        	boosters: [
		{name:"fireCracker",count:1},
		{name:"crazyRocket",count:0},
		{name:"paintBucket",count:0},
		{name:"mysteryHat",count:0},
		{name:"laserBeam",count:0},
		{name:"magicWand",count:0},
		{name:"highVoltage",count:0},			
		{name:"ufo",count:0},
		{name:"colonelMcquack",count:0},
		{name:"monkeyJooJoo",count:0},
		],
	        longest_win_streak: 0,
	        stars_earned: 0,
	        average_game_score: 0,
	        best_game_score: 0,
	        best_move_score: 0,
		  };	
		  let timezone = 'UTC';	
		  let language = 'en';
	          let avatar = '';
		  nk.accountUpdateId(ctx.userId, ctx.username, undefined, timezone, undefined, language, avatar, metadata);
	    
    }
    acc=nk.accountGetId(ctx.userId)
var Response = {"userinfo":acc}
   // logger.debug('user_id: %s, payload: %q', ctx.userId, json);
    return JSON.stringify(Response)
}
