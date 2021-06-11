import DrawerInitiator from '../utility/navbar';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content, loader }) {
    this._button = button;
    this._drawer = drawer;
    this._loader = loader;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      loader: this._loader,
      content: this._content,
    });
  }

  async loaderAnimation() {
    this._loader.classList = await 'loader-container show';
    await setTimeout(() => {
      this._loader.classList = 'loader-container';
    }, 500);
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
