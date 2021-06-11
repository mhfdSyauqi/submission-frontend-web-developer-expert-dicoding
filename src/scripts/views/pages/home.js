import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantListTemplate } from '../template-creators';

const Home = {
  async render() {
    return `
    <div class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Explore Restaurant Hits Disekitarmu..</h1>
      </div>
    </div>
    
    <div class="container" id="container">
      <h1 class="container-title">List Nearest Restaurants...</h1>
      <div class="list-restaurant" id="list"></div>
    </div>
    `;
  },

  async afterRender() {
    const list = await RestaurantSource.listRestaurant();
    const listContainer = document.querySelector('#list');
    list.forEach((lists) => {
      listContainer.innerHTML += createRestaurantListTemplate(lists);
    });
  },
};

export default Home;
