# mochawesome-screenshots
This is a fork of Mochawesome(MochawesomePlusPlus) reporter with added screenshots functionality.

Installation of the module is fairly straight forward:
_**npm install mochawesome-screenshots**_


Usage remains the same as the Mocahwesome.

e.g. Programatically:
```
var Mocha = require('mocha');
// Instantiate a Mocha instance.

var mocha = new Mocha({
    ui: 'bdd',
    reporter: 'mochawesome-screenshots',
    reporterOptions: {
    reportDir: './',
    reportName: 'testResults_'
    },
    timeout: 60000
    });
```

or 

via Command line:
**_mocha test.js --reporter mochawesome-screenshots_**
