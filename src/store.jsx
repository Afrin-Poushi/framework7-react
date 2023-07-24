// First import createStore function from Framework7 core
import { createStore } from "framework7/lite";

// create store
const store = createStore({
  // start with the state (store data)
  state: {
    users: [],
    isloading: true,
    profileData: [],
  },

  // actions to operate with state and for async manipulations
  actions: {
    // context object containing store state will be passed as an argument
    async getUsers({ state }) {
      // fetch users from API
      store.dispatch("setLoading", true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      const users = data.users;
      console.log("inside store users:", users);

      //update the state
      state.users.push(...users);
      
    },
    setLoading({ state }, isLoading) {
      state.isLoading = isLoading;
    },

    async getProfile({ state }, userId) {
      // fetch userid details from API
      const response = await fetch(`https://dummyjson.com/users/${userId}`);
      const data = await response.json();
      console.log(`profile detailes: ${userId}`, data);

      // update the state
      state.profileData.push(data);
    },
  },

  // getters to retrieve the state
  getters: {
    // context object containing store state will be passed as an argument
    users({ state }) {
      return state.users;
    },

    setLoading({ state }) {
      return state.isLoading;
    },

    profileData({ state }) {
      return state.profileData;
    },
  },
});

// export store
export default store;
