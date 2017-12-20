var nameVar = 'Joe';
nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Let and Const are block level scoped 

const fullName = 'Joe Gallegos';
let firstName;

if (fullName){
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);