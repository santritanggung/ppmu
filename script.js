document.getElementById('menu-toggle').addEventListener('click', function() {
  this.classList.toggle('clicked');
  var menu = document.querySelector('.menu');
  menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'flex' : 'none';
});
