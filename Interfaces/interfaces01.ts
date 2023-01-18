interface Utilisateur {
    // Définition de mon contrat
    // les champs nom,prenom et id sont obligatoires
    nom : string;  // les proprietes ont une portee public
    prenom : string;
    id : number;
}

class CompteUtilisateur {  // classe CompteUtilisateur
    nom : string; 
    prenom : string;
    id : number;

    // un constructeur
    constructor(
        nom : string,
        prenom : string,
        id : number,
    ){
        this.nom= nom;
        this.prenom = prenom;
        this.id= id ;
      }
}
const util : Utilisateur = new CompteUtilisateur("CANO","Franck",23); // je passe par l interface "Utilisateur" pour creer mon objet
console.log(`${util.nom},${util.prenom},${util.id}, `);