import 'regenerator-runtime';
// css
import '../styles/main.css';
// js
import App from './views/App';
import swRegister from './utils/sw-register';
import {WebSocketInitiator} from './utils/websocket-initiator';
import CONFIG from './global/config';
// components
import './views/component/navbar';
import './views/component/hero';
import './views/component/custom-footer';

// init App
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
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
