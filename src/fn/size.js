/**
 * Created by BBN on 10/02/2017.
 */
;(function($, bbn){
  "use strict";

  $.extend(bbn.fn, {

    /**     SIZING     */

    resize: function(){
      var w = window.innerWidth,
          h = window.innerHeight;
      //bbn.fn.log("resize");
      if ( (bbn.env.width !== w) || (bbn.env.height !== h) ){
        bbn.env.width = w;
        bbn.env.height = h;
      }
      $(".bbn-sensor", document.body).not(".bbn-sensor .bbn-sensor").trigger("bbnResize");
      bbn.fn.defaultResizeFunction();
      bbn.fn.resize_popup();
    },

    // http://stackoverflow.com/questions/3900701/onclick-go-full-screen
    toggle_full_screen: function(){
      var wscript;
      if ( window.document.documentElement.mozRequestFullScreen ){
        if ( window.document.mozFullScreen ){
          window.document.mozCancelFullScreen();
        }
        else{
          window.document.documentElement.mozRequestFullScreen();
        }
      }
      else if ( window.document.documentElement.webkitRequestFullScreen ){
        if ( window.document.webkitIsFullScreen ){
          window.document.webkitCancelFullScreen();
        }
        else{
          window.document.documentElement.webkitRequestFullScreen();
        }
      }
      else if ( window.document.msRequestFullScreen ){
        if ( window.document.msFullscreenEnabled ){
          window.document.msExitFullscreen();
        }
        else{
          window.document.documentElement.msRequestFullScreen();
        }
      }
      else if ( window.document.requestFullscreen ){
        if ( window.document.fullscreenEnabled ){
          window.document.exitFullscreen();
        }
        else{
          window.document.documentElement.requestFullscreen();
        }
      }
      else if ( window.ActiveXObject !== undefined ){ // Older IE.
        if ( wscript = new window.ActiveXObject("WScript.Shell") ){
          wscript.SendKeys("{F11}");
        }
      }
      setTimeout(function(){
        bbn.fn.resize();
      }, 0);
    },

    insertContent: function(content, target){
      $(target).empty().append(content);
      //bbn.fn.stat(target, "INSERT");
      bbn.fn.analyzeContent(target, true);
    },

    appendContent: function(content, target){
      $(target).append(content);
      bbn.fn.analyzeContent(target, true);
    },

    cssFullWidth: function(elements){
      // Resizing the .bbn-full-width containers
      return $(elements).each(function(i, cont){
        /** @var jQuery $p */
        var $p = $(cont),
            allFW = $(cont).children(".bbn-full-width:visible");
        if ( allFW.length ){
          var $$ = $p.children(".bbn-full-width:first"),
              w = $p.width(),
              siblings = $$.siblings(),
              siblingsFW = siblings.filter(".bbn-full-width");
          while ( !w && ($p[0] !== document.body) ){
            $p = $p.parent();
            w = $p.width();
          }
          if ( w ){
            var num = allFW.length,
                diff = $$.outerWidth(true) - $$.width();

            // Calculating the space left by the siblings within the container
            // Excepting the ones with absolute positioning

            siblings.each(function(){
              var $t = $(this);
              if ( !$t.hasClass("bbn-full-width") &&
                $t.is(":visible") &&
                ($t.css('position') !== 'absolute') &&
                ($t.css('position') !== 'fixed') &&
                ($t.css('display') !== 'inline')
              ){
                var w2 = $t.outerWidth(true);
                if ( w2 ){
                  w -= w2;
                }
              }
            });
            if ( diff ){
              w -= diff;
            }
            if ( num && (w > 0) ){
              if ( num > 1 ){
                $.each(siblingsFW, function(){
                  var $t = $(this);
                  w -= $t.outerWidth(true) - $t.width();
                });
              }
              if ( siblingsFW.length ){
                siblingsFW.width(w/num);
              }
              $$.width(w/num);
            }
          }
        }
      });
    },

    cssFullHeight: function(elements){
      // Resizing the .bbn-full-height containers
      return $(elements).each(function(i, cont){
        /** @var jQuery $p */
        var $p = $(cont),
            allFH = $p.children(".bbn-full-height:visible");

        if ( allFH.length ){
          /** @todo SHould I stay or should I go? */
          if ( $p.css("overflow") === 'auto' ){
            $p.css("overflow", "hidden");
          }
          var $$ = $p.children(".bbn-full-height:visible:first"),
              h = $p.innerHeight(),
              siblings = $$.siblings(),
              siblingsFH = siblings.filter(".bbn-full-height"),
              num = allFH.not(".bbn-full-width").length;
          if ( $p[0] === document.body ){
            h = window.bbn.env.height;
          }

          // Calculating the space left by the siblings within the container
          // Excepting the ones with absolute positioning

          siblings.each(function(){
            var h2,
                $t = $(this);
            if ( !$t.hasClass("bbn-full-height") &&
              $t.is(":visible") &&
              !$t.hasClass("bbn-full-width") &&
              ($t.css('position') !== 'absolute') &&
              ($t.css('position') !== 'fixed') &&
              ($t.css('display') !== 'inline')
            ){
              h2 = $t.outerHeight(true);
              if ( h2 ){
                h -= h2;
              }
            }
          });
          if ( num && (h > 0) ){
            /*
             if ( num > 1 ){
             $.each(siblingsFH, function(){
             var $t = $(this);
             h -= $t.outerHeight(true) - $t.height();
             });
             }
             */
            var newH = Math.floor(10000*(h/num))/5,
                cur = parseFloat($$.outerHeight());
            if ( Math.abs(cur - newH) > 0.5 ){
              $$.outerHeight(h/num);
              if ( siblingsFH.length ){
                siblingsFH.css({height: $$.css("height")});
              }
            }
          }
        }
      });
    },

    cssForm: function(elements){
      //bbn.fn.log("cssForms: " + elements.length);
      return $(elements).each(function(i, parentContainer){
        var $parentContainer = $(parentContainer),
            isOverflow = true,
            // Final width of the labels
            w = 0,
            w1,
            w2,
            total = 0,
            lbl,
            $lbl,
            $hiddenEle,
            center = false,
            space = false,
            /*
             // Puts/adds elements with class bbn-elem-hidden (so hidden) in the object $hiddenChildren and removes the class to show them
             $hiddenChildren = $parentContainer.children(".bbn-elem-hidden").removeClass("bbn-elem-hidden"),
             */
            // Each element with class bbn-form-label
            $labels = $parentContainer.children(".bbn-form-label");
        $labels.each(function(){
          lbl = this;
          $lbl = $(lbl);
          // Defining bbnIsDone to check if the original width has been picked
          if ( !$lbl.data("bbnIsDone") ){
            $lbl.data("bbnIsDone", 1);
            if ( parseInt(lbl.style.width) > 0 ){
              if ( w < parseInt(lbl.style.width) ){
                w = parseInt(lbl.style.width);
              }
              $lbl.data("bbnOriginalWidth", w);
            }
          }
          // Picking the original width if has been originally defined
          else if ( $lbl.data("bbnOriginalWidth") ){
            if ( $lbl.data("bbnOriginalWidth") > w ){
              w = $lbl.data("bbnOriginalWidth");
            }
          }
        });
        $labels.each(function(){
          lbl = this;
          $lbl = $(this);
          // checking if a parent is hidden and adds it to $hiddenEle, and shows it
          if ( $lbl.parents(":hidden").length > 0 ){
            $($lbl.parents(":hidden").get().reverse()).each(function(){
              if ( !$(this).is(":visible") ){
                $hiddenEle = $hiddenEle ?
                  $hiddenEle.add($(this).show()) : $(this).show();
              }
            });
          }
          // space is the total dimension of the paddings and margins of both label and field elements
          // It is calculated only for the first element
          if ( space === false ){
            // Corresponding field object for this label
            var $fld = $lbl.nextUntil(".bbn-form-label", ".bbn-form-field");
            space = ( $lbl.outerWidth(true) - $lbl.width() ) + ( $fld.outerWidth(true) - $fld.width() );
          }
          // centered elements
          if ( $lbl.hasClass("bbn-c") ){
            center = 1;
          }
          // Removing the width to get the "natural" width
          $lbl[0].style.width = "auto";
          // w2 is the natural width, we assign it a minimal width if none is found
          w2 = $lbl.width() || 20;
          // If the natural width is larger than the current final width, final width takes its value
          if ( w2 > w ){
            w = w2;
          }
        });

        if ( w > 0 ){
          var t1 = new Date().getTime(true);
          if ( $parentContainer.children(".bbn-form-full:visible:first").length ){
            total = $parentContainer.children(".bbn-form-full:visible:first").width() - 1;
          }
          else{
            total = false;
            for ( var $par = $parentContainer; !total; $par = $par.parent() ){
              total = $par.width();
              isOverflow = $par.css("overflow") === "auto";
            }
          }
          var scrollBarWidth = 25;
          if ( isOverflow ){
            total -= scrollBarWidth;
          }

          if ( total > ( scrollBarWidth + space ) ){
            total -= space;
            if ( center ){
              w1 = total/2;
              w = w1;
            }
            else{
              w1 = total - w;
            }
            var t1 = new Date().getTime(true);
            $parentContainer.children(".bbn-form-label").each(function (){
              this.style.width = w + "px";
              if ( center ){
                this.style.textAlign = "right";
              }
              $(this).nextUntil(".bbn-form-label", ".bbn-form-field").width(w1);
            });
            var t2 = new Date().getTime(true);
            //bbn.fn.log("WORKING FORMS: " + (t2 - t1).toString() + " ms.");
          }
          /*
           if ( $hiddenChildren ){
           $hiddenChildren.addClass("bbn-elem-hidden");
           }
           */
        }
        if ( $hiddenEle ){
          $hiddenEle.hide();
          $hiddenEle = false;
        }
      });
    },

    cssBlocks: function(elements){
      //bbn.fn.log("cssForms: " + elements.length);
      return $(elements).each(function(){
        // Each element with class bbn-form-label
        var done = [];
        $(this).children(".bbn-block-right").each(function(){
          var $right = $(this),
              maxHeight = 10;
          $right
          .add(
            $right
            .prevUntil(".bbn-block-right", ".bbn-block-left")
            .filter(function(){
              return $.inArray(this, done) === -1;
            })
          )
          .each(function(i, a){
            done.push(a);
            var $a = $(a),
                originalH = $a.data("bbnOriginalHeight"),
                h;
            // Defining bbnIsDone to check if the original width has been picked
            if ( !$a.data("bbnIsDone") ){
              $a.data("bbnIsDone", 1);
              if ( a.style && parseInt(a.style.height) > 0 ){
                $a.data("bbnOriginalHeight", a.style.height);
              }
            }
            // Picking the original width if has been originally defined
            else if ( originalH ){
              if ( !a.style ){
                a.style = {height: originalH};
              }
              else if ( originalH !== a.style.height ){
                a.style.height = originalH;
              }
            }
            else if ( a.style ){
              a.style.height = null;
            }
            if ( $a.is(":visible") ){
              h = $a.height();
              $a.data("bbnHeight", h);
              if ( h > maxHeight ){
                maxHeight = h;
              }
            }
          })
          .each(function(i, a){
            var $a = $(a);
            if ( Math.abs($a.data("bbnHeight") - maxHeight) > 1 ){
              $a.height(maxHeight);
            }
          })
        });
      });
    },

    cssMason: function(elements){
      return $(elements).each(function(){

        var $ele = $(".bbn-masonry:first", this),
            actualWidth = $ele.innerWidth() || $(this).innerWidth(),
            $widgets = $ele.length ? $(".bbn-widget:visible:not(.bbn-widget_full)", $ele[0]) : [];
        if ( $widgets.length ){
          var num = 1,
              steps = [800, 1150, 1550, 2200, 3000];
          $.each(steps, function(i, step){
            if ( actualWidth >= step ){
              num++;
            }
            else{
              return false;
            }
          });
          if ( !$ele.hasClass("ui-sortable") ){
            $ele.sortable({
              placeholder: "bbn-widget bbn-bg-grey",
              opacity: 0.5,
              forcePlaceholderSize: true,
              handle: "div.k-header h4",
              stopped: function(){
                bbn.fn.log("SHOULD SAVE THE ORDER THERE")
              }
            })
          }
          $ele.css({
            "-moz-column-count": num,
            "-webkit-column-count": num,
            "column-count": num
          });
          //bbn.fn.log("cssMasons: " + $widgets.length);
        }
      })
    },

    analyzeContent: function(elements, force){
      //bbn.fn.stat(elements, "ANALYZE");
      if ( !elements ){
        elements = $(document.body);
      }
      return $(elements).each(function(){
        var ele = this,
            $ele = $(ele),
            nodes = [];
        if ( force ){
          $ele
            .add($ele.find(".bbn-sensor"))
            .filter(".bbn-sensor")
            .each(function(){
              var $$ = $(this);
              $$.off("bbnResize")
                .removeClass("bbn-sensor")
                .removeData("bbnResizeCfg");
            });
        }


        // In case we have data bindings we leave a bit of time before setting initial values
        setTimeout(function(){
          bbn.fn.setInitialValues(ele);
          /*
           $ele.find(".k-grid:not(.bbn-sensor)")
           .addClass("bbn-sensor")
           .data("bbnFullHeight", 1);
           */
        }, 20);

        var idx,
            nodes = [];
        $ele
          .find(".bbn-full-width,.bbn-full-height,.bbn-form-label,.bbn-masonry,.bbn-block-right")
          .each(function(){
            var $$ = $(this),
                cfg = {};
            if ( force ){
              cfg.doResize = true;
            }
            if ( $$.hasClass("bbn-full-width") ){
              cfg.fullWidth = 1;
            }
            if ( $$.hasClass("bbn-full-height") ){
              cfg.fullHeight = 1;
            }
            if ( $$.hasClass("bbn-masonry") ){
              cfg.masonry = 1;
            }
            if ( $$.hasClass("bbn-form-label") ){
              cfg.form = 1;
            }
            if ( $$.hasClass("bbn-block-right") ){
              cfg.blocks = 1;
            }
            if ( (idx = $.inArray(this.parentNode, nodes)) === -1 ){
              $(this.parentNode).data("bbnResizeCfg", cfg);
              nodes.push(this.parentNode);
            }
            else{
              $(this.parentNode).data("bbnResizeCfg", $.extend({}, $(this.parentNode).data("bbnResizeCfg"), cfg));
            }

          });
        $.each(nodes, function(i, o){
          var $o = $(o);
          if ( !$o.hasClass("bbn-sensor") ){
            $o.addClass("bbn-sensor").off("bbnResize").on("bbnResize", function(e){
              //bbn.fn.stat($o, "real_resize");
              bbn.fn.onResize(this, e);
            }).trigger("bbnResize");
          }
        });
      });
    },

    onResize: function(elements, e){
      if ( e ){
        e.stopPropagation();
      }
      return $(elements).each(function(){
        var $o = $(this);
        if ( $o.hasClass("bbn-sensor") ){
          if ( (!e || (e.target === e.currentTarget)) ){
            var cfg = $o.data("bbnResizeCfg") || {};
            if ( !$o.is(":visible") ){
              cfg.doResize = true;
              $o.data("bbnResizeCfg", cfg);
            }
            else{
              var w = Math.round($o.width()),
                  h = Math.round($o.height());
              if ( !cfg || ((!w || !h) && !cfg.doResize) ){
                //bbn.fn.stat($o, "NO RESIZE");
                //throw new Error("The element " + bbn.fn.getPath($o) + " misses dimensions");
              }
              else{
                //bbn.fn.stat($o, "RESIZE");
                if ( cfg.isResizing ){
                  cfg.lastW = w;
                  cfg.lastH = h;
                  $o.data("bbnResizeCfg", cfg);
                }
                else{
                  cfg.isResizing = true;
                  $o.data("bbnResizeCfg", cfg);
                  if (
                    cfg.doResize ||
                    ((h !== cfg.h) && cfg.fullHeight) ||
                    (w !== cfg.w)
                  ){
                    cfg.w = w;
                    cfg.h = h;
                    bbn.fn.redraw($o);
                    if ( cfg.doResize ){
                      delete cfg.doResize;
                    }
                  }
                  cfg.isResizing = false;
                  var cfgNow = $o.data("bbnResizeCfg");
                  $o.data("bbnResizeCfg", cfg);
                  if ( (cfgNow.lastW !== undefined) && (lastW !== w) ){
                    $.trigger("bbnResize");
                  }
                }
              }
            }
          }
        }
      })
    },

    propagateResize: function(element){
      $(element).children().trigger("bbnResize").bbn("propagateResize");
      return $(element);
    },

    redraw: function(elements, deep){
      //bbn.fn.stat(elements, "REDRAW");
      if ( !elements ){
        elements = $(".bbn-sensor:visible", document.body);
      }
      elements = $(elements);
      if ( deep ){
        elements = elements.add(elements.find(".bbn-sensor"));
      }
      elements.filter(":visible").each(function(i, ele){
        var $ele = $(ele),
            cfg = $ele.data("bbnResizeCfg") || {};

        //bbn.fn.log(ele, "REDRAW");
        if ( cfg.fullWidth ){
          bbn.fn.cssFullWidth($ele)
          //bbn.fn.log("FULLWIDTH", $ele);
        }
        if ( cfg.fullHeight ){
          bbn.fn.cssFullHeight($ele)
          //bbn.fn.log("FULLHEIGHT", $ele);
        }
        if ( cfg.masonry ){
          //var t1 = new Date().getTime(true);
          bbn.fn.cssMason($ele);
          //var t2 = new Date().getTime(true);
          //bbn.fn.log("MASONS", $ele);
        }
        if ( cfg.blocks ){
          bbn.fn.cssBlocks($ele);
          //bbn.fn.log("BLOCKS", $ele);
        }
        if ( cfg.form ){
          //var t1 = new Date().getTime(true);
          bbn.fn.cssForm($ele);
          //var t2 = new Date().getTime(true);
          //bbn.fn.log("FORMS", $ele);
        }
      });
    },

  })

})(jQuery, bbn);