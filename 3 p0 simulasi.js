let row = 10

// your code here

let count = 1;
for(let i = 0; i < row; i++) {
    // console.log('1');
    let str = '';
    for (let j = 0; j < 3; j++) {
        str += count + ' ';
        // count++;
        count += 1;
    }
    console.log(str);
}

// let row = 5;
// // your code here
// for (let i = 1; i <= row * 3; i += 3) {
//   console.log(i, i + 1, i + 2);
// }