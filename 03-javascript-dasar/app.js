// Function Sederhana
// function sayHello () {
//     console.log("Hello World!")
// }

// sayHello()

// Function Parameter
// function greet(nama) {
//     console.log("Halo, " + nama + "!")
// }

// greet("Dedy")
// greet("Fadly")

// Function Return Value
// function tambah(a, b) {
//     return a + b
// }

// let hasil = tambah(8, 2)
// console.log(hasil)

// Function Expression
// const kali = function(a, b){
//     return a * b
// }

// console.log(kali(8,2))

// Contoh Lengkap
function hitungLuasPersegi(sisi) {
    return sisi * sisi
}

const hitungKelilingPersegi = function(sisi) {
    return 4 * sisi
}

console.log(hitungLuasPersegi(6))
console.log(hitungKelilingPersegi(6))