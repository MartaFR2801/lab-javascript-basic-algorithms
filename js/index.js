//Iteración 1: nombres y entrada
let hacker1 = "Natalia";
console.log ("The driver´s name is" +" " + hacker1);

const hacker2 = "Pepe";
console.log ("The navigator´s name is" +" " + hacker2);

//Iteración 2: Condicionales
if (hacker1.length > hacker2.length ) {
    console.log(`The driver has the longest name it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)

} else {
    console.log("son iguales")

}

//Interacción 3: Bucles
//Natalia es el conductor
const nameToUpperCase = hacker1.toUpperCase() ;
console.log(hacker1.toUpperCase());

let result = " ";
for (let i = 0; i <= hacker1.legnth; i++ ) {
    console.log(hacker1[i])
  }
 console.log(result + hacker1.length);
  //3.2
  function reverse(NATALIA) {
    return NATALIA.split("").reverse().join("");
   }
   let NATALIA = reverse("AILATAN")
   console.log(NATALIA)
//3.3
function ordenarTexto(The drivers name goes first.) {
    if (typeof The drivers name goes first. != "string"){
        throw TypeError(" El argumento debe de ser una cadena de caracteres");

    }
} return["The drivers name goes first"].sort((a,b) => a.localeCompare(b)).join()
try {

} catch (e) {
    console.log("Error:")
}
//me quedo aqui porque no se y estoy buscando por google, pero creo que la estoy liando mas