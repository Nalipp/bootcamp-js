$('li').click(function(){
  $(this).toggleClass("completed");
});

$('span').click(function(event){
  $(this).css('display', 'none');
  event.stopPropagation();
})
