import { MessageWrapp, MessageContent, MessageRow, MessageAvatar } from './styled'
import { Block } from '../Layout'
import Text from '../Text'
import FileMessage from '../FileMessage'
import AudioMessage from '../AudioMessage'
import VideoMessage from '../VideoMessage'

const Message = ({ text, file, audio, video, isMe, avatar, time }) => {
  const audioPercent = 70

  return (
    <MessageWrapp isMe={isMe}>
      <MessageRow isMe={isMe} style={{ alignItems: 'flex-start' }}>
        <Block style={{ margin: !isMe ? '0 16px 0 0' : '0 0 0 16px', textAlign: 'center' }}>
          <MessageAvatar url={avatar} isMe={isMe} style={{ marginBottom: 6 }} />
          <Text color="#808080" size={8}>
            {time}
          </Text>
        </Block>
        {text && (
          <MessageContent isMe={isMe} file={file} audio={audio} video={video} audioPercent={audioPercent}>
            <Text color={isMe ? '#000000' : '#fff'}>{text}</Text>
          </MessageContent>
        )}
        {file && <FileMessage file={file} />}
        {audio && <AudioMessage audio={audio} />}
        {video && <VideoMessage video={video} />}
      </MessageRow>
    </MessageWrapp>
  )
}

export default Message
