import FavoriteRestaurantIdb from '../../data/fav-idb';
import { createRestaurantListTemplate } from '../template-creators';

const Fav = {
  async render() {
    return `
    <div class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Restaurant Favoritemu..</h1>
      </div>
    </div>
    
    <div class="container" id="container">
      <h1 class="container-title" id="empty-fav">Opps! Restaurant Favoritemu Belum Ada..</h1>
      <div class="list-restaurant" id="list"></div>
    </div>
    `;
  },

  async afterRender() {
    const list = await FavoriteRestaurantIdb.getAllRestaurants();
    const listContainer = document.querySelector('#list');
    const emptyFav = document.querySelector('#empty-fav');
    list.forEach((lists) => {
      emptyFav.innerText = '';
      listContainer.innerHTML += createRestaurantListTemplate(lists);
    });
  },
};

export default Fav;
