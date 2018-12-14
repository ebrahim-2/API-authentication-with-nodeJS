const {
    signUp,
    login
} = require('./authentication');

module.exports = {
    auth: {
        login,
        signUp,
    }
}
