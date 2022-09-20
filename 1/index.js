import fs from 'fs';

const input = fs.readFileSync('input.txt').toString();

let floor = 0;
let firstTimeInBasementIndexPosition = 0;

for (let i = 0; i < input.length; i++) {
    if(floor === -1 && firstTimeInBasementIndexPosition === 0) {
        firstTimeInBasementIndexPosition = i;
    }
    input[i] === '(' ? floor++ : floor--;
}

console.log(`Part 1 answer: ${floor}`);

console.log(`Part 2 answer: ${firstTimeInBasementIndexPosition}`);