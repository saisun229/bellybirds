"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WebSocket = require("ws");
const utilities_1 = require("./utilities");
function setupWebSocketServer() {
    const wss = new WebSocket.Server({
        port: 1338
    });
    wss.on('connection', function connection(ws) {
        // a single client has joined.
        ws.on('message', function incoming(payload) {
            const message = utilities_1.processMessage(payload.toString());
            console.log('message payload received: %s', payload, payload.toString());
            if (!message) {
                //corrupted message from client
                //ignore
                return;
            }
            ws.send(JSON.stringify(message));
        });
        ws.send('something');
    });
}
exports.default = setupWebSocketServer;
