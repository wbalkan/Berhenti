import axios from 'axios';
import * as Constants from '../util/constants';

export default function createPokeSlice(set, get) {
  return {
    pokes: [],
    // 'users/:id/pokes' route
    getPokes: async (id) => {
      // GET
      try {
        const responses = await axios.get(`${Constants.ROOT_URL}/users/${id}/pokes`);
        set(({ pokeSlice }) => { pokeSlice.pokes = responses.data; }, false, 'pokes/getPokes');
      } catch (error) {
        get().errorSlice.newError(error.message);
      }
    },
    readPoke: async (id, poke) => {
      // PUT
      // destination user id is in the poke object
      try {
        await axios.put(`${Constants.ROOT_URL}/users/${id}/pokes/${poke._id}`, poke, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      } catch (error) {
        get().errorSlice.newError(error.message);
      }
    },
    sendPoke: async (id, poke) => {
      // POST
      // destination user id is in the poke object
      try {
        await axios.post(`${Constants.ROOT_URL}/users/${id}/pokes`, poke, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      } catch (error) {
        get().errorSlice.newError(error.message);
      }
    },
  };
}
