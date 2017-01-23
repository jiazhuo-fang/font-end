

(function(){
	'use strict';

	angular
		.module('editApp')
		.factory('ControllerBroadcast',function(){
			var service = {};

			service.ControllerBroadcast = function (scope,eventname,params){
				scope.$broadcast(eventname,params);
			}

			service.ControllerEmit = function (scope,eventname,params){
				scope.$emit(eventname,e,params);
			}

			service.ControllerOn = function(scope,eventname,callback){
				scope.$on(eventname,callback);
			}

			return service;
		})
		.factory('PublicParams',function(){
			var service = {};

			service = (function(){
				var service = {};
				var fontFamily = '';
				var fontColor = '#000';
				var fontSize = 16;
				var fontWeight = '';
				var fontStyle = '';
				var textAlign = '';
				var textDecoration = '';

				service.GetFontfamily = function(){
					return fontFamily;
				};

				service.SetFontfamily = function(value){
					fontFamily = value;
				};

				service.GetFontcolor = function(){
					return fontColor;
				};

				service.SetFontcolor = function(value){
					fontColor = value;
				};

				service.GetFontsize = function(){
					return fontSize;
				};

				service.SetFontsize = function(value){
					fontSize = value;
				};

				service.GetFontweight = function(){
					return fontWeight;
				};

				service.SetFontweight = function(value){
					fontWeight = value;
				};

				service.GetFontstyle = function(){
					return fontStyle;
				};

				service.SetFontstyle = function(value){
					fontStyle = value;
				};

				service.GetTextalign = function(){
					return textAlign;
				};

				service.SetTextalign = function(value){
					textAlign = value;
				};

				service.GetTextdecoration = function(){
					return textDecoration;
				};

				service.SetTextdecoration = function(value){
					textDecoration = value;
				};


				return service;

			})();

			return service;
		});
})()