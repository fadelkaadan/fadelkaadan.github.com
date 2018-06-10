let btn = document.querySelector('.btn');
let falcon = document.querySelector('.falcon__logo')
btn.addEventListener('click', (event) => {
    event.preventDefault;
    falcon.classList.add('animate');
})
btn.addEventListener('touchstart', (event) => {
    event.preventDefault;
    falcon.classList.add('animate');
})