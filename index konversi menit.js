let detik = 60;


let x = Math.floor(detik/60)
let y = detik % 60


if (x > 0) {
    if (y <10) {
        console.log(`${x}:0${y}`);
    } else {
        console.log(`${x}:${y}`);
    }
} else {
    if (y <10) {
        console.log(`${x}:0${y}`);
    } else {
        console.log(`${x}:${y}`);
    }
}



