var _ = require('underscore');

var words = [
  {content:'l\'arrogance', gender:'feminine'},
  {content:'l\'affection', gender:'feminine'},
  {content:'la disctinction', gender:'feminine'},
  {content:'l\'attente', gender:'feminine'},
  {content:'la volonté', gender:'feminine'},
  {content:'l\'attente', gender:'feminine'},
  {content:'l\'exclamation', gender:'feminine'},
  {content:'le sentiment', gender:'masculine'},
  {content:'le boulversement', gender:'masculine'},
  {content:'le retournement', gender:'masculine'},
  {content:'l\'émoi', gender:'masculine'}
];

var adjectives = [
  { masculine: "inopiné", feminine:"inopinée"},
  { masculine: "exclamatif", feminine:"exclamative"},
  { masculine: "affectueux", feminine:"affectueuse"},
  { masculine: "mutuel", feminine:"mutuelle"},
  { masculine: "profond", feminine:"profonde"},
  { masculine: "distingué", feminine:"distinguée"},
  { masculine: "sincère", feminine:"sincère"},
  { masculine: "certain", feminine:"certaine"},
  { masculine: "respectueux", feminine:"respectueuse"}
];

var verbs = [
  {content: 'accepter', vowel: true},
  {content: 'admettre', vowel: true},
  {content: 'expliquer', vowel: true},
  {content: 'ommettre', vowel: true},
  {content: 'assimilier', vowel: true},
  {content: 'rejeter', vowel: false},
  {content: 'comprendre', vowel: false},
  {content: 'croire', vowel: false},
  {content: 'mesurer', vowel: false},
  {content: 'remercier', vowel: false},
  {content: 'peser', vowel: false},
  {content: 'remarquer', vowel: false},
  {content: 'constater', vowel: false}
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

var starts = [
  { content: "Veuillez ", vowel: false},
  { content: "Je vous prie de ", vowel: false},
  { content: "Je vous prie d'", vowel: true}
]

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var verb = verbs[getRandomInt(0,verbs.length-1)];
var possibleStarts = _.filter(starts, {vowel: verb.vowel});
var start = possibleStarts[getRandomInt(0,possibleStarts.length-1)];

var word = words[getRandomInt(0,words.length-1)];
var adjective = adjectives[getRandomInt(0,adjectives.length-1)];

var output = start.content + verb.content + ', '+ person[getRandomInt(0,person.length-1)] + ', ' + word.content + " " + adjective[word.gender] + " de mes " + wordsPlural[getRandomInt(0,wordsPlural.length-1)] + " " + adjectivesPlural[getRandomInt(0,adjectivesPlural.length-1)] + ".";

console.log(output);
