// Exercice : Ecrire les classes, les interfaces et les constructeurs
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Personne = /** @class */ (function () {
    function Personne(id, nom, prenom, adresse, cp, ville, age) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.cp = cp;
        this.ville = ville;
        this._age = age;
    }
    Object.defineProperty(Personne.prototype, "age", {
        // Methode GETTER pour acceder à l'age
        get: function () {
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    // On rajoute la méthode direBonjour()
    Personne.prototype.direBonjour = function () {
        console.log("Bonjour, je m'appelle : ".concat(this.nom, " ").concat(this.prenom));
    };
    // Methode : ajouter un an
    Personne.prototype.ajouterUnAn = function () {
        this._age = this._age + 1;
    };
    return Personne;
}());
var Salarie = /** @class */ (function (_super) {
    __extends(Salarie, _super);
    function Salarie(id, nom, prenom, adresse, cp, ville, age, numSecu, dateDebut, anciennete, posteOccupe, classification, categorie) {
        var _this = _super.call(this, id, nom, prenom, adresse, cp, ville, age) || this;
        _this.numSecu = numSecu;
        _this.dateDebut = dateDebut;
        _this.anciennete = anciennete;
        _this.posteOccupe = posteOccupe;
        _this.classification = classification;
        _this.categorie = categorie;
        return _this;
    }
    return Salarie;
}(Personne));
var pers = new Personne(1, "Cano", "Franck", "Rue de meaux", "77100", "meaux", 51);
var sal = new Salarie(1, "Cano", "Franck", "Rue de meaux", "977100", "meaux", 51, 123456789, "18/01/2023", "1 ans", "Dev", "Cadre", "A2");
console.log("".concat(pers.id, ", ").concat(pers.nom, ", ").concat(pers.prenom, ", ").concat(pers.adresse, ", ").concat(pers.cp, ", ").concat(pers.ville, ", ").concat(pers.age, ", ").concat(sal.numSecu, ",\n   ").concat(sal.dateDebut, ", ").concat(sal.anciennete, ",").concat(sal.posteOccupe, ", ").concat(sal.classification, ", ").concat(sal.categorie));
pers.direBonjour();
// Pour compiler on tape dans la console : tsc -t es5  exercice01.ts
