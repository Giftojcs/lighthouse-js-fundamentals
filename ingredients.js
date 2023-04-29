
// Defining the array of ingredients
const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Printing the contents of ingredients using a while loop
console.log("Printing using while loop:");
let i = 0;
while (i < ingredients.length) {
console.log(ingredients[i]);
i++;
}

// Printing the contents of ingredients using a for loop
console.log("\nPrinting using for loop:");
for (let j = 0; j < ingredients.length; j++) {
console.log(ingredients[j]);
}

// Printing the contents of ingredients backwards using a for loop
console.log("\nPrinting backwards using for loop:");
for (let k = ingredients.length - 1; k >= 0; k--) {
console.log(ingredients[k]);
}
