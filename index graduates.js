// var nama = "ali";
// var nilai = 100;
// var absen = 5;

// // your code here


// if (nilai >= 70 && absen < 5 ){
//     console.log("nama murid " + " " + nama + " lulus");
// }
//   else {((nilai < 70 && absen >= 5)) 
//     console.log("nama murid " + nama + " tidak lulus");
// } 


// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//      day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
// }


/**
 * Seorang gamer direpresntasikan oleh JavaScript memiliki variable nama dan peran. Ia ingin masuk ke dalam permainan, namun permainan itu memiliki kondisi sebagai berikut:
 * 
 * 1. Jika nama tidak ada tampilkan di terminal "Nama harus diisi"
 *    Jika nama tidak kosong lanjut ke step ke 2
 * 2. Jika peran tidak ada tampilkan di terminal "Hello `nama`, Pilih peranmu untuk memulai game!"
 *    Jika Peran tidak kosong lanjut ke step ke 3
 * 3. Jika peran 'ksatria' maka tampilkan "Selamat datang di Arcadia, `nama`"
 *    Tampilkan juga "Helo `peran` `nama`, kamu dapat menyerang dengan pedangmu"
 * 4. Jika peran 'tabib' maka tampilkan "Selamat datang di Arcadia, `nama`"
 *    Tampilkan juga "Helo `peran` `nama`, kamu akan membantu temanmu yang terluka"
 * 5. Jika peran 'pemanah' maka tampilkan "Selamat datang di Arcadia, `nama`"
 *    Tampilkan juga "Helo `peran` `nama`, kamu dapat menyerang dengan panahmu"
 * 6. Jika peran bukan dari ketiga itu maka tampilkan "hallo `nama`, peran yang dapat kamu pilih adalah ksatria, tabib, atau pemanah"
 */


 var name = 'Rafi'
 var peran = 'Pemanah'

 switch (name) {
    case value:
         console.log('Nama harus diisi')
         break;
    case value:
        console.log('Hello' + name + ',Pilih peranmu untuk memulai game!')
    case value:
            console.log('Selamat datang di Arcadia,' + name) 
        break;  
    case value:
        console.log('Selamat datang di Arcadia,' + name)
        break;
    default:
        console.log('Hello' + name + ', peran yang kamu pilih adalah ksatria, tabib. atau pemanah')
    
 }