import './MessageList.css';

const MessageList = ({ messages }) => {
    return (
        <div className="message-list">
            {messages.map((m, index) => (
                <div className="message-item" key={index}>
                    <strong className="message-user">{m.user}: </strong>
                    <span>{m.content}</span>
                </div>
            ))}
        </div>
    );
};

export default MessageList;
