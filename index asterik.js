let rows1; // input the number of rows
let rows2; // input the number of rows
let rows3; // input the number of rows
let rows4; // input the number of rows

// do loops using rows1 variable to display asterisks in the console.
// do loops using rows2 variable to display asterisks in the console.
// do loops using rows3 variable to display asterisks in the console.
// do loops using rows4 variable to display asterisks in the console.

// *####
// **###
// ***##
// ****#
// *****


for (var i = 0; i < 5; i++) {
    console.log('*');
}

var a = '';
for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
        a += '*';
    }
    a += '\n';
}
console.log(a);


for (var i = 0; i < 5; i++) {
    var temp = '';
    for (var j = 0; j < i + 1; j++) {
        temp += '*';
    }
    console.log(temp);
}


for (var s = 4; s >= 0; s--) {
    var temp = '';
    for (var j = 0; j < s + 1; j++) {
        temp += '*';
    }
    console.log(temp);
}


