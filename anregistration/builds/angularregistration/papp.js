var app = angular.module('plunker', []);

app.controller('AppCtrl', function($scope) {
    $scope.projects = {

        1 : {
            "id" : 1,
            "name" : "Mela Sarkar",
            "url" : "http://www.brioinsurance.ca/",
            "description" : "A professional portfolio site for McGill University professor Mela Sarkar."
        },

        2 : {
            "id" : 2,
            "name" : "Good Watching",
            "url" : "http://www.bbc.co.uk",
            "description" : "Weekend experiment to help my mom decide what to watch."    
        }
    };
    
    $scope.setProject = function (id) {
        $scope.currentProject = $scope.projects[id];
    }
});
