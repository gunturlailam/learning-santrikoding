// 1. Percabangan (Conditional Statements)
// If Statement
// let umur = 20;

// if (umur >= 18) {
//     console.log("Kamu sudah dewasa.")
// }

// If-Else Statement
// let nilai = 70

// if (nilai >= 75) {
//     console.log("Lulus")
// } else {
//     console.log("Tidak Lulus")
// }

// if-else if-else statement
// let skor = 85

// if (skor >= 90) {
//     console.log("Nilai A")
// } else if (skor >= 80) {
//     console.log("Nilai B")
// } else if (skor >= 70) {
//     console.log("Nilai C")
// } else {
//     console.log("Nilai D")
// }

// 2. Switch Statement
// let hari = 3
// let namaHari

// switch (hari) {
//     case 1:
//         namaHari = "Senin"
//         break
//     case 2:
//         namaHari = "Selasa"
//         break
//     case 3:
//         namaHari = "Rabu"
//         break
//     default:
//         namaHari = "Hari tidak valid"
// }


// console.log(namaHari)

// 3. Perulangan (Loops)
// For Loop
// for (let i = 1; i <= 5; i++) {
//     console.log("Iterasi ke-" + i)
// }

// While Loop
// let i = 1

// while (i <= 5) {
//     console.log("Angka " + i)
//     i++
// }

// Do-While Loop
// let j = 1

// do {
//     console.log("Nomor " + j)
//     j++
// } while (j <= 5)

// 4. Break dan Continue
// Continue
// for (let i = 1; i <= 5; i++){
// if(i === 3) {
//     continue
//     }
//     console.log(i)
// }

// Break
for (let i = 1; i <= 5; i++){
if(i === 4) {
    break
    }
    console.log(i)
}