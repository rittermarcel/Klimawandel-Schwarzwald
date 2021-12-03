namespace KlimawandelSchwarzwald {

    export let crc2: CanvasRenderingContext2D;
    let answers: string[] = [];
    let clickCountonButton: number = 0;
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
    }

    function drawBackground(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0.2, "lightblue");
        gradient.addColorStop(0.8, "white");
        gradient.addColorStop(1, "green");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
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
        clickCountonButton++;
        if (clickCountonButton === 1) {
            for (let i: number = 0; i < answers.length; i++) {
                let answerDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("answer" + i);
                if (answers[i] === fragen[i].antwort) {
                    let check: HTMLElement = document.createElement("img");
                    check.setAttribute("src", "bilder/check.png");
                    check.setAttribute("class", "radioButton");
                    check.setAttribute("id", "check");
                    answerDiv.appendChild(check);
                    drawTree();
                } else if (answers[i] === undefined) {
                    console.log("Aufgabe ausgelassen");
                }

                else {
                    let cross: HTMLElement = document.createElement("img");
                    cross.setAttribute("src", "bilder/cross.png");
                    cross.setAttribute("class", "radioButton");
                    cross.setAttribute("id", "cross");
                    answerDiv.appendChild(cross);
                    drawDeadTree();
                }
            }
            let checkAnswersButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("checkAnswers");
            checkAnswersButton.innerHTML = "Quiz neu laden";
        } else {
            window.location.reload();
        }
    }
    function drawTree(): void {
        let randomX: number = Math.floor(Math.random() * 700);
        let tree: Baum = new Baum("green", randomX, 165);
        tree.drawTree();
    }
    function drawDeadTree(): void {
        let randomX: number = Math.floor(Math.random() * 700);

        let tree: Baum = new Baum("green", randomX, 100);
        tree.drawDeadTree();

    }

}