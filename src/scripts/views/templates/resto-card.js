/* eslint-disable max-len */
import CONFIG from '../../global/config';

const restoCard = (resto) => `
    <div tabindex="0" class="card">
      <a href="#/resto/${resto.id}" class="card-a-tag">
        <div class="img-container">
          <img tabindex="0" class="card-image" alt="${resto.name}" src="${
  CONFIG.BASE_IMAGE_URL + resto.pictureId
}"/>
          <span tabindex="0" class="card-rating">
            <span>${resto.city}</span>
          </span>
        </div>

        <div tabindex="0" class="card-content">
        <p class="card-content-rating">
        <i title="ratings" class="fa fa-star"></i>
          <span>${resto.rating}</span></p>
          <h1 class="card-content-title">${resto.name}</h1>
          <p class="truncate">${resto.description}</p>
        </div>
      </a>
    </div>
  `;

export default restoCard;
