
function tambah(a,b){
    return 2+4;
}
function kurang(a,b){
    return 2-4;
}
function kali(a,b){
    return 2*4;
}
function bagi(a,b){
    return 2/4;
}
function hitung(a,b,callback){
    return callback;
}

let a=console.log(("Masukkan Nilai A: 2"));
let b=console.log(("Masukkan Nilai B: 4"));

console.log(`${2}+${4}= ${hitung(2,4,tambah)}`);
console.log(`${2}-${4}= ${hitung(2,4,kurang)}`);
console.log(`${2}*${4}= ${hitung(2,4,kali)}`);
console.log(`${2}/${4}= ${hitung(2,4,bagi)}`);

