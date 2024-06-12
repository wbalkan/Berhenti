import axios from 'axios';
import * as Constants from '../util/constants';

export default function createFriendSlice(set, get) {
  return {
    relapses: [],
    // 'users/:id/relapses' route
    getRelapse: async (id) => {
      try {
        const response = await axios.get(`${Constants.ROOT_URL}/users/${id}/relapses${Constants.API_KEY}`);
        set(({ relapseSlice }) => { relapseSlice.relapses = response.data; }, false, 'relapses/getRelapses');
      } catch (error) {
        get().errorSlice.newError(error.message);
      }
    },
    getRelapseItem: async (id, relapseId) => {
      try {
        console.log(id, relapseId);
        const response = await axios.get(`${Constants.ROOT_URL}/users/${id}/relapses/${relapseId}`);
        console.log(response);
        return response.data;
      } catch (error) {
        console.log(error);
        get().errorSlice.newError(error.message);
        return null;
      }
    },
    createRelapse: async (id, relapse) => {
      try {
        await axios.post(`${Constants.ROOT_URL}/users/${id}/relapses${Constants.API_KEY}`, relapse);
      } catch (error) {
        get().errorSlice.newError(error.message);
      }
    },
  };
}
