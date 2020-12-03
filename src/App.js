import React, {useState} from 'react'
import './styles/app.scss'
import Player from './components/Player'
import Song from './components/Song'
import data from './data.js'

function App() {
  //State
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[1])
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      currentSong={currentSong} />
    </div>
  );
}

export default App;
