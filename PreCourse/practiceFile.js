



var avg = function (inp) {
  console.log(arguments)

    let sum = 0;
    for (const item of arguments) {
      sum += item;
    }
    return sum / arguments.length;
  }

  //var result = avg(2, 3, 4, 5); // 3.5
  //var result = avg.apply(this, [2, 3, 4, 5])
  //console.log(result)











function onlyElementsAtEvenIndex(array) {
  debugger
  var newArray = Array(Math.ceil(array.length / 2));
  for (var i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
          newArray[i / 2] = array[i];
      }
  }
  return newArray;
}

//console.log(onlyElementsAtEvenIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))



function aShift (inp) {
  //debugger
  var map = '0abcdefghijklmnopqrstuvwxyza'

  return [...inp].reduce(function(acc, el) {
    return acc = acc.concat(map[(map.indexOf(el)) + 1])
  }, []).join('')
}

//console.log(aShift('crazy'))







function solutionnn(inputString) {
  debugger
  inputString = inputString.split('.');
  inputString.forEach((num) => {
      console.log('+num: ', typeof +num);
      if (num > 255) {
          return false;
      }
  });
  return true;
}

//console.log(solutionnn("172.316.254.1")); // false​
// function solution(inputString) {
//     inputString = inputString.split('.');
//     for (var i = 0; i < inputString.length; i++) {
//         console.log('+inputString[i]: ', typeof +inputString[i]);
//         if (+inputString[i] > 255) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(solution("172.316.254.1")); // false




function toCamelCase(str){
  //debugger

  str = str.split('')
  var acc = []

  for (var i = 0; i < str.length; i++) {
    if(str[i] === '-' || str[i] === '_') {
      acc = acc.concat(str[i + 1].toUpperCase())
      i++
    } else {
      acc = acc.concat(str[i])
    }
  }
  return acc.join('')

}

//console.log(toCamelCase('the_stealth_warrior'))  // theStealthWarrior

function removeElement(array, discarder) {

  return array.reduce(function(acc, el){
    if (el !== discarder) {
      acc.push(el);
      return acc
    } else {
      return acc;
    }
  }, [])
}

// var output = removeElement(['is', 'it', 'for'], 'for');
// console.log(output); // --> [1, 3, 1]