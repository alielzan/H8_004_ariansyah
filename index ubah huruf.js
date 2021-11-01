let kata = `mantap`;
let vocal = `aiueoAIUEO`;
let output = ``;

for (let i = 0; i < kata.length; i++) {
  let flag = false;
  for (let j = 0; j < vocal.length; j++) {
    if (kata[i] === vocal[j]) {
      flag = true
    }
  }

  if (flag === false) {
    output += kata[i];
  } else {
    output += `$`
  }
}
console.log(output)