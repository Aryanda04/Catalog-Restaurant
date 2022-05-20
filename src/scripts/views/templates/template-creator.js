/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import CONFIG from '../../global/config';

const createRestoItemTemplate = (data) => `
    <div tabindex="0" class="card">
      <a href="#/resto/${data.id}" class="card-a-tag">
        <div class="img-container">
          <img tabindex="0" class="card-image" alt="${data.name}" src="${
  CONFIG.BASE_IMAGE_URL + data.pictureId
}"/>
          <span tabindex="0" class="card-rating">
            <span>${data.city}</span>
          </span>
        </div>

        <div tabindex="0" class="card-content">
        <p class="card-content-rating">
        <i title="ratings" class="fa fa-star"></i>
          <span>${data.rating}</span></p>
          <h1 class="card-content-title">${data.name}</h1>
          <p class="truncate">${data.description}</p>
        </div>
      </a>
    </div>
  `;
const createRestoDetailTemplate = (data) => `
  <div class="detail">
  <div class="like" id="likeButtonContainer"></div>

    <div class="img-container">
        <img class="detail-img" alt="${data.name}" src="${
  CONFIG.BASE_IMAGE_URL + data.pictureId
}"/>
    </div>

    <ul class="detail-info">
      <li>
        <p class="detail-name-address-rating">${data.name}</p>
        </li>

      <li>
        <p class="detail-name-address-rating">Location : ${data.address}, ${
  data.city
}</p>
        </li>

      <li>
      <p class="detail-rating">
        <i title="ratings" class="fa fa-star"></i>
          <span>${data.rating}</span></p>
      </li>

      <li><p class="detail-desc">${data.description}</p></li>

      <li>${data.categories
      .map(
          (category) => `
            <span class="category">${category.name}</span>
          `,
      )
      .join('')}
      </li>
    </ul>
    </div>
    <h3>Menu</h3>
${createRestoMenu(data)}

      
    <h3 class="title-review">Reviews</h3>
    ${createReview(data)}


     ${createFormReview()}


  </div>
`;

const createRestoMenu = (data) => `
<div class="detail-menu">
        
<details class="detail-food">
<summary>Food</summary>
<ul>
  ${data.menus.foods
      .map(
          (food, i) => `
        <li><p>${i + 1}. ${food.name}</p></li>
      `,
      )
      .join('')}
<ul>
</details>


<details class="detail-drink">
<summary>Drink</summary>
<ul>
        ${data.menus.drinks
      .map(
          (drink, i) => `
              <li><p>${i + 1}. ${drink.name}</p></li>
            `,
      )
      .join('')}
      <ul>
</details>

</div>
`;

const createReview = (data) => `
<div class="detail-review">
${data.customerReviews
      .map(
          (review) => `
      <div class="detail-review-item">
        <div class="review-header">
          <p class="review-name">${review.name}</p>

          <p class="review-date">${review.date}</p>
        </div>

        <div class="review-body">
          ${review.review}
        </div>
      </div>
    `,
      )
      .join('')}
</div>
`;

const createFormReview = () => `
<section class="form-review">
<form autocomplete="on">
<div class="mb-3">
<label for="name-input" class="form-label">Name</label>
<input type="text" class="form-control" id="name-input" minlength="3" placeholder="Your name..." required>
</div>

<div class="mb-3">
<label for="review-input" class="form-label">Review</label>
<input type="text" class="form-control" id="review-input" minlength="3" placeholder="Your review..." required>
    </div>

    <button id="submit-review" type="submit" class="submit-btn">Submit Review</button>
  </form>
</section>
`;

const createLoader = () => `
<div class="loader"></div>
`;

const createLikeButtonTemplate = () =>`
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;


const createUnlikeButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {createRestoItemTemplate, createRestoMenu, createReview, createFormReview, createRestoDetailTemplate, createLikeButtonTemplate, createUnlikeButtonTemplate, createLoader};
