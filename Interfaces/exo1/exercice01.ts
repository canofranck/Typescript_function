// Exercice : Ecrire les classes, les interfaces et les constructeurs

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

interface ISalarie {
  numSecu: number;
  dateDebut: string;
  anciennete: string;
  posteOccupe: string;
  classification: string;
  categorie: string;
}

class Personne {
  id: number;
  nom: string;
  prenom: string;
  adresse: string;
  cp: string;
  ville: string;
  private _age: number;

  // Methode GETTER pour acceder à l'age

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
    this._age = age;
  }
  // On rajoute la méthode direBonjour()
  direBonjour() {
    console.log(`Bonjour, je m'appelle : ${this.nom} ${this.prenom}`);
  }

  // Methode : ajouter un an
  ajouterUnAn() {
    this._age = this._age + 1;
  }
}

class Salarie extends Personne {
  numSecu: number;
  dateDebut: string;
  anciennete: string;
  posteOccupe: string;
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
    anciennete: string,
    posteOccupe: string,
    classification: string,
    categorie: string
  ) {
    super(id, nom, prenom, adresse, cp, ville, age); // j'hérite des propriétés du constructeur
    this.numSecu = numSecu;
    this.dateDebut = dateDebut;
    this.anciennete = anciennete;
    this.posteOccupe = posteOccupe;
    this.classification = classification;
    this.categorie = categorie;
  }
}

const pers: IPersonne = new Personne(
  1,
  "Cano",
  "Franck",
  "Rue de meaux",
  "77100",
  "meaux",
  51
);

const sal: ISalarie = new Salarie(
  1,
  "Cano",
  "Franck",
  "Rue de meaux",
  "977100",
  "meaux",
  51,

  123456789,
  "18/01/2023",
  "1 ans",
  "Dev",
  "Cadre",
  "A2"
);

console.log(
  `${pers.id}, ${pers.nom}, ${pers.prenom}, ${pers.adresse}, ${pers.cp}, ${pers.ville}, ${pers.age}, ${sal.numSecu},
   ${sal.dateDebut}, ${sal.anciennete},${sal.posteOccupe}, ${sal.classification}, ${sal.categorie}`
);

pers.direBonjour();

// Pour compiler on tape dans la console : tsc -t es5  exercice01.ts
