function titleCase(str) {
    var titleCased = str.toLowerCase().split(' ').map(function(w) {
        return w[0].toUpperCase() + w.slice(1);
    });
    return titleCased.join(' ');
}


var numbers = [1, 2, 3, 4, 5]
function add(num1, num2) {
    return num1 + num2;
}
var added = numbers.reduce(add, 0);
console.log(added) // should be 15