import styled from 'styled-components'

import { Row } from '../Layout'
import playIcon from '../../assets/icons/play.svg'
import audioPattern from '../../assets/patterns/audio.svg'

export const AudioMessageWrapp = styled(Row)`
  position: relative;
  z-index: 1;
  background: #fff0e6;
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: 10px;
  border-radius: 0px 10px 10px 10px;

  &:before {
    content: '';
    display: block;
    height: 100%;
    width: ${props => (props.width ? `${props.width}%` : '0%')};
    background: #fed5b8;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`

export const AudioMessageButton = styled.button`
  display: inline-block;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: #f5924a;
  flex-shrink: 0;
  border: 3px solid #fdc39a;
  transition: 0.3s;

  &:hover {
    background: #dc884a;
  }

  &:before {
    content: '';
    display: inline-block;
    background: url(${playIcon}) center no-repeat;
    height: 8px;
    width: 8px;
  }
`

export const AudioMessageStatus = styled.div`
  background: url(${audioPattern}) center no-repeat;
  background-size: contain;
  height: 26px;
  width: 100%;
  margin-left: 10px;
`

export const AudioMessageTime = styled.div`
  color: #000000;
  min-width: 40px;
  text-align: right;
  margin-left: 10px;
  font-size: 11px;
  margin-left: 10px;
`
