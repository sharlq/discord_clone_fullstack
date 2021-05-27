import ChatHeader from './Chatheader'
import ChatInput from './ChatInput'
import ChatMessages from './ChatMessages'
const Chat = () => {
    return (
        <div className="chat">
            <ChatHeader />
            <ChatMessages />
            <ChatInput/>
        </div>
    )
}

export default Chat
