import * as WebSocket from "ws";
import {processMessage, CustomWebSocket, JSON_SECRET_TOKEN} from "./utilities";
import {broadCastMessage, retrieveAndSendMessages} from "./websocketHelper";
import {v4 as uuid} from "uuid";
import * as http from "http";
import * as jwt from "jsonwebtoken";

const server = http.createServer();
const wss = new WebSocket.Server({ noServer: true });

let clients: CustomWebSocket[] = []


export default function setupWebSocketServer() {

      wss.on('connection', function connection(ws: CustomWebSocket) {
          // a single client has joined.

          console.log("web socket connection established");

        // ws.connectionID = uuid();  
        clients.push(ws);

        ws.on("close", () => {
          clients = clients.filter(generalSocket => generalSocket.connectionID !== ws.connectionID)
        });

        ws.on('message', function incoming(payload) {

          const message = processMessage(payload.toString());
          console.log('message payload received: %s', payload, payload.toString());

          if(!message) {
              //corrupted message from client
              //ignore
              return;
          }

          if(message.intent === "chat") {
             broadCastMessage(message, ws, clients);
          } else if(message.intent === "old-messages"){
            const count = message.count;
            if(!count) return;
            retrieveAndSendMessages(count, ws, clients);
          }
   
        });
      });

      server.on('upgrade', function upgrade(request, socket, head) {

       const token = request.url.slice(1); // /+jwtToken 
       let email = "";

       try {
        const payload: any = jwt.verify(token, JSON_SECRET_TOKEN)
        email = payload.email;
       } catch(e) {
        socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
        socket.destroy();
        return;
       }


      
          wss.handleUpgrade(request, socket, head, function done(ws) {
            (ws as CustomWebSocket).connectionID = email;
            wss.emit('connection', ws, request);
          });
  
        });

        server.listen(1338);
}