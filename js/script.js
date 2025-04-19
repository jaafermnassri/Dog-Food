console.log("works fine");
$(document).ready(function(){
//==================================================    
// OWL CAROUSEL FUNCTION
//================================================== 
    $('.cards-1').owlCarousel({
        loop:true,
        margin:300,
        nav:true,
        items:3,
        dots:true,
        responsiveClass:true,
    		responsive:{
              0:{
                items:1,
                nav:true,
                margin:0,
                loop:true,
                dots:true
            },
	        600:{
	            items:3,
	            nav:true,
	            margin:0,
	            loop:true,
                dots:true
	        }
	    }
	      });
        $('.cards-3').owlCarousel({
        loop:true,
        margin:300,
        nav:true,
        items:3,
        dots:true,
        responsiveClass:true,
            responsive:{
              0:{
                items:1,
                nav:true,
                margin:0,
                loop:true,
                dots:true
            },
            600:{
                items:3,
                nav:true,
                margin:0,
                loop:true,
                dots:true
            }
        }
          });
//==================================================    
// OWL CAROUSEL FUNCTION
//==================================================

//==================================================    
// TOP BUTTON FUNCTION
//================================================== 
  $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.top-btn').fadeIn();
        } else {
            $('.top-btn').fadeOut();
        }
    });
    
    $('.top-btn').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
//==================================================    
// TOP BUTTON FUNCTION
//==================================================

//==================================================    
// REVEAL FROM SIDES
//================================================== 
      $(window).scroll(function() {
    var sectionTop = $('#section').offset().top;
    var windowHeight = $(window).height();

    if ($(window).scrollTop() + windowHeight > sectionTop) {
      $('.ls-8').addClass('fade-in-left');
      $('.rs-8').addClass('fade-in-right');
      console.log("they are here");
      
    }
    else {
      $('.ls-8').removeClass('fade-in-left');
      $('.rs-8').removeClass('fade-in-right');
    }
  });
//==================================================    
// REVEAL FROM SIDES
//==================================================   

//==================================================    
// STICKY HEADER FUNCTION
//================================================== 

        var header = $(".header");
    var headerOffset = header.offset().top;

    $(window).scroll(function() {
        if ($(window).scrollTop() > headerOffset) {
            header.addClass("sticky");
        } else {
            header.removeClass("sticky");
        }
    });
//==================================================    
// STICKY HEADER FUNCTION
//================================================== 

//==================================================    
// FIRST MODAL FUNCTION
//================================================== 

    $('#openModal').click(function(){
        $('#myModal').fadeIn();
        $("body").css('overflow', "hidden");
        $(".drop").fadeIn();
    });

   
    $('.modal-close').click(function(){
        $('#myModal').fadeOut();
        $("body").css('overflow', "auto");
        $(".drop").fadeOut();
    });

  
    $(window).click(function(event){
        if ($(event.target).is('#myModal')) {
            $('#myModal').fadeOut();
            $("body").css('overflow', "auto");
            $(".drop").fadeOut();
        }
    });
//==================================================    
// FIRST MODAL FUNCTION
//==================================================

//==================================================    
// NAVBAR BUTTON ON MOBILE
//================================================== 
    var isNewLogoDisplayed = false;
    $(".menu-btn").click(function(){
        if($(window).width() < 600) {
            $(".navigation").toggleClass("visible").addClass('slide-in-left');
            
            if(isNewLogoDisplayed) {

                $(".menu-btn i").removeClass("fa-times").addClass("fa-bars");
                
                isNewLogoDisplayed = false;
            } else {
                
                $(".menu-btn i").removeClass("fa-bars").addClass("fa-times");
                
                isNewLogoDisplayed = true;
            }
        }
    });
//==================================================    
// NAVBAR BUTTON ON MOBILE
//================================================== 

//==================================================    
// VIDEO MODAL OPEN & CLOSURE
//==================================================  
    $('#openModal2').click(function(){
            var youtubeUrl = $(this).data('youtube-url');
            $('#myModal-video').fadeIn();
            $(".drop-2").fadeIn();
            loadYouTubeVideo(youtubeUrl);
            $("body").css('overflow', "hidden");
            
        });

        // Close modal when close button is clicked
        $('.modal-close').click(function(){
            $('#myModal-video').fadeOut();
            $(".drop-2").fadeOut();
            stopYouTubeVideo();
            $("body").css('overflow', "auto");
            
        });

        // Close modal when clicking outside of it
        $(window).click(function(event){
            if ($(event.target).is('.sixth')) {
                $('#myModal-video').fadeOut();
                $(".drop-2").fadeOut();
                stopYouTubeVideo();
                $("body").css('overflow', "auto");
                
            }
    });
//==================================================    
// VIDEO MODAL OPEN & CLOSURE
//================================================== 

//====================================================
// REVEAL WHEN SCROLL FUNCTION
// ===================================================
        function reveal() {
      var reveals = document.querySelectorAll(".reveal");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }

    window.addEventListener("scroll", reveal);
//====================================================
// REVEAL WHEN SCROLL FUNCTION
// ===================================================

