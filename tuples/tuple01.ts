let empId : number = 1 ;
let empName : string ='Da Silva';

// tuple type
let employee :[number,string] = [empId,empName];

let person :[number , string,boolean] = [empId,empName,true];

let user :[number , string,boolean,number,string] ;
user = [empId,empName,true,25,'ADMIN'];
let employee1 : [number,string][];
employee1 = [[1,'Steve Job'],[2,'jeff bezos'],[3,'ma']];
console.log(employee1[1][1]);
employee1.push([4,'elon musk']);

employee1.push([5,'franck cano']);
console.log(employee1)

employee1[1][1]= employee1[1][1].concat(' Albert');   // concatenatiion
console.log(employee1)