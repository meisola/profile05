 $(document).ready(function(){
	 $(".ban-pic1-1 img").hover(
	    function() {
	       $(this).attr("src","img/ban-pic1-2.png");
	    },
	    function() {
	       $(this).attr("src","img/ban-pic1-1.png");
	    }
	       );
	 $(".ban-pic2-1 img").hover(
				function() {
				 $(this).attr("src","img/ban-pic2-2.png");
			},
				function() {
					 $(this).attr("src","img/ban-pic2-1.png");
			}
				 );

				 $(".ban-pic3-1 img").hover(
						function() {
							 $(this).attr("src","img/ban-pic3-2.png");
						},
						function() {
							 $(this).attr("src","img/ban-pic3-1.png");
						}
							 );

							 $(".ban-pic4-1 img").hover(
									function() {
										 $(this).attr("src","img/ban-pic4-2.png");
									},
									function() {
										 $(this).attr("src","img/ban-pic4-1.png");
									}
										 );




});
