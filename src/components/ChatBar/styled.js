import styled from 'styled-components'

export const ChatBarWrapp = styled.div`
  border: 1px solid #f6f6f8;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 6px;
  margin-bottom: 30px;
`

export const ChatBarItem = styled.div`
  background: ${props => (props.activeStatus ? '#000000' : 'transparent')};
  color: ${props => (props.activeStatus ? '#fff' : '#000000')};
  font-weight: 700;
  border-radius: 5px;
  flex: 1;
  text-align: center;
  margin-right: 11px;
  transition: all 0.3s;
  padding: 10px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`
