import { ChatBoardWrapp, ChatBoardContent } from './styled'
import ChatBoardHeader from './ChatBoardHeader'
import ChatBoardList from './ChatBoardList'
import ChatMessagesData from '../ChatMessagesData'

const ChatBoard = () => {
  return (
    <ChatBoardWrapp>
      <ChatBoardHeader />
      <ChatBoardContent>
        <ChatBoardList />
        <ChatMessagesData />
      </ChatBoardContent>
    </ChatBoardWrapp>
  )
}

export default ChatBoard
