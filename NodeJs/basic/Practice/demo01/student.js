'use strict';

function add(student){
	console.log('添加的学生:',student);
}

exports.add = add;

//exports 是一个nodejs封装好的一个对象，用于挂载当前文档中的方法，属性，变量等。是一个提供给其他js文件使用的接口
