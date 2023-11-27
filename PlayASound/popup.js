document.getElementById('playButton').addEventListener('click', function () {
    var audio = new Audio(chrome.runtime.getURL('notify.wav'));
    audio.play();
  });
  