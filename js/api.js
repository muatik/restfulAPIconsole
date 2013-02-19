$(document).ready(function(){
	APIConsole.init();
})

APIConsole={}

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

	$.ajax({
		host: host,
		url: url,
		type: type,
		cache: false,
		data: fields
	}).done(function(r){
		alert(r);
	});

}
