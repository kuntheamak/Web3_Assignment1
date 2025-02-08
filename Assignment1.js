//This demonstrate conditional statements, loops, jumping statements, and error handling

function main() {
    // Conditional Statements (if-else)
    let number = 10;
    if (number > 0) {
        console.log("The number is positive.");
    } else if (number < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }

    // For Loop
    console.log("For Loop:");
    for (let i = 0; i < 5; i++) {
        console.log(`Iteration ${i}`);
    }

    // While Loop
    console.log("While Loop:");
    let counter = 0;
    while (counter < 3) {
        console.log(`Counter: ${counter}`);
        counter++;
    }

    // Jumping Statements (break and continue)
    console.log("Jumping Statements:");
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            console.log("Breaking the loop at i = 5");
            break; // Exit the loop
        }
        if (i % 2 === 0) {
            continue; // Skip even numbers
        }
        console.log(`Odd Number: ${i}`);
    }

    // Error Handling (try-catch)
    console.log("Error Handling:");
    try {
        let result = riskyOperation();
        console.log(`Result: ${result}`);
    } catch (error) {
        console.error(`Caught an error: ${error.message}`);
    } finally {
        console.log("This will always execute, regardless of errors.");
    }
}

function riskyOperation() {
    let randomNumber = Math.random();
    if (randomNumber < 0.5) {
        throw new Error("Random number is too low!");
    }
    return "Operation successful!";
}

// Run the program
main();