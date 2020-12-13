// Prepare folder structure

const fs = require('fs-extra');

const dir = './cucumber_report/html';

 

if (fs.existsSync(dir)){

  fs.removeSync(dir);

}

fs.mkdirSync(dir);

 

// Report configuration

const reporter = require('cucumber-html-reporter');

const options = {

  theme: 'bootstrap',

  jsonDir: 'cucumber_report',

  output: 'cucumber_report/html/cucumber_report.html',

  reportSuiteAsScenarios: true,

  scenarioTimestamp: true,

  launchReport: true,

  metadata: {
    "App Version":"0.3.2",
    "Test Environment": "PRODUCTION",
    "Browser": "Chrome  87.0.4280.88",
    "Platform": "Windows 10",
    "Parallel": "Scenarios",
    "Executed": "Locally"
  }

}
// Generate report
reporter.generate(options);