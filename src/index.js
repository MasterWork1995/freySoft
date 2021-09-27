import './sass/main.scss';

const refs = {
  menuBtnRef: document.querySelector('[data-menu-button]'),
  mobileMenuRef: document.querySelector('[data-menu]'),
};

const onToggleMobileMenu = () => {
  refs.mobileMenuRef.classList.toggle('is-open');
  refs.menuBtnRef.classList.toggle('is-open');
};

refs.menuBtnRef.addEventListener('click', onToggleMobileMenu);
