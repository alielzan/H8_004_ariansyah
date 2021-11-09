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

function splitTransactions(array) {
  let result = []
  for(let i = 0; i < array.length; i++) {
    let splitData = splitByDash(array[i])
    result.push(splitData)
  }
  return result
}


function sortItemsByNumber(array) {
  for(let i = 0; i < array.length; i++){
    for(let j = 1; j < array.length; j++) {
      if(+array[j-1][0] > +array[j][0]) {
        array[j][0] = +array[j][0]
        array[j-1][0] = +array[j-1][0]
        let temp = array[j-1]
        array[j-1] = array[j]
        array[j] = temp
      }
    }
  }
  return array
}


function objectify(item) {
  return {
    Number: item[0],
    Name: item[1],
    Origin: item[2],
    Destination: item[3]
  }
}


function calculatePrice(items) {
  let result = []
  const distance = ["Jakarta", "Depok", "Bogor", "Tangerang", "Bekasi"];
  //                  0         1         2       3             4
  let splittedData = splitTransactions(items)
  let sortedData = sortItemsByNumber(splittedData)
  for(let i = 0; i < sortedData.length; i++) {
    let objectData = objectify(sortedData[i])
    let originIndex = null
    let destinationIndex = null
    for(let j = 0; j < distance.length; j++) {
      if(distance[j] == objectData.Origin) originIndex = j
      if(distance[j] == objectData.Destination) destinationIndex = j
    }
    let selisih = Math.abs(originIndex - destinationIndex)
    let price = selisih * 20000
    result.push({
      Name: objectData.Name,
      Cost: price
    })
  }
  return result
}

let data1 = [
  "2-Rafi-Jakarta-Depok",
  "3-Afif-Bekasi-Tangerang",
  "4-Rafki-Bogor-Bekasi",
  "1-Zara-Tangerang-Bekasi",
];

console.log(calculatePrice(data1));
/*
 [
  { Name: 'Zara', Cost: 20000 },
  { Name: 'Rafi', Cost: 20000 },
  { Name: 'Afif', Cost: 20000 },
  { Name: 'Rafki', Cost: 40000 }
]
 */

let data2 = [
  "3-Budi-Depok-Bogor",
  "5-Echo-Tangerang-Depok",
  "1-Delta-Jakarta-Depok",
  "4-Andi-Jakarta-Bogor",
  "2-Charlie-Tangerang-Jakarta",
];

// console.log(calculatePrice(data2))
/*
[
  { Name: 'Delta', Cost: 20000 },  
  { Name: 'Charlie', Cost: 60000 },
  { Name: 'Budi', Cost: 20000 },   
  { Name: 'Andi', Cost: 40000 },   
  { Name: 'Echo', Cost: 40000 }    
]
*/

module.exports = {
  splitTransactions,
  sortItemsByNumber,
  objectify,
  calculatePrice
}