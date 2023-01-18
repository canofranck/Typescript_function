// si l on declare une variable sans lui affecter une valeur
// son type = any .dans ce cas , on peut lui affecter n importe
// quelle valeur , son type sera toujours anu.

let x;// type = any

x =4; // x est encore de type any mais sa valeur est 4

x ='toto'; // instructions valiide : x est type any et vaut 'toto'

// on peut imposer le type d une variable lors de sa declarationn :
let y : number; // y de type number
y = 4 ; // ok 4 est bien un nombre