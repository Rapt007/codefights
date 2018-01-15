// getting the sum of alternate elements and getting an array of 2 elements
function alternatingSums(a) {
    //if it has just one element then a[1] should be 0.
    if(a.length==1){
        a[1]=0;
        return a;
    }
    else{
        // runnning loop from 2 index
    for(var i=2;i<a.length;i++){
        // getting the even positions and appending sum to the 0 th position of an array.
        if(i%2==0){
           a[0]=a[0]+a[i]; 
        }
        // else at 1st position.
        else{
            a[1]=a[1]+a[i];
            
        }
        
    }
        // splice 2 elements from 0th index
    a=a.splice(0,2);
    return a;
}
}

