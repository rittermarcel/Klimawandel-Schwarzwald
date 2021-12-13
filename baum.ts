namespace KlimawandelSchwarzwald {
    export class Baum {
        positionX: number;
        positionY: number;
        crc2: CanvasRenderingContext2D;
        constructor(_positionX: number, _positionY: number) {
            this.positionX = _positionX;
            this.positionY = _positionY;

        }
        public drawTree(): void {
            let image: any = document.getElementById("treePic1");
            crc2.drawImage(image, this.positionX, this.positionY);
        
        }
        public drawDeadTree(): void {
            let image: any = document.getElementById("deadTreePic1");
            crc2.drawImage(image, this.positionX, this.positionY);
        }
    }


}

