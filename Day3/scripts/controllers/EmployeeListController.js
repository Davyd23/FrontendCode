hrApp.controller('EmployeeListController', ['$scope', '$http', '$location','commonResourcesFactoryBackup',
    function ($scope, $http, $location,commonResourcesFactoryBackup) {
// TODO #HR2 - inject commonResourcesFactory

        $scope.employees = []; // Employee list
        $http.get(commonResourcesFactoryBackup.findAllEmployeesUrl)
            .success(function(data, status, headers, config) {
                $scope.employees = data;
            })
            .error (function(data, status, headers, config){
                alert("Error: " + status);
            });


        //TODO #HR3 Load employee list from server using commonResourcesFactory



        $scope.viewEmployee = function (employeeId) {
            $location.url('/employeeview/' + employeeId);
        };


    }]);