// checking whether the sequence is strictly increasing when removing no 
more than 1 element
function almostIncreasingSequence(seq) {
  var bad=0;// variable for checking that the how many elements are bad 
which means which is larger than the next element.
  for(var i=1;i<seq.length;i++){ 
// checking whether the this element is lesser than pevious element	
if(seq[i]<=seq[i-1]) {
// if true incrementing bad    
bad++
    if(bad>1) return false
    if(seq[i]<=seq[i-2]&&seq[i+1]<=seq[i-1]) return false
    
  }
}
  return true
}
