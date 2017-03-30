'use strict';

var http = require('http');
var cheerio = require('cheerio');
var url = 'http://www.imooc.com/learn/348';

function filterCourse(html){
	var $ = cheerio.load(html);

	var course = $('.chapter');

	course.each(function(item){
		//console.info(this === course[item]);
		var chapter = $(this);

		var chapterTitle = ''
		var	str = chapter
					.find('strong')
					.text();
		for(let i=0;i<str.length;i++){
			if(str[i] != ' ' && str[i] != '\t'){
				chapterTitle += str[i];
			}
		}
		console.log(chapterTitle);
	})
}

http
	.get(url,function(res){
		var html = '';

		res
			.on('data',function(data){
				html += data;
			});
		res
			.on('end',function(){
				filterCourse(html);
			});
	}).on('error',function(){
		console.info('获取慕课网nodejs课程失败！');
	});