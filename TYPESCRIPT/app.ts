/**
 * Created by Toshiba on 28/02/2017.
 */

// Variables  ' let ' son para declarar variables locales

// Variables ' const ' son para tener una variable en modo lectura y nunca se cambia

// Siempre se tiene poner el tipo de dato despues de dos puntos de la variable ' let variable:string '

// let nombre:string = "carlos";
let numero:number = 123;
let booleano:boolean = true;

let hoy:Date = new Date();

// 'todos' puede ser de cualquier tipo de variable
let todos:any;

//Trabajar con textos literales ` ` alt + }

let nombre:string = "Carlos";
let apellido:string = "Alatorre";

let saludo:string = "Hola";

//Dentro de ${ }  se pueden poner codigo javascript, puedes poner funciones etc.

let texto = `${saludo} ${nombre} ${apellido}, tienes (20 años)`;

// console.log(texto);

//Para poner parametros que pueden o no venir se asignan con signo de interrogacion
//antes de los dos puntos ' parametroOpcional ?: string '

//El primer parametro no puede ser opcional, tiene que ser obligatorio.
function activar( quien:string,
                  objeto:string = "batiseñal",
                  momento?:string){
    let mensaje:string;

    if(momento){
        mensaje = ` ${ quien } activó la ${objeto} en la ${momento}`;
    }else{
        mensaje = ` ${ quien } activó la ${objeto}`;
    }
    // console.log(mensaje);
}

activar("Carlos", "batiseñal");


// FUNCIONES DE FLECHA

let miFuncion = function ( a ) {
    return a;
};
let miFuncionF = ( a ) => a;

let miFuncion2 = function (a:number, b:number) {
    return a + b;
}

let miFuncion2F = ( a:number, b:number) => a + b;

let miFuncion3 = function (nombre:string) {
    nombre = nombre.toUpperCase();
    return nombre;
}

let miFuncion3F = (nombre:string) => {
    nombre = nombre.toUpperCase();
    return nombre;
}


let hulk = {
    nombre: "Hulk",
    smash(){
        setTimeout( function () {
            //Cuando usamos una funcion normal dentro del timeOut el "this" apunta a
            //tod0 el windows y no se centra en este objeto creado "hulk"
            //Imprime: Carlos smash!!
            console.log(this.nombre + " smash!!");
        }, 1500)
    }
};

let hulk2 = {
    nombre: "sds",
    smash(){
        //Imprime: Hulk smash!!
        setTimeout( () => console.log(this.nombre + " smash!!"), 1500);
    }
};


hulk.smash();
hulk2.smash();

console.log(miFuncion("Normal"));
console.log(miFuncionF("Flecha"));