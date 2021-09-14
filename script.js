
let person ={
    name: 'John',
    lastName: 'Doe',
    age: 32,
    partTime: false,
    showLastName: function(){
        //showMessage(this.lastName);
        return this.lastName;
    }

};

let myFunction  = function (message, firstName) {
    
    
    return message + ' '+ firstName;
}

showMessage(myFunction('Hello', 'John') + ' '+ person.showLastName());
changePercentOff('50% OFF');