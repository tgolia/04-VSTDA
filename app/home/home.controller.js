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

    	vm.posts = [];

    	vm.addPost = addPost;

    	//////////////// There's a short cut to create a line break like this ('line-break').... might need to add files to Sublime package like I did with John Papa Angular Snippets (video in Resilio)

    	function addPost() {
    		vm.posts.push(vm.newPost);
    	}
    }
})();