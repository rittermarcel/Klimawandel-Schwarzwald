namespace KlimawandelSchwarzwald {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        console.log("start");

        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        drawBackground();
        drawTree();
        drawDeadTree();
    }

    function drawBackground(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0.2, "lightblue");
        gradient.addColorStop(0.8, "white");
        gradient.addColorStop(1, "green");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    
    function drawTree(): void {
        let tree: Baum = new Baum("green");
        tree.drawTree();
    }
    function drawDeadTree(): void {
        let tree: Baum = new Baum("green");
        tree.drawDeadTree();
    }
}