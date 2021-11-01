let kata = `kasur rusak`;

let reversed = ``;

for (let i = kata.length - 1; i >= 0; i--) {
  reversed += kata[i];
}

if (kata === reversed) {
  console.log(true);
} else {
  console.log(false);
}