import OnlineStatus from '../OnlineStatus'
import { AvatarWrapp, AvatarIcon } from './styled'

const Avatar = ({ url, user, onlineStatus, noBlur, ...props }) => {
  return (
    <AvatarWrapp user={user} url={url} noBlur={noBlur} {...props}>
      <AvatarIcon src={url} />
      {onlineStatus === true && <OnlineStatus />}
    </AvatarWrapp>
  )
}

export default Avatar
