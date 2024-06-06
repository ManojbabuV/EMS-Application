// import React from 'react';
// import './style.css'; // Import your CSS file
// import Sidebar from '../components/Sidebar'; 

// const ChatBox = () => {
//     return (
//         <Sidebar> 
//         <div className="container-chat">
//             <div className="chat-box">
//                 <div className="client">
//                     <img src="logo.png" alt="logo" />
//                     <div className="client-info">
//                         <h2>Thanos</h2>
//                         <p>online</p>
//                     </div>
//                 </div>
//                 <div className="chats">
//                     <div className="client-chat">Hi!</div>
//                     <div className="my-chat">Hi!</div>
//                     <div className="client-chat">How can i help you?</div>
//                     <div className="my-chat">How you create this chat box?</div>
//                     <div className="client-chat">Watch complete video for your answer.</div>
//                 </div>
//                 <div className="chat-input">
//                     <input type="text" placeholder="Enter Message" />
//                     <button className="send-btn">
//                         <img src="send.png" alt="send-btn" />
//                     </button>
//                 </div>
//             </div>
//             <div className="chat-btn">
//                 <img src="Circle-icons-chat.svg.png" alt="chat box icon btn" />
//             </div>
//         </div>
        
//         </Sidebar>
//     );
// }

// export default ChatBox;








import { EmbedChatBox } from "@wise-iot/chatbox-ui";
import "./style.css";
export default function App() {
    return (
        <div className="App">
<EmbedChatBox
style={{backgroundColor:"white"}}
theme="light"
// open={open}
config={{
  type: "langflow",
  baseUrl:
    "https://portal-copilot-studio-ifactory-develop.copilot.wise-paas.io/",
  flowId: "6071d061-687e-4485-a9aa-475f2500c50a",
}}
title="Team "
subtitle="New message"
defaultMessages={[
  {
    role: "assistant",
    content: "Hi! I'm Mr. Chatbot 😎\nNice to meet you! 👋",
    buttons: [
      { text: "Hi texh " },
      { text: "yes ok " },
      { text: "what are you doing ？" },
      { text: " chatting......" },
    ],
  },
]}
/>
</div>
    )
}