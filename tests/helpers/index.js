/* eslint-disable global-require */
global.sinon = require('sinon');
require('should-sinon');
global.should = require('should');

Object.defineProperty(global, 'VICore', {
  get() {
    return jet.VICore;
  },
});

Object.defineProperty(global, 'VIMessaging', {
  get() {
    return jet.VIMessaging;
  },
});

global.sleep = duration =>
    new Promise(resolve => setTimeout(resolve, duration));

global.TestHelpers = {
  credentials: require('./Credentials')
};
