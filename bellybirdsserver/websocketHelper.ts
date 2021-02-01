import Message from "./models/messages";
import { CustomWebSocket } from "./utilities";
export function broadCastMessage(message, ws: CustomWebSocket, clients:CustomWebSocket[]) {

    const newMessage = new Message({
      email: ws.connectionID,
      message: message.message,
      date: Date.now()
    });
  
    newMessage.save(); //queue the task in background
  
    //broadcast message to all clients
    clients.forEach((client) => client.send(JSON.stringify({...message, email: ws.connectionID, intent: "chat"})));
  
  
  }

  export async function retrieveAndSendMessages(count:number, ws: CustomWebSocket, clients:CustomWebSocket[]) {

   const messages = await Message.find().sort({date: -1}).limit(count).lean();
   ws.send(JSON.stringify({
       intent: "old-messages",
       data: messages
   }))
  }
  