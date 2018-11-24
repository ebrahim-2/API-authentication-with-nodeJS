const router = require('express').Router(),
      contr  = require('../controllers');

router.post('/signUp', contr.auth.signUp);
router.post('/login',  contr.auth.login);

module.exports = router;