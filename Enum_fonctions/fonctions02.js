// declaration de fonction fonction à la JS
/* let f = function(x,y){
    return x+y;
}
console.log(f(1,2)); */
// syntaxe de function lambda : des arrows funtion : (params) => (code)
// definition identique a f, mais plus simple q( tres utile en Angular)
/* let g =(a,b) =>{
return a+b;
}
console.log(g(1,2));

let h = (x: number,y: number) =>{
    return x+y;
    }
    console.log(h(1,2)); */
var infosClients = function (id, nom, email) {
    console.log("ID :", id);
    console.log("Nom : ", nom);
    if (email != undefined)
        console.log("Email : ", email);
};
console.log(infosClients(1, "Gilbert"));
console.log(infosClients(12, "helene@gmail.com"));
var calculprixttc = function (nomproduit, prixht, tauxtva) {
    var prixttc = prixht * (1 + tauxtva / 100);
    return console.log(calculprixttc("cd", 9000, 20));
};
