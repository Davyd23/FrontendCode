hrApp.service('ManagersService',['$http','CommonResourcesFactoryBackup',function($http,CommonResourcesFactoryBackup){
    return {
        findAll : function(){
            return $http.get(CommonResourcesFactoryBackup.findAllEmployeesUrl)
                .success(function(data, status, headers, config) {
                    return data;
                })
                .error (function(data, status, headers, config){
                    alert("Error: " + status);
                    return ;
                });
        }
    }
}]);
