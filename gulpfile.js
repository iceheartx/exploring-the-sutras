require('babel-core/register');
require('babel-polyfill');

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const requireDir = require('require-dir');
requireDir('./tasks');