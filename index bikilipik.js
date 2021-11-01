/*
Your pseudocode here

Judul
Bikilipik-Discount

Deskripsi
var name = string
var role = string
var birthMonth = string 

Implementasi
READ bilangan
IF pengunjung(kosong) THEN
    PRINT “name tidak boleh kosong”
ELSE IF pengunjung adalah (member baru) and birthmonth(january) THEN 
    PRINT Selamat + name + Anda berhak mendapatkan voucher diskon sebesar 50%!
ELSE IF pengunjung adalah(member lama) and birthmonth(january) THEN 
    PRINT Selamat + name + Anda berhak mendapatkan voucher diskon sebesar 30%!
ELSE IF pengunjung adalah(belum terdaftar)
    PRINT 'Selamat datang di Bikipilik, ' + name + ' Mohon maaf untuk mendapatkan voucher diskon, anda wajib mendaftar dahulu.'
ELSE 
    'Maaf ' + name + ' voucher diskon hanya untuk yang lahir di bulan Januari.'

 
 
 
 
 f
   */



var nama = "aji"
var role = 'member baru'
var birthMonth = 'Febuary'
//  your code here

if (!nama) {
    console.log("name tidak boleh kosong!");
} else if (role === "member baru" && birthMonth === "Januari") {
    console.log(`Selamat ${nama} Anda berhak mendapatkan voucher diskon sebesar 50%!`);
}
else if (role === "member lama" && birthMonth === "Januari") {
    console.log('Selamat ' + nama + ' Anda berhak mendapatkan voucher diskon sebesar 30%!')
}
else if (role === "member baru" && birthMonth === "Febuary") {
    console.log('Selamat ' + nama + ' Anda berhak mendapatkan voucher diskon sebesar 10%!')
}
else if (role === "belum terdaftar") {
    console.log('Selamat datang di Bikipilik, ' + nama + ' Mohon maaf untuk mendapatkan voucher diskon, anda wajib mendaftar dahulu.')
}
else {
    console.log('Maaf ' + nama + ' voucher diskon hanya untuk yang lahir di bulan Januari.')
}
