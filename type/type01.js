//Typescript a ses propres types,compatibles avec ceuw de JS
//Apres complilation, en JS, ces variables pourront eventuellement
//avoir un autre type (cf .tableau)
//TS peut inferer des types a partir des valeurs , comme JS
var x = 4; // type number
var y = 'toto'; // type string
var z = false; // type boolean
// les tableaux :
var tab1 = [1, 2, 3]; // type number[] : tableau contenant uniquement que des entiers
var tab2 = ['toto', 'titi']; // type string tableau contenant uniquement que des string
var tab3 = [3, 'toto']; // type (number | string) tableau pouvant contenir que des entiers et strings
