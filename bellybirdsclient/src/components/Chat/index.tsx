import React, {useEffect, useState} from "react";
import { TextField, Button } from '@material-ui/core';
import { useButtonStyles} from "../../RootStyles"
import Header from "../Header";
import './style.css';
import { useHistory } from "react-router-dom"


type Message = {
  user: string;
  message: string;
  intent: string;
  //ToDO: date
}


export default function Chat() {

  const [chatMessage, setChatMessage] = useState<string>("");
  const [chatMessages, setChatMessages] = useState<Array<Message>>([]);
  const [wsRef, setWsRef] = useState<null | WebSocket>(null);

  const buttonclasses = useButtonStyles();

  const history = useHistory();

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  }


  function processMessage(payload: string) {
    try {
      return JSON.parse(payload);
    } catch(e) {
      return null;
    }
  }

  function sendMessage() {
      if(wsRef?.readyState !== WebSocket.OPEN) {
        // websocket not connected
        return;
      }
      wsRef.send(JSON.stringify({ message: chatMessage, intent: "chat"}))
      setChatMessage("");
  }

  useEffect(() => {
       const ws = new WebSocket(`ws://localhost:1338/${localStorage.getItem("token")}`);

      //  ws.addEventListener("open", ()=> {
      //   ws.send(JSON.stringify({ message: 'You are Ready to chat!', intent: 'notchat'}));
      //  }, {once: true});

       ws.addEventListener("error", ()=> {
         alert("Please login");
         history.replace("/login");
       })

       ws.addEventListener("message", (event) => {
         const data = event.data;
         const message: null | Message = processMessage(data);
         if(!message) return
         console.log("message", message)
         if(message.intent === "chat") {
          setChatMessages(oldMessages => [...oldMessages, message]);
         }
         
       })

       setWsRef(ws);

       return () => {
         ws.close();
       }

  }, [])
  
  return (
    <div className="chat">
       <Header></Header>
       <h2>Chat Box</h2>
       <div className="chat__messages">
         { chatMessages.map( (message, index) => {
           return (<div className="chat__messages__item" key={index}>
                     <div className="author">{message.user}:</div>
                     <div className="message">{message.message}</div>
                 </div>)
         }) }
       </div>
       <div className="chat__box">
        
          <TextField fullWidth onKeyDown={handleKeyDown} placeholder="Your Message Here" label="Type Your Message" onChange={(e: any) => setChatMessage(e.target.value)} value={chatMessage}  variant="outlined" />
          <br />
          <Button  fullWidth className={buttonclasses.secondary}  onClick={sendMessage} color="default" >Send Message</Button>
       </div>
    </div>
  )
}