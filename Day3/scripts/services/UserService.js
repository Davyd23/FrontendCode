hrApp.service("UserService",function(){
   return{
       add: function(firstName,lastName,email,phoneNumber,hireDate,jobId,salary,commissionPct,departmentId,manager){
           return {firstName: firstName,
                   lastName: lastName,
                   email: email,
                   phoneNumber: phoneNumber,
                   hireDate: hireDate,
                   jobId: jobId,
                   salary: salary,
                   commissionPct: commissionPct,
                   departmentId: departmentId,
                   manager: manager
                   }
       }
   } 
});
