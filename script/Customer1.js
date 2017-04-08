function CustomerNew(){
    this.firstname = "Ruchi";//upeer case
    this.lastname = "Sinha";
    this.phonenumber = "123456";//rounding off 2, 3
    this.amount = "5000000";
    this.validate = function(){
        if(this.firstname.length == 0){
            return false;
        }
        if(this.lastname.length == 0){
            return false;
        }
        if(this.amount.length == 0){
            return false;
        }
        return true;
    }
}

function Walkin(){
    this.validate = function(){
        if(this.phonenumber.length == 0){
            return false;
        }
        return true;
    }
}
Walkin.prototype = new CustomerNew();

function Lead(){
    this.validate = function(){
        if(this.amount.length == 0){
            return false;
        }
        return true;
    }
}
Lead.prototype = new CustomerNew();


function FactoryCustomer(){
    return{
        createCustomerNew : function(type){
            //return new CustomerNew();
            if(type == "simple"){
                return new CustomerNew();
            }
            if(type == "lead"){
                return new Lead();
            }
            else{
                return new Walkin();
            }
        }
        }
    }