/* Below are variables that might be used in assocication with product.
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



if ( +(product + discount + tax).toFixed(2) === 3.1) {
    
    showMessage('true');
}


/**This productId in function scope, goes out of exsistance as soon as the function fix is done executing.
 * 
 */

function showProductId() {
    let discounted;
    // this productId comes back as soon as fix is completed execution.
    let productId = standard;
    
    function fix() {
        let productId = discounted;
        console.log('in fix: ', productId);
    }

    fix();

    console.log('in showProductId: ', productId);

}

showProductId();