"use strict";
var KlimawandelSchwarzwald;
(function (KlimawandelSchwarzwald) {
    class Baum {
        constructor(_color, _positionX, _positionY) {
            this.color = _color;
            this.positionX = _positionX;
            this.positionY = _positionY;
        }
        drawTree() {
            console.log("Gesunder Baum");
            KlimawandelSchwarzwald.crc2.beginPath();
            KlimawandelSchwarzwald.crc2.fillStyle = "brown";
            KlimawandelSchwarzwald.crc2.rect(this.positionX, this.positionY, 20, 80);
            KlimawandelSchwarzwald.crc2.fill();
            KlimawandelSchwarzwald.crc2.closePath();
            KlimawandelSchwarzwald.crc2.beginPath();
            KlimawandelSchwarzwald.crc2.moveTo(this.positionX + 10, this.positionY);
            KlimawandelSchwarzwald.crc2.lineTo(this.positionX + 60, this.positionY);
            KlimawandelSchwarzwald.crc2.lineTo(this.positionX + 10, this.positionY - 85);
            KlimawandelSchwarzwald.crc2.lineTo(this.positionX - 40, this.positionY);
            KlimawandelSchwarzwald.crc2.lineTo(this.positionX + 10, this.positionY);
            KlimawandelSchwarzwald.crc2.fillStyle = this.color;
            KlimawandelSchwarzwald.crc2.fill();
        }
        drawDeadTree() {
            console.log("Toter Baum");
            KlimawandelSchwarzwald.crc2.beginPath();
            KlimawandelSchwarzwald.crc2.fillStyle = "brown";
            KlimawandelSchwarzwald.crc2.rect(this.positionX, this.positionY, 20, 140);
            KlimawandelSchwarzwald.crc2.fill();
            KlimawandelSchwarzwald.crc2.closePath();
            KlimawandelSchwarzwald.crc2.beginPath();
            KlimawandelSchwarzwald.crc2.moveTo(this.positionX, this.positionY + 60);
            KlimawandelSchwarzwald.crc2.lineTo(this.positionX - 30, this.positionY + 30);
            KlimawandelSchwarzwald.crc2.moveTo(this.positionX - 10, this.positionY + 50);
            KlimawandelSchwarzwald.crc2.lineTo(this.positionX - 30, this.positionY + 70);
            KlimawandelSchwarzwald.crc2.moveTo(this.positionX + 20, this.positionY + 30);
            KlimawandelSchwarzwald.crc2.lineTo(this.positionX + 50, this.positionY + 10);
            KlimawandelSchwarzwald.crc2.moveTo(this.positionX + 40, this.positionY - 10);
            KlimawandelSchwarzwald.crc2.lineTo(this.positionX + 30, this.positionY + 23);
            KlimawandelSchwarzwald.crc2.strokeStyle = "brown";
            KlimawandelSchwarzwald.crc2.stroke();
        }
    }
    KlimawandelSchwarzwald.Baum = Baum;
})(KlimawandelSchwarzwald || (KlimawandelSchwarzwald = {}));
//# sourceMappingURL=baum.js.map