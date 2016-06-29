hrApp.controller("ColorsController",["$scope",function($scope){
    $scope.colors=[
        {
            "text" : "muted",
            "class" : "text-muted",
            "type" : "strong"
        },
        {
            "text" : "primary",
            "class": "text-primary",
              "type" : "strong"
        },
        {
            "text" : "success",
            "class": "text-success",
            "type" : "strong"
        },
        {
            "text" : "info",
            "class": "text-info",
            "type" : "boring"
        },
        {
            "text" : "warning",
            "class": "text-warning",
            "type" : "boring"
        },
        {
            "text" : "danger",
            "class": "text-danger",
            "type" : "boring"
        }
    ];
    $scope.changeColor=function(){
        $scope.savedColor=$scope.selected;
        $scope.seletectedClass=$scope.savedColor.class;
    }

    $scope.dateFilter=new Date();
    $scope.val = 0;

    $scope.sizeFilter=function(){

    }



}]);
hrApp.filter('size',function(){
    return function(items, val){
        var filtered=[];
        angular.forEach(items, function(item){
            console.log(item);
            if(item.text.length >= val){
                console.log('Gigel');
                filtered.push(item);
            }
        })
        return filtered;
    }
});