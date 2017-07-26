
$('.carousel').carousel({
  interval: 2000
})


var logoPorto=document.querySelector(".logoPorto");
var logoProtoFix=document.querySelector(".logoProtoFix");
var navDiv=document.querySelector(".navDiv");

window.onscroll=function(){
 var scrollsize=document.body;
 if (scrollsize.scrollTop>10){  
		companyFunc();

      //  ====================   if >10 `
	logoPorto.style.marginLeft='-40px';  
	logoProtoFix.style.top='-400px';	
	navDiv.style.top="0px";				
	navDiv.style.opacity="0.9";       
 	$("#sectionfirstServices .col-md-9 .row ").eq(2).addClass('slideInUp').animate({'opacity': '1'},1000) ;   //======= for services page
 		if(scrollsize.scrollTop>100){ //====================   if >100		
 			

 			if(scrollsize.scrollTop>157){ //====================   if >157	
	 			$("#sectionfirstCompany .nav.nav-list").css({      //======   for company page 
	 				'position': 'fixed',
	 				'top': '100px'
	 			});	

				if(scrollsize.scrollTop>200){ //====================   if >200
					$("#sectionfirstServices .col-md-9 .row ").eq(3).addClass('slideInUp').animate({'opacity': '1'},1300) ; //====== for services page
				 	$("#scrollButton").css('display', 'block');
				 		if(scrollsize.scrollTop>540){   //====================   if >540
						$("#third .container .row").eq(1).addClass('slideInUp').css('opacity', '1'); 
						 	if(scrollsize.scrollTop>650){    //====================   if >650
			 				//======   for company page > history section
						 		$("#history img").addClass('slideInUp').animate({'opacity': '1'},1500);   //======   for company page 
						 		$("#history ul li").eq(0).addClass('slideInUp').animate({'opacity': '1'},1500);   //======   for company page 
						 		if(scrollsize.scrollTop>700){    //====================   if >700
						 			$("#history ul li").eq(1).addClass('slideInUp').animate({'opacity': '1'},1500);   //======   for company page 
									$("#third .container .row").eq(2).addClass('slideInUp').css('opacity', '1') ; // for index page

						 			if(scrollsize.scrollTop>750){    //====================   if >750
						 			$("#history ul li").eq(2).addClass('slideInUp').animate({'opacity': '1'},1500);   //======   for company page 
								 		if(scrollsize.scrollTop>800){
						 					$("#history ul li").eq(3).addClass('slideInUp').animate({'opacity': '1'},1500);   //======   for company page 


									 		if(scrollsize.scrollTop>850){   //====================   if >850
					 							$("#history ul li").eq(4).addClass('slideInUp').animate({'opacity': '1'},1500);   //======   for company page 

					 							if(scrollsize.scrollTop>950){    //====================   if >850
										 			$("#mission .col-md-6").eq(0).addClass('slideInUp').animate({'opacity': '1'},1000);    //======   for company page 
										 			$("#mission .col-md-6").eq(1).addClass('slideInUp').animate({'opacity': '1'},1500);    //======   for company page 
										 			if(scrollsize.scrollTop>2144){
										 				$("#sectionfirstCompany .nav.nav-list").css({
										 					'position': 'absolute',
										 					'top': $('footer').offset().top-461 +"px"
										 				});
										 			}
										 		}
										 	}
										}
									}
								}
						 	}
					 }
				 }else{    //==================== for  if >200
		 			 	$("#scrollButton").css('display', 'none');	
						
				}
			}else{     //====================  for if >157   
				$("#sectionfirstCompany .nav.nav-list").css('position', 'static');

			}

		}
		// else{           //====================  for if >100   
			

		// }
	}else{  //   ==========================  for  -- if  >10  
		logoPorto.style.marginLeft='40px';
		logoProtoFix.style.top='-26px';
		navDiv.style.top="25px";
		navDiv.style.opacity="1"
	}
}
// =============================  end window.onscroll  function  ===============================


$("#sectionfirstServices .col-md-9 .row ").eq(0).addClass('slideInUp').animate({'opacity': '1'},1000) ;  //========== for services page
$("#sectionfirstServices .col-md-9 .row ").eq(1).addClass('slideInUp').animate({'opacity': '1'},1500) ;  //========== for services page

 ///// ===== start   scroll button common 
