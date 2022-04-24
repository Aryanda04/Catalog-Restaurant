import 'regenerator-runtime';
// css
// import '../styles/normalize.css';
// import '../styles/root.css';
// import '../styles/nav.css';
// import '../styles/header.css';
import '../styles/main.css';
// import '../styles/footer.css';
import '../styles/responsive.css';
// import '../styles/spinner.css';
// import '../styles/resto-detail.css';
// import '../styles/resto-fav.css';
// js
import App from './views/App';
import swRegister from './utils/sw-register';
import {WebSocketInitiator} from './utils/websocket-initiator';
import CONFIG from './global/config';
// components
import './component/navbar';
import './component/hero';
import './component/custom-footer';

// init App
const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('.nav-list'),
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
