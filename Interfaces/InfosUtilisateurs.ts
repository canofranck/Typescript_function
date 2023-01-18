interface IPersonne {
  id: number;
  nom: string;
  prenom: string;
  adresse: string;
  cp: string;
  ville: string;
  age: number;
  direBonjour();
}
interface Isalarie {
  numSecu: number;
  dateDebut: string;
  ancienneté: string;
  posteOcuppe: string;
  classification: string;
  categorie: string;
}
class Personne {
  // classe Personne
  id: number;
  nom: string;
  prenom: string;
  adresse: string;
  cp: string;
  ville: string;
  private _age: number; // _ pour dire c priver

  // methode getter

  public get age() {
    return this._age;
  }

  constructor(
    id: number,
    nom: string,
    prenom: string,
    adresse: string,
    cp: string,
    ville: string,
    age: number
  ) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.adresse = adresse;
    this.cp = cp;
    this.ville = ville;
    this._age = this._age;
  }
  // Methode dire bonjour
  direbonjour() {
    console.log(`Bonjour, je m'apelle : ${this.nom} ${this.prenom}`);
  }
  // methode : ajouterUnAn
  ajouterUnAn() {
    this._age = this._age + 1;
  }
}

class Salarie extends Personne {
  numSecu: number;
  dateDebut: string;
  ancienneté: string;
  posteOcuppe: string;
  classification: string;
  categorie: string;
  constructor(
    id: number,
    nom: string,
    prenom: string,
    adresse: string,
    cp: string,
    ville: string,
    age: number,
    numSecu: number,
    dateDebut: string,
    ancienneté: string,
    posteOcuppe: string,
    classification: string,
    categorie: string
  ) {
    super(id, nom, prenom, adresse, cp, ville, age); // j herite des proprietes du constructor personne
    this.numSecu = numSecu;
    this.dateDebut = dateDebut;
    this.ancienneté;
    this.ancienneté = ancienneté;
    this.posteOcuppe = posteOcuppe;
    this.classification = classification;
    this.categorie = categorie;
  }
}
const pers : IPersonne = new Personne(1,"durand","jean","1 rue paris","75019","paris",32);
const sal : Isalarie = new Salarie (1,"durand","jean","1 rue paris","75019","paris",32,123456789,"15-01-2023","1 ans","dev","cadre","A1");
console.log(`${pers.id},${pers.nom},${pers.prenom},${pers.adresse},${pers.cp},${pers.ville},
${pers.age},${sal.numSecu},${sal.dateDebut},${sal.ancienneté},${sal.posteOcuppe},${sal.classification},
${sal.categorie},${sal.categorie},${pers.age}`);
pers.direBonjour();