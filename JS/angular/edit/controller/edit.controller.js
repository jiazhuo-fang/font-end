

(function(){
	'use strict';

	angular
		.module('editApp')
		.controller('EditController',EditController);

	function EditController($rootScope,$scope,$timeout,ControllerBroadcast){

		var vm = this;


		vm.editContent = '';


		//指令模块之间交互通过父controller广播传递


		// ControllerBroadcast.ControllerBroadcast();

		// ControllerBroadcast.ControllerEmit();

		ControllerBroadcast.ControllerOn($scope,'broadcast.device.size.change',function(e,index){
			ControllerBroadcast.ControllerBroadcast($scope,'broadcast.get.device.size',index);
		});		

		// $scope
		// 	.$on('broadcast.device.size.change',function(e,index){
		// 		$scope
		// 			.$broadcast('broadcast.get.device.size',index);
		// 	});

		$scope
			.$on('broadcast.show.edit.content',function(){
				$scope
					.$broadcast('broadcast.show.edit.overlay');
			})

		$scope
			.$on('broadcast.edit.content.finish',function(){
				// $scope
				// 	.$broadcast('broadcast.eidt.insert.image');
			});

		$scope
			.$on('broadcast.show.mobile.model.content',function(){
				$scope
					.$broadcast('broadcast.show.mobile.model');
			});
	}
})()