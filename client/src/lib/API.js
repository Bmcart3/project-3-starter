import axios from 'axios';

export default {
  Users: {
    login: function (email, password) {
      return axios.post('/api/users/login', { email, password });
    },

    create: function (firstName, lastName, username, email, password) {
      return axios.post('/api/users/', { firstName, lastName, username, email, password });
    },

    getMe: function (authToken) {
      return axios.get('/api/users/', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    }
  },

  Recipes: {
    all: function() {
      return axios.get('/api/recipes/all', {})
    },

    create: function(authToken, title, image, description, prepTime, cookTime, servings, directions, categories, ingredients) {
      return axios.post('api/recipes/', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        },
        body: {
          title, image, description, prepTime, cookTime, servings, directions, categories, ingredients
        }
      }).catch(err => console.log(err));
    }
  }
}
