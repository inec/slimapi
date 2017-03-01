
var app = angular.module('groceryListApp', []);//dependcy

app.controller("HomeController", ["$scope","$log", function($scope,$log) {    $scope.appTitle = "Grocery List";
$log.debug("HomeController $log"); //not used
    
} ] );

app.controller("GroceryListItemsController", ["$scope","Calc","$log", function($scope,Calc,$log){
    $scope.groceryItems = [
        {itemName: 'milk',cost:10.1, date: '2014-10-01'},
        {itemName: 'cookies',cost:12.1, date: '2014-10-01'},
        {itemName: 'ice cream',cost:10.01, date: '2014-10-02'},
        {itemName: 'potatoes',cost:190.1, date: '2014-10-02'},
        {itemName: 'cereal',cost:130.1, date: '2014-10-03'},
        {itemName: 'bread',cost:120.1, date: '2014-10-03'},
        {itemName: 'eggs',cost:110.1, date: '2014-10-04'},
        {itemName: 'tortillas',cost:120.1, date: '2014-10-04'}
    ];
$log.debug("GroceryListItemsController $log"); //good
    

   $scope.a={};
   $scope.a.b=3;

    $scope.timeTwo=function(){
      $scope.a.b=Calc.timeTwo(   $scope.a.b);
    };

}])

//snake case
app.directive("welcomeMessage",function(){
    return {
        restrict: "E",
        template:"<div>Howdy</div>"
    };
});


app.factory("Calc",function(){
    
    var calc={};
    calc.timeTwo=function(a){
        return a+=a;
    }

    return calc;
});