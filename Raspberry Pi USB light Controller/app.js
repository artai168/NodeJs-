const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const Router = require('./routers')
const app = express();
const port = 3000;

// Where we will keep books
//let books = [];

app.use(cors());
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(Router);
app.use(express.static(__dirname));


app.get('/',(req,res) =>{
    res.status(200);
    res.send(`
    <h2>Hello user!</h2>
    <p>Make sure you have executed <b>connected to the LED light</b> and <b>set up in the right procedure</b>. Otherwise, you will <i>'not have any response'</i>.</p> 
    <p>zAA</p>  
`);
});

// catch 404 and forward to error handler
app.use( (req, res, next) => {
    next(createError(404));
  });
  
  // error handler
  app.use( (err, req, res, next) => {
  
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV === 'development' ? err : {};
  
    res.status(err.status || 500);

    res.json({
        status:false,
        errors: {
            code: err.code,
            message: err.message
        }
    });
    /*
    res.send(`
    <h2>Error!</h2>
    <p>Nothing to show.</p>    
`);*/
  
  });

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));