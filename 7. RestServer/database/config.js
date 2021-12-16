const mongoose = require('mongoose');

const dbConnection = async() => {
    try{

        await mongoose.connect(process.env.MONGODB,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('Databse is connected');
    }catch( err ){
        throw new Error('Error when you try to initialize the database')
    }
}

module.exports = {
    dbConnection
}