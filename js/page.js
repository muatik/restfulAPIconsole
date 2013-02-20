page={}

$(document).ready(function(){
	page.init();
})


page.init=function(){
	page.renderSidePanel();
	page.renderViewer();
}

page.renderSidePanel=function(){
	var h='<div id="sidePanel">\
		<div id="logo">REST Client</div>\
		<h3>API CALLS</h3>\
		<ul id="apicalls">';

	for(var i in APICALLS){
		h+='<li><a href="#'+i+'">'+APICALLS[i].title+'</a></li>';
	}

	h+='</ul>\
		<a href="">Empty Form</a>\
	</div>';

	$(h).appendTo('body');

	$('#apicalls a').click(page.renderAPIViewer);
	

}

page.renderViewer=function(){
	$('body').append('<div id="viewers"></div>');
}

page.renderAPIViewer=function(e){
	e.preventDefault();

	var id=$(this).attr('href').substr(1);
	var api=APICALLS[id];

	var h='<div class="viewer">\
		<h1>'+api.title+'</h1>\
		<div class="description">'+api.description+'</div>\
		<h4>Examples:</h4>\
		<ul class="examples">';

	for(var i in api.examples){
		h+='<li><a href="#'+id+'_'+i+'">'+api.examples[i].title+'</a>\
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

	var e=APICALLS[apiID].examples[eID];
	
	e.container=$('.form',$(this).parent());
	
	$(e.container).html('');
	$.uAPIconsole(e);
}