$("#scrollButton").click(function() {
 	   var intervalId = setInterval(function () { 
        var s = document.body;
        if (s.scrollTop > 0) {
          s.scrollTop -= 15;
        } 
        else {
            clearInterval(intervalId);
        }
    }   , 0); 
 }); 




if ($(".js-toggle-menu").length > 0) {
  $(".js-toggle-menu").click(function () {
    $(".mobile-edit").toggleClass('active');
  });
}



 // index.html page  Mini-slider section(section05) start
var button01 = $(".but01").eq(0);
var button02 = $(".but02").eq(0);
var leftSide = $(".leftSide").eq(0);
var rightSide = $(".rightSide").eq(0);

button01.click(function(){
leftSide.css('left','580px');
rightSide.css('right', '-600px');
leftSide.css('opacity','1');
button01.css("background","#E04622");
button02.css("background","#5e7279");

});
button02.click(function(){
leftSide.css('left', '400px');
rightSide.css('right', '0');
leftSide.css('opacity','0');
button01.css("background","#5e7279");
button02.css("background","#E04622");
});
// index.html page  Mini-slider section(section05) end


//======   iconSlider section start
var buttonIcon01 = $("#sixth .prev");
var buttonIcon02 = $("#sixth .next");
var iconSlider = $("#sixth .iconSlider");
j=0;
k=1;

buttonIcon01.click(function(){
	if(j==1){
		iconSlider.css("right","-335px");
		k=0;
	}else if(j==0){
		iconSlider.css("right","-169px");
		j=1;
		k=1;
	}
});

buttonIcon02.click(function(){
	if(k==0 ){
		iconSlider.css("right","-169px");
		k=1;
		j=1;
	}else if(k==1 ){
		iconSlider.css("right","0px");
		j=0;
	}	
});
//======    iconSlider section end





 
// owlcarousel section start

 $(".col-md-7 .owl-carousel").owlCarousel({
 	autoplay:true,
 	items:1,
 	autoplayTimeout:2500,
 	loop:true,
 	mouseDrag:false,
 	vavElements:true,
 	animateIn:"fadeIn",
 	animateOut:"fadeOut"
 });
  $("#whoAre .owl-carousel").owlCarousel({
 	autoplay:true,
 	items:1,
 	autoplayTimeout:2500,
 	loop:true,
 	mouseDrag:false,
 	vavElements:true,
 	animateIn:"fadeIn",
 	animateOut:"fadeOut"
 });

// owlcarousel section end


// if(document.body.clientHeight>2000){
// 	console.log("salllalalaalaal");
// }


//==========   >>>>>   projects page  start
$(function() {
		var selectedClass = "";
		$(".fil-cat").click(function(){ 
		selectedClass = $(this).attr("data-rel"); 
     $("#portfolio").fadeTo(100, 0.1);
		$("#portfolio div div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $("#portfolio").fadeTo(300, 1);
    }, 300); 

    $(".fil-cat").css({
    	'background-color': 'white',
    	"color": '#E04622'
    });
    $(this).css({
    	'background-color': '#E04622',
    	"color": 'white'
    });
		
	});
});





//==========   >>>>>   projects page  end



//  tooltip in projects-data page    start

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


