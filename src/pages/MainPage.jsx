import React, { useState, useRef, useEffect } from 'react';

import './mainpage.css'
import logo from '../images/login-img.png'

import toast from 'react-hot-toast';
import ACTIONS from '../Actions';
import Client from '../components/Client';
import Editor from '../components/Editor';
import { initSocket } from '../socket';
import {
    useLocation,
    useNavigate,
    Navigate,
    useParams,
    NavLink,
} from 'react-router-dom';
console.log(useRef)
const MainPage = () => {

//   const socketRef = useRef(null);
//   const codeRef = useRef(null);
//   const location = useLocation();
//   const { roomId } = useParams();
//   const reactNavigator = useNavigate();
//   const [clients, setClients] = useState([]);

//   useEffect(() => {
//       const init = async () => {
//           socketRef.current = await initSocket();
//           socketRef.current.on('connect_error', (err) => handleErrors(err));
//           socketRef.current.on('connect_failed', (err) => handleErrors(err));

//           function handleErrors(e) {
//               console.log('socket error', e);
//               toast.error('Socket connection failed, try again later.');
//               reactNavigator('/');
//           }

//           socketRef.current.emit(ACTIONS.JOIN, {
//               roomId,
//               username: location.state?.username,
//           });

//           // Listening for joined event
//           socketRef.current.on(
//               ACTIONS.JOINED,
//               ({ clients, username, socketId }) => {
//                   if (username !== location.state?.username) {
//                       toast.success(`${username} joined the room.`);
//                       console.log(`${username} joined`);
//                   }
//                   setClients(clients);
//                   socketRef.current.emit(ACTIONS.SYNC_CODE, {
//                       code: codeRef.current,
//                       socketId,
//                   });
//               }
//           );

//           // Listening for disconnected
//           socketRef.current.on(
//               ACTIONS.DISCONNECTED,
//               ({ socketId, username }) => {
//                   toast.success(`${username} left the room.`);
//                   setClients((prev) => {
//                       return prev.filter(
//                           (client) => client.socketId !== socketId
//                       );
//                   });
//               }
//           );
//       };
//       init();
//       return () => {
//         console.log(socketRef)
//           socketRef.current.disconnect();
//           socketRef.current.off(ACTIONS.JOINED);
//           socketRef.current.off(ACTIONS.DISCONNECTED);
//       };
//   }, []);

//   async function copyRoomId() {
//       try {
//           await navigator.clipboard.writeText(roomId);
//           toast.success('Room ID has been copied to your clipboard');
//       } catch (err) {
//           toast.error('Could not copy the Room ID');
//           console.error(err);
//       }
// //   }

//   function leaveRoom() {
//       reactNavigator('/');
//   }

//   if (!location.state) {
//       return <Navigate to="/" />;
//   }


  return (
    <>
    <main>
      <div id='header-box'>
        {/* <h1>Main-Page!!!!</h1> */}
        <NavLink className={'nav'} to={'/'}>Home</NavLink>
        <NavLink className={'nav'} to={'/Dashboard'}>Dashboard</NavLink>
        <NavLink className={'nav'} to={'/MainPage'}>Main-Page</NavLink>
        <img src={logo} alt='logo' id='logo'/>
      </div>
      <div id="nav-box">
      <div className="asideInner">
                    <div className="logo">
                        <img
                            className="logoImage"
                            src="/code-sync.png"
                            alt="logo"
                        />
                    </div>
                    <h3>Connected</h3>
                    <div className="clientsList">
                        {/* {clients.map((client) => (
                            <Client
                                key={client.socketId}
                                username={client.username}
                            />
                        ))} */}
                    </div>
                </div>
                {/* <button className="btn copyBtn" onClick={copyRoomId}>
                    Copy ROOM ID
                </button>
                <button className="btn leaveBtn" onClick={leaveRoom}>
                    Leave
                </button> */}
                <button className="btn copyBtn" >
                    Copy ROOM ID
                </button>
                <button className="btn leaveBtn" >
                    Leave
                </button>
      </div>
      <div id='main-box'>
      <div id="file-sec">
         <h3 style={{margin:'0'}}>file-section</h3>
      </div>
      <div id="code-box">

      <div id="editor-container">
          <h1>editor</h1>
          <div className="editorWrap">
                {/* <Editor
                    socketRef={socketRef}
                    roomId={roomId}
                    onCodeChange={(code) => {
                        codeRef.current = code;
                    }}
                /> */}
                <textarea id='code'>
                 {let codedata=document.getElementById("code").value;}
                </textarea>
            </div>
      </div>
      <div id="output-window">
          <div id="output">
            <h1>output</h1>
          </div>
          <div id="input">
            <h1>input</h1>
          </div>
      </div>
      </div>
      </div>


      </main>
    </>

  );
};

export default MainPage;