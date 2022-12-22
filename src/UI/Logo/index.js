import { LogoWrapp, LogoLink, LogoIcon } from './styled'
import logoIcon from '../../assets/logo.svg'

const Logo = () => {
  return (
    <LogoWrapp>
      <LogoLink href="#">
        <LogoIcon src={logoIcon} />
      </LogoLink>
    </LogoWrapp>
  )
}

export default Logo
