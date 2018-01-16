// Given a string, find out if its characters can be rearranged to form 
a palindrome.
function palindromeRearranging(str) {
  /* with 0(n) complexity
    var count_letter={};
    var letter;
    var count=0;
    for (var i=0;i<str.length;i++){
        letter=str[i];
        count_letter[letter]=count_letter[letter]||0;
        count_letter[letter]++;
    }
    for(var i in count_letter){
        if(count_letter[i]&1) count++;
    }
    return count<2
*/
    // to check how many odd count character
    var odds=0;
    // to check the count of each character
    var count=0;
    // for unique string
    str1="";
    // getting the unique string
    for(var i=0;i<str.length;i++){
        if(str1.indexOf(str[i])==-1) str1+=str[i];
    }
    
    // checking count for each character in str
    for(var i=0;i<str1.length;i++){
        for(var j=0;j<str.length;j++){
            if(str1[i]==str[j]) count++;
            }
    // checking if count is odd or not  and if odd increment odds
        if(count&1) odds++;
    // again making count 0 for another letter
        count=0;
    }
    // if odds is less than 2 it will return true else false
    return odds<2;
}
