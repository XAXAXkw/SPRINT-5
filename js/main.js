



const reportAcudits = [];
let goodJoke = {};




//__________________AWAITER 


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

    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield getJoke();
        const jokeElement = document.getElementById("joke");
        fetchedJoke = new Joke((_a = data.joke) !== null && _a !== void 0 ? _a : data.value);
        jokeElement.innerHTML = data.joke;
        console.log(data.joke)
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

            return goodJoke.json();
        });
        console.log(goodJoke);
        // typeof(goodJoke);








        return goodJoke;
    });
}




function printJoke(joke) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const data = joke, jokeElement = document.getElementById("joke");
        goodJoke = new Joke((_a = data.joke) !== null && _a !== void 0 ? _a : data.value);
        jokeElement.innerHTML = goodJoke.joke;


        console.log(data);
    });
}



const scoreButtons = document.querySelectorAll(".score-button");


scoreButtons.forEach(element => {
    element.addEventListener("click", function (event) {

        return __awaiter(this, void 0, void 0, function* () {


            const target = event.target;
            const score = parseInt(target.getAttribute("data-score"));


            saveToHistory(score);

            console.log(score);

        });
    })
})








function saveToHistory(score) {
    const currentDate = new Date();
    const entry = { score: score, date: currentDate.toISOString() }
    reportAcudits.push(entry);
    console.log(reportAcudits);
}




//

