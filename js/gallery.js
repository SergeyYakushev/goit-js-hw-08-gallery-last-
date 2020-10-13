import gelleryItems from './gallery-items.js';

//console.log(gelleryItems);
const gelleryItemsEl = document.querySelector('.js-gallery');
const overlayEl = document.querySelector('.lightbox__overlay');
const modalEl = document.querySelector('.js-lightbox');
const modalImgEl = document.querySelector('.lightbox__image');
const buttonCloseEl = document.querySelector('.lightbox__button');

//console.log(gelleryItemsEl);

const imagesItems = gelleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
    <a
        class="gallery__link"
        href='${original}'
    >
        <img
            class="gallery__image"
            src='${preview}'
            data-source='${original}'
            alt='${description}'
        />
    </a>
</li>`;
  })
  .join('');

//console.log(imagesItems);
gelleryItemsEl.insertAdjacentHTML('beforeend', imagesItems);

gelleryItemsEl.addEventListener('click', modalOpenClick);

function modalOpenClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    //gard close - это фильтр  делигации, фильтр цели
    return;
  }

  addOpenModalClass(modalEl);

  modalImgEl.src = e.target.dataset.source;
  modalImgEl.alt = e.target.alt;

  closeModalByElementClick(buttonCloseEl);
  closeModalByElementClick(overlayEl);
}

function addOpenModalClass(modal) {
  modal.classList.add('is-open');
}

function closeModalByElementClick(element) {
  element.addEventListener('click', removeClassModal);
}
function removeClassModal() {
  modalEl.classList.remove('is-open');
}
