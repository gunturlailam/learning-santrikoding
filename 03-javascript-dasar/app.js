// 1. Tipe Data Primitive
// String
let nama = "Guntur Lailam Yuro"

console.log(nama)

// Number
let umur = 24;

let tinggi = 183;

// Boolean
let isOnline = true
let isLogin = false

// Undefined
let alamat
console.log(alamat)

// Null
let data = null

// Symbol
let id = Symbol('id')

// BigInt (ES11)
let angkaBesar = 123456789012345678901234567890n


// 2. Tipe Data Non-Primitive
// Object
let mahasiswa = {
    nama: "Guntur Lailam Yuro",
    umur: 21,
    jurusan: "Sistem Informasi"
}

// Array
let buah = ["Apel", "Jeruk", "Mangga"]

// Function
function sapa() {
    console.log("Halo semuanya!")
}

// Mengetahui Tipe Data
console.log(typeof "Hello") // string
console.log(typeof 100) // number
console.log(typeof true) // boolean
console.log(typeof {}) // object
console.log(typeof []) // object (array tetap dianggap object)
console.log(typeof null) // object (ini bug lama di JavaScript)
console.log(typeof function(){}) // function