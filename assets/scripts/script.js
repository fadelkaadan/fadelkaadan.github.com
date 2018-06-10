let btn = document.querySelector('.btn');
let falcon = document.querySelector('.falcon__logo')
btn.addEventListener('click', () => {
    falcon.classList.add('animate');
})
btn.addEventListener('touchstart', () => {
    falcon.classList.add('animate');
})