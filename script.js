/**
 * funcion principal para el evento calculkar
 */
const calculo = document.getElementById('calcular');
calculo.addEventListener('click', () => {
    const bisiesto =  (esBisiesto(year)) ? 'año bisiesto' : 'año no bisiesto'
    mostrarResultado(bisiesto);
})

/**
 * muestra el resultado obtenido de la funcion tomarFecha() //line 40
 * para mostrarlo junto con el año bisiesto
 * @param {*} bisiesto toma una funcion para verificar si el año es bisiesto
 */
const mostrarResultado = (bisiesto) => {
    const diaNombre = tomarfecha()
    switch (diaNombre) {
        case 'Lunes':
        case 'Martes':    
        case 'Miercoles':
        case 'Jueves':
        case 'Viernes':
            mostrarDia(`${diaNombre}, dia laborable con ${bisiesto}`)
            break;
        case 'Sabado':
        case 'Domingo':
            mostrarDia(`${diaNombre}, dia no laborable con ${bisiesto}`)
            break;
        default:
            console.log('Error: function -> mostrarDiaYAnio')
            break;
    }
}
/**
 * toma qualquier id y obtiene su valor conviendolo en entero
 * @param {*} IDDato #Id de algun tag
 * @returns retorna ek mismo valor del id convertido a entero
 */
const tomarDatos = (IDDato) => parseInt(document.getElementById(IDDato).value)
/**
 * inserta el output al tag con el id 'resultado'
 * @param {*} output Cualquier tipo de dato
 * @returns devuelve el output por medio de innerHTML
 */
const mostrarDia = (output) => document.getElementById('resultado').innerHTML = output;

/**
 * Con la funcion tomarDatos() obtiene los datos del dia mes y año
 * para buscar su dia de la semana correspondiente
 * @returns 'Domingo'|'Lunes'|'Martes'|'Miercoles'|'Jueves'|'Viernes'|'Sabado'
 */
const tomarfecha = () => {
    const day = tomarDatos('day');
    const month = tomarDatos('month');
    const year = tomarDatos('year');
    const diasSemana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']
    const fecha = new Date(year,month-1,day)
    const diaSemana = diasSemana[fecha.getDay()]
    return diaSemana;
}
/**
 * Calcula si el año es bisiesto
 * @param {*} year Tipo de dato: entero de 4 digitos
 * @returns True || False
 */
function esBisiesto(year) {
    return( (year % 4 === 0 && 100 != 0) || (year % 100 === 0 && year % 400 === 0) );
}