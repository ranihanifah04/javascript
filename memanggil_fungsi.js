var readline=require('readline-sync');

function kali(a,b){
    return a*b;
}

let a=parseFloat(readline.question('Masukkan Nilai A: '));
let b=parseFloat(readline.question('Masukkan Nilai B: '))
let c;
//memanggil fungsi dan menampungnya ke c
c=jkali(a,b);

console.log(`${a}x${b}=${kali(a,b)}`)