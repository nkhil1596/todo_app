
// Initialization of Angualr app
var Todo = angular.module('Todo', []);
// Head of department
Todo.controller('mainController', function($scope) {
	$scope.Todo = [
						{
							title: 'Do my project',
							details: 'I must do my project till midnight',

						},
						{
							title: 'have to report',
							details: 'I must report before 10 AM',
						},
						{
							title: 'marks to obtain',
							details: 'I should secure 80%',
						},
						{
							title: 'submit my project',
							details: 'I should submit to RV',

						},
						{
							title: 'feedback',
							details: 'have to give my feedback',
						}
	];

	$scope.addTodo = function(user) {
		$scope.Todo.push(user);
	}

	$scope.deleteTodo = function(title,details) {
		var index = $scope.Todo.indexOf(title);
		$scope.Todo.splice(index, 1);
		
	}

});


							
