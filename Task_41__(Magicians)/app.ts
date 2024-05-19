// Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.



let Magicians:string[]=["Harry Houdini","David Blaine","David Copperfield","Robert-Houdin","Michael Ammar"];

function Show_Magicians(Magician:string[]){
    Magicians.forEach(Element => {
        console.log(Element);
        
    })
}

Show_Magicians(Magicians);