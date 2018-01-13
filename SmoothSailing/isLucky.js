// to check whether the first half of the ticket number is equal to the 
second half of the ticket.
function isLucky(n) {
   // converting number to string
var n_to_String = n.toString();
   // taking the first half digits
var first_half = n_to_String.substring(0,n_to_String.length/2)
// getting the sum of first half digits by converting it to array and 
mapping each element to integer and reducing it to get the sum
var sum = first_half.split("").map(x=>parseInt(x)).reduce((x,y)=>x+y);
   
var sum1=0;
//getting the sum of 2 half digits by converting it to array and mapping 
each element to integer and reducing it to get the sum
   var 
sum2=n_to_String.substring(n_to_String.length/2,n_to_String.length).split("").map(x=>parseInt(x)).reduce((sum1,y)=>sum1+y);
if(sum===sum2) {return true;
   }
else{
   return false;
   }

}
