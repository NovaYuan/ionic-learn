app.controller('listCtrl', ['$scope','$timeout','$http',function($scope, $state, $http) {
        $scope.items = [
                {"name": "test1"},
                {"name": "test2"},
                {"name": "test3"}
        ];

        $scope.doRefresh = function(){
                $http.get('data/items.json')
                        .success(function(data){
                                $scope.items = data;
                        })
                        .finally(function(){
                                $scope.$broadcast('scroll.refreshComplete');
                        })
        }
}]);