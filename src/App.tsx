import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import * as chatService from "./services/chat.service";

function App() {
  useEffect(() => {
    chatService.getTesting().then((value) => {
      console.log(value);
    });
  }, []);
  return <div className="App">hello</div>;
}

export default App;
