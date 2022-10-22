import { galleryItems } from './gallery-items';
export const CardItems = creatGalleryCardItems(galleryItems);

function creatGalleryCardItems(galleryItemCard) {

    const itemcard = galleryItemCard.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>`
    }).join('');
    
    return itemcard;
}
