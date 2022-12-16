// PROBLEMA 1:

// En la clase de hoy, solo vamos a tener permitidas 10 preguntas ya que el tiempo es un poco corto... Tendremos que decirle a JavaScript que ejecute un codigo para facilitarnos el trabajo y poder mostrar en pantalla y en consola los nombres de los 10 alumnos afortunados que podrán consultar 😉😉

// 😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎

// PROBLEMA 2:

//Crear un sistema que pida un nombre al usuario. Una vez que se pide el nombre, saludar al usuario y avisarle que para salir debe escribir la palabra "SALIR".

//Explicar si hay tiempo toLowerCase y toUpperCase

// 😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎

// PROBLEMA 3:

// Crear un sistema que pida AL MENOS una vez el nombre al usuario. El nombre del usuario, en un principio NO debe existir (osea su valor seria falso). Cuando es consultado, si el nombre continua sin existir se debe salir del ciclo y si el nombre del usuario EXISTE, se debe saludar y volver a preguntar por como se llama.


// 😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎


// PROBLEMA 4:


// EJEMPLO RIFA PARA SORTEO:

// Voy a sortear entre las personas que estan presentes (20 personas) un 10 como calificación final del curso.
// De los numeros de la rifa (20), el numero 3 es mi favorito por lo que decidí reservarlo para mi y no lo puede comprar otra persona... Los demás números se van a ir asignando en orden (El primero va a recibir la rifa 1, el segundo la rifa 2, etc)

// *** Hacer un ciclo que nos facilite la entrega de los numeros de la rifa***
// *** Saltear el numero 3 que ya fue reservado ***
// *** Mostrar los resultados por consola***


// 😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎

// PROBLEMA 5:

// Somos profesores de matematicas de primario y estamos teniendo un problema... A nuestros alumnitos les esta costando muchisimo aprenderse las tablas de multiplicar.
// Al mismo tiempo, notamos que a ellos les encantan las computadoras y se nos ocurre una brillante idea 💡💡 : ENSEÑARLES LAS TABLAS CON LA COMPUTADORA!!

//Para eso, vamos a necesitar crear un sistema que le pregunte a los chicos de que numero quieren conocer la tabla de multiplicar y hacer un ciclo que nos evite ir haciendo los calculos uno por uno. 


//😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎

// PROBLEMA 6 : 

//Crear un sistema que pregunte AL MENOS 1 VEZ al usuario para que ingrese su edad (numero)... Si el usuario en esa vez ingresa algo que no sea un numero, detener la ejecución.


//😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎


//😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎



// PROBLEMA 7 IMPOSIBLE 😬😬 
// Si lo lográs hacer, tenes un 10 en el curso y el equipo de Emtech se va a comunicar con Google para que te contraten 👨‍💻😎


// En este problema, queremos crear una "computadora" o sistema que nos permita pedirle algunos datos al usuario a partir de ciertas opciones y con esos datos, hacer algunas cosas.

// Las opciones que tiene el menu principal de nuestro sistema son:
// OPCION 1. Pedirle el nombre al usuario
// OPCION 2. Pedirle el apellido al usuario
// OPCION 3. Mostrar el nombre completo del usuario
// OPCION 4. Pedirle al usuario un numero y mostrar todas las potencias de ese numero HASTA 1000 (el 1000 no debe quedar incluido)
// OPCION 5. Pedir al usuario que ingrese un numero para mostrarle todos los numeros pares, desde el 1 hasta el numero que el decida. 

// El usuario solo podrá salir del ciclo solo si ingresa la palabra "ESC" (si lo hace, debemos despedirlo con un "Hasta pronto!" 😊) . En caso de ingresar cualquier otra cosa (espacio en blanco, un numero cualquiera que no sea 1 a 5, texto o lo que sea que no este dentro de las opciones), deberá aparecerle un mensaje alertandolo que su respuesta es invalida para el sistema y deben volver a aparecerles las 5 opciones del menu principal. 

let opciones;

do{
    opciones = parseInt (prompt(`Elige una opción \n1. Nombre del usuario \n2. Apellido del usuario
3. Mostrar Nombre \n4.Potencias de x número \n5.Numeros Pares`));
     
    switch(opciones){
        case 1:
            break;
    }
} while(opciones <1 || opciones >5 );
