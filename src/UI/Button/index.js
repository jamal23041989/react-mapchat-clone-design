import { ButtonWrapp } from './styled'

const Button = ({ children, ...props }) => {
  return <ButtonWrapp {...props}>{children}</ButtonWrapp>
}

export default Button
