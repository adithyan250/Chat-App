import { useState } from "react";
import { useEffect } from "react";
import { Children } from "react";
import { createContext } from "react";
import { useAuthContext } from "./Authcontext";
import io from "socket.io-client"
import { useContext } from "react";

const SocketContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useSocketContext = () => {
    return useContext(SocketContext);
}

export const SocketContextProvider = ({children}) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const {authUser} = useAuthContext();

    useEffect(()=>{
        if(authUser){
            const socket = io("https://chat-app-1-qtex.onrender.com/",{
                query:{
                    userId: authUser._id
                }
            });

            setSocket(socket);

            socket.on("getOnlineUsers", (users)=> {
                setOnlineUsers(users);
            })

            return ()=> socket.close();
        }else{
            if(socket){
                socket.close();
                setSocket(null)
            }
        }
    },[authUser])

    return <SocketContext.Provider value={{socket,onlineUsers}}>{children}</SocketContext.Provider>
}