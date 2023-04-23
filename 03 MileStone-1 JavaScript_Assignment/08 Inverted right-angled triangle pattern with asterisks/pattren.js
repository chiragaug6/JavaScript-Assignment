/** Inverted right-angled triangle pattern with asterisks */

let limit = 10;

for (let i = 0; i < limit; i++) {
    for (let j = 0; j < limit - i; j++) {
        process.stdout.write("*");
    }
    console.log();
}