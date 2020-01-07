const connect = require('connect');
const serveStatic = require('serve-static');
const PORT = process.env.PORT || 3000;

connect().use(serveStatic(__dirname)).listen(PORT, function(){
    console.log('Server running on ${PORT} ...');
});