function restaurantRating (town){
    var ratingObj = {}
    
    //get the best rest
    //get all the good rest
    //get the average rating of rest

//for each rest
  //compare each with current best
  //check to see if rest is 90+
  //add current rating to a sum

//create properties for our ratingObj, best, good average

var best = town[0]
var good = []
var ratings = 0;

for (var i = 0; i < town.length; i++){
    if(best.rating < town[i].rating){
        best = town[i]
    }
    if(town[i].rating >= 90){
        good.push(town[i].name)
    }
    ratings += town[i].rating
}
ratingObj.best = best.name;
ratingObj.good = good;
ratingObj.avg = ratings/town.length

return ratingObj;

}