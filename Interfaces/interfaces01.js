var CompteUtilisateur = /** @class */ (function () {
    // un constructeur
    function CompteUtilisateur(nom, prenom, id) {
        this.nom = nom;
        this.prenom = prenom;
        this.id = id;
    }
    return CompteUtilisateur;
}());
var util = new CompteUtilisateur("CANO", "Franck", 23); // je passe par l interface "Utilisateur" pour creer mon objet
console.log("".concat(util.nom, ",").concat(util.prenom, ",").concat(util.id, ", "));
