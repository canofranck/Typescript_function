import { Personne } from "./Personne";
import { Salarie } from "./Salarie";
import { IPersonne } from "./Ipersonne";
import { ISalarie } from "./ISalarie";
const pers1:IPersonne = 
new Personne(1,"cano","franck","23 rue du meiileur","77100","Meaux",51);

const sal1:ISalarie =
new Salarie(1,"cano","franck","23 rue du meiileur","77100","meaux",51,123456,
"18 01 2023","1 ans","Dev","Cadre","A1");

console.log(`${pers1.id} , ${pers1.nom} ,${pers1.prenom} ,${pers1.adresse} , ${pers1.cp} ,${pers1.ville} , ${pers1.age}, 
${sal1.numSecu} , ${sal1.dateDebut} , ${sal1.anciennete} ,${sal1.posteOccupe} ,${sal1.classification} ,${sal1.categorie}`);
