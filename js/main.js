$("div#name_tag").mouseenter(
	function() {



			$("div#name_tag").animate({
				opacity: 0
			}, 1000, function() {
				$("div#name_tag").css("zIndex",-1);

			});

			$("div#entry_tag").css("zIndex",2);
		
			$("div#entry_tag").animate({
				opacity: 1
			}, 1000, function() {
			});

	}
);

$("div#entry_tag").mouseleave(
	function() {


			$("div#entry_tag").animate({
				opacity: 0
			}, 1000, function() {
				$("div#entry_tag").css("zIndex",-1);
			});

			$("div#name_tag").css("zIndex",2);

			$("div#name_tag").animate({
				opacity: 1
			}, 1000, function() {
			});
		
	}
);
