exports.CONFIG_NAME = '.vitel.json'
exports.COMMAND_SOURCE = `
const args = JSON.parse(process.argv[1]);
const factory = require('.');
factory(args);
`
