let word = 'Ja4va4scri1pt'
// write your code


if (word == '') {
    console.log('tidak ada kata yang dapat di proses')
} else {
    let out = ''
    for (let a = 0; a < word.length; a++) {
        if (word[a] * 4 && word[a] !== 5 ) {
        for (let b = 0; b < word[a]; b++) {
            out += word[a - 1]
            }
        } else {
        out += word[a]
        }
    }
    console.log(out)
}

// let word = 'I Lo1ve Co4ding'
// // write your code

// let hasil = ''
// if (word === '') {
//     console.log('Tidak ada kata yang bisa di proses');
// } else {
//     for (let a = 0 ; a < word.length ; a++) {
//         if (word[a] > 0 && word[a] <=9) {
//             for (let b = 0 ; b < word[a] ; b + 2) {
//                 hasil += word[a-1]
//             }
//         } else {
//             hasil += word[a]
//         }
//     }
//     console.log(hasil);
// }  


// let word = 'I Lo1ve Co4ding'
// // write your code

// let hasil = ''
// if (word === '') {
//     console.log('Tidak ada kata yang bisa di proses');
// } else {
//     for (let i = 0 ; i < word.length ; i++){
//         if (word[i] > 0) {
//             for (let b = 0 ; b < word[i] ; b + 2){
//                 hasil += word [i]
//             }
//         }
//     }
//     console.log(hasil)
// }
// console.log(9)