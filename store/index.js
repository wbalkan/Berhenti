import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createUserSlice from './slices/user_slice';
import createPokeSlice from './slices/poke_slice';
import createFriendSlice from './slices/friend_slice';
import createTriggerSlice from './slices/trigger_slice';
import createRelapseSlice from './slices/relapse_slice';
import createMilestoneSlice from './slices/milestone_slice';
import createErrorSlice from './slices/error_slice';
import createFeedSlice from './slices/feed_slice';

const useStore = create(
  devtools(
    immer(
      persist(
        (set, get) => ({
          userSlice: createUserSlice(set, get),
          pokeSlice: createPokeSlice(set, get),
          friendSlice: createFriendSlice(set, get),
          triggerSlice: createTriggerSlice(set, get),
          relapseSlice: createRelapseSlice(set, get),
          milestoneSlice: createMilestoneSlice(set, get),
          feedSlice: createFeedSlice(set, get),
          errorSlice: createErrorSlice(set, get),
        }),
        {
          // persist the user to local storage
          partialize: (store) => ({
            userSlice: { user: store.userSlice.user },
          }),
          merge: (persistedState, currentState) => ({ ...currentState, ...persistedState.user }),
          name: 'berhenti-storage',
          storage: createJSONStorage(() => AsyncStorage),
        },
      ),
    ),
  ),
);

export default useStore;
