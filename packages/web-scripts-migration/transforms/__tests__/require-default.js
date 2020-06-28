jest.autoMockOff();

const { defineTest } = require('jscodeshift/dist/testUtils');

defineTest(__dirname, 'require-default');
