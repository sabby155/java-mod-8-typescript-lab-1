function prepend(numSpaces: number, inputString: string) {
  // your code here
  let str = inputString;
  let space = "";

  for(let i = 0; i < numSpaces; i++) {
    //Putting underscore vs sace so you can see it in output
    space += "_";
  }
  return `${space}${inputString}`;
}


console.log(prepend(3, "happy"));