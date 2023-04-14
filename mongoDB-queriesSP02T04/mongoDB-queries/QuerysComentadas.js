
//  1.
printjson(db.restaurantes.find({}))

//  2.   No se pide el campo _id ( pero aparece por defecto)
printjson(db.restaurantes.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }))

//  3.   Aqui eliminamos el campo de _id de la consulta anterior
printjson(db.restaurantes.find({}, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }))

//  4.   Mostramos el campo dentro de la estructura address
printjson(db.restaurantes.find({}, { _id: 0, restaurant_id: 1, name: 1, borough: 1, 'address.zipcode': 1 }))

//  5.  
printjson(db.restaurantes.find({ borough: 'Bronx' }))

//  6. Limita la salida a los 5 primeros registros . ¿ serán los primeros 5 que aparecen en el fichero json cargado ?
printjson(db.restaurantes.find({ borough: 'Bronx' }).limit(5))

//  7.
printjson(db.restaurantes.find({ borough: 'Bronx' }).skip(5).limit(5))

//  8.  Entendemos que buscamos solo restaurantes por puntuacion 90 , NO HAY NINGUNO
// Yo creo que el enuciando  "además de 90."  deberia decir "más de "  {$gt:90}
printjson(db.restaurantes.find({ 'grades.score': 90 }))

//  9



//  10.


//  11.

//  14     Se Obtienes 3 restaurantes que comienzan por Wil    
printjson(db.restaurantes.find({ 'name': /^Wil/ }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })) 

//  15. 
printjson(db.restaurantes.find({ 'name': /ces$/ }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }))

//  16
printjson(db.restaurantes.find({ 'name': /Reg/ }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }))

//  17   COncretamente salen 91 restaurantes del Bronx que sirven estas gastronomias
printjson(db.restaurantes.find({ borough: 'Bronx', $or: [{ cuisine: 'American ' }, { cuisine: 'Chinese' }] }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }))

//  18
printjson(db.restaurantes.find({ borough: { $in: ['Bronx', 'Staten Island', 'Queens', 'Brooklyn'] } }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }))

//  19   Ya solo nos queda Manhatan para salir a cenar
printjson(db.restaurantes.find({ borough: { $nin: ['Bronx', 'Staten Island', 'Queens', 'Brooklyn'] } }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }))


//  25
printjson(db.restaurantes.find({}).sort({ name: 1 }))

//  26
printjson(db.restaurantes.find({}).sort({ name: -1 }))

//  27  Vi la consulta de esta sentencia en Foro. Le  he añadido el nombre porque si no se repiten filas ( o habria que agrupar)
//      Por otro lado , por lo menos al avanzar en la consola del shell ( it) a veces sale listado en formato JSON y otras el objeto en una sola linea 
//      
printjson(db.restaurantes.find({}, { _id: 0, name: 1, cuisine: 1, borough: 1 }).pretty().sort({ cuisine: 1, borough: -1 }))


//31
printjson(db.restaurantes.find({ 'name': /mon/ }, { _id: 0, name: 1, borough: 1, 'address.coord': 1, cuisine: 1 }))

// 32
printjson(db.restaurantes.find({ 'name': /^Mad/ }, { _id: 0, name: 1, borough: 1, 'address.coord': 1, cuisine: 1 }))

