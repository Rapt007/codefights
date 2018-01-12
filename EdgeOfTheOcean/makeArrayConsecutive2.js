//getting how many statues are needed to make them consecutive in order
function makeArrayConsecutive2(statues) {
    var max_val= Math.max(...statues);
    var min_val = Math.min(...statues);
    var count =0;
    // increasing the count if some value is not there in the min to max range in that statues array.
    for(var i=min_val; i<max_val; i++){
        if(statues.includes(i)){
            
        }
        else{
            count++;
        }
    }
    return count;
}

