(() => {
  const refs = {
    openMenuBtn: document.querySelector('.header-menu-open'),
    closeMenuBtn: document.querySelector('.header-menu-close'),
    menu: document.querySelector('.header-backdrop'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('burger-is-hidden');
  }
})();
