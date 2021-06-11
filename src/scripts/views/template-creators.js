import CONFIG from '../global/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantListTemplate = (list) => `
<div class="restaurant">
    <img 
      data-src="${CONFIG.BASE_IMAGE_URL}${list.pictureId}" 
      alt="${list.name}"
      class="lazyload res-image" 
      crossorigin="anonymous"/>
  <div class="desc">
    <div class="info-resto">
      <span class="rating">
        <p aria-label="rating restaurant">⭐ ${list.rating}</p>
      </span>
      <a class="info-link" aria-label="detail restaurant ${list.name}" href="${`/#/detail/${list.id}`}">
        <span class="nama">${list.name}</span>
        <p> <i class="fa fa-map-marker 2x"></i> ${list.city} </p>  
      </a>
    </div>
    <div class="info-lorem">
      <p>${list.description}</p>
    </div>
  </div>
</div>
`;

const createDetailRestaurant = (detail) =>
  `
  <section id="info-detail">
  <div class="card-img" tabindex="0" aria-label="informasi restaurant">
    <img 
    src="${CONFIG.BASE_IMAGE_URL}${detail.pictureId}" 
    alt="${detail.name}"
    crossorigin="anonymous"/>
    <span class="label">Categories</span>
    <div class="details-img">
      <ul>
        <li class="detail-rating"><i title="ratings" class="fa fa-star"></i>${detail.rating}</li>
        ${detail.categories
          .map(
            (categori) => `
        <li class="category"><span>${categori.name}</span>`
          )
          .join('')}</li>
      </ul>
    </div>
    <div class="description">
        <h3 class="label namex">${detail.name}</h3>
        <h4 class="label">${detail.address}</h4>
        <p>${detail.description}</p>
      </div>
  </div>
  <div class="card-menu" tabindex="0" aria-label="menu restaurant">
    <h3>Menu</h3>
    <div class="detail-menu">
      <div class="detail-food">
        <h4>Food</h4>
        <ul>
          ${detail.menus.foods
            .map(
              (foods) => `
          <li>${foods.name}</li>
          `
            )
            .join('')}
        </ul>
      </div>
      <div class="detail-drink">
        <h4>Drink</h4>
        <ul>
          ${detail.menus.drinks
            .map(
              (drink) => `
          <li>${drink.name}</li>
          `
            )
            .join('')}
        </ul>
      </div>
    </div>
  </div>
  <div class="card-review" tabindex="0" aria-label="review restaurant">
    <h3>Reviews</h3>
    <div id="review-list">
        ${detail.customerReviews
          .map(
            (review) => `
        <div class="review">
          <span class=" logo">
            <i class="fa fa-user-circle fa-2x" aria-label="logo-user"></i>
          </span>
          <div class="reviewer">
            <span>${review.date}</span>
            <p class="name">${review.name}</p>
            <p class="review">"${review.review}"</p>
          </div>
        </div>
        `
          )
          .join('')}
    </div>
  </div>
</section>

`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likedButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantListTemplate,
  createDetailRestaurant,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
