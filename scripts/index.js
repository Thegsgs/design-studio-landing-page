import { initialProjects } from "./initial-projects.js";
import { diningArray } from "./dining-array.js";
import { initialReviews } from "./initial-reviews.js";

const imagePopup = document.querySelector('.popup_type_image');
const popupCloseBtn = imagePopup.querySelector('.popup__btn-close')
const projectsContainer = document.querySelector('.projects__content-container');
const projectTemplate = document.getElementById('project-template').content;
const reviewTemplate = document.getElementById('review-template').content;
const reviewContainer = document.querySelector('.reviews__content-container');

if (window.innerWidth > 768) {
  particlesJS.load('particles-js', 'particles.json');
  particlesJS.load('particles-js2', 'particles.json');
}

function openImagePopup(popup) {
  popup.classList.add('popup_opened');
}

function closeImagePopup(popup) {
  popup.classList.remove('popup_opened');
}
popupCloseBtn.addEventListener('click', () => {
  closeImagePopup(imagePopup)
});

// Template building

const buildReview = (image, name, review) => {
  const reviewElement = reviewTemplate.querySelector('.review').cloneNode(true);
  const reviewImage = reviewElement.querySelector('.review__image');
  const reviewName = reviewElement.querySelector('.review__name');
  const reviewText = reviewElement.querySelector('.review__text');

  reviewImage.src = image;
  reviewName.textContent = name;
  reviewText.textContent = review;

  return reviewElement;
}

initialReviews.forEach(review => {
  reviewContainer.append(buildReview(review.image, review.name, review.review));
});


const buildProject = (image, title, subtitle) => {

  const projectElement = projectTemplate.querySelector('.project').cloneNode(true);
  const projectImage = projectElement.querySelector('.project__image');
  const projectTitle = projectElement.querySelector('.project__title');
  const projectSubTitle = projectElement.querySelector('.project__subtitle');

  projectImage.src = image;
  projectTitle.textContent = title;
  projectSubTitle.textContent = subtitle;

  projectImage.addEventListener('click', () => {
    const imagePopupsrc = imagePopup.querySelector('.popup__image');
    imagePopupsrc.src = image;
    openImagePopup(imagePopup);
  });

  return projectElement;
}

initialProjects.forEach(project => {
  projectsContainer.append(buildProject(project.image, project.title, project.subtitle));
});

const header = document.querySelector('.header');
if (window.innerWidth > 768) {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      header.classList.remove('header_hidden');
    } else {
      header.classList.add('header_hidden');
    }
    prevScrollpos = currentScrollPos;
  }
}

const menu = document.querySelector('.menu');
const main = document.querySelector('.main');

function openMenu() {
  if (window.innerWidth <= 768) {
    main.classList.add('main_blurred');
    menu.classList.add('menu_opened');
  }
}

function closeMenu() {
  if (window.innerWidth <= 768) {
    main.classList.remove('main_blurred');
    menu.classList.remove('menu_opened');
  }
}

const menuBtn = document.querySelector('.header__container');
const menuCloseBtn = document.querySelector('.menu__btn-close');
menuBtn.addEventListener('click', openMenu);
menuCloseBtn.addEventListener('click', closeMenu);