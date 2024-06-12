import axios from 'axios';
import * as Constants from '../util/constants';

export default function createTriggerSlice(set, get) {
  return {
    triggers: [],
    // 'users/:id/triggers' route
    getTriggers: async (id) => {
      try {
        const response = await axios.get(`${Constants.ROOT_URL}/users/${id}/triggers${Constants.API_KEY}`);
        set(({ triggerSlice }) => { triggerSlice.triggers = response.data; }, false, 'triggers/getTriggers');
      } catch (error) {
        get().errorSlice.newError(error.message);
      }
    },
    getTrigger: async (id, triggerId) => {
      try {
        const response = await axios.get(`${Constants.ROOT_URL}/users/${id}/triggers/${triggerId}`);
        return response.data;
      } catch (error) {
        get().errorSlice.newError(error.message);
        return null;
      }
    },
    createTrigger: async (id, trigger) => {
      try {
        await axios.post(`${Constants.ROOT_URL}/users/${id}/triggers${Constants.API_KEY}`, trigger);
      } catch (error) {
        get().errorSlice.newError(error.message);
      }
    },
  };
}
