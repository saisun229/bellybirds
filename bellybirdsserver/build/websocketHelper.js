"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveAndSendMessages = exports.broadCastMessage = void 0;
const messages_1 = require("./models/messages");
function broadCastMessage(message, ws, clients) {
    const newMessage = new messages_1.default({
        email: ws.connectionID,
        uname: message.uname,
        message: message.message,
        date: Date.now()
    });
    newMessage.save(); //queue the task in background
    //broadcast message to all clients
    clients.forEach((client) => client.send(JSON.stringify(Object.assign(Object.assign({}, message), { email: ws.connectionID, intent: "chat" }))));
}
exports.broadCastMessage = broadCastMessage;
async function retrieveAndSendMessages(count, ws, clients) {
    const messages = await messages_1.default.find().sort({ date: -1 }).limit(count).lean();
    ws.send(JSON.stringify({
        intent: "old-messages",
        data: messages
    }));
}
exports.retrieveAndSendMessages = retrieveAndSendMessages;
