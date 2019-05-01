//FizzBuzz

for (var counter = 1; counter < 101; counter++) {
    if (counter % 3 == 0 && counter % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (counter % 3 == 0 && counter % 5 !== 0) {
        console.log("Fizz");
    }
    else if (counter % 5 == 0 && counter % 3 !== 0) {
        console.log("Buzz");
    }
    else console.log(counter);
}


//Chessboard

console.log((new Array(65).join().split("")).map(function (v, i) {
    return ((i / 8 >> 0) % 2 ? (i % 2 ? " " : "#") : (i % 2 ? "#" : " ")) +
        ((i + 1) % 8 ? "" : "\n");
}).join(""));
