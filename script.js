const game = document.querySelector("#game");

const obblighi = [
  "Comportati come un bambino eccitato dell'asilo e gioca con un oggetto vicino",
  "Scatena il tuo pianto più convincente.",
  "Racconta a tutti dell'ultima volta che hai mentito.",
  "E' tutto in pendant? Dì alla chat se il tuo pube corrisponde ai tuoi capelli",
  "Lascia perplesso tuo padre con un messaggio incomprensibile pieno di emoji random",
  "Discuti dei pro e dei contro dell'eutanasia degli anziani",
  "Arrabbiati con la chat per qualcosa di insignificante",
  "Confessa! Ammetti se fai pipì sotto la doccia",
  "Fai la faccia più brutta che puoi fare",
  "Balla in modo hot ma tenendo le gambe ferme e le braccia flosce",
  "Scegli un oggetto e usalo in 5 modi diversi dal uso effettivo",
  "Racconta alla chat dell'ultima volta che sei stato una brutta persona",
  "Sei a un colloquio: descrivi il tuo difetto peggiore come se fosse un pregio",
  "Fai eccitare la chat. (5 tentativi)",
  "Racconta dettagliatamente a tutti il tuo appuntamento più imbarazzante.",
  "Fatti un selfie e mandalo al genitore del tuo avversario. Se è single, includi il numero di telefono",
  "Flirta in modo aggressivo con una lampada o un altro mobile",
  `Disegna qualcosa che decide l'avversario sul braccio. Scatta una foto e pubblicala sui social con la didascalia "Nuovo tatuaggio! taggando l'avversario`,
  "Crea uno spot pubblicitario su un oggetto a scelta della chat",
  "Sei un manichino: la chat decide la posa",
  "Pensa in fretta: hai 5 secondi per dire qualcosa di profondo e originale",
  "Manda un messaggio a un familiare e chiedi se puoi prendere in prestito del nastro adesivo, un'accetta e una pala",
  "Infila 2 dita nel naso",
  "Tira su la maglietta e mostra fieramente la tua pancia, gonfiandola",
  "Lecca il tavolo...sperando sia pulito",
  "Fatti emozionare! Esegui una scena da telenovela in cui l'avversario ti ha tradito",
  "Canta una filastrocca in maniera sporca",
  "Insulta brutalmente ogni persona che commenta in chat",
  'Scatta e pubblica un brutto selfie con la didascalia "#ditemichesonocarino"',
  "Quanta indignazione! Spiega casualmente la tua opinione più controversa",
  "Racconta il tuo più grande rimpianto e cosa avresti voluto fare diversamente",
  "Urla la tua serie preferita di parolacce con 10 parole",
  "Crea un tifo passivo-aggressivo per l'avversario",
  "Siediti su una sedia invisibile il più a lungo possibile",
  "Descrivi con un disegno dettagliato la notte in cui sei stato concepito",
  "Sei un gatto che ha appena finito di usare la lettiera. Lavati con la lingua e non tralasciare i punti importanti",
  "Fingi un orgasmo ad altissima voce",
  "La chat è una classe dell'asilo, con gli occhi spalancati. Spiegagli cos'è la doppia penetrazione",
  "Fai fare incubi al tuo avversario descrivendo in dettaglio come sedurresti un suo genitore",
  "Sei un mimo intrappolato in una scatola, ma ogni parete ha un glory hole...buon divertimento",
  `Manda un messaggio con scritto "In realtà ho un piano..." a un contatto scelto dall'avversario`,
  "Descrivi l'ultima volta che hai pensato di lasciarti sfuggire una scoreggia...ma non era una scoreggia",
  "Racconta il sogno sessuale più scomodo che tu possa ricordare",
  "Sbalordisci tutti con un rap freestyle improvvisato",
  `Scatta una foto con in mano un oggetto a scelta dell'avversario e pubblicala sui social con la didascalia "Sentirsi avventurosi ;)"`,
  "Trova l'immagine di un'ecografia e pubblicala sui social senza didascalia",
  "Manda un messaggio a uno dei tuoi genitori con un link a Pornhub",
  "Svolgi un compito a scelta dell'avversario come se fossi il protagonista di un porno scadente e a basso budget",
  "Manda un messaggio all'ultima persona a cui il tuo avversario ha mandato un messaggio",
  "Descrivi e recita la cosa più strana che ti abbia mai eccitato",
  "Racconta la tua esperienza sessuale più incasinata",
  "Leggi drammaticamente gli ultimi cinque messaggi che hai inviato ad alta voce",
  "Pomicia con la tua ascella come fossi una ragazzina arrapata del liceo",
  "Consenti all'avversario di aggiornare il tuo stato su Facebook senza utilizzare immagini",
  "Disegnati un monociglio con un pennarello",
];

