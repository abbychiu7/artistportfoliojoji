let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function () {
  // Pause the currently playing audio (if any)
  pauseAllAudio();

  let items = document.querySelectorAll('.item');
  document.querySelector('.slide').appendChild(items[0]);
});

prev.addEventListener('click', function () {
  // Pause the currently playing audio (if any)
  pauseAllAudio();

  let items = document.querySelectorAll('.item');
  document.querySelector('.slide').prepend(items[items.length - 1]);
});

// Function to pause all audio elements
function pauseAllAudio() {
  const audioElements = document.querySelectorAll('audio');
  audioElements.forEach(function (audio) {
    if (!audio.paused) {
      audio.pause();
    }
  });
}

// Toggle play/pause for the audio associated with the button
document.querySelectorAll('button[id^="audioButton"]').forEach(function (button) {
  const audioId = button.id.replace('audioButton', '');
  const audio = document.getElementById(`audio${audioId}`);

  let isPlaying = false;

  button.addEventListener('click', function () {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    isPlaying = !isPlaying;
  });
});
