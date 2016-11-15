$(document).ready(function() {



$('.circle').click(function() {
  var clicks = $(this).data('clicks');
  if (clicks) {
     // odd clicks
        $(".circle").css({
          "background-color":"rgb(92, 34, 58)",
          "-webkit-transition": "background-color 2s",
        });
        $("#twitter").css({ //bottom right
         "left":"175px",
         "top":"100px",
         "-webkit-transition": ".5s",
         "-moz-transition":".5s",
         "-o-transition":" .5s",
         "transition": ".5s"
       });
       $("#fb").css({ //upper right
        "left":"175px",
        "top":"-40px",
        "-webkit-transition": ".5s",
        "-moz-transition":".5s",
        "-o-transition":" .5s",
        "transition": ".5s"
      });
      $("#pinterest").css({ //bottom left
       "left":"-100px",
       "top":"100px",
       "-webkit-transition": ".5s",
       "-moz-transition":".5s",
       "-o-transition":" .5s",
       "transition": ".5s"
     });
      $("#google").css({ //upper left
       "left":"-100px",
       "top":"-40px",
       "-webkit-transition": ".5s",
       "-moz-transition":".5s",
       "-o-transition":" .5s",
       "transition": ".5s"
     });
      $("#t").css({ //bottom center
       "left":"35px",
       "top":"-120px",
       "-webkit-transition": ".5s",
       "-moz-transition":".5s",
       "-o-transition":" .5s",
       "transition": ".5s"
     });
     $("#git").css({ //top center
      "left":"35px",
      "top":"185px",
      "-webkit-transition": ".5s",
      "-moz-transition":".5s",
      "-o-transition":" .5s",
      "transition": ".5s"
    });
       $(".bar").css({"background-color":"white", "-webkit-transition":"background-color 2s"});
       $(".top").css({
         "-webkit-transform":" rotateZ(-405deg)",
         "-ms-transform": "rotateZ(-405deg)",
         "transform": "rotateZ(-405deg)",
         "margin-top":"70px",
         "-webkit-transition": ".5s",
         "-moz-transition":".5s",
         "-o-transition":" .5s",
         "transition": ".5s"
       });
       $(".bottom").css({
         "margin-top":"-25px",
         "-webkit-transform":" rotateZ(405deg)",
         "-ms-transform": "rotateZ(405deg)",
         "transform": "rotateZ(405deg)",
         "-webkit-transition": ".5s",
         "-moz-transition":".5s",
         "-o-transition":" .5s",
         "transition": ".5s"
       });
       $("#center").css({
         "visibility":"hidden",
         "width":"0px",
         "height": "0px"
       });
  } else {
     // even clicks
     $(".circle").css({
       "background-color":"rgb(164, 100, 127)",
       "-webkit-transition": "background-color 2s",
       "border-box":"none"
     });
     $("#twitter").css({
      "left":"30px",
      "top":"30px",
      "-webkit-transition": ".4s",
      "-moz-transition":".4s",
      "-o-transition":" .4s",
      "transition": ".4s"
    });
     $("#fb").css({
      "left":"30px",
      "top":"20px",
      "-webkit-transition": ".4s",
      "-moz-transition":".4s",
      "-o-transition":" .4s",
      "transition": ".4s"
    });
    $("#pinterest").css({
     "left":"30px",
     "top":"20px",
     "-webkit-transition": ".4s",
     "-moz-transition":".4s",
     "-o-transition":" .4s",
     "transition": ".4s"
   });
    $("#google").css({
     "left":"30px",
     "top":"10px",
     "-webkit-transition": ".35s",
     "-moz-transition":".35s",
     "-o-transition":" .35s",
     "transition": ".35s"
   });
    $("#t").css({
     "left":"25px",
     "top":"10px",
     "-webkit-transition": ".35s",
     "-moz-transition":".35s",
     "-o-transition":" .35s",
     "transition": ".35s"
   });
   $("#git").css({ //top center
    "left":"25px",
    "top":"10px",
    "-webkit-transition": ".4s",
    "-moz-transition":".4s",
    "-o-transition":" .4s",
    "transition": ".4s"
  });
         $(".bar").css({"background-color":"black", "-webkit-transition":"background-color 2s"});
         $(".bar").css({
           "-webkit-transform":" rotateZ(0deg)",
           "-ms-transform": "rotateZ(0deg)",
           "transform": "rotateZ(0deg)",
           "transition-duration":"4s"
         });
         $(".top").css({
           "margin-top":"42.5px",
           "-webkit-transition": ".5s",
           "-moz-transition":".5s",
           "-o-transition":" .5s",
           "transition": ".5s"
         });
         $(".bottom").css({
           "margin-top":"10px",
           "-webkit-transition": ".5s",
           "-moz-transition":".5s",
           "-o-transition":" .5s",
           "transition": ".5s"
         });
         $("#center").css({
           "visibility":"visible",
           "width":"75px",
           "height": "15px",
           "-webkit-transition": ".5s",
           "-moz-transition":".5s",
           "-o-transition":" .5s",
           "transition": ".5s"
         });
  }
  $(this).data("clicks", !clicks);
});

});
