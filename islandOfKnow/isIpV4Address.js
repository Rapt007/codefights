// given a string check whether it satisfies ipv4 criteria
function isIPv4Address(str) {
    // splitting based on dot and converting to array
    var split_str= str.split(".");
    if(split_str.length!=4) return false;
    // filter those values which are not null and getting the length of 
an array
    var count= split_str.filter(x=> x!="").length;
    if(count!=4) return false;
    // returning true if max and min values are between 0 to 255 and 
count is eq to 4.
    return Math.max(...split_str)<=255 && Math.min(...split_str)>=0;

}

