import { refs } from '../gallery-module/refs';
import { onCloseModalClick } from './close-modal-click';
import { collection } from '../index';

export { onEscapeKeyPress, onKeyPress };

function onEscapeKeyPress(e) {
  if (e.code === 'Escape') onCloseModalClick();
  if (e.code === 'ArrowLeft' || e.code === 'ArrowRight') onKeyPress(e);
}

function onKeyPress(e) {
  const img = refs.bigModalImage.src;
  let index = 0;
  collection.forEach((x, i) => {
    if (x.dataset.source === img) index = i;
  });

  if (e.code === 'ArrowLeft') {
    index--;
    if (index < 0) {
      index = collection.length - 1;
    }
    show(index);
  }
  if (e.code === 'ArrowRight') {
    index++;
    if (index > collection.length - 1) {
      index = 0;
    }
    show(index);
  }
}

function show(i) {
  refs.bigModalImage.src = collection[i].dataset.source;
}
