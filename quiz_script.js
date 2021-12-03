"use strict";
var KlimawandelSchwarzwald;
(function (KlimawandelSchwarzwald) {
    let answers = [];
    let clickCountonButton = 0;
    function handleLoad() {
        console.log("start");
        let checkAnswersButton = document.getElementById("checkAnswers");
        checkAnswersButton.addEventListener("click", checkAnswers);
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        KlimawandelSchwarzwald.crc2 = canvas.getContext("2d");
        let forms = document.querySelectorAll("form");
        forms[0].addEventListener("input", getAnswers);
        loadQuestions();
        drawBackground();
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
            answer.setAttribute("id", "answer" + i);
            questionBox.appendChild(answer);
            let radioA = document.createElement("input");
            radioA.setAttribute("type", "radio");
            radioA.setAttribute("value", "true");
            radioA.setAttribute("class", "radioButton");
            radioA.setAttribute("name", JSON.stringify(i));
            answer.appendChild(radioA);
            let radioB = document.createElement("input");
            radioB.setAttribute("type", "radio");
            radioB.setAttribute("value", "false");
            radioB.setAttribute("class", "radioButton");
            radioB.setAttribute("id", "radioButtonB");
            radioB.setAttribute("name", JSON.stringify(i));
            answer.appendChild(radioB);
        }
    }
    function getAnswers(_event) {
        let target = _event.target;
        let questionNumber = parseInt(target.name);
        answers[questionNumber] = target.value;
        console.log(answers);
    }
    function checkAnswers() {
        clickCountonButton++;
        if (clickCountonButton === 1) {
            for (let i = 0; i < answers.length; i++) {
                let answerDiv = document.getElementById("answer" + i);
                if (answers[i] === KlimawandelSchwarzwald.fragen[i].antwort) {
                    let check = document.createElement("img");
                    check.setAttribute("src", "bilder/check.png");
                    check.setAttribute("class", "radioButton");
                    check.setAttribute("id", "check");
                    answerDiv.appendChild(check);
                    drawTree();
                }
                else if (answers[i] === undefined) {
                    console.log("Aufgabe ausgelassen");
                }
                else {
                    let cross = document.createElement("img");
                    cross.setAttribute("src", "bilder/cross.png");
                    cross.setAttribute("class", "radioButton");
                    cross.setAttribute("id", "cross");
                    answerDiv.appendChild(cross);
                    drawDeadTree();
                }
            }
            let checkAnswersButton = document.getElementById("checkAnswers");
            checkAnswersButton.innerHTML = "Quiz neu laden";
        }
        else {
            window.location.reload();
        }
    }
    function drawTree() {
        let randomX = Math.floor(Math.random() * 700);
        let tree = new KlimawandelSchwarzwald.Baum("green", randomX, 165);
        tree.drawTree();
    }
    function drawDeadTree() {
        let randomX = Math.floor(Math.random() * 700);
        let tree = new KlimawandelSchwarzwald.Baum("green", randomX, 100);
        tree.drawDeadTree();
    }
})(KlimawandelSchwarzwald || (KlimawandelSchwarzwald = {}));
//# sourceMappingURL=quiz_script.js.map