import React, {useState} from 'react'
import './styles/app.scss'
import Player from './components/Player'
import Song from './components/Song'
import data from './data.js'

function App() {
  //State
  const [songs, setSongs] = useState(data())
  const [currentSong, serCurrentSong] = useState(songs[1])
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
