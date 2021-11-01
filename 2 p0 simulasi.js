let exercise = '<>^v>>>' // Isi value sesuai keinginanmu
let userInput = '><><<>>' // Isi value sesuai keinginanmu
let poin = 0


if (exercise.length == userInput.length) {
    console.log("sama");
    for (let i = 0; i < exercise.length; i++) {
        if (exercise[i] == userInput[i]) {
            poin += 1
        }
    }
    let persentase = Math.floor(poin / exercise.length * 100)
    let skor = poin * 10
    let totalskor = exercise.length * 10
    console.log(skor);
    if (persentase == 100) {
        console.log(`Anda mendapatkan score ${skor} / ${totalskor}. Persentase: ${persentase}%, Kategori : Perfect`);
    }
    else if (persentase >= 80 && persentase <= 99) {
        console.log(`Anda mendapatkan score ${skor} / ${totalskor}. Persentase: ${persentase}%, Kategori : Great`);
    }
    else if (persentase >= 60 && persentase <= 79) {
        console.log(`Anda mendapatkan score ${skor} / ${totalskor}. Persentase: ${persentase}%, Kategori : Good`);
    }
    else {
        console.log(`Anda mendapatkan score ${skor} / ${totalskor}. Persentase: ${persentase}%, Kategori : Bad`);
    }
}
else {
    console.log("Input yang anda masukan tidak lengkap");
}


// let exercise = '<>^v>>>' // Isi value sesuai keinginanmu
// let userInput = '<>^^>><' // Isi value sesuai keinginanmu

// let exercise = '<>^v'
// let userInput = '<'
// // Your code here
// if (exercise.length !== userInput.length) {
//     console.log('Input yang anda masukkan tidak lengkap!');
// } else {
//     let point = 0;
//     // if (exercise[0] === userInput[0]) {
//     //     point += 10;
//     // }
//     // if (exercise[1] === userInput[1]) {
//     //     point += 10;
//     // }
//     //i = 1
//     for (let i = 0; i < exercise.length; i++) {
//         if (exercise[i] === userInput[i]) {
//             point += 10;
//         }
//     }
//     // console.log(point);
//     let totalPoint = exercise.length * 10;
//     // console.log(totalPoint);
//     let percentage = point / totalPoint * 100;
//     percentage = Math.floor(percentage);
//     // console.log(percentage);
//     let category = 'Perfect';

//     if (percentage === 100) {
//         category = 'Perfect';
//     } else if (percentage >= 80) {
//         category = 'Great';
//     } else if (percentage >= 60) {
//         category = 'Good';
//     } else if (percentage >= 0) {
//         category = 'Bad';
//     }

//     console.log(`Anda mendapatkan score ${point} / ${totalPoint}. Persentase: ${percentage}%, Kategori : ${category}`);
// }