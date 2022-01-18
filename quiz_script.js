"use strict";
var KlimawandelSchwarzwald;
(function (KlimawandelSchwarzwald) {
    let answers = [];
    let clickCounterButton = 0;
    let imgData;
    let falscheAntworten = 0;
    let richtigeAntworten = 0;
    let treeHeight = [];
    let treeDistance = [];
    function handleLoad() {
        console.log("start");
        let checkAnswersButton = document.getElementById("checkAnswers");
        checkAnswersButton.addEventListener("click", checkAnswers);
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        KlimawandelSchwarzwald.crc2 = canvas.getContext("2d");
        drawBackground();
        let forms = document.querySelectorAll("form");
        forms[0].addEventListener("input", getAnswers);
        loadQuestions();
        imgData = KlimawandelSchwarzwald.crc2.getImageData(0, 0, KlimawandelSchwarzwald.crc2.canvas.width, KlimawandelSchwarzwald.crc2.canvas.height);
        drawDefaultTrees();
    }
    KlimawandelSchwarzwald.handleLoad = handleLoad;
    function drawBackground() {
        const image = document.getElementById("source");
        KlimawandelSchwarzwald.crc2.drawImage(image, 0, 0);
    }
    function drawDefaultTrees() {
        let x = -30;
        for (let i = 0; i < 6; i++) {
            let randomHeight = Math.floor(Math.random() * 60) + 110;
            let randomDistance = Math.floor(Math.random() * 60) + 140;
            treeHeight.push(randomHeight);
            treeDistance.push(x);
            drawTree(x, randomHeight);
            console.log("x " + x);
            x = x + randomDistance;
        }
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
        let infoCanvas = document.getElementById("infoCanvas");
        if (answers.length < KlimawandelSchwarzwald.fragen.length || answers[0] === undefined) {
            infoCanvas.innerHTML = "<span class='color-red'>Bitte noch fehlende Fragen beantworten!</span>";
            infoCanvas.setAttribute("class", "infoCanvasHighlighted");
        }
        else {
            clickCounterButton++;
            if (clickCounterButton === 1) {
                for (let i = 0; i < answers.length; i++) {
                    let answerDiv = document.getElementById("answer" + i);
                    if (answers[i] === KlimawandelSchwarzwald.fragen[i].antwort) {
                        let check = document.createElement("img");
                        check.setAttribute("src", "bilder/check.png");
                        check.setAttribute("class", "radioButton");
                        check.setAttribute("id", "check");
                        answerDiv.appendChild(check);
                        richtigeAntworten = richtigeAntworten + 1;
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
                        falscheAntworten = falscheAntworten + 1;
                    }
                }
                KlimawandelSchwarzwald.crc2.putImageData(imgData, 0, 0);
                let x = -30;
                let prozentRichtigeAntworten = (richtigeAntworten / answers.length) * 100;
                let prozentFalscheAntworten = (falscheAntworten / answers.length * 100);
                console.log(prozentRichtigeAntworten + " %");
                console.log(prozentFalscheAntworten + " %");
                let healthyTreesNumber = Math.round((prozentRichtigeAntworten * 6) / 100);
                let deadTreesNumber = Math.round((prozentFalscheAntworten * 6) / 100);
                console.log("healthy " + healthyTreesNumber);
                console.log("dead " + deadTreesNumber);
                for (let i = 0; i < healthyTreesNumber; i++) {
                    drawTree(treeDistance[i], treeHeight[i]);
                    console.log("x " + x);
                    x = x + 170;
                }
                for (let i = 0; i < deadTreesNumber; i++) {
                    drawDeadTree(treeDistance[healthyTreesNumber + i], treeHeight[healthyTreesNumber + i]);
                    console.log("x " + x);
                    x = x + 170;
                }
                let checkAnswersButton = document.getElementById("checkAnswers");
                infoCanvas.innerHTML = "Durch deine Antworten sind " + "<span class='color-red'> " + deadTreesNumber + "</span>" + " Bäume abgestorben." + " Du hast " + "<span class='color-red'> " + falscheAntworten + "</span>" + " Frage/n falsch " + "und " + "<span class='color-green'> " + richtigeAntworten + "</span>" + " richtige beantwortet.";
                infoCanvas.setAttribute("class", "infoCanvasHighlighted");
                checkAnswersButton.innerHTML = "Quiz neu laden";
                let optionen = document.getElementById("optionen");
                optionen.removeAttribute("class");
                optionen.setAttribute("class", "optionenResponsive");
            }
            else {
                window.location.reload();
            }
        }
    }
    function drawTree(x, y) {
        let tree = new KlimawandelSchwarzwald.Baum(x, y);
        tree.drawTree();
    }
    function drawDeadTree(x, y) {
        let tree = new KlimawandelSchwarzwald.Baum(x, y);
        tree.drawDeadTree();
    }
})(KlimawandelSchwarzwald || (KlimawandelSchwarzwald = {}));
//# sourceMappingURL=quiz_script.js.map