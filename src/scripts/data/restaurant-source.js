import API_ENDPOINT from '../global/api-endpoint';

class RestaurantSource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.list);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.detail(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestaurantSource;
