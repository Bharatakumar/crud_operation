/*const mongoosh = require('mongoose');
mongoosh.connect("mongodb://localhost:27017/local")                               
    .then(() => {
         console.log('successfully connected to MongoDB'); 
        })
    .catch((error) => { 
        console.error('mongodb connection failed', error);

    });
*/
const mongoosh= require('mongoose');
mongoosh.connect("mongodb://localhost:27017/local")
    .then(() => {
        console.log('successfullyconnected to mongodb ');

    })
    .catch((error) => {
        console.log('mongodb connection failed',error);
    });
