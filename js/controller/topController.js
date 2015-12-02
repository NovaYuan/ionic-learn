app.controller('topCtrl', function($scope, $state) {
        $scope.showSideBar = function () {
                $(".sidebar").toggle();

                $(".header").toggleClass("leftHalf");
                $(".content").toggleClass("leftHalf");
                $(".footer").toggleClass("leftHalf");
        }
});