namespace KlimawandelSchwarzwald {
    window.addEventListener("load", handleLoad);
   

    function handleLoad(): void {
        let textBox: HTMLDivElement = <HTMLDivElement>document.getElementById("textBox");
        textBox.hidden = true;
        let video: HTMLElement = <HTMLElement>document.getElementById("videos");
        video.onended = () => {
            videoEnded();
        };
        function videoEnded(): void {
            console.log("ok");
            textBox.hidden = false;
            window.location.href = "#textBox";
        }
    }
}