namespace KlimawandelSchwarzwald {
    export class Baum {
        color: string;


        constructor(_color: string) {
            this.color = _color;
        }
        public drawTree(): void {
            console.log("Gesunder Baum");
            crc2.beginPath();
            crc2.fillStyle = "brown";
            crc2.rect(70, 165, 20, 80);
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(80, 165);
            crc2.lineTo(130, 165);
            crc2.lineTo(80, 80);
            crc2.lineTo(30, 165);
            crc2.lineTo(80, 165);
            crc2.fillStyle = this.color;
            crc2.fill();
        }
        public drawDeadTree(): void {
            console.log("Toter Baum");

            crc2.beginPath();
            crc2.fillStyle = "brown";
            crc2.rect(300, 100, 20, 140);
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(300, 160);
            crc2.lineTo(270, 130);
            crc2.moveTo(290, 150);
            crc2.lineTo(270, 170);
            crc2.moveTo(320, 130);
            crc2.lineTo(350, 110);
            crc2.moveTo(340, 90);
            crc2.lineTo(330, 123);
            crc2.strokeStyle = "brown";
            crc2.stroke();
        }
    }
    


}