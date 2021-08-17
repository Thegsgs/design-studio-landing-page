let rightButton = document.querySelector('.project__arrow-container_right');
let leftButton = document.querySelector('.project__arrow-container_left');


let diningArray = new Array();

diningArray[0] = new Image();
diningArray[0].src = './images/dining2.jpg';

diningArray[1] = new Image();
diningArray[1].src = './images/dining3.jpg';

diningArray[2] = new Image();
diningArray[2].src = './images/dining4.jpg';

diningArray[3] = new Image();
diningArray[3].src = './images/dining5.jpg';

function nextImage(array) {

  let image = document.querySelector('.project__image');

  for (let i = 0; i < array.length; i++) {

    if (imgArray[i].src == img.src) // << check this
    {
      if (i === array.length) {
        document.getElementById(element).src = imgArray[0].src;
        break;
      }
      document.getElementById(element).src = imgArray[i + 1].src;
      break;
    }
  }
}

rightButton.addEventListener('click', nextImage);
leftButton.addEventListener('click', previousImage);