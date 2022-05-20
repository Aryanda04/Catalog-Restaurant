/* eslint-disable max-len */
import {itActsFavoriteRestaurantModel} from './contract/favoriteRestaurantContract';
import FavoriteRestoIdb from '../src/scripts/data/resto-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoIdb.getAllResto()).forEach(async (resto) => {
      await FavoriteRestoIdb.deleteResto(resto.id);
    });
  });
  itActsFavoriteRestaurantModel(FavoriteRestoIdb);
});
