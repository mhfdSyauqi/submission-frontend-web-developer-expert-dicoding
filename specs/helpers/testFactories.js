import LikeButtonInitiator from '../../src/scripts/utility/like-button';

const createLikeButtonPresenter = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    restaurant,
  });
};

export { createLikeButtonPresenter };
