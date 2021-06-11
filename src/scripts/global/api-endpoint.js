import CONFIG from './config';

const API_ENDPOINT = {
  list: `${CONFIG.BASE_URL}/list`,
  detail: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
};

export default API_ENDPOINT;
