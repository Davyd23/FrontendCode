/**
 * Created by user on 6/24/2016.
 */
hrApp.controller("MenuController",['$scope',function(scope){
    scope.demoActionList=[
        {
            label:"OtherScope",
            url:"views/childscope.html"
        }
    ];
}])