import 'regenerator-runtime';
import '../styles/main.css';
import App from './views/App';
import swRegister from './utils/sw-register';

import './views/component/navbar';
import './views/component/hero';
import './views/component/custom-footer';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  document.querySelector('.container').scrollIntoView();
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
