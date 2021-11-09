// ESTIMATE = 25 Min

// split string menjadi array
// input => 'kentang goreng keju'
// output => ['kentang', 'goreng', 'keju']
function manualSplit(str) {
    // let result = [];
    // let temp = '';
    // for (let i = 0; i <= str.length; i++) {
    //     if (str[i] !== ' ' && str[i] !== undefined) {
    //         temp += str[i];
    //     } else {
    //         result.push(temp);
    //         temp = '';
    //     }
    // }
    // return result;

    let result = [];
    let temp = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            temp += str[i];
        }
        if (str[i] === ' ' || i === str.length - 1) {
            result.push(temp);
            temp = '';
        }
    }
    return result;
}

//Pencarian sesuai kata yang diinputkan
// input => 'goreng'
// output => ['minyak goreng', 'mie goreng', 'kentang goreng', 'kentang goreng keju']
function search(arr, keyword) {
    //panggil manual split dan sesuaikan parameternya
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let split = manualSplit(arr[i]);
        // console.log(split);
        for (let j = 0; j < split.length; j++) {
            if (split[j] === keyword) {
                result.push(arr[i]);
                break;
            }
        }
    }
    return result;
}

let products = ['minyak goreng', 'mie rebus', 'mie goreng', 'mie pedas', 'sirup jeruk', 'sirup mangga', 'kentang goreng', 'kentang goreng keju', 'keju slice keju', 'keju parut'];

// panggil function disini dan sesuaikan parameternya
console.log(search(products, 'keju'));

// console.log(products[7].split('g'), '<< split yang asli');