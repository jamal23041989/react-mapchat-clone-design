import { useState, memo, useRef } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import audio from '../../assets/voice.mp3'
import { AudioMessageWrapp, AudioMessageButton, AudioMessageStatus, AudioMessageTime } from './styled'

const AudioMessage = () => {
  const [play, setPlay] = useState(false)
  const [currentTime, setCurrentTime] = useState('00:00')
  const [duration, setDuration] = useState('')
  let durationRef = useRef(null)
  let playerRef = null

  const togglePlayAudio = () => (!play ? playerRef.audioEl.current.play() : playerRef.audioEl.current.pause())

  const secondsToMinutes = seconds => {
    if (!seconds) return ''

    let duration = seconds
    let hours = duration / 3600
    duration = duration % 3600

    let min = parseInt(duration / 60)
    duration = duration % 60

    let sec = parseInt(duration)
    if (sec < 10) sec = `0${sec}`
    if (min < 10) min = `0${min}`

    if (parseInt(hours, 10) > 0) {
      return `${parseInt(hours, 10)}:${min}:${sec}`
    } else if (min === 0) {
      return `00:${sec}`
    } else {
      return `${min}:${sec}`
    }
  }

  const generateWidthFromSeconds = currentTime => {
    let width = (currentTime * 100) / playerRef?.audioEl.current.duration
    return width
  }

  return (
    <AudioMessageWrapp center width={generateWidthFromSeconds(playerRef?.audioEl.current.currentTime)}>
      <ReactAudioPlayer
        ref={element => (playerRef = element)}
        src={audio}
        preload="auto"
        listenInterval={500}
        volume={0.06}
        onPlay={() => setPlay(true)}
        onPause={() => setPlay(false)}
        onLoadedMetadata={() => setDuration(secondsToMinutes(playerRef?.audioEl.current.duration))}
        onListen={() => setCurrentTime(secondsToMinutes(playerRef?.audioEl.current.currentTime))}
      />
      <AudioMessageButton onClick={() => togglePlayAudio()} />
      <AudioMessageStatus />
      <AudioMessageTime ref={durationRef} size={10}>
        {play ? currentTime : duration}
      </AudioMessageTime>
    </AudioMessageWrapp>
  )
}

export default memo(AudioMessage)
