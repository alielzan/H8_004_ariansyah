function convertSymbol(arr) {
  // code here
  let output = []
  for (let i = 0; i < arr.length; i++) {
    let temp = ``
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === `)`) {
        temp += `0`
      }
      if (arr[i][j] === `!`) {
        temp += `1`
      }
      if (arr[i][j] === `@`) {
        temp += `2`
      }
      if (arr[i][j] === `#`) {
        temp += `3`
      }
      if (arr[i][j] === `$`) {
        temp += `4`
      }
      if (arr[i][j] === `%`) {
        temp += `5`
      }
      if (arr[i][j] === `^`) {
        temp += `6`
      }
      if (arr[i][j] === `&`) {
        temp += `7`
      }
      if (arr[i][j] === `*`) {
        temp += `8`
      }
      if (arr[i][j] === `(`) {
        temp += `9`
      }
    }
    temp = Number(temp)
    output.push(temp)
  }
  return output
}
console.log(convertSymbol(['!(', '#&', '!@', '@%', '@@', '!%', '&#', '#%', '@%', '#!']))

function decrementOdd(arr) {
  // code here
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
    output.push(arr[i]-arr.length);
    }else {
      output.push(arr[i])
    }
  }
  return output
}
// console.log(decrementOdd([19, 37, 12, 25, 22, 15, 73, 35, 25, 31]))

function splitNumber(arr) {
  // code here
  let output = [];
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] <= 26) {
      temp.push(arr[i]); 
    }
    if (i+1 == arr.length || arr[i] > 26) {
      output.push(temp);
      temp = [];
    }
  }
  return output
}
// console.log(splitNumber([9, 27, 12, 15, 22, 5, 63, 25, 15, 21]))

function convertNumber(arr) {
  // code here
  let huruf = "-abcdefghijklmnopqrstuvwxyz";
  let convert = "";
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      convert += huruf[arr[i][j]];
    }
    if (i < arr.length) {
      convert += " ";
    }
  }
  return convert;
}
// console.log(convertNumber([[9], [12, 15, 22, 5], [25, 15, 21]]))


function output(arr) {
  // code here
  let converted = convertSymbol(arr);
  let decrement = decrementOdd(converted);
  let splitted = splitNumber(decrement);
  return convertNumber(splitted)
}
// console.log(output([[9], [12, 15, 22, 5], [25, 15, 21]]));

console.log(
  convertSymbol(['!@', '!&', '@)', '#!', '&#', '!(', '@&', '%%', '!(', '##', '#&', '@^']) // lets go guyz
)
console.log(
  output(['!(', '#&', '!@', '@%', '@@', '!%', '&#', '#%', '@%', '#!']) // i love you
)

console.log(
  output(['!%', '@&', '$', '!&', '$#', '*', '!#', '!%', '@#', '@)', '@!', '@@']) // code hacktiv
)

module.exports = {
  convertSymbol,
  decrementOdd,
  splitNumber,
  convertNumber,
  output
}
