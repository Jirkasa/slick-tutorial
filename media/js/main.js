import createStickHeader from './modules/stickyHeader.js';

const headerContainer = document.querySelector('.header-container');
const header = document.querySelector('header');

createStickHeader(headerContainer, header, 'header--fixed');