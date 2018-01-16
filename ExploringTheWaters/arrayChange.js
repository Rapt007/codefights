// getting how much moves we have to make in order to make our array 
strictly increasing.
function arrayChange(a) {
    // initializing count
    var count = 0;
    for(var i=1; i<a.length; i++){
        // check condition for checking whether i element is less than 
a-1 element and then incrementing i th element by i-1 th element+1 and 
no of moves by diff between i and i-1 element +1;
        if(a[i]<=a[i-1]){
            count=count+ ((a[i-1]-a[i])+1);
            a[i]=a[i-1]+1;
        }
    }
    console.log(count);
    return count;
}

