import { Express } from "express-serve-static-core";
import * as http from 'http';
import * as WebSocket from 'ws';

export function InitializeSocketServer(app: Express) {
    const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws: WebSocket) => {

    ws.on('message', (message: string) => {

        console.log('received: %s', message);
        ws.send(`Hello, you sent -> ${message}`);
    });

    ws.send('Hi there, I am a WebSocket server');
});
return server;
}