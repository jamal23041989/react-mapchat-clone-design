import styled from 'styled-components'

export const ChatMessagesListWrapp = styled.div`
  margin-top: 20px;
  overflow-y: scroll;
  height: 65%;
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

export const ChatMessagesItem = styled.div`
  padding: 18px;
  border-radius: 10px;
  cursor: pointer;
  background: ${props => (props.activeStatus ? '#fef0e6' : 'transparent')};
`
