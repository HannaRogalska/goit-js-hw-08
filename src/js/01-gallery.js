// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

// Change code below this line

console.log(galleryItems);
const ulRef = document.querySelector('.gallery');

const getContainGallary = document.querySelector('.gallery');
console.log(getContainGallary);
const setNewItemsElements = galleryItems
  .map(elem => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${elem.original}">
    <img class="gallery__image"
    src="${elem.preview}"
    data-source="${elem.original}"
    alt="${elem.description}"/>
    </a>
    </div>`;
  })
  .join('');
console.log(setNewItemsElements);
getContainGallary.insertAdjacentHTML('beforeend', setNewItemsElements);

const lightbox = new SimpleLightbox('.gallery a', { close: true });

