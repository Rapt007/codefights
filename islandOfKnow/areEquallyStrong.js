function areEquallyStrong(yourLeft, yourRight, friendsLeft, 
friendsRight) {
  var a=[yourLeft,yourRight];
  var b=[friendsLeft, friendsRight];
  a.sort();
  b.sort();
  console.log(a)
  return a[0]==b[0] && a[1]==b[1];
}
