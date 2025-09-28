
const readline = require("readline");

// Create interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Main function: ask user for numbers, calculate sum, check odd/even
function sumAndCheck() {
    rl.question("Enter numbers separated by spaces: ", input => {
        // Split input into array and convert to numbers
        let numbers = input.split(" ").map(Number);

        // Calculate sum of all numbers
        let sum = 0;
        for (let num of numbers) {
            sum += num;
        }

        console.log("The sum of numbers is:", sum);

        // Check odd or even
        if (sum % 2 === 0) {
            console.log("The sum is Even.");
        } else {
            console.log("The sum is Odd.");
        }

        rl.close(); // End program
    });
}

// Start the program
sumAndCheck();