$(function () { 
  $('.col-md-7  [data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
});  

  $(".progress-bar").each(function(){
    each_bar_width = $(this).attr('aria-valuenow');
    $(this).width(each_bar_width + '%');
  });

$(".col-md-4 .owl-carousel").owlCarousel({
 	autoplay:false,
 	items:1,
 	mouseDrag:true,
 	nav:true,
 	dotsEach:true
 });

//  tooltip in projects-data page    end


// ====    >>>>>> company page start 
$("#sectionfirstCompany .nav.nav-list li").eq(0).click(function() {
	$('body').animate({scrollTop:$("#sectionfirstCompany #whoAre" ).offset().top-100}, 400)
	
});
$("#sectionfirstCompany .nav.nav-list li").eq(1).click(function() {
	$('body').animate({scrollTop:$("#sectionfirstCompany #history" ).offset().top-100}, 400)
});
$("#sectionfirstCompany .nav.nav-list li").eq(2).click(function() {
	$('body').animate({scrollTop:$("#sectionfirstCompany #mission" ).offset().top-100}, 400)
});
$("#sectionfirstCompany .nav.nav-list li").eq(3).click(function() {
	$('body').animate({scrollTop:$("#sectionfirstCompany #leadership" ).offset().top-100}, 400)
});
$("#sectionfirstCompany .nav.nav-list li").eq(4).click(function() {
	$('body').animate({scrollTop:$("#sectionfirstCompany #partners" ).offset().top-100}, 400)
});



function companyFunc(){
	if ($('#sectionfirstCompany').hasClass('testForFunction')){   // for other pages do not error , this 'if' must test company page
		var bodyTop=document.body.scrollTop
		var whoAre=$("#sectionfirstCompany #whoAre" ).offset().top-101;
		var history=$("#sectionfirstCompany #history" ).offset().top-101;
		var mission=$("#sectionfirstCompany #mission" ).offset().top-101;
		var leadership=$("#sectionfirstCompany #leadership" ).offset().top-101;
		var partners=$("#sectionfirstCompany #partners" ).offset().top-101;



		if(bodyTop>whoAre){    // #whoAre  if start
			$("#sectionfirstCompany .nav.nav-list li").eq(0).css({
				'background-color': '#EEEEEE',
				'font-weight': '600',
				'color':'black'
			});


			if(bodyTop>history){    // #history  if start
				$("#sectionfirstCompany .nav.nav-list li").eq(0).css({
					'background-color': 'white',
					'font-weight': '400',
					'color':'#888888'
				});
				$("#sectionfirstCompany .nav.nav-list li").eq(1).css({
					'background-color': '#EEEEEE',
					'font-weight': '600',
					'color':'black'
				});
				if(bodyTop>mission){    // #mission  if start
					$("#sectionfirstCompany .nav.nav-list li").eq(1).css({
						'background-color': 'white',
						'font-weight': '400',
						'color':'#888888'
					});
					$("#sectionfirstCompany .nav.nav-list li").eq(2).css({
						'background-color': '#EEEEEE',
						'font-weight': '600',
						'color':'black'
					});
					if(bodyTop>leadership){  // #leadership  if start
						$("#sectionfirstCompany .nav.nav-list li").eq(2).css({
							'background-color': 'white',
							'font-weight': '400',
							'color':'#888888'
						});
						$("#sectionfirstCompany .nav.nav-list li").eq(3).css({
							'background-color': '#EEEEEE',
							'font-weight': '600',
							'color':'black'
						});
						if(bodyTop>partners){  // #partners  if start
							$("#sectionfirstCompany .nav.nav-list li").eq(3).css({
								'background-color': 'white',
								'font-weight': '400',
								'color':'#888888'
							});
							$("#sectionfirstCompany .nav.nav-list li").eq(4).css({
								'background-color': '#EEEEEE',
								'font-weight': '600',
								'color':'black'
							});
						}
						else{      		// #partners  if end
							$("#sectionfirstCompany .nav.nav-list li").eq(4).css({
								'background-color': 'white',
								'font-weight': '400',
								'color':'#888888'
							});
						}
					}
					else{        // #leadership  if end
						$("#sectionfirstCompany .nav.nav-list li").eq(3).css({
							'background-color': 'white',
							'font-weight': '400',
							'color':'#888888'
						});
					}
				}
				else{      // #mission  if end
					$("#sectionfirstCompany .nav.nav-list li").eq(2).css({
						'background-color': 'white',
						'font-weight': '400',
						'color':'#888888'
					});
				}
			}
			else{      // #history  if end
				$("#sectionfirstCompany .nav.nav-list li").eq(1).css({
					'background-color': 'white',
					'font-weight': '400',
					'color':'#888888'
				});
			}
			
		}
		else{        // #whoAre  if end
			$("#sectionfirstCompany .nav.nav-list li").eq(0).css({
				'background-color': 'white',
				'font-weight': '400',
				'color':'#888888'
			});
		}
	}
}

//==== >>>>> company page end 

