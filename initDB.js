'use strict'

const mongoose = require('mongoose');
const connectDB = require('./lib/connectMongoose');
const AdModel = require('./models/AnuncioMOD');
const NewAds = require('./CreatedAds.json');


async function InitAds() {
   
    const remove = await AdModel.deleteMany();
    console.log(`Eliminados ${remove.deletedCount}`);
  
    // CREO ANUNCIOS INICIALES
    const ads = await AdModel.insertMany(NewAds.CreatedAds);
    console.log(`Creados ${ads.length} anuncios.`);
}


main().catch(err => console.log('Hubo un error', err));

  
async function main() {
    await InitAds();
    connectDB.close();
}
