
jQuery(document).ready(function(){
	jQuery('.menu ul li').each(function() {
		if( jQuery(this).find('ul').length ) {
			jQuery(this).addClass('item-submenu');
		}
	});
});
