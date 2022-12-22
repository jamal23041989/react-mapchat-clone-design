import styled from 'styled-components'

export const ChatMessagesDataWrapp = styled.div`
  width: 335px;
  padding: 30px 11px 0;
`

export const ChatMessagesDataHeader = styled.header``

export const ChatMessagesDataBody = styled.div`
  overflow-y: scroll;
  height: 72%;
  padding-right: 10px;

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    background: #ffeded;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #efcfcf;
    border-radius: 20px;
  }
`

export const ChatMessagesDataFooter = styled.footer`
  margin-top: 35px;
`

export const ChatMessagesDataFooterButton = styled.button`
  background: #fff1da;
  width: 48px;
  height: 48px;
  border-radius: 5px;
  flex-shrink: 0;
  margin-right: 20px;
`
