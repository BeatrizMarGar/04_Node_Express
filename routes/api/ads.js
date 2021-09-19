'use strict';

const express = require('express');
const { Admin } = require('mongoose/node_modules/mongodb');
const { distinct } = require('../../models/AnuncioMOD');
//const router = require("../items");
const router = express.Router();
const AdModel = require('../../models/AnuncioMOD')
console.log('cargando ads.js')
//DEVOLVEMOS LISTA DE ANUNCIOS
router.get('/', async (req, res, next) =>{
    console.log('procesando ruta ads')
    try{
        //Declaro el filtro -> inicialmente vacio
        const filter = {};

        const skip = parseInt(req.query.skip);
        const limit = parseInt(req.query.limit);
        const select = parseInt(req.query.select);
        const sort = parseInt(req.query.sort);

        if(req.query.name){filter.name = new RegExp('^' + req.query.name, "i")};
        console.log(filter.name)
        if(req.query.sale){filter.sale = req.query.sale};
        if(req.query.price){filter.price = req.query.price};
        if(req.query.tags){
            filter.tags = {$in: (req.query.tags).split("-")}
        };
        console.log(filter.tags)
        if(req.query.pic){filter.pic = req.query.pic};
        if(req.query.min && (req.query.max == undefined)){
            filter.price = {$gte : req.query.min}
        } else if(req.query.max && (req.query.max == undefined)){
            filter.price = {$lte : req.query.max}
        } else if(req.query.max && req.query.max){
            filter.price = {$lte : req.query.max, $gte : req.query.min}
        }
        
        let ads = await AdModel.lista(filter, skip, limit, select, sort);
        //let ads = await AdModel.lista(req.query);
    
    res.render('display_elements', {title: 'ads',anuncios: ads, filtro : filter})

}
catch (err){
        next(err)
    }

})

function addPostDataToDB(adPostData){
    const ad = new AdModel(
        { 
          //Declaro datos que guardar
          name: adPostData.name,
          sale: adPostData.sale,
          price: adPostData.price,
          pic: adPostData.pic,
          tags: adPostData.tags
      }
    );
    const createdAd = ad.save();
    return createdAd
}

function addDataValidator(data){
    let Validation = false;
    Validation = data.name !== undefined ? true : false
    Validation = data.sale !== undefined ? true : false
    Validation = data.price !== undefined ? true : false
    Validation = data.tags !== undefined ? true : false

    return Validation
}

// Crear un anuncio
router.post('/', async (req, res, next) => {
    let PostResult
    switch (true){
        case addDataValidator(req.query): 
            try {            
                PostResult = await addPostDataToDB(req.query)
                res.status(201).json({ result: PostResult });
            } catch (err) {
            next(err);
            }
            break;            
        case addDataValidator(req.body):
            try {            
                PostResult = await addPostDataToDB(req.body)
                res.status(201).json({ result: PostResult });
            } catch (err) {
            next(err);
            }
            break;            
        default:
            PostResult = 'Mising data propperly formated. No DB Entry created' 
            res.status(201).json({ result: PostResult });   
            break;
    }
    
  });
  
// Borrar todos los anuncios
router.delete('/', function (req, res, next) {
    console.log('id recibida: '+req.query.id)
    AdModel.remove({_id:req.query.id}, function (err) {
        if (err) {
            return next(err);
        }
        res.json({success: true});
    });
});

router.get('/tags', async function(req, res, next){
    
    const filter = {};
    const tags = req.query.tags;

    if(tags){
        filter.tags = tags;
    }

    let tags_ads = await AdModel.distinct("tags");
    res.render('tags_view', {title: 'tags', tags: tags_ads})
})

module.exports = router;