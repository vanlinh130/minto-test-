const aboutBtns = document.querySelectorAll('.js-about');
const aboutModal = document.querySelector('.js-about-modal');
const aboutModalClose = document.querySelector('.js-about-modal-close');
const aboutModalContainer = document.querySelector('.js-about-modal-container');

const solutionBtns = document.querySelectorAll('.js-solution');
const solutionModal = document.querySelector('.js-solution-modal');
const solutionModalClose = document.querySelector('.js-solution-modal-close');
const solutionModalContainer = document.querySelector('.js-solution-modal-container');

// Hàm Hiển thi modal mau vé (thêm class open vào modal)
function showModal() {
    aboutModal.classList.add('open');
}

function showModalSolution() {
    solutionModal.classList.add('open');
}

// Hàm Ẩn modal mau vé (gỡ bỏ class open vào modal)
function hideModal() {
    aboutModal.classList.remove('open');
}

function hideModalSolution() {
    solutionModal.classList.remove('open');
}

// Lặp qua từng thẻ button và nghe hành vi click
for (const aboutBtn of aboutBtns) {
    aboutBtn.addEventListener('click', showModal);
}

for (const solutionBtn of solutionBtns) {
    solutionBtn.addEventListener('click', showModalSolution);
}

// Nghe hành vi click vào button close
aboutModalClose.addEventListener('click', hideModal);
solutionModalClose.addEventListener('click', hideModalSolution);

// Bước nổi nọt chọn và click sẽ bị ẩn
aboutModal.addEventListener('click', hideModal);
solutionModal.addEventListener('click', hideModalSolution);

// ngừng việc nổi bọt tự dộng lại trong container
aboutModalContainer.addEventListener('click', function (event) {
    event.stopPropagation();
});

solutionModalContainer.addEventListener('click', function (event) {
    event.stopPropagation();
});

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function clearIsActive() {
    if ($('.col.isActive')) {
        $('.col.isActive').classList.remove('isActive', 'automatic');
        $('.col.isActive').classList.remove('isActive');
    }
}

$$('.col').forEach((element) => {
    element.addEventListener('click', (e) => {
        clearIsActive();

        element.classList.add('isActive', 'automatic');
    });
});
