
app.factory('usersFactory', ['$http', function($http) {
  var usersFactory = function(){
    this.login = function(data,callback,errback){
      $http.post('/login',data).then(callback,errback);
    }
    this.index = function(callback){
      $http.get('/users').then(callback);
    }
    this.register = function(data,callback,errback){
      $http.post('/register',data).then(callback,errback);
    }
    this.getAppointments = function(callback){
      $http.get('/appointments').then(callback);
    }
    this.create = function (appt) {
      // console.log(appt);
      $http.post('/create', appt).then();
    }
    this.deleteAppt = function (id,callback) {
      $http.delete('/appointment/'+id).then(callback)

    }
  }
  return new usersFactory;
}]);
