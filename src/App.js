import React, {useState, useEffect} from 'react';
import Video from './Video';
import db from './firebase'
import './App.css';

function App() {
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    db.collection('videos').onSnapshot(snapshot =>
      setVideos(snapshot.docs.map(doc => doc.data())))
  }, [videos]);
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(({url, channel, description, song, likes, messages, shares}) => (
          <Video 
            url = {url}
            channel = {channel}
            song = {song}
            likes = {likes}
            description = {description}
            messages = {messages}
            shares = {shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
