//ESTIMATE : 45 Min

//mendapatkan nama asset
//input => 'rumah2'
//output => 'rumah'
function findAssetName(str) {
   let result = '';
   for (let i = 0; i < str.length; i++) {
    //    console.log(str[i], '<<', Number(str[i]));
       if (isNaN(str[i])) {
           result += str[i];
       }
   }
   return result;
}

// menghitung jumlah pajak dari 1 aset
// input => harga aset => 2000000
//       => pajak => 2
// output => 40000 (didapat dari (harga aset * pajak / 100) )
function calculateTax(price, tax) {
    return price * tax / 100;
}

// koversi number menjadi rupiah
// input => 2357000000
// output => Rp 2.357.000.000,00
function numberToRupiah(num) {
    //        01234567
    // num = '20000000';
    let str = String(num);
    let reverse = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    // console.log(reverse, '<<reverse');
    //  01234567
    // '00000002'
    str = '';
    for (let i = 0; i < reverse.length; i++) {
        str += reverse[i];
        if((i + 1) % 3 === 0 && i !== reverse.length - 1) {
            str += '.';
        }
    }
    // console.log(str, '<< tambah separator');
    reverse = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    // console.log(reverse, '<<final')
    return `Rp ${reverse},00`;
}

//total pajak
function totalTax(obj) {
    // isinya nama asset yang wajib bayar pajak dan berapa persen yang harus dibayar dari harga asset
    let taxList = [
        ['rumah', 2],
        ['mobil', 5],
        ['motor', 10],
        ['tanah', 2]
    ]
    
    let total = 0;
    // i = 1
    for (let i = 0; i < data.assets.length; i++) {
        //panggil findAssetName disini
        let assetName = findAssetName(data.assets[i][0]);
        // console.log(assetName, '<< asset name');
        //panggil calculateTax disini
        for (let j = 0; j < taxList.length; j++) {
            if (taxList[j][0] === assetName) {
                let tax = calculateTax(data.assets[i][1], taxList[j][1]);
                // console.log(tax, '<< ini tax');
                total += tax;
                break;
            }
        }
    }
    //panggil numberToRupiah disini
    let rupiah = numberToRupiah(total);
    // console.log(rupiah, '<<hasil convert to rupiah')
    return rupiah;
}


// daftar asset yang dimiliki terdiri dari nama asset dan harga aset
// key / property / attribute
let data = {
    owner: 'Saya',
    assets: [
        ['rumah1', 6000000000],
        ['rumah2', 1000000000],
        ['rumah3', 800000000],
        ['rumah4', 400000000],
        ['mobil1', 1200000000],
        ['mobil2', 125000000],
        ['mobil3', 500000000],
        ['laptop1', 19000000],
        ['laptop2', 30000000],
        ['sepeda1', 12000000]
    ]
}

// console.log(data.assets[4])
// ['mobil1', 1200000000]

console.log(totalTax(data));
//hitung total pajak yang harus dibayar dan dijadikan format rupiah
//panggil fungsi totalTax disini dan disesuaikan parameternya