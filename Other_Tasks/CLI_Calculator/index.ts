import inquirer from "inquirer";

const Integer = await inquirer.prompt([
  { message: "Enter First Integer: ", type: "number", name: "First" },
  { message: "Enter Second Integer: ", type: "number", name: "Second" },
  {
    message: "Select only 1 Operator",
    type: "list",
    name: "Operation",
    choices: ["Addition", "Subtraction", "Multiplication", "Division", "Power"],
  },
]);

if (Integer.Operation === "Addition") {
  console.log(
    `The "Addition" of two integers is: ${Integer.First + Integer.Second}`
  );
}

 else if (Integer.Operation === "Subtraction") {
  console.log(
    `The "Subtraction" of two integers is: ${Integer.First - Integer.Second}`
  );
} 

else if (Integer.Operation === "Multiplication") {
  console.log(
    `The "Multiplication" of two integers is: ${Integer.First * Integer.Second}`
  );
} 

else if (Integer.Operation === "Division") {
  console.log(
    `The "Division" of two integers is: ${Integer.First / Integer.Second}`
  );
}
else {
  console.log(
     `The Power of two integers is: ${Math.pow(Integer.First, Integer.Second)}`
  );
}
