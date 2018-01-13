// number of common characters in both of arrays
function commonCharacterCount(s1, s2) {
// converting to the arrays using split
var first=s1.split("");
var second=s2.split("");
// variable for checking common characters
var count =0 ;
    for (var i=0; i< second.length; i++){
        if(first.includes(second[i])){
            first.splice(first.indexOf(second[i]),1)            
            count++;
        }
    }
return count;
}
