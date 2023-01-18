//On peut imposer le type d une variabe avec l'operateur  
// : type
let x : number = 4; // superflu , 4 impliquait deja que x etait un number

let y ='tot'; // valide puisque y est de type any

let z = undefined; // z de type  any car on sait qu'on initialise ce genre de variable  
                    // pour lui affceter une autre valeur par la suite
let u : undefined = undefined; // u est de type undefined et restera toujours ce type

u=3;  // Erreur : 3 n est pas de type undefined

let v : null = null; // v de type null
v = 2; // erruer : 2 n'est pas de type null

let w1 : number = undefined; // erreur car w1 est type number et pas de type undefined
let w2 : number =null ; // erreur : number n est null
