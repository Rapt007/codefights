function sortByHeight(a) {
    var s = a.filter(h => h > 0).sort((a, b) => a - b)
    return a.map(p => {
        if (p !== -1) {
            return s.shift();
        }
        
        return -1;
    })
}
// another way

function sortByHeight(a) {
var new_array=[];
for(var i=0;i< a.length;i++){
    if (a[i]!=-1){
        new_array.push(a[i]);
    }
}
    
new_array.sort(function(a,b){
               return a-b;
               });
var j=0
for(var i=0;i<new_array.length;i++){
    while(j<a.length){
        if(a[j]!=-1){
            a.splice(j,1,new_array[i]);
            j++;
            break;
        }
        j++;
    }
}

    return a;
}

