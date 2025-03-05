import * as readline from "readline";

const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const minNumber:number = 0;
const maxNumber:number = 100;
const targetNumber:number = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber)
let attempts:number = 0 ;

function Guess_Number() {
    readLine.question('Guess the Number between 1 and 100:  ', (answer) => {
        let guess = parseInt(answer, 10);
        attempts++;

        if (isNaN(guess)) {
            console.log('\nPlease Enter a valid number. ');
        }
        else if(guess === targetNumber){
            console.log(`\nCongratulations! You have guessed the number is (${targetNumber}) in ${attempts} attempts.`);
            readLine.close();
        }
        else if(guess > targetNumber){
            console.log("Please Try a lower number.\n");
            Guess_Number();
        }
        else if(guess < targetNumber){
            console.log("Please Try a higher number.\n");
            Guess_Number();
        };
    });
}

Guess_Number();


