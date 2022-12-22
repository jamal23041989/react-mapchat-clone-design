import styled, { css } from 'styled-components'

export const InputContent = styled.input`
  color: #cccccc;
  font-size: 12px;
  margin-left: 13px;
  width: 100%;

  &::placeholder {
    color: #cccccc;
    font-size: 12px;
  }
`

export const InputWrapp = styled.div`
  background: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  max-height: 48px;
  padding: 10px;
  display: inline-flex;
  align-items: center;

  ${props =>
    props.icon && props.position === 'start'
      ? css`
          &:before {
            content: '';
            display: inline-block;
            background-size: contain;
            background: url(${props.icon}) center no-repeat;
            height: 19px;
            width: 19px;
          }
        `
      : css`
          &:after {
            content: '';
            display: inline-block;
            background: url(${props.icon}) center no-repeat;
            background-size: contain;
            height: 19px;
            width: 19px;
          }
        `}
`
