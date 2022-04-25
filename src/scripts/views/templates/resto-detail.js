/* eslint-disable max-len */
/* eslint-disable indent */
import CONFIG from '../../global/config';

const restoDetail = (resto) => `
  <div class="detail">
    <div class="img-container">
        <img class="detail-img" alt="${resto.name}" src="${
  CONFIG.BASE_IMAGE_URL + resto.pictureId
}"/>
    </div>

    <ul class="detail-info">
      <li>
        <p class="detail-name-address-rating">${resto.name}</p>
        </li>

      <li>
        <p class="detail-name-address-rating">Location : ${resto.address}, ${
  resto.city
}</p>
        </li>

      <li>
      <p class="detail-rating">
        <i title="ratings" class="fa fa-star"></i>
          <span>${resto.rating}</span></p>
      </li>

      <li><p class="detail-desc">${resto.description}</p></li>

      <li>${resto.categories
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

    <div class="detail-menu">
        
        <details class="detail-food">
  <summary>Food</summary>
  <ul>
          ${resto.menus.foods
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
                ${resto.menus.drinks
                  .map(
                    (drink, i) => `
                      <li><p>${i + 1}. ${drink.name}</p></li>
                    `,
                  )
                  .join('')}
              <ul>
      </details>

      </div>
      

    <h3 class="title-review">Reviews</h3>

    <div class="detail-review">
    ${resto.customerReviews
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
  </div>
`;

export default restoDetail;
