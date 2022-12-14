import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/b070c8f1df.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import WebSocketInitiator from './utils/websocker-initiator';
import CONFIG from './globals/config';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();

  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
