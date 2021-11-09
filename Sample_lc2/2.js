function splitByDash(word) {
  let result = []
  let temp = ""
  for(let i = 0; i < word.length; i++) {
    if(word[i] == "-") {
      result.push(temp)
      temp = ""
      continue
    }
    temp += word[i]
    if(i == word.length - 1) result.push(temp)
  }
  return result
}


function arrangeData(data) {
  let result =  {
    nama: data.nama,
    umur: data.umur,
    historyPacaran: [],
  }
  for(let i = 0; i < data.historyPacaran.length; i++) {
    let splitData = splitByDash(data.historyPacaran[i])
    result.historyPacaran.push(splitData)
  }
  return result
}

function relationshipReport(data) {
  let arrangedData = arrangeData(data)
  let jumlahMantan = 0
  let jumlahPacar = 0
  let maxPeriod = 0
  for(let i = 0; i < arrangedData.historyPacaran.length; i++) {
    console.log(arrangedData.historyPacaran[i][1]);
    if(Number(arrangedData.historyPacaran[i][1]) > maxPeriod) {
      maxPeriod = Number(arrangedData.historyPacaran[i][1])
    }
    if(Number(arrangedData.historyPacaran[i][1]) > 0) jumlahMantan++
    else jumlahPacar++
  }
  let result = [data.nama, `${jumlahMantan} orang`, `${jumlahPacar} orang`, `${maxPeriod} hari`]
  return result
}

console.log(
  relationshipReport({
    nama: "Yumi",
    umur: 23,
    historyPacaran: [
      "Andhika-125",
      "Budiarto-95",
      "Chris-38",
      "Daniel-900",
      "Edwin-15",
      "Frans-365",
    ],
  })
);
// ["Yumi", "6 orang", "0 orang", "900 hari"]

// console.log(
//   relationshipReport({
//     nama: "Yume",
//     umur: 25,
//     historyPacaran: [
//       "Andhika-125",
//       "Budiarto-95",
//       "Chris-38",
//       "Daniel-0",
//       "Edwin-0",
//     ],
//   })
// );
// [ 'Yume', '3 orang', '2 orang', '125 hari' ]

// console.log(
//   relationshipReport({
//     nama: "Yumo",
//     umur: 22,
//     historyPacaran: ["Daniel-0", "Kevin-3", "Edwin-0"],
//   })
// );
// [ 'Yumo', '1 orang', '2 orang', '3 hari' ]

module.exports = { arrangeData, relationshipReport };
