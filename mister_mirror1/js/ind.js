$(document).ready(function()
{
	var date1 = new Date();
	var l = document.getElementById('left');
	var r = document.getElementById('right');
	var a = document.getElementById('abz1m');
	$(window).scroll(function()
	{
		if ($(this).width()>1300)
		{
		if ($(this).scrollTop()>1000)
		{
			$(".abz4").animate(
			{
				marginLeft: "20%"
			}, 1200);
			$("#left, #right").animate(
			{
				opacity: 1
			}, 2000);
		}
		}

		if ($(this).width()<1300 && $(this).width()>460)
		{
		if ($(this).scrollTop()>500)
		{
			$(".abz4").animate(
			{
				marginLeft: "20%"
			}, 1200);
			$("#left, #right").animate(
			{
				opacity: 1
			}, 2000);
		}
		}
		if ($(this).width()<700 && $(this).width()>460)
		{
		if ($(this).scrollTop()>400)
		{
			$(".abz4").animate(
			{
				marginLeft: "20%"
			}, 1200);
			$("#left, #right").animate(
			{
				opacity: 1
			}, 2000);
		}
		}
		if($(this).width()>1300)
		{
		if ($(this).scrollTop()>3450)
		{
		$("#anim1").animate(
		{
			opacity: 1 
		}, 1000);		
        var t1 = setTimeout(timer1, 1500);
		var an1 = document.getElementById('anim1');
		function timer1()
		{
			$("#anim2").animate(
			{
				opacity: 1
			}, 1000);
		}
		if (an1.style.opacity==1)
		{
			clearTimeout(t1);
		}
		var t2 = setTimeout(timer2, 2500);
		function timer2()
		{
			$("#anim3").animate(
			{
				opacity: 1
			}, 1000);
		}
		}}
		if($(this).width()<1000)
		{
		if ($(this).scrollTop()>2450)
		{
		$("#anim1").animate(
		{
			opacity: 1 
		}, 1000);		
		var t3 = setTimeout(timer3, 1500);
		function timer3()
		{
			$("#anim2").animate(
			{
				opacity: 1
			}, 1000);
		}
		var t4 = setTimeout(timer4, 2500);
		function timer4()
		{
			$("#anim3").animate(
			{
				opacity: 1
			}, 1000);
		}
		}}
		if($(this).width()<900)
		{
		if ($(this).scrollTop()>2100)
		{
		$("#anim1").animate(
		{
			opacity: 1 
		}, 1000);		
		var t4 = setTimeout(timer5, 1500);
		function timer5()
		{
			$("#anim2").animate(
			{
				opacity: 1
			}, 1000);
		}
		var t6 = setTimeout(timer6, 2500);
		function timer6()
		{
			$("#anim3").animate(
			{
				opacity: 1
			}, 2000);
		}
		}}
		if($(this).width()<800)
		{
		if ($(this).scrollTop()>1900)
		{
		$("#anim1").animate(
		{
			opacity: 1 
		}, 1000);		
		var t7 = setTimeout(timer7, 1500);
		function timer7()
		{
			$("#anim2").animate(
			{
				opacity: 1
			}, 1000);
		}
		var t8 = setTimeout(timer8,2500);
		function timer8()
		{
			$("#anim3").animate(
			{
				opacity: 1
			}, 1000);
		}
		}}
		if($(this).width()<700)
		{
		if ($(this).scrollTop()>1450)
		{
		$("#anim1").animate(
		{
			opacity: 1 
		}, 1000);		
		var t9 = setTimeout(timer9, 1500);
		function timer9()
		{
			$("#anim2").animate(
			{
				opacity: 1
			}, 1000);
		}
		var t10 = setTimeout(timer10, 2500);
		function timer10()
		{
			$("#anim3").animate(
			{
				opacity: 1
			}, 1000);
		}
		}}
				if($(this).width()<550)
		{
		if ($(this).scrollTop()>1150)
		{
		$("#anim1").animate(
		{
			opacity: 1 
		}, 1000);		
		var t9 = setTimeout(timer9, 1500);
		function timer9()
		{
			$("#anim2").animate(
			{
				opacity: 1
			}, 1000);
		}
		var t10 = setTimeout(timer10, 2500);
		function timer10()
		{
			$("#anim3").animate(
			{
				opacity: 1
			}, 1000);
		}
		}}
		if($(this).width()>1300)
		{
        if ($(this).scrollTop()>3000)
		{			
		$("#right2").animate(
		{
			opacity: 1
		}, 2000);
		}
		}
		if($(this).width()<1000)
		{
        if ($(this).scrollTop()>2000)
		{			
		$("#right2").animate(
		{
			opacity: 1
		}, 2000);
		}
		}
		if($(this).width()<900)
		{
        if ($(this).scrollTop()>1800)
		{			
		$("#right2").animate(
		{
			opacity: 1
		}, 2000);
		}
		}
		if($(this).width()<800)
		{
        if ($(this).scrollTop()>1600)
		{			
		$("#right2").animate(
		{
			opacity: 1
		}, 2000);
		}
		}
		if($(this).width()<700)
		{
        if ($(this).scrollTop()>1300)
		{			
		$("#right2").animate(
		{
			opacity: 1
		}, 2000);
		}
		}
		 if($(this).width()>1300)
		{
		if ($(this).scrollTop()>3500)
		{
			var t11 = setTimeout(timer11, 2000);
			function timer11()
			{
			$(".kart").animate(
			{
				opacity: 1 
			}, 1500);
			}
			var t12 = setTimeout(timer12, 3000);
			function timer12()
			{
			$(".zagolovok2, .zagolovok3, .text2").animate(
			{
				opacity: 1
			}, 1500);			
			}
		}}
		if($(this).width()<1000)
		{
		if ($(this).scrollTop()>2500)
		{
			var t13 = setTimeout(timer13, 2000);
			function timer13()
			{
			$(".kart").animate(
			{
				opacity: 1 
			}, 1500);
			}
			var t14 = setTimeout(timer14, 3000);
			function timer14()
			{
			$(".zagolovok2, .zagolovok3, .text2").animate(
			{
				opacity: 1
			}, 1500);			
			}
		}}
		if($(this).width()<900)
		{
		if ($(this).scrollTop()>2150)
		{
			var t15 = setTimeout(timer15, 2000);
			function timer15()
			{
			$(".kart").animate(
			{
				opacity: 1 
			}, 1500);
			}
			var t16 = setTimeout(timer16, 3000);
			function timer16()
			{
			$(".zagolovok2, .zagolovok3, .text2").animate(
			{
				opacity: 1
			}, 1500);				
			}
		}}
		if($(this).width()<800)
		{
		if ($(this).scrollTop()>1900)
		{
			var t17 = setTimeout(timer17, 2000);
			function timer17()
			{
			$(".kart").animate(
			{
				opacity: 1 
			}, 1500);
			}
			var t18 = setTimeout(timer18, 3000);
			function timer18()
			{
			$(".zagolovok2, .zagolovok3, .text2").animate(
			{
				opacity: 1
			}, 1500);				
			}
		}}
		if($(this).width()<700)
		{
		if ($(this).scrollTop()>1500)
		{
			var t19 = setTimeout(timer19, 2000);
			function timer19()
			{
			$(".kart").animate(
			{
				opacity: 1 
			}, 1500);
			}
			var t20 = setTimeout(timer20, 3000);
			function timer20()
			{
			$(".zagolovok2, .zagolovok3, .text2").animate(
			{
				opacity: 1
			}, 1500);				
			}
		}}
		if($(this).width()<500)
		{
		if ($(this).scrollTop()>1500)
		{
			$(".t, .t2, .t3, .t4, .t5").animate(
			{
				marginLeft: "1%"
			}, 1000); 
		}}
	 });
$(window).resize(function()
{
	if ($(window).width()>460)
	{
    if (l.style.display=="none")
	{
		l.style.display="block";
	}
	 if (r.style.display=="none")
	{
		r.style.display="block";
	}
	$("#v").click(function() 
	{
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate(
	{
    scrollTop: destination
    }, 1000);
    return false;
  });
	$("#v").mouseover(function()
	{
		$(this).animate(
		{
		paddingBottom: "3%", 
		fontSize: "1.02vw"
		}, 1000);
	});
		$("#v").mouseout(function()
	{
		$(this).animate(
		{
		paddingBottom: "1.4%", 
		fontSize: "0.98vw"
		}, 1000);
	});
	$("#test").animate(
	{
		marginLeft: "20%"
	}, 1500);
	$(".abz3").animate(
	{
		marginRight: "22.8%"
	}, 1500);	 
    
	}
	else
	{
	$("#left, .abz4, #right, #test, #right2, .abz3, #anim1, #anim2, #anim3, .zagolovok2, .zagolovok3, .text2").queue("fx", []);
	var tm1 = setTimeout(timerm1, 1000);
	var tm2 = setTimeout(timerm2, 2000);
	var tm3 = setTimeout(timerm3, 3000);
	var tm4 = setTimeout(timerm4, 4000);
	function timerm1()
	{
     $("#gr").fadeIn(1000);
	}
	function timerm2()
	{
	 clearTimeout(tm1);
     $("#sl").fadeIn(1000);
	}
	function timerm3()
	{
		 clearTimeout(tm2);
     $("#kr").fadeIn(1000);
	}
	function timerm4()
	{
		var date2 = new Date();
		 clearTimeout(tm3);
	$("#dm").fadeIn(1000);
	}
    $("#test").animate(
	{
		marginLeft: "5%"
	}, 500);
         $(window).scroll(function()
		 {
			 if($(window).scrollTop()>20)
		{
		$(".abzm").animate(
		{
			marginLeft: "5%"
		}, 1000);
			 }
		 });
	    $("#strelka1").click(function()
		{
			$("#left").fadeOut(800);
			$("#right").fadeIn(800);
		});
		 $("#strelka2").click(function()
		{
			$("#left").fadeIn(800);
			$("#right").fadeOut(800);
		});
		$("#strelka3").click(function()
		{
			$("#l1").fadeOut(800);
			$("#l2").fadeIn(800);
		});
		 $("#strelka4").click(function()
		{
			$("#l2").fadeOut(800);
			$("#l1").fadeIn(800);
		});
	}

});
$(window).resize();
});