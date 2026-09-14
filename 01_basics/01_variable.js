const accountId=12323 //to declare constant
let accountEmail="anurag@gmail.com" // to declare variables
var accountPassward="1837" // not used nowadays
accountCity="jaipur" // also can be write
let accountState; // it is undefined means only variable name is given no value assign

//accountId=2 //this is not allowed const can't be changed
accountEmail="haj@c.com"
accountPassward="647386"
accountCity="delhi"

console.log(accountId);//for printing
/* Prefer not to use var beacuse of issue in block space and functional scope
*/
console.table([accountId,accountEmail,accountPassward,accountCity,accountState]) // used to print multiple varibles in table form