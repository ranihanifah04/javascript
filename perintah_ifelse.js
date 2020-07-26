var readline=require('readline-sync');

var x= parseFloat(readline.question('Masukkan nilai x: '));
var y= parseFloat(readline.question("Masukkan nilai y: "));
var z;

if(y===0){
    console.log('Kesalahan: Nilai y tidak boleh nol');
    process.exit(1);
    //process.exit(1);
}
z=x/y;
console.log(`${x}/${y}=${z}`);
