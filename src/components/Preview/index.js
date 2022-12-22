import Logo from '../../UI/Logo'
import { PreviewWrapp, PreviewTitle, PreviewDescription, PreviewBg } from './styled'
import PreviewBgIcon from '../../assets/preview.png'

const Preview = () => {
  return (
    <PreviewWrapp>
      <Logo />
      <PreviewTitle>Mapchat</PreviewTitle>
      <PreviewDescription>The best app for chat with anonymous</PreviewDescription>
      <PreviewBg src={PreviewBgIcon} />
    </PreviewWrapp>
  )
}

export default Preview
