;$(function()
{
	'use strict';

	var sidebar = $('#sidebar'),
		mask = $('.mask'),
		sidebar_trigger =$('#sidebar_trigger')

	function sidebar_show()
	{
		mask.fadeIn();
		sidebar.css('left',0);
	}

	function sidebar_hide()
	{
		mask.fadeOut();
		sidebar.css('left', -sidebar.width())
	}
	sidebar_trigger.on('click',sidebar_show)
	mask.on('click',sidebar_hide)

})