const modificatori = [
  "poi congratulati con te stesso per il lavoro ben fatto",
  "due volte",
  'mentre gridi "LA MIGLIORE NOTTE DI SEMPRE!!!"',
  "con gli occhi chiusi",
  "mentre comunichi solo a miagolii",
  "mentre descrivi tutto ciò che vedi come se fossi un cane che ha imparato a parlare",
  "mentre impugni un oggetto fallico",
  "tenendo in bocca un oggetto a scelta dell'avversario",
  "mantenendo una faccia seria",
  "senza interrompere il contatto visivo con la cam",
  "mentre suoni una chitarra invisibile",
  "mentre la gravità si intensifica improvvisamente",
  "mentre trattieni la diarrea esplosiva che minaccia di esplodere dal tuo corpo",
  "mentre seduci la cam con lo sguardo",
  "mentre scacci una mosca immaginaria",
  "mentre l'avversario ti urla come se fossi al campo di addestramento",
  "mentre twerki",
  "mentre indossi un oggetto scelto dall'avversario come cappello",
  "mentre muovi i fianchi in modo sexy",
  "come un parassita cerca di insinuarsi nel tuo corpo attraverso il tuo buco del culo",
  "MENTRE PARLI IN MAIUSCOLO!!",
  "mentre trattieni il respiro",
  "mentre ti accarezzi i capezzoli",
  "mentre stai partorendo",
  "mentre enfatizzi tutto come un personaggio di un anime",
  "mentre ti mordi le unghie",
  "tenendo la nota più lunga possibile",
  "mentre sbavi pesantemente",
  "mentre mastichi cibo come un animale da fattoria",
  "mentre ti arriva la ventata di una brutta scoreggia",
  "mentre l'avversario trattiene il respiro",
  "mentre ti muovi in slow-motion",
  "mentre fletti i muscoli come un bodybuilder",
  "mentre mostri quanto sei infastidito",
];

const penitence = [
  "Mungi una mucca in modo seducente ogni volta che parli",
  "Shh... questa è una biblioteca! Sussurra tutto quello che dici",
  "L'avversario ha ucciso la tua famiglia. Sii passivo-aggressivo al riguardo.",
  "Sei un cane arrabbiato. Ringhia ogni volta che qualcuno scopre una nuova carta",
  "Dì tutto nel modo più sarcastico possibile. Perché tutti ADORANO il sarcasmo",
  "Hai un'erezione furiosa. Imbarazzante!",
  "Sei un alieno appena atterrato sulla terra: racconta a tutti la tua storia",
  "Sei un cavallo. Non puoi sederti su una sedia, perché le sedie sono per le persone",
  "Sospetti che qualcuno in live sia una spia e sei determinato a capire chi",
  "Sei in un trip. Forse mangiare tutti quei funghi prima di giocare non è stata una buona idea",
  "Inverti i numeri dei tuoi anni. Questa è la tua nuova età. Agisci di conseguenza",
  "E' il giorno degli opposti! Comportati come se tutto ti facesse incazzare. Le cose che realmente ti fanno incazzare invece le ami!",
  "Ogni volta che parli, il tuo sedere prude orribilmente",
  "Tutto quello che dici deve essere formulato come una domanda",
  "Non puoi più usare le mani",
];

function findAndRemoveChoice(type) {
  const index = Math.floor(Math.random() * type.length);
  const string = type[index];
  type.splice(type.indexOf(string), 1);
  return string;
}

function chooseModifier() {
  const index = Math.floor(Math.random() * modificatori.length);
  const string = modificatori[index];
  modificatori.splice(modificatori.indexOf(string), 1);
  return string;
}

function startGame() {
  if (obblighi.length <= 1) {
    game.innerHTML = `
    <h3>Sei sopravvisuto...ma ti aspettiamo ancora!</h3>
    `;
    document.querySelector("#fatto-button").textContent = "Ricomincia da capo";
    document.querySelector("#fatto-button").onclick = () => location.reload();
  } else {
    obblighi.length >= 4 ? makeGame() : makeEnd();
  }
}

function makeGame() {
  const choice1 = findAndRemoveChoice(obblighi);
  const choice2 = findAndRemoveChoice(obblighi);
  game.innerHTML = `
        <div style="display:flex; flex-direction:row; justify-content: space-between;">
        <button class="btn border-0 shadow-none  text-white" style="width: 45%; font-size: 1.5rem; margin:0;" onclick="addModifier(this)"><h3 style="text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 2px 2px 20px  #000;">${choice1}</h3></button>
        <button class="btn border-0 shadow-none  text-white" style="width: 45%; font-size: 1.5rem; margin:0;" onclick="addModifier(this)"><h3 style="text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 2px 2px 20px  #000;">${choice2}</h3></button>  
        </div>
    `;
}

function makeEnd() {
  const choice1 = obblighi[0];
  const choice2 = obblighi[1];
  obblighi.splice(0, obblighi.length - 1);
  game.innerHTML = `
  <div style="display:flex; flex-direction:row ">
  <button class="btn border-0 shadow-none text-white" style="width: 45%; font-size: 1.5rem; margin:0;" onclick="addModifier(this)"><h3 style="text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 2px 2px 20px  #000;">${choice1}</h3></button>
  <button class="btn border-0 shadow-none text-white" style="width: 45%; font-size: 1.5rem; margin:0;" onclick="addModifier(this)"><h3 style="text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 2px 2px 20px  #000;">${choice2}</h3></button>  
  </div>
  `;
}

function addModifier(target) {
  const modifier = chooseModifier();
  game.innerHTML = `
  <div style="display:flex; flex-direction:column ">
  <h5 class="text-white" style="font-size: 2rem; margin:0; text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 2px 2px 20px  #000;">${target.textContent}...</h5>
  <h5 class="text-white" style="font-size: 2rem; margin:0; text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 2px 2px 20px  #000;"><b>${modifier}</b></h5>
  </div>
`;
}

function addPenitence(button) {
  const target = document.querySelector("#player-" + button.value);
  const p = document.createElement("h5");
  p.className = "text-white";
  p.style.setProperty(
    "text-shadow",
    "2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 2px 2px 20px  #000"
  );
  const penitenza = findAndRemoveChoice(penitence);
  p.textContent = penitenza;
  target.append(p);
}

function endGame() {
  game.innerHTML = `
    <h3 class="text-white shadow" style="text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 2px 2px 20px  #000;">Sei sopravvisuto...ma ti aspettiamo per una nuova sfida!! </h3>
    `;
}
