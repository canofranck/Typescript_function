//Dans les tableaux , precise le type d 'elements que ceux ci
//continennt
let x =[1,2]; // x est un tableau de number[] : ne peut contenir que des nombres
x[2] = 3 ; // on peut rajouter des elements nombres dans x
x[3] = 'toto'; // erreur 'toto' n est pas un ombres

let y :number[]=[]; // tableau vide de nombre : on ne
                    // pourra rajouter que des nombres
y[0] = 3;  // ok car 3 est un nombre

let z: (number | string) [] = []; // tableau vide contenant des nombres
                                // ou des string  
z[0] = 'toto'; // ok : 'toto' est un string
z[1] = 3;      // ok  : ok est un nombre
z[2] = false; //  nok : false n est ni un nombre ni un string 


//les tuples : on ndique precisement le type de chaque elemeent

let t:[number,string] = [1,'toto']; // tuple dont le 1er élément est une nombre et le 2e un string
t=[3,'tata']; // ok
t=['toto',2]; // erreur : 'toto est pas un number, et 2 pas un string