// import {Client} from "@heroiclabs/nakama-js"
// var client = new nakamajs.Client("defaultkey", "127.0.0.1", 7350);
// const socket = client.createSocket();
// const session = await client.authenticateDevice('00000000-0000-0000-0000-000000000000', true, "mycustomusername");
// var appearOnline = true;
// var connectionTimeout = 30;
// await socket.connect(session, appearOnline, connectionTimeout);



// Op Codes as a static class
function saveresultrpc(ctx: nkruntime.Context, logger: nkruntime.Logger, nk: nkruntime.Nakama, payload: string) {
    let json = JSON.parse(payload);
    
    var accHost=nk.accountGetId(json.hostId)
    var accClient=nk.accountGetId(json.clientId)
    var winUser = json.winUser
    var hostBooster=json.hostBooster
    var clientBooster=json.clientBooster
    var starNum=json.starNum



    /******************************** Host Check *****************************************/


    if(accHost.user.username === winUser){
	    var trophy=accHost.user.metadata.trophy
	    var coins=accHost.user.metadata.coins
    if(accHost.user.metadata.current_win_streak >= 3){
    trophy=trophy+60
    coins=coins+40
    }
    if(accHost.user.metadata.current_win_streak === 2){
    trophy = trophy+30
    coins = coins+30
    }
    if(accHost.user.metadata.current_win_streak <= 1){
    trophy = trophy+25
    coins = coins+20
    }

	          let metadataHost = {
                trophy: trophy,
		coins:coins,
                win_games: accHost.user.metadata.win_games+1,
                lose_games: accHost.user.metadata.lose_games,
                current_win_streak: accHost.user.metadata.current_win_streak+1,
                match_played: accHost.user.metadata.match_played+1,
                boosters: accHost.user.metadata.boosters,
                longest_win_streak: 0,
                stars_earned: accHost.user.metadata.stars_earned+parseInt(starNum),
                average_game_score: 0,
                best_game_score: 0,
                best_move_score: 0,
                  };
                  let timezone = 'UTC';
                  let language = 'en';
                  let avatar = '';
		 
                  nk.accountUpdateId(accHost.user.userId, accHost.user.username, undefined, timezone, undefined, language, avatar, metadataHost);

    
    }
    else{
    var countfire= accHost.user.metadata.boosters[0].count
    var countcrazy= accHost.user.metadata.boosters[1].count
    var countpaint= accHost.user.metadata.boosters[2].count
    var countmystery= accHost.user.metadata.boosters[3].count
    var countlaser= accHost.user.metadata.boosters[4].count
    var countmagic= accHost.user.metadata.boosters[5].count
    var countvoltage= accHost.user.metadata.boosters[6].count
    var countufo= accHost.user.metadata.boosters[7].count
    var countcolonel= accHost.user.metadata.boosters[8].count
    var countmonkey= accHost.user.metadata.boosters[9].count
if(hostBooster==="fireCracker"){
countfire--
}
if(hostBooster==="crazyRocket"){
countcrazy--
}
if(hostBooster==="paintBucket"){
countpaint--
}
if(hostBooster==="mysteryHat"){
countmystery--
}
if(hostBooster==="laserBeam"){
countlaser--
}
if(hostBooster==="magicWand"){
countmagic--
}
if(hostBooster==="highVoltage"){
countvoltage--
}
if(hostBooster==="ufo"){
countufo--
}
if(hostBooster==="colonelMcquack"){
countcolonel--
}
if(hostBooster==="monkeyJooJoo"){
countmonkey--
}


	    let metadataHost = {
	    trophy: accHost.user.metadata.trophy-24,
	    win_games: accHost.user.metadata.win_games,
	    lose_games: accHost.user.metadata.lose_games+1,
	    current_win_streak:  0,
	    coins:accHost.user.metadata.coins,
	    match_played: accHost.user.metadata.match_played+1,
	    boosters:[
                {name:"fireCracker",count:1},
                {name:"crazyRocket",count:countcrazy},
                {name:"paintBucket",count:countpaint},
                {name:"mysteryHat",count:countmystery},
                {name:"laserBeam",count:countlaser},
                {name:"magicWand",count:countmagic},
                {name:"highVoltage",count:countvoltage},
                {name:"ufo",count:countufo},
                {name:"colonelMcquack",count:countcolonel},
                {name:"monkeyJooJoo",count:countmonkey},
                ],
	    longest_win_streak: 0,
            stars_earned: accHost.user.metadata.stars_earned,
            average_game_score: 0,
            best_game_score: 0,
            best_move_score: 0,
	    
	    };
                  let timezone = 'UTC';
                  let language = 'en';
                  let avatar = '';
                  nk.accountUpdateId(accHost.user.userId, accHost.user.username, undefined, timezone, undefined, language, avatar, metadataHost);

    }
/********************************************Client check *******************************************/
	if(accClient.user.username === winUser){
		 

	          var trophy=accClient.user.metadata.trophy
            var coins=accClient.user.metadata.coins
    if(accClient.user.metadata.current_win_streak >= 3){
    trophy=trophy+60
    coins=coins+40
    }
    if(accClient.user.metadata.current_win_streak === 2){
    trophy = trophy+30
    coins = coins+30
    }
    if(accClient.user.metadata.current_win_streak <= 1){
    trophy = trophy+25
    coins = coins+20
    }


	let metadataClient = {
                trophy: trophy,
		coins:coins,
                win_games: accClient.user.metadata.win_games+1,
                lose_games: accClient.user.metadata.lose_games,
                current_win_streak: accClient.user.metadata.current_win_streak+1,
                match_played: accClient.user.metadata.match_played+1,
                boosters: accClient.user.metadata.boosters,
                longest_win_streak: 0,
                stars_earned: accClient.user.metadata.stars_earned+parseInt(starNum),
                average_game_score: 0,
                best_game_score: 0,
                best_move_score: 0,
                  };
                  let timezone = 'UTC';
                  let language = 'en';
                  let avatar = '';
                  nk.accountUpdateId(accClient.user.userId, accClient.user.username, undefined, timezone, undefined, language, avatar, metadataClient);

	
		
	}
	else{
                  var countfire= accClient.user.metadata.boosters[0].count
    var countcrazy= accClient.user.metadata.boosters[1].count
    var countpaint= accClient.user.metadata.boosters[2].count
    var countmystery= accClient.user.metadata.boosters[3].count
    var countlaser= accClient.user.metadata.boosters[4].count
    var countmagic= accClient.user.metadata.boosters[5].count
    var countvoltage= accClient.user.metadata.boosters[6].count
    var countufo= accClient.user.metadata.boosters[7].count
    var countcolonel= accClient.user.metadata.boosters[8].count
    var countmonkey= accClient.user.metadata.boosters[9].count
if(clientBooster==="fireCracker"){
countfire--
}
if(clientBooster==="crazyRocket"){
countcrazy--
}
if(clientBooster==="paintBucket"){
countpaint--
}
if(clientBooster==="mysteryHat"){
countmystery--
}
if(clientBooster==="laserBeam"){
countlaser--
}
if(clientBooster==="magicWand"){
countmagic--
}
if(clientBooster==="highVoltage"){
countvoltage--
}
if(clientBooster==="ufo"){
countufo--
}
if(clientBooster==="colonelMcquack"){
countcolonel--
}
if(clientBooster==="monkeyJooJoo"){
countmonkey--
}

            let metadataClient = {
            trophy: accClient.user.metadata.trophy-24,
            win_games: accClient.user.metadata.win_games,
            lose_games: accClient.user.metadata.lose_games+1,
	    coins:accClient.user.metadata.coins,
            current_win_streak: 0,
            match_played: accClient.user.metadata.match_played+1,
            boosters:[
                {name:"fireCracker",count:1},
                {name:"crazyRocket",count:countcrazy},
                {name:"paintBucket",count:countpaint},
                {name:"mysteryHat",count:countmystery},
                {name:"laserBeam",count:countlaser},
                {name:"magicWand",count:countmagic},
                {name:"highVoltage",count:countvoltage},
                {name:"ufo",count:countufo},
                {name:"colonelMcquack",count:countcolonel},
                {name:"monkeyJooJoo",count:countmonkey},
                ],
            longest_win_streak: 0,
            stars_earned: accClient.user.metadata.stars_earned,
            average_game_score: 0,
            best_game_score: 0,
            best_move_score: 0,

            };
                  logger.debug("hostclient",metadataClient)


                  let timezone = 'UTC';
                  let language = 'en';
                  let avatar = '';
                  nk.accountUpdateId(accClient.user.userId, accClient.user.username, undefined, timezone, undefined, language, avatar, metadataClient);

    }



return JSON.stringify({"msg":"Successfully save","code":200})
 
}
