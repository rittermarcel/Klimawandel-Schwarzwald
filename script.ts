namespace KlimawandelSchwarzwald {
    window.addEventListener("load", handleLoad);
   

    function handleLoad(): void {
        let videoBox: HTMLElement = <HTMLElement>document.getElementById("videoBox");
        let video: HTMLElement = <HTMLElement>document.getElementById("videos");
        let textBox: HTMLElement = <HTMLElement>document.getElementById("textBox");
        textBox.hidden = true;
        video.onended = () => {
            videoEnded();
        };
        function videoEnded(): void {
            console.log("ok");
            textBox.hidden = false;
            videoBox.hidden = true;
        }
    }
}