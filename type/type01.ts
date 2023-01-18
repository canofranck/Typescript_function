//Typescript a ses propres types,compatibles avec ceuw de JS
//Apres complilation, en JS, ces variables pourront eventuellement
//avoir un autre type (cf .tableau)

//TS peut inferer des types a partir des valeurs , comme JS
let x = 4; // type number
let y = 'toto'; // type string
let z = false; // type boolean

// les tableaux :
let tab1=[1,2,3] // type number[] : tableau contenant uniquement que des entiers
let tab2 = ['toto','titi'] // type string tableau contenant uniquement que des string
let tab3= [3,'toto']; // type (number | string) tableau pouvant contenir que des entiers et strings
