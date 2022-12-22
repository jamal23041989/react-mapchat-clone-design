import styled, { css } from 'styled-components'
import { Row } from '../../UI/Layout'
import Avatar from '../../UI/Avatar'

export const MessageWrapp = styled.div`
  margin-bottom: 18px;

  &:last-child {
    margin-bottom: 0;
  }
`

export const MessageAvatar = styled(Avatar)`
  border: 2px solid #fff;
  border-radius: 50%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05));

  &:after {
    display: none;
  }
`

export const MessageRow = styled(Row)`
  ${props =>
    props.isMe &&
    css`
      flex-direction: row-reverse;
    `}
`

export const MessageContent = styled.div`
  background: #7b61ff;
  border-radius: 0px 10px 10px 10px;
  padding: 10px;
  flex: 1;
  color: #fff;
  font-size: 13px;
  font-weight: 400;

  ${props =>
    props.isMe &&
    css`
      border-radius: 10px 0 10px 10px;
      background: #e4e3ff;
      color: #000000;
      text-align: right;
    `}

  ${props =>
    props.file &&
    css`
      background: #effdf6;
    `}
`
