import axios from 'axios';
import * as Constants from '../util/constants';

export default function createFeedSlice(set, get) {
  return {
    feed: [],
    // 'users/:id/feed' route
    getFeed: async (id) => {
      try {
        const response = await axios.get(`${Constants.ROOT_URL}/users/${id}/feed`);
        set(({ feedSlice }) => { feedSlice.feed = response.data; }, false, 'feed/getFeed');
      } catch (error) {
        get().errorSlice.newError(error.message);
      }
    },
  };
}
