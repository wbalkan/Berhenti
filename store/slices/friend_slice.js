import axios from 'axios';
import * as Constants from '../util/constants';

export default function createFriendSlice(set, get) {
  return {
    friends: [],
    // reset utility functions
    resetFriends: () => {
      set(({ friendSlice }) => { friendSlice.friends = []; }, false, 'friends/resetFriends');
    },
    // 'users/:id/friends' route
    getFriends: async (id) => {
      // GET
      try {
        const responses = await axios.get(`${Constants.ROOT_URL}/users/${id}/friends/`);
        set(({ friendSlice }) => { friendSlice.friends = responses.data; }, false, 'friends/getFriends');
      } catch (error) {
        get().errorSlice.newError(error.message);
      }
    },
    getFriend: async (userId, friendId) => {
      // GET
      try {
        const response = await axios.get(`${Constants.ROOT_URL}/users/${userId}/friends/${friendId}`);
        return response.data;
      } catch (error) {
        get().errorSlice.newError(error.message);
        return null;
      }
    },
    // 'users/:id/friends/:friendId' route
    addFriend: async (id, friendId) => {
      // PATCH
      try {
        await axios.patch(`${Constants.ROOT_URL}/users/${id}/friends/${friendId}${Constants.API_KEY}`);
      } catch (error) {
        get().errorSlice.newError(error.message);
      }
    },
    removeFriend: async (id, friendId) => {
      // DELETE
      try {
        await axios.delete(`${Constants.ROOT_URL}/users/${id}/friends/${friendId}${Constants.API_KEY}`);
      } catch (error) {
        get().errorSlice.newError(error.message);
      }
    },
  };
}
