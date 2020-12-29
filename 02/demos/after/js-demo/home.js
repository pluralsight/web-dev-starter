/**This productId in function scope, goes out of exsistance as soon as the function fix is done executing.
 * 
 */

function showProductId() {
    // this productId comes back as soon as fix is completed execution.
    let productId = 12345;
    
    function fix() {
        let productId = 45678;
        console.log('in fix: ', productId);
    }

    fix();

    console.log('in showProductId: ', productId);

}

showProductId();