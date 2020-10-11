// JavaScript Document
$(function(){
	$('.event-box').click(function(){
		$('.joinbx').addClass('jump')
		setTimeout(() => {
			$('.joinbx').removeClass('jump');
		},1000)
	});
	$('.heart').click(function(){
		$(this).toggleClass('check-h');
		if($(this).hasClass('check-h')){
			$('body').append('<div class="alert">加入最愛</div>')
		}else{
			$('body').append('<div class="alert">取消最愛</div>')
		}
	});
	$('.btn-addToCart').click(function(){
		$('.addCart').addClass('fadeIn');
		setTimeout(() => {
			$('.addCart').removeClass('fadeIn');
		},2000)
	});
	$('.checkOut,.social').click(function(){
		alert('目前尚無網路 請稍後再試')
	});
	$('.lightbx').hide();
	$('a.link').click(function(){
		$('.lightbx').hide();
		var activeForm = $(this).attr('href');
		$(activeForm).fadeIn();
		$('.bgDark').fadeIn();
	});
	$('.close-form').click(function(){
		$('.lightbx').fadeOut();
		$('.bgDark').fadeOut();
	})
})