const {Schema, model} = require('mongoose');


        
const noticiaCorta = new Schema({
         titulo: {
             type: String,
             required: true
         },
     
         descripcion: {
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

module.exports = model('noticiaCorta', noticiaCorta);

