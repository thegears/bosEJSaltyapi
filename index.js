const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//<---------------Ayarlar----------------->
app.set('views','./views');
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.listen(process.env.PORT || 4444);
//<---------------Ayarlar----------------->
