import React,{useState} from 'react'
import io from "socket.io-client";
import Chat from './Chat';
const socket = io.connect("https://joinchatv2.herokuapp.com/");

function Main() {
    const [username, setUsername] = useState("")
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);
  
    const joinRoom = () => {
    if(username !== "" && room !== ""){
      socket.emit("joinRoom", {username, room} );
      setShowChat(true);
    }
  }
    return <>
        {!showChat?(
            <div className='bg-white dark:bg-neutral-800 rounded rounded-lg'>
          <h1 className=' p-5 text-blue-600 dark:text-blue-400 text-center text-xl font-bold'>Join Chat</h1>
          <div className='mb-4'>
            <label className='relative cursor-pointer'>
              <input type="text" placeholder=" " 
              className='h-14 w-64 px-6 mx-4 text-xl text-black dark:text-white 
              bg-white dark:bg-neutral-800 border-black dark:border-white border-opacity-30 hover:border-opacity-100 dark:border-opacity-30 dark:hover:border-opacity-100 border rounded-lg border-opacity-50 
              outline-none focus:border-blue-500 dark:focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200' 
              onChange={(e) => setUsername(e.target.value)}/>
              <span className='text-xl text-black dark:text-white text-opacity-60 bg-white dark:bg-neutral-800 absolute left-5 top-0.5 px-1 
              transition duration-200 input-text dark:text-opacity-60'>Name</span>
            </label>
          </div>
          <div className='mb-4'>
            <label className='relative cursor-pointer'>
              <input type="text" placeholder=" " 
              className='h-14 w-64 px-6 mx-4 text-xl text-black dark:text-white
              bg-white dark:bg-neutral-800 border-black dark:border-white border-opacity-30 hover:border-opacity-100 dark:border-opacity-30 dark:hover:border-opacity-100 border rounded-lg border-opacity-50 
              outline-none focus:border-blue-500 dark:focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200'
              onChange={(e) => setRoom(e.target.value)}
              onKeyPress={(event) => {
                event.key === "Enter" &&  joinRoom();
            }}  />
              <span className='text-xl text-black dark:text-white text-opacity-60 bg-white dark:bg-neutral-800 absolute left-5 top-0.5 px-1 
              transition duration-200 input-text dark:text-opacity-60'>Room Id</span>
            </label>
          </div>
          <div className='mb-5 flex justify-center'>
            <button type='button' 
            className='px-16 py-3 rounded dounded-xl 
            text-lg font-semibold text-blue-600
            border border-blue-400  
            dark:text-blue-600 dark:bg-neutral-800
            hover:border-blue-600 hover:bg-blue-100 hover:bg-opacity-40
            dark:hover:bg-blue-100 dark:hover:bg-opacity-5' onClick={() => joinRoom()}>
              JOIN ROOM
            </button>
          </div>

        </div>
        ): (
            <Chat socket={socket} username={username} room={room} />
            )}
    </>
        
}

export default Main
