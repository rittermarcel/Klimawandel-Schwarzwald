namespace KlimawandelSchwarzwald {

    export let crc2: CanvasRenderingContext2D;
    let answers: string[] = [];
    let clickCounterButton: number = 0;
    let imgData: any;
    let falscheAntworten: number = 0;
    let richtigeAntworten: number = 0;
    let treeHeight: number[] = [];
    let treeDistance: number[] = [];
    export function handleLoad(): void {
        let checkAnswersButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("checkAnswers");
        checkAnswersButton.addEventListener("click", checkAnswers);
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        drawBackground();
        let forms: NodeListOf<HTMLFormElement> = document.querySelectorAll("form");
        forms[0].addEventListener("input", getAnswers);
        loadQuestions();
        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);

        drawDefaultTrees();
    }

    function drawBackground(): void {
        const image: any = document.getElementById("source");
        crc2.drawImage(image, 0, 0);

    }
    function drawDefaultTrees(): void {
        let x: number = -30;
        for (let i: number = 0; i < 6; i++) {
            let randomHeight: number = Math.floor(Math.random() * 60) + 110;
            let randomDistance: number = Math.floor(Math.random() * 60) + 140;
            treeHeight.push(randomHeight);
            treeDistance.push(x);
            drawTree(x, randomHeight);
            x = x + randomDistance;
        }
    }

    function loadQuestions(): void {
        let appendQuestionsDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("appendQuestions");

        for (let i: number = 0; i < fragen.length; i++) {
            let questionBox: HTMLElement = document.createElement("div");
            questionBox.setAttribute("class", "questionBox");
            appendQuestionsDiv.appendChild(questionBox);

            let question: HTMLElement = document.createElement("div");
            question.setAttribute("class", "question");
            questionBox.appendChild(question);

            let text: HTMLElement = document.createElement("p");
            text.setAttribute("class", "questionField");
            text.innerHTML = fragen[i].frage;
            question.appendChild(text);

            let answer: HTMLElement = document.createElement("div");
            answer.setAttribute("class", "answer");
            answer.setAttribute("id", "answer" + i);
            questionBox.appendChild(answer);

            let radioA: HTMLElement = document.createElement("input");
            radioA.setAttribute("type", "radio");
            radioA.setAttribute("value", "true");
            radioA.setAttribute("class", "radioButton");
            radioA.setAttribute("name", JSON.stringify(i));
            answer.appendChild(radioA);

            let radioB: HTMLElement = document.createElement("input");
            radioB.setAttribute("type", "radio");
            radioB.setAttribute("value", "false");
            radioB.setAttribute("class", "radioButton");
            radioB.setAttribute("id", "radioButtonB");
            radioB.setAttribute("name", JSON.stringify(i));
            answer.appendChild(radioB);


        }
    }
    function getAnswers(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        let questionNumber: number = parseInt(target.name);

        answers[questionNumber] = target.value;

    }
    function checkAnswers(): void {
        let infoCanvas: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("infoCanvas");
        if (answers.length < fragen.length || answers[0] === undefined) {
            infoCanvas.innerHTML = "<span class='color-red'>Bitte noch fehlende Fragen beantworten!</span>";
            infoCanvas.setAttribute("class", "infoCanvasHighlighted");
        } else {
            clickCounterButton++;
            if (clickCounterButton === 1) {
                for (let i: number = 0; i < answers.length; i++) {
                    let answerDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("answer" + i);
                    if (answers[i] === fragen[i].antwort) {
                        let check: HTMLElement = document.createElement("img");
                        check.setAttribute("src", "bilder/check.png");
                        check.setAttribute("class", "radioButton");
                        check.setAttribute("id", "check");
                        answerDiv.appendChild(check);
                        richtigeAntworten = richtigeAntworten + 1;
                    } else if (answers[i] === undefined) {
                        console.log("Aufgabe ausgelassen");
                    }

                    else {
                        let cross: HTMLElement = document.createElement("img");
                        cross.setAttribute("src", "bilder/cross.png");
                        cross.setAttribute("class", "radioButton");
                        cross.setAttribute("id", "cross");
                        answerDiv.appendChild(cross);
                        falscheAntworten = falscheAntworten + 1;
                    }
                }
                crc2.putImageData(imgData, 0, 0);
                let x: number = -30;

                let prozentRichtigeAntworten: number = (richtigeAntworten / answers.length) * 100;
                let prozentFalscheAntworten: number = (falscheAntworten / answers.length * 100);

                let healthyTreesNumber: number = Math.round((prozentRichtigeAntworten * 6) / 100);
                let deadTreesNumber: number = Math.round((prozentFalscheAntworten * 6) / 100);

                for (let i: number = 0; i < healthyTreesNumber; i++) {
                    drawTree(treeDistance[i], treeHeight[i]);
                    x = x + 170;
                }
                for (let i: number = 0; i < deadTreesNumber; i++) {
                    drawDeadTree(treeDistance[healthyTreesNumber + i], treeHeight[healthyTreesNumber + i]);
                    x = x + 170;

                }

                let checkAnswersButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("checkAnswers");


                if (deadTreesNumber === 1) {
                    infoCanvas.innerHTML = "Du hast " + richtigeAntworten + " Fragen richtig und " + falscheAntworten + " falsch beantwortet. Durch deine Antworten ist " + deadTreesNumber + " Baum abgestorben.";

                } else if (richtigeAntworten === 1) {
                    infoCanvas.innerHTML = "Du hast " + richtigeAntworten + " Frage richtig und " + falscheAntworten + " falsch beantwortet. Durch deine Antworten sind " + deadTreesNumber + " B??ume abgestorben.";

                } else {
                    infoCanvas.innerHTML = "Du hast " + richtigeAntworten + " Fragen richtig und " + falscheAntworten + " falsch beantwortet. Durch deine Antworten sind " + deadTreesNumber + " B??ume abgestorben.";
                }
                infoCanvas.setAttribute("class", "infoCanvasHighlighted");
                checkAnswersButton.innerHTML = "Quiz neu laden";


                let optionen: HTMLDivElement = <HTMLDivElement>document.getElementById("optionen");
                optionen.removeAttribute("class");
                optionen.setAttribute("class", "optionenResponsive");

            } else {
                window.location.reload();
            }
        }
    }
    function drawTree(x: number, y: number): void {
        let tree: Baum = new Baum(x, y);
        tree.drawTree();
    }
    function drawDeadTree(x: number, y: number): void {
        let tree: Baum = new Baum(x, y);
        tree.drawDeadTree();

    }

}