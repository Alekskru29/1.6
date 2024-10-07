const toggleContentText = () => {
  const contentText = document.querySelector('.content__text');
  const hiddenText = document.querySelector('.hidden__text');
  const contentBtn = document.querySelector('.content__btn');

  if (contentText.classList.contains('show')) {
    contentText.classList.remove('show');
    hiddenText.classList.add('show');
    contentBtn.textContent = 'Скрыть';
  } else {
    contentText.classList.add('show');
    hiddenText.classList.remove('show');
    contentBtn.textContent = 'Читать далее';
  }
};

const contentBtn = document.querySelector('.content__btn');
contentBtn.addEventListener('click', toggleContentText);