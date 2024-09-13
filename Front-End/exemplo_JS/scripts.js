// let x = 10;
// let y = 2;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x > y);
// console.log(x < y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x == y);
// console.log(x === y);
// console.log(x != y);

let idade = window.prompt('Digite sua idade');

if (idade >= 16 && idade < 18 || idade >= 70) {
    window.alert("Seu voto é opcional");
}
else if (idade < 16) {
    window.alert("Você não pode votar ainda");
}
else{
    window.alert("Seu voto é obrigatório");
}