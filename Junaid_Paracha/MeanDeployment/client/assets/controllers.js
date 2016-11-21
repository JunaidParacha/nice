
app.controller('loginController', ['$scope', '$cookies', 'usersFactory', '$location', function($scope, $cookies, usersFactory, $location){

  $scope.register = function(){
    usersFactory.register($scope.registration, function(data){
      if (data.data.errors){
        $scope.errors = data.data.errors;
      }else{
        $scope.user = data.data;
        console.log('Users is loged in', $scope.user);
        $cookies.put('name',$scope.user.name);
        $location.url('/main');
      }
    }, function(err){
      console.log("I am an error",err);
    })
  }
  $scope.login = function(){
    usersFactory.login(
      $scope.userLogin,
      function(data){
        if (data.data.errors){
          $scope.errors = data.data.errors;
        }else{
          $scope.user = data.data;
          console.log('Users is loged in', $scope.user);
          $cookies.put('name',$scope.user.name);
          $location.url('/main');
        }
      },
      function(err){
        console.log("I am an error",err);
      });
  }
}]);
app.controller('mainController', ['$scope', '$cookies', 'usersFactory', '$location', function($scope, $cookies, usersFactory, $location){
  $scope.loggedInUser = $cookies.get('name');
  usersFactory.getAppointments(function (data) {
    // console.log(data.data);
    $scope.appointments = data.data;
  })
  $scope.create = function () {
    $scope.appt.name = $cookies.get('name');
    console.log($scope.appt);
    usersFactory.create($scope.appt);
    $location.url('/main')
  }
  $scope.deleteAppt = function (id) {
    // console.log(id);
    var data
    console.log(data);
    usersFactory.deleteAppt(id, function (data) {
      var data = data
      console.log(data);
      $scope.appointments = data.data

    })

  }
}]);
