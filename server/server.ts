import * as express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';
import { InitializeSocketServer } from './WebSocketService';
import { InitializeApi } from './ApiConfigurationService';

const PORT = process.env.PORT || 8081;
const app = express();
const server = http.createServer(app);
const socketServer = InitializeSocketServer(server);

InitializeApi(app, server);

server.listen(PORT, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});