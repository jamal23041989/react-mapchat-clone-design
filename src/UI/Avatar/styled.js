import styled, { css } from 'styled-components'
import userCircleIcon from '../../assets/icons/avatar-circle.svg'

export const AvatarWrapp = styled.div`
  position: relative;
  width: ${props => (props.size ? `${props.size}px` : '46px')};
  height: ${props => (props.size ? `${props.size}px` : '46px')};

  &::before,
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
  }

  ${props =>
    props.user === true
      ? css`
          &::before {
            height: 56px;
            width: 28px;
            background: url(${userCircleIcon}) center no-repeat;
            left: -4px;
            top: 50%;
            transform: translateY(-50%);
          }
        `
      : ''}

  &::after {
    display: block;
    height: 100%;
    width: 100%;
    filter: blur(15px);
    opacity: 0.5;
    top: 15px;
    z-index: -1;

    ${props =>
      props.url &&
      css`
        background: url(${props.url}) center no-repeat;
      `};
  }

  ${props =>
    props.noBlur &&
    css`
      &::after {
        display: none;
      }
    `}
`

export const AvatarIcon = styled.img`
  border-radius: 50%;
  height: 100%;
  width: 100%;
  object-fit: cover;
`
