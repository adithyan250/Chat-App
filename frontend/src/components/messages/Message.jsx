import React from 'react'
import { useAuthContext } from '../../context/Authcontext'
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extractTime';

const Message = ({message}) => {

    const {authUser} = useAuthContext();
    const {selectedConversation} = useConversation();
    const fromMe = message.senderId === authUser._id || message?.newMessage?.senderId === authUser._id;
    const formattedTime = extractTime(message.createdAt || message?.newMessage?.createdAt)
    const chatClassName = fromMe ? 'chat-end' : 'chat-start';
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe ? 'bg-blue-500' : "";

    const shakeClass = message.shouldShake ? "shake" : "";
 
    return (
        <div className={`chat ${chatClassName}`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img src={profilePic} alt="user avatar"/>
                </div>
            </div>
            <div className={`chat-bubble text-white  ${bubbleBgColor} ${shakeClass}`}>{message.message || message?.newMessage?.message}</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
        </div>
    )
}

export default Message

// bg-blue-500