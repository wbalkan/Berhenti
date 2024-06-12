import axios from 'axios';
import * as Constants from '../util/constants';

export default function createFriendSlice(set, get) {
  return {
    milestones: [],
    // 'users/:id/milestones' route
    getMilestones: async (id) => {
      // GET
      try {
        const responses = await axios.get(`${Constants.ROOT_URL}/users/${id}/milestones${Constants.API_KEY}`);
        set(({ milestoneSlice }) => { milestoneSlice.milestones = responses.data; }, false, 'milestones/getMilestones');
      } catch (error) {
        get().errorSlice.newError(error.message);
      }
    },
    getMilestone: async (id, milestoneId) => {
      try {
        const response = await axios.get(`${Constants.ROOT_URL}/users/${id}/milestones/${milestoneId}`);
        return response.data;
      } catch (error) {
        get().errorSlice.newError(error.message);
        return null;
      }
    },
    createMilestone: async (id, milestone) => {
      // POST
      try {
        await axios.post(`${Constants.ROOT_URL}/users/${id}/milestones${Constants.API_KEY}`, milestone);
      } catch (error) {
        get().errorSlice.newError(error.message);
      }
    },
    // users/:id/milestones/:milestoneId routes
    updateMilestone: async (id, milestone) => {
      // PUT
      try {
        await axios.put(`${Constants.ROOT_URL}/users/${id}/milestones/${milestone.id}${Constants.API_KEY}`, milestone);
      } catch (error) {
        get().errorSlice.newError(error.message);
      }
    },
    deleteMilestone: async (id, milestoneId) => {
      // DELETE
      try {
        await axios.delete(`${Constants.ROOT_URL}/users/${id}/milestones/${milestoneId}${Constants.API_KEY}`);
      } catch (error) {
        get().errorSlice.newError(error.message);
      }
    },
  };
}
