function summaryPengunjung(input) {
  let result = []
  for(let i = 0; i < input[0].length; i++) {
    let firstName = input[0][i]
    let lastName = input[1][i]
    let fullName = `${firstName} ${lastName}`
    let birthDate = input[2][i]
    let birthMonth = `${input[3][i][0]}${input[3][i][1]}${input[3][i][2]}`
    let birthYear = input[4][i]
    let formattedBirthDate = `${birthDate}/${birthMonth}/${birthYear}`
    let age = 2021 - birthYear
    let data = `${fullName} - ${formattedBirthDate} - ${age} Tahun`
    result.push(data)
  }
  return result
}

console.log(
  summaryPengunjung([
    ["Acong", "Djoko", "Sitorus"], // 0
    ["Budiman", "Abimantra", "Prayitno"], // 1
    [13, 24, 22],//2
    ["Januari", "Maret", "Mei"],
    [1980, 1965, 1990],
  ])
);
/*
[
  'Acong Budiman - 13/Jan/1980 - 41 Tahun',  
  'Djoko Abimantra - 24/Mar/1965 - 56 Tahun',
  'Sitorus Prayitno - 22/Mei/1990 - 31 Tahun'
]
*/

// console.log(
//   summaryPengunjung([
//     ["Kian", "Walang", "Alexander", "Budi"],
//     ["Santang", "Sungsang", "Geraham", "Pekerti"],
//     [18, 1, 7, 20],
//     ["Desember", "April", "Januari", "Juli"],
//     [1980, 1965, 1990, 1957],
//   ])
// );
/*
[
  'Kian Santang - 18/Des/1980 - 41 Tahun',
  'Walang Sungsang - 01/Apr/1965 - 56 Tahun',
  'Alexander Geraham - 07/Jan/1990 - 31 Tahun',
  'Budi Pekerti - 20/Jul/1957 - 64 Tahun'
]
*/

module.exports = summaryPengunjung;
