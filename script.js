// Exercicio 01 

function ola(){
    console.log("Olá Mundo");
}
ola();

// Exercicio 02

function nome(name){
    console.log(`Olá ${name}, seja bem vindo(a)!`);
}
nome('Anderson Farias');
nome('Ana Carolina')

// Exercicio 03 

function client(nome, idade, musica){
    console.log(`Olá ${nome}, sua idade é ${idade} anos e seu gosto musical é ${musica}`);
}
client('Anderson', '28', 'rap');

// Exercicio 04 

function film (filme, music){
    console.log(`Esse é o filme: ${filme} e a musica: ${music}`);
}
film('Hulk', 'Like a stone');

// Exercicio 05

function triplo(x){
    return x*3;
}
console.log(triplo(7));

// Exercicio 06

function duo(num){

    if (num == 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(duo(1));