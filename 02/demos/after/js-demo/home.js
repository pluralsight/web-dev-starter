/* Reason 'de Tour~
Below are variables that might be used in assocication with product.
I am letting them be declared in the global scope.
These are standards that will be able to be used when one needs to fix a discount.
Thes standards are maintained to control profit margins on sales when time comes for a hot fix.
These should be used during the act of fixing and adjusting variables during customer service at the highest level.
The rep would need to utilize the fix function and be inherintly qulified. 
*/ 
let product = 1.1;
let price = 1.1;
let discount = 1.3;
let tax = 0.7;
let standard = 3.1;

// setting up ...
Array[product, price, discount, tax, standard];


if ( +(product + discount + tax).toFixed(2) === 3.1) {
    
    showMessage('true');
}

/* Differant standards showing in order to fill 
this array of placeholders that can be turned into an array of values that meets our standards.
Building up from falsy array.*/
if (this.Array['', 0, NaN, null, undefined] !== standard) {
    showMessage('fix-me');
}


/**This productId in function scope, 
 * goes out of exsistance as soon as the function fix is done executing.
 
 */

function showProductId() {
    // This function scope is easier to see during inspection of DOM.

    let discounted;
    // this productId comes back as soon as fix is completed execution.
    let productId = standard;
    
    function fix() {
        let productId = discounted;
/*For use during service to the back-end. 
The productId here should not be the same productId in the showProductId function.
The main reason for this is to protect data during this function fix to fix or adjust discounts based on customer absolute and third party customer relations from developers perspectives. 
*/

        console.log('in fix: ', productId);
    }

    fix();

    console.log('in showProductId: ', productId);

}

showProductId();