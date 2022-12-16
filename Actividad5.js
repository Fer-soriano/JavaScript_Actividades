//string
let nombre = "Maria Fernanda ";
let megusta = "Los gatos"

//Number
let edad = 23;
let x = 5;
let y = 12;

//Bolean
let verdadero = true;
let falso = false;

//undefined 
let indefinido = undefined;


//interpolación de texto:
console.log(`Hola mundo, mi nombre es ${nombre} y tengo ${edad} años, me gustan ${megusta}`);

console.log(x*y);

console.log(y += x);

console.log(x != y);


/*Ejemplo de clase */
//prompt pedi datos al usuario */
let alumnos = 1;

for(alumnos; alumnos <= 10; alumnos++){
    let nombrealumno = prompt ("como te llamas?");
    console.log("El alumno se llama  " + nombrealumno + " va hacer la consulta " + alumnos )
}