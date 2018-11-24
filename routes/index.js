const router = require('express').Router(),
      users  = require('./users');

router.use(users);

module.exports = router;