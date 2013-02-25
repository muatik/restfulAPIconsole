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
			'container':null
		}, settings);
		
		this.each(function(){
			
			var list=$(this);

			if(list.hasClass('_filterList'))
				return;
			
			var tbox=$('<input class="_filterListTBox" type="text"  />');
			
			tbox.bind('keyup change',function(){
				var keyword=$(this).val();
				if(keyword==''){
					list.find('*').slideDown();
				}else{
					var m=list.find(':icontains('+keyword+')').slideDown();
					list.find('*').not('._filterListTBox').not(m).slideUp();
				}
			});

			if(!settings.container)
				$(tbox).prependTo(list);
			else
				$(tbox).prependTo(settings.container);
			
		});

	}

})(jQuery);
