
hrApp.controller("FormsController", function($scope){
    $scope.submit=function(){
        if($scope.myForm.input.$valid){
            alert("Sent");
        }
    }
});