let rightButton = document.getElementById('dining-right');
let leftButton = document.getElementById('dining-left');
let currentImage = document.getElementById('dining-image');
let diningArray = new Array();

diningArray[0] = new Image();
diningArray[0].src = './images/dining1.jpg';

diningArray[1] = new Image();
diningArray[1].src = './images/dining2.jpg';

diningArray[2] = new Image();
diningArray[2].src = './images/dining3.jpg';

diningArray[3] = new Image();
diningArray[3].src = './images/dining4.jpg';

diningArray[4] = new Image();
diningArray[4].src = ' ./images/dining5.jpg';

imagePosition = 0;
console.log(imagePosition);

function nextImage() {
  if (imagePosition === diningArray.length - 1) {
    imagePosition = 0;
    currentImage.src = diningArray[imagePosition].src;
    console.log(imagePosition);
  } else {
    imagePosition += 1;
    currentImage.src = diningArray[imagePosition].src;
    console.log(imagePosition);
  }
}

function previousImage() {
  if (imagePosition === 0) {
    imagePosition = diningArray.length - 1;
    currentImage.src = diningArray[imagePosition].src;
    console.log(imagePosition);
  } else {
    imagePosition -= 1;
    currentImage.src = diningArray[imagePosition].src;
    console.log(imagePosition);
  }
}

rightButton.addEventListener('click', nextImage);
leftButton.addEventListener('click', previousImage);