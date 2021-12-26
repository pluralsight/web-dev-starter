function search(array, value) {
    if(array.length === 0 ) {
        return null;
    }

    var min = 0;
    var max = array.length -1
    var mid = Math.floor((max + min)/2)

    while(min<=max){
        console.log('mid', mid)
        if(value === array[mid]){
            return mid;
        }

        if(value < array[mid]){
            max = mid -1;
        }

        if(value > array[mid]) {
            min = mid + 1;
            
        }
        var mid = Math.floor((max + min)/2)        
    }
return null;    
}
/*
1) Pick the midpoint: 22. 2) The value is higher than 22, so now consider 
only the right half of the previous array: [...31, 33, 34] 3) Pick the 
midpoint: 33 4) The value is lower than 33, so now consider only the left 
half of the previous array: [...31...] 5) Pick the midpoint: 31 6) You've 
hit the value. 7) Return the index of the value.
*/



var arr = [1, 3, 16, 22, 31, 33, 34, 44, 46, 47, 49, 54, 65, 78, 79, 83, 85]
var result = search(arr, 83);
console.log(result); //--> 4

