import React, { useEffect } from 'react';

import './App.css';

const App = () => {

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const constraints = { audio: true };

      const audio = document.querySelector('audio');

      navigator.mediaDevices.getUserMedia(constraints).then((stream) => {audio.srcObject = stream});

    } else {
      alert('getUserMedia() is not supported by your browser');
    }
  }, []);

  return (
    <section className="App-stuff">
      <h1>Trying out some audio stuff</h1>
      <audio autoPlay controls/>
    </section>
  );
}

export default App;
