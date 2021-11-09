// ESTIMATE = 20 MIN

// Menentukan angka terkecil
// output => 2

function sortLowToHigh(arr) {
    for(let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function lowest(arr) {
    // arr = sortLowToHigh(arr);
    // console.log(arr, '<< hasil sorting');
    // return arr[0];

    // let lowest = arr[0];
    // for(let i = 0; i < arr.length; i++) {
    //     if (arr[i] < lowest) {
    //         lowest = arr[i];
    //     }
    // }
    // return lowest;
    
    // case ke 2
    let lowest = arr[0][0];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] < lowest) {
                lowest = arr[i][j];
            }
        }
    }
    return lowest;
}

// Menentukan angka terbesar
// output => 99
function highest(arr) {
    // arr = sortLowToHigh(arr);
    // return arr[arr.length - 1];

    // let highest = arr[0];
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > highest) {
    //         highest = arr[i];
    //     }
    // }
    // return highest;

    // case ke 2
    let highest = arr[0][0];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > highest) {
                highest = arr[i][j];
            }
        }
    }
    return highest;
}

// Menentukan rata-rata
// output => 42.4
function average(arr) {
    // let total = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     total += arr[i];
    // }
    // return total / arr.length;

    //case 2
    let total = 0;
    let totalElement = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            total += arr[i][j];
            totalElement++;
        }
    }
    return total / totalElement;
}

// let angka = [5, 89, 32, 77, 98, 3, 9, 10, 2, 99];

//case 2
let angka = [
    [5, 89, 32], 
    [77, 1, 98], 
    [3, 9, 10], 
    [2, 99, 72]
];
//panggil function beserta parameternya disini
console.log(lowest(angka));
console.log(highest(angka));
console.log(average(angka));
