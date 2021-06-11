import 'regenerator-runtime';
import '../styles/main.scss';
import App from './views/app';
import swRegister from './utility/sw-register';

const app = new App({
  button: document.querySelector('#nav-drawer'),
  drawer: document.querySelector('nav'),
  content: document.querySelector('#main'),
  loader: document.querySelector('.loader-container'),
});

window.addEventListener('hashchange', () => {
  app.loaderAnimation();
  app.renderPage();
});

window.addEventListener('load', () => {
  app.loaderAnimation();
  app.renderPage();
  swRegister();
});
