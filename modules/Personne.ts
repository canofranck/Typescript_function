import { IPersonne } from "./Ipersonne";
export class Personne {
    id : number;
    nom : string;
    prenom : string;
    adresse : string;
    cp : string;
    ville : string;
    private _age:number;

    //mehode GETTER
   get age(){
        return  this._age
    }
    //constructeur
constructor(
        id : number,
        nom : string,
        prenom : string,
        adresse : string,
        cp : string,
        ville : string,
        age:number
    ){
        this.id =id;
        this.nom =nom;
        this.prenom =prenom;
        this.adresse =adresse;
        this.cp =cp;
        this.ville =ville;
        this._age = age;
    }
//je rajoute la mehode disBonjour()

direBonjour(){
    console.log(`Bonjour mon nom est : ${this.nom} ${this.prenom}`);
 };
 //methode AjouterUnAn()
 AjouterUnAn(){
    this._age = this._age +1;
 }

}  
