import express from "express";
import dotenv from "dotenv";
import conn from "./db.js";
import pageRoute from "./routes/pageRoute.js";
import photoRoute from "./routes/photoRoute.js";
import userRoute from "./routes/userRoute.js";


dotenv.config();

//connect database
conn();

const app = express();
const PORT = process.env.PORT || 3000;

//ejs template engine
app.set('view engine', 'ejs');


//static files
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use("/", pageRoute)

app.use("/about", pageRoute);

app.use("/photos",photoRoute);

app.use("/users",userRoute)




// app.get('/',(req,res) => {
//     res.render('index.ejs');
// })

// app.get('/about',(req,res) => {
//     res.render('about.ejs');
// })

app.listen(PORT,() => {
    console.log(`App is running on port ${PORT}`);
})
