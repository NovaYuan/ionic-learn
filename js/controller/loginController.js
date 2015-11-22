app.controller('loginCtrl', function($scope, $state){
        $scope.defined = {
                username: "test",
                password: "test123"
        };
        $scope.user = {
                username: "",
                password: '',
                portrait: "##"
        };

        $scope.submit = function(){
                if($scope.user.username != $scope.defined.username || $scope.user.password != $scope.defined.password){
                        return false;
                }else{
                        $state.go("/",{}, {reload: true});
                }
        }
});