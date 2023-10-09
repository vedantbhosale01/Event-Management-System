const mongoose = require('mongoose')


const connectWithDb = () => {

    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("Db connection succesfull.."))
    .catch(error=> {
        console.log("DB connection failed");
        console.log(error);
        process.exit(1)
    })

}

module.exports =connectWithDb