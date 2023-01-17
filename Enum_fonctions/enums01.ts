// contrairement à JS , typescript possede la notion d enumeration
//qui a similaire au language C
// definition une enumeration indique les noms de valeurs
enum Couleur {Rouge = 0 , Vert = 1 , Bleu =2 };

//utilisation
const ma_couleur= Couleur.Rouge;

// Definition : une enumeration en indiquant precisement les valeurs 

enum Taille {Petit = 3, Moyen = 10, Grand = 11};
const ma_taille : Taille=Taille.Grand;
console.log(ma_taille);
