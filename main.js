// Date calculation.........

const curDate = document.getElementById("date");
const weathercon = document.getElementById("weathercon");
const weekDay = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
const monthsArr = ["Jan","Feb","March","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const tempStatus = "clouds";

const getCurTime = () =>{
    let now = new Date();
    console.log();
    var month = now.getMonth();
    var day = now.getDate();
    var hrs = now.getHours();
    var min = now.getMinutes();
    let period = "AM";
    if(hrs>11){
        period = "PM";
        if(hrs>12) hrs -=12;
    }

    if(min<10){
        min= "0"+min;
    }

    curDate.innerHTML = weekDay[now.getDay()]+"|"+day+"|"+monthsArr[month]+"|"+hrs+":"+min+" "+period;

};

getCurTime();
setInterval(() => {
    getCurTime();
}, 60000);
setInterval(() => {
    document.getElementById('weather-ic').classList.add('weather-ic');
    setTimeout(() => {
        document.getElementById('weather-ic').classList.remove('weather-ic');
    }, 2000);
}, 7000);


// Api Data Handling.........................

// (`https://api.openweathermap.org/data/2.5/weather?q=kolkata&units=metrics&appid=12e17766ef6b1a15c284dc891a0ef0a0`)

let lctn = document.getElementById('location');
let temp = document.getElementById('temp');
let minmaxtemp = document.getElementById('minmaxtemp');
let cityName = document.getElementById('search');
let srbtn = document.getElementById('srbtn')
let wthcon = document.getElementById('weathercon');
let box = document.getElementById('box');

async function onloadcity(){
    try{
        let url = (`https://api.openweathermap.org/data/2.5/weather?q=kolkata&units=metrics&appid=12e17766ef6b1a15c284dc891a0ef0a0`)
    
        const response = await fetch(url);
    
        const data = await response.json();
        const arrData = [data];
    
        // console.log(arrData)
    
        lctn.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
        temp.innerText = arrData[0].main.temp;
        minmaxtemp.innerText = `${arrData[0].main.temp_min} | ${arrData[0].main.temp_max} `;
        var tempMood = `${arrData[0].weather[0].main}`;
        console.log(tempMood);
    
        //condition to check sunny or cloudy
        if (tempMood == "Clear") {
            box.classList.add('bg-sunny');
        wthcon.innerHTML =
            "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
        } else if (tempMood == "Clouds") {
            box.classList.add('bg-grey');
            wthcon.innerHTML =
            "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
        } else if (tempMood == "Rain") {
            box.classList.add('bg-dark');
            wthcon.innerHTML =
            "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
        } else {
            box.classList.add('bg-purple');
        wthcon.innerHTML =
            "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
    
        }
    
        cityVal = "";
       
    
    }catch{
        cityVal = " ";
        alert('please add the proper city name');
    }
};
onloadcity();



const searchWeather = async(e) => {
    e.preventDefault();
    let cityVal = cityName.value;
    
    try{
        let url = (`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metrics&appid=12e17766ef6b1a15c284dc891a0ef0a0`)

        const response = await fetch(url);

        const data = await response.json();
        const arrData = [data];

        // console.log(arrData)

        lctn.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
        temp.innerText = arrData[0].main.temp;
        minmaxtemp.innerText = `${arrData[0].main.temp_min} | ${arrData[0].main.temp_max} `;
        var tempMood = `${arrData[0].weather[0].main}`;
        console.log(tempMood);

        //condition to check sunny or cloudy
        if (tempMood == "Clear") {
            box.classList.add('bg-sunny');
        wthcon.innerHTML =
            "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
        } else if (tempMood == "Clouds") {
            box.classList.remove('bg-dark');
            box.classList.remove('bg-sunny');
            box.classList.remove('bg-purple');
            box.classList.add('bg-grey');
            wthcon.innerHTML =
            "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
        } else if (tempMood == "Rain") {
            box.classList.remove('bg-grey');
            box.classList.remove('bg-sunny');
            box.classList.remove('bg-purple');
            box.classList.add('bg-dark');
            wthcon.innerHTML =
            "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
        } else {
            box.classList.remove('bg-grey');
            box.classList.remove('bg-dark');
            box.classList.remove('bg-sunny');
            box.classList.add('bg-purple');
        wthcon.innerHTML =
            "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
    
        }

        cityVal = "";
       
   
    }catch{
        cityVal = " ";
        alert('please add the proper city name');
    }
}

srbtn.addEventListener('click', searchWeather);