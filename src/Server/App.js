var server = require('./server');
const port = server.get('port');
server.listen(port);
console.log ("server is runing")