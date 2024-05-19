// Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.


let Magicians:string[]=["Harry Houdini","David Blaine","David Copperfield","Robert-Houdin","Michael Ammar"];


function make_great(magiciansArray:string[]){
  for(let i = 0; i<magiciansArray.length; i++){
    
 Magicians[i] ="The Great " + magiciansArray[i]

  }
}

function Show_Magicians(Magician:string[]){
    Magicians.forEach(Element => {
        console.log(Element);
        
    })
}

make_great(Magicians)
Show_Magicians(Magicians);
