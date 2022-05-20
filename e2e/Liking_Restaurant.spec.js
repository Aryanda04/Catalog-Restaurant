/* eslint-disable new-cap */
const assert = require('assert');

/* eslint-disable max-len */
Feature('Liking Restaurant');

Before(({I}) => {
  I.amOnPage('/#');
});

Scenario('showing empty liked restaurant', ({I}) => {
  I.amOnPage('/#/favorite');

  I.seeElement('#fav-resto');
  I.see('Empty favorite Resto. Put one, by clicking heart button in the detail page.', '.empty-favorite-text');
});

Scenario('liking one restaurant', async ({I}) => {
  I.waitForElement('#explore-restaurant .card');
  const firstRestaurant= locate('#explore-restaurant .card').first();
  const firstRestaurantName= await I.grabTextFrom(firstRestaurant.find('.card-content-title'));
  I.click(firstRestaurant.find('a'));
  I.waitForElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('#fav-resto .card');
  const favoriteRestoName= await I.grabTextFrom('.card-content-title');
  assert.strictEqual(firstRestaurantName, favoriteRestoName );
});

Scenario('Unliking restaurant that already liked', async ({I})=>{
  I.waitForElement('#explore-restaurant .card');
  I.click('#explore-restaurant .card a');
  I.waitForElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('#fav-resto .card');

  I.click('#fav-resto .card a');
  I.waitForElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.see('Empty favorite Resto. Put one, by clicking heart button in the detail page.', '.empty-favorite-text');
});
