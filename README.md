# Voci: Un Media Brand per la Parità di Genere

### Introduzione

**Voci** è un media brand ipotetico nato per dare spazio alle storie delle donne e promuovere la parità di genere. Attraverso contenuti pubblicati su diverse piattaforme, come blog, social media e YouTube, **Voci** racconta le voci delle donne che stanno cambiando il mondo, condividendo esperienze, lotte e conquiste. Il progetto ha l'obiettivo di rompere il silenzio su questioni di disuguaglianza e offrire una narrazione più inclusiva e diversificata.

### Visione

Contribuire al raggiungimento della parità di genere in Europa, amplificando le voci femminili spesso ignorate dal panorama mediatico.

### Missione

Dare voce alle donne che stanno cambiando il mondo con piccoli e grandi passi, attraverso storie, interviste e dibattiti che ispirano e promuovono il cambiamento sociale.

---

## Il Progetto

Questo progetto, sviluppato in **TypeScript**, modella la struttura operativa di **Voci** attraverso la rappresentazione delle professioniste dei media, dei programmi di formazione e delle piattaforme di pubblicazione. Il progetto include la definizione di interfacce e classi che simulano il funzionamento dell'organizzazione, illustrando come la tecnologia può facilitare la promozione della parità di genere nei media.

### Componenti del Sistema

1. **Professioniste dei Media**
   - **Descrizione**: Donne che lavorano o aspirano a lavorare nei settori della produzione mediatica, come giornalismo, regia e produzione.
   - **Proprietà**: Nome, cognome, specializzazione, anni di esperienza e interessi.
   - **Funzionalità**: Possono partecipare a programmi di formazione per migliorare le proprie competenze professionali.

2. **Programmi di Formazione**
   - **Descrizione**: Programmi offerti da **Voci** per promuovere la crescita professionale, mentorship e specializzazione tecnica per le donne nel settore dei media.
   - **Proprietà**: Titolo, descrizione, ambito di specializzazione, durata e elenco partecipanti.
   - **Funzionalità**: Aggiungere nuove partecipanti ai programmi per la formazione e lo sviluppo delle loro competenze.

3. **Piattaforme di Pubblicazione**
   - **Descrizione**: Canali e piattaforme (blog, social media e YouTube) attraverso cui **Voci** pubblica e promuove contenuti che rispecchiano diversità e inclusività.
   - **Proprietà**: Nome, tipo (stampato, online, audiovisivo), descrizione e categorie di contenuto.
   - **Funzionalità**: Pubblicare i contenuti prodotti dalle professioniste dei media, come articoli, video e documentari.

### Obiettivi del Progetto

- Simulare la creazione di oggetti che rappresentano donne professioniste dei media.
- Modellare programmi di formazione offerti da **Voci** per aiutare queste professioniste a crescere.
- Gestire piattaforme digitali e tradizionali che collaborano con **Voci** per diffondere contenuti inclusivi.
- Favorire la connessione tra professioniste dei media, programmi di formazione e piattaforme di pubblicazione.

---

## Struttura del Codice

### Interfacce Principali

1. **IProfessionistaMedia**: Rappresenta una professionista dei media, con proprietà e metodi per partecipare a programmi di formazione.
2. **IProgrammaFormazione**: Modella i programmi di mentorship e formazione, permettendo l'aggiunta di partecipanti.
3. **IPiattaforma**: Definisce le piattaforme di pubblicazione, permettendo la pubblicazione di contenuti che promuovono parità di genere e diversità.

### Classi Implementate

- **ProfessionistaMedia**: Implementa l'interfaccia `IProfessionistaMedia`, gestendo le informazioni sulle professioniste e la loro partecipazione ai programmi.
- **ProgrammaFormazione**: Gestisce i dettagli e i partecipanti di ciascun programma di formazione.
- **Piattaforma**: Rappresenta le piattaforme di pubblicazione che collaborano con **Voci**.

### Esempio di Funzionamento

Ecco un esempio di utilizzo delle classi del progetto:

```typescript
// Crea oggetti ProfessionistaMedia
const giornalista = new ProfessionistaMedia('Laura', 'Rossi', 'Giornalismo', 5, ['Politica', 'Ambiente']);
const regista = new ProfessionistaMedia('Anna', 'Verdi', 'Regia e Documentari sociali', 8, ['Diritti Umani', 'Parità di Genere']);
const attivista = new ProfessionistaMedia('Marco', 'Bianchi', 'Comunicazione', 7, ['Giustizia Sociale', 'Inclusione']);

// Crea oggetti ProgrammaFormazione
const programmaMentorship = new ProgrammaFormazione('Mentorship per Giornaliste', 'Un programma di mentorship...', 'Giornalismo', 6);
const programmaRegia = new ProgrammaFormazione('Regia Inclusiva', 'Formazione per creare documentari sociali e inclusivi.', 'Regia', 4);

// Crea oggetti Piattaforma
const piattaformaBlog = new Piattaforma('Blog Voci', 'online', 'Una piattaforma per promuovere contenuti inclusivi', ['Giornalismo', 'Storie di Donne']);
const piattaformaYouTube = new Piattaforma('YouTube Voci', 'audiovisivo', 'Canale YouTube dedicato a storie di donne e inclusione', ['Documentari', 'Parità di Genere']);

// Aggiungi partecipanti ai programmi
giornalista.partecipaProgramma(programmaMentorship);
regista.partecipaProgramma(programmaRegia);
attivista.partecipaProgramma(programmaMentorship);

// Pubblica contenuti sulle piattaforme
piattaformaBlog.pubblicaContenuto(giornalista, 'Un articolo sulla parità di genere nel mondo politico.');
piattaformaYouTube.pubblicaContenuto(regista, 'Un documentario sulla lotta per la parità di genere nel settore cinematografico.');
