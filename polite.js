

var words = [
  'l\'arrogance',
  'l\'affection',
  'la disctinction',
  'l\'attente',
  'la volonté',
  'l\'attente',
  'l\'exclamation'
];

var adjectives = [
  "inopinée",
  "exclamative",
  "affectueuse",
  "mutuelle",
  "profonde",
  "distinguée",
  "sincère",
  "certaine",
  "respectueuses"
];

var verbs = [
  'accepter',
  'rejeter',
  'comprendre',
  'croire',
  'mesurer',
  'remercier',
  'peser',
  'remarquer',
  'constater'
];

var wordsPlural = [
  "amitiés",
  "salutations",
  "obligations",
  "observations",
  "ententes",
  "exclamations",
  "oblitérations",
  "croyances",
  "amours",
  "volontés"
];

var adjectivesPlural = [
  "sanguignolantes",
  "affectueuses",
  "sincères",
  "versatiles",
  "putrides",
  "sordides",
  "hyporcrites",
  "désinvoltes",
  "épicuriennes",
  "manichéennes"
];

var person = [
  "chers ornythorinques",
  "bandes de prêtres matrimoniaux",
  "chers syndicalistes corrompus",
  "chers adorateurs de chiens borgnes",
  "mes amis protéifornes et divers",
  "chers collègues du second degré",
  "monsieur, madame"
];


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var output = "Veuillez " + verbs[getRandomInt(0,verbs.length-1)] + ', '+ person[getRandomInt(0,person.length-1)] + ', ' + words[getRandomInt(0,words.length-1)] + " " + adjectives[getRandomInt(0,adjectives.length-1)] + " de mes " + wordsPlural[getRandomInt(0,wordsPlural.length-1)] + " " + adjectivesPlural[getRandomInt(0,adjectivesPlural.length-1)] + ".";

console.log(output);
