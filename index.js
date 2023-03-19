// Write your solution in this file!
var customerName = "bob"  
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;

}


function setBestCustomer() {
  return  bestCustomer = "not bob";

}
// overwriteBestCustomer()
function overwriteBestCustomer(){
  return bestCustomer =  'maybe bob';
}


function changeLeastFavoriteCustomer(){
  throw 'Assignment to constant variable.';
}

