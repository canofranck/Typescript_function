var empId = 1;
var empName = 'Da Silva';
// tuple type
var employee = [empId, empName];
var person = [empId, empName, true];
var user;
user = [empId, empName, true, 25, 'ADMIN'];
var employee1;
employee1 = [[1, 'Steve Job'], [2, 'jeff bezos'], [3, 'ma']];
console.log(employee1[1][1]);
employee1.push([4, 'elon musk']);
employee1.push([5, 'franck cano']);
console.log(employee1);
employee1[1][1] = employee1[1][1].concat(' Albert'); // concatenatiion
console.log(employee1);
