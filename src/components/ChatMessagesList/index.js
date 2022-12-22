import { ChatMessagesListWrapp, ChatMessagesItem } from './styled'
import { useData } from '../../hooks/useData'
import { Block, Row } from '../../UI/Layout'
import Avatar from '../../UI/Avatar'
import Text from '../../UI/Text'

const ChatMessagesList = () => {
  const { chats, activeChat, changeActiveChat } = useData()

  return (
    <ChatMessagesListWrapp>
      {chats?.map(chat => (
        <ChatMessagesItem
          key={chat.id}
          activeStatus={activeChat.id === chat.id ? true : false}
          onClick={() => changeActiveChat(chat.id)}
        >
          <Row>
            <Avatar url={chat.user.avatar} onlineStatus={chat.user.online} />
            <Block style={{ marginLeft: 12 }}>
              <Text weight={500}>{chat.user.fullname}</Text>
              <Text size={12} color="#98908a">
                {chat.user.city}
              </Text>
            </Block>
            <Block style={{ marginLeft: 'auto' }}>
              <Text size={10} weight={300} color="#b3b3b3" style={{ color: activeChat.id === chat.id && `#000000` }}>
                {chat.time}
              </Text>
            </Block>
          </Row>
        </ChatMessagesItem>
      ))}
    </ChatMessagesListWrapp>
  )
}

export default ChatMessagesList
