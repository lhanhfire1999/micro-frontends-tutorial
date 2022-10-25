import faker from 'faker';

const mount = (el) => {
  let cartText = `You have ${faker.random.number()} items in your cart`;

  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-cart');
  if (el) mount(el);
}

export { mount };
