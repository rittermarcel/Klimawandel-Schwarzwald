"use strict";
var KlimawandelSchwarzwald;
(function (KlimawandelSchwarzwald) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let videoBox = document.getElementById("videoBox");
        let video = document.getElementById("videos");
        let textBox = document.getElementById("textBox");
        textBox.hidden = true;
        video.onended = () => {
            videoEnded();
        };
        function videoEnded() {
            textBox.hidden = false;
            videoBox.hidden = true;
        }
    }
})(KlimawandelSchwarzwald || (KlimawandelSchwarzwald = {}));
//# sourceMappingURL=script.js.map