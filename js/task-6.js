function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxesDiv = document.querySelector('#boxes');

const createBoxes = amount => {
  boxesDiv.innerHTML = ''; // Очищення контейнера

  let totalBox = [];
  let sizeBox = 30;

  for (let index = 0; index < amount; index++) {
    const newBox = document.createElement('div');
    newBox.style.width = `${sizeBox}px`;
    newBox.style.height = `${sizeBox}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    totalBox.push(newBox);
    sizeBox += 10;
  }
  boxesDiv.append(...totalBox);
};

const destroyBoxes = () => {
  boxesDiv.innerHTML = '';
};

btnCreate.addEventListener('click', () => {
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

btnDestroy.addEventListener('click', destroyBoxes);
