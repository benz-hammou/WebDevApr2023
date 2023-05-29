const keys = document.querySelectorAll(".key");
const audios = document.querySelectorAll("audio");

document.addEventListener("keypress", (e) => getRightCode(e.key));

function playAudio(key) {
  const audioDataKey = document.querySelector(`audio[data-key="${key}"]`);
  const divDataKey = document.querySelector(`div[data-key="${key}"]`);
  const audio = new Audio(audioDataKey.src);
  divDataKey.style.transform = "scale(1.2)";
  divDataKey.style.transition = "100ms";
  setTimeout(() => {
    divDataKey.style.transform = "none";
  }, "300");
  audio.play();
}

const getRightCode = (key) => {
  switch (key) {
    case "A":
      playAudio(65);
      break;
    case "a":
      playAudio(65);
      break;
    case "S":
      playAudio(83);
      break;
    case "s":
      playAudio(83);
      break;
    case "D":
      playAudio(68);
      break;
    case "d":
      playAudio(68);
      break;
    case "F":
      playAudio(70);
      break;
    case "f":
      playAudio(70);
      break;
    case "G":
      playAudio(71);
      break;
    case "g":
      playAudio(71);
      break;
    case "H":
      playAudio(72);
      break;
    case "h":
      playAudio(72);
      break;
    case "J":
      playAudio(74);
      break;
    case "j":
      playAudio(74);
      break;
    case "K":
      playAudio(75);
      break;
    case "k":
      playAudio(75);
      break;
    case "L":
      playAudio(76);
      break;
    case "l":
      playAudio(76);
      break;
  }
};
