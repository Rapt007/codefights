// function for calculating the sum 
function matrixElementsSum(matrix) {
for(var i=0; i<matrix.length;i++){
    for(var j=0;j<matrix[i].length;j++)
// if the matrix element is 0 so the whole column below that should be 0 
        if(matrix[i][j]==0 && i!=matrix.length-1){
        matrix[i+1][j]=0;
    }
}
console.log(matrix);
    // finally calculating the sum of all non 0 elements.
var sum=0;
for(var i=0; i<matrix.length;i++){
    for(var j=0;j<matrix[i].length;j++){
        sum+=matrix[i][j]
    }
    }
    return sum;// returning the sum
}

