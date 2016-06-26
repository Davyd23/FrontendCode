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
    myTable+='<tr><td>'+mostGivenNames()+'</td><td>'+differentLastNames()+'</td><td>'+mostCommonPhoneDigist()+'</td>'+
        '<td>'+averageSalary()+'</td></tr>';
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

function mostCommonPhoneDigist(){
    var freq={};
    for(var i=0;i<10;i++){
        freq[i]=0;
    }

    for(var emp in employeesList){
        for(var digit in employeesList[emp].phone){
            freq[employeesList[emp].phone[digit]]++;
        }
    }
    
    var common="";
    
    for(var i=0;i<5;i++){
        var index=0; //assume 0 is most common
        var value=freq[0];
        
        for(var k=1;k<10;k++){
            if(value<freq[k]){
                value=freq[k];
                index=k;
            }
        }
        
        common+=index;
        freq[index]=0; // so it wont appear again as biggest freq
        
        if(i!=4){ //no ',' after last digit
            common+=",";
        }
    }
    return common;
}

function averageSalary(){
    var sum=0;
    for(var i in employeesList){
        sum+=Number(employeesList[i].salary);
    }
    return (sum/employeesList.length).toFixed(2);
}

function sortSelection(){
    
    var nr=Number(document.getElementById("sort").value);
    
    switch(nr){
        case 1:sortByGivenName();break;
        case 2:sortByFamilyName();break;
        case 3:sortByPhoneNumber();break;
        case 4:sortBySalary();break;
    }
    /*var typeOfSort;

    switch(nr){
        case 1:typeOfSort="firstName";break;
        case 2:typeOfSort="lastName";break;
        case 3:typeOfSort="phone";break;
        case 4:typeOfSort="salary";break;
    }
    var names=[];
    
    for(var i in employeesList){
        names.push(employeesList[i].typeOfSort);
    }

    names.sort();

    for(var j in names){
        for(var i=j;i<employeesList.length;i++){  // se presupune nesortat dupa pozitia j

            if(names[j]===employeesList[i].typeOfSort){
                var aux=employeesList[i];
                employeesList[i]=employeesList[j];
                employeesList[j]=aux;
                break;
            }
        }

    }

    showList();*/
}

function sortByGivenName(){ // modifies employeesList order
    var names=[];

    for(var i in employeesList){
        names.push(employeesList[i].firstName);
    }

    names.sort();

    for(var j in names){
        for(var i=j;i<employeesList.length;i++){  // se presupune nesortat dupa pozitia j

            if(names[j]===employeesList[i].firstName){
                var aux=employeesList[i];
                employeesList[i]=employeesList[j];
                employeesList[j]=aux;
                break;
            }
        }

    }

    showList();
}

function sortByFamilyName(){ // modifies employeesList order
    var names=[];

    for(var i in employeesList){
        names.push(employeesList[i].lastName);
    }

    names.sort();

    for(var j in names){
        for(var i=j;i<employeesList.length;i++){  // se presupune nesortat dupa pozitia j

            if(names[j]===employeesList[i].lastName){
                var aux=employeesList[i];
                employeesList[i]=employeesList[j];
                employeesList[j]=aux;
                break;
            }
        }

    }

    showList();
}

function sortByPhoneNumber(){ // modifies employeesList order
    var names=[];

    for(var i in employeesList){
        names.push(employeesList[i].phone);
    }

    names.sort();

    for(var j in names){
        for(var i=j;i<employeesList.length;i++){  // se presupune nesortat dupa pozitia j

            if(names[j]===employeesList[i].phone){
                var aux=employeesList[i];
                employeesList[i]=employeesList[j];
                employeesList[j]=aux;
                break;
            }
        }

    }

    showList();
}

function sortBySalary(){ // modifies employeesList order
    var names=[];

    for(var i in employeesList){
        names.push(Number(employeesList[i].salary));
    }

    names.sort();

    for(var j in names){
        for(var i=j;i<employeesList.length;i++){  // se presupune nesortat dupa pozitia j

            if(names[j]===Number(employeesList[i].salary)){
                var aux=employeesList[i];
                employeesList[i]=employeesList[j];
                employeesList[j]=aux;
                break;
            }
        }

    }

    showList();
}

function showFilteredList(){
    var filter=document.getElementById("filter").value;

    var myTable='<table border="1" class="table"><tr><th>First Name</th>' +
        '<th>Last Name</th><th>Phone</th><th>Salary</th></tr>';

    for(var i in employeesList){
        var currentRow='<tr style="display: none;">'
        if(containsElement(i,filter)){
            currentRow='<tr>'
        }
        myTable+=currentRow;
        myTable+='<td>'+employeesList[i].firstName+'</td><td>'+employeesList[i].lastName+'</td><td>'+
            employeesList[i].phone+'</td><td>'+employeesList[i].salary+'</td>'+
            '<td><button onclick=vizualizare('+i+')>Vizualizare</button></td>'+
            '<td><button onclick=stergere('+i+')>Sterge</button></td></tr>';
    }
    myTable+='<tr><td>'+mostGivenNames()+'</td><td>'+differentLastNames()+'</td><td>'+mostCommonPhoneDigist()+'</td>'+
        '<td>'+averageSalary()+'</td></tr>';
    myTable+='</table>';

    var container=document.getElementById('listcontainer');
    container.innerHTML=myTable;
}

function containsElement(index,element){ // array index, and the searched element
    for(var el in employeesList[index]){
        if(element.toString()===employeesList[index][el].toString()){
            return true;
        }
    }
    return false;
}