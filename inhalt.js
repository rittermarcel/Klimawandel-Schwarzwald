"use strict";
var KlimawandelSchwarzwald;
(function (KlimawandelSchwarzwald) {
    loadArtikel("data.json"); //erste methode überhaupt, deshalb als erstes aufgerufen
    async function loadArtikel(_url) {
        let response = await fetch(_url); //fragen ob es eine gibt wenn ja auf json datei zugreifen in diese in Response speichern
        let jsonArray = await response.json(); //In json umwandeln
        KlimawandelSchwarzwald.fragen = await JSON.parse(JSON.stringify(jsonArray)); //json text datein in string umwandeln
        KlimawandelSchwarzwald.handleLoad(); //methode aufrufen
    }
})(KlimawandelSchwarzwald || (KlimawandelSchwarzwald = {}));
//# sourceMappingURL=inhalt.js.map