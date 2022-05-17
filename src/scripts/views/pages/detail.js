/* eslint-disable new-cap */
/* eslint-disable max-len */
import UrlParser from '../../routes/url-parser';
import Spinner from '../templates/spinner';
import RestaurantSource from '../../data/resto-source';
import {createRestoDetailTemplate} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import PostReview from '../../utils/post-review';
import {sendDataToWebsocket} from '../../utils/websocket-initiator';

const Detail = {
  async render() {
    return `
      <div class="container">
        <div id="loading"></div>
        <div id="main-container"> 
          <section id="detail-resto"></section>
    `;
  },


  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    const loading = document.querySelector('#loading');
    const mainContainer = document.querySelector('#main-container');
    const detailContainer = document.querySelector('#detail-resto');
    mainContainer.style.display = 'none';
    loading.innerHTML = Spinner();

    try {
      const data = await RestaurantSource.getRestaurantDetail(url.id);

      // console.info(data);
      detailContainer.innerHTML += createRestoDetailTemplate(data.restaurant);
      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        data,
      });

      mainContainer.style.display = 'block';
      loading.style.display = 'none';

      const btnSubmitReview = document.querySelector('#submit-review');
      const nameInput = document.querySelector('#name-input');
      const reviewInput = document.querySelector('#review-input');

      btnSubmitReview.addEventListener('click', async (e) => {
        e.preventDefault();

        await PostReview(url, nameInput.value, reviewInput.value);

        sendDataToWebsocket({
          name: nameInput.value,
          review: reviewInput.value,
        });

        nameInput.value = '';
        reviewInput.value = '';
      });
    } catch (err) {
      console.error(err);

      mainContainer.style.display = 'block';
      loading.style.display = 'none';
      detailContainer.innerHTML = `Error: ${err.message}`;
    }
  },
};

export default Detail;
