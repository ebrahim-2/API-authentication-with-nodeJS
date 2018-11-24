const jwt = require('jsonwebtoken'),
      db  = require('../models');

exports.checkToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (token) {
    req.token = token;
    next();
  } else {
    res.status(401).json({
      message: 'Unauthorized'
    });
  }
}

exports.verifyToken = (req, res, next) => {
  jwt.verify(req.token, process.env.SECRET_KEY, async (err, payload) => {
    if (err) {
      res.sendStatus(401);
    } else {
      const user = await db.Users.findById(payload.sub);
      if (user) return next();
      res.json('error');
    }
  });
}

exports.createToken = user => {
  const timestamp = new Date().getTime();
  return jwt.sign({
    sub: user._id,
    iat: timestamp
  }, process.env.SECRET_KEY);
}