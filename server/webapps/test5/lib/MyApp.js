var myapp=angular.module("myapp", []);

myapp.controller('myctrl', function($scope,$http){
   $http.post('xx1.html').success(function (data) {
            $scope.welcome = data;
            }).
            error(function (data, status) {
                $scope.welcome = "Request failed";
            });
})