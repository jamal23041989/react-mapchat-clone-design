import { ChatBoardHeaderWrapp } from './ChatBoardHeaderStyled'
import { useData } from '../../hooks/useData'
import Icon from '../../UI/Icon'
import Input from '../../UI/Input'
import Avatar from '../../UI/Avatar'
import Text from '../../UI/Text'
import Button from '../../UI/Button'
import { Block, Row } from '../../UI/Layout'
import sizeIcon from '../../assets/icons/size.svg'
import sortSizeIcon from '../../assets/icons/sort-size.svg'
import lypaIcon from '../../assets/icons/search.svg'

const ChatBoardHeader = () => {
  const { userData } = useData()

  return (
    <ChatBoardHeaderWrapp>
      <Icon url={sizeIcon} style={{ marginRight: 24 }} />
      <Input position="start" icon={lypaIcon} style={{ marginRight: 17 }} />
      <Row style={{ marginRight: 55 }}>
        <Block style={{ marginRight: 12 }}>
          <Avatar user noBlur url={userData.avatar} />
        </Block>
        <Block>
          <Text size={16} weight={700} style={{ whiteSpace: 'nowrap' }}>
            {userData.fullname}
          </Text>
          <Text size={12}>{userData.city}</Text>
        </Block>
      </Row>
      <Button style={{ flexShrink: 0 }}>
        <Icon url={sortSizeIcon} />
      </Button>
    </ChatBoardHeaderWrapp>
  )
}

export default ChatBoardHeader
