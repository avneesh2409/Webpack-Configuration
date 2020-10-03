const { module } = require("../../webpack.config");

module.exports = (url,option) =>{
    return fetch(url,option);
}