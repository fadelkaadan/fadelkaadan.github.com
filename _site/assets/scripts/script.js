let btn = document.querySelector('.btn');
let falcon = document.querySelector('.falcon__logo');
let deck = document.querySelectorAll('.deck__card');

btn.addEventListener('click', (event) => {
    event.preventDefault;
    falcon.classList.add('animate');
})
btn.addEventListener('touchstart', (event) => {
    event.preventDefault;
    falcon.classList.add('animate');
})

deck.forEach(function(card) {
    card.addEventListener('click', () => {
        if (!isAnimated(card)) {
            card.classList.add('deck__card--animated');
        } else if (isAnimated(card)) {
            card.classList.remove('deck__card--animated');
        }
    });
});
function isAnimated(item) {
    if (item.classList.contains('deck__card--animated')) {
        return true;
    }
    return false;
}