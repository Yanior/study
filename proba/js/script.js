var a = 'a';
let b = 'b';
const c = 'c';

function function_scope() {
    var a = 'A';
    let b = 'B';
    const c = 'C';
    console.log('FUNCTION SCOPE: ' + a, b, c);
}

function_scope();



for (let a = 0; a < 10; a++) {
    console.log(a);
}

console.log('GLOBAL SCOPE: ' + a, b, c)