let btn = document.querySelector('.falcon--btn');
let falcon = document.querySelector('.fa-rocket');
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
        if (falcon.classList.contains('land')) {
            falcon.classList.remove('land');
        }
        falcon.classList.add('launch');
    } else {
        falcon.classList.remove('launch');
        falcon.classList.add('land');
    }
}