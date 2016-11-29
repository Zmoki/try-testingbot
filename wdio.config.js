/* https://testingbot.com/support/getting-started/webdriverjs.html */

exports.config = {
  user: process.env.TB_KEY,
  key: process.env.TB_SECRET,
  specs: ['./specs/**/*.js'],
  exclude: [],
  maxInstances: 10,
  capabilities: [{
    maxInstances: 5,
    browserName: 'firefox',
  }],
  sync: true,
  logLevel: 'silent',
  coloredLogs: true,
  screenshotPath: './reports-errors-shots/',
  host: 'localhost',
  port: 80,
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: ['testingbot'],
  tbTunnel: true,
  framework: 'mocha',
  reporters: ['allure'],
  reporterOptions: {outputDir: './reports'},
  mochaOpts: {ui: 'bdd'},
}
