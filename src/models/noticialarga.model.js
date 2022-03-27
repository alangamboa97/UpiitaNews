const {Schema, model} = require('mongoose');


        
const noticiaLarga = new Schema({
         titulo: {
             type: String,
             required: true
         },
     
         cuerpo: {
             type: String,
             required: true
         },
         autor: {
             type: String,
             required: true
         },       

         fecha: {
             type: String,
             required: true,
            
         },
         imagen:{
             type: Image,
             required: true
         }
});

module.exports = model('noticiaLarga', noticiaLarga);
