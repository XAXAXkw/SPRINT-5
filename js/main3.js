const reportAcudits = [];
let currJoke ={};
let length = reportAcudits.length
const weatherUrl ='https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=b8bbd9b8502a809ee9dd837de5d4aa26';
const jokesUrls = 'https://icanhazdadjoke.com/';





getWeather();
//Weather
function getWeather(){
    
     fetch(weatherUrl)
.then((response)=>response.json())
.then((data)=>printWeather(data));

}
function kToC(temp) {
    // Convertir a grados Celsius (número con 2 decimales)
    return (temp - 273.15).toFixed(2);
}

function printWeather(data){
    const { weather: { 0: { description } }, main: { temp, temp_max, temp_min } } = data;
    document.getElementById('weather-now').innerHTML= `Today's temp: `+kToC(temp) + ' º Celsius';
}



function scorer(){
    let loader=` <button class="score-button" ><img src="./svg/icon3.png" style="width:55px" data-score="3"></button>
    <button class="score-button" ><img src="./svg/icon2.png" style="width:55px" data-score="2"></button>
    <button class="score-button" ><img src="./svg/icon1.png" style="width:55px" data-score="1"></button>
  `

   document.getElementById('iconer').innerHTML=loader;
   
}
const scoreButtons = document.querySelectorAll(".iconer");


scoreButtons.forEach(element => {
    element.addEventListener("click", function (btn) {
      
            const target = btn.target;
            const score = parseInt(target.getAttribute("data-score"));
            //alert(score);
               
           
            currJoke.score=score;
            console.log(reportAcudits)
       

        
    })
})

function saveToHistory(score) {

    
    const currentDate = new Date();
    reportAcudits[length].score= score;
    reportAcudits[length].date= currentDate.toISOString()};

    




// joke converter

function getJoke(){
   
   let chosenJoke;
   let jokeId;


    fetch (jokesUrls,
        {   method: "GET",
            headers: {Accept: "application/json"}
        })
        .then((response)=>response.json())
        .then((data)=>{ 
            let score = 0;
            chosenJoke=data.joke;
            jokeId=data.id
            let date = new Date();
            currDate=date.toISOString()

            currJoke = new Joke(jokeId,chosenJoke,currDate,score)
            reportAcudits.push(currJoke)

            document.getElementById('display').innerHTML=chosenJoke;
            // console.log(currJoke)

            scorer()
            })

}

// Start
function start(){
    alert('ok');
}




