(function(){
	'use strict';

	angular
		.module('editApp')

		//设备尺寸选择
		.directive('deviceSize',function(PublicParams){
			var directive = {
				strict: 'E',
				scope: {

				},
				templateUrl: '/JS/angular/edit/directive/template/device-size.html',
				link: DomOperate,
				controller: DeviceSizeController,
				controllerAs: 'etCtrl'
			}

			return directive;

			function DomOperate(){

			};

			function DeviceSizeController($scope){
				var vm = this;
				//数据的初始化
				vm.deviceSize = [
					{ID: 0, size: '414x736'},
					{ID: 1, size: '375x667'},
					{ID: 2, size: '360x640'},
					{ID: 3, size: '320x568'}
				];
				vm.showSize = vm.deviceSize[0].size;

				//尺寸的切换
				vm.ChoiceSize = function(index){
					vm.showSize = vm.deviceSize[index].size;
					vm.choiceDeviceSizeStatus = false;
					$scope.$emit('broadcast.device.size.change',index)
				}
			};
		})

		//工具条
		.directive('editTools',function(){
			var directive = {
				strict: 'E',
				scope: {

				},
				templateUrl: '/JS/angular/edit/directive/template/edit-tools.html',
				link: DomOperate,
				controller: EditToolsController,
				controllerAs: 'etCtrl'
			}

			return directive;

			function DomOperate(){

			};

			function EditToolsController($rootScope,$scope,PublicParams){
				var vm = this;

				//状态量初始化
				vm.fontFamilyChoiceStatus = false;
				vm.fontWeightChoicedStatus = false;
				vm.fontItalicChoicedStatus = false;
				vm.fontUnderlineChoicedStatus = false;
				vm.fontLeftChoicedStatus = false;
				vm.fontCenterChoicedStatus = false;
				vm.fontRightChoicedStatus=false;

				vm.fontSizeSettleShowStatus = false;


				//字体的默认设置
				vm.fontFamily = [
					{ID: 0, value: 'Helvetica Neue'},
					{ID: 1, value: 'Helvetica'},
					{ID: 2, value: 'Droid Sans'},
					{ID: 3, value: 'Arial'},
					{ID: 4, value: 'Trebuchet MS'},
					{ID: 5, value: 'Hiragino Sans GB'},
					{ID: 6, value: 'STHeiti'},
					{ID: 7, value: 'Microsoft YaHei'},
					{ID: 8, value: 'sans-serif'}
				];

				vm.userDefinedColor = 'f02b5b';


				vm.ChangeFontfamily = function(){
					if(vm.fontFamilyChoiceStatus){
						vm.fontFamilyChoiceStatus = false;
					}
					else{
						vm.fontFamilyChoiceStatus = true;
					}
				};

				vm.fontValue = 7;
				vm.ChangeFontValue = function(index){
					PublicParams.SetFontfamily(vm.fontFamily[index].value);
				};

				//颜色读取
				$scope.color = '#000000';
				vm.ChoiceColor = function(value){
					$scope.color = value;
					PublicParams.SetFontcolor(value);
				};

				$scope.fontSize = PublicParams.GetFontsize();
				vm.ChangeFontSize = function(){
					if(vm.fontSizeChoicedStatus){ 
						vm.fontSizeChoicedStatus = false;
						vm.fontSizeSettleShowStatus = false;
					}
					else{
						vm.fontSizeChoicedStatus = true;
						vm.fontSizeSettleShowStatus = true;
					}
				};

				vm.FontsizeDecrease = function(){
					if($scope.fontSize > 1){
						PublicParams.SetFontsize(-- $scope.fontSize);
					}
				};

				vm.FontsizeIncrease = function(){
					if($scope.fontSize < 1){
						$scope.fontSize = 0;
					}
					if($scope.fontSize < 7){
						PublicParams.SetFontsize(++ $scope.fontSize);
					}
				};

				//文字的粗细方法
				vm.ChangeFontWeight = function(){
					if(vm.fontWeightChoicedStatus){ 
						vm.fontWeightChoicedStatus=false;
						PublicParams.SetFontweight(false);
					}
					else{
						vm.fontWeightChoicedStatus=true;
						PublicParams.SetFontweight(true);
					}
				};

				//文字的样式方法
				vm.ChangeFontStyle = function(){
					if(vm.fontItalicChoicedStatus){
						vm.fontItalicChoicedStatus=false;
						PublicParams.SetFontstyle(false);
					} 
					else{
						vm.fontItalicChoicedStatus=true;
						PublicParams.SetFontstyle(true);
					}
				};

				//字体添加下滑线方法
				vm.ChangeFontUnderline = function(){
					if(vm.fontUnderlineChoicedStatus){
						vm.fontUnderlineChoicedStatus=false;
						PublicParams.SetTextdecoration(false);
					} 
					else{
						vm.fontUnderlineChoicedStatus=true;
						PublicParams.SetTextdecoration(true);
					}
				};

				//字体左对齐方法
				vm.ChangeFontLeft = function(){
					if(vm.fontLeftChoicedStatus){
						vm.fontLeftChoicedStatus=false;
						PublicParams.SetTextalign('inherit');
					} 
					else{
						vm.fontCenterChoicedStatus = false;
						vm.fontRightChoicedStatus=false;
						vm.fontLeftChoicedStatus=true;
						PublicParams.SetTextalign('JustifyLeft');
					}
				};

				//字体居中对齐方法
				vm.ChangeFontCenter = function(){
					if(vm.fontCenterChoicedStatus){
						vm.fontCenterChoicedStatus=false;
						PublicParams.SetTextalign('inherit');
					} 
					else{
						vm.fontLeftChoicedStatus = false;
						vm.fontRightChoicedStatus=false;
						vm.fontCenterChoicedStatus=true;
						PublicParams.SetTextalign('JustifyCenter');
					}
				};

				vm.ChangeFontRight = function(){
					if(vm.fontRightChoicedStatus){
						vm.fontRightChoicedStatus=false;
						PublicParams.SetTextalign('inherit');
					} 
					else{
						vm.fontLeftChoicedStatus = false;
						vm.fontCenterChoicedStatus = false;
						vm.fontRightChoicedStatus=true;
						PublicParams.SetTextalign('JustifyRight');
					}
				};

				vm.UndoAction = function(){
					document
						.execCommand('undo');
				}

				vm.RemoveStyle = function(){
					if(PublicParams.GetClearStyleStatus()){
						vm.clearStyleStatus = false;
						PublicParams.SetClearStyleStatus(false);
					}
					else{
						vm.clearStyleStatus = true;
						PublicParams.SetClearStyleStatus(true);
					}
				}

				vm.AddImage = function(){
					$rootScope
						.showImageOverlayStatus = true;
				};

				vm.AddVideo = function(){

				};
			};
		})

		//用户编辑区
		.directive('editContent',function($window,PublicParams,$timeout){
			var directive = {
				strict: 'E',
				scope: {

				},
				templateUrl: '/JS/angular/edit/directive/template/edit-content.html',
				link: DomOperate,
				controller: EditContentController,
				controllerAs: 'etCtrl'
			}

			return directive;

			function DomOperate(scope,element){

				//回车换行包裹换行元素
				document
					.querySelector('#editContent')
					.addEventListener('keydown',function(e){
						if(e.keyCode === 13){
							document
								.execCommand('insertBrOnReturn',false,true);
						}
					});

				//行内对于字体的操作
				document
					.querySelector('#editContent')
					.addEventListener('mouseup',function(e){
						var sel = $window.getSelection();
						if(sel.anchorOffset !== sel.focusOffset){
							if(PublicParams.GetClearStyleStatus()){
								document
									.execCommand('removeFormat');
							}
							else{
								if(PublicParams.GetFontfamily()){
									document
										.execCommand('fontName',true,PublicParams.GetFontfamily());
								}
								if(PublicParams.GetFontcolor()){
									document
										.execCommand('foreColor',true,PublicParams.GetFontcolor());
								}
								if(PublicParams.GetFontsize() !== -1){
									document
										.execCommand('FontSize',true,PublicParams.GetFontsize());
								}
								if(PublicParams.GetFontweight()){
									document
										.execCommand('Bold'); 
								}
								if(PublicParams.GetFontstyle()){
									document
										.execCommand('Italic');
								}
								if(PublicParams.GetTextdecoration()){
									document
										.execCommand('underline');
								}
								if(PublicParams.GetTextalign() !== 'inherit'){
									document
										.execCommand(PublicParams.GetTextalign());
								}
							}
						}
						else{
							if(PublicParams.GetInsertLocalImageSrc()){
								document
									.execCommand('insertImage',true,PublicParams.GetInsertLocalImageSrc());
								PublicParams.SetInsertLocalImageSrc('');
							}
						}
					});

				document
					.querySelector('#clearEditBtn')
					.addEventListener('click',function(){
						if(document
							.querySelector('#editContent')
							.innerHTML){
							if($window.confirm('你确定要清除编辑区中的内容吗？')){
								document
									.querySelector('#editContent')
									.innerHTML = '';
							}
						}
						else{
							alert('已经情况完毕！');
						}
					});

				
				//在手机模型中显示效果
				document
					.querySelector('#mobileShowBtn')
					.addEventListener('click',function(){
						//将编辑区的html复制到显示区
						document
							.querySelector('#showContent')
							.innerHTML = document
											.querySelector('#editContent')
											.innerHTML;
						//
						if(! PublicParams.GetShowMobileModelStatus()){
							PublicParams
								.SetShowMobileModelStatus(true);
							scope
								.$emit('broadcast.show.mobile.model.content');
						}

					});
			};

			function EditContentController($scope){
				var vm = this;

				//状态设置

				//数据初始化
				vm.deviceSize = [
					{ID: 0, size: '414x736'},
					{ID: 1, size: '375x667'},
					{ID: 2, size: '360x640'},
					{ID: 3, size: '320x568'}
				];

				vm.editSize = {
					width: vm.deviceSize[0].size.split('x')[0] + 'px',
					height: vm.deviceSize[0].size.split('x')[1] + 'px',
				};

				//屏幕大小响应
				$scope
					.$on('broadcast.get.device.size',function(e,index){
						vm.editSize = {
							width: vm.deviceSize[index].size.split('x')[0] + 'px',
							height: vm.deviceSize[index].size.split('x')[1] + 'px',
						}
					});

				// vm.Upload = function(file){
				// 	if(file){
				// 		vm.imageFile = file;
				// 		vm.showImageStatus = true;
				// 	}
				// }

				


			}
		})

		//编辑呈现的模块
		.directive('editShow',function(PublicParams){
			var directive = {
				strict: 'E',
				scope: {
					
				},
				templateUrl: '/JS/angular/edit/directive/template/edit-show.html',
				link: DomOperate,
				controller: EditShowController,
				controllerAs: 'etCtrl'
			}

			return directive;

			function DomOperate(scope,element){

			};

			function EditShowController($scope){
				var vm = this;

				//数据初始化
				vm.deviceSize = [
					{ID: 0, size: '414x736'},
					{ID: 1, size: '375x667'},
					{ID: 2, size: '360x640'},
					{ID: 3, size: '320x568'}
				];
				vm.editSize = {
					width: vm.deviceSize[0].size.split('x')[0] + 'px',
					height: vm.deviceSize[0].size.split('x')[1] + 'px',
				}

				//屏幕大小响应
				$scope
					.$on('broadcast.get.device.size',function(e,index){
						vm.editSize = {
							width: vm.deviceSize[index].size.split('x')[0] + 'px',
							height: vm.deviceSize[index].size.split('x')[1] + 'px',
						}
					});

				//显示编辑内容并在手机模型中展现
				vm.showMobileModel = false;
				$scope
					.$on('broadcast.show.mobile.model',function(){
						vm.showMobileModel = true;
					});

				//隐藏手机模型蒙层
				vm.HideMobileModel = function(){
					vm.showMobileModel = false;
					PublicParams
						.SetShowMobileModelStatus(false);
				}
			};
		})


		//增添，修改模块
		.directive('editArea',function(PublicParams){
			var directive = {
				restrict: 'E',
				scope: {

				},
				templateUrl: '/JS/angular/edit/directive/template/edit-area.html',
				link: DomOperate,
				controller: EditAreaController,
				controllerAs: 'etCtrl'
			}

			return directive;

			function DomOperate(){

			};

			function EditAreaController($rootScope,$scope){
				var vm = this;


				//状态变量设置
				vm.textEditOverlay = false;
				vm.editTitleStatus = false;
				vm.editPageStatus = false;
				vm.editImageStatus = false;

				$rootScope
					.$watch('showImageOverlayStatus',function(value){
						if(value){
							vm.imageEditOverlay = true;
						}
					});

				vm.CloseImageEditOverlay = function(){
					vm.imageEditOverlay = false; 
					$rootScope.showImageOverlayStatus=false;
				}

				vm.Upload = function(file){
					if(file){
						vm.imageFile = file;
					}
				}

				vm.FinishEdit = function(){
					vm.textEditOverlay = false;
					if(vm.imageFile){
						var content = angular
										.element(document
											.querySelector('#imageDom'));

						PublicParams.SetInsertLocalImageSrc(content.attr('src'));
						vm.imageEditOverlay = false;
						$rootScope.showImageOverlayStatus=false;
					}
				}
			}
		})
})();