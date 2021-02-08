"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WebSocket = require("ws");
const utilities_1 = require("./utilities");
const websocketHelper_1 = require("./websocketHelper");
const http = require("http");
const jwt = require("jsonwebtoken");
const server = http.createServer();
const wss = new WebSocket.Server({ noServer: true });
let clients = [];
let uname = "";
function setupWebSocketServer() {
    wss.on('connection', function connection(ws) {
        // a single client has joined.
        console.log("web socket connection established");
        // ws.connectionID = uuid();  
        clients.push(ws);
        ws.on("close", () => {
            clients = clients.filter(generalSocket => generalSocket.connectionID !== ws.connectionID);
        });
        ws.on('message', function incoming(payload) {
            const message = utilities_1.processMessage(payload.toString());
            console.log('message payload received: %s', payload, payload.toString());
            if (!message) {
                //corrupted message from client
                //ignore
                return;
            }
            if (message.intent === "chat") {
                websocketHelper_1.broadCastMessage(message, ws, clients);
            }
            else if (message.intent === "old-messages") {
                const count = message.count;
                if (!count)
                    return;
                websocketHelper_1.retrieveAndSendMessages(count, ws, clients);
            }
        });
    });
    server.on('upgrade', function upgrade(request, socket, head) {
        const token = request.url.slice(1); // /+jwtToken 
        let email = "";
        try {
            const payload = jwt.verify(token, utilities_1.JSON_SECRET_TOKEN);
            email = payload.email;
        }
        catch (e) {
            socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
            socket.destroy();
            return;
        }
        wss.handleUpgrade(request, socket, head, function done(ws) {
            ws.connectionID = email;
            wss.emit('connection', ws, request);
        });
    });
    server.listen(1338);
}
exports.default = setupWebSocketServer;
