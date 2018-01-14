function reverseParentheses(s) {
   if(s.includes(')')){
      var req = /\(([^()]*)\)/
      var str = req.exec(s)[1].split("").reverse().join("");
      console.log(str);
      s=s.replace(req,str)
      return reverseParentheses(s);
      console.log(s);
   }
else {
   return s;
}
}
