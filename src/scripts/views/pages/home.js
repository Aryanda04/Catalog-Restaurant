/* eslint-disable max-len */
/* eslint-disable new-cap */
import RestaurantSource from '../../data/resto-source';
import {createRestoItemTemplate, createLoader} from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="container">
        <div id="loading"></div>

        <div id="main-container">
          <h1 tabindex="0" class="main-content__title">Explore Restaurant</h1>

          <section id="explore-restaurant"></section>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const loading = document.querySelector('#loading');
    const mainContainer = document.querySelector('#main-container');
    const listContainer = document.querySelector('#explore-restaurant');

    mainContainer.style.display = 'none';
    loading.innerHTML = createLoader();

    try {
      const data = await RestaurantSource.getRestaurantList();

      data.restaurants.forEach((restaurant) => {
        listContainer.innerHTML += createRestoItemTemplate(restaurant);
      });

      loading.style.display = 'none';
      mainContainer.style.display = 'block';
    } catch (err) {
      console.error(err);

      mainContainer.style.display = 'block';
      loading.style.display = 'none';
      listContainer.innerHTML = `Error: ${err.message}`;
    }
  },
};

export default Home;
