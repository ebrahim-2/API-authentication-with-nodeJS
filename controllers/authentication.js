const db            = require('../models'),
      jwt           = require('jsonwebtoken'),
    { createToken } = require('../helpers/token');

exports.signUp = async (req, res, next) => {
  try {
    const user = await db.Users.findOne({
      email: req.body.email
    });

    if (user) {
      next({
        message: 'Email is in use please try another one'
      });
    } else {
      const user = await db.Users.create(req.body);
      const token = createToken(user);

      res.json({
        message: 'User created successfully',
        token
      });
    }

  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = await db.Users.findOne({
      email: req.body.email
    });

    if (user) {
      const isMatch = await user.comparePassword(req.body.password);

      if (isMatch) {
        const token = createToken(user);
        res.json({
          message: 'user login successfully',
          token
        });
      } else {
        res.json({
          message: 'wrong password'
        });
      }
    } else {
      res.json({
        message: 'there is no user with this email please check the email or signUp for new account'
      });
    }

  } catch (error) {
    next(error);
  }
};