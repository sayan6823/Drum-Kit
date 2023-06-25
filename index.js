// Method 1
var docLength=document.querySelectorAll("button").length;

for(var i=0; i<docLength;i++){
    document.querySelectorAll(".drum")[i].addEventListener('click', function () {
        var butttonInnerHTMl=this.innerHTML;
        makeSound(butttonInnerHTMl);
    });
}


document.addEventListener("keypress",function(event){
        makeSound(event.key);
})


function makeSound(key){
    switch(key){
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            console.log(butttonInnerHTMlinnerHTML);

    }
}





// Method 2
// var docLength=document.querySelectorAll("button").length;

// var arr=['tom-1','tom-2','tom-3','tom-4','snare','crash','kick'];
// for(var i=0; i<docLength;i++){
//     (function (index) {
//         document.querySelectorAll("button")[index].addEventListener('click', function () {
//           var audio = new Audio('sounds/' + arr[index] + '.mp3');
//           audio.play();
//         });
//       })(i);
// }


// CHATGPT Method
// var docLength = document.querySelectorAll("button").length;

// // Preload audio files
// var audioElements = {
//   "w": new Audio('sounds/tom-1.mp3'),
//   "a": new Audio('sounds/tom-2.mp3'),
//   "s": new Audio('sounds/tom-3.mp3'),
//   "d": new Audio('sounds/tom-4.mp3'),
//   "j": new Audio('sounds/snare.mp3'),
//   "k": new Audio('sounds/crash.mp3'),
//   "l": new Audio('sounds/kick-bass.mp3')
// };

// for (var i = 0; i < docLength; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener('click', function () {
//     var buttonInnerHTML = this.innerHTML;
//     makeSound(buttonInnerHTML);
//   });
// }

// document.addEventListener("keypress", function (event) {
//   makeSound(event.key);
// });

// function makeSound(key) {
//     var audio = audioElements[key];
//     if (audio) {
//       audio.currentTime = 0; // Reset playback to start
//       audio.addEventListener('canplaythrough', function () {
//         audio.play();
//       });
//     }
//   }
  
