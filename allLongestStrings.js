// given an array, return another array containing all of its longest strings.
function allLongestStrings(inputArray) {
        // array for storing longest strings.
        var array_longest = [];
        array_longest.push(inputArray[0]);
        console.log(array_longest);
        var max = inputArray[0].length;
        for(var i=1; i<inputArray.length;i++){
                
                // if checking for just equality and pushing it.
                if(inputArray[i].length==max){
                array_longest.push(inputArray[i]);
                        console.log("equal" + array_longest);
                }
                // checking for the length greater, and if the condition is true then make array empty and pushing that element.
                if(inputArray[i].length>max){
                        
                        max = inputArray[i].length;
                        array_longest=[];
                        
                        array_longest.push(inputArray[i]);
                        console.log("I am" + i+array_longest);
                }
                
        }
        return array_longest;
}


// another way through functions
function allLongestStrings(inputArray) {
'use strict';
let max=Math.max(...inputArray.map(x=>x.length));
return inputArray.filter(x=> x.length==max);
}