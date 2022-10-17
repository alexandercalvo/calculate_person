let numero_personas=7;
let numero_habitaciones=4;
let numero_adultos=2;
let numero_ninos=2;
let habitaciones= [7, 9,2, 4, 6, 8 ,9];
habitaciones = habitaciones.sort();
let objetos = [
    {  id: 7865660768494, title: 'paraiso-cafetero', handle: 'paraiso-cafetero', description: '<p><span data-mce-fragment="1">El hotel Campestre …ealizar la compra. Montenegro, Quindío</span></p>', published_at: '2022-08-12T20:22:59-05:00', capacity: 4, }, 
    {id: 7865661882606, title: 'DECAMERON HELICONIAS', handle: 'decameron-heliconias', description: '<p><span data-mce-fragment="1">Con una hermosa arq…lizar la compra.​ ​Quimbaya, Quindío.​</span></p>', published_at: '2022-08-12T20:41:09-05:00' ,capacity: 2},
    {id: 7865659850990, title: 'cafe cafe', handle: 'cafe-cafe-1', description: '<p><span>El Hotel Campestre Café Café es un paraís…lizar la compra. Pueblo Tapao, Quindío</span></p>', published_at: '2022-08-12T20:15:09-05:00', capacity: 3 },
  
    {id: 7865661194478, title: 'FINCAS PANACA', handle: 'fincas-panaca', description: '<p class="mt-2 text-justify" data-mce-fragment="1"…ntes de realizar la compra. Quimbaya, Quindío</p>', published_at: '2022-08-12T20:28:51-05:00', capacity: 5 },

    {id: 7865660834030, title: 'LOMA VERDE', handle: 'loma-verde', description: '<p><span data-mce-fragment="1">Su nombre surge com… realizar la compra. Quimbaya, Quindío</span></p>', published_at: '2022-08-12T20:23:51-05:00', capacity: 7 },
   
    {id: 7865661620462, title: 'DECAMERON PANACA', handle: 'decameron-panaca', description: '<p><span data-mce-fragment="1">Con una infraestruc…alizar la compra.​ Quimbaya, Quindío.​</span></p>', published_at: '2022-08-12T20:35:07-05:00', capacity: 2 },
   
    {id: 7865660244206, title: 'LA ESPERANZA', handle: 'la-esperanza', description: '<p><span data-mce-fragment="1">Es un hotel creado …ealizar la compra. Montenegro, Quindío</span></p>', published_at: '2022-08-12T20:18:49-05:00', capacity: 6 },
  
    {id: 7872763166958, title: 'hotel-prueba', handle: 'hotel-prueba', description: '<div style="text-align: center;"><img src="https:/…0b1-50ea9ed99833_480x480.jpg?v=1660322215"></div>', published_at: '2022-08-20T11:37:21-05:00', capacity: 2 },

    {id: 7872763232494, title: 'hotel-prueba3', handle: 'hotel-prueba3', description: '<div style="text-align: center;"><img src="https:/…onverterHotel-20_480x480.jpg?v=1658776321"></div>', published_at: '2022-08-20T11:37:49-05:00', capacity: 3 },
    
    {id: 7872763363566, title: 'hotel-prueba4', handle: 'hotel-prueba4', description: '<div><img src="https://cdn.shopify.com/s/files/1/0…onverterHotel-19_480x480.jpg?v=1658776252"></div>', published_at: '2022-08-20T11:38:13-05:00', capacity: 5 },
 
    {id: 7872774439150, title: 'hotel-prueba4', handle: 'hotel-prueba4-1', description: '<div style="text-align: center;"><img src="https:/…ucts/helicoias13_480x480.jpg?v=1660354872"></div>', published_at: '2022-08-20T11:43:02-05:00', capacity: 9 },
 
    {id: 7869853925614, title: 'ficticio', handle: 'ficticio', description: '<img class="principal" src="https://cdn.shopify.co…4969-80b1-50ea9ed99833_480x480.jpg?v=1660322215">', published_at: '2022-08-17T14:30:05-05:00', capacity: 9 },
 
    {id: 7872253296878, title: 'Hoteles Urbanos', handle: 'hoteles-urbanos', description: '', published_at: '2022-08-19T10:41:41-05:00', capacity: 3 },
    
    {id: 7872253493486, title: 'Hoteles Rurales', handle: 'hoteles-rurales', description: '', published_at: '2022-08-19T10:42:10-05:00', capacity: 2 }]

    console.log(objetos)
    let habitacionesOrdnds = objetos;
    console.table(habitacionesOrdnds )
    let arrgloOrdenado = habitacionesOrdnds.sort((uno, dos)=>uno.capacity - dos.capacity);
    console.table(arrgloOrdenado )


let capacidad_ideal =Math.floor( numero_personas / numero_habitaciones)
console.log("la capacidad es "+ capacidad_ideal)


const existHabitacion_capacidad_ideal = (capacidad_ideal) =>{
    let exist=false;
 
    habitaciones.find((hbitacion)=>{
        if(hbitacion==capacidad_ideal){ 
            exist = true;
        }

    });
return exist;
}


const existHabitacion_capacidad_similar = (capacidad_ideal) =>{
   return   habitaciones.find(habitacion=>habitacion >= capacidad_ideal);

}

if(existHabitacion_capacidad_ideal(capacidad_ideal)){
    numero_habitaciones= numero_habitaciones -1;
    numero_personas = (numero_personas - capacidad_ideal);
    console.log("es una habitacion")
}else{
    numero_habitaciones= numero_habitaciones -1,
    console.log("la capacidad", capacidad_ideal);
    numero_personas= numero_personas- existHabitacion_capacidad_similar(capacidad_ideal);
    console.log(existHabitacion_capacidad_similar(capacidad_ideal))
    console.log( "el nuevo número de personas es ", numero_personas)
         
}


