import { InputWrapp, InputContent } from './styled'

const Input = ({ placeholder, ...props }) => {
  return (
    <InputWrapp {...props}>
      <InputContent placeholder={placeholder} />
    </InputWrapp>
  )
}

export default Input
