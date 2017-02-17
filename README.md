# mochawesome-screenshots
This is a fork of Mochawesome(MochawesomePlusPlus) reporter with added screenshots functionality for Protractor.
A reporter takes a screenshot after each failed Protractor test.

Installation of the module:
```
$ npm install mochawesome-screenshots --save-dev
```

Usage remains the same as the Mocahwesome.

In your Protractor configuration file:
```
  framework: 'mocha',

  mochaOpts: {
      reporter: 'mochawesome-screenshots',
      reporterOptions: {
          reportDir: 'customReportDir',
          reportName: 'customReportName',
          reportTitle: 'customReportTitle',
          reportPageTitle: 'customReportPageTitle',
          takePassedScreenshot: false,
          clearOldScreenshots: true,
          jsonReport: false,
          multiReport: false
      },
      timeout: 600000
  },
```

Use 'multiReport = true' for parallel test execution.

Log data to report:
    const logReport = require('mochawesome-screenshots/logReport');

    it('Log build number', function() {
        logReport(this, 'build number:' + buildNumber);
    });