function Utility(){
    this.ApplicationName = "Angular Application";
    this.version = "1.6.*";
    this.getDate = function(){
        var date= new Date();
        return date.toLocaleDateString();
    };
    this.IsEmpty = function(value){
        if(value.length == 0) return true;
        else return false;
    }
    this.MakeUpperCase = function(value){
        return value.toUpperCase();
    }
    this.roundUp = function(value, round){
        var num = number(value);
        return parseFloat(num.toFixed(round));
    }
    
    
}