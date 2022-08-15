function prepend(numSpaces, inputString) {
    // your code here
    var str = inputString;
    var space = "";
    for (var i = 0; i < numSpaces; i++) {
        //Putting underscore vs sace so you can see it in output
        space += "_";
    }
    return "".concat(space).concat(inputString);
}
console.log(prepend(3, "happy"));
