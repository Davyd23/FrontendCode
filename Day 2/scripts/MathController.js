/**
 * Created by David on 6/28/2016.
 */
hrApp.controller("MathController",function($scope){
    $scope.op1=0;
    $scope.op2=0;
    $scope.op3=0;
    $scope.op4=0;
    $scope.calculate=function(){
        $scope.op1=$scope.firstValue+$scope.secondValue;
        $scope.op2=$scope.firstValue-$scope.secondValue;
        $scope.op3=$scope.firstValue*$scope.secondValue;
        $scope.op4=$scope.firstValue/$scope.secondValue;
    }

});