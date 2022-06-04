function rpcUpdateMetadata(ctx: nkruntime.Context, logger: nkruntime.Logger, nk: nkruntime.Nakama, payload: string) {
    
    if (!ctx.userId) {
        throw Error('No user ID in context');
    }    

    let metadata : CustomMetadata = {
        trophy: 0,
        win_games: 0,
        lose_games: 0,
        current_win_streak: 0,
        match_played: 0,
        booster_unlocked: [],
        longest_win_streak: 0,
        stars_earned: 0,
        average_game_score: 0,
        best_game_score: 0,
        best_move_score: 0
    }
    let timezone = 'UTC';
    let language = 'en';
    let avatar = '';
    nk.accountUpdateId(ctx.userId, ctx.username, undefined, timezone, undefined, language, avatar, metadata);
    return JSON.stringify(nk.accountGetId(ctx.userId));
}


interface CustomMetadata {
    trophy: number,
    win_games: number,
    lose_games: number,
    current_win_streak: number,
    match_played: number,
    booster_unlocked: {
        count: number,
        boosters: BoosterInterface,
    }[],
    longest_win_streak: number,
    stars_earned: number,
    average_game_score: number,
    best_game_score: number,
    best_move_score: number
}

interface BoosterInterface {
    id: number,
    type: BoostersTypeEnum,
    name: string,
    description: string,
    price: number,
    booster_avatar: string

}

enum BoostersTypeEnum {
    Bronze = 1,
    Silver = 2,
    Gold = 3,
    Diamond = 4
}
