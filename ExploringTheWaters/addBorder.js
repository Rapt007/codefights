// how to add the border
function addBorder(picture) {
    var max= Math.max(...picture.map(x=>x.length));
    for (var i=0;i<picture.length;i++){
        // converting to an array
        picture[i]=picture[i].split("");
        // pushing an element to the back
        picture[i].push('*');
        // pushing at the front
        picture[i].unshift('*');
        //creating a string from array
        picture[i]=picture[i].join("");
    }
    // creating a pattern of * by repeating it
    var star = ("*").repeat(max+2);
    // pushing that pattern in the front of an array
    picture.unshift(star);
    // pushing at the back
    picture.push(star);
    return picture;
}

