import { refs } from '../gallery-module/refs';
import { onCloseModalClick } from './close-modal-click';
import { onEscapeKeyPress } from './modal-press-key';

export function onOpenModalClick(e) {
  refs.lightbox.classList.add('is-open');
  refs.btnIsCloseModal.addEventListener('click', onCloseModalClick);
  const overlay = document.querySelector('.lightbox__overlay');

  overlay.addEventListener('click', onCloseModalClick);
  window.addEventListener('keydown', onEscapeKeyPress);
}
