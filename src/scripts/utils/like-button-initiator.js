/* eslint-disable max-len */
import FavoriteRestoIdb from '../data/resto-idb';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/template-creator';


const LikeButtonInitiator = {
  async init({likeButtonContainer, data}) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = data.restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    try {
      const {id} = this._restaurant;

      const restaurant = await FavoriteRestoIdb.getResto(id);

      if (restaurant) {
        this._renderLiked();
      } else {
        this._renderLike();
      }
    } catch (err) {
      console.error(err);
    }
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');

    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.putResto(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');

    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteResto(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
