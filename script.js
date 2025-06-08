const openIcon = document.querySelector('.open-menu');
const closeIcon = document.querySelector('.close-menu');
const overlay = document.querySelector('.menu-overlay');

openIcon.addEventListener('click', () => {
  overlay.classList.add('active');
  openIcon.style.display = 'none';
  closeIcon.style.display = 'inline';
});

closeIcon.addEventListener('click', () => {
  overlay.classList.remove('active');
  closeIcon.style.display = 'none';
  openIcon.style.display = 'inline';
});
