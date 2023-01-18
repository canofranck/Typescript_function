"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
var Personne = /** @class */ (function () {
    //constructeur
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
        //mehode GETTER
        get: function () {
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    //je rajoute la mehode disBonjour()
    Personne.prototype.direBonjour = function () {
        console.log("Bonjour mon nom est : ".concat(this.nom, " ").concat(this.prenom));
    };
    ;
    //methode AjouterUnAn()
    Personne.prototype.AjouterUnAn = function () {
        this._age = this._age + 1;
    };
    return Personne;
}());
exports.Personne = Personne;
