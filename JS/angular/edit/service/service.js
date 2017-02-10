

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
				
				//基本样式
				var fontFamily = '';
				var fontColor = '';
				var fontSize = -1;
				var fontWeight = false;
				var fontStyle = false;
				var textAlign = 'inherit';
				var textDecoration = false;

				//查询、修改样式的值
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


				//全局状态设置
				var insertLocalImageSrc = '';
				var clearStyleStatus = false;
				var showMobileModelStatus = false;


				//封装全局变量的方法

				service.SetInsertLocalImageSrc = function(src){
					insertLocalImageSrc = src;
				};

				service.GetInsertLocalImageSrc = function(){
					return insertLocalImageSrc;
				};

				service.SetClearStyleStatus = function(value){
					clearStyleStatus = value;
				}

				service.GetClearStyleStatus = function(){
					return clearStyleStatus;
				}

				service.SetShowMobileModelStatus = function(value){
					showMobileModelStatus = value;
				}

				service.GetShowMobileModelStatus = function(){
					return showMobileModelStatus;
				}


				return service;

			})();

			return service;
		});
})()