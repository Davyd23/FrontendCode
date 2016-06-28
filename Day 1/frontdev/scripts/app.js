var employeesList=[
    {
        firstName:'John',
        lastName:'King',
        phone:'123456789',
        salary:4500
    },
    {
        firstName:'Steven',
        lastName:'Gerard',
        phone:'123456789',
        salary:4500
    },
    {
        firstName:'Diana',
        lastName:'Ross',
        phone:'123456789',
        salary:4500
    },
    {
        firstName:'Mike',
        lastName:'Bob',
        phone:'123456789',
        salary:4500
    },
    {
        firstName:'Emily',
        lastName:'Hudson',
        phone:'123456789',
        salary:4500
    }
];

function showList(){
    var myTable='<table border="1" class="table"><tr><th>First Name</th>' +
        '<th>Last Name</th><th>Phone</th><th>Salary</th></tr>';

    for(var i in employeesList){
        myTable+='<tr><td>'+employeesList[i].firstName+'</td><td>'+employeesList[i].lastName+'</td><td>'+
            employeesList[i].phone+'</td><td>'+employeesList[i].salary+'</td>'+
            '<td><button onclick=vizualizare('+i+')>Vizualizare</button></td>'+
            '<td><button onclick=stergere('+i+')>Sterge</button></td></tr>';
    }
    myTable+='<tr><td>'+mostGivenNames()+'</td><td>'+differentLastNames()+'</td></tr>';
    myTable+='</table>';

    var container=document.getElementById('listcontainer');
    container.innerHTML=myTable;
}

var Employee=function(firstName,lastName,phone,salary){
    this.firstName=firstName;
    this.lastName=lastName;
    this.phone=phone;
    this.salary=salary;
}

function addEmployee(){
    var firstName=document.getElementById("firstName").value;
    var lastName=document.getElementById("lastName").value;
    var phone=document.getElementById("phone").value;
    var salary=document.getElementById("salary").value;
    employeesList.push(new Employee(firstName,lastName,phone,salary));
    showList();
}

function calculateSalary(){
    var totalSalary=0;
    for(var i in employeesList){
        totalSalary+=employeesList[i].salary;
    }
    
    document.getElementById("salaryTotal").innerHTML="Total salary is: "+totalSalary;
}

function deleteEmployee(){
    employeesList.pop();
    showList();
}

function vizualizare(index){
    var myString="";
    for(var i in employeesList[index]){
        myString+=i+":"+employeesList[index][i]+"   ";
    }
    alert(myString);
}

function stergere(index){
    employeesList.splice(index,1);
    showList();
}

function mostGivenNames(){
    var freq={};
    for(var i in employeesList) {
        if (freq.hasOwnProperty(employeesList[i].firstName))
            freq[employeesList[i].firstName]++;
        else
            freq[employeesList[i].firstName] = 1;
    }
    var max=0;
    var value="";
    
    for(var i in freq){
        if(freq[i]>max){
            max=freq[i];
            value=i;
        }
    }
    return value;
}

function differentLastNames(){
    var freq={};
    for(var i in employeesList) {
        if (!freq.hasOwnProperty(employeesList[i].firstName))
            freq[employeesList[i].firstName] = 1;
    }
    var contor=0;
    for(var i in freq){
        contor++;
    }
    return contor;
}

