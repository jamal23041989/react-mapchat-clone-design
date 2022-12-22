import { IconWrapp } from './styled'

const Icon = ({ url, ...props }) => {
  return <IconWrapp src={url} {...props} />
}

export default Icon
