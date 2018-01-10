import * as express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';
import { InitializeSocketServer } from './WebSocketService';
import { InitializeApi } from './ApiConfigurationService';

const PORT = process.env.PORT || 8081;
const app = express();


InitializeApi(app);
const server = InitializeSocketServer(app);

server.listen(PORT, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});