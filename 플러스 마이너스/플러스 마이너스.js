'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let plus = 0;
    let zero = 0;
    let minus = 0;
    let total = arr.length;

    arr.map((value, i) => {

        if (value > 0) {
            plus++;
        } else if (value < 0) {
            minus++;
        } else {
            zero++;
        }

        if (i === total - 1) { //is last
            console.log((plus / total).toFixed(6))
            console.log((minus / total).toFixed(6))
            console.log((zero / total).toFixed(6))
        }
    })
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
