import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createDetailRestaurant } from '../template-creators';
import LikeButtonInitiator from '../../utility/like-button';

const Detail = {
  async render() {
    return `
    <div class="container" id="container">
      <h1 class="container-title">Detail Restaurant</h1>
      <div class="detail-restaurant" id="detail"></div>
    </div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await RestaurantSource.detailRestaurant(url.id);
    const detailContainer = document.querySelector('#detail');
    detailContainer.innerHTML = createDetailRestaurant(detail);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: detail.id,
        name: detail.name,
        city: detail.city,
        rating: detail.rating,
        description: detail.description,
        pictureId: detail.pictureId,
      },
    });
  },
};

export default Detail;
