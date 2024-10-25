var ProfessionistaMedia = /** @class */ (function () {
    function ProfessionistaMedia(nome, cognome, specializzazione, esperienza, interessi) {
        this.nome = nome;
        this.cognome = cognome;
        this.specializzazione = specializzazione;
        this.esperienza = esperienza;
        this.interessi = interessi;
    }
    ProfessionistaMedia.prototype.partecipaProgramma = function (programma) {
        programma.aggiungiPartecipante(this);
        console.log("".concat(this.nome, " ").concat(this.cognome, " iscritt* al programma: ").concat(programma.titolo));
    };
    return ProfessionistaMedia;
}());
var ProgrammaFormazione = /** @class */ (function () {
    function ProgrammaFormazione(titolo, descrizione, ambitoSpecializzazione, durata) {
        this.elencoPartecipanti = [];
        this.titolo = titolo;
        this.descrizione = descrizione;
        this.ambitoSpecializzazione = ambitoSpecializzazione;
        this.durata = durata;
    }
    ProgrammaFormazione.prototype.aggiungiPartecipante = function (professionista) {
        this.elencoPartecipanti.push(professionista);
        console.log("".concat(professionista.nome, " ").concat(professionista.cognome, " aggiunt* al programma: ").concat(this.titolo));
    };
    return ProgrammaFormazione;
}());
var Piattaforma = /** @class */ (function () {
    function Piattaforma(nome, tipo, descrizione, categorieContenuto) {
        this.nome = nome;
        this.tipo = tipo;
        this.descrizione = descrizione;
        this.categorieContenuto = categorieContenuto;
    }
    Piattaforma.prototype.pubblicaContenuto = function (professionista, contenuto) {
        console.log("Pubblicando contenuto di ".concat(professionista.nome, " ").concat(professionista.cognome, " su ").concat(this.nome, ": ").concat(contenuto));
    };
    return Piattaforma;
}());
// Crea oggetti ProfessionistaMedia
var giornalista = new ProfessionistaMedia('Laura', 'Rossi', 'Giornalismo', 5, ['Politica', 'Ambiente']);
var regista = new ProfessionistaMedia('Anna', 'Verdi', 'Regia e Documentari sociali', 8, ['Diritti Umani', 'Parità di Genere']);
var attivista = new ProfessionistaMedia('Marco', 'Bianchi', 'Comunicazione', 7, ['Giustizia Sociale', 'Inclusione']);
// Crea oggetti ProgrammaFormazione
var programmaMentorship = new ProgrammaFormazione('Mentorship per Giornaliste', 'Un programma di mentorship per donne nel giornalismo...', 'Giornalismo', 6);
var programmaRegia = new ProgrammaFormazione('Regia Inclusiva', 'Formazione per creare documentari sociali e inclusivi.', 'Regia', 4);
// Crea oggetti Piattaforma
var piattaformaBlog = new Piattaforma('Blog Voci', 'online', 'Una piattaforma per promuovere contenuti inclusivi', ['Giornalismo', 'Storie di Donne']);
var piattaformaSocial = new Piattaforma('Social Media Voci', 'social', 'Promozione di dibattiti e storie inclusivi', ['Inclusione', 'Giustizia Sociale']);
var piattaformaYouTube = new Piattaforma('YouTube Voci', 'audiovisivo', 'Canale YouTube dedicato a storie di donne e inclusione', ['Documentari', 'Parità di Genere']);
// Aggiungi partecipanti ai programmi di formazione
giornalista.partecipaProgramma(programmaMentorship);
regista.partecipaProgramma(programmaRegia);
attivista.partecipaProgramma(programmaMentorship);
// Pubblica contenuti sulle piattaforme
piattaformaBlog.pubblicaContenuto(giornalista, 'Un articolo sulla parità di genere nel mondo politico.');
piattaformaSocial.pubblicaContenuto(attivista, 'Un video su come promuovere giustizia sociale attraverso la comunicazione.');
piattaformaYouTube.pubblicaContenuto(regista, 'Un documentario sulla lotta per la parità di genere nel settore cinematografico.');
