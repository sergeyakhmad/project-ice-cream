(() => {
  const refs = {
    openMenuBtn: document.querySelector('.header-menu-open'),
    closeMenuBtn: document.querySelector('.header-menu-close'),
    menu: document.querySelector('.header-backdrop'),
    menuList: document.querySelector('.burger-list'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.menuList.addEventListener('click', closeMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('burger-is-hidden');
  }
  function closeMenu() {
    refs.menu.classList.toggle('burger-is-hidden');
  }
})();
