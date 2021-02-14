import React, { useEffect, useState } from "react";
import { TextField, Button } from '@material-ui/core';
import { useButtonStyles } from "../../RootStyles"
import Banner from "../Banner";
import './style.scss';
import { useHistory } from "react-router-dom";
import { store } from "../../redux";
import Link from '@material-ui/core/Link';


type Message = {
  email: string;
  uname: string;
  message: string;
  intent: string;
  //ToDO: date
}

const HOST = window.location.hostname + ':1338';

export default function Chat() {

  const [chatMessage, setChatMessage] = useState<string>("");
  const [chatMessages, setChatMessages] = useState<Array<Message>>([]);
  const [wsRef, setWsRef] = useState<null | WebSocket>(null);

  const buttonclasses = useButtonStyles();

  const history = useHistory();

  const state: any = store.getState();


  let count = 10;

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  }


  function processMessage(payload: string) {
    try {
      return JSON.parse(payload);
    } catch (e) {
      return null;
    }
  }

  function showMore() {
    if (wsRef?.readyState !== WebSocket.OPEN) {
      // websocket not connected
      return;
    }
    count = count + 10;
    wsRef.send(JSON.stringify({ intent: 'old-messages', count: count }));
  }

  function sendMessage() {
    if (wsRef?.readyState !== WebSocket.OPEN) {
      // websocket not connected
      return;
    }
    wsRef.send(JSON.stringify({ message: chatMessage, intent: "chat", uname: state.user.uname }))
    setChatMessage("");
  }

  useEffect(() => {
    const ws = new WebSocket(`ws://${HOST}/${localStorage.getItem("token")}`);

    ws.addEventListener("open", () => {
      ws.send(JSON.stringify({ intent: 'old-messages', count: 100 }));
    }, { once: true });

    ws.addEventListener("error", () => {
      history.replace("/login");
    })

    ws.addEventListener("message", (event) => {
      const data = event.data;
      const message: any = processMessage(data);
      if (!message) return
      console.log("message", message)
      if (message.intent === "chat") {
        setChatMessages(oldMessages => [...oldMessages, message as Message]);
      } else if (message.intent === "old-messages") {
        console.log("old-messages", message.data);
        setChatMessages(message.data.reverse());
      }

    })

    setWsRef(ws);

    return () => {
      ws.close();
    }

  }, [history])

  return (
    <div className="chat">
      <Banner></Banner>
      <h2>Live Chat</h2>
      <div className="chat__wrapper">
        <div className="chat__messages">
          <Link component="button" onClick={showMore}>Show More</Link>

          {
            chatMessages.map((message, index) => {
              if (message.uname === state.user.uname) {
                return (<div className="chat__messages__item active" key={index}>
                  <div className="chat__messages__item__wrapper--active">
                    <div className="author">{message.uname}:</div>
                    <div className="message">{message.message}</div>
                  </div>
                </div>)
              } else {
                return (<div className="chat__messages__item" key={index}>
                  <div className="chat__messages__item__wrapper">
                    <div className="author">{message.uname}:</div>
                    <div className="message">{message.message}</div>
                  </div>
                </div>)
              }


            })}
        </div>
        <div className="chat__box">

          <TextField fullWidth onKeyDown={handleKeyDown} placeholder="Your Message Here" label="Type Your Message" onChange={(e: any) => setChatMessage(e.target.value)} value={chatMessage} variant="outlined" />
          <br />
          <Button fullWidth className={buttonclasses.secondary} onClick={sendMessage} color="default" >Send Message</Button>
        </div>
      </div>
    </div>
  )
}