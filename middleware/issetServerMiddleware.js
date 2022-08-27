const servers = require("../config/servers");

module.exports = function( req, res, next ) {
    if( req.method === "OPTIONS" )
        next();

    const { server } = req.params;

    if( typeof servers[server] !== "undefined" )
    {
        // Create var for comfotable 
        req.serverid = servers[server];

        // Return controller
        return next();
    }
    else
    {
        return res.status(401).json({
            message: "Server was not found!"
        });
    }
}