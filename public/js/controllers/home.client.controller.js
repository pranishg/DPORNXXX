app.controller('HomeController', ['$scope','$http','toastr','User', 'Video', function($scope, $http, toastr, User, Video) {
  
  $scope.listVideos =  function(){
    Video.retrieveAll().then(function(response){
       //$scope.allVideos = response.data;
       //console.log(response.data);
      $scope.allVideos = {
        title: 'A Sample Video Title',
        public_id: 'v1516980526',
        url: 'http://res.cloudinary.com/sudguru/video/upload/v1516980526/003_-_Encapsulation_po3r59.mp4',
        description: 'A sample test video'
      }
    });
  };

  $scope.listVideos();
}]);
