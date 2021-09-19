'use strict';

const mongoose = require('mongoose');

//CREAMOS UN ESQUEMA DE LOS ANUNCIOS

const adSchema = mongoose.Schema({
    name: String,
    sale: Boolean,
    price: Number,
    pic: String,
    tags: [String]
})


// AÑADO MÉTODOS QUE LLAMARÉ DESDE LA API

adSchema.statics.lista = function(filter, skip, limit, select, sort){

    const query = Ad.find(filter);
    query.skip(skip);
    query.limit(limit);
    query.select(select);
    query.sort(sort);
    query.limit(limit)// para limitar lo que aparece en pantalla
    return query.exec()
}


// CREO EL MODELO

const Ad = mongoose.model('Ad', adSchema);

// EXPORTO EL MODELO

module.exports = Ad;