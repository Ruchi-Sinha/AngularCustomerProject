var app = angular.module('Customer', ['ui.router']);
app.factory('customerObject', Factory);
app.service('utilityObject', Utility);
app.factory('customerNewObject', FactoryCustomer);

app.controller('customerNewCtrl', ['$scope', 'customerNewObject', 'utilityObject', function($scope, customerNewObject, utilityObject){
    $scope.type = "simple";
    alert($scope.type+"...type")
    $scope.CustomerNew = customerNewObject.createCustomerNew($scope.type);
    $scope.Utility = utilityObject;
    $scope.submit = function(){
        if($scope.CustomerNew.validate()){
            alert("success!")
        }
        else{
            alert("error")
        }
        
    }
    $scope.$watch("type", function(value){
        alert(value+"value")
         $scope.CustomerNew = customerNewObject.createCustomerNew($scope.type);
    });
}]);
app.controller('customerCtrl', ['$scope', 'customerObject', 'utilityObject', '$q', function($scope, customerObject, utilityObject, $q){
    function add(x, y){
        return $q(function(resolve, reject){
            var result = x+y;
            if(result >= 0){
                resolve(x+y);
            }
            else{
                reject(Error("Negative value notTTT allowed : "+result));
            }
        });
        /*var deferred = $q.defer();
        
            var result = x+y;
            if(result >= 0){
                deferred.resolve(x + y);
            }
            else{
                deferred.reject('negative value: '+result)
            }
        
        return deferred.promise;*/
    }
    add(5, 2)
    .then(function(result){
        return add(result, -9)
    })
     .then(function(result){
        return add(result, 13)
    }).then(function(result){
        $scope.result = result;
    },function(error){
        $scope.result = error;
    })
    .catch(function(failure){
        alert(failure)
        $scope.result = failure;
    })
    $scope.Utility = utilityObject;
    $scope.Customer = customerObject.createCustomer(2, utilityObject);
    $scope.AmountColor = "Red";
    $scope.colorChange = function(){
        if($scope.Customer.amount < 1000) 
            $scope.AmountColor= "Red";
        else
            $scope.AmountColor= "Green"
    }
    $scope.submit = function(){
        alert("in Function!")
        if($scope.Utility.IsEmpty($scope.Customer.name))
            alert("Invalid data");
        else
            alert("Proper data!")
    }
    
}]);
app.directive("leftMenu",function(){
    return{
        restrict: 'E',
        scope: {},
        templateUrl: "leftMenu.html"
    }
});
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('Home', {
        url: '/',
        templateUrl:'/views/Home.html'
    })
    .state('Home.ChildView', {
        url: '/Home.ChildView',
        templateUrl:'/views/Customer.html',
        controller: 'customerCtrl'
    })
    .state('Customers', {
        url: '/Customers',
        templateUrl:'/views/Customer.html',
        controller: 'customerCtrl'
    })
    .state('CustomerNew', {
        url: '/CustomerNew',
        templateUrl:'/views/CustomerNew.html',
        controller: 'customerNewCtrl'
    })
    .state('Contact', {
        url: '/Contact',
        templateUrl:'/views/Contact.html'
    })
    .state('About', {
        url: '/About',
        templateUrl:'/views/About.html'
    })
    
}])


