/*let carro = {id:20,estilo: 'convertible'}; 
let {id,estilo} = carro;
console.log(id,estilo); 
*/


/*let carro = {id:20,estilo: 'convertible'}
let id,estilo;
{id,estilo} = carro; //Aqui hay un error
console.log(id,estilo); */




let carro = {id:20,estilo: 'convertible'}; 
let id,estilo;
({id,estilo} = carro); 
console.log(id,estilo); 

