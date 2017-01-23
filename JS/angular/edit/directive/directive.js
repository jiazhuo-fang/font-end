(function(){
	'use strict';

	function AppendElement(element,params,PublicParams){
		var addElement = null;
		if(params.type === 'title'){
			addElement = document.createElement('h3');
			angular
				.element(addElement)
				.addClass(params.type)
				.html(params.content);
		}
		else if(params.type === 'page'){
			addElement = document.createElement('div');
			angular
				.element(addElement)
				.addClass(params.type);
		}
		else if(params.type === 'image'){
			//console.log('image :',params.content);
			addElement = document.createElement('div');
			var imageDom = angular.copy(params.content[0]);
			angular
				.element(addElement)
				.append(imageDom);
		}
		else{
			alert('请选择类型(标题、段落、图片)');
		}
		if(params.type === 'title' || params.type === 'page'){
			angular
				.element(addElement)
				.css({
					'font-family': PublicParams.GetFontfamily(),
					'font-size': PublicParams.GetFontsize(),
					'color': PublicParams.GetFontcolor(),
					'font-weight': PublicParams.GetFontweight(),
					'font-style': PublicParams.GetFontstyle(),
					'text-decoration': PublicParams.GetTextdecoration(),
					'text-align': PublicParams.GetTextalign()
				});
		}
		if(addElement){
			angular
				.element(element)
				.append(addElement);
		}
	}

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

			function EditToolsController($scope,PublicParams){
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


				vm.ChangeFontfamily = function(){
					if(vm.fontFamilyChoiceStatus){
						vm.fontFamilyChoiceStatus = false;
					}
					else{
						vm.fontFamilyChoiceStatus = true;
					}
				}

				vm.fontValue = 7;
				vm.ChangeFontValue = function(index){
					PublicParams.SetFontfamily(vm.fontFamily[index].value);
				}

				//颜色读取
				$scope.color = '#000000';
				vm.ChoiceColor = function(value){
					$scope.color = value;
					PublicParams.SetFontcolor(value);
				}

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
				}

				vm.FontsizeDecrease = function(){
					if($scope.fontSize >= 10){
						PublicParams.SetFontsize(-- $scope.fontSize + 'px');
					}
				}

				vm.FontsizeIncrease = function(){
					if($scope.fontSize <= 200){
						PublicParams.SetFontsize(++ $scope.fontSize + 'px');
					}
				}

				//文字的粗细方法
				vm.ChangeFontWeight = function(){
					if(vm.fontWeightChoicedStatus){ 
						vm.fontWeightChoicedStatus=false;
						PublicParams.SetFontweight('normal');
					}
					else{
						vm.fontWeightChoicedStatus=true;
						PublicParams.SetFontweight('700');
					}
				}

				//文字的样式方法
				vm.ChangeFontStyle = function(){
					if(vm.fontItalicChoicedStatus){
						vm.fontItalicChoicedStatus=false;
						PublicParams.SetFontstyle('normal');
					} 
					else{
						vm.fontItalicChoicedStatus=true;
						PublicParams.SetFontstyle('italic');
					}
				}

				//字体添加下滑线方法
				vm.ChangeFontUnderline = function(){
					if(vm.fontUnderlineChoicedStatus){
						vm.fontUnderlineChoicedStatus=false;
						PublicParams.SetTextdecoration('inherit');
					} 
					else{
						vm.fontUnderlineChoicedStatus=true;
						PublicParams.SetTextdecoration('underline');
					}
				}

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
						PublicParams.SetTextalign('left');
					}
				}

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
						PublicParams.SetTextalign('center');
					}
				}

				vm.ChangeFontRight = function(){
					if(vm.fontRightChoicedStatus){
						vm.fontRightChoicedStatus=false;
						PublicParams.SetTextalign('inherit');
					} 
					else{
						vm.fontLeftChoicedStatus = false;
						vm.fontCenterChoicedStatus = false;
						vm.fontRightChoicedStatus=true;
						PublicParams.SetTextalign('right');
					}
				}
			};
		})

		//用户编辑区
		.directive('editContent',function(PublicParams){
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

			function DomOperate(scope){
				scope.$on('broadcast.edit.overlay.finish',function(e,params){
					AppendElement(document
									.querySelector('#editContent'),params,PublicParams);
				})
			};

			function EditContentController($rootScope,$scope){
				var vm = this;

				//状态设置
				vm.editStatus = false;
				vm.modifyStatus = false;
				vm.addStatus = false;

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

				vm.Upload = function(file){
					if(file){
						vm.imageFile = file;
						vm.showImageStatus = true;
					}
				}

				vm.ChoiceEditPattern = function(){
					vm.editStatus ? vm.editStatus = false : vm.editStatus = true;
					vm.modifyStatus = false;
					vm.addStatus = false;
				}

				vm.ModifyEditPattern = function(){
					vm.modifyStatus ? vm.modifyStatus = false : vm.modifyStatus = true;
					vm.editStatus = false;
					vm.addStatus = false;
				}

				vm.AddEditPattern = function(){
					vm.addStatus ? vm.addStatus = false : vm.addStatus = true;
					vm.editStatus = false;
					vm.modifyStatus = false;
				}

				vm.AddContentSign = function(){
					$scope
						.$emit('broadcast.show.edit.content');
				}
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

				//

				//edit-area区域提交数据，需要呈现
				scope.$on('broadcast.show.add.content',function(e,params){
					AppendElement(document
									.querySelector('#showContent'),params,PublicParams);
				})
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
			};
		})


		//增添，修改模块
		.directive('editArea',function(){
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

			function EditAreaController($scope){
				var vm = this;


				//状态变量设置
				vm.textEditOverlay = false;
				vm.editTitleStatus = false;
				vm.editPageStatus = false;
				vm.editImageStatus = false;

				$scope
					.$on('broadcast.show.edit.overlay',function(){
						vm.textEditOverlay = true;
					})


				vm.EditTitleStatusChange = function(){
					vm.editPageStatus = false;
					vm.editImageStatus = false;
				}

				vm.EditPageStatusChange = function(){
					vm.editTitleStatus = false;
					vm.editImageStatus = false;
				}

				vm.EditImageStatusChange = function(){
					vm.editTitleStatus = false;
					vm.editPageStatus = false;
				}

				vm.Upload = function(file){
					if(file){
						vm.imageFile = file;
					}
				}

				vm.FinishEdit = function(){
					vm.textEditOverlay = false;
					if(vm.editContent || vm.imageFile){
						var params = {};
						if(vm.editTitleStatus){
							params.type = 'title';
							params.content = vm.editContent;
							vm.editTitleStatus = false;
						}
						else if(vm.editPageStatus){
							params.type = 'page';
							params.content = vm.editContent;
							vm.editPageStatus = false;
						}
						else if(vm.editImageStatus){
							params.type = 'image';
							params.content = angular
												.element(document
													.querySelector('#imageDom'));
							vm.editImageStatus = false;
						}
						else{
							params.content = vm.editContent;
						}
						$scope.$emit('broadcast.edit.content.finish',params);
					}
				}
			}
		})
})();