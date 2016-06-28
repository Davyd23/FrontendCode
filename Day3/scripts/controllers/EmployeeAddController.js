hrApp.controller('EmployeeAddController', ['$scope', '$http', '$routeParams', '$location', 'UserService' ,
    function($scope, $http, $routeParams, $location, UserService ) {
        $scope.visible=true;
        $scope.users=[];

        $scope.back=function(){
            $location.url('/home');
        }
        $scope.reset=function(){
            $scope.firstName=null;
            $scope.lastName=null;
            $scope.email=null;
            $scope.phoneNumber=null;
            $scope.hireDate=null;
            $scope.jobId=null;
            $scope.salary=null;
            $scope.commissionPct=null;
            $scope.departmentId=null;
            $scope.manager=null;
        }

        $scope.save=function(){
            $scope.users.push(UserService.add($scope.firstName,$scope.lastName,$scope.email,$scope.phoneNumber,
                $scope.hireDate,$scope.jobId,$scope.salary,$scope.commissionPct,$scope.departmentId,$scope.manager));
            alert("User: "+ $scope.users[$scope.users.length-1].firstName+" saved.");
        }
        
        $scope.show=function(){
            $scope.visible=!$scope.visible;
        }
    }]);