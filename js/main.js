
$(window).on("load", function () {
  $('body,html').scrollTop(0)
  $(".pre-loader").fadeOut(500, function () {
      $(this).remove();
      $('html, body').css("overflow-y", "visible");


  });
});

  new WOW().init();
  
  
$(function() {


  
  
  // $('a[data-scroll]').on("click",function (e){
  //   e.preventDefault();    
    
  //   $("html, body").animate({
  //     scrollTop: $($(this).attr("data-scroll")).offset().top
  //   }, 1000);
  // });



  // $(".selector .select li a").on("shown.bs.tab", function(e) {
  //   let $owl = $(".tab-content .owl-carousel");
  //   $owl.trigger("refresh.owl.carousel");
  // });

    $('select').selectpicker();
    
  
    
    $('.header .owl-carousel').owlCarousel({
      rtl: document.dir == 'rtl' ? true : false,
      autoplay:true,
      loop:true,
      margin:1,
      dots:true,
      nav:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      },
      navText: ["<span class='fa fa-chevron-right'></span>","<span class='fa fa-chevron-left'></span>"]
    });


    $('.cats .owl-carousel').owlCarousel({
      rtl: document.dir == 'rtl' ? true : false,
      // autoplay:true,
      loop:true,
      margin:30,
      dots:true,
      nav:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:4
          }
      },
      navText: ["<span class='fa fa-chevron-right'></span>","<span class='fa fa-chevron-left'></span>"]
    });


    $('.sp-offers .owl-carousel').owlCarousel({
      rtl: document.dir == 'rtl' ? true : false,
      autoplay:true,
      loop:true,
      margin:10,
      dots:true,
      nav:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:5,
          },
          1400:{
              items:6,
          }
      },
      navText: ["<span class='fa fa-chevron-right'></span>","<span class='fa fa-chevron-left'></span>"]
    });


    $('.co-workers .owl-carousel').owlCarousel({
      rtl: document.dir == 'rtl' ? true : false,
      autoplay:true,
      loop:true,
      margin:8,
      dots:true,
      nav:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:2
          },
          600:{
              items:4
          },
          1000:{
              items:7,
          },
          1400:{
              items:9,
          }
      },
      navText: ["<span class='fa fa-chevron-right'></span>","<span class='fa fa-chevron-left'></span>"]
    });


    

    
    


    
    
  

  // menu - search




    $(".nav-bar .icons .search-icon").on("click", function () {
      $(".search-container").fadeIn();
      $('html, body').css("overflow-y", "hidden");
    });
    $(".search-container, .search-container .close").on("click", function () {
      $(".search-container").fadeOut();
      $('html, body').css("overflow-y", "visible");

    });
    $(".zx-search").on("click", function(e) {
      e.stopPropagation();
    });



    




    $(".nav-bar .icons .menu-icon").on("click", function () {
      $(".fixed-menu").fadeIn();
      $(".fixed-menu .menu").addClass("show");
      $(".fixed-menu .main-list").addClass("show");
      $('html, body').css("overflow-y", "hidden");
    });
    $(".fixed-menu, .fixed-menu .menu-header .close").on("click", function () {
      $(".fixed-menu").fadeOut();
      $(".fixed-menu .menu").removeClass("show");
      $(".fixed-menu .main-list").removeClass("show");
      $('html, body').css("overflow-y", "visible");
    });
    $(".fixed-menu .menu").on("click", function(e) {
      e.stopPropagation();
    });



    $(".fixed-menu .main-list .slide").on("click", function() {
      $(this).toggleClass("active");
      $(this).children("ul").slideToggle();
      });
    $(".fixed-menu .sub-list .slide-two").on("click", function(e) {
      e.stopPropagation();
    });
    $(".fixed-menu .sub-list .slide-two").on("click", function() {
      $(this).toggleClass("active");
      $(this).children("ul").slideToggle();
    });


     if ($(window).width() < 992) {
       $(".footer .list-header").on("click", function() {
         $(this).toggleClass("active");
         $(this).siblings("ul").slideToggle();
       });
     
      } else {
        
      }

    





    // $(".fixed-menu .cur-switcher").on("click", function () {
    //   $(".fixed-menu .cur-switcher .switch").slideToggle();
    // });




// Map
var x = 0;
var locations = [
    ['الرياض', 24.7041827,46.7008969, ++x]
];

var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: new google.maps.LatLng(24.7041827,46.7398969),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoomControl: false,
    fullscreenControl: false
});


var marker, i;

for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        icon: '../images/mapmark-1.png',
        map: map
    });
}


      

    


  
});





// var map;
// function initMap() {
//   map = new google.maps.Map(
//       document.getElementById('map'),
//       {center: new google.maps.LatLng(-33.91722, 151.23064), zoom: 16});

//   var iconBase =
//       'https://developers.google.com/maps/documentation/javascript/examples/full/images/';

//   var icons = {
//     parking: {
//       icon: iconBase + 'parking_lot_maps.png'
//     },
//     library: {
//       icon: iconBase + 'library_maps.png'
//     },
//     info: {
//       icon: iconBase + 'info-i_maps.png'
//     }
//   };

//   var features = [
//     {
//       position: new google.maps.LatLng(-33.91721, 151.22630),
//       type: 'info'
//     }, {
//       position: new google.maps.LatLng(-33.91539, 151.22820),
//       type: 'info'
//     }, {
//       position: new google.maps.LatLng(-33.91747, 151.22912),
//       type: 'info'
//     }, {
//       position: new google.maps.LatLng(-33.91910, 151.22907),
//       type: 'info'
//     }, {
//       position: new google.maps.LatLng(-33.91725, 151.23011),
//       type: 'info'
//     }, {
//       position: new google.maps.LatLng(-33.91872, 151.23089),
//       type: 'info'
//     }, {
//       position: new google.maps.LatLng(-33.91784, 151.23094),
//       type: 'info'
//     }, {
//       position: new google.maps.LatLng(-33.91682, 151.23149),
//       type: 'info'
//     }, {
//       position: new google.maps.LatLng(-33.91790, 151.23463),
//       type: 'info'
//     }, {
//       position: new google.maps.LatLng(-33.91666, 151.23468),
//       type: 'info'
//     }, {
//       position: new google.maps.LatLng(-33.916988, 151.233640),
//       type: 'info'
//     }, {
//       position: new google.maps.LatLng(-33.91662347903106, 151.22879464019775),
//       type: 'parking'
//     }, {
//       position: new google.maps.LatLng(-33.916365282092855, 151.22937399734496),
//       type: 'parking'
//     }, {
//       position: new google.maps.LatLng(-33.91665018901448, 151.2282474695587),
//       type: 'parking'
//     }, {
//       position: new google.maps.LatLng(-33.919543720969806, 151.23112279762267),
//       type: 'parking'
//     }, {
//       position: new google.maps.LatLng(-33.91608037421864, 151.23288232673644),
//       type: 'parking'
//     }, {
//       position: new google.maps.LatLng(-33.91851096391805, 151.2344058214569),
//       type: 'parking'
//     }, {
//       position: new google.maps.LatLng(-33.91818154739766, 151.2346203981781),
//       type: 'parking'
//     }, {
//       position: new google.maps.LatLng(-33.91727341958453, 151.23348314155578),
//       type: 'library'
//     }
//   ];

//   // Create markers.
//   for (var i = 0; i < features.length; i++) {
//     var marker = new google.maps.Marker({
//       position: features[i].position,
//       icon: icons[features[i].type].icon,
//       map: map
//     });
//   };
// }