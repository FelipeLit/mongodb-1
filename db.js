db.createCollection('user')

db.user.insertMany([{
    nombres: "pedro",
    apellidos: "perez",
    correo: "pedro@gmail.com",
    genero: "M",
    edad: 20
    },
    {
    nombres: "juan",
    apellidos: "mosalve",
    correo: "juan@gmail.com",
    genero: "M",
    edad: 23
    },
    {
    nombres: "luis",
    apellidos: "rosa",
    correo: "luis@gmail.com",
    genero: "M",
    edad: 30
    },
    {
    nombres: "ana",
    apellidos: "rios",
    correo: "ana@gmail.com",
    genero: "F",
    edad: 28
    },
    {
    nombres: "romeo",
    apellidos: "florez",
    correo: "romeo@gmail.com",
    genero: "M",
    edad: 20
    },
    {
    nombres: "luisa",
    apellidos: "jaramillo",
    correo: "luisa@gmail.com",
    genero: "F",
    edad: 26
    },
    {
    nombres: "ferney",
    apellidos: "trujillo",
    correo: "ferney@gmail.com",
    genero: "M",
    edad: 35
    },
    {
    nombres: "marina",
    apellidos: "rios",
    correo: "marina@gmail.com",
    genero: "F",
    edad: 39
    },
    {
    nombres: "javier",
    apellidos: "gallego",
    correo: "javier@gmail.com",
    genero: "M",
    edad: 45
    },
    {
    nombres: "andrea",
    apellidos: "rios",
    correo: "andrea@gmail.com",
    genero: "F",
    edad: 45
    },
]);

db.user.find(); //ver la coleccion


db.user.find({edad:{$eq: 20}})//igual que
db.user.find({edad:{$ne: 20}})//negacion
db.user.find({edad:{$gt: 20}})//mayor que
db.user.find({edad:{$lt: 20}})//menor que
db.user.find({edad:{$gte: 20}})//mayor igual que
db.user.find({edad:{$lte: 20}})//menor igual que
db.user.find({edad:{$in: [5,10,45]}})//si contiene o no los valores
db.user.find({edad: {$nin: [35,39,45]}})//traigame la dat que no contenga estos valores
db.user.find({edad: {$exists: true}})//comando donde existe o no existe un campo
db.user.find({nombres: {$regex: /^marina/}})//buscar un datos con los valores

db.user.find(
    {$and:
        [
            {edad: {$gt: 20}},
            {edad: {$lt: 30}}
        ]
    }); //es un if con un and

db.user.find(
    {$or:
        [
            {edad: {$gt: 20}},
            {edad: {$lt: 30}}
        ]
    }); //es un if con un or

//agregar campo pais a toda la coleccion
db.user.updateOne(
    {_id: ObjectId('65f393c556e2cdb02a67402a')},
    {$set: {
        pais: "italia"
    }}
);
    
//actividad de clase
//1. todos los usarios que sean mayores de 18 años
db.user.find({edad: {$gt: 18}})

//2.obtener los usarios que sean de londres o de paris
//vamos agrgar un campo PAIS a 4 usuarios
db.user.updateMany(
    {_id: ObjectId('65f393c556e2cdb02a67402e')},
    {$set: {
        pais:"londres"
    }},
    {_id: ObjectId('65f393c556e2cdb02a67402d')},
    {$set: {
        pais: "londres"
    }}
);

//actualizar todos
db.user.updateMany(
    {},
    {$set: {
        pais:"paris"
    }}
);

//desarrollo 2
db.user.find(
    {$or:
        [
            {pais: {$eq: "londres"}},
            {pais: {$eq: "paris"}}
        ]
    }
);

//3. obtener usuarios que ganen mas de 200 al mes y tengan menos de 30 años
db.user.find(
    {$and:
        [
        {edad: {$lte: 30}},
        {salario: {$gt: 2000}}
        ]
    }); 

db.user.insertOne({
    nombres: "pedro",
    apellidos: "perez",
    correo: "pedro@gmail.com",
    genero: "M",
    edad: 29,
    salario: 2500
    }
)
//eliminar un registro de una coleccion
db.user.deleteOne({_id: ObjectId("id")});

//4. obtener todos los usarios que sean de España y ganen mas de 3000 al mes
//agregando España a un registro
db.user.updateOne(
    {_id: ObjectId('65f4a2a16b80297bccc61709')},
    {$set: {
        salario:  3500
    }}
)

//desarrollo del ejercicio
db.user.find(
    {$and:
        [
            {pais: {$eq: "españa"}},
            {salario: {$gte: 3000}}
        ]
    }
);


//5. obtener todos los usarios entre 25 y 35 años
db.user.find(
    {$and:
        [
        {edad: {$gte: 25}},
        {edad: {$lte: 35}}
        ]
    }
);

//6. obtener todos los usarios que no sean de EE.UU

//agregando estados unidos al rewgistro de un usuarios
db.user.updateOne(
    {_id: ObjectId('65f4a2a16b80297bccc61709')},
    {$set:{pais: "estados unidos"}}
)

db.user.find();

//desarrollo dej ejercicio
db.user.find(
    {pais: {$nin: ["estados unidos"]}})

