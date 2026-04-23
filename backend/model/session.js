const jwt = require('jsonwebtoken');
const config = require('../config0');

function sign(email) {
    return jwt.sign({ email, v: true}, config.jwt.secret, { expiresIn: config.jwt.expiresIn });
}

function decode(token){
    try {
        const p = jwt.verify(token, config.jwt.secret);
        return p.v ? { email: p.email } : null;
    } catch { 
        return null;
    }
}

module.exports = { sign, decode }