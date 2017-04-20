/**
 * Created by Toshiba on 28/02/2017.
 */
// Variables  ' let ' son para declarar variables locales
// Variables ' const ' son para tener una variable en modo lectura y nunca se cambia
// Siempre se tiene poner el tipo de dato despues de dos puntos de la variable ' let variable:string '
// let nombre:string = "carlos";
var numero = 123;
var booleano = true;
var hoy = new Date();
// 'todos' puede ser de cualquier tipo de variable
var todos;
//Trabajar con textos literales ` ` alt + }
var nombre = "Carlos";
var apellido = "Alatorre";
var saludo = "Hola";
//Dentro de ${ }  se pueden poner codigo javascript, puedes poner funciones etc.
var texto = saludo + " " + nombre + " " + apellido + ", tienes (20 a\u00F1os)";
// console.log(texto);
//Para poner parametros que pueden o no venir se asignan con signo de interrogacion
//antes de los dos puntos ' parametroOpcional ?: string '
//El primer parametro no puede ser opcional, tiene que ser obligatorio.
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "batiseñal"; }
    var mensaje;
    if (momento) {
        mensaje = " " + quien + " activ\u00F3 la " + objeto + " en la " + momento;
    }
    else {
        mensaje = " " + quien + " activ\u00F3 la " + objeto;
    }
    // console.log(mensaje);
}
activar("Carlos", "batiseñal");
// FUNCIONES DE FLECHA
var miFuncion = function (a) {
    return a;
};
var miFuncionF = function (a) { return a; };
var miFuncion2 = function (a, b) {
    return a + b;
};
var miFuncion2F = function (a, b) { return a + b; };
var miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var miFuncion3F = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var hulk = {
    nombre: "Hulk",
    smash: function () {
        setTimeout(function () {
            //Cuando usamos una funcion normal dentro del timeOut el "this" apunta a
            //tod0 el windows y no se centra en este objeto creado "hulk"
            //Imprime: Carlos smash!!
            console.log(this.nombre + " smash!!");
        }, 1500);
    }
};
var hulk2 = {
    nombre: "sds",
    smash: function () {
        var _this = this;
        //Imprime: Hulk smash!!
        setTimeout(function () { return console.log(_this.nombre + " smash!!"); }, 1500);
    }
};
hulk.smash();
hulk2.smash();
console.log(miFuncion("Normal"));
console.log(miFuncionF("Flecha"));