//====================================================
// MOUSE EFFECT
// ===================================================
    $(document).mousemove(function(e) {
      var follower = $('#follower');
      var offsetX = 2; // Adjust this value to control the horizontal distance
      var offsetY = 5; // Adjust this value to control the vertical distance

      var mouseX = e.pageX;
      var mouseY = e.pageY;

      var followerX = follower.offset().left;
      var followerY = follower.offset().top;

      var adjustedX = mouseX + offsetX;
      var adjustedY = mouseY + offsetY;

      var distanceX = adjustedX - followerX;
      var distanceY = adjustedY - followerY;

      follower.css({
        'left': '+=' + distanceX + 'px',
        'top': '+=' + distanceY + 'px'
      });
    });
//====================================================
// MOUSE EFFECT
// ===================================================

//====================================================
// DARK-LIGHT-MODE
// ===================================================
    var MoonSun = false;
    var alternateTxtClasses = [
      ".left-side h1",
      ".left-side .subtitle",
      ".description",
      ".ls-2 h1",
      ".ls-2 .subtitle",
      ".description-2",
      ".navigation ul li",
      ".card-2 ul li",
      ".card-1 p",
      ".section-seventh .title-box h1",
      ".section-seventh .cards-3 p",
      ".ls-8 h1",
      ".section-fourth h1",
      ".ls-8 p",
      ".footer-wrap h1",
      ".footer-wrap h3",
      ".footer-wrap li",
      ".footer-wrap p",
      ".left-side-5 h1",
      ".about-us",
      ".t-b h1",
      ".t-b p",
      ".fz-h2",
      ".lss-8 .subtitle",
      ".form h1",
      ".header a",
      ".section-about-first h2",
      ".fa-bars",
      ".lss-8 .description-8",
      "a"
    ];

    var alternateBgClasses = [
      ".header",
      ".h-bg", 
      ".section-first",
      ".section-second",
      ".section-fourth",
      ".section-fifth",
      ".section-sixth",
      ".section-seventh",
      ".section-eighth",
      "footer",
      ".sticky",
      ".section-about-first",
      ".contact-section",
      ".container-gallery"
    ];
    var alternateCircles = [
        ".c-1",
        ".c-2",
        ".c-3"
    ];
    // var alternateContact = [
    //     ".contact-section"
    // ];
    $(".dark-mode").click(function() {
      $(".dark-mode i").toggleClass("fa-sun fa-moon");
      $(".dark-mode i").toggleClass("moon-btn"); // Toggle white text color
      
      MoonSun = !MoonSun;
      // $(alternateContact.join(', ')).toggleClass("contact-bg");
      $(alternateBgClasses.join(', ')).toggleClass("alternate-bg");
      $(alternateTxtClasses.join(', ')).toggleClass("alternate-txt");
      $(alternateCircles.join(', ')).toggleClass("alternate-bg-circle");
    });
//====================================================
// DARK-LIGHT-MODE
// ===================================================

//====================================================
// PAGINATION
// ===================================================
      var items = $('.itemg');
      var modal = $('#g-modal');
      var modalImages = $('.g-modal-images');
      var modalPagination = $('.g-modal-pagination');

      items.click(function() {
        var currentIndex = items.index($(this));
        var imageURL = $(this).css('background-image').replace(/url\(['"]?(.*?)['"]?\)/, '$1');
        showModal(currentIndex, imageURL);
      });

      $('.close').click(function() {
        modal.hide();
      });

      function showModal(index, imageURL) {
        modalImages.empty();
        modalPagination.empty();
        modalImages.append('<img src="' + imageURL + '">');
        generatePagination(index);
        modal.show();
      }

      function generatePagination(currentIndex) {
        for (var i = 0; i < items.length; i++) {
          var button = $('<button class="page-btn">' + (i + 1) + '</button>');
          if (i === currentIndex) {
            button.addClass('active');
          }
          button.click({index: i}, function(event) {
            var imageURL = items.eq(event.data.index).css('background-image').replace(/url\(['"]?(.*?)['"]?\)/, '$1');
            showModal(event.data.index, imageURL);
          });
          modalPagination.append(button);
        }
      }
//====================================================
// PAGINATION
// ===================================================
});  //========= Document ready closure ==============

//=============================================
// LOAD VIDEO ID & URL
//=============================================
    // function loadYouTubeVideo(youtubeUrl) {
    //         var videoId = getYouTubeVideoId(youtubeUrl);
    //         var youtubeEmbedUrl = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';
    //         var iframe = $('<iframe>', {
    //             id: 'youtubeVideo',
    //             width: '100%',
    //             height: '100%',
    //             frameborder: '0',
    //             allowfullscreen: true,
    //             src: youtubeEmbedUrl
    //         });
    //         $('#videoContainer').append(iframe);
    //     }

    //     function stopYouTubeVideo() {
    //         $('#youtubeVideo').remove();
    //     }

    //     function getYouTubeVideoId(url) {
    //         var regExp = /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    //         var match = url.match(regExp);
    //         if (match && match[1].length === 11) {
    //             return match[1];
    //         } else {
    //             // Handle invalid YouTube URL
    //             console.error('Invalid YouTube URL');
    //             return null;
    //         }
    //     }
//=============================================
// LOAD VIDEO ID & URL
//=============================================
