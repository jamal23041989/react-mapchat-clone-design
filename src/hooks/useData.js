import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import chat_1_avatar from '../assets/avatars/1.png'
import chat_2_avatar from '../assets/avatars/2.png'
import chat_3_avatar from '../assets/avatars/3.png'
import chat_4_avatar from '../assets/avatars/4.png'
import chat_5_avatar from '../assets/avatars/5.png'
import chat_6_avatar from '../assets/avatars/6.png'
import chat_7_avatar from '../assets/avatars/7.png'
import chat_8_avatar from '../assets/avatars/8.png'

const initialChats = [
  {
    id: 1,
    user: { fullname: 'Alberto McDonand', avatar: chat_1_avatar, city: 'Armenia', online: true },
    time: '3:01 PM',
  },
  {
    id: 2,
    user: { fullname: 'Aubert Ferandez', avatar: chat_2_avatar, city: 'Xiangzhou' },
    city: 'Xiangzhou',
    time: '12:35 AM',
  },
  {
    id: 3,
    user: { fullname: 'Kali Lowton', avatar: chat_3_avatar, city: 'Saguenay', online: true },
    time: '10:23 PM',
  },
  {
    id: 4,
    user: { fullname: 'Shaylah Blodgett', avatar: chat_4_avatar, city: 'Valinhos' },
    time: '6:25 AM',
  },
  {
    id: 5,
    user: { fullname: 'Caitrin Jacobsen', avatar: chat_5_avatar, city: 'Juliaca' },
    time: '12:22 AM',
  },
  {
    id: 6,
    user: { fullname: 'Caitrin James', avatar: chat_6_avatar, city: 'Juliaca' },
    time: '12:22 AM',
  },
  {
    id: 7,
    user: { fullname: 'James Caitrin FF', avatar: chat_7_avatar, city: 'Juliaca' },
    time: '12:22 AM',
  },
  {
    id: 8,
    user: { fullname: 'James Cart', avatar: chat_8_avatar, city: 'Juliaca' },
    time: '12:22 AM',
  },
  {
    id: 511,
    user: { fullname: 'Caitrin James', avatar: chat_6_avatar, city: 'Juliaca' },
    time: '12:22 AM',
  },
  {
    id: 142,
    user: { fullname: 'James Caitrin FF', avatar: chat_7_avatar, city: 'Juliaca' },
    time: '12:22 AM',
  },
  {
    id: 1414,
    user: { fullname: 'James Cart', avatar: chat_8_avatar, city: 'Juliaca' },
    time: '12:22 AM',
  },
]

const initialMessages = [
  {
    chat_id: 1,
    data: [
      {
        id: uuid(),
        text: 'I also need it because I need to start mocking things up. Aaron is expecting the prototype for next week.',
        time: '10:05',
        isMe: false,
      },
      {
        id: uuid(),
        user: {},
        text: 'You bet you want to see ',
        time: '10:05',
        isMe: true,
      },
      {
        id: uuid(),
        user: {},
        text: 'The quick bro 😃',
        time: '10:05',
        isMe: false,
      },
      {
        id: uuid(),
        user: {},
        text: 'The quick brown fox jumps🍔😃',
        time: '10:05',
        isMe: true,
      },
      {
        id: uuid(),
        user: {},
        text: `& Next meeting tomorrow 10.00 AM`,
        time: '10:05',
        isMe: false,
      },
      {
        id: uuid(),
        user: {},
        time: '10:05',
        isMe: false,
        audio: 'sfaasfsafsf',
      },
      {
        id: uuid(),
        user: {},
        time: '10:05',
        isMe: true,
        file: { name: 'file_v1.0.zip', size: '12.5 mb' },
      },
      {
        id: uuid(),
        user: {},
        time: '10:05',
        isMe: false,
        video: { name: 'test.mp4', size: '12.5 mb' },
      },
    ],
  },
]

const initialUser = {
  fullname: 'Eleanor Pena',
  city: 'Australia',
  avatar: 'https://i0.wp.com/filmloverss.com/wp-content/uploads/2019/02/avatar-2-3-filmloverss.jpg?fit=900%2C600&ssl=1',
}

export const useData = () => {
  const [chats, setChats] = useState(initialChats)
  const [activeChat, setActiveChat] = useState(chats[0])
  const [userData, setUserData] = useState(initialUser)
  const [messages, setMessages] = useState(initialMessages)

  const changeActiveChat = id => {
    const chat = chats?.find(chat => chat.id === id)
    setActiveChat(chat)
  }

  return { chats, activeChat, userData, messages, changeActiveChat }
}
