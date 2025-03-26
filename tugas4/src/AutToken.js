const jwt = require('jsonwebtoken');

const AutToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if(token === null) return res.sendStatus(401);

    jwt.verify(token, 'your_secret_key', (err, user) => {
        if(err) return res.sendStatus(403);
        req.user = user;
        next();
    });

}

module.exports = AutToken;