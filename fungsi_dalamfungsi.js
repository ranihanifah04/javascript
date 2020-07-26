let readline=require('readline-sync');

function hipotenusa(a,b){
    //fungsi lokal
    function kuadrat(x){
        return x*x;
    }
    //memanggil fungsi lokal
    return c=Math.sqrt(kuadrat(a)+kuadrat(b));

}

console.log("Menghitung Sisi Miring Segitiga Siku-Siku");
let a=parseFloat(readline.question("Masukkan Nilai Alas: "));
let b=parseFloat(readline.question("Masukkan Nilai Tinggi: "));

var c=hipotenusa(a,b);

console.log(`Sisi Miring = ${c}`);