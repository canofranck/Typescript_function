"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Personne_1 = require("./Personne");
var Salarie_1 = require("./Salarie");
var pers1 = new Personne_1.Personne(1, "cano", "franck", "23 rue du meiileur", "77100", "Meaux", 51);
var sal1 = new Salarie_1.Salarie(1, "cano", "franck", "23 rue du meiileur", "77100", "meaux", 51, 123456, "18 01 2023", "1 ans", "Dev", "Cadre", "A1");
console.log("".concat(pers1.id, " , ").concat(pers1.nom, " ,").concat(pers1.prenom, " ,").concat(pers1.adresse, " , ").concat(pers1.cp, " ,").concat(pers1.ville, " , ").concat(pers1.age, ", \n").concat(sal1.numSecu, " , ").concat(sal1.dateDebut, " , ").concat(sal1.anciennete, " ,").concat(sal1.posteOccupe, " ,").concat(sal1.classification, " ,").concat(sal1.categorie));
