# mochawesome-extended
This is a fork of mochawesome-screenshots reporter with fixes and added functionality for Protractor.

Installation of the module:
```
$ npm install mochawesome-extended --save-dev
```

Usage remains the same as the Mocahwesome.

In your Protractor configuration file:
```
  framework: 'mocha',

  mochaOpts: {
      reporter: 'mochawesome-extended',
      reporterOptions: {
          reportDir: 'customReportDir',
          reportName: 'customReportName',
          reportTitle: 'customReportTitle',
          reportPageTitle: 'customReportPageTitle',
          takePassedScreenshot: false,
          clearOldScreenshots: true,
          shortScrFileNames: false,
          jsonReport: false,
          multiReport: false,
          runPercantage: true
      },
      timeout: 600000
  },
```

Use 'runPercantage = true' to calculate percentage from executed tests (i.e avoid skipped cases in calculation)

Use 'multiReport = true' for parallel test execution (adding timestamp in report file name),
 or change report name in tests or hooks for shardTestFiles option:

    const logReport = require('mochawesome-extended/logReport');
        
    it('Change report name', function() {
        logReport.setReportName(this, 'customReportName');
    });

Log data to report:

    const logReport = require('mochawesome-extended/logReport');

    it('Log build number', function() {
        logReport.log(this, 'build number:' + buildNumber);
    });

Add custom screenshots from mochawesome-reports/screenshots folder to report:

    it('Custom screenshot', function() {
        ..
        save screenshot 1 to ('./mochawesome-reports/screenshots/'+imageFileName1);
        save screenshot 2 to ('./mochawesome-reports/screenshots/'+imageFileName2);
        ..
        logReport.setScreenshot(this, imageFileName1, 'message1');
        logReport.setScreenshot(this, imageFileName2, 'message2');
    });