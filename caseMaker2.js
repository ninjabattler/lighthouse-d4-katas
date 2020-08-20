const findArrayItem = function(array, item){

  for(let element of array){
    
    if(element === item){
      return true;
    }

  }

  return false;

}

let vowels = ["a", "e", "i", "o", "u"];

const isVowel = function(letter){

  vow = false

  vowels.forEach(vowel =>{
    
    if(letter === vowel) {vow = true};

  })

  return vow;

}

const makeCase = function(input, cas) {
  
  let output = ""

  let capital = false;

  let firstLoop = true;

  let addedChar = false;

  for(let chr of input){

    if(cas === "camel" || findArrayItem(cas, "camel")){
      if(chr !== " "){
        if(!capital){
          output += chr;
        } else {
          output += chr.toUpperCase();
          capital = false;
        }  
      } else {
        capital = true;
      }

      addedChar = true;
    }

    if(cas === "pascal" || findArrayItem(cas, "pascal")){

      if(chr !== " "){
        if(!capital && !firstLoop){
          output += chr;
        } else {
          output += chr.toUpperCase();
          capital = false;
        }  
      } else {
        capital = true;
      }

      addedChar = true;
    }

    if(cas === "snake" || findArrayItem(cas, "snake")){

      if(chr !== " "){
        output += chr;
      } else {
        output += "_"
      }
      addedChar = true;
    }

    if(cas === "kebab" || findArrayItem(cas, "kebab")){

      if(chr !== " "){
        output += chr;
      } else {
        output += "-"
      }
      addedChar = true;

    }

    if(cas === "title" || findArrayItem(cas, "title")){
      if(chr !== " "){
        if(!capital && !firstLoop){
          output += chr;
        } else {
          output += chr.toUpperCase();
          capital = false;
        }  
      } else {
        output += chr;
        capital = true;
      }
      addedChar = true;

    }

    if(cas === "vowel" || findArrayItem(cas, "vowel")){
      if(isVowel(chr)){
        output += chr.toUpperCase();
      } else {
        output += chr;
      }
      addedChar = true;

    }

    if(cas === "consonant" || findArrayItem(cas, "consonant")){
      if(!isVowel(chr)){
        output += chr.toUpperCase();
      } else {
        output += chr;
      }
      addedChar = true;

    }

    if(cas === "upper" || findArrayItem(cas, "upper")){
      if(!addedChar){
        output += chr;
      }
      output = output.toUpperCase();
    }


    firstLoop = false;

  }

  return output

}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", "upper"));
console.log(makeCase("this is a string", ["upper", "snake"]));