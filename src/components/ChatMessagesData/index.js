import {
  ChatMessagesDataWrapp,
  ChatMessagesDataHeader,
  ChatMessagesDataBody,
  ChatMessagesDataFooter,
  ChatMessagesDataFooterButton,
} from './styled'
import { useData } from '../../hooks/useData'
import Avatar from '../../UI/Avatar'
import Text from '../../UI/Text'
import { Block, Row } from '../../UI/Layout'
import Message from '../../UI/Message'
import Input from '../../UI/Input'
import playBlueIcon from '../../assets/icons/play-blue.svg'

const ChatMessagesData = () => {
  const {
    userData: { avatar, fullname },
    activeChat: { user },
    messages,
  } = useData()

  const getFirstNameFromFullname = full => full.split(' ')[0]
  const firstMessages = messages[0].data

  return (
    <ChatMessagesDataWrapp>
      <ChatMessagesDataHeader>
        <Block>
          <Row centered style={{ marginBottom: 12 }}>
            <Avatar url={avatar} noBlur size={32} />
            <Avatar url={user.avatar} noBlur size={32} style={{ marginLeft: -8 }} />
          </Row>
          <Row centered>
            <Text size={12} weight={700}>
              {`${getFirstNameFromFullname(fullname)} & ${getFirstNameFromFullname(user.fullname)}`}
            </Text>
          </Row>
        </Block>
      </ChatMessagesDataHeader>
      <ChatMessagesDataBody>
        {firstMessages?.map(message => (
          <Message key={message.id} avatar={user.avatar} {...message} />
        ))}
      </ChatMessagesDataBody>
      <ChatMessagesDataFooter>
        <Row>
          <ChatMessagesDataFooterButton />
          <Input placeholder="Type Something..." icon={playBlueIcon} />
        </Row>
      </ChatMessagesDataFooter>
    </ChatMessagesDataWrapp>
  )
}

export default ChatMessagesData
