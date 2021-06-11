/* eslint-disable new-cap */
const assert = require('assert');
// const { pause } = require('codeceptjs');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#empty-fav');
  I.see('Opps! Restaurant Favoritemu Belum Ada..', '.container-title');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Opps! Restaurant Favoritemu Belum Ada..', '.container-title');

  I.amOnPage('/');

  I.waitForElement('.info-link');
  I.seeElement('.info-link');

  const firstRestaurantLink = locate('.info-link').first();
  const firstRestaurant = locate('.nama').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.scrollTo('.container-title');
  I.waitForClickable(firstRestaurantLink, 2);
  I.click(firstRestaurantLink);

  I.wait(3);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant');
  const likedRestaurantTitle = await I.grabTextFrom('.nama');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('dislike one restaurant ', async ({ I }) => {
  I.see('Opps! Restaurant Favoritemu Belum Ada..', '.container-title');

  I.amOnPage('/');

  // see first list element
  I.waitForElement('.info-link');
  I.seeElement('.info-link');
  const firstRestaurantLink = locate('.info-link').first();
  const firstRestaurant = locate('.nama').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.scrollTo('.container-title');
  I.waitForClickable(firstRestaurantLink, 2);
  I.click(firstRestaurantLink);

  // waiting and click like button
  I.wait(3);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // back to favorite page
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant');
  const likedRestaurantTitle = await I.grabTextFrom('.nama');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  // dislike action
  I.wait(3);
  I.waitForElement('.info-link');
  I.seeElement('.info-link');
  const favRestaurantLink = locate('.info-link').first();
  I.waitForClickable(favRestaurantLink, 3);
  I.click(favRestaurantLink);

  I.waitForElement('#likedButton');
  I.seeElement('#likedButton');
  I.waitForClickable('#likedButton', 3);
  I.click('#likedButton');

  // check favorite page is empty
  I.amOnPage('/#/favorite');
  I.see('Opps! Restaurant Favoritemu Belum Ada..', '.container-title');
});
