import { VideoMessageWrapp, VideoMessageBar } from './styled'
import playIcon from '../../assets/icons/play.svg'
import Text from '../Text'
import Icon from '../Icon'

const VideoMessage = ({ video }) => {
  return (
    <VideoMessageWrapp>
      <VideoMessageBar center btw>
        <Icon url={playIcon} />
        <Text>00:45</Text>
      </VideoMessageBar>
    </VideoMessageWrapp>
  )
}

export default VideoMessage
