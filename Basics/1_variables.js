const accountId = 144225;
let accountEmail = "ys@gmail.com";
var accountPassword = "12345";

let accountState;

accountCity = "Motihari"; // prefer not use this type of variable declaration

//accountId = 2 // not allowed due to const

accountEmail = "yuvraj@gmail.com";
accountPassword = "098765";
accountCity = "Patna";


console.log(accountCity);
console.table( [accountId,accountEmail, accountPassword, accountState] );

/*
Prefer not to use var
because of issue in block scope and functional scope


*/
