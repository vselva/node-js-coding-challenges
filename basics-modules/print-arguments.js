// Node.js script to display command-line arguments in a structured way
console.log("========== Command-line Arguments ==========");

// Extract user-provided arguments (ignoring Node binary and script path)
const args = process.argv.slice(2);
// here slice(2) is used to ignore the first two elements of the array, 
// which are the Node.js executable path and the script path.
// The remaining elements are the command-line arguments provided by the user.

if(args.length === 0) {
    console.log("No arguments provided.");
} else {
    for(let i = 0; i < args.length; i++) {
        console.log(`args[${i}]: ${args[i]}`);
    }
}
