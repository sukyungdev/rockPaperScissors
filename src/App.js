import { useState } from "react";
import "./App.css";
import GameArea from "./component/GameArea";

// const set = {
//     start: {
//         name: "start",
//         img: "img/questionMark.png",
//     },
// };

const choiceValue = {
    start: {
        name: "start",
        img: "img/questionMark.png",
    },
    rock: {
        name: "Rock",
        img: "img/rock.png",
    },
    paper: {
        name: "Paper",
        img: "img/paper.png",
    },
    scissors: {
        name: "Scissors",
        img: "img/scissors.png",
    },
};

function App() {
    // state
    const [playerSelect, setPlayerSelect] = useState(choiceValue.start); //player state
    const [computerSelect, setComputerSelect] = useState(choiceValue.start); //computer state
    const [result, setResult] = useState("no choice"); // player result state
    const [computerResult, setComputerResult] = useState("waiting you"); //computer result state

    //function
    const startGame = (e) => {
        // console.log(e.target.innerHTML);
        let value = e.target.innerHTML;
        setPlayerSelect(choiceValue[value]);

        //computer value result
        let computerValue = randomChoice();
        setComputerSelect(computerValue);

        //judgement
        let playerResult = resultCheck(choiceValue[value], computerValue);
        let computerRe = computerResultCheck(playerResult);

        setResult(playerResult);
        setComputerResult(computerRe);
    };

    // random value choice
    const randomChoice = () => {
        let choiceArray = Object.keys(choiceValue);
        console.log(choiceArray);
        let randomItem =
            Math.floor(Math.random() * (choiceArray.length - 1)) + 1;
        console.log(randomItem);
        let choiceResult = choiceArray[randomItem];
        return choiceValue[choiceResult];
    };

    //judgement - player
    const resultCheck = (player, computer) => {
        console.log("player", player, "computer", computer);

        if (player.name === computer.name) {
            return "TIE";
        } else if (player.name === "Rock")
            return computer.name === "Scissors" ? "WIN" : "LOSE";
        else if (player.name === "Paper")
            return computer.name === "Rock" ? "WIN" : "LOSE";
        else if (player.name === "Scissors")
            return computer.name === "Paper" ? "WIN" : "LOSE";
    };

    //judgement - computer
    const computerResultCheck = (playerResult) => {
        if (playerResult === "TIE") {
            return "TIE";
        } else if (playerResult === "WIN") {
            return "LOSE";
        } else return "WIN";
    };

    // render
    return (
        // lg:max-w-2xl
        <div className=" m-auto mt-4 w-screen h-screen flex flex-col justify-center items-center">
            <h1 className="text-center mb-5">RockPaperScissors</h1>
            <div className="flex justify-evenly mb-7">
                <GameArea title="Player" item={playerSelect} result={result} />
                <GameArea
                    title="Computer"
                    item={computerSelect}
                    result={computerResult}
                />
            </div>
            <div className="flex justify-center mb-5">
                <button
                    type="button"
                    onClick={startGame}
                    className="w-20 p-2 mx-2 bg-green-100 border-2 border-gray-300 rounded-lg shadow"
                >
                    rock
                </button>
                <button
                    type="button"
                    onClick={startGame}
                    className="w-20 p-2 mx-2 bg-yellow-100 border-2 border-gray-300 rounded-lg shadow"
                >
                    paper
                </button>
                <button
                    type="button"
                    onClick={startGame}
                    className="w-20 p-2 mx-2 bg-red-100 border-2 border-gray-300 rounded-lg shadow"
                >
                    scissors
                </button>
            </div>
            <div className="text-center text-xs text-gray-400">
                <a
                    href="https://www.flaticon.com/free-icons/paper"
                    title="icons"
                >
                    icons created by Freepik - Flaticon
                </a>
            </div>
        </div>
    );
}

export default App;
