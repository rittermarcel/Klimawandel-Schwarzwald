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
        console.log("start");

        let checkAnswersButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("checkAnswers");
        checkAnswersButton.addEventListener("click", checkAnswers);
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        let forms: NodeListOf<HTMLFormElement> = document.querySelectorAll("form");
        forms[0].addEventListener("input", getAnswers);
        loadQuestions();
        drawBackground();
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
            let randomHeight: number = Math.floor( Math.random() * 60 ) + 110;
            let randomDistance: number = Math.floor( Math.random() * 60 ) + 140;
            treeHeight.push(randomHeight);
            treeDistance.push(x);
            drawTree(x, randomHeight);
            console.log("x " + x);
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

        console.log(answers);
    }
    function checkAnswers(): void {
        
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
                    // drawTree();
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

            console.log(prozentRichtigeAntworten + " %");
            console.log(prozentFalscheAntworten + " %");

            let healthyTreesNumber: number = Math.round((prozentRichtigeAntworten * 6) / 100);
            let deadTreesNumber: number = Math.round((prozentFalscheAntworten * 6) / 100);

            console.log("healthy " + healthyTreesNumber);

            console.log("dead " + deadTreesNumber);

            for (let i: number = 0; i < healthyTreesNumber; i++) {
                drawTree(treeDistance[i], treeHeight[i]);
                console.log("x " + x);
                x = x + 170;
            }
            for (let i: number = 0; i < deadTreesNumber; i++) {
                drawDeadTree(treeDistance[healthyTreesNumber + i], treeHeight[healthyTreesNumber + i]);
                console.log("x " + x);
                x = x + 170;
                
            }

            let checkAnswersButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("checkAnswers");
            let infoCanvas: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("infoCanvas");
            infoCanvas.innerHTML = "Durch deine Antworten sind " + "<span class='color-red'> " + deadTreesNumber + "</span>" + " Bäume abgestorben." + " Du hast " + "<span class='color-red'> " + falscheAntworten + "</span>" + " Frage/n falsch " + "und " + "<span class='color-green'> " + richtigeAntworten + "</span>" + " richtige beantwortet.";
            infoCanvas.setAttribute("class", "infoCanvasHighlighted");
            checkAnswersButton.innerHTML = "Quiz neu laden";
        } else {
            window.location.reload();
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