var globalVar = 100;

function f(){
    var localVar = 200;

    console.log("Memanggil Variabel di dalam fungsi");
    console.log("globalVar:"+globalVar);
    console.log("localVar:"+localVar);
}

f();

console.log("\n memanggil Variabel di luar fungsi");
console.log("globalVar:"+globalVar);