hrApp.controller("JobAddController",["$scope",'$http','CommonResourcesFactoryBackup',function($scope,$http,CommonResourcesFactoryBackup){
    $scope.job={};
    $scope.reset = function () {
        this.job= {};
    };

    $scope.create = function (addJob) {
        $http({url: CommonResourcesFactoryBackup.addJobUrl, method: 'POST', data: addJob})
            .success(function (data) {
                $scope.job = data;
                $location.url('/jobView/' + $scope.job.jobId);
            });
    };
}])