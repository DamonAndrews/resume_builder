var underlineButtonDiv = document.getElementById("underlineButtonDiv");

var underlineButtonInput = document.getElementById("underlineButtonInput");

var fullNameInput = document.getElementById("fullNameInput");

var allCapsNameInput = document.getElementById("allCapsNameInput");

var italicButtonDiv = document.getElementById("italicButtonDiv");

var italicButtonInput = document.getElementById("italicButtonInput");


var fontColorResetButton=document.getElementById("fontColorResetButton");

var headerBanner=document.getElementById("headerBanner");

var bgColorDiv=document.getElementById("bgColorDiv");

function myFunction() {
    var x = document.getElementById("nameOptionsSection");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

allCapsNameInput.addEventListener("click", capitalizer);

function capitalizer() {
if (allCapsNameInput.checked === true) {
  fullNameInput.style.textTransform = 'uppercase'; 
} else {
  fullNameInput.style.textTransform= 'none'; 
}
}
underlineButtonInput.addEventListener("click", underliner);

function underliner() {
if (underlineButtonInput.checked === true) {
  fullNameInput.style.textDecoration = 'underline'; 
  underlineButtonDiv.style.textDecoration = 'underline'; 
} else {
  fullNameInput.style.textDecoration = 'none'; 
  underlineButtonDiv.style.textDecoration = 'none'; 
}
}
    
italicButtonInput.addEventListener("click", italicizer);

function italicizer () {
  if (italicButtonInput.checked === true) {
    fullNameInput.style.fontStyle = 'italic';
    italicButtonDiv.style.fontStyle = 'italic';
  } else {
    fullNameInput.style.fontStyle = 'normal';
    italicButtonDiv.style.fontStyle = 'normal';
  }
}

cursiveButtonInput.addEventListener("click", cursiver);

function cursiver () {
  if (cursiveButtonInput.checked === true) {
    fullNameInput.style.fontFamily = 'Brush Script MT';
    cursiveButtonDiv.style.fontFamily = 'Brush Script MT';
  } else {
    fullNameInput.style.fontFamily = 'normal';
    cursiveButtonDiv.style.fontFamily = 'normal';
  }
}

blueButtonInput.addEventListener("click", bluer);

greyButtonInput.addEventListener("click", greyer);

whiteButtonInput.addEventListener("click", whiter);

redButtonInput.addEventListener("click", redder);

fontColorResetButton.addEventListener("click", clearAllFontColor);

function bluer () {
  if (blueButtonInput.checked === true) {
    fullNameInput.style.color = 'blue';
    fontColorDiv.style.color = 'blue';
  } else {
    fullNameInput.style.color = 'black';
  fontColorDiv.style.color = 'black';
  fontColorDiv.style.backgroundColor = 'lightblue';
  }
}

function greyer () {
  if (greyButtonInput.checked === true) {
    fullNameInput.style.color = 'grey';
    fontColorDiv.style.color = 'grey';
  
  } else {
    fullNameInput.style.color = 'black';
  fontColorDiv.style.color = 'black';
  fontColorDiv.style.backgroundColor = 'lightblue';
  }
}

function whiter () {
  if (whiteButtonInput.checked === true) {
    fullNameInput.style.color = 'white';
    fontColorDiv.style.color = 'white';
  } else {
    fullNameInput.style.color = 'black';
  fontColorDiv.style.color = 'black';
  fontColorDiv.style.backgroundColor = 'lightblue';
  }
}

function redder () {
  if (redButtonInput.checked === true) {
    fullNameInput.style.color = 'red';
    fontColorDiv.style.color = 'red';
  } else {
    fullNameInput.style.color = 'black';
  fontColorDiv.style.color = 'black';
  fontColorDiv.style.backgroundColor = 'lightblue';
  }
}

function clearAllFontColor () {
  fullNameInput.style.color = 'black';
  fontColorDiv.style.color = 'black';
  fontColorDiv.style.backgroundColor = 'lightblue';
}

blueBackgroundInput.addEventListener("click", bgbluer);

greyBackgroundInput.addEventListener("click", bggreyer);

blackBackgroundInput.addEventListener("click", bgblacker);

redBackgroundInput.addEventListener("click", bgredder);

bgColorResetButton.addEventListener("click", clearAllBGColor);

function bgbluer () {
  if (blueBackgroundInput.checked === true) {
    fullNameInput.style.backgroundColor = 'blue';
   bgColorDiv.style.color = 'blue';
  } else {
    fullNameInput.style.color = 'black';
  fontColorDiv.style.color = 'black';
  fontColorDiv.style.backgroundColor = 'lightblue';
  }
}
function bggreyer () {
  if (greyBackgroundInput.checked === true) {
    fullNameInput.style.backgroundColor = 'silver';
    bgColorDiv.style.color = 'grey';
   
  } else {
    fullNameInput.style.color = 'black';
  fontColorDiv.style.color = 'black';
  fontColorDiv.style.backgroundColor = 'lightblue';
  }
}
function bgblacker () {
  if (blackBackgroundInput.checked === true) {
    fullNameInput.style.backgroundColor = 'black';
    bgColorDiv.style.color = 'black';
   
  } else {
    fullNameInput.style.color = 'black';
  fontColorDiv.style.color = 'black';
  fontColorDiv.style.backgroundColor = 'lightblue';
  }
}
function bgredder () {
  if (redBackgroundInput.checked === true) {
    fullNameInput.style.backgroundColor = 'red';
    bgColorDiv.style.color = 'red';
   
  } else {
    fullNameInput.style.color = 'black';
  fontColorDiv.style.color = 'black';
  fontColorDiv.style.backgroundColor = 'lightblue';
  }
}

  function clearAllBGColor() {
    fullNameInput.style.backgroundColor ='white';
    bgColorDiv.style.color = 'black';   
  } 

lNameInput.addEventListener("click", nameSizeL);

xlNameInput.addEventListener("click", nameSizeXL);

xxlNameInput.addEventListener("click", nameSizeXXL);

smallNameInput.addEventListener("click", nameSizeSmall);

nameSizeResetButton.addEventListener("click", nameSizeReset);

function nameSizeL () {
  if (lNameInput.checked === true) {
    fullNameInput.style.fontSize = '140px';
  } else {
    fullNameInput.style.fontSize = '110px;';
  }
}
function nameSizeXL () {
  if (xlNameInput.checked === true) {
    fullNameInput.style.fontSize = '160px';
  } else {
    fullNameInput.style.fontSize = '110px;';
  }
}
function nameSizeXXL () {
  if (xxlNameInput.checked === true) {
    fullNameInput.style.fontSize = '170px';
  } else {
    fullNameInput.style.fontSize = '110px;';
  }
}
function nameSizeSmall () {
  if (smallNameInput.checked === true) {
    fullNameInput.style.fontSize = '85px';
  } else {
    fullNameInput.style.fontSize = '110px;';
  }
}

function nameSizeReset() {
  fullNameInput.style.fontSize = '110px';
} 

centerButtonInput.addEventListener("click", centerer);

leftButtonInput.addEventListener("click", lefter);

rightButtonInput.addEventListener("click", righter);

function centerer () {
  if (centerButtonInput.checked === true) {
    fullNameInput.style.textAlign = 'center';
  } else {
    fullNameInput.style.textAlign = 'center';
  }
}
function lefter () {
  if (leftButtonInput.checked === true) {
    fullNameInput.style.textAlign = 'left';
  } else {
    fullNameInput.style.textAlign = 'center';
  }
}
function righter () {
  if (rightButtonInput.checked === true) {
    fullNameInput.style.textAlign = 'right';
  } else {
    fullNameInput.style.textAlign = 'center';
  }
}