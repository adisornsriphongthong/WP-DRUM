// alert("Hello World!");


document.addEventListener('keydown', (e) => {
  var value = e.key;
  if (value==="w") {
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
   }else{
    if (value ==="a") {
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
     }else{
      if (value==="s") {
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
       }else{
        if (value ==="d") {
          var audio = new Audio('sounds/tom-1.mp3');
          audio.play();
         }else{
          if (value ==="j") {
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
           }else{
            if (value ==="k") {
              var audio = new Audio('sounds/tom-3.mp3');
              audio.play();
             }else{
              if (value ==="l") {
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
               }
             }
           }
         }
       }
     }
   }
});

let drumbutton = document.getElementById('drum');

drumbutton.forEach(element => {
  drumbutton.addEventListener('click', () => {
    console.log('Hello World');
  })
});

// document.querySelector("button").addEventListener("click", handleClick);




