import { useState } from 'react'
import { ChatBarWrapp, ChatBarItem } from './styled'

const list = [
  { id: 1, text: 'Global' },
  { id: 2, text: 'Nearby' },
  { id: 3, text: 'Favorite' },
]

const ChatBar = () => {
  const [active, setActive] = useState(list[0])

  const changeActive = id => {
    const item = list?.find(item => item.id === id)
    setActive(item)
  }

  return (
    <ChatBarWrapp as="ul">
      {list.map(item => (
        <ChatBarItem
          key={item.id}
          as="li"
          activeStatus={active.id === item.id ? true : false}
          onClick={() => changeActive(item.id)}
        >
          {item.text}
        </ChatBarItem>
      ))}
    </ChatBarWrapp>
  )
}

export default ChatBar
