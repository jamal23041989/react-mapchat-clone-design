import { FileMessageWrapp, FileMessageHeader, FileMessageIcon, FileMessageStatusBar } from './styled'
import { Block } from '../Layout'
import Text from '../Text'
import Icon from '../Icon'
import downloadIcon from '../../assets/icons/download.svg'
import fileIcon from '../../assets/icons/file.svg'

const FileMessage = ({ file }) => {
  const width = 40

  return (
    <FileMessageWrapp>
      <FileMessageHeader center>
        <Block style={{ marginRight: 12 }}>
          <FileMessageIcon>
            <Icon url={fileIcon} />
          </FileMessageIcon>
        </Block>
        <Block style={{ textAlign: 'left' }}>
          <Text size={12} weight={600}>
            {file.name}
          </Text>
          <Text color="#808080" weight={600}>
            {file.size}
          </Text>
        </Block>
        <Block style={{ marginLeft: 'auto' }}>
          <Icon url={downloadIcon} />
        </Block>
      </FileMessageHeader>
      <FileMessageStatusBar width={width} />
    </FileMessageWrapp>
  )
}

export default FileMessage
