// very good question
function areSimilar(a, b) {
// checking whether 2 strings are equal or not
if(a.toString()==b.toString()){
    return true
}
    // initializing 2 empty arrays
    c=[];
    d=[];
// if elements are not equal then pushing an element to those 2 arrays
for(var i=0;i<a.length;i++){
        if(a[i]!=b[i]){
            c.push(a[i]);
            d.push(b[i]);
        }
    
}
    // reversing one array
    d.reverse();
    // now if the strings are equal that means its true.
    return (c.toString()==d.toString());


}
