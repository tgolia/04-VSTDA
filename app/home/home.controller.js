// SHORTCUT: ngcontroller angular.controller
(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];

    /* @ngInject */
    function HomeController() {
    	var vm = this;

        var cssMap = {
            3: 'panel-info',
            2: 'panel-warning',
            1: 'panel-danger'
        };

        vm.getClass = function(todo) {
            return cssMap[todo.priority];
        }

    	vm.todos = [];
        vm.orderedList = '';

        var sortArray = ['name','priority','-priority'];

        vm.sortTodos = function(order) {
            vm.orderedList = sortArray[order];
        }


    	vm.addTodo = addTodo;

    	//////////////// There's a short cut to create a line break like this ('line-break').... might need to add files to Sublime package like I did with John Papa Angular Snippets (video in Resilio)

    	function addTodo() {
            var copy = angular.copy(vm.newTodo); // angular.copy creates clone (deep copying) of object
    		vm.todos.push(copy); // unshift to put at opposite side
    	}
    }
})();