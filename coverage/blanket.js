var path = require('path'),
    srcDir = path.join(__dirname, '..', 'index.js');

require('blanket')({
    // Only files that match the pattern will be instrumented
    pattern: srcDir
});
