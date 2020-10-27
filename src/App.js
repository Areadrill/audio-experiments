import React, { useEffect } from 'react';

import './App.css';

const App = () => {

  useEffect(() => {
     if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const constraints = { audio: true };

      const audio = document.querySelector('audio');
      const context = new AudioContext();

      navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        const microphone = context.createMediaStreamSource(stream);
    
        const panOptions = {pan: -1};

        const pannerLeft = new StereoPannerNode(context, panOptions);

        microphone.connect(pannerLeft);

    
        pannerLeft.connect(context.destination);
      });
    } else {
      alert('getUserMedia() is not supported by your browser');
    }
  }, []);

  return (
    <section className="App-stuff">
      <h1>Trying out some audio stuff</h1>
    </section>
  );
}

export default App;
