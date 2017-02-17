const chalk = require('chalk');
const stringify = require('json-stringify-safe');

var logReport = function logReport() {

    if (!arguments[0].test || !arguments[1]) {
        console.log('\n[' + chalk.gray('mochawesome') + '] Error: Invalid log report arguments.');
        return;
    }

    var test = arguments[0].test;
    var data = arguments[1];

    if (!test.logr) {
        test.logr = stringify(data,null,2);
    } else {
        test.logr += '<br>'+stringify(data,null,2);
    }
};

module.exports = logReport;