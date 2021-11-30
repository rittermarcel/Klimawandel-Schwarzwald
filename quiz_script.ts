namespace KlimawandelSchwarzwald {

    export let crc2: CanvasRenderingContext2D;
    export function handleLoad(): void {
        console.log("start");
        let checkAnswersButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("checkAnswers");
        checkAnswersButton.addEventListener("click", checkAnswers);
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        let forms: NodeListOf<HTMLFormElement> = document.querySelectorAll("form");
        forms[0].addEventListener("input", handleForm);
        loadQuestions();
        drawBackground();
        drawTree();
        drawDeadTree();
        console.log(fragen[0].frage);
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
            questionBox.appendChild(answer);

            let radioA: HTMLElement = document.createElement("input"); 
            radioA.setAttribute("type", "radio");
            radioA.setAttribute("class", "radioButton");
            radioA.setAttribute("name", "answer" + i);
            answer.appendChild(radioA);

            let radioB: HTMLElement = document.createElement("input"); 
            radioB.setAttribute("type", "radio");
            radioB.setAttribute("class", "radioButton");
            radioB.setAttribute("name", "answer" + i);
            answer.appendChild(radioB);

            if (fragen[i].antwort === false) {
                let cross: HTMLElement = document.createElement("img");
                cross.setAttribute("src", "bilder/cross.png");
                cross.setAttribute("class", "radioButton");
                answer.appendChild(cross);

            } else {
                let check: HTMLElement = document.createElement("img");
                check.setAttribute("src", "bilder/check.png");
                check.setAttribute("class", "radioButton");
                answer.appendChild(check);
            }



        }
    }

    function drawTree(): void {
        let tree: Baum = new Baum("green", 70, 165);
        tree.drawTree();
    }
    function drawDeadTree(): void {
        let tree: Baum = new Baum("green", 300, 100);
        tree.drawDeadTree();

    }
    function checkAnswers(): void {
        console.log("checking");
    }
    function handleForm(_event: Event): void {
        console.log("change");
        //let target: HTMLInputElement = <HTMLInputElement>_event.target;

    }

}