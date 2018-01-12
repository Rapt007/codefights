// this is one way
function adjacentElementsProduct(arr) {
  return Math.max(...arr.slice(1).map((x,i)=>[x*arr[i]]))
}

//another way
function adjacentElementsProduct(inputArray) {
var max=-999999;
    for(var i=0; i<inputArray.length-1; i++){
        var mul= inputArray[i]*inputArray[i+1];
        if (mul > max){
            max = mul;
        }
    }
    return max;
}

