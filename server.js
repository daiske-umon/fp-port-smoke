const http = require('http');
if (!process.env.DATABASE_URL) { throw new Error('DATABASE_URL must be set. Did you forget to provision a database?'); }
http.createServer((q, r) => r.end('port-smoke ok on ' + process.env.PORT + '\n')).listen(process.env.PORT);
