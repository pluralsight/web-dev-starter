//https://codepen.io/Universalist/post/predicates-in-javascript




A predicate is a function that takes one item as input and returns either true or false based on whether
the item satisfies some condition.They're quite useful for interrogating objects to learn more about
them or to apply certain operations conditionally to objects.Because Javascript supports passing
around functions as values we can make predicate combinators: functions that build new predicates from
simpler ones.This style of programming is sometimes called the combinator pattern, because it
emphasizes creating systems by making the simple primitives first, then making tools for combining
them into more complex objects.As an example, consider this function:

    function or(p1, p2) {
    return function (x) {
        return p1(x) || p2(x);
    }
}
The function or consumes two predicates p1 and p2, and returns a new predicate.That returned predicate tests a value x and returns true if either p1(x) is true or p2(x) is true.Let's test it out with the two predicates negative and positive:

function negative(x) {
    return x < 0;
}
function positive(x) {
    return x > 0;
}
var nonzero = or(negative, positive);
alert(nonzero(-5));
alert(nonzero(0));
alert(nonzero(5));
By using the or combinator we combine negative and positive to get a new function called nonzero, which returns true if its argument is either negative or positive.We can create similar combinators for and and not:

    function and(p1, p2) {
        return function (x) {
            return p1(x) && p2(x);
        }
    }
function not(p) {
    return function (x) {
        return !p(x);
    }
}
Let's apply these tools to the problem domain of making predicates for testing if a number is within a certain range on the number line. First of all, let's create some higher order functions that consume a number and return a predicate that tests if another number is higher or lower than the original:

function less(x) {
    return function (y) {
        return y < x;
    }
}
function greater(x) {
    return function (y) {
        return y > x;
    }
}
These functions return predicates.For example less(10) is a predicate that returns true for all numbers less than 10, so less(10)(4) would be true.Now with these tools, let's see how we might make a predicate that returns true if a number is either less than -20, or is between 5 and 10:

var inSomeRange = or(less(-20), and(greater(5), less(10)));

alert(inSomeRange(-40));
alert(inSomeRange(-6));
alert(inSomeRange(7));
alert(inSomeRange(11));
This function behaves as expected and it was very, very easy to create with our predicate tools.We didn't have to worry about the details of how to combine or create the tests, we simply declared what we wanted to do and our combinators took care of the rest. These tools become extraordinarily useful when dealing with functions that accept predicates as arguments, such as the Array.prototype.filter() method (which isn't available in all browsers but there are shims to support it). This method of arrays will accept a predicate and remove all elements from the array that do not satisfy the predicate:

var data = [1, 2, 3, 4, 5, 6, 7];
data.filter(or(less(3), greater(6)));
// data is [1, 2, 7]
Here, our combinators allow us to combine already - defined predicates into a new, one - off predicate that's specific to filtering the particular array we're dealing with.We don't have to go to the trouble of defining the one-off function elsewhere, and we aren't encumbered by the verbose syntax that would be required of explicitly creating the predicate with function (x) { ... }.Our code is clean, concise, and to the point.Higher - order functions and combinators allow us this flexibility and power, while still maintaining simplicity and elegance.