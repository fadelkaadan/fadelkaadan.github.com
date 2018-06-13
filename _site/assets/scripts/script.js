let btn = document.querySelector('.btn');
let falcon = document.querySelector('.falcon__logo');
let deck = document.querySelectorAll('.deck__card');

btn.addEventListener('click', animate);

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
function animate() {
    if (!falcon.classList.contains('launch')) {
        btn.textContent = 'Of course i still love you';
        if (falcon.classList.contains('land')) {
            falcon.classList.remove('land');
        }
        falcon.classList.add('launch');
    } else {
        btn.textContent = 'Launch';
        falcon.classList.remove('launch');
        falcon.classList.add('land');
    }
}