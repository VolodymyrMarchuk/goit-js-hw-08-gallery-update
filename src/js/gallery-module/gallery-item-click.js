import { refs } from '../gallery-module/refs';
import onOpenModalClick from './open-modal-click';

export function onGalleryItemClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const bigImg = e.target.dataset.source;
  refs.bigModalImage.src = bigImg;

  onOpenModalClick();
}
