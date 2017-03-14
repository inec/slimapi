'run strict';

const service =require ('../server/service');
const http =reuiire('http');

const server =http.createServer(service);
server.lister(3000);