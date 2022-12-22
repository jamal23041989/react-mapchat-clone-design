import { TextWrapp } from './styled'

const Text = ({ children, ...props }) => {
  return <TextWrapp {...props}>{children}</TextWrapp>
}

export default Text
