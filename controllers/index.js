const {
    signUp,
    login
} = require('./authentication');

const { checkToken, verifyToken } = require('../helpers/token')

module.exports = {
    auth: {
        login,
        signUp,
    }
}