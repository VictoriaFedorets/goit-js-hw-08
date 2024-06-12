const form = document.querySelector('.login-form');

form.addEventListener('submit', handlerGetComment);

function handlerGetComment(evt) {
  evt.preventDefault();

  // Варіант 1
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
  }
  const objDone = {
    email,
    password,
  };
  console.log(objDone);
  form.reset();
}
// Варіант 2(коли обов'язково є name)
//   const formData = new FormData(evt.currentTarget);
//   const data = {};
//   formData.forEach((value, key) => (data[key] = value));
//   if (email === '' || password === '') {
//     return alert('All form fields must be filled in');
//   }
//   const objDone = {
//     email: email.value.trim(),
//     password: password.value.trim(),
//   };
//   console.log(objDone);
//   form.reset();
// }

// Напиши скрипт управління формою логіна.

// відправлення форми form.login-form повинна відбуватися за подією submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'. Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.
// При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
