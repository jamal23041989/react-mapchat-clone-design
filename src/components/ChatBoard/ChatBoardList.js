import { ChatBoardListWrapp } from './ChatBoardListStyled'
import Text from '../../UI/Text'
import ChatBar from '../ChatBar'
import Input from '../../UI/Input'
import ChatMessagesList from '../ChatMessagesList'

const ChatBoardList = () => {
  return (
    <ChatBoardListWrapp>
      <Text size={24} weight={700} style={{ marginBottom: 26 }}>
        Chats
      </Text>
      <ChatBar />
      <Input placeholder="Search User" />
      <ChatMessagesList />
    </ChatBoardListWrapp>
  )
}

export default ChatBoardList
