import galleryItems from './data/gallery-items';
import { galleryMarkup } from './gallery-module/gallery-markup';
import onGalleryItemClick from './gallery-module/gallery-item-click';
import { refs } from './gallery-module/refs';

refs.gallery.addEventListener('click', onGalleryItemClick);
refs.gallery.insertAdjacentHTML('afterbegin', galleryMarkup);

export const collection = document.querySelectorAll('.gallery__image');
