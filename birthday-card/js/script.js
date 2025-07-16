function startListening() {
    //browser supports microphone access
    if (!navigator.mediaDevices?.getUserMedia) {
      alert("Your browser does not support microphone access.");
      return;
    }
  
    // mic access
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(handleStream)
      .catch(err => {
        alert("Microphone access denied. Please enable it in your browser settings.");
        console.error(err);
      });
  }
  
  function handleStream(stream) {
    const audioContext = new AudioContext();
    const analyser = audioContext.createAnalyser();
    const microphone = audioContext.createMediaStreamSource(stream);
    const data = new Uint8Array(analyser.fftSize);
  
    microphone.connect(analyser);
  
    // check for blowing
    const checkBlow = () => {
      analyser.getByteFrequencyData(data);
      const averageVolume = data.reduce((a, b) => a + b, 0) / data.length;
  
      if (averageVolume > 60) {
        extinguishFlame();
      } else {
        requestAnimationFrame(checkBlow);
      }
    }
  
    checkBlow();
  }
  
  function extinguishFlame() {
    const flame = document.getElementById('flame');
    const txt = document.getElementById('txt');
    flame.classList.add('hidden'); // Fade out flame
    txt.innerHTML = 'Happy Birthday!';
  }

  startListening()
