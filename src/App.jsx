import styled from 'styled-components'
import ChatBoard from './components/ChatBoard'
import Preview from './components/Preview'

const AppWrapp = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`
const AppColumn = styled.div``

const App = () => {
  return (
    <AppWrapp>
      <AppColumn>
        <Preview />
      </AppColumn>
      <AppColumn>
        <ChatBoard />
      </AppColumn>
    </AppWrapp>
  )
}

export default App
