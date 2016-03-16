$("div#name_tag").hover(
	function() {
		$(this).css('zIndex','-1');
		$("div#entry_tag").css('zIndex','2');
	}, function(){
	}
);

$("div#entry_tag").hover(
	function() {
	}, function() {
		$(this).css('zIndex','-1');
		$("div#name_tag").css('zIndex','2');
	}
);
