import $ from 'jquery';

$(document).ready(function () {
  "use strict";
  $('#ToggleBtnNav').click(function () {
    $('#containNav').slideToggle('slow');
  });
  $("#butt").click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 2600);
  });

  $(window).scroll(function () {
    var yPos = ($(window).scrollTop());
    if (yPos > 300) {
      $("#butt").fadeIn();
    } else {
      $("#butt").fadeOut();
    }
  });
  $("#shareBtnShare").click(function () {
    $(".socialIcons").toggleClass("ToDISP");
  });

  $(".listRandCLink1").click(function (e) {
    $(".Disc").show();
    $(".Rev").hide();
    $(".Comm").hide();
    $(".ListRandC1").addClass("activeList");
    $(".ListRandC2").removeClass("activeList");
    $(".ListRandC3").removeClass("activeList");
    e.preventDefault();
  });

  $(".listRandCLink2").click(function (e) {
    $(".Disc").hide();
    $(".Rev").show();
    $(".Comm").hide();
    $(".ListRandC2").addClass("activeList");
    $(".ListRandC1").removeClass("activeList");
    $(".ListRandC3").removeClass("activeList");
    e.preventDefault();
  });

  $(".listRandCLink3").click(function (e) {
    $(".Disc").hide();
    $(".Rev").hide();
    $(".Comm").show();
    $(".ListRandC3").addClass("activeList");
    $(".ListRandC2").removeClass("activeList");
    $(".ListRandC1").removeClass("activeList");
    e.preventDefault();
  });

  $(".imgProduct2").click(function () {
    var srcImage = $(this).attr('src');
    $(".imgProduct").attr('src', srcImage);
  });


  $("#LinkOfleftNav").click(function (e) {
    $('.ULcontentLinks').slideToggle();
    e.preventDefault();
  });
  $("#LinkOfleftNav1").click(function (e) {
    $('.ULcontentLinks1').slideToggle();
    e.preventDefault();
  });
  $("#LinkOfleftNav2").click(function (e) {
    $('.ULcontentLinks2').slideToggle();
    e.preventDefault();
  });
  $("#LinkOfleftNav3").click(function (e) {
    $('.ULcontentLinks3').slideToggle();
    e.preventDefault();
  });
  $('.SPANOFicon').click(function () {
    $(".HeartIcon").addClass("HIcon");

  });
  $(".LinkOFSmallNav").click(function (e) {
    e.preventDefault();
  });
  // $(window).scroll(function (e) {
  //   let yPos = ($(window).scrollTop());
  //   // let wWindow = ($(window).width());
  //   if (yPos > 1100 && yPos < 3100 && $(window).width() > 1200) {
  //     $('#LFTN').addClass('toFixed');
  //     $('#RFTN').addClass('toLeft');
  //     e.preventDefault();
  //   } else if (yPos > 3000 && $(window).width() < 1199) {
  //     $('#LFTN').removeClass('toFixed');
  //     $('#RFTN').removeClass('toLeft');
  //     e.preventDefault();
  //   } else {
  //     $('#LFTN').removeClass('toFixed');
  //     $('#RFTN').removeClass('toLeft');
  //     e.preventDefault();
  //   }
  // });

  $('.page-nav ul li .PageLinkindecator').click(function (e) {
    $('.page-nav li.ActiveCurrent').removeClass('ActiveCurrent');
    var $parent = $(this).parent();
    $parent.addClass('ActiveCurrent');
    e.preventDefault();
  });

  var $currLink = $(".page-nav ul li .PageLinkindecator");
  $(".nextPageIndecator").click(function (e) {
    $currLink = $currLink.next();
    if ($currLink.parent().hasClass('ActiveCurrent')) {
      $currLink.parent().removeClass('ActiveCurrent');
    } else {
      $currLink.parent().addClass('ActiveCurrent');
    }
    e.preventDefault();
  });
  $('.filterIcon').click(function (e) {
    $('.ofListGroup').slideToggle();
    e.preventDefault();
  });

  // $("#mySlider").slider({
  //   range: true,
  //   min: 10,
  //   max: 999,
  //   values: [200, 500],
  //   slide: function (event, ui) {
  //     $("#price").val("$" + ui.values[0] + " - $" + ui.values[1]);
  //   }
  // });

  // $("#price").val("$" + $("#mySlider").slider("values", 0) +
  //   " - $" + $("#mySlider").slider("values", 1));


  $(".ContactBuuuut").on('click', function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1500);

  });
  $('.SANDClink1').click(function () {
    $('.searchBarHeader').slideToggle(500);
  });


}());
