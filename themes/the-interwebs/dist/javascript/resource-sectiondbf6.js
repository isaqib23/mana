"use strict";!function(t){t(function(){var a=location.href.split("?")[0],n=t(".resource-listing-container");n.infinitescroll({navSelector:"span.scroll-next",nextSelector:"span.scroll-next",itemSelector:".resource-list-item",loading:{finishedMsg:"",img:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",msgText:"Loading..."},path:function(e){var n,t=a.replace(/\/+$/,""),o=t.match(/page=(\d+)/),e=20*(e-1);return o&&0<o[1]?(n=parseInt(o[1]),t=t.replace(o[0],"page="+(n+e))):t+="/page="+e,t+"/"}}),0<t(".unlock-resources").length&&(t(".ready-to-talk").addClass("hidden-until-unlocked"),n.infinitescroll("pause")),t(document).on("click",".unlock-resources",function(e){return e.preventDefault(),!t(e.target).hasClass("disabled")&&(t(e.target).addClass("disabled").animate({opacity:0}),t(".hidden-until-unlocked").fadeIn(),n.infinitescroll("resume"),t(".hide-once-unlocked").slideUp(),void t("html, body").animate({scrollTop:t(".customers-container").offset().top},500))}),t(document).on("change","form.resource-section-form select",function(e){window.location=t(e.target).val(),e.preventDefault()})})}(jQuery);