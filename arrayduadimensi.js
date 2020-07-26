let siswa=[
    ['1','Adi','Malang'],
    ['2','Budi','Sidoarja'],
    ['3','Dea','Sidoarjo']
];

console.log('No \t Nama Siswa \t Asal');
console.log('--- \t ------- \t -----');
for(let i=0;i<siswa.length;i++){
    for(let i=0;j<siswa[i].length;j++){
        process.stdout.write(siswa[i][j].toString());
        if(j<siswa[i].length-1){
            process.stdout.write(' \t  ');
        }
    }
    console.log();
}