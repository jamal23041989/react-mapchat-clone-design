import styled from 'styled-components'

export const TextWrapp = styled.div`
  color: ${props => (props.color ? props.color : '#000000')};
  font-size: ${props => (props.size ? `${props.size}px` : '14px')};
  font-weight: ${props => (props.weight ? props.weight : '400')};
`
