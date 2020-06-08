  import axios from 'axios';
  let url = 'http://127.0.0.1:8000/api/v1/advertisement/'

  // Add the following line:




  // console.log(context.rootState.instance.session);
  
  
  export const state = () => ({
      advertisements: []
    })
  
  
  export const getters = {
      allAdvertisements: state => state.advertisements
  };
  
  export const mutations = {
    setAdvertisements: (state, advertisements) => (state.advertisements = advertisements),
    newAdvertisement: (state, todo) => state.advertisements.unshift(todo),
    removeAdvertisement: (state, id) =>
      (state.advertisements = state.advertisements.filter(todo => todo.id !== id)),
    updateAdvertisement: (state, updAdvertisement) => {
      const index = state.advertisements.findIndex(todo => todo.id === updAdvertisement.id);
      if (index !== -1) {
        state.advertisements.splice(index, 1, updAdvertisement);
      }
    }
  }
  
  export const actions = {
    async nuxtServerInit ({ commit }) {
      delete this.$axios.defaults.headers.common['X-Requested-With']
      this.$axios.defaults.headers.common['Authorization'] =   localStorage.getItem('token')
      const response = await this.$axios.get(url)
      const data = response.data
      
      // const advertisements = data.map(({advertisement})=>advertisement)  
      console.log(data.success);
      
      commit('setAdvertisements', data.success)
    },
    async fetchAdvertisements({ commit }) {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
      );

      
  
      commit('setAdvertisements', response.data);
    },
    async addAdvertisement({ commit }, title) {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/todos',
        { title, completed: false }
      );
  
      commit('newAdvertisement', response.data);
    },
    async deleteAdvertisement({ commit }, id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  
      commit('removeAdvertisement', id);
    },
    async filterAdvertisements({ commit }, e) {
      // Get selected number
      const limit = parseInt(
        e.target.options[e.target.options.selectedIndex].innerText
      );
  
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
      );
  
      commit('setAdvertisements', response.data);
    },
    async updateAdvertisement({ commit }, updAdvertisement) {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${updAdvertisement.id}`,
        updAdvertisement
      );  
      commit('updateAdvertisement', response.data);
    },
    myAction: ({ commit, rootState }) => {
      console.log(rootState.B)
     }
  }