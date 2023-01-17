// declarations de fonctions avec et sans typage
function f(x,y){ // fonctionne avec des number et string
return x+y;
}
console.log(f(8,4),' ',f('toto','tata')); // ok

function g(x:number,y:number){
    return (x+y);
}
console.log(g(8,4),' ',g('toto','tata')); // ok