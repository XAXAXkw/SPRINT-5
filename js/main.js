



const reportAcudits = [];
let goodJoke = {};
const record =[];





          

//__________________AWAITER JOKES


var __awaiter =
    (this && this.__awaiter) ||

    function (thisArg, _arguments, P, generator) {

        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }



        //__________________promise



        return new (P || (P = Promise))
            (function (resolve, reject) {

                function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }

                function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }

                function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
                step((generator = generator.apply(thisArg, _arguments || [])).next());
            });
    };

//__________________promise








function doIt() {


    let loader=` <button class="score-button" ><img src="./svg/icon3.png" style="width:55px" data-score="3"></button>
    <button class="score-button" ><img src="./svg/icon2.png" style="width:55px" data-score="2"></button>
    <button class="score-button" ><img src="./svg/icon1.png" style="width:55px" data-score="1"></button>
  `

   document.getElementById('iconer').innerHTML=loader;

    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield getJoke();
        const jokeElement = document.getElementById("joke");
        let fetchedJoke = new Joke((_a = data.joke) !== null && _a !== void 0 ? _a : data.value);
        jokeElement.innerHTML = data.joke;
        record.push(data.id)
     
       
    });
}









function getJoke() {
    return __awaiter(this, void 0, void 0, function* () {

        //llistat jokes
        const jokesList = ["https://icanhazdadjoke.com"];

        //tria l'index RANDOM de la llista ARRAY
        const jokeChosen = Math.floor(Math.random() * jokesList.length);

        // RECUPEREM el OBJECT Joke del index random de la web
        const goodJoke = yield fetch(jokesList[jokeChosen], {
            method: "GET",


            //________________________User AGENT
            //_____________ documentació de l'API a consumir 

            headers: {
                "Accept": "application/json",
                "User-Agent": "IT Academy Student (https://github.com/XAXAXkw/SPRINT-5)",
            },
        }).then(function (goodJoke) {
           
            record.push(goodJoke.id);
            return goodJoke.json();
        });
      
        // typeof(goodJoke);








        return goodJoke;
    });
}




function printJoke(joke) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const data = joke, jokeElement = document.getElementById("joke");
        goodJoke = new Joke((_a = data.joke) !== null && _a !== void 0 ? _a : data.value);
        
        

     
    });
}





const scoreButtons = document.querySelectorAll(".iconer");


scoreButtons.forEach(element => {
    element.addEventListener("click", function (event) {

        return __awaiter(this, void 0, void 0, function* () {

          
      
            const target = event.target;
            const score = parseInt(target.getAttribute("data-score"));
            const id = record.find((o)=>o!=undefined);
            


            saveToHistory(score,id);

            

        });
    })
})








function saveToHistory(score,id) {
   
    
    const currentDate = new Date();
    const entry = { score: score, date: currentDate.toISOString(),id:id }
    reportAcudits.push(entry);
    console.log(reportAcudits);
}




//

