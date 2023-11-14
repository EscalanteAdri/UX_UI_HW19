jQuery(document).ready(function() {
  function scrollbtnshow() {
    if (
      $("#nav--tab li.active").prev("li").length > 0 &&
      $("#nav--tab li.active").next("li").length > 0
    ) {
      $(".slide-cntrl").addClass("overall-gradient-float");
      $(".slide-cntrl").removeClass("left-gradient-float");
      $(".slide-cntrl").removeClass("right-gradient-float");
      $(".slide-cntrl-btn.btn-next").css("display", "block");
      $(".slide-cntrl-btn.btn-prev").css("display", "block");
    } else if (
      $("#nav--tab li.active").prev("li").length == 0 &&
      $("#nav--tab li.active").next("li").length > 0
    ) {
      $(".slide-cntrl").removeClass("overall-gradient-float");
      $(".slide-cntrl").removeClass("left-gradient-float");
      $(".slide-cntrl").addClass("right-gradient-float");
      $(".slide-cntrl-btn.btn-prev").css("display", "none");
    } else {
      $(".slide-cntrl").removeClass("overall-gradient-float");
      $(".slide-cntrl").addClass("left-gradient-float");
      $(".slide-cntrl").removeClass("right-gradient-float");
      $(".slide-cntrl-btn.btn-next").css("display", "none");
    }
  }

  function tabcontentselect() {
    var panelId = jQuery(".tab-selection ul li.active").attr("id");

    jQuery(".tabbed-content").hide();
    jQuery(".tabbed-content").removeClass("active-tab");
    jQuery("." + panelId).show(), 500;
    jQuery("." + panelId).addClass("active-tab");
  }

  jQuery(".tab-selection ul li").click(function() {
    jQuery(this)
      .siblings()
      .removeClass("active");
    jQuery(this).addClass("active");

    tabcontentselect();
  });

  jQuery("#notification-tab").click(function() {
    jQuery(this)
      .parent()
      .parent()
      .removeClass("left");
  });

  jQuery("#nav--tab li").on("click", function() {
    jQuery("#nav--tab li").removeClass("active");
    jQuery(this).addClass("active");
    jQuery("#nav--tab").scrollCenter(".active", 300);

    scrollbtnshow();
  });

  /* Tab buttons */

  jQuery("#prev").on("click", function() {
    jQuery(".slide-cntrl-btn.btn-next").css("display", "block");
    jQuery("#nav--tab li.active:first")
      .prev()
      .addClass("active");
    jQuery("#nav--tab li.active")
      .next()
      .removeClass("active");
    jQuery("#nav--tab").scrollCenter(".active", 300);
  });

  jQuery("#next").on("click", function() {
    jQuery(".slide-cntrl-btn.btn-prev").css("display", "block");
    jQuery("#nav--tab li.active:last")
      .next()
      .addClass("active");
    jQuery("#nav--tab li.active")
      .prev()
      .removeClass("active");
    jQuery("#nav--tab").scrollCenter(".active", 300);
  });

  jQuery(".slide-cntrl-btn").on("click", function(e) {
    e.preventDefault();
    scrollbtnshow();
    tabcontentselect();
  });

  /* END Tab buttons */

  if ($(".nav--tab").prop("scrollWidth") > $(".nav--tab").width()) {
    $(".slide-cntrl").css("display", "block");
  } else {
    $(".slide-cntrl").css("display", "none");
  }

  jQuery.fn.scrollCenter = function(elem, speed) {
    var active = jQuery(this).find(elem);
    var activeWidth = active.width() / 2;

    var pos = active.position().left + activeWidth;
    var currentscroll = jQuery(this).scrollLeft();
    var divwidth = jQuery(this).width();
    pos = pos + currentscroll - divwidth / 2;

    jQuery(this).animate(
      {
        scrollLeft: pos
      },
      speed == undefined ? 1000 : speed
    );
    return this;
  };

  jQuery.fn.scrollCenterORI = function(elem, speed) {
    jQuery(this).animate(
      {
        scrollLeft:
          jQuery(this).scrollLeft() -
          jQuery(this).offset().left +
          jQuery(elem).offset().left
      },
      speed == undefined ? 1000 : speed
    );
    return this;
  };
});


// clickme celebrate animation

btnParty.addEventListener("click", () => {
  confetti("tsparticles", {
    angle: 90,
    count: 15,
    position: { x: 50, y: 50 },
    spread: 90,
    startVelocity: 60,
    decay: 0.9,
    gravity: 1,
    drift: 0,
    ticks: 200,
    colors: ["#4CAF50", "#4F7D50"],
    shapes: ["square", "circle"],
    scalar: 1,
    zIndex: 2000,
    disableForReducedMotion: true
  });
});
