// contrairement à JS , typescript possede la notion d enumeration
//qui a similaire au language C
// definition une enumeration indique les noms de valeurs
var Couleur;
(function (Couleur) {
    Couleur[Couleur["Rouge"] = 0] = "Rouge";
    Couleur[Couleur["Vert"] = 1] = "Vert";
    Couleur[Couleur["Bleu"] = 2] = "Bleu";
})(Couleur || (Couleur = {}));
;
//utilisation
var ma_couleur = Couleur.Rouge;
// Definition : une enumeration en indiquant precisement les valeurs 
var Taille;
(function (Taille) {
    Taille[Taille["Petit"] = 3] = "Petit";
    Taille[Taille["Moyen"] = 10] = "Moyen";
    Taille[Taille["Grand"] = 11] = "Grand";
})(Taille || (Taille = {}));
;
var ma_taille = Taille.Grand;
console.log(ma_taille);
