/**
 * jquery-filterList
 *
 * This is a jquery plugin that filter given list by a keyword.
 * @author Mustafa Atik <muatik>
 * @link https://github.com/muatik/jquery-filterList.git
 *
 * */
(function($){

	// creating a jquery's filter function named icontains for case insensitive search
	jQuery.expr[":"].icontains = jQuery.expr.createPseudo(function (arg) {                                                                                                                                                                
		return function (elem) {                                                            
			return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;        
		};                                                                                  
	});
	
	$.fn.filterList=function(settings){
		
		var settings=$.extend({
			'container':null,
			itemTag: '*',
			speed: 'fast',
			placeHolder: 'type to filter'
		}, settings);
		
		this.each(function(){
			
			var list=$(this);

			if(list.hasClass('_filterList'))
				return;
			
			var tbox=$('<input class="_filterListTBox" type="text"  '
				+'placeholder="'+settings.placeHolder+'" />');
			
			tbox.bind('keyup change',function(){
				var keyword=$(this).val();
				if(keyword==''){
					list.find(settings.itemTag).slideDown();
				}else{
					var m=list.find(settings.itemTag+':icontains('+keyword+')').slideDown(settings.speed);
					list.find(settings.itemTag).not('._filterListTBox').not(m).slideUp(settings.speed);
				}
			});

			if(!settings.container)
				$(tbox).prependTo(list);
			else
				$(tbox).prependTo(settings.container);
			
		});

	}

})(jQuery);
