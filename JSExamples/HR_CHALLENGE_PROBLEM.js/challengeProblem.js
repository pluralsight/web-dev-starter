//Coding Challenge
//organizes items by category

//I
  //item array with food objects
    //category - string
    //itemname - string
    //onSale - boolean
//O
  //object with category properties
    //category - array of strings
    //




    var itemData = [
        { category: 'fruit',  itemName: 'apple', onSale: false },
        { category: 'canned', itemName: 'beans', onSale: false },
        { category: 'canned', itemName: 'corn',  onSale: true  },
        { category: 'frozen', itemName: 'pizza', onSale: false },
        { category: 'fruit',  itemName: 'melon', onSale: true  },
        { category: 'canned', itemName: 'soup',  onSale: false },
      ];
    //console.log('here' , Object.values(itemData[0]))
    
    
    
    
    
    
    function organizeItems(items) {
        //use Object.value to get all the object values in an array
        var arrayValues = [];
        var masterObject = {};
    
        //iterate through loop
        for (var i = 0; i < items.length; i++){
            //get array of object values
            arrayValues = Object.values(items[i])
            //console.log(arrayValues);
            //if current word is NOT in object
            if(masterObject[arrayValues[0]] === undefined){
              //create array and push updated word into array
              
              //instantiate current word in object with created array
              masterObject[arrayValues[0]] = []
              masterObject[arrayValues[0]].push(addsADollarSignToEndOfWord(arrayValues[1], arrayValues[2]))
              //console.log('masterObject', masterObject, 'arrayValues[0]', arrayValues[0])
                
            } else {
                //otherwise
                  //push updated word into array
              masterObject[arrayValues[0]].push(addsADollarSignToEndOfWord(arrayValues[1], arrayValues[2]))
            }
            
            var updatedWord = addsADollarSignToEndOfWord(arrayValues[1], arrayValues[2])
            
        }
    //return something
    return masterObject
    
    }
    
    
    function addsADollarSignToEndOfWord(word, boolean){
      //when passed a word and a boolean
      //determines if a dollor sign sould be appended to the end
         if(boolean){
            var split = word.split('')
            split.push('($)')
            var newWord = split.join('')
            return newWord;
        } else {
            return word;
        }
    }
    
    // var testWord = 'corn';
    // var testBoolean = true
    // var testWord_1 = addsADollarSignToEndOfWord(testWord, testBoolean)
    // console.log(testWord_1);
    
    var result = organizeItems(itemData);
    console.log(result)
    
    
    // {
    //     fruit:  ['apple', 'melon($)'],
    //     canned: ['beans', 'corn($)', 'soup'],
    //     frozen: ['pizza']
    //   };
    
    
    
    
    
    
    
    
    // function organizeItems(items) {
    //     //object variable
    //     var masterObject = {}
    //     //iterate through the array
    //     for (var i = 0; i < items.length; i++){
    //       //if key in variable object is undefined
    //       console.log(items[i].category)
    //       if(masterObject[items[i].category] === undefined){
    //         console.log('masterObject', masterObject)
    //         //create fruit array
    //         var fruitArray = [];
    //         //check onSale value
    //         //if on sale
    //         if(items[i].onSale === true){
    //             console.log('onSale is True')
           
    //           //concatenate word with ($)
    //           //push word onto fruit array
                      
    //         } else {
    //         //otherwise 
    //           //check item onSale
    //             //if item on sale
    //               //concatenate word with ($)
    //               //push word onto fruit array
    //             //otherwise
    //               //push word onto fruit array
    //         // masterObject[items[i].category] 
    //         console.log('else')
    //         }  
    //         //add key to object with value of fruit array
    //         masterObject[items[i].category] = fruitArray  
    //        console.log('masterObject[items[i].category]', masterObject[items[i].category])
            
    //       } else {
    //        //otherwise
    //         //check onSale value
    //         //if on sale
    //           //concatenate word with ($)
    //           //push word onto fruit array in object at current key
    //         //otherwise
    //           //push word onto fruit array in object at current key
          
    //       }
            
            
    //     }
    
    
    //   //return something?
    //   }
    
    