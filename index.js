function togglePlay() {
  var audio = document.getElementById("mySong");
  // audio js
  if (audio) {
    if (audio.paused) {
      audio.play();
      document.getElementById("icon").src = "Images/pause.png";
    } else {
      audio.pause();
      document.getElementById("icon").src = "Images/play.png";
    }
  }
}
//
