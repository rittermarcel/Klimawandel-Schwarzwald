"use strict";
var KlimawandelSchwarzwald;
(function (KlimawandelSchwarzwald) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let textBox = document.getElementById("textBox");
        textBox.hidden = true;
        let video = document.getElementById("videos");
        video.onended = () => {
            videoEnded();
        };
        function videoEnded() {
            console.log("ok");
            textBox.hidden = false;
            window.location.href = "#textBox";
        }
    }
})(KlimawandelSchwarzwald || (KlimawandelSchwarzwald = {}));
//# sourceMappingURL=script.js.map