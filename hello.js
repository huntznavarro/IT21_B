const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sayHello() {

  rl.question("\nPress Enter to go back to the menu...", () => {
    mainMenu(); // back to menu only after pressing Enter
  });
}

function askFeeling() {
  rl.question("Are you okay today? (yes/no) ", (answer) => {
    if (answer.toLowerCase() === "yes") {
      console.log("That's great to hear! 😊");
    } else if (answer.toLowerCase() === "no") {
      console.log("Sorry to hear that. Hope things get better soon. ❤️");
    } else {
      console.log("I didn’t understand, but I hope you’re doing well!");
    }
    rl.question("\nPress Enter to go back to the menu...", () => {
      mainMenu(); // back to menu only after pressing Enter
    });
  });
}

function mainMenu() {
  console.log("\n--- Main Menu ---");
  console.log("1. Say Hello");
  console.log("2. Ask if you’re okay");
  console.log("3. Exit");

  rl.question("Choose an option: ", (choice) => {
    switch (choice) {
      case "1":
        sayHello();
        break;
      case "2":
        askFeeling();
        break;
      case "3":
        console.log("Goodbye!");
        rl.close();
        break;
      default:
        console.log("Invalid choice, try again.");
        mainMenu();
    }
  });
}

// start the program
mainMenu();
