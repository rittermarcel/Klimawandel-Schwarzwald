"use strict";
var KlimawandelSchwarzwald;
(function (KlimawandelSchwarzwald) {
    class Baum {
        constructor(_color) {
            this.color = _color;
        }
        drawTree() {
            console.log("Gesunder Baum");
            KlimawandelSchwarzwald.crc2.beginPath();
            KlimawandelSchwarzwald.crc2.fillStyle = "brown";
            KlimawandelSchwarzwald.crc2.rect(70, 165, 20, 80);
            KlimawandelSchwarzwald.crc2.fill();
            KlimawandelSchwarzwald.crc2.closePath();
            KlimawandelSchwarzwald.crc2.beginPath();
            KlimawandelSchwarzwald.crc2.moveTo(80, 165);
            KlimawandelSchwarzwald.crc2.lineTo(130, 165);
            KlimawandelSchwarzwald.crc2.lineTo(80, 80);
            KlimawandelSchwarzwald.crc2.lineTo(30, 165);
            KlimawandelSchwarzwald.crc2.lineTo(80, 165);
            KlimawandelSchwarzwald.crc2.fillStyle = this.color;
            KlimawandelSchwarzwald.crc2.fill();
        }
        drawDeadTree() {
            console.log("Toter Baum");
            KlimawandelSchwarzwald.crc2.beginPath();
            KlimawandelSchwarzwald.crc2.fillStyle = "brown";
            KlimawandelSchwarzwald.crc2.rect(300, 100, 20, 140);
            KlimawandelSchwarzwald.crc2.fill();
            KlimawandelSchwarzwald.crc2.closePath();
            KlimawandelSchwarzwald.crc2.beginPath();
            KlimawandelSchwarzwald.crc2.moveTo(300, 160);
            KlimawandelSchwarzwald.crc2.lineTo(270, 130);
            KlimawandelSchwarzwald.crc2.moveTo(290, 150);
            KlimawandelSchwarzwald.crc2.lineTo(270, 170);
            KlimawandelSchwarzwald.crc2.moveTo(320, 130);
            KlimawandelSchwarzwald.crc2.lineTo(350, 110);
            KlimawandelSchwarzwald.crc2.moveTo(340, 90);
            KlimawandelSchwarzwald.crc2.lineTo(330, 123);
            KlimawandelSchwarzwald.crc2.strokeStyle = "brown";
            KlimawandelSchwarzwald.crc2.stroke();
        }
    }
    KlimawandelSchwarzwald.Baum = Baum;
})(KlimawandelSchwarzwald || (KlimawandelSchwarzwald = {}));
//# sourceMappingURL=baum.js.map