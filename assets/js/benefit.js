const images = document.querySelectorAll('.js-items');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');

const images_2 = document.querySelectorAll('.js-items-2');
const modal_2 = document.getElementById('modal-2');
const modalImage_2 = document.getElementById('modalImage-2');

const images_3 = document.querySelectorAll('.js-items-3');
const modal_3 = document.getElementById('modal-3');
const modalImage_3 = document.getElementById('modalImage-3');

const images_4 = document.querySelectorAll('.js-items-4');
const modal_4 = document.getElementById('modal-4');
const modalImage_4 = document.getElementById('modalImage-4');

const images_5 = document.querySelectorAll('.js-items-5');
const modal_5 = document.getElementById('modal-5');
const modalImage_5 = document.getElementById('modalImage-5');

const images_6 = document.querySelectorAll('.js-items-6');
const modal_6 = document.getElementById('modal-6');
const modalImage_6 = document.getElementById('modalImage-6');

images.forEach((image) => {
    image.addEventListener('click', () => {
        modalImage.div = image.div;
        modal.style.display = 'block';
    });
});

images_2.forEach((image) => {
    image.addEventListener('click', () => {
        modalImage_2.div = image.div;
        modal_2.style.display = 'block';
    });
});

images_3.forEach((image) => {
    image.addEventListener('click', () => {
        modalImage_3.div = image.div;
        modal_3.style.display = 'block';
    });
});

images_4.forEach((image) => {
    image.addEventListener('click', () => {
        modalImage_4.div = image.div;
        modal_4.style.display = 'block';
    });
});

images_5.forEach((image) => {
    image.addEventListener('click', () => {
        modalImage_5.div = image.div;
        modal_5.style.display = 'block';
    });
});

images_6.forEach((image) => {
    image.addEventListener('click', () => {
        modalImage_6.div = image.div;
        modal_6.style.display = 'block';
    });
});

modal.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal_2.addEventListener('click', () => {
    modal_2.style.display = 'none';
});

modal_3.addEventListener('click', () => {
    modal_3.style.display = 'none';
});

modal_4.addEventListener('click', () => {
    modal_4.style.display = 'none';
});

modal_5.addEventListener('click', () => {
    modal_5.style.display = 'none';
});

modal_6.addEventListener('click', () => {
    modal_6.style.display = 'none';
});
