$(function(){
	$("#fullpage").fullpage({
		verticalCentered:false,
		navigation:true,
		// 设置滚屏的速度
			scrollingSpeed: 1500,
		// 滚动某一屏后的回调函数
		
		afterLoad:function(anchorLink,index){
			
			$(".dowm").fadeIn();
			$(this).addClass('animate');
			if(index=7){
				$(".screen07 .start img").addClass('animated');
				$(".screen07 .text").addClass('animated');
			}
			 if(index=8){
			 	$(this).on("mousemove",function(e){
			 		$(".screen08 .btn").on("mouseenter",function(){
					$(".screen08 .btn img:last-child").show();
				}).on("mouseleave",function(){
					$(".screen08 .btn img:last-child").hide();
				});
				$(".screen08 .more").on("click",function(){
					$.fn.fullpage.moveTo(1);
				})
			 		console.log("1");
			 		$(".screen08 .hand").css({
			 			"left":e.clientX+20+"px",
			 			"top":e.clientY+20+"px"
			 		});


			 	});

				
			}

		},
		// //当离开某一屏进入到下一屏的动作
		onLeave:function(index, nextindex, direction){
			$(".dowm").fadeOut();

			if(index==2&&nextindex==3){
				$(".screen02 .hide").addClass('animate').on("animationend",function(){
					$(".screen03 .cart img:last-child").show();
					$(".screen03 .change img:last-child").show();
				});
			}else if(index==3 && nextindex==4){
				$(".screen03 .hide").addClass('animated').on("animationend",function(){
					$(".screen03 .hide").hide();
					$(".screen04 .car .sofa_hide").show();
					$(".screen04 .car").addClass('animated').on("animationend",function(){
						$(".screen04 .text").fadeOut();
						$(".screen04 .text2").fadeIn();
					$(".screen04 .address").fadeIn();
					});
			});
		}else if(index==4 && nextindex==5){

			$(".screen05 .hand").addClass('animated').on("animationend",function(){
				$(".screen05 .mouse02").addClass('animated');
				$(".screen05 .sofa5_hide").addClass('animated');
				$(".screen05 .order").addClass('animated');
			});
	
			}else if(index==5 && nextindex==6){
				$(".screen06 .cloud01").addClass('animated');
				$(".screen06 .cloud02").addClass('animated');
				
				$(".screen06 .screen06_sofa").addClass('animated');
				$(".screen06 .box").addClass('animated').on("animationend",function(){
					$(".screen06 .screen06_sofa").hide();
					$(".screen06 .screen06_sofa2").show();
					$(".screen06 .box").addClass('animated2').on("animationend",function(){
						$(".section6").addClass('animated2').on("animationend",function(){
							$(".screen06 .buyer").addClass('animated');
							$(".screen06 .address").addClass('animated');
							
								$(".screen06 .worker").addClass('animated2').on("animationend",function(){
									$(".screen06 .say").addClass('animated2').on("animationend",function(){
										$(".screen06 .doorImg").show().on("animationend",function(){
											$(".screen06 .personImg").addClass('animated3');
										});
										

									});
								});
							
							
						});
					});
				});
			}
		},//onleave

		//页面结构加载完成后
			afterRender: function () {

				$(".down").on("click",function () {

				    $.fn.fullpage.moveSectionDown();
				})
			}
	});
});
