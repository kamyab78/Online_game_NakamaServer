
var count=0;
function InitModule(ctx: nkruntime.Context, logger: nkruntime.Logger, nk: nkruntime.Nakama, initializer: nkruntime.Initializer) {
    logger.info("Loading module...");

    //Test Config -----------------------------------------------
    initializer.registerRpc("Echo" , rpcEcho);
    //-----------------------------------------------------------

    //Global Config _____________________________________________
    initializer.registerRpc("GetUpdate" , rpcGetUpdate);
    //___________________________________________________________

    initializer.registerRpc("Test1", rpcTest1);
initializer.registerRpc("testload",rpcgetmatchid)
    initializer.registerRpc("shop", rpcshop);
    initializer.registerRpc("UpdateMetadata", rpcUpdateMetadata);
    initializer.registerRpc("userinfo",userinforpc)
        initializer.registerRpc("saveresult",saveresultrpc)
    logger.info("Module loaded!");

}
