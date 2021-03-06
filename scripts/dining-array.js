const diningArray = new Array();

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

export { diningArray };

const rightBtn = document.getElementById('dining-right');
const leftBtn = document.getElementById('dining-left');

let imagePosition = 0;

function nextImage() {
  if (imagePosition === diningArray.length - 1) {
    imagePosition = 0;
    currentImage.src = diningArray[0].src;

  } else {
    imagePosition += 1;
    currentImage.src = diningArray[imagePosition].src;

  }
}

function previousImage() {
  if (imagePosition === 0) {
    imagePosition = diningArray.length - 1;
    currentImage.src = diningArray[imagePosition].src;

  } else {
    imagePosition -= 1;
    currentImage.src = diningArray[imagePosition].src;

  }
}

rightBtn.addEventListener('click', nextImage);
leftBtn.addEventListener('click', previousImage);