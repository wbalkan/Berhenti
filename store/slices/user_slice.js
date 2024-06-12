import axios from 'axios';
import * as Constants from '../util/constants';

export default function createUserSlice(set, get) {
  return {
    user: {},
    searchResults: [],
    // reset utility functions
    resetUser: () => {
      set(({ userSlice }) => { userSlice.user = {}; }, false, 'users/resetUser');
    },

    // 'users' route
    createUser: async (user) => {
      // POST
      try {
        const response = await axios.post(`${Constants.ROOT_URL}/users/`, user, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        set(({ userSlice }) => { userSlice.user = response.data; }, false, 'users/createUser');
        return response.data;
      } catch (error) {
        get().errorSlice.newError(error.message);
      }
    },

    // '/login' route
    login: async (username, password) => {
      // POST
      try {
        const response = await axios.post(`${Constants.ROOT_URL}/login`, { username, password }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.data) {
          set((state) => { state.userSlice.user = response.data; }, false, 'users/login');
          return response.data;
        }
        return {};
      } catch (error) {
        get().errorSlice.newError(error.message);
        return {};
      }
    },

    // 'users/?q=***' route
    searchUser: async (query) => {
      // GET
      try {
        const response = await axios.get(`${Constants.ROOT_URL}/users/?q=${query}`);
        set(({ userSlice }) => { userSlice.searchResults = response.data; }, false, 'users/searchUser');
        return response.data;
      } catch (error) {
        get().errorSlice.newError(error.message);
        return error;
      }
    },

    // 'users/:id' route

    getUser: async (id) => {
      // GET
      try {
        const response = await axios.get(`${Constants.ROOT_URL}/users/${id}`);
        set(({ userSlice }) => { userSlice.user = response.data[0]; }, false, 'users/getUser');
      } catch (error) {
        get().errorSlice.newError(error.message);
      }
    },

    getFriend: async (friendId) => {
      // GET
      try {
        const response = await axios.get(`${Constants.ROOT_URL}/users/${friendId}`);
        return response.data[0];
      } catch (error) {
        get().errorSlice.newError(error.message);
        return {};
      }
    },
  };
}
