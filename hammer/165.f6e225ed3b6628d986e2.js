(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{lgyN:function(t,n,e){"use strict";e.r(n),e.d(n,"IonRippleEffect",function(){return a});var i=e("B5Ai"),a=function(){function t(){this.type="bounded"}return t.prototype.addRipple=function(t,n){return i.a(this,void 0,void 0,function(){var e=this;return i.c(this,function(i){return[2,new Promise(function(i){e.queue.read(function(){var a=e.el.getBoundingClientRect(),s=a.width,c=a.height,u=Math.sqrt(s*s+c*c),f=Math.max(c,s),l=e.unbounded?f:u+o,m=Math.floor(f*r),d=l/m,p=t-a.left,b=n-a.top;e.unbounded&&(p=.5*s,b=.5*c);var w=p-.5*m,y=b-.5*m,g=.5*s-p,h=.5*c-b;e.queue.write(function(){var t=e.win.document.createElement("div");t.classList.add("ripple-effect");var n=t.style;n.top=y+"px",n.left=w+"px",n.width=n.height=m+"px",n.setProperty("--final-scale",""+d),n.setProperty("--translate-end",g+"px, "+h+"px"),(e.el.shadowRoot||e.el).appendChild(t),setTimeout(function(){i(function(){!function(t){t.classList.add("fade-out"),setTimeout(function(){t.remove()},200)}(t)})},325)})})})]})})},Object.defineProperty(t.prototype,"unbounded",{get:function(){return"unbounded"===this.type},enumerable:!0,configurable:!0}),t.prototype.hostData=function(){return{role:"presentation",class:{unbounded:this.unbounded}}},Object.defineProperty(t,"is",{get:function(){return"ion-ripple-effect"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{addRipple:{method:!0},el:{elementRef:!0},queue:{context:"queue"},type:{type:String,attr:"type"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;will-change:transform,opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1));-webkit-animation:fadeOutAnimation .15s forwards;animation:fadeOutAnimation .15s forwards}@-webkit-keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}@keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}@-webkit-keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}@keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}@-webkit-keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}@keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}"},enumerable:!0,configurable:!0}),t}(),o=10,r=.5}}]);