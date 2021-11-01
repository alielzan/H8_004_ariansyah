let age = 8;
let height = 60;

let a = 30000;
let b = 40000;
let c = 50000;

if (age <= 1) {
  console.log("Dilarang masuk");
} else if (age >= 2 && age <= 3) {
  if (height > 70) {
    console.log(a + 10000);
  } else {
    console.log(a);
  }
} else if (age >= 4 && age <= 7) {
  if (height > 70) {
    console.log(b + 15000);
  } else {
    console.log(b);
  }
} else if (age >= 8 && age <= 10) {
  if (height > 150) {
    console.log(c + 20000);
  } else {
    console.log(c);
  }
} else {
  console.log(80000);
}


// let age = 8
// let height = 140

// if (age <= 1) {
//     console.log('Dilarang masuk');
// } else if (age >= 2 && age <= 3) {
//     if (height > 70) {
//         console.log(40000);
//     } else {
//         console.log(30000);
//     }
// } else if (age >= 4 && age <= 7) {
//     if (height > 120) {
//         console.log(55000);
//     } else {
//         console.log(40000);
//     }
// } else if (age >= 8 && age <= 10) {
//     if (height > 150) {
//         console.log(70000);
//     } else {
//         console.log(50000);
//     }
// } else {
//     console.log(80000);
// }
