
let kata = 10
let ouput = ''

if (typeof kata == 'string' && kata != '') {
    ouput = 'username ' + kata
}else if (typeof kata == 'number' && kata !== 0 && isNaN(kata) == false) {
    ouput = `age ` + kata
}else if (kata === false) {
    ouput = 'cannot proceed without agreement'
}else if (kata === true) {
    ouput = 'thank you for agreeing'
}else  {
    ouput = 'invalid data'
}
console.log(ouput)
