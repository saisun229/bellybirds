import React, {useEffect} from "react";
import Header from "../Header";
import './style.css';


export default function Chat() {

  useEffect(() => {
       const ws = new WebSocket("ws://localhost:1338");

       ws.addEventListener("open", ()=> {
        ws.send(JSON.stringify({ status: 'ok'}));
       }, {once: true})

      //  ws.on('open', function open() {
      //   ws.send(JSON.stringify({ status: 'ok'}));
      //  });

      //  ws.on('message', function incoming(data) {
      //    console.log(data);
      //  });
  }, [])
  
  return (
    <div className="chat">
       <Header></Header>
       <div className="chat__wrapper">
          <p>Im here in chat page!</p>
       </div>
    </div>
  )
}