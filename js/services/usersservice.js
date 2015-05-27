app.factory('userDetails', ['$http', function($http) {
    return {
      getUsers: function(success, error) {
        $http.get('https://api.github.com/search/users?q=andela-').success(success).error(error);
      },
      getRepos: function(userRepoUrl, success, error){
        $http.get(userRepoUrl).success(success).error(error);
      }
      /*create_user: function(data, success, error) {
        $http.post('js/learnapp.json', data).success(success).error(error);
      }*/
    }
  }]);