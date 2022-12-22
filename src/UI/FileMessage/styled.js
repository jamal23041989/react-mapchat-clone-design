import styled from 'styled-components'
import { Row } from '../../UI/Layout'
import patternBg from '../../assets/patterns/file.png'

export const FileMessageWrapp = styled.div``

export const FileMessageHeader = styled(Row)`
  margin-bottom: 17px;
`

export const FileMessageIcon = styled.div`
  background: linear-gradient(180deg, #57e2a3 0%, #02c56c 100%);
  box-shadow: 0px 4px 10px rgba(27, 147, 92, 0.01);
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
`

export const FileMessageStatusBar = styled.div`
  background: #ffffff;
  border-radius: 50px;
  height: 10px;
  position: relative;
  overflow: hidden;

  &:before,
  &:after {
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  &:before {
    width: ${({ width }) => width && `${width}%`};
    border-radius: 0 50px 50px 0;
    background: #57e2a3;
  }

  &:after {
    width: ${({ width }) => width && `${width}%`};
    z-index: 2;
    background: url(${patternBg}) no-repeat;
  }
`
