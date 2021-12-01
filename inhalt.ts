namespace KlimawandelSchwarzwald {
    export interface Fragen { //Interface Eis
        id: string;
        frage: string;
        antwort: string;
    }
    export let fragen: Fragen[]; //aray text


    loadArtikel("data.json"); //erste methode überhaupt, deshalb als erstes aufgerufen
   
    async function loadArtikel(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);  //fragen ob es eine gibt wenn ja auf json datei zugreifen in diese in Response speichern
        let jsonArray: JSON = await response.json(); //In json umwandeln
        fragen = await JSON.parse(JSON.stringify(jsonArray)); //json text datein in string umwandeln
        handleLoad(); //methode aufrufen
    }
}