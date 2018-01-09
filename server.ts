// import * as express from "express";
// import * as cors from "cors";
// import * as http from 'http';
// import * as WebSocket from 'ws';

// const app = express();
// const PORT = process.env.PORT || 8081;

// app.use(cors());

// const server = http.createServer(app);

// //initialize the WebSocket server instance
// const wss = new WebSocket.Server({
//     server
// });


// wss.on("connection", (ws:WebSocket) => {
//     ws.on('message', (message: string) => {

//         //log the received message and send it back to the client
//         console.log('received: %s', message);
//         ws.send(`Hello, you sent -> ${message}`);
//     });
//     ws.send("Hi there I am the server")
// });

// app.get("/api/test", async (err, res) => {
//     res.json({message: "hi"});
//   });

// app.listen(PORT, () => {
//     console.log(`Node server listening on http://localhost:${PORT}`);
//   });

import * as express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';
import * as cors from "cors";
import { InitializeSocketServer } from './WebSocketService';

const PORT = process.env.PORT || 8081;

const app = express();
app.use(cors());
app.get("/api/test", async (err, res) => {
    res.json({message: "hi"});
  });
const server = InitializeSocketServer(app);

//start our server
server.listen(PORT, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});