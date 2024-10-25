interface IProfessionistaMedia {
    nome: string;
    cognome: string;
    specializzazione: string; // giornalismo, regia, produzione
    esperienza: number; // anni di esperienza
    interessi: string[];

    partecipaProgramma(programma: IProgrammaFormazione): void;
}

interface IProgrammaFormazione {
    titolo: string;
    descrizione: string;
    ambitoSpecializzazione: string;
    durata: number; // in mesi o settimane
    elencoPartecipanti: IProfessionistaMedia[];

    aggiungiPartecipante(professionista: IProfessionistaMedia): void;
}

interface IPiattaforma {
    nome: string;
    tipo: string; // stampato, online, audiovisivo
    descrizione: string;
    categorieContenuto: string[];

    pubblicaContenuto(professionista: IProfessionistaMedia, contenuto: string): void;
}

class ProfessionistaMedia implements IProfessionistaMedia {
    nome: string;
    cognome: string;
    specializzazione: string;
    esperienza: number;
    interessi: string[];

    constructor(nome: string, cognome: string, specializzazione: string, esperienza: number, interessi: string[]) {
        this.nome = nome;
        this.cognome = cognome;
        this.specializzazione = specializzazione;
        this.esperienza = esperienza;
        this.interessi = interessi;
    }

    partecipaProgramma(programma: IProgrammaFormazione): void {
        programma.aggiungiPartecipante(this);
        console.log(`${this.nome} ${this.cognome} iscritt* al programma: ${programma.titolo}`);
    }
}

class ProgrammaFormazione implements IProgrammaFormazione {
    titolo: string;
    descrizione: string;
    ambitoSpecializzazione: string;
    durata: number;
    elencoPartecipanti: IProfessionistaMedia[] = [];

    constructor(titolo: string, descrizione: string, ambitoSpecializzazione: string, durata: number) {
        this.titolo = titolo;
        this.descrizione = descrizione;
        this.ambitoSpecializzazione = ambitoSpecializzazione;
        this.durata = durata;
    }

    aggiungiPartecipante(professionista: IProfessionistaMedia): void {
        this.elencoPartecipanti.push(professionista);
        console.log(`${professionista.nome} ${professionista.cognome} aggiunt* al programma: ${this.titolo}`);
    }
}

class Piattaforma implements IPiattaforma {
    nome: string;
    tipo: string;
    descrizione: string;
    categorieContenuto: string[];

    constructor(nome: string, tipo: string, descrizione: string, categorieContenuto: string[]) {
        this.nome = nome;
        this.tipo = tipo;
        this.descrizione = descrizione;
        this.categorieContenuto = categorieContenuto;
    }

    pubblicaContenuto(professionista: IProfessionistaMedia, contenuto: string): void {
        console.log(`Pubblicando contenuto di ${professionista.nome} ${professionista.cognome} su ${this.nome}: ${contenuto}`);
    }
}

// Crea oggetti ProfessionistaMedia
const giornalista = new ProfessionistaMedia('Laura', 'Rossi', 'Giornalismo', 5, ['Politica', 'Ambiente']);
const regista = new ProfessionistaMedia('Anna', 'Verdi', 'Regia e Documentari sociali', 8, ['Diritti Umani', 'Parità di Genere']);
const attivista = new ProfessionistaMedia('Marco', 'Bianchi', 'Comunicazione', 7, ['Giustizia Sociale', 'Inclusione']);

// Crea oggetti ProgrammaFormazione
const programmaMentorship = new ProgrammaFormazione('Mentorship per Giornaliste', 'Un programma di mentorship per donne nel giornalismo...', 'Giornalismo', 6);
const programmaRegia = new ProgrammaFormazione('Regia Inclusiva', 'Formazione per creare documentari sociali e inclusivi.', 'Regia', 4);

// Crea oggetti Piattaforma
const piattaformaBlog = new Piattaforma('Blog Voci', 'online', 'Una piattaforma per promuovere contenuti inclusivi', ['Giornalismo', 'Storie di Donne']);
const piattaformaSocial = new Piattaforma('Social Media Voci', 'social', 'Promozione di dibattiti e storie inclusivi', ['Inclusione', 'Giustizia Sociale']);
const piattaformaYouTube = new Piattaforma('YouTube Voci', 'audiovisivo', 'Canale YouTube dedicato a storie di donne e inclusione', ['Documentari', 'Parità di Genere']);

// Aggiungi partecipanti ai programmi di formazione
giornalista.partecipaProgramma(programmaMentorship);
regista.partecipaProgramma(programmaRegia);
attivista.partecipaProgramma(programmaMentorship);

// Pubblica contenuti sulle piattaforme
piattaformaBlog.pubblicaContenuto(giornalista, 'Un articolo sulla parità di genere nel mondo politico.');
piattaformaSocial.pubblicaContenuto(attivista, 'Un video su come promuovere giustizia sociale attraverso la comunicazione.');
piattaformaYouTube.pubblicaContenuto(regista, 'Un documentario sulla lotta per la parità di genere nel settore cinematografico.');
