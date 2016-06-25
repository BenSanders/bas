function init() {
				$(document).on("scroll",function(){
					if($(document).scrollTop()>100) {
						$("header").removeClass("large").addClass("small");
					} else {
						$("header").removeClass("small").addClass("large");
					}
				});
	}

	window.onload = init();