import {create} from 'apisauce';

const apiClient = create({
  baseURL: 'https://support-troops.herokuapp.com/api',
  headers: {'content-type': 'application/json'},
});

export default apiClient;
