import axios from 'axios';


const BASE_URL = 'http://localhost:8080/api/music';
const ApiService = {
  postUrl: async (param) => {
    try {
      const response = await axios.post(`${BASE_URL}/url`, { param });
      return response.data;
    } catch (error) {
      console.error('Erro ao recuperar os dados da url:', error);
      throw new Error('Erro ao recuperar os dados da url');
    }
  },

  getAlbumIds: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/albuns`);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter IDs dos álbuns:', error);
      throw new Error('Erro ao obter IDs dos álbuns');
    }
  },

  getPhotosByAlbumId: async (albumId) => {
    try {
      const response = await axios.get(`${BASE_URL}/album/${albumId}`);
      return response.data;
    } catch (e) {
      console.error('Erro ao obter fotos por ID do álbum:', e);
    }
  },
};

export default ApiService;
