$(document).ready(function(){
	//APIConsole.init();
});


(function($){

	$.uAPIconsole=function(options){
		
		var c=null; //container;
		var requestMethods= ['GET', 'POST', 'PUT', 'DELETE'];
		var httpVersions= ["HTTP/1.1", "HTTP/1.0"];

		var s=$.extend({
			requestMethod: "GET",
			path: "/",
			httpVersion: "HTTP/1.1",
			headers: [
				{name:"host", value:"example.com"},
				{name:"accept", value:"*/*"}
			],
			postFeilds: {},
			container:null
		}, options)
		
		
		console.log('creating');

		console.log(s.path);

		var init=function(){
			console.log('initializing');
			c=$(s.container);
			renderForm();
			bind();
		}
		
		var bind=function(){
			$('.method option:contains('+s.requestMethod+')',c).attr('selected','selected');
			$('.version option:contains('+s.httpVersion+')',c).attr('selected','selected');
			$('.addField', c).click(addField);
			$('.rm', c).live({click:rmField});
			$('.submit', c).click(submit);
		}
		
		var renderNVField=function(name, value){
			return '<div class="i">\
				<a href="#" class="rm">x</a>\
				<input class="tbox n" value="'+name+'" type="text" />\ :\
				<input class="tbox v" value="'+value+'" type="text" />\
				</div>';
		}

		var renderForm=function(){
			
			var h='';

			h='<form class="uAPIconsole" action="?" method="post">\
				<div class="fl">\
					<select class="method"><option>'
						+requestMethods.join('</option><option>')
						+'</option></select>\
					<input class="tbox path" type="text" value="'+s.path+'" />\
					<select class="version"><option>'
						+httpVersions.join('</option><option>')
						+'</option></select>\
				</div>';
			
				h+='<div class="fl headerFields">\
				   <h6>HEADER FIELDS <a href="" class="addField">ADD</a></h6>';
				for(var i in s.headers){
					i=s.headers[i];
					h+=renderNVField(i.name, i.value);
				}
				h+='</div>';
			

				h+='<div class="fl postFields">\
				   <h6>DATA FIELDS <a href="" class="addField">ADD</a></h6>';
				for(var i in s.postFields){
					i=s.postFields[i];
					h+=renderNVField(i.name, i.value);
				}
				h+='</div>';


				h+='<input type="submit" class="submit" value="Submit" />\
				   <input type="reset" value="Reset" />\
				   </form>\
				   <pre class="prettyprint response"></pre>';
			
			h=$(h).appendTo(c);
		}
		
		var addField=function(e){
			e.preventDefault();
			var newSet=$(renderNVField('',''));
			$(this).parent().parent().append(newSet);
		}
		
		var rmField=function(){
			console.log('removing');
			$(this).parent().slideUp(function(){$(this).remove()})
		}

		submit=function(e){
			e.preventDefault();
			
			var fields={
				method: $('.method option:selected', c).val(),
				version:$('.version option:selected', c).val(),
				path:$('.path', c).val(),
				headerFieldNs:[],
				headerFieldVs:[]
			}

			var path=$('.headerFields .i', c).each(function(){
				fields.headerFieldNs.push($('.n',this).val());
				fields.headerFieldVs.push($('.v',this).val());
			});

			$.ajax({
				type: "POST",
				url: 'router.php',
				cache: false,
				data: fields
			}).done(function(r){
				$('pre.response', c).html(r);
				prettyPrint();
			});

		}

		init();

	}

})(jQuery);


/*

function APIConsole(){
	this.init();
}

APIConsole.prototype.init=function(){
	this.requestMethod= "GET",
	this.path= "/",
	this.httpVersion= "HTTP/1.1",
	this.headers={}
}

APIConsole.init=function(){
	$('.APIForm').submit(APIConsole.submit);
	$('.APIForm .addField').click(APIConsole.addField);
	$('.postFields .remove').live({click:APIConsole.removeField});
}

APIConsole.addField=function(e){
	var postFields=$(this).parent();
	var currentSet=$('li:first',postFields);
	var newSet=currentSet.clone();
	$('input',newSet).val('');
	newSet.appendTo(currentSet.parent());
}

APIConsole.removeField=function(e){
	e.preventDefault();
	if($('li',$(this).parent().parent()).length>1)
		$(this).parent().slideUp(function(){$(this).remove();});
}

APIConsole.submit=function(e){
	
	e.preventDefault();

	var host=$('.host', this).val();
	var url=$('.path', this).val();
	var type=$('.type option:selected', this).val();
	var fields=new Object();

	$('.postFields li', this).each(function(){
		var name=$('.n',this).val();
		var value=$('.v',this).val();
		fields[name]=encodeURI(value);
	})
	
	url=url.replace("trend/trendAnalysis/API/console/",'')


}
*/
