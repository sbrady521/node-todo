const configValues = require('./config')

module.exports = {
    getDbConnectionString: function() {
        return `mongodb://${configValues.uname}:${configValues.pwd}@ds017231.mlab.com:17231/nodetodo-db`
    }
}