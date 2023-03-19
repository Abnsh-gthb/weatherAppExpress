// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');

const static_path = path.join(__dirname);
// const template_path = path.join(__dirname);
// const partials_path = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.use(express.static(static_path));

// const homeFile = fs.readFileSync("home.html","utf-8");

// const replaceVal = (tempVal,orgVal) =>{
//     let temperature = tempVal.replace("{%tempval%}",orgVal.main.temp);
//      temperature = temperature.replace("{%tempmin%}",orgVal.main.temp_min);
//      temperature = temperature.replace("{%tempmax%}",orgVal.main.temp_max);
//      temperature = temperature.replace("{%location%}",orgVal.name);
//      temperature = temperature.replace("{%country%}",orgVal.sys.country);
//      return temperature;
// }

app.get("",(req,res)=>{
    res.render('home');
})

app.listen(8000,"127.0.0.1");