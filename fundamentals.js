
/* ----------------FUNCTIONS AND SCOPE --------------------*/

// Bock Scope for let keyword

let message = 'Outside the scope block';

if(5 === 5){
    let message = 'Inside block scope';
    //console.log(message);
}
//console.log(message);

// No scope for Var keyword

var messaging = 'declared outside';
if(5 === 5){
    var messaging = 'declared inside';
    //console.log(messaging);
}
//console.log(messaging);

// IIFE - invoked immediately invoked upon declaration

(function(){
   // console.log('in function');
})();

// Closures with IIFEs
// closures make sure that data is persistent 

let app = (function(){
    let carId = 123;
    let getId = function(){
        return carId;
    };

    return {
        getId: getId
    };
})();

//console.log(app.getId());

// THIS keyword is the context object for a function
// we can use the CALL fucntion to change the context of an object

let o = {
    carId: 123,
    getId: function(){
        return this.carId;
    },
    getIdByApply: function(prefix){
        return prefix + this.carId;
    }
};

let newCar = {carId: 456};

// call accepts the object
//console.log(o.getId.call(newCar)); // 456

// apply allows us to pass parameters
//console.log(o.getIdByApply.apply(newCar, ['ID: ']));

// bind makes a copy of an object and give it a new context
let newFn = o.getId.bind(newCar);
//console.log( newFn() );

// Arrow Functions
// they dont have their own context - menaing no 'this'

let getId = (prefix, suffix) => {

    return prefix + 123 + suffix ;
};

//console.log(getId('ID: ', '!'));

// DEfault Parameters -- they must be on the right side of the 
// of the function parameters list

let trackCar = function(carId, city = 'New York'){
    console.log(`Trackiing ${carId} in ${city}.`);
};

//console.log(trackCar(123));

//console.log(trackCar(123,'Chicago'));


/* ----------------OBJECTS  AND  ARRAYS   --------------------*/

