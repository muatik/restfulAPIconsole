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
		
		
		var init=function(){
			c=$(s.container);
			renderForm();
			bind();
		}
		
		var bind=function(){
			$('.method option:contains('+s.requestMethod+')',c).attr('selected','selected');
			$('.version option:contains('+s.httpVersion+')',c).attr('selected','selected');
			$('.addField', c).click(addField);
			$('.rm', c).on('click',rmField);
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
			$('.rm', newSet).click(rmField);
		}
		
		var rmField=function(){
			$(this).parent().slideUp(function(){$(this).remove()})
		}

		submit=function(e){
			e.preventDefault();
			
			var fields={
				method: $('.method option:selected', c).val(),
				version:$('.version option:selected', c).val(),
				path:$('.path', c).val(),
				headerFieldNs:[],
				headerFieldVs:[],
				postFieldNs:[],
				postFieldVs:[]
			}

			var path=$('.headerFields .i', c).each(function(){
				fields.headerFieldNs.push($('.n',this).val());
				fields.headerFieldVs.push($('.v',this).val());
			});

			var path=$('.postFields .i', c).each(function(){
				fields.postFieldNs.push($('.n',this).val());
				fields.postFieldVs.push($('.v',this).val());
			});

			$('pre.response', c).html(
				'<img class="loading" src="imgs/loading.gif" alt="processing..." />'
			);

			$.ajax({
				type: "POST",
				url: 'router.php',
				cache: false,
				data: fields
			}).done(function(data, textStatus, request){
				var str=JSON.stringify( JSON.parse(data), undefined, 4);
				str=jsonSyntaxHighlight(str);
				console.log(textStatus);
				$('pre.response', c).html(
					'<div class="headers">'+request.getAllResponseHeaders()+'</div>'
					+str
				);
			});

		}

		init();

	}

})(jQuery);

