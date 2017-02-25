
var app = angular.module('groceryListApp', []);//dependcy

app.controller("HomeController", ["$scope", function($scope) {    $scope.appTitle = "Grocery List";

    
} ] );

app.controller("GroceryListItemsController", ["$scope","Calc", function($scope,Calc){
    $scope.groceryItems = [
        {itemName: 'milk', date: '2014-10-01'},
        {itemName: 'cookies', date: '2014-10-01'},
        {itemName: 'ice cream', date: '2014-10-02'},
        {itemName: 'potatoes', date: '2014-10-02'},
        {itemName: 'cereal', date: '2014-10-03'},
        {itemName: 'bread', date: '2014-10-03'},
        {itemName: 'eggs', date: '2014-10-04'},
        {itemName: 'tortillas', date: '2014-10-04'}
    ];


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