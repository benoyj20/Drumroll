// Detecting mouse click

function clicked_on_mouse() {
  var k = this.innerHTML;
  makeSound(k);
  AddAnimation(k);
}

for (var i = 0; i < document.querySelectorAll('.drum').length; i++) {
  document.querySelectorAll('.drum')[i].addEventListener("click", clicked_on_mouse);
}

// Detecting keyboard press

function clicked_on_keyboard(event)
{
  makeSound(event.key);
  AddAnimation(event.key);
}

document.addEventListener("keypress", function(event){
  clicked_on_keyboard(event);
  console.log(event);
});

// Making sounds

function makeSound(k)
{
  switch (k) {

    case 'w':
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case 'a':
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case 's':
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case 'd':
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case 'j':
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case 'k':
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case 'l':
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    default:
      console.log(k);
  }
}
function AddAnimation(k)
{
  document.querySelector("."+ k).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+ k).classList.remove("pressed");
  },100);
}
