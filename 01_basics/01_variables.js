const accountId = 14323
let accountEmail = "himanshi@google.com"
var accountPassword = "ily"
accountCity = "Ujjain"
let accountState;
// accountId = 12345 // not allowed


accountEmail = "abc@google.com"
accountPassword = "ihy"
accountCity = "Indore"

console.log (accountId);

/*
Prefer not to use var
because of issues in block scope and funtional scope
*/


console.table ([accountId, accountEmail, accountPassword, accountCity, accountState])