//7. usarios de londres y que ganen mas de 2500 or tengan mas de 30años

//añadiendo usarios con esas caracteristicas
db.user.updateOne(
    {_id: ObjectId('65f393c556e2cdb02a674032')},
    {$set:{
        pais: "londres",
        edad: 32,
        salario: 2000
    }}
)

//desarrollo del ejercicio
db.user.find({
    pais: "londres",
    $or: [
        { salario: { $gte: 2500 } },
        { edad: { $gte: 30 } }
    ]
})

//8. obtener los usarios de australia y tengan un peso mayor a 140libras

//agregando usuarios con las caracteristicas
db.user.updateOne(
    {_id: ObjectId('65f393c556e2cdb02a67402d')},
    {$set:{
        pais: "Australia",
        peso: 133
    }}
)

//desarrollo del ejercicio
db.user.find(
    {pais: "Australia", peso: {$gte: 130}}
)

// 9. obtener todos los usuarios que no sean de londres ni paris

db.user.find(
    {pais: {$nin: ["londres", "paris"]}}
)

//10. usaurios que ganen mas de 2000 al mes o tengan mas de 40 años

//agregando resgitros con las caracteristicas

db.user.updateOne(
    {_id: ObjectId('65f4ac1dbb1af0958c1acb3f')},
    {$set:{salario: 2080}}
)

//desarrollo del ejercicio
db.user.find(
    {$or:
        [{salario: {$gte: 2000}}, {edad: {$gte: 40}}]
    }
)

//11. usuarios de canada & ganen  mas de $4000 o tengan una altura mayor a 180cm

//agregando regsitros con las caracteristicas
db.user.updateOne(
    {_id: ObjectId('65f4ac1dbb1af0958c1acb3f')},
    {$set:{
        pais: "canada",
        altura: 165,
        salario: 4500
    }}
);

db.user.find();

//desarrollando el ejercicio
db.user.find({
    pais: "canada",
    $or:
    [
        {salario: {$gte: 4000}}, 
        {altura: {$gte: 180}}
    ]
});

//12. usuarios de italia y tengan entre 20 y 30 años

//agregando usuarios con las caracteristicas
db.user.updateOne(
    {_id: ObjectId('65f393c556e2cdb02a67402d')},
    {$set:
        {pais: "italia"},
    }
);

db.user.find({
   pais: "italia",
   edad:{$gt: 20},
   edad: {$lt: 30}
})

//13. usaurios que no tengan correos registrados

//eliminar correo 
db.user.updateOne({_id: ObjectId('65f393c556e2cdb02a67402a')}, 
{$unset: {correo:"pedro@gmail.com"}})

//desarrollo el ejercicio

db.user.find(
    {correo : {$exists: false}}
)

//14. obtener todos los usuarios que sean de Francia y que su salario este entre 3000 y 5000

//update regsitros para que cumpla condiciones
db.user.updateOne(
    {_id: ObjectId('65f393c556e2cdb02a67402e')},
    {$set:
        {salario: 4500}
    }
)

//desarrollo del ejercicio
db.user.find({
    pais: "francia",
    salario: {$gt: 3500},
    salario: {$lt: 5000}
    }
)

//15. obtener usuarios que sean de Brasil ytenga un peso menor a 120 libras o mayor 140 libras
//update regsitros para que cumpla condiciones
db.user.updateOne(
    {_id: ObjectId('65f393c556e2cdb02a674031')},
    {$set:
        {pais: "brasil",peso: 145},
        
    }
)

//desarrollo dej ejercicio
db.user.find(
    {pais: "brasil",
    $or:[
        {peso: {$lt:120}},
        {peso: {$gt: 140}}
    ]
    }
)

//16. registros de argetina o chile y tengan edad menor a 25

//update regsitros para que cumpla condiciones
db.user.updateOne(
    {_id: ObjectId('65f4ac1dbb1af0958c1acb37')},
    {$set:
        {pais: "chile"}
    }
)

db.user.find(
    {edad: {$lt: 25},
    $or:[
        {pais: {$eq: "chile"}},
        {pais: {$eq: "argentina"}}
    ]
    }
)

//17. usarios que no sean ni de españa ni de mexico y ganen menos de 3000 al mes

db.user.find({
    pais: {$nin: ["españa", "mexico"]},
    salario: {$lt: 3000}
})

//18. usarios de Alemania y salrio menos a 4000 o edad mayor a 35 años

//update regsitros para que cumpla condiciones
db.user.updateOne(
    {_id: ObjectId('65f4ac1dbb1af0958c1acb3c')},
    {$set:
        {pais: "alemania", edad: 38}
    }
)

//dearrollo ejercicio
db.user.find(
    {pais: "alemania",
    $or: [
        {salario: {$lt: 4000}},
        {edad: {$gt: 35}}
    ]
})

//19. usarios que no sean de colombia y eastura menor a 170

db.user.find({
    pais: {$nin: ["colombia"]},
    altura: {$lt: 170}
})

//20. usaurios de india y no tengan salario

db.user.find({
    pais: {$eq: "india"},
    salario: {$exists: false}
})



