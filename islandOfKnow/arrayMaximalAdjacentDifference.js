// finding the maximum abs difference between the elements of an array.
function arrayMaximalAdjacentDifference(inputArray) {
    var array=[];
    for(var i=1; i<inputArray.length;i++){
         array.push(Math.abs(inputArray[i]-inputArray[i-1]));
        
      } 
    // returning the max
    return Math.max(...array);   
}    


