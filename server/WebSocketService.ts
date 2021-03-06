import { Express } from "express-serve-static-core";
import * as http from 'http';
import * as WebSocket from 'ws';
import { Server } from "http";
export function InitializeSocketServer(server: Server) {

    const socketServer = new WebSocket.Server({ server });

    socketServer.on('connection', (socket: WebSocket) => {

        socket.on('message', (message: string) => {

            console.log('received: %s', message);
            socket.send(`Hello, you sent -> ${message}`);
            setTimeout(() => socket.send("Hi this is a follow up, hope you are good!"), 3000);
        });

        socket.on("error", () => console.log("connection error oh well"));
        socket.send('Hi there, I am a WebSocket server');
    });
    
    return socketServer;
}