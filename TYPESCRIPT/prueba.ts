/**
 * Created by Toshiba on 01/03/2017.
 */
function consola(constructor:Function){
    console.log(constructor)
}

@consola
class Villano{
    constructor (public nombre:string){

    }
}