import React from 'react';
import { ChatSelect } from '../components/ChatSelect';
import { InboxPeople } from '../components/InboxPeople';
import { Message } from '../components/Message';

import '../css/chat.css'


export const ChatPage = () => {
    return (
        <div className="messaging">
        <div className="inbox_msg">

            <InboxPeople />

            <ChatSelect />
            {/* <Message /> */}
            

        </div>


    </div>
    )
}
