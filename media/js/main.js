import createStickyHeader from './modules/stickyHeader.js';

const headerContainer = document.querySelector('.header-container');
const header = document.querySelector('header');

createStickyHeader(headerContainer, header, 'header--fixed');