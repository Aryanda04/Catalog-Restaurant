/* eslint-disable new-cap */
/* eslint-disable max-len */

Feature('See Review Restaurant');

Before(({I}) => {
  I.amOnPage('/#');
});

Scenario('see first restaurant review', ({I}) => {
  I.waitForElement('#explore-restaurant .card');
  const firstRestaurant= locate('#explore-restaurant .card').first();
  I.click(firstRestaurant.find('a'));
  I.waitForElement('.detail-review');
  I.seeElement(locate('.detail-review-item .review-header .review-name').first());
  I.seeElement(locate('.detail-review-item .review-body').first());
});


