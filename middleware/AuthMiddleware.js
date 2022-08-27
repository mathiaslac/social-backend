const jwt = require("jsonwebtoken");

module.exports = function( req, res, next ) {
    if( req.method === "OPTIONS" )
        next();
        
    try {
        const token = req.headers.authorization;
        if(!token)
            return res.status(401).json({
                message: "Session is not found. Relog pls!"
            });
        
        // Чтобы избежать ошибок с тем, что token != array
        const split_token = token.split(" ")[1];

        const decoded = jwt.verify(split_token, process.env.SECRET_KEY);
        if( decoded != null )
        {
            /**
             * Place for some if's
             */
            req.user = decoded;

            // We handle route controller
            return next();
        } else {
            return res.status(401).json({
                message: "Session is not found. Relog pls!"
            });
        }
    } catch(e) {
        console.log(e);
        res.status(401).json({
            message: "Session is not found. Relog pls!"
        });
    }
}