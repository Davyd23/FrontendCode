hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactoryBackup',
    'ManagersService', 'JobsService','DepartmentsService','EmployeeService',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactoryBackup,ManagersService,
              JobsService, DepartmentsService,EmployeeService) {
        EmployeeService.findById($routeParams.employeeId)
            .then(function(res){
                $scope.employee=res.data;
            },function(err){
            $scope.employee=err.data;
        });


        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR5
        ManagersService.findAll()
            .then(function(res){
                $scope.managers=res.data;
            },function(err){
            $scope.managers=[];
            console.log("error at managers");
        });
        JobsService.findAll()
            .then(function(res){
                $scope.jobs=res.data;
            },function(err){
            $scope.jobs=[];
            console.log("error at jobs");
        })


        DepartmentsService.findAll()
            .then(function(res){
                $scope.departments=res.data;
            },function(err){
            $scope.departments=[];
            console.log("error at departments");
        })
        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactoryBackup.editEmployeeUrl, method: 'PUT', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.delete=function(){
            EmployeeService.deleteById($routeParams.employeeId);
        }

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);