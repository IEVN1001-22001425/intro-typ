//importar metodos 

import { calcularIVADos} from "./05-desestructuracion-funciones";

import type { Producto } from "./05-desestructuracion-funciones";

const  carrito:Producto[]= [
    {
        nombre: 'Iphone 14',
        precio: 1500
    },
    {
        nombre: 'Ipad Air',
        precio: 900
    },
    {
        nombre: 'Macbook',
        precio: 6000
    }
];
const [total, iva] = calcularIVADos(carrito);
console.log(`EL total es: ${total}`);
console.log(`El iva es ${iva}`);