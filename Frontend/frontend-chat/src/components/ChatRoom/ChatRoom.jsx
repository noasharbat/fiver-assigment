import React, { useState, useEffect } from 'react';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

import MessageList from '../MessageList/MessageList';
import MessageInput from '../MessageInput/MessageInput';
import UserInput from '../UserInput/UserInput';

import './ChatRoom.css';

const ChatRoom = () => {
    const [connection, setConnection] = useState(null);
    const [messages, setMessages] = useState([]);
    const [user, setUser] = useState('');

    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl('https://localhost:7055/chathub')
            .withAutomaticReconnect()
            .configureLogging(LogLevel.Information)
            .build();

        newConnection.on('ReceiveMessage', (message) => {
            setMessages(prev => [...prev, message]);
        });

        newConnection.start()
            .then(() => setConnection(newConnection))
            .catch(e => console.log('Connection failed', e));

        return () => newConnection.stop();
    }, []);

    const sendMessage = async (text) => {
        if (!connection || !user || !text) return;

        try {
            await connection.send('SendMessage', user, text);
        } catch (e) {
            console.log('Send failed:', e);
        }
    };

    return (
        <div className="chat-container">
            <h2 className="chat-title">Chat Room</h2>

            <UserInput user={user} setUser={setUser} />

            <MessageList messages={messages} />

            <MessageInput onSend={sendMessage} disabled={!connection} />
        </div>
    );
};

export default ChatRoom;
