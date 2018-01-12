function shapeArea(n) {
    return n==1?1:((n-1)*4+shapeArea(n-1)); 

}
