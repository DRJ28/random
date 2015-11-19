$(document).ready(function() {
    $("#departing").datepicker();
    $("#returning").datepicker();
    $("button").click(function() {
    	var selected = $("#dropdown option:selected").text();
        var departing = $("#departing").val();
        var returning = $("#returning").val();
        if (departing === "" || returning === "") {
			alert("Please select departing and returning dates.");
        } else {
			confirm("Would you like to go to " + selected + " on " + departing + " and return on " + returning + "?");
        }
    });
});

var module = angular.module('tyrDatePicker',[]);
module.controller('myClt', function($scope){
    $scope.name = "Dheeraj";
});

module.directive('datePicker', function() {
  return {
    restrict: 'E',
    scope: {
        max: '@',
        min: '@'
    },
    template: '<div class=\'bdatepicker\'><input type=\'text\' id=\'dssId\'>',
    link: function(scope, element, attrs){
        debugger;
        $('#dssId').datepicker({
            maxDate: new Date(scope.max),
            minDate: new Date(scope.min)
        });
    }
  };
});