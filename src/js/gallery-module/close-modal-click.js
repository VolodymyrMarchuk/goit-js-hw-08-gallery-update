import { refs } from '../gallery-module/refs';
import { onEscapeKeyPress } from './modal-press-key';

export function onCloseModalClick(e) {
  window.removeEventListener('keydown', onEscapeKeyPress);
  refs.lightbox.classList.remove('is-open');
  refs.bigModalImage.src = '';
}
