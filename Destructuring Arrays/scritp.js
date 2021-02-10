/*let idsCarro = [1,2,6]; 
let [car1,car2,car3] = idsCarro;
console.log(car1,car2,car3); 
*/



/*let idsCarro = [1,2,6]; 
let car1, carrosF; 
[car1,...carrosF] = idsCarro;
console.log(car1,carrosF); 
*/


let idsCarro = [1,2,6]; 
let carrosF; 
[,...carrosF] = idsCarro;
console.log(carrosF); 

