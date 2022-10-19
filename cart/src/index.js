import faker from 'faker';

let cartText = `You have ${faker.random.number()} items in your cart`;

document.querySelector('#dev-cart').innerHTML = cartText;
