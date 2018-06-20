var ArticleSummaryHover=function(){function e(){var e,o;if(Helpers.getViewportWidth()>=l.onlyRunAbove&&0==Helpers.isIE()&&(e=document.querySelectorAll(".article-summary")))for(var r=0;r<e.length;r++)o=e[r],o.addEventListener("mousemove",t),o.addEventListener("mouseenter",n),o.addEventListener("mouseleave",i)}function t(e){var t,n,i,s,l,c;n=e.pageX,i=e.pageY,t=this,s=this.getBoundingClientRect(),l=o(s,n),c=r(s,i),a(t,s,l,c)}function n(e){var t;t=this,t.classList.add(l.mouseOverToggleClass)}function i(e){var t;t=this,t.style.transform="",t.querySelector(".article-summary__featured-image").style.transform="",t.classList.remove(l.mouseOverToggleClass)}function o(e,t){var n,i,o;return n=e.left,i=t-n,o=i/e.width,o=o.toFixed(2),o-=.5,o*=l.transformModX}function r(e,t,n){var i,o,r,a;return i=document.documentElement.scrollTop,o=i+e.top,r=t-o,a=r/e.height,a=a.toFixed(2),a-=.5,a*=l.transformModY,a*=-1}function a(e,t,n,i){var o,r,a;n>-.5*l.transformModX-1&&n<.5*l.transformModX+1&&i>-.5*l.transformModY-1&&i<.5*l.transformModY+1&&(o="perspective("+t.width/2+"px) ",o+="scale("+l.transformScale+") ",o+="rotateY("+n+"deg) ",o+="rotateX("+i+"deg)",e.style.transform=o),(r=e.querySelector(".article-summary__featured-image"))&&(a="scale(1.025) ",a+="translateX("+8*n*-1+"px) ",a+="translateY("+6*i+"px) ",r.style.transform=a)}function s(){e()}var l={onlyRunAbove:992,transformModX:1,transformModY:1.5,transformPerspective:"600px",transformScale:1.01,mouseOverToggleClass:"-is-being-hovered"};return{init:s}}(),ExpandableCodeBlocks=function(){function e(){var e,t,n,i,o,r;if(e="-is-expandable",t=document.querySelectorAll(".highlight"))for(var a=0;a<t.length;a++)n=t[a],i=n.offsetWidth,o=n.querySelector("code"),o&&(r=o.offsetWidth),i&&r&&r>i&&n.classList.add(e)}function t(){e()}return{init:t}}(),HandleForms=function(){function e(){var e=document.querySelectorAll("input, select, textarea"),t=document.querySelectorAll(".form");if(e.length>0&&t.length>0)for(var n=0;n<e.length;n++)e[n].addEventListener("invalid",function(e){this.classList.add("-has-error"),this.parentElement.classList.add("-field-has-error")}),e[n].addEventListener("blur",function(e){this.checkValidity()})}function t(){var e=document.querySelectorAll('input[type="email"]');if(e.length>0)for(var t=0;t<e.length;t++)e[t].addEventListener("input",function(e){this.value.length>0?this.classList.add("-has-text"):this.classList.remove("-has-text")})}function n(){var e,t=document.querySelectorAll("select");if(t.length>0)for(var n=0;n<t.length;n++)t[n].addEventListener("focus",function(t){e=this.parentElement,e.classList.add("-has-focus")}),t[n].addEventListener("blur",function(t){e=this.parentElement,e.classList.remove("-has-focus")})}function i(){var e=document.querySelector(".form__contact");null!==e&&e.length>0&&e.addEventListener("submit",function(e){e.preventDefault();var t=this,n=t.action,i=document.querySelector(".form__field--name"),o=document.querySelector(".form__field--email"),r=document.querySelector(".form__field--message"),a=document.querySelector(".form__field--ponyhot"),s=i.value,l=o.value,c=r.value;if(!a.value){t.classList.add("-is-sending");var u="?form-name=contact";u+="&name="+s,u+="&email="+l,u+="&message="+c;var d=n+u;d=encodeURI(d);var f=new XMLHttpRequest;f.open("POST",d,!0),f.onload=function(){f.status>=200&&f.status<400&&(setTimeout(function(){t.classList.add("-is-sent")},1e3),setTimeout(function(){t.classList.add("-is-done")},2e3),setTimeout(function(){t.classList.add("-is-thankful"),i.value="",o.value="",r.value="",o.classList.remove("-has-text"),t.reset()},3e3))},f.onerror=function(){},f.send()}})}function o(){e(),t(),n(),i()}return{init:o}}(),Helpers=function(){function e(){return Math.max(document.documentElement.clientWidth,window.innerWidth||0)}function t(){var e=!1;return/MSIE 10/i.test(navigator.userAgent)&&(e=10),(/MSIE 9/i.test(navigator.userAgent)||/rv:11.0/i.test(navigator.userAgent))&&(e=11),/Edge\/\d./i.test(navigator.userAgent)&&(e="edge"),e}return{getViewportWidth:e,isIE:t}}(),HandleLinks=function(){function e(){for(var e,t,n=document.links,i=n.length,o=window.location.hostname,r=0;r<i;r++)e=n[r],t=e.href,e.hostname!=o&&"javascript:void(0)"!==t&&"javascript:void(0);"!==t&&(e.target="_blank")}function t(){e()}return{init:t}}(),LqipImages=function(){function e(){var e,t,n,i,o,r;window.onload=function(){e=document.querySelectorAll(".img-shortcode__img-lqip");for(var a=0;a<e.length;a++)t=e[a],n=t.parentElement,i=n.parentElement,i.classList.add("-image-is-loading"),o=i.dataset.full,r=null,r=new Image,r.onload=function(){n=this.parentElement,i=n.parentElement,i.classList.add("-image-has-loaded")},r.src=o,r.classList.add("img-shortcode__img-full"),n.insertBefore(r,t)}}function t(){e()}return{init:t}}(),ToggleMobileMenu=function(){function e(){function e(){for(var e=!1,t=document.querySelector("body"),n=t.classList,i=0;i<n.length;i++)if("site-nav-is-open"==n[i]){e=!0;break}e?t.classList.remove("site-nav-is-open"):t.className+=" site-nav-is-open"}var t=document.querySelector(".site-nav__nav-toggle");t&&t.addEventListener("click",e,!1)}function t(){e()}return{init:t}}(),ObjectFitPolyfill=function(){function e(){t()&&n()}function t(){return"objectFit"in document.documentElement.style==!1}function n(){var e,t,n,i;if(e=document.querySelectorAll(".-is-object-fit-parent"))for(var o=0;o<e.length;o++)t=e[o],i=t.querySelector(".-uses-object-fit"),n=void 0!==i.dataset?i.dataset.source:i.getAttribute("data-source"),i.style.display="none",t.style.backgroundImage="url("+n+")"}function i(){e()}return{init:i}}(),TableOfContents=function(){function e(){var e=document.querySelector(".table-of-contents"),t=document.querySelector(".table-of-contents__toggle");t&&t.addEventListener("click",function(t){e.classList.contains("-is-expanded")?e.classList.remove("-is-expanded"):e.classList.add("-is-expanded")})}function t(){e()}return{init:t}}();!function(){ToggleMobileMenu.init(),HandleLinks.init(),HandleForms.init(),TableOfContents.init(),ArticleSummaryHover.init(),ObjectFitPolyfill.init(),ExpandableCodeBlocks.init(),LqipImages.init()}();