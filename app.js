function moveButton() {
   var winWidth = window.innerWidth;
   var winHeight = window.innerHeight;
   
   topRandom = rNum(0, winHeight);
   leftRandom = rNum(0, winWidth);
   
   function rNum (min, max) {
      return Math.random() * (max - min) + min;
      }
      document.getElementById("noB").style.left = leftRandom  + "px";
      document.getElementById("noB").style.top = topRandom  + "px";
}

function noPlay() {
   var audio = new Audio('../pou-no-sound-effect.mp3');
   audio.play();
}
