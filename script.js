const themeButton = document.getElementById('theme-button');

themeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        themeButton.textContent = 'Светлая тема';
    } else {
        themeButton.textContent = 'Тёмная тема';
    }
});


const cartCount = document.getElementById('cart-count');
const cards = document.querySelectorAll('.animal-card');

let totalItems = 0;

cards.forEach(function(card) {
    const buyButton = card.querySelector('.buy-button');
    const minusButton = card.querySelector('.minus-button');
    const itemCount = card.querySelector('.item-count');

    let count = 0;

    buyButton.addEventListener('click', function() {
        count++;
        totalItems++;

        itemCount.textContent = count;
        cartCount.textContent = totalItems;
    });

    minusButton.addEventListener('click', function() {
        if (count > 0) {
            count--;
            totalItems--;

            itemCount.textContent = count;
            cartCount.textContent = totalItems;
        }
    });
});


const randomButton = document.getElementById('random-button');
const animalResult = document.getElementById('animal-result');

const animals = [
    'Тебе подходит лиса Алиса. Хороший выбор, если ты тоже иногда устраиваешь хаос.',
    'Твой выбор — фенек Борис. Маленький, странный и очень харизматичный.',
    'Тебе достался енот Геннадий. Прятать еду теперь бессмысленно.'
];

randomButton.addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * animals.length);

    animalResult.textContent = animals[randomNumber];
});


const orderForm = document.getElementById('order-form');
const formMessage = document.getElementById('form-message');

orderForm.addEventListener('submit', function(event) {
    event.preventDefault();

    formMessage.textContent = 'Заявка отправлена. Зверь уже собирает вещи.';
    orderForm.reset();
});