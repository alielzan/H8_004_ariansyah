
let kalimat = `makan minum`;
let pengeluar = 0;

for( let i = 0; i < kalimat.length; i++) {
    if( kalimat[i] !== ` ` && kalimat[i + 1] === ` ` ) {
        pengeluar += 1;
    }
    if( kalimat[i] !== ` ` && i === kalimat.length - 1) {
        pengeluar += 1
    }
}
console.log(pengeluar); 
