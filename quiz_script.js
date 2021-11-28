"use strict";
var KlimawandelSchwarzwald;
(function (KlimawandelSchwarzwald) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("start");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        KlimawandelSchwarzwald.crc2 = canvas.getContext("2d");
        drawBackground();
        drawTree();
        drawDeadTree();
    }
    function drawBackground() {
        let gradient = KlimawandelSchwarzwald.crc2.createLinearGradient(0, 0, 0, KlimawandelSchwarzwald.crc2.canvas.height);
        gradient.addColorStop(0.2, "lightblue");
        gradient.addColorStop(0.8, "white");
        gradient.addColorStop(1, "green");
        KlimawandelSchwarzwald.crc2.fillStyle = gradient;
        KlimawandelSchwarzwald.crc2.fillRect(0, 0, KlimawandelSchwarzwald.crc2.canvas.width, KlimawandelSchwarzwald.crc2.canvas.height);
    }
    function drawTree() {
        let tree = new KlimawandelSchwarzwald.Baum("green");
        tree.drawTree();
    }
    function drawDeadTree() {
        let tree = new KlimawandelSchwarzwald.Baum("green");
        tree.drawDeadTree();
    }
})(KlimawandelSchwarzwald || (KlimawandelSchwarzwald = {}));
//# sourceMappingURL=quiz_script.js.map