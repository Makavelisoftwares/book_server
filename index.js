const app=require('express')();
const {sequelize}=require('./models');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const bodyParser=require('body-parser');
const helmet=require('helmet');
const morgan=require('morgan');
const BookRoute=require('./routes/books');
const express=require('express')


// using middlewares
app.use(cors({
    origin:"*",
    credentials:true
}))

app.use(cookieParser());
app.use(morgan('short'))
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('public'))

// connect database
sequelize.authenticate()
    .then(()=>{
        app.listen(8080,()=>{
            console.log('listening requests on port 8080')
        })
        console.log('connected to database')
    })
    .catch((err)=>console.log(err))

app.use(BookRoute);