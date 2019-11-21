/*
JS


I added js function to simulate animation for navigation bar when scrolled to the very top
-- Braden lee

*/

$(document).ready(function(){
  header = $('.header');
  head = $('.head');
  navIcons = $('.navBar');

    $(document).scroll(function(){
      var top = $(this).scrollTop();
      if(top>5)
      {
        header.addClass('headerActive');
        head.addClass('headActive');
        navIcons.addClass('iconActive');
      }
      else
      {
        header.removeClass('headerActive');
        header.addClass('header');
        head.removeClass('headActive');
        head.addClass('head');
        navIcons.removeClass('iconActive');
        navIcons.addClass('navBar');
      }
    })
});
