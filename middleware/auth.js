const jwt = require('jsonwebtoken');
require('dotenv/config')

function auth(req,res,next) {

    //on prend token
    const token = req.header('x-auth-token');
    //on virifier l'extastance de token :Check for token
    if(!token) {
      return res.status(401).json({msg: 'No token, authorization denied'});
    }

    try{
          // decrepty token Verify token
    const decoded = jwt.verify(token, process.env.jwtSecret);

    //Add user from payload
    req.user = decoded;
    next();
    } catch(e) {
        res.status(400).json({msg:'Token is not valid'});
    }

}

module.exports = auth;
