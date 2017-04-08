function Customer(utilityObject){
    this.SalesdateAndTime = utilityObject.getDate();
    this.name = "Ruchi Sinha";
    this.code = "1001";
    this.amount = 100;
    this.calculateDiscount = function(){
        alert(10);
    }
}

//Customer.prototype.

function CustomerGold(utilityObject){
    this.SalesdateAndTime = utilityObject.getDate();
    this.name = "Ruchi Sinha";
    this.code = "1001";
    this.amount = 100;
    this.calculateDiscount = function(){
        alert(20);
    }
}

function Factory(){
   return{
       createCustomer : function(type, utilityObject){
           if(type == 1){
                return new Customer(utilityObject);
           }          
           else{
               return new CustomerGold(utilityObject);
           }           
       }
   }
}
