namespace KlimawandelSchwarzwald {
    export class Baum {
        color: string;
        positionX: number;
        positionY: number;
        crc2: CanvasRenderingContext2D;
        constructor(_color: string, _positionX: number, _positionY: number) {
            this.color = _color;
            this.positionX = _positionX;
            this.positionY = _positionY;

        }
        public drawTree(): void {
            console.log("Gesunder Baum");
            crc2.beginPath();
            crc2.fillStyle = "brown";
            crc2.rect(this.positionX, this.positionY, 20, 80);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(this.positionX + 10, this.positionY);
            crc2.lineTo(this.positionX + 60, this.positionY);
            crc2.lineTo(this.positionX + 10, this.positionY - 85);
            crc2.lineTo(this.positionX - 40, this.positionY);
            crc2.lineTo(this.positionX + 10, this.positionY);
            crc2.fillStyle = this.color;
            crc2.fill();
        }
        public drawDeadTree(): void {
            console.log("Toter Baum");
            crc2.beginPath();
            crc2.fillStyle = "brown";
            crc2.rect(this.positionX, this.positionY, 20, 140);
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(this.positionX, this.positionY + 60);
            crc2.lineTo(this.positionX - 30, this.positionY + 30);
            crc2.moveTo(this.positionX - 10, this.positionY + 50);
            crc2.lineTo(this.positionX - 30, this.positionY + 70);
            crc2.moveTo(this.positionX + 20, this.positionY + 30);
            crc2.lineTo(this.positionX + 50, this.positionY + 10);
            crc2.moveTo(this.positionX + 40, this.positionY - 10);
            crc2.lineTo(this.positionX + 30, this.positionY + 23);
            crc2.strokeStyle = "brown";
            crc2.stroke();
        }
    }


}

