// Add imports above this line
import { CardItems } from './01-gallerycards';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryFn = document.querySelector('.gallery');


galleryFn.insertAdjacentHTML('afterbegin', CardItems);


galleryFn.addEventListener('click', (event) => {
    const galleryItemImg = event.target.classList.contains('gallery__image');
    if (!galleryItemImg) {
             return;
    }
    
  
  event.preventDefault();
    const itemImg = galleryFn.children;
     const gallerySimple = new SimpleLightbox(itemImg, {captionsData: 'alt', captionDelay: 250});
  
    open.gallerySimple;
      
})


