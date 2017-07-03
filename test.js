const plugin = require('./index');
const co = require('co');

const logger = console.log.bind(console);
const ctx = { cwd: 'cwdpath', logger };
plugin.init(ctx);

// plugin.run().then(console.log);
co(plugin.run());
