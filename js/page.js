page={}

$(document).ready(function(){
	page.init();
})


page.init=function(){
	page.renderSidePanel();
	page.renderViewer();
	page.renderEnterance();
}

page.renderSidePanel=function(){
	var h='<div id="sidePanel">\
		<div id="logo"><a href="" class="home">REST Client</a></div>\
		<h3>API CALLS</h3>\
		<ul id="apicalls">';
	
	for(var i in APICALLS){
		h+='<li><a href="#'+i+'">'+APICALLS[i].title+'</a></li>';
	}

	h+='</ul>\
		<a href="" class="newForm">Empty Form</a>\
		<div class="bottom">\
		<a href="https://github.com/muatik/restfulAPIconsole" class="about">About</a>\
		<a href="https://github.com/muatik/restfulAPIconsole/issues" class="issues">Issues</a>\
		</div>\
	</div>';

	$(h).appendTo('body');
	
	$('#apicalls').filterList({itemTag:'li'});

	$('#apicalls a').click(page.renderAPIViewer);
	$('.newForm').click(page.renderNewForm);
	$('.home').click(page.renderEnterance);
	

}

page.renderViewer=function(){
	$('body').append('<div id="viewers"></div>');
}

page.renderEnterance=function(){
	$('#viewers').html('');
	for(var i in APICALLS){
		id=i;
		page.createAPIviewer( i, APICALLS[i] );
	}
	return false;
}

page.renderAPIViewer=function(e){
	e.preventDefault();
	var id=$(this).attr('href').substr(1);
	var api=APICALLS[id];
	$('#viewers').html('');
	page.createAPIviewer(id,api);
}

page.createAPIviewer=function(id,api){

	var h='<div class="viewer">\
		<h1>'+api.title+'</h1>\
		<div class="description">'+api.description+'</div>\
		<h4>Examples:</h4>\
		<ul class="examples">';

	for(var i in api.examples){
		h+='<li><a class="example" href="#'+id+'_'+i+'">'+api.examples[i].title+'</a>\
			<div class="form"></div>\
			</li>';
	}

	h+='</ul></div>';
	
	h=$(h).appendTo('#viewers');
	
	$('.examples a',h).click(page.showAPIForm);

}

page.showAPIForm=function(e){
	e.preventDefault();

	var ids=$(this).attr('href').substr(1).split('_');
	var apiID=ids[0];
	var eID=ids[1];
	var layer=$(this).parent();

	if($('.form', layer).is(':visible')){
		$('.form', layer).slideUp('fast');
		return;
	}

	var e=APICALLS[apiID].examples[eID];
	
	e.container=$('.form',layer);
	
	$(e.container).html('');
	$.uAPIconsole(e);
	$(e.container).slideDown('fast');
}

page.renderNewForm=function(e){
	e.preventDefault();
	
	$('#viewers').html('<div class="form" id="newForm"></div>');



	$.uAPIconsole({
		container:'#newForm'
	});

}
