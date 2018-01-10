import { Express } from "express-serve-static-core";
import * as http from 'http';
import * as WebSocket from 'ws';
export function InitializeSocketServer(app: Express) {
    const server = http.createServer(app);

    const socketServer = new WebSocket.Server({ server });

    socketServer.on('connection', (socket: WebSocket) => {

        socket.on('message', (message: string) => {

            console.log('received: %s', message);
            socket.send(`Hello, you sent -> ${message}`);
        });

        socket.on("error", () => console.log("connection error oh well"));
        socket.send('Hi there, I am a WebSocket server');
    });

    return server;
}