"use strict";
var KlimawandelSchwarzwald;
(function (KlimawandelSchwarzwald) {
    function handleLoad() {
        console.log("start");
        let checkAnswersButton = document.getElementById("checkAnswers");
        checkAnswersButton.addEventListener("click", checkAnswers);
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        KlimawandelSchwarzwald.crc2 = canvas.getContext("2d");
        let forms = document.querySelectorAll("form");
        forms[0].addEventListener("input", handleForm);
        loadQuestions();
        drawBackground();
        drawTree();
        drawDeadTree();
        console.log(KlimawandelSchwarzwald.fragen[0].frage);
    }
    KlimawandelSchwarzwald.handleLoad = handleLoad;
    function drawBackground() {
        let gradient = KlimawandelSchwarzwald.crc2.createLinearGradient(0, 0, 0, KlimawandelSchwarzwald.crc2.canvas.height);
        gradient.addColorStop(0.2, "lightblue");
        gradient.addColorStop(0.8, "white");
        gradient.addColorStop(1, "green");
        KlimawandelSchwarzwald.crc2.fillStyle = gradient;
        KlimawandelSchwarzwald.crc2.fillRect(0, 0, KlimawandelSchwarzwald.crc2.canvas.width, KlimawandelSchwarzwald.crc2.canvas.height);
    }
    function loadQuestions() {
        let appendQuestionsDiv = document.getElementById("appendQuestions");
        for (let i = 0; i < KlimawandelSchwarzwald.fragen.length; i++) {
            let questionBox = document.createElement("div");
            questionBox.setAttribute("class", "questionBox");
            appendQuestionsDiv.appendChild(questionBox);
            let question = document.createElement("div");
            question.setAttribute("class", "question");
            questionBox.appendChild(question);
            let text = document.createElement("p");
            text.setAttribute("class", "questionField");
            text.innerHTML = KlimawandelSchwarzwald.fragen[i].frage;
            question.appendChild(text);
            let answer = document.createElement("div");
            answer.setAttribute("class", "answer");
            questionBox.appendChild(answer);
            let radioA = document.createElement("input");
            radioA.setAttribute("type", "radio");
            radioA.setAttribute("class", "radioButton");
            radioA.setAttribute("name", "answer" + i);
            answer.appendChild(radioA);
            let radioB = document.createElement("input");
            radioB.setAttribute("type", "radio");
            radioB.setAttribute("class", "radioButton");
            radioB.setAttribute("name", "answer" + i);
            answer.appendChild(radioB);
            if (KlimawandelSchwarzwald.fragen[i].antwort === false) {
                let cross = document.createElement("img");
                cross.setAttribute("src", "bilder/cross.png");
                cross.setAttribute("class", "radioButton");
                answer.appendChild(cross);
            }
            else {
                let check = document.createElement("img");
                check.setAttribute("src", "bilder/check.png");
                check.setAttribute("class", "radioButton");
                answer.appendChild(check);
            }
        }
    }
    function drawTree() {
        let tree = new KlimawandelSchwarzwald.Baum("green", 70, 165);
        tree.drawTree();
    }
    function drawDeadTree() {
        let tree = new KlimawandelSchwarzwald.Baum("green", 300, 100);
        tree.drawDeadTree();
    }
    function checkAnswers() {
        console.log("checking");
    }
    function handleForm(_event) {
        console.log("change");
        //let target: HTMLInputElement = <HTMLInputElement>_event.target;
    }
})(KlimawandelSchwarzwald || (KlimawandelSchwarzwald = {}));
//# sourceMappingURL=quiz_script.js.map