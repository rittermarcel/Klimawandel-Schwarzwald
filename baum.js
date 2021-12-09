"use strict";
var KlimawandelSchwarzwald;
(function (KlimawandelSchwarzwald) {
    class Baum {
        constructor(_positionX, _positionY) {
            this.positionX = _positionX;
            this.positionY = _positionY;
        }
        drawTree() {
            const image = document.getElementById("treePic1");
            KlimawandelSchwarzwald.crc2.drawImage(image, this.positionX, this.positionY);
        }
        drawDeadTree() {
            const image = document.getElementById("deadTreePic1");
            KlimawandelSchwarzwald.crc2.drawImage(image, this.positionX, this.positionY);
        }
    }
    KlimawandelSchwarzwald.Baum = Baum;
})(KlimawandelSchwarzwald || (KlimawandelSchwarzwald = {}));
//# sourceMappingURL=baum.js.map