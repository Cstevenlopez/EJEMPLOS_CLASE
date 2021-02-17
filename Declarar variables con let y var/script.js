
console.log(id_carro); 
let id_carro = 42;// da error
var id_carro = 42;  //no da error

if(true)
{ 
	var id_carro = 9;
} 
console.log(id_carro);// imprime 9 

if(true)
{ 
	let id_carro = 9;
} 
console.log(id_carro);// da error por que la variable no esta accesible


