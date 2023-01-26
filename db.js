import mongoose from "mongoose";

const conn = () => {
    mongoose.set('strictQuery',false);
    
    mongoose.connect(process.env.DB_URI, {
        dbName: "lenslight_tr",
        useNewUrlParser: true,
        useUnifiedtopology: true
    }).then( () => {
        console.log("Connected to the DB successfully");
    }).catch(err => {
        console.log(`DB connection fail -> ${err}`);
    })
};

export default conn;