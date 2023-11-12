/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return b},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return a+1;case"MM":return b.s(a+1,2,"0");case"MMM":return h(n.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return b.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(s,u,!0);case"A":return $(s,u,!1);case"m":return String(u);case"mm":return b.s(u,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O}));

/***/ }),

/***/ "./node_modules/dayjs/plugin/calendar.js":
/*!***********************************************!*\
  !*** ./node_modules/dayjs/plugin/calendar.js ***!
  \***********************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){"use strict";return function(e,t,a){var n="h:mm A",d={lastDay:"[Yesterday at] "+n,sameDay:"[Today at] "+n,nextDay:"[Tomorrow at] "+n,nextWeek:"dddd [at] "+n,lastWeek:"[Last] dddd [at] "+n,sameElse:"MM/DD/YYYY"};t.prototype.calendar=function(e,t){var n=t||this.$locale().calendar||d,o=a(e||void 0).startOf("d"),s=this.diff(o,"d",!0),i="sameElse",f=s<-6?i:s<-1?"lastWeek":s<0?"lastDay":s<1?"sameDay":s<2?"nextDay":s<7?"nextWeek":i,l=n[f]||d[f];return"function"==typeof l?l.call(this,a()):this.format(l)}}}));

/***/ }),

/***/ "./node_modules/dayjs/plugin/dayOfYear.js":
/*!************************************************!*\
  !*** ./node_modules/dayjs/plugin/dayOfYear.js ***!
  \************************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){"use strict";return function(e,t,n){t.prototype.dayOfYear=function(e){var t=Math.round((n(this).startOf("day")-n(this).startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"day")}}}));

/***/ }),

/***/ "./node_modules/dayjs/plugin/duration.js":
/*!***********************************************!*\
  !*** ./node_modules/dayjs/plugin/duration.js ***!
  \***********************************************/
/***/ (function(module) {

!function(t,s){ true?module.exports=s():0}(this,(function(){"use strict";var t,s,n=1e3,i=6e4,e=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,u=31536e6,d=2628e6,a=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,h={years:u,months:d,days:r,hours:e,minutes:i,seconds:n,milliseconds:1,weeks:6048e5},c=function(t){return t instanceof g},f=function(t,s,n){return new g(t,n,s.$l)},m=function(t){return s.p(t)+"s"},l=function(t){return t<0},$=function(t){return l(t)?Math.ceil(t):Math.floor(t)},y=function(t){return Math.abs(t)},v=function(t,s){return t?l(t)?{negative:!0,format:""+y(t)+s}:{negative:!1,format:""+t+s}:{negative:!1,format:""}},g=function(){function l(t,s,n){var i=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),s)return f(t*h[m(s)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(s){i.$d[m(s)]=t[s]})),this.calMilliseconds(),this;if("string"==typeof t){var e=t.match(a);if(e){var r=e.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var y=l.prototype;return y.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(s,n){return s+(t.$d[n]||0)*h[n]}),0)},y.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=$(t/u),t%=u,this.$d.months=$(t/d),t%=d,this.$d.days=$(t/r),t%=r,this.$d.hours=$(t/e),t%=e,this.$d.minutes=$(t/i),t%=i,this.$d.seconds=$(t/n),t%=n,this.$d.milliseconds=t},y.toISOString=function(){var t=v(this.$d.years,"Y"),s=v(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=v(n,"D"),e=v(this.$d.hours,"H"),r=v(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3,o=Math.round(1e3*o)/1e3);var u=v(o,"S"),d=t.negative||s.negative||i.negative||e.negative||r.negative||u.negative,a=e.format||r.format||u.format?"T":"",h=(d?"-":"")+"P"+t.format+s.format+i.format+a+e.format+r.format+u.format;return"P"===h||"-P"===h?"P0D":h},y.toJSON=function(){return this.toISOString()},y.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:s.s(this.$d.years,2,"0"),YYYY:s.s(this.$d.years,4,"0"),M:this.$d.months,MM:s.s(this.$d.months,2,"0"),D:this.$d.days,DD:s.s(this.$d.days,2,"0"),H:this.$d.hours,HH:s.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:s.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:s.s(this.$d.seconds,2,"0"),SSS:s.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(t,s){return s||String(i[t])}))},y.as=function(t){return this.$ms/h[m(t)]},y.get=function(t){var s=this.$ms,n=m(t);return"milliseconds"===n?s%=1e3:s="weeks"===n?$(s/h[n]):this.$d[n],s||0},y.add=function(t,s,n){var i;return i=s?t*h[m(s)]:c(t)?t.$ms:f(t,this).$ms,f(this.$ms+i*(n?-1:1),this)},y.subtract=function(t,s){return this.add(t,s,!0)},y.locale=function(t){var s=this.clone();return s.$l=t,s},y.clone=function(){return f(this.$ms,this)},y.humanize=function(s){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!s)},y.valueOf=function(){return this.asMilliseconds()},y.milliseconds=function(){return this.get("milliseconds")},y.asMilliseconds=function(){return this.as("milliseconds")},y.seconds=function(){return this.get("seconds")},y.asSeconds=function(){return this.as("seconds")},y.minutes=function(){return this.get("minutes")},y.asMinutes=function(){return this.as("minutes")},y.hours=function(){return this.get("hours")},y.asHours=function(){return this.as("hours")},y.days=function(){return this.get("days")},y.asDays=function(){return this.as("days")},y.weeks=function(){return this.get("weeks")},y.asWeeks=function(){return this.as("weeks")},y.months=function(){return this.get("months")},y.asMonths=function(){return this.as("months")},y.years=function(){return this.get("years")},y.asYears=function(){return this.as("years")},l}(),p=function(t,s,n){return t.add(s.years()*n,"y").add(s.months()*n,"M").add(s.days()*n,"d").add(s.hours()*n,"h").add(s.minutes()*n,"m").add(s.seconds()*n,"s").add(s.milliseconds()*n,"ms")};return function(n,i,e){t=e,s=e().$utils(),e.duration=function(t,s){var n=e.locale();return f(t,{$l:n},s)},e.isDuration=c;var r=i.prototype.add,o=i.prototype.subtract;i.prototype.add=function(t,s){return c(t)?p(this,t,1):r.bind(this)(t,s)},i.prototype.subtract=function(t,s){return c(t)?p(this,t,-1):o.bind(this)(t,s)}}}));

/***/ }),

/***/ "./node_modules/dayjs/plugin/isBetween.js":
/*!************************************************!*\
  !*** ./node_modules/dayjs/plugin/isBetween.js ***!
  \************************************************/
/***/ (function(module) {

!function(e,i){ true?module.exports=i():0}(this,(function(){"use strict";return function(e,i,t){i.prototype.isBetween=function(e,i,s,f){var n=t(e),o=t(i),r="("===(f=f||"()")[0],u=")"===f[1];return(r?this.isAfter(n,s):!this.isBefore(n,s))&&(u?this.isBefore(o,s):!this.isAfter(o,s))||(r?this.isBefore(n,s):!this.isAfter(n,s))&&(u?this.isAfter(o,s):!this.isBefore(o,s))}}}));

/***/ }),

/***/ "./node_modules/dayjs/plugin/isLeapYear.js":
/*!*************************************************!*\
  !*** ./node_modules/dayjs/plugin/isLeapYear.js ***!
  \*************************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){"use strict";return function(e,t){t.prototype.isLeapYear=function(){return this.$y%4==0&&this.$y%100!=0||this.$y%400==0}}}));

/***/ }),

/***/ "./node_modules/dayjs/plugin/isoWeek.js":
/*!**********************************************!*\
  !*** ./node_modules/dayjs/plugin/isoWeek.js ***!
  \**********************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){"use strict";var e="day";return function(t,i,s){var a=function(t){return t.add(4-t.isoWeekday(),e)},d=i.prototype;d.isoWeekYear=function(){return a(this).year()},d.isoWeek=function(t){if(!this.$utils().u(t))return this.add(7*(t-this.isoWeek()),e);var i,d,n,o,r=a(this),u=(i=this.isoWeekYear(),d=this.$u,n=(d?s.utc:s)().year(i).startOf("year"),o=4-n.isoWeekday(),n.isoWeekday()>4&&(o+=7),n.add(o,e));return r.diff(u,"week")+1},d.isoWeekday=function(e){return this.$utils().u(e)?this.day()||7:this.day(this.day()%7?e:e-7)};var n=d.startOf;d.startOf=function(e,t){var i=this.$utils(),s=!!i.u(t)||t;return"isoweek"===i.p(e)?s?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):n.bind(this)(e,t)}}}));

/***/ }),

/***/ "./node_modules/dayjs/plugin/localeData.js":
/*!*************************************************!*\
  !*** ./node_modules/dayjs/plugin/localeData.js ***!
  \*************************************************/
/***/ (function(module) {

!function(n,e){ true?module.exports=e():0}(this,(function(){"use strict";return function(n,e,t){var r=e.prototype,o=function(n){return n&&(n.indexOf?n:n.s)},u=function(n,e,t,r,u){var i=n.name?n:n.$locale(),a=o(i[e]),s=o(i[t]),f=a||s.map((function(n){return n.slice(0,r)}));if(!u)return f;var d=i.weekStart;return f.map((function(n,e){return f[(e+(d||0))%7]}))},i=function(){return t.Ls[t.locale()]},a=function(n,e){return n.formats[e]||function(n){return n.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(n,e,t){return e||t.slice(1)}))}(n.formats[e.toUpperCase()])},s=function(){var n=this;return{months:function(e){return e?e.format("MMMM"):u(n,"months")},monthsShort:function(e){return e?e.format("MMM"):u(n,"monthsShort","months",3)},firstDayOfWeek:function(){return n.$locale().weekStart||0},weekdays:function(e){return e?e.format("dddd"):u(n,"weekdays")},weekdaysMin:function(e){return e?e.format("dd"):u(n,"weekdaysMin","weekdays",2)},weekdaysShort:function(e){return e?e.format("ddd"):u(n,"weekdaysShort","weekdays",3)},longDateFormat:function(e){return a(n.$locale(),e)},meridiem:this.$locale().meridiem,ordinal:this.$locale().ordinal}};r.localeData=function(){return s.bind(this)()},t.localeData=function(){var n=i();return{firstDayOfWeek:function(){return n.weekStart||0},weekdays:function(){return t.weekdays()},weekdaysShort:function(){return t.weekdaysShort()},weekdaysMin:function(){return t.weekdaysMin()},months:function(){return t.months()},monthsShort:function(){return t.monthsShort()},longDateFormat:function(e){return a(n,e)},meridiem:n.meridiem,ordinal:n.ordinal}},t.months=function(){return u(i(),"months")},t.monthsShort=function(){return u(i(),"monthsShort","months",3)},t.weekdays=function(n){return u(i(),"weekdays",null,null,n)},t.weekdaysShort=function(n){return u(i(),"weekdaysShort","weekdays",3,n)},t.weekdaysMin=function(n){return u(i(),"weekdaysMin","weekdays",2,n)}}}));

/***/ }),

/***/ "./node_modules/dayjs/plugin/localizedFormat.js":
/*!******************************************************!*\
  !*** ./node_modules/dayjs/plugin/localizedFormat.js ***!
  \******************************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){"use strict";var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(t,o,n){var r=o.prototype,i=r.format;n.en.formats=e,r.format=function(t){void 0===t&&(t="YYYY-MM-DDTHH:mm:ssZ");var o=this.$locale().formats,n=function(t,o){return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||o[r]||e[r]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,o){return t||o.slice(1)}))}))}(t,void 0===o?{}:o);return i.call(this,n)}}}));

/***/ }),

/***/ "./node_modules/dayjs/plugin/minMax.js":
/*!*********************************************!*\
  !*** ./node_modules/dayjs/plugin/minMax.js ***!
  \*********************************************/
/***/ (function(module) {

!function(e,n){ true?module.exports=n():0}(this,(function(){"use strict";return function(e,n,t){var i=function(e,n){if(!n||!n.length||1===n.length&&!n[0]||1===n.length&&Array.isArray(n[0])&&!n[0].length)return null;var t;1===n.length&&n[0].length>0&&(n=n[0]);t=(n=n.filter((function(e){return e})))[0];for(var i=1;i<n.length;i+=1)n[i].isValid()&&!n[i][e](t)||(t=n[i]);return t};t.max=function(){var e=[].slice.call(arguments,0);return i("isAfter",e)},t.min=function(){var e=[].slice.call(arguments,0);return i("isBefore",e)}}}));

/***/ }),

/***/ "./node_modules/dayjs/plugin/quarterOfYear.js":
/*!****************************************************!*\
  !*** ./node_modules/dayjs/plugin/quarterOfYear.js ***!
  \****************************************************/
/***/ (function(module) {

!function(t,n){ true?module.exports=n():0}(this,(function(){"use strict";var t="month",n="quarter";return function(e,i){var r=i.prototype;r.quarter=function(t){return this.$utils().u(t)?Math.ceil((this.month()+1)/3):this.month(this.month()%3+3*(t-1))};var s=r.add;r.add=function(e,i){return e=Number(e),this.$utils().p(i)===n?this.add(3*e,t):s.bind(this)(e,i)};var u=r.startOf;r.startOf=function(e,i){var r=this.$utils(),s=!!r.u(i)||i;if(r.p(e)===n){var o=this.quarter()-1;return s?this.month(3*o).startOf(t).startOf("day"):this.month(3*o+2).endOf(t).endOf("day")}return u.bind(this)(e,i)}}}));

/***/ }),

/***/ "./node_modules/dayjs/plugin/relativeTime.js":
/*!***************************************************!*\
  !*** ./node_modules/dayjs/plugin/relativeTime.js ***!
  \***************************************************/
/***/ (function(module) {

!function(r,e){ true?module.exports=e():0}(this,(function(){"use strict";return function(r,e,t){r=r||{};var n=e.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function i(r,e,t,o){return n.fromToBase(r,e,t,o)}t.en.relativeTime=o,n.fromToBase=function(e,n,i,d,u){for(var f,a,s,l=i.$locale().relativeTime||o,h=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],m=h.length,c=0;c<m;c+=1){var y=h[c];y.d&&(f=d?t(e).diff(i,y.d,!0):i.diff(e,y.d,!0));var p=(r.rounding||Math.round)(Math.abs(f));if(s=f>0,p<=y.r||!y.r){p<=1&&c>0&&(y=h[c-1]);var v=l[y.l];u&&(p=u(""+p)),a="string"==typeof v?v.replace("%d",p):v(p,n,y.l,s);break}}if(n)return a;var M=s?l.future:l.past;return"function"==typeof M?M(a):M.replace("%s",a)},n.to=function(r,e){return i(r,e,this,!0)},n.from=function(r,e){return i(r,e,this)};var d=function(r){return r.$u?t.utc():t()};n.toNow=function(r){return this.to(d(this),r)},n.fromNow=function(r){return this.from(d(this),r)}}}));

/***/ }),

/***/ "./node_modules/dayjs/plugin/timezone.js":
/*!***********************************************!*\
  !*** ./node_modules/dayjs/plugin/timezone.js ***!
  \***********************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t={year:0,month:1,day:2,hour:3,minute:4,second:5},e={};return function(n,i,o){var r,a=function(t,n,i){void 0===i&&(i={});var o=new Date(t),r=function(t,n){void 0===n&&(n={});var i=n.timeZoneName||"short",o=t+"|"+i,r=e[o];return r||(r=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:i}),e[o]=r),r}(n,i);return r.formatToParts(o)},u=function(e,n){for(var i=a(e,n),r=[],u=0;u<i.length;u+=1){var f=i[u],s=f.type,m=f.value,c=t[s];c>=0&&(r[c]=parseInt(m,10))}var d=r[3],l=24===d?0:d,h=r[0]+"-"+r[1]+"-"+r[2]+" "+l+":"+r[4]+":"+r[5]+":000",v=+e;return(o.utc(h).valueOf()-(v-=v%1e3))/6e4},f=i.prototype;f.tz=function(t,e){void 0===t&&(t=r);var n=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:t}),u=Math.round((i-new Date(a))/1e3/60),f=o(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-u,!0);if(e){var s=f.utcOffset();f=f.add(n-s,"minute")}return f.$x.$timezone=t,f},f.offsetName=function(t){var e=this.$x.$timezone||o.tz.guess(),n=a(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return n&&n.value};var s=f.startOf;f.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return s.call(this,t,e);var n=o(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,t,e).tz(this.$x.$timezone,!0)},o.tz=function(t,e,n){var i=n&&e,a=n||e||r,f=u(+o(),a);if("string"!=typeof t)return o(t).tz(a);var s=function(t,e,n){var i=t-60*e*1e3,o=u(i,n);if(e===o)return[i,e];var r=u(i-=60*(o-e)*1e3,n);return o===r?[i,o]:[t-60*Math.min(o,r)*1e3,Math.max(o,r)]}(o.utc(t,i).valueOf(),f,a),m=s[0],c=s[1],d=o(m).utcOffset(c);return d.$x.$timezone=a,d},o.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},o.tz.setDefault=function(t){r=t}}}));

/***/ }),

/***/ "./node_modules/dayjs/plugin/updateLocale.js":
/*!***************************************************!*\
  !*** ./node_modules/dayjs/plugin/updateLocale.js ***!
  \***************************************************/
/***/ (function(module) {

!function(e,n){ true?module.exports=n():0}(this,(function(){"use strict";return function(e,n,t){t.updateLocale=function(e,n){var o=t.Ls[e];if(o)return(n?Object.keys(n):[]).forEach((function(e){o[e]=n[e]})),o}}}));

/***/ }),

/***/ "./node_modules/dayjs/plugin/utc.js":
/*!******************************************!*\
  !*** ./node_modules/dayjs/plugin/utc.js ***!
  \******************************************/
/***/ (function(module) {

!function(t,i){ true?module.exports=i():0}(this,(function(){"use strict";var t="minute",i=/[+-]\d\d(?::?\d\d)?/g,e=/([+-]|\d\d)/g;return function(s,f,n){var u=f.prototype;n.utc=function(t){var i={date:t,utc:!0,args:arguments};return new f(i)},u.utc=function(i){var e=n(this.toDate(),{locale:this.$L,utc:!0});return i?e.add(this.utcOffset(),t):e},u.local=function(){return n(this.toDate(),{locale:this.$L,utc:!1})};var o=u.parse;u.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),o.call(this,t)};var r=u.init;u.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else r.call(this)};var a=u.utcOffset;u.utcOffset=function(s,f){var n=this.$utils().u;if(n(s))return this.$u?0:n(this.$offset)?a.call(this):this.$offset;if("string"==typeof s&&(s=function(t){void 0===t&&(t="");var s=t.match(i);if(!s)return null;var f=(""+s[0]).match(e)||["-",0,0],n=f[0],u=60*+f[1]+ +f[2];return 0===u?0:"+"===n?u:-u}(s),null===s))return this;var u=Math.abs(s)<=16?60*s:s,o=this;if(f)return o.$offset=u,o.$u=0===s,o;if(0!==s){var r=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(o=this.local().add(u+r,t)).$offset=u,o.$x.$localOffset=r}else o=this.utc();return o};var h=u.format;u.format=function(t){var i=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return h.call(this,i)},u.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},u.isUTC=function(){return!!this.$u},u.toISOString=function(){return this.toDate().toISOString()},u.toString=function(){return this.toDate().toUTCString()};var l=u.toDate;u.toDate=function(t){return"s"===t&&this.$offset?n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():l.call(this)};var c=u.diff;u.diff=function(t,i,e){if(t&&this.$u===t.$u)return c.call(this,t,i,e);var s=this.local(),f=n(t).local();return c.call(s,f,i,e)}}}));

/***/ }),

/***/ "./node_modules/dayjs/plugin/weekOfYear.js":
/*!*************************************************!*\
  !*** ./node_modules/dayjs/plugin/weekOfYear.js ***!
  \*************************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){"use strict";var e="week",t="year";return function(i,n,r){var f=n.prototype;f.week=function(i){if(void 0===i&&(i=null),null!==i)return this.add(7*(i-this.week()),"day");var n=this.$locale().yearStart||1;if(11===this.month()&&this.date()>25){var f=r(this).startOf(t).add(1,t).date(n),s=r(this).endOf(e);if(f.isBefore(s))return 1}var a=r(this).startOf(t).date(n).startOf(e).subtract(1,"millisecond"),o=this.diff(a,e,!0);return o<0?r(this).startOf("week").week():Math.ceil(o)},f.weeks=function(e){return void 0===e&&(e=null),this.week(e)}}}));

/***/ }),

/***/ "./dist/$.js":
/*!*******************!*\
  !*** ./dist/$.js ***!
  \*******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ $)
/* harmony export */ });
var $ = function (selector, context) {
    if (context === null || context === void 0 ? void 0 : context.querySelectorAll) {
        return context.querySelectorAll(selector);
    }
    return document.body.querySelectorAll(selector);
};



/***/ }),

/***/ "./dist/_.js":
/*!*******************!*\
  !*** ./dist/_.js ***!
  \*******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ _)
/* harmony export */ });
/* harmony import */ var _fn_type_checkType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fn/type/checkType.js */ "./dist/fn/type/checkType.js");

/**
 * Translate an expression using the object bbn.lng
 *
 * @param {String} st
 * @returns {String}
 */
var _ = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var st = args.shift();
    var res = bbn.lng[st] || st;
    if (args.length) {
        var i_1 = 0;
        return res.replace(/\%([d|s])/g, function (match, type) {
            var tmp = args[i_1++];
            if (!tmp) {
                tmp = type === 'd' ? 0 : '';
            }
            (0,_fn_type_checkType_js__WEBPACK_IMPORTED_MODULE_0__.checkType)(tmp, type === 'd' ? 'number' : 'string', bbn._("The value you gave did not correspond, check the loggg"));
            return tmp;
        });
    }
    return res;
};



/***/ }),

/***/ "./dist/db.js":
/*!********************!*\
  !*** ./dist/db.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   db: () => (/* binding */ db)
/* harmony export */ });
/* harmony import */ var _js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_.js */ "./dist/_.js");
/* harmony import */ var _fn_loop_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fn/loop/each.js */ "./dist/fn/loop/each.js");
/* harmony import */ var _fn_loop_iterate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fn/loop/iterate.js */ "./dist/fn/loop/iterate.js");
/* harmony import */ var _fn_browser_log_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fn/browser/log.js */ "./dist/fn/browser/log.js");




var idb = window['indexedDB'] || window['webkitIndexedDB'] || window['mozIndexedDB'] || window['OIndexedDB'] || window['msIndexedDB'];
var dbObject = function (dbName) {
    var _this = this;
    var conn = db._connections[dbName];
    var structure = db._structures[dbName];
    this.insert = function (table, data) {
        if (!Array.isArray(data)) {
            data = [data];
        }
        return new Promise(function (resolve) {
            var tx = conn.transaction(table, "readwrite");
            var store = tx.objectStore(table);
            var res = data.length;
            (0,_fn_loop_each_js__WEBPACK_IMPORTED_MODULE_1__.each)(data, function (a) {
                var request = store.put(a);
                request.onerror = function () {
                    (0,_fn_browser_log_js__WEBPACK_IMPORTED_MODULE_3__.log)(request.error);
                    res--;
                };
            });
            tx.onabort = function () {
                throw new Error(tx.error);
            };
            tx.oncomplete = function () {
                resolve(res);
            };
        });
    };
    this.update = function (table, data, where) {
        return new Promise(function (resolve) {
            var tx = conn.transaction(table, "readwrite");
            var store = tx.objectStore(table);
            var arch = structure[table];
            var primary = arch.keys.PRIMARY.columns.length > 1 ? arch.keys.PRIMARY.columns : arch.keys.PRIMARY.columns[0];
            if (!where[primary]) {
                throw new Error((0,_js__WEBPACK_IMPORTED_MODULE_0__._)("No "));
            }
            var res = 1;
            var request = store.put(data, where[primary]);
            request.onerror = function () {
                (0,_fn_browser_log_js__WEBPACK_IMPORTED_MODULE_3__.log)(request.error);
                res--;
            };
            tx.onabort = function () {
                throw new Error(tx.error);
            };
            tx.oncomplete = function () {
                resolve(res);
            };
        });
    };
    this.delete = function (table, where) {
        return new Promise(function (resolve) {
            var tx = conn.transaction(table, "readwrite");
            var store = tx.objectStore(table);
            var arch = structure[table];
            var primary = arch.keys.PRIMARY.columns.length > 1 ? arch.keys.PRIMARY.columns : arch.keys.PRIMARY.columns[0];
            if (!where[primary]) {
                throw new Error((0,_js__WEBPACK_IMPORTED_MODULE_0__._)("No "));
            }
            var res = 1;
            var request = store.delete(where[primary]);
            request.onerror = function () {
                (0,_fn_browser_log_js__WEBPACK_IMPORTED_MODULE_3__.log)(request.error);
                res--;
            };
            tx.onabort = function () {
                throw new Error(tx.error);
            };
            tx.oncomplete = function () {
                resolve(res);
            };
        });
    };
    this.selectOne = function (table, field, where, order, start, limit) {
        return new Promise(function (resolve) {
            _this.select(table, [field], where, order, start, limit).then(function (d) {
                var _a;
                resolve((_a = d[field]) !== null && _a !== void 0 ? _a : undefined);
            });
        });
    };
    this.select = function (table, fields, where, order, start, limit) {
        var tx = conn.transaction(table, "readonly");
        var store = tx.objectStore(table);
        var arch = structure[table];
        var primary = arch.keys.PRIMARY.columns.length > 1 ? arch.keys.PRIMARY.columns : arch.keys.PRIMARY.columns[0];
        if (!where[primary]) {
            throw new Error((0,_js__WEBPACK_IMPORTED_MODULE_0__._)("No "));
        }
        return new Promise(function (resolve) {
            var req = store.get(where[primary]);
            req.onsuccess = function () {
                var obj = req.result;
                if (fields.length) {
                    var res_1 = {};
                    (0,_fn_loop_iterate_js__WEBPACK_IMPORTED_MODULE_2__.iterate)(obj, function (v, n) {
                        if (fields.indexOf(n) > -1) {
                            res_1[n] = v;
                        }
                    });
                    return resolve(res_1);
                }
                else {
                    resolve(obj);
                }
            };
        });
    };
    this.selectAll = function (table, fields, where, order, start, limit) {
        var tx = conn.transaction(table, "read");
        var store = tx.objectStore(table);
        var arch = structure[table];
        var primary = arch.keys.PRIMARY.columns.length > 1 ? arch.keys.PRIMARY.columns : arch.keys.PRIMARY.columns[0];
        if (!where[primary]) {
            throw new Error((0,_js__WEBPACK_IMPORTED_MODULE_0__._)("No "));
        }
        return new Promise(function (resolve) {
            var req = store.get(structure.keys.PRIMARY);
        });
    };
    this.getColumnValues = function (table, field, where, order, start, limit) {
        return new Promise(function (resolve) {
            var tx = conn.transaction(table, "read");
            var store = tx.objectStore(table);
        });
    };
};
var db = {
    _structures: {},
    /* This variable should be set to true in debugging mode only */
    _connections: {},
    /* Address of the CDN (where this file should be hosted) */
    _stores: {},
    ok: idb !== undefined,
    open: function (name) {
        return new Promise(function (resolve) {
            if (!db._connections[name]) {
                if (!db._structures[name]) {
                    throw new Error((0,_js__WEBPACK_IMPORTED_MODULE_0__._)("Impossible to find a structure for the database %s", name));
                }
                var conn_1 = idb.open(name);
                conn_1.onupgradeneeded = function () {
                    (0,_fn_browser_log_js__WEBPACK_IMPORTED_MODULE_3__.log)("UPGRADE NEEDED");
                    var res = conn_1.result;
                    (0,_fn_loop_iterate_js__WEBPACK_IMPORTED_MODULE_2__.iterate)(db._structures[name], function (structure, storeName) {
                        var primary = structure.keys.PRIMARY.columns.length > 1 ? structure.keys.PRIMARY.columns : structure.keys.PRIMARY.columns[0];
                        var store = res.createObjectStore(storeName, { keyPath: primary });
                        (0,_fn_loop_iterate_js__WEBPACK_IMPORTED_MODULE_2__.iterate)(structure.keys, function (a, n) {
                            if (n !== 'PRIMARY') {
                                store.createIndex(n, a.columns.length > 1 ? a.columns : a.columns[0], {
                                    unique: !!a.unique
                                });
                            }
                        });
                    });
                };
                conn_1.onsuccess = function () {
                    db._connections[name] = conn_1.result;
                    var obj = new dbObject(name);
                    resolve(obj);
                };
                return;
            }
            resolve(new dbObject(db._connections[name]));
        });
    },
    add: function (database, name, structure) {
        var _a;
        if (((_a = structure === null || structure === void 0 ? void 0 : structure.keys) === null || _a === void 0 ? void 0 : _a.PRIMARY) && (structure === null || structure === void 0 ? void 0 : structure.fields)) {
            if (!db._structures[database]) {
                db._structures[database] = {};
            }
            db._structures[database][name] = structure;
        }
        else {
            throw new Error((0,_js__WEBPACK_IMPORTED_MODULE_0__._)("The database structure for %s is not valid (are there keys and field? Is there a primary?", name));
        }
    }
};



/***/ }),

/***/ "./dist/env.js":
/*!*********************!*\
  !*** ./dist/env.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   env: () => (/* binding */ env)
/* harmony export */ });
var env = {
    siteTitle: window.document.title,
    /* This variable should be set to true in debugging mode only */
    logging: false,
    /* Address of the CDN (where this file should be hosted) */
    cdn: '',
    /* Default language */
    lang: 'en',
    host: window.location.protocol + '//' + window.location.hostname,
    url: window.location.href,
    old_path: null,
    /* True when non asynchronous Ajax loads */
    loading: false,
    /* Window width */
    width: 0,
    /* Window height */
    height: 0,
    /* Element currently focused (Element object) */
    focused: false,
    /* Last time user has been active */
    last_focus: (new Date()).getTime(),
    /* Sleep mode (tab or window unfocused */
    sleep: false,
    theme: 'dark',
    /**
     *  @var bbn.env.loaders Object where the props are MD5 of data and url while the values are the requests,
     *  for preventing the same call to be made at the same time
     **/
    loaders: [],
    loadersHistory: [],
    maxLoadersHistory: 20,
    /* bbn.env.params is an array of each element of the path */
    resizeTimer: false,
    hashChanged: 0,
    params: [],
    isInit: false,
    isFocused: false,
    timeoff: Math.round((new Date()).getTime() / 1000),
    loggingLevel: 5,
    ignoreUnload: false,
    historyDisabled: false,
    nav: 'ajax'
};



/***/ }),

/***/ "./dist/fn.js":
/*!********************!*\
  !*** ./dist/fn.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fn: () => (/* binding */ fn)
/* harmony export */ });
/* harmony import */ var _fn_ajax_addLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fn/ajax/_addLoader.js */ "./dist/fn/ajax/_addLoader.js");
/* harmony import */ var _fn_object_compareValues_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fn/object/_compareValues.js */ "./dist/fn/object/_compareValues.js");
/* harmony import */ var _fn_ajax_deleteLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fn/ajax/_deleteLoader.js */ "./dist/fn/ajax/_deleteLoader.js");
/* harmony import */ var _fn_ajax_abort_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fn/ajax/abort.js */ "./dist/fn/ajax/abort.js");
/* harmony import */ var _fn_ajax_abortURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fn/ajax/abortURL.js */ "./dist/fn/ajax/abortURL.js");
/* harmony import */ var _fn_style_addColors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fn/style/addColors.js */ "./dist/fn/style/addColors.js");
/* harmony import */ var _fn_form_addInputs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fn/form/addInputs.js */ "./dist/fn/form/addInputs.js");
/* harmony import */ var _fn_style_addStyle_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fn/style/addStyle.js */ "./dist/fn/style/addStyle.js");
/* harmony import */ var _fn_html_adjustHeight_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fn/html/adjustHeight.js */ "./dist/fn/html/adjustHeight.js");
/* harmony import */ var _fn_html_adjustSize_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fn/html/adjustSize.js */ "./dist/fn/html/adjustSize.js");
/* harmony import */ var _fn_html_adjustWidth_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fn/html/adjustWidth.js */ "./dist/fn/html/adjustWidth.js");
/* harmony import */ var _fn_ajax_ajax_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fn/ajax/ajax.js */ "./dist/fn/ajax/ajax.js");
/* harmony import */ var _fn_misc_analyzeFunction_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fn/misc/analyzeFunction.js */ "./dist/fn/misc/analyzeFunction.js");
/* harmony import */ var _fn_style_animateCss_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fn/style/animateCss.js */ "./dist/fn/style/animateCss.js");
/* harmony import */ var _fn_convert_arrayBuffer2String_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fn/convert/arrayBuffer2String.js */ "./dist/fn/convert/arrayBuffer2String.js");
/* harmony import */ var _fn_object_arrayFromProp_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fn/object/arrayFromProp.js */ "./dist/fn/object/arrayFromProp.js");
/* harmony import */ var _fn_object_autoExtend_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./fn/object/autoExtend.js */ "./dist/fn/object/autoExtend.js");
/* harmony import */ var _fn_string_baseName_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fn/string/baseName.js */ "./dist/fn/string/baseName.js");
/* harmony import */ var _fn_string_br2nl_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./fn/string/br2nl.js */ "./dist/fn/string/br2nl.js");
/* harmony import */ var _fn_datetime_calendar_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./fn/datetime/calendar.js */ "./dist/fn/datetime/calendar.js");
/* harmony import */ var _fn_ajax_callback_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./fn/ajax/callback.js */ "./dist/fn/ajax/callback.js");
/* harmony import */ var _fn_string_camelize_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./fn/string/camelize.js */ "./dist/fn/string/camelize.js");
/* harmony import */ var _fn_string_camelToCss_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./fn/string/camelToCss.js */ "./dist/fn/string/camelToCss.js");
/* harmony import */ var _fn_convert_canvasToImage_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./fn/convert/canvasToImage.js */ "./dist/fn/convert/canvasToImage.js");
/* harmony import */ var _fn_style_center_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./fn/style/center.js */ "./dist/fn/style/center.js");
/* harmony import */ var _fn_object_checkProps_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./fn/object/checkProps.js */ "./dist/fn/object/checkProps.js");
/* harmony import */ var _fn_object_checkPropsDetails_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./fn/object/checkPropsDetails.js */ "./dist/fn/object/checkPropsDetails.js");
/* harmony import */ var _fn_object_checkPropsOrDie_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./fn/object/checkPropsOrDie.js */ "./dist/fn/object/checkPropsOrDie.js");
/* harmony import */ var _fn_type_checkType_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./fn/type/checkType.js */ "./dist/fn/type/checkType.js");
/* harmony import */ var _fn_object_circularReplacer_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./fn/object/circularReplacer.js */ "./dist/fn/object/circularReplacer.js");
/* harmony import */ var _fn_object_clone_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./fn/object/clone.js */ "./dist/fn/object/clone.js");
/* harmony import */ var _fn_convert_colorToHex_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./fn/convert/colorToHex.js */ "./dist/fn/convert/colorToHex.js");
/* harmony import */ var _fn_object_compare_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./fn/object/compare.js */ "./dist/fn/object/compare.js");
/* harmony import */ var _fn_object_compareConditions_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./fn/object/compareConditions.js */ "./dist/fn/object/compareConditions.js");
/* harmony import */ var _fn_browser_copy_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./fn/browser/copy.js */ "./dist/fn/browser/copy.js");
/* harmony import */ var _fn_string_correctCase_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./fn/string/correctCase.js */ "./dist/fn/string/correctCase.js");
/* harmony import */ var _fn_object_count_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./fn/object/count.js */ "./dist/fn/object/count.js");
/* harmony import */ var _fn_string_crc32_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./fn/string/crc32.js */ "./dist/fn/string/crc32.js");
/* harmony import */ var _fn_object_createObject_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./fn/object/createObject.js */ "./dist/fn/object/createObject.js");
/* harmony import */ var _fn_style_cssExists_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./fn/style/cssExists.js */ "./dist/fn/style/cssExists.js");
/* harmony import */ var _fn_datetime_date_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./fn/datetime/date.js */ "./dist/fn/datetime/date.js");
/* harmony import */ var _fn_datetime_dateSQL_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./fn/datetime/dateSQL.js */ "./dist/fn/datetime/dateSQL.js");
/* harmony import */ var _fn_datetime_daysInMonth_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./fn/datetime/daysInMonth.js */ "./dist/fn/datetime/daysInMonth.js");
/* harmony import */ var _fn_object_deepPath_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./fn/object/deepPath.js */ "./dist/fn/object/deepPath.js");
/* harmony import */ var _fn_default_defaultAjaxAbortFunction_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./fn/default/defaultAjaxAbortFunction.js */ "./dist/fn/default/defaultAjaxAbortFunction.js");
/* harmony import */ var _fn_default_defaultAjaxErrorFunction_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./fn/default/defaultAjaxErrorFunction.js */ "./dist/fn/default/defaultAjaxErrorFunction.js");
/* harmony import */ var _fn_default_defaultAlertFunction_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./fn/default/defaultAlertFunction.js */ "./dist/fn/default/defaultAlertFunction.js");
/* harmony import */ var _fn_default_defaultConfirmFunction_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./fn/default/defaultConfirmFunction.js */ "./dist/fn/default/defaultConfirmFunction.js");
/* harmony import */ var _fn_default_defaultEndLoadingFunction_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./fn/default/defaultEndLoadingFunction.js */ "./dist/fn/default/defaultEndLoadingFunction.js");
/* harmony import */ var _fn_default_defaultErrorFunction_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./fn/default/defaultErrorFunction.js */ "./dist/fn/default/defaultErrorFunction.js");
/* harmony import */ var _fn_default_defaultHistoryFunction_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./fn/default/defaultHistoryFunction.js */ "./dist/fn/default/defaultHistoryFunction.js");
/* harmony import */ var _fn_default_defaultLinkFunction_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./fn/default/defaultLinkFunction.js */ "./dist/fn/default/defaultLinkFunction.js");
/* harmony import */ var _fn_default_defaultPostLinkFunction_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./fn/default/defaultPostLinkFunction.js */ "./dist/fn/default/defaultPostLinkFunction.js");
/* harmony import */ var _fn_default_defaultPreLinkFunction_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./fn/default/defaultPreLinkFunction.js */ "./dist/fn/default/defaultPreLinkFunction.js");
/* harmony import */ var _fn_default_defaultResizeFunction_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./fn/default/defaultResizeFunction.js */ "./dist/fn/default/defaultResizeFunction.js");
/* harmony import */ var _fn_default_defaultStartLoadingFunction_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./fn/default/defaultStartLoadingFunction.js */ "./dist/fn/default/defaultStartLoadingFunction.js");
/* harmony import */ var _fn_object_deleteProp_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./fn/object/deleteProp.js */ "./dist/fn/object/deleteProp.js");
/* harmony import */ var _fn_object_diffObj_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./fn/object/diffObj.js */ "./dist/fn/object/diffObj.js");
/* harmony import */ var _fn_string_dirName_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./fn/string/dirName.js */ "./dist/fn/string/dirName.js");
/* harmony import */ var _fn_ajax_download_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./fn/ajax/download.js */ "./dist/fn/ajax/download.js");
/* harmony import */ var _fn_ajax_downloadContent_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./fn/ajax/downloadContent.js */ "./dist/fn/ajax/downloadContent.js");
/* harmony import */ var _fn_loop_each_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./fn/loop/each.js */ "./dist/fn/loop/each.js");
/* harmony import */ var _fn_browser_eraseCookie_js__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./fn/browser/eraseCookie.js */ "./dist/fn/browser/eraseCookie.js");
/* harmony import */ var _fn_browser_error_js__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./fn/browser/error.js */ "./dist/fn/browser/error.js");
/* harmony import */ var _fn_string_escapeDquotes_js__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./fn/string/escapeDquotes.js */ "./dist/fn/string/escapeDquotes.js");
/* harmony import */ var _fn_string_escapeRegExp_js__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./fn/string/escapeRegExp.js */ "./dist/fn/string/escapeRegExp.js");
/* harmony import */ var _fn_string_escapeSquotes_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./fn/string/escapeSquotes.js */ "./dist/fn/string/escapeSquotes.js");
/* harmony import */ var _fn_string_escapeTicks_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./fn/string/escapeTicks.js */ "./dist/fn/string/escapeTicks.js");
/* harmony import */ var _fn_string_escapeUrl_js__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./fn/string/escapeUrl.js */ "./dist/fn/string/escapeUrl.js");
/* harmony import */ var _fn_object_extend_js__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./fn/object/extend.js */ "./dist/fn/object/extend.js");
/* harmony import */ var _fn_object_extendOut_js__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./fn/object/extendOut.js */ "./dist/fn/object/extendOut.js");
/* harmony import */ var _fn_datetime_fdate_js__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./fn/datetime/fdate.js */ "./dist/fn/datetime/fdate.js");
/* harmony import */ var _fn_datetime_fdatetime_js__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./fn/datetime/fdatetime.js */ "./dist/fn/datetime/fdatetime.js");
/* harmony import */ var _fn_form_fieldValue_js__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./fn/form/fieldValue.js */ "./dist/fn/form/fieldValue.js");
/* harmony import */ var _fn_string_fileExt_js__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./fn/string/fileExt.js */ "./dist/fn/string/fileExt.js");
/* harmony import */ var _fn_object_filter_js__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./fn/object/filter.js */ "./dist/fn/object/filter.js");
/* harmony import */ var _fn_object_filterToConditions_js__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./fn/object/filterToConditions.js */ "./dist/fn/object/filterToConditions.js");
/* harmony import */ var _fn_object_findAll_js__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./fn/object/findAll.js */ "./dist/fn/object/findAll.js");
/* harmony import */ var _fn_loop_fori_js__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./fn/loop/fori.js */ "./dist/fn/loop/fori.js");
/* harmony import */ var _fn_loop_forir_js__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./fn/loop/forir.js */ "./dist/fn/loop/forir.js");
/* harmony import */ var _fn_string_format_js__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./fn/string/format.js */ "./dist/fn/string/format.js");
/* harmony import */ var _fn_string_formatBytes_js__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./fn/string/formatBytes.js */ "./dist/fn/string/formatBytes.js");
/* harmony import */ var _fn_datetime_formatDate_js__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./fn/datetime/formatDate.js */ "./dist/fn/datetime/formatDate.js");
/* harmony import */ var _fn_string_formatSize_js__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./fn/string/formatSize.js */ "./dist/fn/string/formatSize.js");
/* harmony import */ var _fn_form_formdata_js__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./fn/form/formdata.js */ "./dist/fn/form/formdata.js");
/* harmony import */ var _fn_convert_fromXml_js__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./fn/convert/fromXml.js */ "./dist/fn/convert/fromXml.js");
/* harmony import */ var _fn_datetime_ftime_js__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./fn/datetime/ftime.js */ "./dist/fn/datetime/ftime.js");
/* harmony import */ var _fn_html_getAllTags_js__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./fn/html/getAllTags.js */ "./dist/fn/html/getAllTags.js");
/* harmony import */ var _fn_html_getAncestors_js__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./fn/html/getAncestors.js */ "./dist/fn/html/getAncestors.js");
/* harmony import */ var _fn_html_getAttributes_js__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./fn/html/getAttributes.js */ "./dist/fn/html/getAttributes.js");
/* harmony import */ var _fn_browser_getBrowserName_js__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./fn/browser/getBrowserName.js */ "./dist/fn/browser/getBrowserName.js");
/* harmony import */ var _fn_browser_getBrowserVersion_js__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./fn/browser/getBrowserVersion.js */ "./dist/fn/browser/getBrowserVersion.js");
/* harmony import */ var _fn_browser_getCookie_js__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./fn/browser/getCookie.js */ "./dist/fn/browser/getCookie.js");
/* harmony import */ var _fn_style_getCssVar_js__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./fn/style/getCssVar.js */ "./dist/fn/style/getCssVar.js");
/* harmony import */ var _fn_datetime_getDay_js__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./fn/datetime/getDay.js */ "./dist/fn/datetime/getDay.js");
/* harmony import */ var _fn_browser_getDeviceType_js__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./fn/browser/getDeviceType.js */ "./dist/fn/browser/getDeviceType.js");
/* harmony import */ var _fn_browser_getEventData_js__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./fn/browser/getEventData.js */ "./dist/fn/browser/getEventData.js");
/* harmony import */ var _fn_object_getField_js__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./fn/object/getField.js */ "./dist/fn/object/getField.js");
/* harmony import */ var _fn_object_getFieldValues_js__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./fn/object/getFieldValues.js */ "./dist/fn/object/getFieldValues.js");
/* harmony import */ var _fn_html_getHtml_js__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./fn/html/getHtml.js */ "./dist/fn/html/getHtml.js");
/* harmony import */ var _fn_html_getHTMLOfSelection_js__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./fn/html/getHTMLOfSelection.js */ "./dist/fn/html/getHTMLOfSelection.js");
/* harmony import */ var _fn_ajax_getLoader_js__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./fn/ajax/getLoader.js */ "./dist/fn/ajax/getLoader.js");
/* harmony import */ var _fn_html_getPath_js__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./fn/html/getPath.js */ "./dist/fn/html/getPath.js");
/* harmony import */ var _fn_object_getProp_js__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./fn/object/getProp.js */ "./dist/fn/object/getProp.js");
/* harmony import */ var _fn_object_getProperty_js__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ./fn/object/getProperty.js */ "./dist/fn/object/getProperty.js");
/* harmony import */ var _fn_ajax_getRequestId_js__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./fn/ajax/getRequestId.js */ "./dist/fn/ajax/getRequestId.js");
/* harmony import */ var _fn_object_getRow_js__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ./fn/object/getRow.js */ "./dist/fn/object/getRow.js");
/* harmony import */ var _fn_style_getScrollBarSize_js__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ./fn/style/getScrollBarSize.js */ "./dist/fn/style/getScrollBarSize.js");
/* harmony import */ var _fn_html_getText_js__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ./fn/html/getText.js */ "./dist/fn/html/getText.js");
/* harmony import */ var _fn_misc_getTimeoff_js__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ./fn/misc/getTimeoff.js */ "./dist/fn/misc/getTimeoff.js");
/* harmony import */ var _fn_browser_happy_js__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ./fn/browser/happy.js */ "./dist/fn/browser/happy.js");
/* harmony import */ var _fn_string_hash_js__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ./fn/string/hash.js */ "./dist/fn/string/hash.js");
/* harmony import */ var _fn_convert_hex2rgb_js__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! ./fn/convert/hex2rgb.js */ "./dist/fn/convert/hex2rgb.js");
/* harmony import */ var _fn_browser_history_js__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! ./fn/browser/history.js */ "./dist/fn/browser/history.js");
/* harmony import */ var _fn_html_html2text_js__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! ./fn/html/html2text.js */ "./dist/fn/html/html2text.js");
/* harmony import */ var _fn_convert_imageToCanvas_js__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! ./fn/convert/imageToCanvas.js */ "./dist/fn/convert/imageToCanvas.js");
/* harmony import */ var _fn_convert_imgToBase64_js__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! ./fn/convert/imgToBase64.js */ "./dist/fn/convert/imgToBase64.js");
/* harmony import */ var _fn_browser_info_js__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! ./fn/browser/info.js */ "./dist/fn/browser/info.js");
/* harmony import */ var _fn_init_js__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! ./fn/init.js */ "./dist/fn/init.js");
/* harmony import */ var _fn_browser_isActiveInterface_js__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! ./fn/browser/isActiveInterface.js */ "./dist/fn/browser/isActiveInterface.js");
/* harmony import */ var _fn_type_isArray_js__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! ./fn/type/isArray.js */ "./dist/fn/type/isArray.js");
/* harmony import */ var _fn_type_isBlob_js__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! ./fn/type/isBlob.js */ "./dist/fn/type/isBlob.js");
/* harmony import */ var _fn_type_isBoolean_js__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! ./fn/type/isBoolean.js */ "./dist/fn/type/isBoolean.js");
/* harmony import */ var _fn_type_isCanvas_js__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! ./fn/type/isCanvas.js */ "./dist/fn/type/isCanvas.js");
/* harmony import */ var _fn_type_isColor_js__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! ./fn/type/isColor.js */ "./dist/fn/type/isColor.js");
/* harmony import */ var _fn_type_isComment_js__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! ./fn/type/isComment.js */ "./dist/fn/type/isComment.js");
/* harmony import */ var _fn_type_isCp_js__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(/*! ./fn/type/isCp.js */ "./dist/fn/type/isCp.js");
/* harmony import */ var _fn_type_isDate_js__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(/*! ./fn/type/isDate.js */ "./dist/fn/type/isDate.js");
/* harmony import */ var _fn_browser_isDesktopDevice_js__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(/*! ./fn/browser/isDesktopDevice.js */ "./dist/fn/browser/isDesktopDevice.js");
/* harmony import */ var _fn_type_isDimension_js__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(/*! ./fn/type/isDimension.js */ "./dist/fn/type/isDimension.js");
/* harmony import */ var _fn_type_isDom_js__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(/*! ./fn/type/isDom.js */ "./dist/fn/type/isDom.js");
/* harmony import */ var _fn_type_isEmail_js__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(/*! ./fn/type/isEmail.js */ "./dist/fn/type/isEmail.js");
/* harmony import */ var _fn_type_isEmpty_js__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(/*! ./fn/type/isEmpty.js */ "./dist/fn/type/isEmpty.js");
/* harmony import */ var _fn_type_isEvent_js__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(/*! ./fn/type/isEvent.js */ "./dist/fn/type/isEvent.js");
/* harmony import */ var _fn_browser_isFocused_js__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(/*! ./fn/browser/isFocused.js */ "./dist/fn/browser/isFocused.js");
/* harmony import */ var _fn_type_isFunction_js__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(/*! ./fn/type/isFunction.js */ "./dist/fn/type/isFunction.js");
/* harmony import */ var _fn_type_isHostname_js__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(/*! ./fn/type/isHostname.js */ "./dist/fn/type/isHostname.js");
/* harmony import */ var _fn_html_isInside_js__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(/*! ./fn/html/isInside.js */ "./dist/fn/html/isInside.js");
/* harmony import */ var _fn_type_isInt_js__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(/*! ./fn/type/isInt.js */ "./dist/fn/type/isInt.js");
/* harmony import */ var _fn_html_isInViewport_js__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(/*! ./fn/html/isInViewport.js */ "./dist/fn/html/isInViewport.js");
/* harmony import */ var _fn_type_isIP_js__WEBPACK_IMPORTED_MODULE_140__ = __webpack_require__(/*! ./fn/type/isIP.js */ "./dist/fn/type/isIP.js");
/* harmony import */ var _fn_type_isIterable_js__WEBPACK_IMPORTED_MODULE_141__ = __webpack_require__(/*! ./fn/type/isIterable.js */ "./dist/fn/type/isIterable.js");
/* harmony import */ var _fn_browser_isMobile_js__WEBPACK_IMPORTED_MODULE_142__ = __webpack_require__(/*! ./fn/browser/isMobile.js */ "./dist/fn/browser/isMobile.js");
/* harmony import */ var _fn_browser_isMobileDevice_js__WEBPACK_IMPORTED_MODULE_143__ = __webpack_require__(/*! ./fn/browser/isMobileDevice.js */ "./dist/fn/browser/isMobileDevice.js");
/* harmony import */ var _fn_type_isNull_js__WEBPACK_IMPORTED_MODULE_144__ = __webpack_require__(/*! ./fn/type/isNull.js */ "./dist/fn/type/isNull.js");
/* harmony import */ var _fn_type_isNumber_js__WEBPACK_IMPORTED_MODULE_145__ = __webpack_require__(/*! ./fn/type/isNumber.js */ "./dist/fn/type/isNumber.js");
/* harmony import */ var _fn_type_isObject_js__WEBPACK_IMPORTED_MODULE_146__ = __webpack_require__(/*! ./fn/type/isObject.js */ "./dist/fn/type/isObject.js");
/* harmony import */ var _fn_type_isPercent_js__WEBPACK_IMPORTED_MODULE_147__ = __webpack_require__(/*! ./fn/type/isPercent.js */ "./dist/fn/type/isPercent.js");
/* harmony import */ var _fn_type_isPrimitive_js__WEBPACK_IMPORTED_MODULE_148__ = __webpack_require__(/*! ./fn/type/isPrimitive.js */ "./dist/fn/type/isPrimitive.js");
/* harmony import */ var _fn_type_isPromise_js__WEBPACK_IMPORTED_MODULE_149__ = __webpack_require__(/*! ./fn/type/isPromise.js */ "./dist/fn/type/isPromise.js");
/* harmony import */ var _fn_type_isPropSize_js__WEBPACK_IMPORTED_MODULE_150__ = __webpack_require__(/*! ./fn/type/isPropSize.js */ "./dist/fn/type/isPropSize.js");
/* harmony import */ var _fn_type_isSame_js__WEBPACK_IMPORTED_MODULE_151__ = __webpack_require__(/*! ./fn/type/isSame.js */ "./dist/fn/type/isSame.js");
/* harmony import */ var _fn_type_isSQLDate_js__WEBPACK_IMPORTED_MODULE_152__ = __webpack_require__(/*! ./fn/type/isSQLDate.js */ "./dist/fn/type/isSQLDate.js");
/* harmony import */ var _fn_type_isString_js__WEBPACK_IMPORTED_MODULE_153__ = __webpack_require__(/*! ./fn/type/isString.js */ "./dist/fn/type/isString.js");
/* harmony import */ var _fn_type_isSymbol_js__WEBPACK_IMPORTED_MODULE_154__ = __webpack_require__(/*! ./fn/type/isSymbol.js */ "./dist/fn/type/isSymbol.js");
/* harmony import */ var _fn_browser_isTabletDevice_js__WEBPACK_IMPORTED_MODULE_155__ = __webpack_require__(/*! ./fn/browser/isTabletDevice.js */ "./dist/fn/browser/isTabletDevice.js");
/* harmony import */ var _fn_type_isURL_js__WEBPACK_IMPORTED_MODULE_156__ = __webpack_require__(/*! ./fn/type/isURL.js */ "./dist/fn/type/isURL.js");
/* harmony import */ var _fn_type_isValidDimension_js__WEBPACK_IMPORTED_MODULE_157__ = __webpack_require__(/*! ./fn/type/isValidDimension.js */ "./dist/fn/type/isValidDimension.js");
/* harmony import */ var _fn_type_isValidName_js__WEBPACK_IMPORTED_MODULE_158__ = __webpack_require__(/*! ./fn/type/isValidName.js */ "./dist/fn/type/isValidName.js");
/* harmony import */ var _fn_type_isValue_js__WEBPACK_IMPORTED_MODULE_159__ = __webpack_require__(/*! ./fn/type/isValue.js */ "./dist/fn/type/isValue.js");
/* harmony import */ var _fn_type_isVue_js__WEBPACK_IMPORTED_MODULE_160__ = __webpack_require__(/*! ./fn/type/isVue.js */ "./dist/fn/type/isVue.js");
/* harmony import */ var _fn_loop_iterate_js__WEBPACK_IMPORTED_MODULE_161__ = __webpack_require__(/*! ./fn/loop/iterate.js */ "./dist/fn/loop/iterate.js");
/* harmony import */ var _fn_style_lightenDarkenHex_js__WEBPACK_IMPORTED_MODULE_162__ = __webpack_require__(/*! ./fn/style/lightenDarkenHex.js */ "./dist/fn/style/lightenDarkenHex.js");
/* harmony import */ var _fn_ajax_link_js__WEBPACK_IMPORTED_MODULE_163__ = __webpack_require__(/*! ./fn/ajax/link.js */ "./dist/fn/ajax/link.js");
/* harmony import */ var _fn_browser_log_js__WEBPACK_IMPORTED_MODULE_164__ = __webpack_require__(/*! ./fn/browser/log.js */ "./dist/fn/browser/log.js");
/* harmony import */ var _fn_html_makeReactive_js__WEBPACK_IMPORTED_MODULE_165__ = __webpack_require__(/*! ./fn/html/makeReactive.js */ "./dist/fn/html/makeReactive.js");
/* harmony import */ var _fn_object_map_js__WEBPACK_IMPORTED_MODULE_166__ = __webpack_require__(/*! ./fn/object/map.js */ "./dist/fn/object/map.js");
/* harmony import */ var _fn_string_md5_js__WEBPACK_IMPORTED_MODULE_167__ = __webpack_require__(/*! ./fn/string/md5.js */ "./dist/fn/string/md5.js");
/* harmony import */ var _fn_misc_money_js__WEBPACK_IMPORTED_MODULE_168__ = __webpack_require__(/*! ./fn/misc/money.js */ "./dist/fn/misc/money.js");
/* harmony import */ var _fn_object_move_js__WEBPACK_IMPORTED_MODULE_169__ = __webpack_require__(/*! ./fn/object/move.js */ "./dist/fn/object/move.js");
/* harmony import */ var _fn_object_multiorder_js__WEBPACK_IMPORTED_MODULE_170__ = __webpack_require__(/*! ./fn/object/multiorder.js */ "./dist/fn/object/multiorder.js");
/* harmony import */ var _fn_object_mutateArray_js__WEBPACK_IMPORTED_MODULE_171__ = __webpack_require__(/*! ./fn/object/mutateArray.js */ "./dist/fn/object/mutateArray.js");
/* harmony import */ var _fn_string_nl2br_js__WEBPACK_IMPORTED_MODULE_172__ = __webpack_require__(/*! ./fn/string/nl2br.js */ "./dist/fn/string/nl2br.js");
/* harmony import */ var _fn_object_numProperties_js__WEBPACK_IMPORTED_MODULE_173__ = __webpack_require__(/*! ./fn/object/numProperties.js */ "./dist/fn/object/numProperties.js");
/* harmony import */ var _fn_form_objectToFormData_js__WEBPACK_IMPORTED_MODULE_174__ = __webpack_require__(/*! ./fn/form/objectToFormData.js */ "./dist/fn/form/objectToFormData.js");
/* harmony import */ var _fn_object_order_js__WEBPACK_IMPORTED_MODULE_175__ = __webpack_require__(/*! ./fn/object/order.js */ "./dist/fn/object/order.js");
/* harmony import */ var _fn_style_outerHeight_js__WEBPACK_IMPORTED_MODULE_176__ = __webpack_require__(/*! ./fn/style/outerHeight.js */ "./dist/fn/style/outerHeight.js");
/* harmony import */ var _fn_style_outerWidth_js__WEBPACK_IMPORTED_MODULE_177__ = __webpack_require__(/*! ./fn/style/outerWidth.js */ "./dist/fn/style/outerWidth.js");
/* harmony import */ var _fn_misc_percent_js__WEBPACK_IMPORTED_MODULE_178__ = __webpack_require__(/*! ./fn/misc/percent.js */ "./dist/fn/misc/percent.js");
/* harmony import */ var _fn_object_pickValue_js__WEBPACK_IMPORTED_MODULE_179__ = __webpack_require__(/*! ./fn/object/pickValue.js */ "./dist/fn/object/pickValue.js");
/* harmony import */ var _fn_ajax_post_js__WEBPACK_IMPORTED_MODULE_180__ = __webpack_require__(/*! ./fn/ajax/post.js */ "./dist/fn/ajax/post.js");
/* harmony import */ var _fn_ajax_postOut_js__WEBPACK_IMPORTED_MODULE_181__ = __webpack_require__(/*! ./fn/ajax/postOut.js */ "./dist/fn/ajax/postOut.js");
/* harmony import */ var _fn_string_printf_js__WEBPACK_IMPORTED_MODULE_182__ = __webpack_require__(/*! ./fn/string/printf.js */ "./dist/fn/string/printf.js");
/* harmony import */ var _fn_string_quotes2html_js__WEBPACK_IMPORTED_MODULE_183__ = __webpack_require__(/*! ./fn/string/quotes2html.js */ "./dist/fn/string/quotes2html.js");
/* harmony import */ var _fn_misc_randomInt_js__WEBPACK_IMPORTED_MODULE_184__ = __webpack_require__(/*! ./fn/misc/randomInt.js */ "./dist/fn/misc/randomInt.js");
/* harmony import */ var _fn_string_randomString_js__WEBPACK_IMPORTED_MODULE_185__ = __webpack_require__(/*! ./fn/string/randomString.js */ "./dist/fn/string/randomString.js");
/* harmony import */ var _fn_string_removeAccents_js__WEBPACK_IMPORTED_MODULE_186__ = __webpack_require__(/*! ./fn/string/removeAccents.js */ "./dist/fn/string/removeAccents.js");
/* harmony import */ var _fn_object_removeEmpty_js__WEBPACK_IMPORTED_MODULE_187__ = __webpack_require__(/*! ./fn/object/removeEmpty.js */ "./dist/fn/object/removeEmpty.js");
/* harmony import */ var _fn_string_removeExtraSpaces_js__WEBPACK_IMPORTED_MODULE_188__ = __webpack_require__(/*! ./fn/string/removeExtraSpaces.js */ "./dist/fn/string/removeExtraSpaces.js");
/* harmony import */ var _fn_string_removeHtmlComments_js__WEBPACK_IMPORTED_MODULE_189__ = __webpack_require__(/*! ./fn/string/removeHtmlComments.js */ "./dist/fn/string/removeHtmlComments.js");
/* harmony import */ var _fn_object_removePrivateProp_js__WEBPACK_IMPORTED_MODULE_190__ = __webpack_require__(/*! ./fn/object/removePrivateProp.js */ "./dist/fn/object/removePrivateProp.js");
/* harmony import */ var _fn_string_removeTrailingChars_js__WEBPACK_IMPORTED_MODULE_191__ = __webpack_require__(/*! ./fn/string/removeTrailingChars.js */ "./dist/fn/string/removeTrailingChars.js");
/* harmony import */ var _fn_string_repeat_js__WEBPACK_IMPORTED_MODULE_192__ = __webpack_require__(/*! ./fn/string/repeat.js */ "./dist/fn/string/repeat.js");
/* harmony import */ var _fn_string_replaceAll_js__WEBPACK_IMPORTED_MODULE_193__ = __webpack_require__(/*! ./fn/string/replaceAll.js */ "./dist/fn/string/replaceAll.js");
/* harmony import */ var _fn_browser_replaceSelection_js__WEBPACK_IMPORTED_MODULE_194__ = __webpack_require__(/*! ./fn/browser/replaceSelection.js */ "./dist/fn/browser/replaceSelection.js");
/* harmony import */ var _fn_style_resize_js__WEBPACK_IMPORTED_MODULE_195__ = __webpack_require__(/*! ./fn/style/resize.js */ "./dist/fn/style/resize.js");
/* harmony import */ var _fn_convert_rgb2hex_js__WEBPACK_IMPORTED_MODULE_196__ = __webpack_require__(/*! ./fn/convert/rgb2hex.js */ "./dist/fn/convert/rgb2hex.js");
/* harmony import */ var _fn_loop_riterate_js__WEBPACK_IMPORTED_MODULE_197__ = __webpack_require__(/*! ./fn/loop/riterate.js */ "./dist/fn/loop/riterate.js");
/* harmony import */ var _fn_misc_roundDecimal_js__WEBPACK_IMPORTED_MODULE_198__ = __webpack_require__(/*! ./fn/misc/roundDecimal.js */ "./dist/fn/misc/roundDecimal.js");
/* harmony import */ var _fn_string_sanitize_js__WEBPACK_IMPORTED_MODULE_199__ = __webpack_require__(/*! ./fn/string/sanitize.js */ "./dist/fn/string/sanitize.js");
/* harmony import */ var _fn_object_search_js__WEBPACK_IMPORTED_MODULE_200__ = __webpack_require__(/*! ./fn/object/search.js */ "./dist/fn/object/search.js");
/* harmony import */ var _fn_browser_selectElementText_js__WEBPACK_IMPORTED_MODULE_201__ = __webpack_require__(/*! ./fn/browser/selectElementText.js */ "./dist/fn/browser/selectElementText.js");
/* harmony import */ var _fn_html_selector_js__WEBPACK_IMPORTED_MODULE_202__ = __webpack_require__(/*! ./fn/html/selector.js */ "./dist/fn/html/selector.js");
/* harmony import */ var _fn_browser_setCookie_js__WEBPACK_IMPORTED_MODULE_203__ = __webpack_require__(/*! ./fn/browser/setCookie.js */ "./dist/fn/browser/setCookie.js");
/* harmony import */ var _fn_style_setCssVar_js__WEBPACK_IMPORTED_MODULE_204__ = __webpack_require__(/*! ./fn/style/setCssVar.js */ "./dist/fn/style/setCssVar.js");
/* harmony import */ var _fn_ajax_setNavigationVars_js__WEBPACK_IMPORTED_MODULE_205__ = __webpack_require__(/*! ./fn/ajax/setNavigationVars.js */ "./dist/fn/ajax/setNavigationVars.js");
/* harmony import */ var _fn_object_setProp_js__WEBPACK_IMPORTED_MODULE_206__ = __webpack_require__(/*! ./fn/object/setProp.js */ "./dist/fn/object/setProp.js");
/* harmony import */ var _fn_object_setProperty_js__WEBPACK_IMPORTED_MODULE_207__ = __webpack_require__(/*! ./fn/object/setProperty.js */ "./dist/fn/object/setProperty.js");
/* harmony import */ var _fn_string_shorten_js__WEBPACK_IMPORTED_MODULE_208__ = __webpack_require__(/*! ./fn/string/shorten.js */ "./dist/fn/string/shorten.js");
/* harmony import */ var _fn_object_shortenObj_js__WEBPACK_IMPORTED_MODULE_209__ = __webpack_require__(/*! ./fn/object/shortenObj.js */ "./dist/fn/object/shortenObj.js");
/* harmony import */ var _fn_object_shuffle_js__WEBPACK_IMPORTED_MODULE_210__ = __webpack_require__(/*! ./fn/object/shuffle.js */ "./dist/fn/object/shuffle.js");
/* harmony import */ var _fn_string_simpleHash_js__WEBPACK_IMPORTED_MODULE_211__ = __webpack_require__(/*! ./fn/string/simpleHash.js */ "./dist/fn/string/simpleHash.js");
/* harmony import */ var _fn_string_simpleHash1_js__WEBPACK_IMPORTED_MODULE_212__ = __webpack_require__(/*! ./fn/string/simpleHash1.js */ "./dist/fn/string/simpleHash1.js");
/* harmony import */ var _fn_string_simpleHash2_js__WEBPACK_IMPORTED_MODULE_213__ = __webpack_require__(/*! ./fn/string/simpleHash2.js */ "./dist/fn/string/simpleHash2.js");
/* harmony import */ var _fn_datetime_chrono_js__WEBPACK_IMPORTED_MODULE_214__ = __webpack_require__(/*! ./fn/datetime/chrono.js */ "./dist/fn/datetime/chrono.js");
/* harmony import */ var _fn_convert_string2ArrayBuffer_js__WEBPACK_IMPORTED_MODULE_215__ = __webpack_require__(/*! ./fn/convert/string2ArrayBuffer.js */ "./dist/fn/convert/string2ArrayBuffer.js");
/* harmony import */ var _fn_form_submit_js__WEBPACK_IMPORTED_MODULE_216__ = __webpack_require__(/*! ./fn/form/submit.js */ "./dist/fn/form/submit.js");
/* harmony import */ var _fn_string_substr_js__WEBPACK_IMPORTED_MODULE_217__ = __webpack_require__(/*! ./fn/string/substr.js */ "./dist/fn/string/substr.js");
/* harmony import */ var _fn_object_sum_js__WEBPACK_IMPORTED_MODULE_218__ = __webpack_require__(/*! ./fn/object/sum.js */ "./dist/fn/object/sum.js");
/* harmony import */ var _fn_datetime_timestamp_js__WEBPACK_IMPORTED_MODULE_219__ = __webpack_require__(/*! ./fn/datetime/timestamp.js */ "./dist/fn/datetime/timestamp.js");
/* harmony import */ var _fn_convert_toCSV_js__WEBPACK_IMPORTED_MODULE_220__ = __webpack_require__(/*! ./fn/convert/toCSV.js */ "./dist/fn/convert/toCSV.js");
/* harmony import */ var _fn_browser_toggleFullScreen_js__WEBPACK_IMPORTED_MODULE_221__ = __webpack_require__(/*! ./fn/browser/toggleFullScreen.js */ "./dist/fn/browser/toggleFullScreen.js");
/* harmony import */ var _fn_misc_translate_js__WEBPACK_IMPORTED_MODULE_222__ = __webpack_require__(/*! ./fn/misc/translate.js */ "./dist/fn/misc/translate.js");
/* harmony import */ var _fn_ajax_treatAjaxArguments_js__WEBPACK_IMPORTED_MODULE_223__ = __webpack_require__(/*! ./fn/ajax/treatAjaxArguments.js */ "./dist/fn/ajax/treatAjaxArguments.js");
/* harmony import */ var _fn_string_trim_js__WEBPACK_IMPORTED_MODULE_224__ = __webpack_require__(/*! ./fn/string/trim.js */ "./dist/fn/string/trim.js");
/* harmony import */ var _fn_string_uniqString_js__WEBPACK_IMPORTED_MODULE_225__ = __webpack_require__(/*! ./fn/string/uniqString.js */ "./dist/fn/string/uniqString.js");
/* harmony import */ var _fn_object_unique_js__WEBPACK_IMPORTED_MODULE_226__ = __webpack_require__(/*! ./fn/object/unique.js */ "./dist/fn/object/unique.js");
/* harmony import */ var _fn_ajax_upload_js__WEBPACK_IMPORTED_MODULE_227__ = __webpack_require__(/*! ./fn/ajax/upload.js */ "./dist/fn/ajax/upload.js");
/* harmony import */ var _fn_browser_warning_js__WEBPACK_IMPORTED_MODULE_228__ = __webpack_require__(/*! ./fn/browser/warning.js */ "./dist/fn/browser/warning.js");





































































































































































































































var fn = {
    _addLoader: _fn_ajax_addLoader_js__WEBPACK_IMPORTED_MODULE_0__._addLoader,
    _compareValues: _fn_object_compareValues_js__WEBPACK_IMPORTED_MODULE_1__._compareValues,
    _deleteLoader: _fn_ajax_deleteLoader_js__WEBPACK_IMPORTED_MODULE_2__._deleteLoader,
    abort: _fn_ajax_abort_js__WEBPACK_IMPORTED_MODULE_3__.abort,
    abortURL: _fn_ajax_abortURL_js__WEBPACK_IMPORTED_MODULE_4__.abortURL,
    addColors: _fn_style_addColors_js__WEBPACK_IMPORTED_MODULE_5__.addColors,
    addInputs: _fn_form_addInputs_js__WEBPACK_IMPORTED_MODULE_6__.addInputs,
    addStyle: _fn_style_addStyle_js__WEBPACK_IMPORTED_MODULE_7__.addStyle,
    adjustHeight: _fn_html_adjustHeight_js__WEBPACK_IMPORTED_MODULE_8__.adjustHeight,
    adjustSize: _fn_html_adjustSize_js__WEBPACK_IMPORTED_MODULE_9__.adjustSize,
    adjustWidth: _fn_html_adjustWidth_js__WEBPACK_IMPORTED_MODULE_10__.adjustWidth,
    ajax: _fn_ajax_ajax_js__WEBPACK_IMPORTED_MODULE_11__.ajax,
    analyzeFunction: _fn_misc_analyzeFunction_js__WEBPACK_IMPORTED_MODULE_12__.analyzeFunction,
    animateCss: _fn_style_animateCss_js__WEBPACK_IMPORTED_MODULE_13__.animateCss,
    arrayBuffer2String: _fn_convert_arrayBuffer2String_js__WEBPACK_IMPORTED_MODULE_14__.arrayBuffer2String,
    arrayFromProp: _fn_object_arrayFromProp_js__WEBPACK_IMPORTED_MODULE_15__.arrayFromProp,
    autoExtend: _fn_object_autoExtend_js__WEBPACK_IMPORTED_MODULE_16__.autoExtend,
    baseName: _fn_string_baseName_js__WEBPACK_IMPORTED_MODULE_17__.baseName,
    br2nl: _fn_string_br2nl_js__WEBPACK_IMPORTED_MODULE_18__.br2nl,
    calendar: _fn_datetime_calendar_js__WEBPACK_IMPORTED_MODULE_19__.calendar,
    callback: _fn_ajax_callback_js__WEBPACK_IMPORTED_MODULE_20__.callback,
    camelize: _fn_string_camelize_js__WEBPACK_IMPORTED_MODULE_21__.camelize,
    camelToCss: _fn_string_camelToCss_js__WEBPACK_IMPORTED_MODULE_22__.camelToCss,
    canvasToImage: _fn_convert_canvasToImage_js__WEBPACK_IMPORTED_MODULE_23__.canvasToImage,
    center: _fn_style_center_js__WEBPACK_IMPORTED_MODULE_24__.center,
    checkProps: _fn_object_checkProps_js__WEBPACK_IMPORTED_MODULE_25__.checkProps,
    checkPropsDetails: _fn_object_checkPropsDetails_js__WEBPACK_IMPORTED_MODULE_26__.checkPropsDetails,
    checkPropsOrDie: _fn_object_checkPropsOrDie_js__WEBPACK_IMPORTED_MODULE_27__.checkPropsOrDie,
    checkType: _fn_type_checkType_js__WEBPACK_IMPORTED_MODULE_28__.checkType,
    circularReplacer: _fn_object_circularReplacer_js__WEBPACK_IMPORTED_MODULE_29__.circularReplacer,
    clone: _fn_object_clone_js__WEBPACK_IMPORTED_MODULE_30__.clone,
    colorToHex: _fn_convert_colorToHex_js__WEBPACK_IMPORTED_MODULE_31__.colorToHex,
    compare: _fn_object_compare_js__WEBPACK_IMPORTED_MODULE_32__.compare,
    compareConditions: _fn_object_compareConditions_js__WEBPACK_IMPORTED_MODULE_33__.compareConditions,
    copy: _fn_browser_copy_js__WEBPACK_IMPORTED_MODULE_34__.copy,
    correctCase: _fn_string_correctCase_js__WEBPACK_IMPORTED_MODULE_35__.correctCase,
    count: _fn_object_count_js__WEBPACK_IMPORTED_MODULE_36__.count,
    crc32: _fn_string_crc32_js__WEBPACK_IMPORTED_MODULE_37__.crc32,
    createObject: _fn_object_createObject_js__WEBPACK_IMPORTED_MODULE_38__.createObject,
    cssExists: _fn_style_cssExists_js__WEBPACK_IMPORTED_MODULE_39__.cssExists,
    date: _fn_datetime_date_js__WEBPACK_IMPORTED_MODULE_40__.date,
    dateSQL: _fn_datetime_dateSQL_js__WEBPACK_IMPORTED_MODULE_41__.dateSQL,
    daysInMonth: _fn_datetime_daysInMonth_js__WEBPACK_IMPORTED_MODULE_42__.daysInMonth,
    deepPath: _fn_object_deepPath_js__WEBPACK_IMPORTED_MODULE_43__.deepPath,
    defaultAjaxAbortFunction: _fn_default_defaultAjaxAbortFunction_js__WEBPACK_IMPORTED_MODULE_44__.defaultAjaxAbortFunction,
    defaultAjaxErrorFunction: _fn_default_defaultAjaxErrorFunction_js__WEBPACK_IMPORTED_MODULE_45__.defaultAjaxErrorFunction,
    defaultAlertFunction: _fn_default_defaultAlertFunction_js__WEBPACK_IMPORTED_MODULE_46__.defaultAlertFunction,
    defaultConfirmFunction: _fn_default_defaultConfirmFunction_js__WEBPACK_IMPORTED_MODULE_47__.defaultConfirmFunction,
    defaultEndLoadingFunction: _fn_default_defaultEndLoadingFunction_js__WEBPACK_IMPORTED_MODULE_48__.defaultEndLoadingFunction,
    defaultErrorFunction: _fn_default_defaultErrorFunction_js__WEBPACK_IMPORTED_MODULE_49__.defaultErrorFunction,
    defaultHistoryFunction: _fn_default_defaultHistoryFunction_js__WEBPACK_IMPORTED_MODULE_50__.defaultHistoryFunction,
    defaultLinkFunction: _fn_default_defaultLinkFunction_js__WEBPACK_IMPORTED_MODULE_51__.defaultLinkFunction,
    defaultPostLinkFunction: _fn_default_defaultPostLinkFunction_js__WEBPACK_IMPORTED_MODULE_52__.defaultPostLinkFunction,
    defaultPreLinkFunction: _fn_default_defaultPreLinkFunction_js__WEBPACK_IMPORTED_MODULE_53__.defaultPreLinkFunction,
    defaultResizeFunction: _fn_default_defaultResizeFunction_js__WEBPACK_IMPORTED_MODULE_54__.defaultResizeFunction,
    defaultStartLoadingFunction: _fn_default_defaultStartLoadingFunction_js__WEBPACK_IMPORTED_MODULE_55__.defaultStartLoadingFunction,
    deleteProp: _fn_object_deleteProp_js__WEBPACK_IMPORTED_MODULE_56__.deleteProp,
    diffObj: _fn_object_diffObj_js__WEBPACK_IMPORTED_MODULE_57__.diffObj,
    dirName: _fn_string_dirName_js__WEBPACK_IMPORTED_MODULE_58__.dirName,
    download: _fn_ajax_download_js__WEBPACK_IMPORTED_MODULE_59__.download,
    downloadContent: _fn_ajax_downloadContent_js__WEBPACK_IMPORTED_MODULE_60__.downloadContent,
    each: _fn_loop_each_js__WEBPACK_IMPORTED_MODULE_61__.each,
    eraseCookie: _fn_browser_eraseCookie_js__WEBPACK_IMPORTED_MODULE_62__.eraseCookie,
    error: _fn_browser_error_js__WEBPACK_IMPORTED_MODULE_63__.error,
    escapeDquotes: _fn_string_escapeDquotes_js__WEBPACK_IMPORTED_MODULE_64__.escapeDquotes,
    escapeRegExp: _fn_string_escapeRegExp_js__WEBPACK_IMPORTED_MODULE_65__.escapeRegExp,
    escapeSquotes: _fn_string_escapeSquotes_js__WEBPACK_IMPORTED_MODULE_66__.escapeSquotes,
    escapeTicks: _fn_string_escapeTicks_js__WEBPACK_IMPORTED_MODULE_67__.escapeTicks,
    escapeUrl: _fn_string_escapeUrl_js__WEBPACK_IMPORTED_MODULE_68__.escapeUrl,
    extend: _fn_object_extend_js__WEBPACK_IMPORTED_MODULE_69__.extend,
    extendOut: _fn_object_extendOut_js__WEBPACK_IMPORTED_MODULE_70__.extendOut,
    fdate: _fn_datetime_fdate_js__WEBPACK_IMPORTED_MODULE_71__.fdate,
    fdatetime: _fn_datetime_fdatetime_js__WEBPACK_IMPORTED_MODULE_72__.fdatetime,
    fieldValue: _fn_form_fieldValue_js__WEBPACK_IMPORTED_MODULE_73__.fieldValue,
    fileExt: _fn_string_fileExt_js__WEBPACK_IMPORTED_MODULE_74__.fileExt,
    filter: _fn_object_filter_js__WEBPACK_IMPORTED_MODULE_75__.filter,
    filterToConditions: _fn_object_filterToConditions_js__WEBPACK_IMPORTED_MODULE_76__.filterToConditions,
    findAll: _fn_object_findAll_js__WEBPACK_IMPORTED_MODULE_77__.findAll,
    fori: _fn_loop_fori_js__WEBPACK_IMPORTED_MODULE_78__.fori,
    forir: _fn_loop_forir_js__WEBPACK_IMPORTED_MODULE_79__.forir,
    format: _fn_string_format_js__WEBPACK_IMPORTED_MODULE_80__.format,
    formatBytes: _fn_string_formatBytes_js__WEBPACK_IMPORTED_MODULE_81__.formatBytes,
    formatDate: _fn_datetime_formatDate_js__WEBPACK_IMPORTED_MODULE_82__.formatDate,
    formatSize: _fn_string_formatSize_js__WEBPACK_IMPORTED_MODULE_83__.formatSize,
    formdata: _fn_form_formdata_js__WEBPACK_IMPORTED_MODULE_84__.formdata,
    fromXml: _fn_convert_fromXml_js__WEBPACK_IMPORTED_MODULE_85__.fromXml,
    ftime: _fn_datetime_ftime_js__WEBPACK_IMPORTED_MODULE_86__.ftime,
    getAllTags: _fn_html_getAllTags_js__WEBPACK_IMPORTED_MODULE_87__.getAllTags,
    getAncestors: _fn_html_getAncestors_js__WEBPACK_IMPORTED_MODULE_88__.getAncestors,
    getAttributes: _fn_html_getAttributes_js__WEBPACK_IMPORTED_MODULE_89__.getAttributes,
    getBrowserName: _fn_browser_getBrowserName_js__WEBPACK_IMPORTED_MODULE_90__.getBrowserName,
    getBrowserVersion: _fn_browser_getBrowserVersion_js__WEBPACK_IMPORTED_MODULE_91__.getBrowserVersion,
    getCookie: _fn_browser_getCookie_js__WEBPACK_IMPORTED_MODULE_92__.getCookie,
    getCssVar: _fn_style_getCssVar_js__WEBPACK_IMPORTED_MODULE_93__.getCssVar,
    getDay: _fn_datetime_getDay_js__WEBPACK_IMPORTED_MODULE_94__.getDay,
    getDeviceType: _fn_browser_getDeviceType_js__WEBPACK_IMPORTED_MODULE_95__.getDeviceType,
    getEventData: _fn_browser_getEventData_js__WEBPACK_IMPORTED_MODULE_96__.getEventData,
    getField: _fn_object_getField_js__WEBPACK_IMPORTED_MODULE_97__.getField,
    getFieldValues: _fn_object_getFieldValues_js__WEBPACK_IMPORTED_MODULE_98__.getFieldValues,
    getHtml: _fn_html_getHtml_js__WEBPACK_IMPORTED_MODULE_99__.getHtml,
    getHTMLOfSelection: _fn_html_getHTMLOfSelection_js__WEBPACK_IMPORTED_MODULE_100__.getHTMLOfSelection,
    getLoader: _fn_ajax_getLoader_js__WEBPACK_IMPORTED_MODULE_101__.getLoader,
    getPath: _fn_html_getPath_js__WEBPACK_IMPORTED_MODULE_102__.getPath,
    getProp: _fn_object_getProp_js__WEBPACK_IMPORTED_MODULE_103__.getProp,
    getProperty: _fn_object_getProperty_js__WEBPACK_IMPORTED_MODULE_104__.getProperty,
    getRequestId: _fn_ajax_getRequestId_js__WEBPACK_IMPORTED_MODULE_105__.getRequestId,
    getRow: _fn_object_getRow_js__WEBPACK_IMPORTED_MODULE_106__.getRow,
    getScrollBarSize: _fn_style_getScrollBarSize_js__WEBPACK_IMPORTED_MODULE_107__.getScrollBarSize,
    getText: _fn_html_getText_js__WEBPACK_IMPORTED_MODULE_108__.getText,
    getTimeoff: _fn_misc_getTimeoff_js__WEBPACK_IMPORTED_MODULE_109__.getTimeoff,
    happy: _fn_browser_happy_js__WEBPACK_IMPORTED_MODULE_110__.happy,
    hash: _fn_string_hash_js__WEBPACK_IMPORTED_MODULE_111__.hash,
    hex2rgb: _fn_convert_hex2rgb_js__WEBPACK_IMPORTED_MODULE_112__.hex2rgb,
    history: _fn_browser_history_js__WEBPACK_IMPORTED_MODULE_113__.history,
    html2text: _fn_html_html2text_js__WEBPACK_IMPORTED_MODULE_114__.html2text,
    imageToCanvas: _fn_convert_imageToCanvas_js__WEBPACK_IMPORTED_MODULE_115__.imageToCanvas,
    imgToBase64: _fn_convert_imgToBase64_js__WEBPACK_IMPORTED_MODULE_116__.imgToBase64,
    info: _fn_browser_info_js__WEBPACK_IMPORTED_MODULE_117__.info,
    init: _fn_init_js__WEBPACK_IMPORTED_MODULE_118__.init,
    isActiveInterface: _fn_browser_isActiveInterface_js__WEBPACK_IMPORTED_MODULE_119__.isActiveInterface,
    isArray: _fn_type_isArray_js__WEBPACK_IMPORTED_MODULE_120__.isArray,
    isBlob: _fn_type_isBlob_js__WEBPACK_IMPORTED_MODULE_121__.isBlob,
    isBoolean: _fn_type_isBoolean_js__WEBPACK_IMPORTED_MODULE_122__.isBoolean,
    isCanvas: _fn_type_isCanvas_js__WEBPACK_IMPORTED_MODULE_123__.isCanvas,
    isColor: _fn_type_isColor_js__WEBPACK_IMPORTED_MODULE_124__.isColor,
    isComment: _fn_type_isComment_js__WEBPACK_IMPORTED_MODULE_125__.isComment,
    isCp: _fn_type_isCp_js__WEBPACK_IMPORTED_MODULE_126__.isCp,
    isDate: _fn_type_isDate_js__WEBPACK_IMPORTED_MODULE_127__.isDate,
    isDesktopDevice: _fn_browser_isDesktopDevice_js__WEBPACK_IMPORTED_MODULE_128__.isDesktopDevice,
    isDimension: _fn_type_isDimension_js__WEBPACK_IMPORTED_MODULE_129__.isDimension,
    isDom: _fn_type_isDom_js__WEBPACK_IMPORTED_MODULE_130__.isDom,
    isEmail: _fn_type_isEmail_js__WEBPACK_IMPORTED_MODULE_131__.isEmail,
    isEmpty: _fn_type_isEmpty_js__WEBPACK_IMPORTED_MODULE_132__.isEmpty,
    isEvent: _fn_type_isEvent_js__WEBPACK_IMPORTED_MODULE_133__.isEvent,
    isFocused: _fn_browser_isFocused_js__WEBPACK_IMPORTED_MODULE_134__.isFocused,
    isFunction: _fn_type_isFunction_js__WEBPACK_IMPORTED_MODULE_135__.isFunction,
    isHostname: _fn_type_isHostname_js__WEBPACK_IMPORTED_MODULE_136__.isHostname,
    isInside: _fn_html_isInside_js__WEBPACK_IMPORTED_MODULE_137__.isInside,
    isInt: _fn_type_isInt_js__WEBPACK_IMPORTED_MODULE_138__.isInt,
    isInViewport: _fn_html_isInViewport_js__WEBPACK_IMPORTED_MODULE_139__.isInViewport,
    isIP: _fn_type_isIP_js__WEBPACK_IMPORTED_MODULE_140__.isIP,
    isIterable: _fn_type_isIterable_js__WEBPACK_IMPORTED_MODULE_141__.isIterable,
    isMobile: _fn_browser_isMobile_js__WEBPACK_IMPORTED_MODULE_142__.isMobile,
    isMobileDevice: _fn_browser_isMobileDevice_js__WEBPACK_IMPORTED_MODULE_143__.isMobileDevice,
    isNull: _fn_type_isNull_js__WEBPACK_IMPORTED_MODULE_144__.isNull,
    isNumber: _fn_type_isNumber_js__WEBPACK_IMPORTED_MODULE_145__.isNumber,
    isObject: _fn_type_isObject_js__WEBPACK_IMPORTED_MODULE_146__.isObject,
    isPercent: _fn_type_isPercent_js__WEBPACK_IMPORTED_MODULE_147__.isPercent,
    isPrimitive: _fn_type_isPrimitive_js__WEBPACK_IMPORTED_MODULE_148__.isPrimitive,
    isPromise: _fn_type_isPromise_js__WEBPACK_IMPORTED_MODULE_149__.isPromise,
    isPropSize: _fn_type_isPropSize_js__WEBPACK_IMPORTED_MODULE_150__.isPropSize,
    isSame: _fn_type_isSame_js__WEBPACK_IMPORTED_MODULE_151__.isSame,
    isSQLDate: _fn_type_isSQLDate_js__WEBPACK_IMPORTED_MODULE_152__.isSQLDate,
    isString: _fn_type_isString_js__WEBPACK_IMPORTED_MODULE_153__.isString,
    isSymbol: _fn_type_isSymbol_js__WEBPACK_IMPORTED_MODULE_154__.isSymbol,
    isTabletDevice: _fn_browser_isTabletDevice_js__WEBPACK_IMPORTED_MODULE_155__.isTabletDevice,
    isURL: _fn_type_isURL_js__WEBPACK_IMPORTED_MODULE_156__.isURL,
    isValidDimension: _fn_type_isValidDimension_js__WEBPACK_IMPORTED_MODULE_157__.isValidDimension,
    isValidName: _fn_type_isValidName_js__WEBPACK_IMPORTED_MODULE_158__.isValidName,
    isValue: _fn_type_isValue_js__WEBPACK_IMPORTED_MODULE_159__.isValue,
    isVue: _fn_type_isVue_js__WEBPACK_IMPORTED_MODULE_160__.isVue,
    iterate: _fn_loop_iterate_js__WEBPACK_IMPORTED_MODULE_161__.iterate,
    lightenDarkenHex: _fn_style_lightenDarkenHex_js__WEBPACK_IMPORTED_MODULE_162__.lightenDarkenHex,
    link: _fn_ajax_link_js__WEBPACK_IMPORTED_MODULE_163__.link,
    log: _fn_browser_log_js__WEBPACK_IMPORTED_MODULE_164__.log,
    makeReactive: _fn_html_makeReactive_js__WEBPACK_IMPORTED_MODULE_165__.makeReactive,
    map: _fn_object_map_js__WEBPACK_IMPORTED_MODULE_166__.map,
    md5: _fn_string_md5_js__WEBPACK_IMPORTED_MODULE_167__.md5,
    money: _fn_misc_money_js__WEBPACK_IMPORTED_MODULE_168__.money,
    move: _fn_object_move_js__WEBPACK_IMPORTED_MODULE_169__.move,
    multiorder: _fn_object_multiorder_js__WEBPACK_IMPORTED_MODULE_170__.multiorder,
    mutateArray: _fn_object_mutateArray_js__WEBPACK_IMPORTED_MODULE_171__.mutateArray,
    nl2br: _fn_string_nl2br_js__WEBPACK_IMPORTED_MODULE_172__.nl2br,
    numProperties: _fn_object_numProperties_js__WEBPACK_IMPORTED_MODULE_173__.numProperties,
    objectToFormData: _fn_form_objectToFormData_js__WEBPACK_IMPORTED_MODULE_174__.objectToFormData,
    order: _fn_object_order_js__WEBPACK_IMPORTED_MODULE_175__.order,
    outerHeight: _fn_style_outerHeight_js__WEBPACK_IMPORTED_MODULE_176__.outerHeight,
    outerWidth: _fn_style_outerWidth_js__WEBPACK_IMPORTED_MODULE_177__.outerWidth,
    percent: _fn_misc_percent_js__WEBPACK_IMPORTED_MODULE_178__.percent,
    pickValue: _fn_object_pickValue_js__WEBPACK_IMPORTED_MODULE_179__.pickValue,
    post: _fn_ajax_post_js__WEBPACK_IMPORTED_MODULE_180__.post,
    postOut: _fn_ajax_postOut_js__WEBPACK_IMPORTED_MODULE_181__.postOut,
    printf: _fn_string_printf_js__WEBPACK_IMPORTED_MODULE_182__.printf,
    quotes2html: _fn_string_quotes2html_js__WEBPACK_IMPORTED_MODULE_183__.quotes2html,
    randomInt: _fn_misc_randomInt_js__WEBPACK_IMPORTED_MODULE_184__.randomInt,
    randomString: _fn_string_randomString_js__WEBPACK_IMPORTED_MODULE_185__.randomString,
    removeAccents: _fn_string_removeAccents_js__WEBPACK_IMPORTED_MODULE_186__.removeAccents,
    removeEmpty: _fn_object_removeEmpty_js__WEBPACK_IMPORTED_MODULE_187__.removeEmpty,
    removeExtraSpaces: _fn_string_removeExtraSpaces_js__WEBPACK_IMPORTED_MODULE_188__.removeExtraSpaces,
    removeHtmlComments: _fn_string_removeHtmlComments_js__WEBPACK_IMPORTED_MODULE_189__.removeHtmlComments,
    removePrivateProp: _fn_object_removePrivateProp_js__WEBPACK_IMPORTED_MODULE_190__.removePrivateProp,
    removeTrailingChars: _fn_string_removeTrailingChars_js__WEBPACK_IMPORTED_MODULE_191__.removeTrailingChars,
    repeat: _fn_string_repeat_js__WEBPACK_IMPORTED_MODULE_192__.repeat,
    replaceAll: _fn_string_replaceAll_js__WEBPACK_IMPORTED_MODULE_193__.replaceAll,
    replaceSelection: _fn_browser_replaceSelection_js__WEBPACK_IMPORTED_MODULE_194__.replaceSelection,
    resize: _fn_style_resize_js__WEBPACK_IMPORTED_MODULE_195__.resize,
    rgb2hex: _fn_convert_rgb2hex_js__WEBPACK_IMPORTED_MODULE_196__.rgb2hex,
    riterate: _fn_loop_riterate_js__WEBPACK_IMPORTED_MODULE_197__.riterate,
    roundDecimal: _fn_misc_roundDecimal_js__WEBPACK_IMPORTED_MODULE_198__.roundDecimal,
    sanitize: _fn_string_sanitize_js__WEBPACK_IMPORTED_MODULE_199__.sanitize,
    search: _fn_object_search_js__WEBPACK_IMPORTED_MODULE_200__.search,
    selectElementText: _fn_browser_selectElementText_js__WEBPACK_IMPORTED_MODULE_201__.selectElementText,
    selector: _fn_html_selector_js__WEBPACK_IMPORTED_MODULE_202__.selector,
    setCookie: _fn_browser_setCookie_js__WEBPACK_IMPORTED_MODULE_203__.setCookie,
    setCssVar: _fn_style_setCssVar_js__WEBPACK_IMPORTED_MODULE_204__.setCssVar,
    setNavigationVars: _fn_ajax_setNavigationVars_js__WEBPACK_IMPORTED_MODULE_205__.setNavigationVars,
    setProp: _fn_object_setProp_js__WEBPACK_IMPORTED_MODULE_206__.setProp,
    setProperty: _fn_object_setProperty_js__WEBPACK_IMPORTED_MODULE_207__.setProperty,
    shorten: _fn_string_shorten_js__WEBPACK_IMPORTED_MODULE_208__.shorten,
    shortenObj: _fn_object_shortenObj_js__WEBPACK_IMPORTED_MODULE_209__.shortenObj,
    shuffle: _fn_object_shuffle_js__WEBPACK_IMPORTED_MODULE_210__.shuffle,
    simpleHash: _fn_string_simpleHash_js__WEBPACK_IMPORTED_MODULE_211__.simpleHash,
    simpleHash1: _fn_string_simpleHash1_js__WEBPACK_IMPORTED_MODULE_212__.simpleHash1,
    simpleHash2: _fn_string_simpleHash2_js__WEBPACK_IMPORTED_MODULE_213__.simpleHash2,
    startChrono: _fn_datetime_chrono_js__WEBPACK_IMPORTED_MODULE_214__.startChrono,
    stopChrono: _fn_datetime_chrono_js__WEBPACK_IMPORTED_MODULE_214__.stopChrono,
    string2ArrayBuffer: _fn_convert_string2ArrayBuffer_js__WEBPACK_IMPORTED_MODULE_215__.string2ArrayBuffer,
    submit: _fn_form_submit_js__WEBPACK_IMPORTED_MODULE_216__.submit,
    substr: _fn_string_substr_js__WEBPACK_IMPORTED_MODULE_217__.substr,
    sum: _fn_object_sum_js__WEBPACK_IMPORTED_MODULE_218__.sum,
    timestamp: _fn_datetime_timestamp_js__WEBPACK_IMPORTED_MODULE_219__.timestamp,
    toCSV: _fn_convert_toCSV_js__WEBPACK_IMPORTED_MODULE_220__.toCSV,
    toggleFullScreen: _fn_browser_toggleFullScreen_js__WEBPACK_IMPORTED_MODULE_221__.toggleFullScreen,
    translate: _fn_misc_translate_js__WEBPACK_IMPORTED_MODULE_222__.translate,
    treatAjaxArguments: _fn_ajax_treatAjaxArguments_js__WEBPACK_IMPORTED_MODULE_223__.treatAjaxArguments,
    trim: _fn_string_trim_js__WEBPACK_IMPORTED_MODULE_224__.trim,
    uniqString: _fn_string_uniqString_js__WEBPACK_IMPORTED_MODULE_225__.uniqString,
    unique: _fn_object_unique_js__WEBPACK_IMPORTED_MODULE_226__.unique,
    upload: _fn_ajax_upload_js__WEBPACK_IMPORTED_MODULE_227__.upload,
    warning: _fn_browser_warning_js__WEBPACK_IMPORTED_MODULE_228__.warning,
};



/***/ }),

/***/ "./dist/fn/ajax/_addLoader.js":
/*!************************************!*\
  !*** ./dist/fn/ajax/_addLoader.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _addLoader: () => (/* binding */ _addLoader)
/* harmony export */ });
/* harmony import */ var _string_substr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../string/substr.js */ "./dist/fn/string/substr.js");

/**
 * Creates and adds a "loader" object to the property bbn.env.loaders.
 *
 * @method   _addLoader
 * @global
 * @ignore
 * @memberof bbn.fn
 *
 * @param    {String}  requestId
 * @param    {Promise} prom
 * @param    {Object}  aborter
 *
 * @returns  {Number}  The timestamp (in ms)
 */
var _addLoader = function (requestId, prom, aborter) {
    /** @var {Number} tst Current timestamp */
    var tst = new Date().getTime();
    /** @var {String} url The original URL (part of requestId before : and md5) */
    var url = (0,_string_substr_js__WEBPACK_IMPORTED_MODULE_0__.substr)(requestId, 0, requestId.length - 33);
    /** @var {Object} loader The loader object */
    var loader = {
        key: requestId,
        url: url,
        loader: prom,
        aborter: aborter,
        loading: true,
        error: false,
        abort: false,
        errorMessage: false,
        success: false,
        start: tst,
    };
    // Adding the loader in bbn.env.loaders
    bbn.env.loaders.push(loader);
    // Adding an object with this loader info in bbn.env.loadersHistory
    bbn.env.loadersHistory.unshift(loader);
    /** @var {Number} idx A pointer starting at the end of  array loadersHistory */
    var idx = bbn.env.loadersHistory.length;
    // Removing elements from the loadersHistory object if their number is higher
    // than bbn.env.maxLoadersHistory
    while (idx && bbn.env.loadersHistory.length > bbn.env.maxLoadersHistory) {
        idx--;
        // Not removing the ones still loading
        if (!bbn.env.loading) {
            bbn.env.loadersHistory.splice(idx, 1);
        }
    }
    return tst;
};



/***/ }),

/***/ "./dist/fn/ajax/_deleteLoader.js":
/*!***************************************!*\
  !*** ./dist/fn/ajax/_deleteLoader.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _deleteLoader: () => (/* binding */ _deleteLoader)
/* harmony export */ });
/* harmony import */ var _object_search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../object/search.js */ "./dist/fn/object/search.js");
/* harmony import */ var _object_getRow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../object/getRow.js */ "./dist/fn/object/getRow.js");
/* harmony import */ var _type_isObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/isObject.js */ "./dist/fn/type/isObject.js");



/**
 * Deletes a loader and changes its history state after the promise is fullfilled.
 *
 * @method   _deleteLoader
 * @global
 * @ignore
 * @memberof bbn.fn
 *
 * @param    {String}  requestId   The unique ID of the request sent
 * @param    {String|Object}       res     The result of the request
 * @param    {Boolean} isAbort True if the deletion comes from abortion
 *
 * @returns  {Boolean} True if the loader was found
 */
var _deleteLoader = function (requestId, res, isAbort) {
    if (res === void 0) { res = null; }
    if (isAbort === void 0) { isAbort = false; }
    var idx = (0,_object_search_js__WEBPACK_IMPORTED_MODULE_0__.search)(bbn.env.loaders, { key: requestId });
    if (idx > -1) {
        var loader = bbn.env.loaders.splice(idx, 1)[0];
        var history_1 = (0,_object_getRow_js__WEBPACK_IMPORTED_MODULE_1__.getRow)(bbn.env.loadersHistory, { key: requestId, start: loader.start });
        if (history_1) {
            history_1.loading = false;
            history_1.duration = new Date().getTime() - loader.start;
            if (typeof res === 'string') {
                history_1.errorMessage = res;
                history_1.error = !isAbort;
                history_1.abort = isAbort;
            }
            else if ((0,_type_isObject_js__WEBPACK_IMPORTED_MODULE_2__.isObject)(res)) {
                history_1.success = true;
            }
        }
        return true;
    }
    return false;
};



/***/ }),

/***/ "./dist/fn/ajax/abort.js":
/*!*******************************!*\
  !*** ./dist/fn/ajax/abort.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   abort: () => (/* binding */ abort)
/* harmony export */ });
/* harmony import */ var _getLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLoader.js */ "./dist/fn/ajax/getLoader.js");

/**
 * Aborts (client side) the XHR corresponding to the given ID if it still exists.
 *
 * This will throw an error if the loader can't be found.
 *
 * @method   abort
 * @global
 * @memberof bbn.fn
 *
 * @example
 * ```javascript
 * bbn.fn.post('my/script', {a: 1, b: 2});
 * let requestId = bbn.fn.getRequestId('my/script', {a: 1, b: 2});
 * if (requestId) {
 *   bbn.fn.abort(requestId);
 * }
 * ```
 *
 * @param    {String} requestId An ID generated by getRequestId
 *
 * @returns  {undefined}
 */
var abort = function (requestId) {
    var loader = (0,_getLoader_js__WEBPACK_IMPORTED_MODULE_0__.getLoader)(requestId);
    if (loader === null || loader === void 0 ? void 0 : loader.aborter) {
        loader.aborter.abort('Operation canceled by the user.');
    }
    /*
    else {
        throw new Error("Impossible to find the loader " + requestId);
    }*/
};



/***/ }),

/***/ "./dist/fn/ajax/abortURL.js":
/*!**********************************!*\
  !*** ./dist/fn/ajax/abortURL.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   abortURL: () => (/* binding */ abortURL)
/* harmony export */ });
/* harmony import */ var _loop_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loop/each.js */ "./dist/fn/loop/each.js");
/* harmony import */ var _object_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../object/filter.js */ "./dist/fn/object/filter.js");


/**
 * Aborts (client side) all the XHR using the given URL if it still exists.
 *
 * This will throw an error if the loader can't be found.
 *
 * @method   abortURL
 * @global
 * @memberof bbn.fn
 *
 * @example
 * ```javascript
 * bbn.fn.post('my/script', {a: 1, b: 2});
 * bbn.fn.post('my/script', {c: 1, d: 2});
 * bbn.fn.abortURL('my/script');
 * ```
 *
 * @param    {String} requestId An ID generated by getRequestId
 *
 * @returns  {undefined}
 */
var abortURL = function (url) {
    (0,_loop_each_js__WEBPACK_IMPORTED_MODULE_0__.each)((0,_object_filter_js__WEBPACK_IMPORTED_MODULE_1__.filter)(bbn.env.loaders, { url: url }), function (a) {
        if (a && a.source) {
            a.source.cancel('Operation canceled by the user.');
        }
        else {
            throw new Error('Impossible to find the loader with URL ' + url);
        }
    });
};



/***/ }),

/***/ "./dist/fn/ajax/ajax.js":
/*!******************************!*\
  !*** ./dist/fn/ajax/ajax.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ajax: () => (/* binding */ ajax)
/* harmony export */ });
/* harmony import */ var _type_isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isObject.js */ "./dist/fn/type/isObject.js");
/* harmony import */ var _string_replaceAll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../string/replaceAll.js */ "./dist/fn/string/replaceAll.js");
/* harmony import */ var _getRequestId_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getRequestId.js */ "./dist/fn/ajax/getRequestId.js");
/* harmony import */ var _getLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getLoader.js */ "./dist/fn/ajax/getLoader.js");
/* harmony import */ var _object_extend_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../object/extend.js */ "./dist/fn/object/extend.js");
/* harmony import */ var _object_numProperties_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../object/numProperties.js */ "./dist/fn/object/numProperties.js");
/* harmony import */ var _deleteLoader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_deleteLoader.js */ "./dist/fn/ajax/_deleteLoader.js");
/* harmony import */ var _type_isFunction_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../type/isFunction.js */ "./dist/fn/type/isFunction.js");
/* harmony import */ var _addLoader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_addLoader.js */ "./dist/fn/ajax/_addLoader.js");









/**
 * Creates an XHR object and returns the Promise.
 *
 * Checks the URL, makes an ID, creates a loader, sets the general callbacks,
 * makes a POST if data is given a GET otherwise (GET data should be added
 * directly in the URL), and returns the Promise.
 *
 * @method   ajax
 * @global
 * @memberof bbn.fn
 * @example
 * ```javascript
 * // Promise
 * bbn.fn.ajax(
 *   'my/location',
 *   'json',
 *   {id: 7},
 *   d => {
 *     console.log(d);
 *     alert("Success!");
 *   },
 *   err => {
 *     console.log(err);
 *     alert("Failure!");
 *   },
 *   () => {
 *     alert("Request aborted!");
 *   }
 * )
 * ```
 *
 * @example
 * ```javascript
 * // Promise
 * bbn.fn.ajax('my/location')
 *   .then(
 *     d => {
 *       console.log(d);
 *       alert("Success!");
 *     }
 *   )
 *   .catch(
 *     err => {
 *     }
 *   )
 * ```
 *
 * @param    {String}   url      The URL to be requested by XHR
 * @param    {String}   datatype The type of data expected
 * @param    {Object}   data     The data to send through POST
 * @param    {Function} success  The function to execute if the request goes well (200)
 * @param    {Function} failure  The function to execute if the request goes bad
 * @param    {Function} abort    The function to execute if the request is aborted
 *
 * @returns  {Promise}  The Promise created by the generated XHR.
 */
var ajax = function (url, datatype, data, success, failure, abort) {
    if (datatype === void 0) { datatype = null; }
    if (data === void 0) { data = null; }
    if (success === void 0) { success = null; }
    if (failure === void 0) { failure = null; }
    if (abort === void 0) { abort = null; }
    if (arguments.length === 1 && url && typeof url === "object" && url.url) {
        if (url.abort) {
            abort = url.abort;
        }
        if (url.failure) {
            failure = url.failure;
        }
        if (url.success) {
            success = url.success;
        }
        if (url.data) {
            data = url.data;
        }
        if (url.datatype) {
            datatype = url.datatype;
        }
        url = url.url;
    }
    if (!url) {
        return;
    }
    if (url && typeof url === "string") {
        if (url.indexOf("://") === -1) {
            // Prevent protocol mismatch by Axios
            url = (0,_string_replaceAll_js__WEBPACK_IMPORTED_MODULE_1__.replaceAll)("//", "/", url);
        }
        if (!datatype) {
            datatype = "json";
        }
        var requestId_1 = (0,_getRequestId_js__WEBPACK_IMPORTED_MODULE_2__.getRequestId)(url, data, datatype);
        var loaderObj = (0,_getLoader_js__WEBPACK_IMPORTED_MODULE_3__.getLoader)(requestId_1);
        //log("IN AJAX", loaderObj? loaderObj.loader : "NO LOADER")
        if (loaderObj === null || loaderObj === void 0 ? void 0 : loaderObj.loader) {
            return loaderObj.loader;
        }
        if (bbn.env.token) {
            (0,_object_extend_js__WEBPACK_IMPORTED_MODULE_4__.extend)(data || {}, { _bbn_token: bbn.env.token });
        }
        var aborter = new AbortController();
        var options = {
            responseType: datatype,
            signal: aborter.signal
        };
        if (datatype === "text") {
            options['headers'] = {
                accept: "text/javascript",
                "Content-Type": "text/javascript",
            };
        }
        var args = [url];
        if ((0,_type_isObject_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(data) && (0,_object_numProperties_js__WEBPACK_IMPORTED_MODULE_5__.numProperties)(data) > 0) {
            args.push(data);
        }
        args.push(options);
        var axiosMethod = args.length === 2 ? "get" : "post";
        var loader_1 = axios[axiosMethod]
            .apply(null, args)
            .then(function (res) {
            (0,_deleteLoader_js__WEBPACK_IMPORTED_MODULE_6__._deleteLoader)(requestId_1, res);
            bbn.fn.defaultEndLoadingFunction(url, tst_1, data, res);
            switch (res.status) {
                case 200:
                    if ((0,_type_isFunction_js__WEBPACK_IMPORTED_MODULE_7__.isFunction)(success)) {
                        success(res.data, res.headers);
                    }
                    break;
                default:
                    bbn.fn.defaultAjaxErrorFunction(loader_1, res);
            }
            return res;
        })
            .catch(function (err) {
            var isAbort = axios.isCancel(err);
            (0,_deleteLoader_js__WEBPACK_IMPORTED_MODULE_6__._deleteLoader)(requestId_1, err.message || err.response.data, isAbort);
            bbn.fn.defaultEndLoadingFunction(url, tst_1, data, err);
            if (isAbort) {
                var ok = 1;
                if ((0,_type_isFunction_js__WEBPACK_IMPORTED_MODULE_7__.isFunction)(abort)) {
                    ok = abort(err.message, url);
                }
                if (ok) {
                    bbn.fn.defaultAjaxAbortFunction(err.message, url);
                }
            }
            else {
                var ok = 1;
                if ((0,_type_isFunction_js__WEBPACK_IMPORTED_MODULE_7__.isFunction)(failure)) {
                    ok = failure(err.request, err);
                }
                if (ok) {
                    bbn.fn.defaultAjaxErrorFunction(err.request, err.response ? err.response.data : "", err.response ? err.response.status : err);
                }
            }
        });
        var tst_1 = (0,_addLoader_js__WEBPACK_IMPORTED_MODULE_8__._addLoader)(requestId_1, loader_1, aborter);
        bbn.fn.defaultStartLoadingFunction(url, tst_1, data, requestId_1);
        return loader_1;
    }
};



/***/ }),

/***/ "./dist/fn/ajax/callback.js":
/*!**********************************!*\
  !*** ./dist/fn/ajax/callback.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   callback: () => (/* binding */ callback)
/* harmony export */ });
/* harmony import */ var _browser_error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../browser/error.js */ "./dist/fn/browser/error.js");
/* harmony import */ var _type_isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/isFunction.js */ "./dist/fn/type/isFunction.js");
/* harmony import */ var _browser_log_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../browser/log.js */ "./dist/fn/browser/log.js");



/**
 * Executes a serie of predefined actions once an Ajax request has been done.
 *
 * Used to treat all the requests functions results, it expects at least url and res to be defined;
 * The following properties from the object res have direct effects:
 * - __url__ {String}: if not given it will be automatically defined by the url parameter;
 *   __the given URL will be passed to location.href (without reloading)__
 * - __prescript__ {String}: if defined it will attempt to evaluate the code contained in the property
 * - __content__ {String}: if defined and ele is defined too, the string will be inserted as content in the element
 * - __script__ {String}: if defined it will be evaluated, executed, and its result will be returned
 * - __data__ {Object}:
 * - __postscript__ {String}: if defined it will be evaluated and executed
 * - __error__ {String}: if defined it will be trigger bbn.fn.defaultAlertFunction
 *
 * If fn is defined it will be executed after prescript, otherwise it will be bbn.fn.defaultLinkFunction.
 *
 * The rest of the function comes executed if either of these results is not empty.
 *
 * If fn2 is defined it will be executed after script, otherwise it will be bbn.fn.defaultPostLinkFunction.
 *
 * Although not private this function should only be used internally.
 *
 * @method   callback
 * @todo     Add method description for callback
 * @global
 * @memberof bbn.fn
 *
 * @param    {String}      url The URL that has been called
 * @param    {Object}      res The object returned by the request
 * @param    {Function}    fn  A first callback function to execute
 * @param    {Function}    fn2 A second callback function to execute
 * @param    {HTMLElement} ele A DOM element where the content will be inserted
 *
 * @returns  {*} The result of the main callback function: res.script, fn, or bbn.fn.defaultLinkFunction
 */
var callback = function (url, res, fn, fn2, ele) {
    if (res === void 0) { res = null; }
    if (fn === void 0) { fn = null; }
    if (fn2 === void 0) { fn2 = null; }
    if (ele === void 0) { ele = null; }
    var tmp = false;
    if (res) {
        tmp = true;
        var t = typeof res;
        var isObj = t.toLowerCase() === 'object';
        var errTitle = void 0;
        if (isObj && res.prescript) {
            /* var ok can be changed to false in prescript execution */
            try {
                eval(res.prescript);
            }
            catch (e) {
                (0,_browser_error_js__WEBPACK_IMPORTED_MODULE_0__.error)(e.message || '');
            }
        }
        if (isObj && res.url === undefined) {
            res.url = url;
        }
        /* Case where a callback is defined */
        if (fn && (0,_type_isFunction_js__WEBPACK_IMPORTED_MODULE_1__.isFunction)(fn)) {
            tmp = fn(res, ele);
        }
        else {
            tmp = bbn.fn.defaultLinkFunction(res, ele);
        }
        if (ele && isObj && (res.content !== undefined)) {
            if ('value' in ele) {
                ele.value = res.content;
            }
            else {
                ele.innerHTML = res.content;
            }
        }
        if (tmp && isObj && res.script) {
            if (typeof (res.script) === 'function') {
                tmp = res.script(res.data ? res.data : {}, ele || null);
            }
            else {
                tmp = (function (data, ele) {
                    var r = null;
                    try {
                        r = eval(res.script);
                        if ((0,_type_isFunction_js__WEBPACK_IMPORTED_MODULE_1__.isFunction)(r)) {
                            r = r(data, ele);
                        }
                    }
                    catch (e) {
                        (0,_browser_log_js__WEBPACK_IMPORTED_MODULE_2__.log)(e, res);
                        (0,_browser_error_js__WEBPACK_IMPORTED_MODULE_0__.error)((0,_type_isFunction_js__WEBPACK_IMPORTED_MODULE_1__.isFunction)(e.getMessage) ? e.getMessage() : null);
                    }
                    return r;
                })(res.data ? res.data : {}, ele ? ele : false);
            }
        }
        /* Case where a callback is defined */
        if (tmp && fn2 && (0,_type_isFunction_js__WEBPACK_IMPORTED_MODULE_1__.isFunction)(fn2)) {
            fn2(res);
        }
        else if (isObj && bbn.fn.defaultPostLinkFunction) {
            bbn.fn.defaultPostLinkFunction(res, ele);
        }
        if (tmp && isObj && res.postscript) {
            eval(res.postscript);
        }
        if (isObj && res.error) {
            errTitle = res.errorTitle || bbn.lng.server_response;
            bbn.fn.defaultAlertFunction(res.error, errTitle);
        }
    }
    else {
        bbn.fn.defaultAlertFunction(bbn.lng.errorText, bbn.lng.error);
    }
    return tmp;
};



/***/ }),

/***/ "./dist/fn/ajax/download.js":
/*!**********************************!*\
  !*** ./dist/fn/ajax/download.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   download: () => (/* binding */ download)
/* harmony export */ });
/* harmony import */ var _ajax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajax.js */ "./dist/fn/ajax/ajax.js");
/* harmony import */ var _string_substr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../string/substr.js */ "./dist/fn/string/substr.js");
/* harmony import */ var _string_baseName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../string/baseName.js */ "./dist/fn/string/baseName.js");
/* harmony import */ var _type_isBlob_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../type/isBlob.js */ "./dist/fn/type/isBlob.js");
/* harmony import */ var _string_fileExt_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../string/fileExt.js */ "./dist/fn/string/fileExt.js");
/* harmony import */ var _downloadContent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./downloadContent.js */ "./dist/fn/ajax/downloadContent.js");






/**
 * Downloads a file with given filename from a URL.
 *
 * Gets the file's content as Blob through XHR, then sends it to bbn.fn.downloadContent.
 * __Attention__ The CORS policy applies
 *
 * @method   download
 * @global
 * @memberof bbn.fn
 *
 * @example
 * ```javascript
 * // Forcing the download of an image
 * bbn.fn.download('/bbn/js-title-black.png');
 *
 * // Forcing the download of a PDF
 * bbn.fn.download('/files/my-document.pdf');
 *
 * // Changing the name as it is downloaded
 * bbn.fn.download('/files/f4b1092d71aefd96458feaa71d170f69.pdf', 'myDocument_' + bbn.fn.dateSQL() + '.pdf');
 * ```
 *
 * @param    {String} url      The URL from which the file will be requested
 * @param    {String} filename The name for the downloaded file (otherwise it will take the basename of the url)
 * @param    {Object} params   A data object to send with the request
 *
 * @returns  {undefined}
 */
var download = function (url, filename, params) {
    if (filename === void 0) { filename = ''; }
    if (params === void 0) { params = null; }
    // We can intervert the arguments
    if (filename && typeof filename === "object") {
        params = filename;
        filename = "";
    }
    return (0,_ajax_js__WEBPACK_IMPORTED_MODULE_0__.ajax)(url, "blob", params || { _bbn_download: 1 }, function (d, headers) {
        if (!filename) {
            var prop = "content-disposition";
            var cd = "attachment; filename=";
            if ((headers === null || headers === void 0 ? void 0 : headers[prop]) && headers[prop].indexOf(cd) === 0) {
                filename = (0,_string_substr_js__WEBPACK_IMPORTED_MODULE_1__.substr)(headers[prop], cd.length + 1, headers[prop].length - cd.length - 2);
            }
            else {
                filename = (0,_string_baseName_js__WEBPACK_IMPORTED_MODULE_2__.baseName)(url);
            }
        }
        if ((0,_type_isBlob_js__WEBPACK_IMPORTED_MODULE_3__.isBlob)(d)) {
            var extension = (0,_string_fileExt_js__WEBPACK_IMPORTED_MODULE_4__.fileExt)(filename);
            var htmlExtensions = ["php", "html"];
            if (typeof filename === "string" &&
                (("type" in d && d.type !== "text/html") ||
                    htmlExtensions.includes(extension))) {
                (0,_downloadContent_js__WEBPACK_IMPORTED_MODULE_5__.downloadContent)(filename, d);
                return;
            }
        }
    }, function (e) {
        bbn.fn.defaultAjaxErrorFunction(e);
    });
};



/***/ }),

/***/ "./dist/fn/ajax/downloadContent.js":
/*!*****************************************!*\
  !*** ./dist/fn/ajax/downloadContent.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   downloadContent: () => (/* binding */ downloadContent)
/* harmony export */ });
/* harmony import */ var _type_isCanvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isCanvas.js */ "./dist/fn/type/isCanvas.js");
/* harmony import */ var _type_isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/isObject.js */ "./dist/fn/type/isObject.js");
/* harmony import */ var _type_isString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/isString.js */ "./dist/fn/type/isString.js");
/* harmony import */ var _browser_log_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../browser/log.js */ "./dist/fn/browser/log.js");




/**
 * Downloads a file with given filename from the given content.
 *
 * Creates a link putting in href a URL Object Blob made of the given content,
 * which can be a canvas, a file or a blob object, or just a string.
 *
 * @method   downloadContent
 * @global
 * @memberof bbn.fn
 *
 * @example
 * ```javascript
 * // Download from a string
 * bbn.fn.downloadContent('myTextFile.txt', 'Just a string\nThat we can save directly in a file', 'text/plain');
 *
 * // Download from a file
 * let file = new File(["foo"], "foo.txt", {type: "text/plain"});
 * bbn.fn.downloadContent('foo.txt', file);
 * ```
 *
 * @param    {String}                        filename The name for the downloaded file
 * @param    {HTMLCanvasElement|File|String} content  A Canvas, a File object or a String
 * @param    {String}                        type     The type of file to be made
 *
 * @returns  {undefined}
 */
var downloadContent = function (filename, content, type) {
    if (type === void 0) { type = null; }
    if ((0,_type_isCanvas_js__WEBPACK_IMPORTED_MODULE_0__.isCanvas)(content)) {
        content.toBlob(function (blob) {
            // blob ready, download it
            var a = document.createElement('a');
            a.download = filename;
            a.href = window.URL.createObjectURL(blob);
            a.className = 'bbn-no';
            a.click();
            // delete the internal blob reference, to let the browser clear memory from it
            window.URL.revokeObjectURL(a.href);
        }, type || 'image/png');
        return;
    }
    if (!type) {
        type = (0,_type_isObject_js__WEBPACK_IMPORTED_MODULE_1__.isObject)(content) && content.type ? content.type : 'octet/stream';
    }
    else if (type.indexOf('/') === -1) {
        type = 'text/' + type;
    }
    var a = window.document.createElement('a');
    a.className = 'bbn-no';
    var src = null;
    if ((0,_type_isString_js__WEBPACK_IMPORTED_MODULE_2__.isString)(content)) {
        src = new Blob([content], { type: type });
    }
    else {
        try {
            src = content;
        }
        catch (e) {
            (0,_browser_log_js__WEBPACK_IMPORTED_MODULE_3__.log)(e);
        }
    }
    a.href = window.URL.createObjectURL(src);
    a.download = filename;
    // Append anchor to body.
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(a.href);
    // Remove anchor from body
    document.body.removeChild(a);
};



/***/ }),

/***/ "./dist/fn/ajax/getLoader.js":
/*!***********************************!*\
  !*** ./dist/fn/ajax/getLoader.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLoader: () => (/* binding */ getLoader)
/* harmony export */ });
/* harmony import */ var _object_search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../object/search.js */ "./dist/fn/object/search.js");

/**
 * Finds the loader object corresponding to the given unique ID and returns it if found.
 *
 * The loader is an object representing an Ajax request, with the following properties:
 * * _key_ is the unique ID (_requestId_) of the loader
 * * _url_ is the URL called by the request
 * * _loader_ is the Promise from the Axios XHR
 * * _source_ is the source object for aborting the request
 * * _start_ is the timestamp of the moment the request was sent
 *
 * @method   getLoader
 * @global
 * @memberof bbn.fn
 *
 * @example
 * ```javascript
 * bbn.fn.post('my/script', {a: 1, b: 2});
 * let requestId = bbn.fn.getRequestId('my/script', {a: 1, b: 2});
 * if (requestId) {
 *   let loader = bbn.fn.getLoader(requestId);
 *   console.log(loader);
 *   // {
 *   //    key: "my/script:af27f0e81533ae2bae3c25dea67359f6",
 *   //    url: "my/script",
 *   //    loader: {Promise},
 *   //    source: {token: {CancelToken}, cancel: {Function}},
 *   //    start: 1591804716757
 *   // }
 * }
 * ```
 *
 * @param    {String} requestId The unique ID of the request as used in bbn.env.loaders
 *
 * @returns  {null|Object} The corresponding loader Object if it exists, false otherwise
 */
var getLoader = function (requestId) {
    var idx = (0,_object_search_js__WEBPACK_IMPORTED_MODULE_0__.search)(bbn.env.loaders, { key: requestId });
    if (idx > -1) {
        return bbn.env.loaders[idx];
    }
    return null;
};



/***/ }),

/***/ "./dist/fn/ajax/getRequestId.js":
/*!**************************************!*\
  !*** ./dist/fn/ajax/getRequestId.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRequestId: () => (/* binding */ getRequestId)
/* harmony export */ });
/* harmony import */ var _loop_iterate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loop/iterate.js */ "./dist/fn/loop/iterate.js");
/* harmony import */ var _string_md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../string/md5.js */ "./dist/fn/string/md5.js");


/**
 * Returns a unique ID for a "loader" based on the URL, the data keys and the datatype.
 *
 * The routing functions don't allow to send the same request at the same moment,
 * therefore a unique ID is generated to identify them, based on the URL,
 * the keys of the data sent, and the expected returned data type.
 *
 * @method   getRequestId
 * @global
 *
 * @example
 * ```javascript
 * // The URL is the first part of the key
 * bbn.fn.getRequestId('my/location', {a: 1, b: 2});
 * // my/location:af27f0e81533ae2bae3c25dea67359f6
 * bbn.fn.getRequestId('my/other/location', {a: 1, b: 2});
 * // my/other/location:af27f0e81533ae2bae3c25dea67359f6
 * ```
 *
 * @example
 * ```javascript
 * // A change of value will not change the requestId
 * bbn.fn.getRequestId('my/location', {a: 1, b: 3});
 * // my/location:af27f0e81533ae2bae3c25dea67359f6
 * // A change of key will
 * bbn.fn.getRequestId('my/location', {a: 1, c: 3});
 * // my/location:fde97ca7c6c998c911f4ab481a136d5f
 * ```
 *
 * @example
 * ```javascript
 * // Same with nested object
 * bbn.fn.getRequestId('my/location', {data: {a: 1, b: 3}});
 * // my/location:a7a58435275054106c4e4c9fb0cea5e5
 * bbn.fn.getRequestId('my/location', {data: {a: 1, b: 2}});
 * // my/location:a7a58435275054106c4e4c9fb0cea5e5
 * bbn.fn.getRequestId('my/location', {data: {a: 1, c: 3}});
 * // my/location:730da481e30d421afbadf1f1282dabb7
 * ```
 *
 * @memberof bbn.fn
 *
 * @param    {String} url      The URL used by the request
 * @param    {Object} data     The data sent to the URL
 * @param    {String} datatype The type of data requested (JSON by default)
 *
 * @returns  {String} The unique ID
 */
var getRequestId = function (url, data, datatype) {
    var d = {};
    if (data) {
        (0,_loop_iterate_js__WEBPACK_IMPORTED_MODULE_0__.iterate)(data, function (a, n) {
            if (n.indexOf('_bbn') === -1) {
                d[n] = a;
            }
        });
    }
    return url + ':' + (0,_string_md5_js__WEBPACK_IMPORTED_MODULE_1__.md5)((datatype || 'json') + JSON.stringify(d));
};



/***/ }),

/***/ "./dist/fn/ajax/link.js":
/*!******************************!*\
  !*** ./dist/fn/ajax/link.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   link: () => (/* binding */ link)
/* harmony export */ });
/* harmony import */ var _treatAjaxArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./treatAjaxArguments.js */ "./dist/fn/ajax/treatAjaxArguments.js");
/* harmony import */ var _getLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLoader.js */ "./dist/fn/ajax/getLoader.js");
/* harmony import */ var _ajax_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ajax.js */ "./dist/fn/ajax/ajax.js");
/* harmony import */ var _browser_log_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../browser/log.js */ "./dist/fn/browser/log.js");
/* harmony import */ var _object_extend_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../object/extend.js */ "./dist/fn/object/extend.js");
/* harmony import */ var _type_isObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../type/isObject.js */ "./dist/fn/type/isObject.js");
/* harmony import */ var _callback_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./callback.js */ "./dist/fn/ajax/callback.js");
/* harmony import */ var _setNavigationVars_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./setNavigationVars.js */ "./dist/fn/ajax/setNavigationVars.js");








/**
 * Follows a link and if needed by sending the corresponding Ajax request and executing bbn.fn.defaultPreLinkFunction.
 *
 * Once bbn has been initiated this function will be triggered every time a link is clicked.
 * It accepts the same arguments as seen in treatAjaxArguments but will tipically just be called with a URL,
 * the defaultLinkURL functions being in charge of loading the content
 *
 * @method   link
 * @todo     Manage anchors + returned data unclear
 * @global
 * @memberof bbn.fn
 *
 * @example
 * ```javascript
 * // Will open in a new window/tab
 * bbn.fn.link('https://nytimes.com');
 * // Will send an Ajax request
 * bbn.fn.link('my/page');
 * // Will open your default email program
 * bbn.fn.link('mailto:postmaster@test.com');
 * ```
 *
 * @returns
 */
var link = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var cfg = (0,_treatAjaxArguments_js__WEBPACK_IMPORTED_MODULE_0__.treatAjaxArguments)(args);
    var ok = 1;
    if (cfg === true) {
        return true;
    }
    /* If we can't find a correct link we load the current URL */
    if (!cfg) {
        return link(window.location.href);
    }
    /* Just executing the javascript if there is */
    if (cfg.url.indexOf('javascript:') === 0) {
        return true;
    }
    if (cfg.url.indexOf('data:') === 0) {
        return true;
    }
    if (cfg.url.indexOf('#') === 0) {
        location.href = bbn.env.url + cfg.url;
        /*
        if ( window.history ){
          bbn.env.historyDisabled = true;
          let state = h.state;
          window.history.replaceState(null, state.title, bbn.env.url);
        }
        bbn.env.historyDisabled = false;
        */
        return true;
    }
    else if (cfg.url.indexOf('mailto:') === 0) {
        /* Mail link */
        bbn.env.ignoreUnload = true;
        window.location.href = cfg.url;
        setTimeout(function () {
            bbn.env.ignoreUnload = false;
        }, 0);
        return false;
    }
    if ((0,_getLoader_js__WEBPACK_IMPORTED_MODULE_1__.getLoader)(cfg.url)) {
        return false;
    }
    /* Opens an external page in a new window */
    if ((cfg.url.indexOf('http://') === 0 || cfg.url.indexOf('https://') === 0) &&
        cfg.url.indexOf(bbn.env.host) !== 0) {
        if (cfg.e) {
            cfg.e.preventDefault();
        }
        window.open(cfg.url);
        return false;
    }
    else if (cfg.url !== bbn.env.params.join('/') || cfg.force === 1) {
        /* The URL is fine so go ahead if something is not already loading */
        /* If a second callback is defined, it is triggered instead of defaultPreLinkFunction */
        if (cfg.successFn) {
            ok = cfg.successFn(cfg.url);
        }
        else if (bbn.fn.defaultPreLinkFunction) {
            var tmp = bbn.fn.defaultPreLinkFunction(cfg.url, cfg.force, cfg.ele);
            if (tmp.data !== undefined) {
                (0,_object_extend_js__WEBPACK_IMPORTED_MODULE_4__.extend)(cfg.obj, tmp.data);
                ok = 1;
            }
            else {
                ok = tmp;
            }
        }
        if (ok) {
            if (ok !== 1 && typeof ok === 'string') {
                cfg.url = ok;
            }
            /** todo Do we keep obj in the unique string or do we make that only one concurrent connection to the same address can occur at the same time? */
            var errSt_1 = bbn._('The Ajax call to') + ' ' + cfg.url + ' ';
            return (0,_ajax_js__WEBPACK_IMPORTED_MODULE_2__.ajax)(cfg.url, cfg.datatype, cfg.obj, function (res) {
                if (!res) {
                    (0,_browser_log_js__WEBPACK_IMPORTED_MODULE_3__.log)(errSt_1 + bbn._('returned no answer'));
                }
                if ((0,_type_isObject_js__WEBPACK_IMPORTED_MODULE_5__.isObject)(res)) {
                    // If there's nothing in the result, just an empty object, the callback stops here and the URL is not changed
                    if (Object.keys(res).length === 0) {
                        (0,_browser_log_js__WEBPACK_IMPORTED_MODULE_3__.log)(errSt_1 + bbn._('returned an empty object'));
                    }
                    if (res.new_url) {
                        res.old_path = cfg.url;
                        cfg.url = res.new_url;
                    }
                    else if (res.url && cfg.url !== res.url) {
                        res.old_path = cfg.url;
                    }
                }
                if ((0,_callback_js__WEBPACK_IMPORTED_MODULE_6__.callback)(cfg.url, res, cfg.successFn, null, cfg.ele) && res.noNav === undefined) {
                    // This solution is not very clean (we can't shorten a URL)
                    if (bbn.env.path.indexOf(cfg.url) !== 0) {
                        (0,_setNavigationVars_js__WEBPACK_IMPORTED_MODULE_7__.setNavigationVars)(cfg.url, (res.title ? res.title + ' - ' : '') + bbn.env.siteTitle);
                    }
                }
            }, cfg.errorFn || null);
        }
    }
    return true;
};



/***/ }),

/***/ "./dist/fn/ajax/post.js":
/*!******************************!*\
  !*** ./dist/fn/ajax/post.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   post: () => (/* binding */ post)
/* harmony export */ });
/* harmony import */ var _treatAjaxArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./treatAjaxArguments.js */ "./dist/fn/ajax/treatAjaxArguments.js");
/* harmony import */ var _ajax_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajax.js */ "./dist/fn/ajax/ajax.js");
/* harmony import */ var _callback_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./callback.js */ "./dist/fn/ajax/callback.js");



/**
 * Creates a POST XHR through bbn.fn.ajax then launches bbn.fn.callback with the result.
 *
 * URL is the only mandatory argument (see treatAjaxArguments for the arguments).
 *
 * @method   post
 * @global
 * @memberof bbn.fn
 *
 * @example
 * ```javascript
 * bbn.fn.post('logout').then(() => {
 *   document.location.reload();
 * });
 * // With data
 * bbn.fn.post('login', {user: 'tn', pass: 'xxx'}).then((d) => {
 *  if (d && d.success) {
 *    alert('Welcome!');
 *  }
 * });
 * // With the callback as argument
 * bbn.fn.post('login', {user: 'tn', pass: 'xxx'}, (d) => {
 *  if (d && d.success) {
 *    alert('Welcome!');
 *  }
 * }, (err) => {
 *   bbn.fn.log(err);
 *   mySpecialErrorFunction(err);
 * });
 * ```
 *
 * @returns  {undefined|Promise}
 */
var post = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var cfg = (0,_treatAjaxArguments_js__WEBPACK_IMPORTED_MODULE_0__.treatAjaxArguments)(args);
    if (cfg.url) {
        return (0,_ajax_js__WEBPACK_IMPORTED_MODULE_1__.ajax)(cfg.url, cfg.datatype, cfg.obj, function (res) {
            (0,_callback_js__WEBPACK_IMPORTED_MODULE_2__.callback)(cfg.url, res, cfg.successFn, null, cfg.ele);
        }, cfg.errorFn, cfg.abortFn);
    }
};



/***/ }),

/***/ "./dist/fn/ajax/postOut.js":
/*!*********************************!*\
  !*** ./dist/fn/ajax/postOut.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   postOut: () => (/* binding */ postOut)
/* harmony export */ });
/* harmony import */ var _object_createObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../object/createObject.js */ "./dist/fn/object/createObject.js");
/* harmony import */ var _form_addInputs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form/addInputs.js */ "./dist/fn/form/addInputs.js");
/* harmony import */ var _object_setProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../object/setProperty.js */ "./dist/fn/object/setProperty.js");



/**
 * Posts a request in a new window.
 *
 * @method   postOut
 * @global
 * @memberof bbn.fn
 *
 * @example
 * ```javascript
 * bbn.fn.postOut('https://external-service.com/download/account-2019-06.pdf', {clientId: 547912, token: xxx});
 * ```
 *
 * @param    {String}   url     The url to which the request should be sent
 * @param    {Object}   data    The data to be sent
 * @param    {Function} success A function to execute in case of success
 * @param    {String}   target  The target attribute of the form
 *
 * @returns  {void}
 */
var postOut = function (url, data, success, target) {
    if (success === void 0) { success = null; }
    if (target === void 0) { target = ""; }
    var form = document.body.querySelector("form#bbn-form_out");
    if (!form) {
        form = document.createElement("form");
        form.classList.add("bbn-no");
        form.setAttribute("id", "bbn-form_out");
        form.setAttribute("method", "post");
        form.setAttribute("enctype", "multipart/form-data-encoded");
        (0,_object_setProperty_js__WEBPACK_IMPORTED_MODULE_2__.setProperty)(form, "style.display", "none");
        document.body.appendChild(form);
    }
    if (form instanceof HTMLFormElement) {
        form.innerHTML = "";
        form.setAttribute("action", url);
        form.setAttribute("target", target || "_blank");
        if (!data) {
            data = {};
        }
        data = (0,_object_createObject_js__WEBPACK_IMPORTED_MODULE_0__.createObject)(data);
        if (!data.bbn) {
            data.bbn = "public";
        }
        (0,_form_addInputs_js__WEBPACK_IMPORTED_MODULE_1__.addInputs)(form, data);
        form.submit();
        if (success) {
            success();
        }
    }
};



/***/ }),

/***/ "./dist/fn/ajax/setNavigationVars.js":
/*!*******************************************!*\
  !*** ./dist/fn/ajax/setNavigationVars.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setNavigationVars: () => (/* binding */ setNavigationVars)
/* harmony export */ });
/* harmony import */ var _string_substr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../string/substr.js */ "./dist/fn/string/substr.js");
/* harmony import */ var _object_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../object/filter.js */ "./dist/fn/object/filter.js");
/* harmony import */ var _object_extend_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../object/extend.js */ "./dist/fn/object/extend.js");
/* harmony import */ var _html_html2text_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../html/html2text.js */ "./dist/fn/html/html2text.js");




/**
 * Changes the URL and the associated variables and updates the history.
 *
 * @method   setNavigationVars
 * @todo     Add method description for setNavigationVars
 * @global
 * @memberof bbn.fn
 *
 * @example
 * ```javascript
 * // Changing URL
 * bbn.fn.setNavigationVars('my/page', 'My page');
 * // Replacing the previous state
 * bbn.fn.setNavigationVars('my/page/deeper', 'My deeper page', null, true);
 * ```
 *
 * @param    {String}  url   The URL which will become the location.href
 * @param    {String}  title The title corresponding to the given URL
 * @param    {Object}  data  The data if any
 * @param    {Boolean} repl  If true the history state object will replace the current one, will be added otherwise
 *
 * @returns  {void}
 */
var setNavigationVars = function (url, title, data, repl) {
    if (data === void 0) { data = null; }
    if (repl === void 0) { repl = false; }
    // Current path becomes old path
    bbn.env.old_path = bbn.env.path;
    // URL includes the domain
    bbn.env.url = ['https:/', 'http://'].includes((0,_string_substr_js__WEBPACK_IMPORTED_MODULE_0__.substr)(url, 0, 7)) ? url : bbn.env.root + url;
    // Path does not
    bbn.env.path = (0,_string_substr_js__WEBPACK_IMPORTED_MODULE_0__.substr)(bbn.env.url, bbn.env.root.length);
    // Params will include each part of the URL
    bbn.env.params = (0,_object_filter_js__WEBPACK_IMPORTED_MODULE_1__.filter)(bbn.env.path.split('/'), function (v) {
        return v !== '';
    });
    // Managing history
    var h = window.history;
    if (h) {
        // Current state
        var state = h.state;
        // Future state
        var obj = {
            url: bbn.env.path,
            old_path: bbn.env.old_path || null,
            data: data || {},
            reload: false
        };
        // If same URL we replace
        if (state && state.url === bbn.env.path) {
            if (state.data) {
                (0,_object_extend_js__WEBPACK_IMPORTED_MODULE_2__.extend)(obj.data, state.data);
            }
            if (state.title && !title) {
                title = state.title;
            }
            repl = true;
        }
        // If no title the global title
        if (!title) {
            title = bbn.env.siteTitle;
        }
        // Otherwise we add the global title at the end
        else {
            title = (0,_html_html2text_js__WEBPACK_IMPORTED_MODULE_3__.html2text)(title);
        }
        // Replacing state
        if (repl) {
            obj.reload = true;
            h.replaceState(obj, title, bbn.env.url);
        }
        // Adding state
        else {
            h.pushState(obj, title, bbn.env.url);
        }
    }
};



/***/ }),

/***/ "./dist/fn/ajax/treatAjaxArguments.js":
/*!********************************************!*\
  !*** ./dist/fn/ajax/treatAjaxArguments.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   treatAjaxArguments: () => (/* binding */ treatAjaxArguments)
/* harmony export */ });
/* harmony import */ var _type_isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isObject.js */ "./dist/fn/type/isObject.js");
/* harmony import */ var _type_isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/isFunction.js */ "./dist/fn/type/isFunction.js");
/* harmony import */ var _string_substr_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../string/substr.js */ "./dist/fn/string/substr.js");
/* harmony import */ var _object_numProperties_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../object/numProperties.js */ "./dist/fn/object/numProperties.js");




/**
 * Transforms unordered arguments into a configuratiuon object for Ajax shortcut functions.
 *
 * The final object will have the following arguments: url, obj, datatype, force, successFn,
 * errorFn, abortFn, e, and ele; The rules are:
 * * The first string found is the URL
 * * The second string found is the datatype
 * * The first function is successFn
 * * The second function is errorFn
 * * The third function is abortFn
 * * A boolean true is force
 * * An Event is e
 * * An HTML element is ele
 *
 * If no object is given the _bbn property will be added in order to always post something
 * and let the bbn server scripts know if a whole DOM is requested or a JSON answer
 *
 * @method   treatAjaxArguments
 * @global
 * @memberof bbn.fn
 *
 * @example
 * ```javascript
 * bbn.fn.treatAjaxArguments(['my/script', 'json', {a:1, b:2}, () => bbn.fn.log('Hi'), () => bbn.fn.log('Bye'), () => bbn.fn.log('Argh'), true])
 * // {
 * //   "url": "my/script",
 * //   "datatype": "json",
 * //   "obj": {
 * //     "a": 1,
 * //     "b": 2
 * //   },
 * //   "successFn": () => bbn.fn.log('Hi'),
 * //   "errorFn": () => bbn.fn.log('Bye'),
 * //   "abortFn": () => bbn.fn.log('Argh'),
 * //   "force": true
 * // }
 *
 * bbn.fn.treatAjaxArguments(['my/script?id=1'])
 * // {
 * //   "url": "my/script?id=1",
 * //   "obj": {
 * //     "_bbn": "public"
 * //   },
 * //   "datatype": "json"
 * // }
 * ```
 *
 * @param    {*}      args
 *
 * @returns  {Object} The configuration object
 */
var treatAjaxArguments = function (args) {
    var cfg = {};
    var t;
    var i;
    if ((0,_type_isObject_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(args[0]) && args.length === 1) {
        return args[0];
    }
    for (i = 0; i < args.length; i++) {
        t = typeof args[i];
        t = t.toLowerCase();
        /* Callbacks */
        if ((0,_type_isFunction_js__WEBPACK_IMPORTED_MODULE_1__.isFunction)(args[i])) {
            if (cfg["errorFn"] && !cfg["abortFn"]) {
                cfg["abortFn"] = args[i];
            }
            if (cfg["successFn"] && !cfg["errorFn"]) {
                cfg["errorFn"] = args[i];
            }
            else if (!cfg["successFn"]) {
                cfg["successFn"] = args[i];
            }
        }
        else if (args[i] === 1 || args[i] === true) {
            /* Force */
            cfg["force"] = true;
        }
        else if (t === "string") {
            if (!cfg["url"]) {
                /* Hash */
                if (args[i].indexOf("#") === 0 ||
                    args[i].indexOf(bbn.env.root + "#") === 0) {
                    cfg["url"] = (0,_string_substr_js__WEBPACK_IMPORTED_MODULE_2__.substr)(args[i], bbn.env.root.length);
                }
                else {
                    /* Link */
                    cfg["url"] = args[i];
                    if (cfg["url"].indexOf(bbn.env.root) === 0) {
                        cfg["url"] = (0,_string_substr_js__WEBPACK_IMPORTED_MODULE_2__.substr)(cfg["url"], bbn.env.root.length);
                    }
                }
            }
            else {
                /* Ajax datatype */
                cfg["datatype"] = args[i];
            }
        }
        else if (args[i] && t === "object") {
            /* Event */
            if (args[i] instanceof Event) {
                cfg["e"] = args[i];
            }
            else if (!cfg["ele"] && args[i].nodeType === 1) {
                /* HTML Element */
                cfg["ele"] = args[i];
            }
            else if (t.toLowerCase() === "object") {
                /* An object to post */
                cfg["obj"] = args[i];
            }
        }
    }
    if (!cfg["url"] && (0,_object_numProperties_js__WEBPACK_IMPORTED_MODULE_3__.numProperties)(cfg)) {
        cfg["url"] = bbn.env.path;
    }
    if (cfg["obj"] === undefined) {
        cfg["obj"] = { _bbn: "public" };
    }
    if (!cfg["datatype"]) {
        cfg["datatype"] = "json";
    }
    return cfg;
};



/***/ }),

/***/ "./dist/fn/ajax/upload.js":
/*!********************************!*\
  !*** ./dist/fn/ajax/upload.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   upload: () => (/* binding */ upload)
/* harmony export */ });
/* harmony import */ var _form_objectToFormData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form/objectToFormData.js */ "./dist/fn/form/objectToFormData.js");
/* harmony import */ var _browser_log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../browser/log.js */ "./dist/fn/browser/log.js");


/**
 * Uploads a file synchronously through an XHR indicating progress.
 *
 * @method   upload
 * @todo examples
 * @global
 * @memberof bbn.fn
 *
 * @param {String}   url      The URL to which the file should be uploaded
 * @param {File}     file     A File object or an array of data
 * @param {Function} success  A function to execute after success
 * @param {Function} failure  A function to execute after failure
 * @param {Function} progress A function to execute during progress
 *
 * @returns  {Promise}
 */
var upload = function (url, file, success, failure, progress) {
    if (success === void 0) { success = null; }
    if (failure === void 0) { failure = null; }
    if (progress === void 0) { progress = null; }
    var fn = function () {
        return axios.post(url || bbn.env.path, (0,_form_objectToFormData_js__WEBPACK_IMPORTED_MODULE_0__.objectToFormData)(file), {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            onUploadProgress: function (progressEvent) {
                if (progress) {
                    var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    progress(percentCompleted, progressEvent.loaded, progressEvent.total);
                }
            },
        });
    };
    if (!success && !failure) {
        return fn();
    }
    else {
        return fn()
            .then(function (res) {
            if (success) {
                (0,_browser_log_js__WEBPACK_IMPORTED_MODULE_1__.log)('SUCCESS', res);
                success(res);
            }
        })
            .catch(function (err) {
            if (failure) {
                (0,_browser_log_js__WEBPACK_IMPORTED_MODULE_1__.log)('ERROR', err);
                failure(err);
            }
        });
    }
};



/***/ }),

/***/ "./dist/fn/browser/copy.js":
/*!*********************************!*\
  !*** ./dist/fn/browser/copy.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copy: () => (/* binding */ copy)
/* harmony export */ });
/* harmony import */ var _type_isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isObject.js */ "./dist/fn/type/isObject.js");
/* harmony import */ var _type_isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/isFunction.js */ "./dist/fn/type/isFunction.js");


/**
 * Copies to the clipboard the value of the given string.
 * @method   copy
 * @global
 * ``` javascript
 * let myVal = 'the value you want to copy to clipbord';
 * bbn.fn.copy(myVal);
 *
 * ```
 * @memberof bbn.fn
 * @param {String} st The string to copy.
 * @returns
 */
var copy = function (st) {
    return new Promise(function (resolve) {
        var _a;
        if (st) {
            if (navigator && navigator.clipboard) {
                if (st instanceof Blob) {
                    navigator.clipboard.write([new ClipboardItem((_a = {}, _a[st.type.toString()] = st, _a))]).then(function () {
                        resolve(true);
                    });
                }
                else if ((0,_type_isObject_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(st) && (0,_type_isFunction_js__WEBPACK_IMPORTED_MODULE_1__.isFunction)(st.toBlob)) {
                    st.toBlob(function (blob) {
                        var _a;
                        navigator.clipboard.write([new ClipboardItem((_a = {}, _a[blob.type.toString()] = blob, _a))]).then(function () {
                            resolve(true);
                        });
                    });
                }
                else {
                    navigator.clipboard.writeText(st);
                    resolve(true);
                }
                return;
            }
            var input = document.createElement('textarea');
            input.style.opacity = '0';
            input.value = st;
            document.body.appendChild(input);
            input.select();
            document.execCommand('copy');
            document.body.removeChild(input);
            resolve(true);
        }
        resolve(false);
    });
};



/***/ }),

/***/ "./dist/fn/browser/eraseCookie.js":
/*!****************************************!*\
  !*** ./dist/fn/browser/eraseCookie.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eraseCookie: () => (/* binding */ eraseCookie)
/* harmony export */ });
/**
 * Erase the cookie corresponding to the given name;
 *
 * @method   eraseCookie
 * @global
 * @example
 * ``` javascript
 * // 'en'
 * bbn.fn.erase('lang');
 * ```
 * @memberof bbn.fn
 * @returns  {*}
 */
var eraseCookie = function (name) {
    document.cookie = name + '=; Max-Age=-99999999;';
};



/***/ }),

/***/ "./dist/fn/browser/error.js":
/*!**********************************!*\
  !*** ./dist/fn/browser/error.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   error: () => (/* binding */ error)
/* harmony export */ });
/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log.js */ "./dist/fn/browser/log.js");

/**
 * Throws an error.
 * @method   error
 * @global
 * @ignore
 * ``` javascript
 * bbn.fn.error('I log this error in console with a red background')
 * ```
 * @memberof bbn.fn
 * @param    {String} errorMsg
 * @returns
 */
var error = function (errorMsg) {
    if (arguments.length > 1) {
        var args = [];
        for (var i = 1; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
        args.unshift({
            _bbn_console_mode: 'error',
            _bbn_console_level: 1,
            _bbn_console_style: 'color: #E64141; background: #F7E195; font-size: 14px',
        });
        _log_js__WEBPACK_IMPORTED_MODULE_0__.log.apply(this, args);
    }
    throw new Error(errorMsg);
};



/***/ }),

/***/ "./dist/fn/browser/getBrowserName.js":
/*!*******************************************!*\
  !*** ./dist/fn/browser/getBrowserName.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBrowserName: () => (/* binding */ getBrowserName)
/* harmony export */ });
/**
 * Gets the browser's name
 * @method getBrowserName
 * @global
 * @memberof bbn.fn
 * @returns {String}
 */
var getBrowserName = function () {
    var userAgent = navigator.userAgent.toLowerCase();
    switch (true) {
        case userAgent.includes('edge'):
        case userAgent.includes('edg/'):
            return 'Edge';
        case userAgent.includes('opr') && !!window['opr']:
            return 'Opera';
        case userAgent.includes('chrome') && !!window['chrome']:
            return 'Chrome';
        case userAgent.includes('trident'):
            return 'Internet Explorer';
        case userAgent.includes('firefox'):
            return 'Firefox';
        case userAgent.includes('safari'):
            return 'Safari';
        default:
            return 'Other';
    }
};



/***/ }),

/***/ "./dist/fn/browser/getBrowserVersion.js":
/*!**********************************************!*\
  !*** ./dist/fn/browser/getBrowserVersion.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBrowserVersion: () => (/* binding */ getBrowserVersion)
/* harmony export */ });
/**
 * Gets the browser's version
 * @method getBrowserVersion
 * @global
 * @memberof bbn.fn
 * @returns {String}
 */
var getBrowserVersion = function () {
    var userAgent = navigator.userAgent.toLowerCase();
    switch (true) {
        case userAgent.includes('edge/'):
            return userAgent.split('edge/')[1].split(' ')[0];
        case userAgent.includes('edg/'):
            return userAgent.split('edg/')[1].split(' ')[0];
        case userAgent.includes('opr/') && !!window['opr']:
            return userAgent.split('opr/')[1].split(' ')[0];
        case userAgent.includes('chrome/') && !!window['chrome']:
            return userAgent.split('chrome/')[1].split(' ')[0];
        case userAgent.includes('trident/'):
            return userAgent.split('trident/')[1].split(' ')[0];
        case userAgent.includes('firefox/'):
            return userAgent.split('firefox/')[1].split(' ')[0];
        case userAgent.includes('safari/'):
            return userAgent.split('version/')[1].split(' ')[0];
        default:
            return '';
    }
};



/***/ }),

/***/ "./dist/fn/browser/getCookie.js":
/*!**************************************!*\
  !*** ./dist/fn/browser/getCookie.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCookie: () => (/* binding */ getCookie)
/* harmony export */ });
/**
 * If it exsists returns the cookie corresponding to the given name.
 *
 * @method   getCookie
 * @example
 * ``` javascript
 * // 'en'
 * bbn.fn.getCookie('lang');
 * ```
 * @global
 * @memberof bbn.fn
 * @param    {String} name
 * @returns
 */
var getCookie = function (name) {
    var nameEqual = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEqual) == 0) {
            var st = c.substring(nameEqual.length, c.length);
            if (st) {
                return JSON.parse(unescape(st)).value;
            }
        }
    }
    return null;
};



/***/ }),

/***/ "./dist/fn/browser/getDeviceType.js":
/*!******************************************!*\
  !*** ./dist/fn/browser/getDeviceType.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDeviceType: () => (/* binding */ getDeviceType)
/* harmony export */ });
/**
 * Returns the current device type.
 * @method   getDeviceType
 * @global
 * @example
 * ``` javascript
 * bbn.fn.getDeviceType();
 * // mobile
 * ```
 * @memberof bbn.fn
 * @returns  {String}
 */
var getDeviceType = function () {
    var userAgent = navigator.userAgent.toLowerCase();
    if (/iPhone|Android/i.test(navigator.userAgent)) {
        return 'mobile';
    }
    if (/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent)) {
        return 'tablet';
    }
    return 'desktop';
};



/***/ }),

/***/ "./dist/fn/browser/getEventData.js":
/*!*****************************************!*\
  !*** ./dist/fn/browser/getEventData.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEventData: () => (/* binding */ getEventData)
/* harmony export */ });
/* harmony import */ var _html_getHTMLOfSelection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../html/getHTMLOfSelection.js */ "./dist/fn/html/getHTMLOfSelection.js");
/* harmony import */ var _loop_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loop/each.js */ "./dist/fn/loop/each.js");


/**
 * Returns a promise having the event's data as argument.
 * @method   getEventData
 * @global
 * @example
 * ``` javascript
 * let type = e.type;
 *   bbn.fn.getEventData(e).then((data) => {
 *     bbn.fn.log("DATA FROM " + type, data);
 *   });
 * ```
 * @memberof bbn.fn
 * @returns  {Promise}
 */
var getEventData = function (e) {
    var dt = e.dataTransfer || e.clipboardData;
    var t = dt.getData('Text');
    var res = { raw: t, files: [], str: [] };
    var p = new Promise(function (ok, err) {
        var done = !(dt instanceof DataTransfer);
        if (!t && e.type === 'copy') {
            var sel = window.getSelection();
            res.raw = sel.toString();
            var html = (0,_html_getHTMLOfSelection_js__WEBPACK_IMPORTED_MODULE_0__.getHTMLOfSelection)();
            res.str.push({
                type: 'text/plain',
                data: res.raw,
            });
            if (html !== res.raw) {
                res.str.push({
                    type: 'text/html',
                    data: html,
                });
            }
            else if (res.raw.trim().indexOf('<') === 0) {
                res.str.push({
                    type: 'text/html',
                    data: "<meta charset='utf-8'><code style=\"white-space: pre; font-family: 'Courier New', sans-serif\">\n" +
                        res.raw +
                        '\n</code>',
                });
            }
            done = true;
            ok(res);
        }
        if (!done) {
            var strings_1 = [];
            var num_1 = dt.items.length;
            (0,_loop_each_js__WEBPACK_IMPORTED_MODULE_1__.each)(dt.items, function (item, idx) {
                var kind = item.kind;
                var type = item.type;
                if (kind === 'file') {
                    var cp = dt.files[idx];
                    if (!type && cp.name) {
                        var bits = cp.name.split('.');
                        type = bits[bits.length - 1];
                    }
                    var name_1 = cp ? cp.name : bbn._('untitled');
                    var size = cp ? cp.size : null;
                    var lastModified = cp ? cp.lastModified : null;
                    var blob = item.getAsFile();
                    if (blob) {
                        done = true;
                        num_1--;
                        res.files.push({
                            type: type,
                            data: blob,
                            name: name_1,
                            size: size,
                            mdate: lastModified,
                        });
                        strings_1.push(name_1);
                        if (!num_1) {
                            if (!res.raw) {
                                res.raw = strings_1.join(', ');
                            }
                            ok(res);
                        }
                    }
                    else {
                        bbn.fn.defaultErrorFunction(bbn._('Impossible to read the file') + ' ' + name_1);
                    }
                }
                else {
                    done = true;
                    item.getAsString(function (data) {
                        num_1--;
                        res.str.push({
                            type: type,
                            data: data,
                        });
                        if (type === 'text/plain') {
                            strings_1.push(name);
                        }
                        if (!num_1) {
                            if (!res.raw) {
                                res.raw = strings_1.join(', ');
                            }
                            ok(res);
                        }
                    });
                }
            });
        }
        if (!done) {
            setTimeout(function () {
                ok(res);
            });
        }
    });
    return p;
};



/***/ }),

/***/ "./dist/fn/browser/happy.js":
/*!**********************************!*\
  !*** ./dist/fn/browser/happy.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   happy: () => (/* binding */ happy)
/* harmony export */ });
/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log.js */ "./dist/fn/browser/log.js");

/**
 * Logs the given argument in the browser's console highlighting it with a green background.
 * @method   happy
 * @global
 * @example
 * ``` javascript
 * bbn.fn.happy('I want to log the success of my function');
 * ```
 * @memberof bbn.fn
 * @param    {...any} args
 * @returns
 */
var happy = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    args.unshift({
        _bbn_console_level: 3,
        _bbn_console_style: 'color: white; background: green; font-size: 18px;',
    });
    _log_js__WEBPACK_IMPORTED_MODULE_0__.log.apply(this, args);
    return this;
};



/***/ }),

/***/ "./dist/fn/browser/history.js":
/*!************************************!*\
  !*** ./dist/fn/browser/history.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   history: () => (/* binding */ history)
/* harmony export */ });
var history = function () {
    return window.history || false;
};



/***/ }),

/***/ "./dist/fn/browser/info.js":
/*!*********************************!*\
  !*** ./dist/fn/browser/info.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   info: () => (/* binding */ info)
/* harmony export */ });
/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log.js */ "./dist/fn/browser/log.js");

/**
 * Logs the given argument in the browser's console highlighting it with a blue background.
 * @method   info
 * @global
 * @memberof bbn.fn
 * @param    {...any} args
 * @returns  {*}
 */
var info = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    args.unshift({
        //_bbn_console_mode: "info",
        _bbn_console_level: 4,
        _bbn_console_style: 'color: #EEE; background: blue; font-size: 12px;',
    });
    _log_js__WEBPACK_IMPORTED_MODULE_0__.log.apply(this, args);
    return this;
};



/***/ }),

/***/ "./dist/fn/browser/isActiveInterface.js":
/*!**********************************************!*\
  !*** ./dist/fn/browser/isActiveInterface.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isActiveInterface: () => (/* binding */ isActiveInterface)
/* harmony export */ });
/**
 * Tells if the interface is beeing active for the past x seconds.
 * @method   isActiveInterface
 * @global
 * @example
 * // true
 * ``` javascript
 * bbn.fn.isActiveInterface(54764654);
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
var isActiveInterface = function (secs) {
    if (secs === void 0) { secs = 600; }
    if (!bbn.env.last_focus) {
        return false;
    }
    var t = new Date().getTime();
    return t - bbn.env.last_focus < secs * 1000;
};



/***/ }),

/***/ "./dist/fn/browser/isDesktopDevice.js":
/*!********************************************!*\
  !*** ./dist/fn/browser/isDesktopDevice.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isDesktopDevice: () => (/* binding */ isDesktopDevice)
/* harmony export */ });
/* harmony import */ var _browser_getDeviceType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../browser/getDeviceType.js */ "./dist/fn/browser/getDeviceType.js");

/**
 * Returns true if the current device type is a desktop.
 * @method   isDesktopDevice
 * @global
 * @example
 * ``` javascript
 * bbn.fn.isDesktopDevice();
 * // true
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
var isDesktopDevice = function () {
    return (0,_browser_getDeviceType_js__WEBPACK_IMPORTED_MODULE_0__.getDeviceType)() === 'desktop';
};



/***/ }),

/***/ "./dist/fn/browser/isFocused.js":
/*!**************************************!*\
  !*** ./dist/fn/browser/isFocused.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFocused: () => (/* binding */ isFocused)
/* harmony export */ });
/**
 * Checks whether the given elemet is focused or not.
 *
 * @method   isFocused
 * @global
 * @example
 * ``` javascript
 * bbn.fn.isFocused(document.getElementById('input_name'));
 * // false
 * bbn.fn.isFocused(bbn.sel('.container'));
 * // true
 * ```
 * @memberof bbn.fn
 *
 * @param {Element} ele     The element to be checked for focus
 * @param {Boolean} contain If true will check if the focused element is contained in the given element
 *
 * @returns  {Boolean} True if focused
 */
var isFocused = function (ele, contain) {
    if (contain === void 0) { contain = false; }
    return ele === document.activeElement || (contain && ele.contains && ele.contains(document.activeElement));
};



/***/ }),

/***/ "./dist/fn/browser/isMobile.js":
/*!*************************************!*\
  !*** ./dist/fn/browser/isMobile.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isMobile: () => (/* binding */ isMobile)
/* harmony export */ });
/* harmony import */ var _isMobileDevice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isMobileDevice.js */ "./dist/fn/browser/isMobileDevice.js");
/* harmony import */ var _isTabletDevice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isTabletDevice.js */ "./dist/fn/browser/isTabletDevice.js");


/**
 * Returns true if the current browser is on a mobile device (smartphone or tablet).
 * @method   isMobile
 * @global
 * @example
 * ``` javascript
 * bbn.fn.isMobile();
 * // false
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
var isMobile = function () {
    return (0,_isMobileDevice_js__WEBPACK_IMPORTED_MODULE_0__.isMobileDevice)() || (0,_isTabletDevice_js__WEBPACK_IMPORTED_MODULE_1__.isTabletDevice)();
};



/***/ }),

/***/ "./dist/fn/browser/isMobileDevice.js":
/*!*******************************************!*\
  !*** ./dist/fn/browser/isMobileDevice.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isMobileDevice: () => (/* binding */ isMobileDevice)
/* harmony export */ });
/* harmony import */ var _browser_getDeviceType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../browser/getDeviceType.js */ "./dist/fn/browser/getDeviceType.js");

var isMobileDevice = function () {
    return (0,_browser_getDeviceType_js__WEBPACK_IMPORTED_MODULE_0__.getDeviceType)() === 'mobile';
};



/***/ }),

/***/ "./dist/fn/browser/isTabletDevice.js":
/*!*******************************************!*\
  !*** ./dist/fn/browser/isTabletDevice.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isTabletDevice: () => (/* binding */ isTabletDevice)
/* harmony export */ });
/* harmony import */ var _browser_getDeviceType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../browser/getDeviceType.js */ "./dist/fn/browser/getDeviceType.js");

/**
  * Returns true if the current device type is a tablet.
  * @method   isTabletDevice
  * @global
  * @example
  * ``` javascript
  * bbn.fn.isTabletDevice();
  * // false
  * ```
  * @memberof bbn.fn
  * @returns  {Boolean}
  */
var isTabletDevice = function () {
    return (0,_browser_getDeviceType_js__WEBPACK_IMPORTED_MODULE_0__.getDeviceType)() === 'tablet';
};



/***/ }),

/***/ "./dist/fn/browser/log.js":
/*!********************************!*\
  !*** ./dist/fn/browser/log.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   log: () => (/* binding */ log)
/* harmony export */ });
/* harmony import */ var _type_isFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isFunction.js */ "./dist/fn/type/isFunction.js");

/**
 * Logs the given arguments in the browser's console.
 * @method   log
 * @global
 * @example
 * ```javascript
 * //'hello'
 * bbn.fn.log('hello');
 * ```
 * @memberof bbn.fn
 * @param    {...any} args
 * @returns
 */
var log = function () {
    var _a, _b;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (window.console !== undefined) {
        var cfg = void 0;
        var level = 5;
        var fn = 'log';
        if (args[0] && typeof args[0] === 'object' && args[0]._bbn_console_style) {
            if (args[0]._bbn_console_mode && (0,_type_isFunction_js__WEBPACK_IMPORTED_MODULE_0__.isFunction)(console[args[0]._bbn_console_mode])) {
                fn = args[0]._bbn_console_mode;
            }
            else {
                cfg = args[0]._bbn_console_style;
                level = args[0]._bbn_console_level;
            }
            args.shift();
        }
        var exec = window.console[fn];
        if (((_b = (_a = window['bbn']) === null || _a === void 0 ? void 0 : _a.env) === null || _b === void 0 ? void 0 : _b.loggingLevel) >= level) {
            var i = 0;
            while (i < args.length) {
                var t = typeof args[i];
                var consoleArguments = [args[i]];
                if (t === 'string' || t === 'number') {
                    consoleArguments.unshift('%c %s ', cfg);
                }
                exec.apply(window.console, consoleArguments);
                i++;
            }
        }
    }
    return this;
};



/***/ }),

/***/ "./dist/fn/browser/replaceSelection.js":
/*!*********************************************!*\
  !*** ./dist/fn/browser/replaceSelection.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   replaceSelection: () => (/* binding */ replaceSelection)
/* harmony export */ });
var replaceSelection = function (html, selectInserted) {
    var sel, range, fragment;
    sel = window.getSelection();
    // Test that the Selection object contains at least one Range
    if (sel.getRangeAt && sel.rangeCount) {
        // Get the first Range (only Firefox supports more than one)
        range = window.getSelection().getRangeAt(0);
        range.deleteContents();
        // Create a DocumentFragment to insert and populate it with HTML
        // Need to test for the existence of range.createContextualFragment
        // because it's non-standard and IE 9 does not support it
        if (range.createContextualFragment) {
            fragment = range.createContextualFragment(html);
        }
        else {
            // In IE 9 we need to use innerHTML of a temporary element
            var div = document.createElement('div');
            var child = void 0;
            div.innerHTML = html;
            fragment = document.createDocumentFragment();
            while ((child = div.firstChild)) {
                fragment.appendChild(child);
            }
        }
        var firstInsertedNode = fragment.firstChild;
        var lastInsertedNode = fragment.lastChild;
        range.insertNode(fragment);
        sel.removeAllRanges();
        if (selectInserted) {
            if (firstInsertedNode) {
                range.setStartBefore(firstInsertedNode);
                range.setEndAfter(lastInsertedNode);
            }
            sel.addRange(range);
        }
        else {
            range.setStartAfter(lastInsertedNode);
            sel.addRange(range);
        }
    }
};



/***/ }),

/***/ "./dist/fn/browser/selectElementText.js":
/*!**********************************************!*\
  !*** ./dist/fn/browser/selectElementText.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectElementText: () => (/* binding */ selectElementText)
/* harmony export */ });
/**
 * Selects the content of an element.
 *
 * @method   selectElementText
 * @global
 * @example
 * ``` javascript
 * bbn.fn.selectElementText(document.getElementById('my_input_id'));
 * // false
 * bbn.fn.selectElementText(bbn.$('#my_span_id'));
 * // true
 * ```
 * @memberof bbn.fn
 *
 * @param {Element} ele The element in which the text should be selected
 * @param {Boolean} win The window object
 *
 * @returns  {Boolean} True if focused
 */
var selectElementText = function (ele, win) {
    if (win === void 0) { win = null; }
    win = win || window;
    if (ele instanceof HTMLInputElement) {
        ele.select();
        return;
    }
    var doc = win.document;
    var sel;
    var range;
    if (win.getSelection && doc.createRange) {
        sel = win.getSelection();
        range = doc.createRange();
        range.selectNodeContents(ele);
        sel.removeAllRanges();
        sel.addRange(range);
    }
    else if (('createTextRange' in doc.body) && (typeof doc.body.createTextRange === 'function')) {
        range = doc.body.createTextRange();
        range.moveToElementText(ele);
        range.select();
    }
};



/***/ }),

/***/ "./dist/fn/browser/setCookie.js":
/*!**************************************!*\
  !*** ./dist/fn/browser/setCookie.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setCookie: () => (/* binding */ setCookie)
/* harmony export */ });
/**
 * Creates a cookie and assigns it to document.cookie.
 * @method   setCookie
 * @global
 * @example
 * ``` javascript
 * bbn.fn.setCookie('lang', 'en', 2);
 * ```
 * @memberof bbn.fn
 * @param    {String} name  The name of the cookie.
 * @param    {String} value The value of the cookie.
 * @param    {Number} days  The days before expiration of the cookie.
 * @returns
 */
var setCookie = function (name, value, days) {
    var expires = '';
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = '; expires=' + date.toUTCString();
    }
    var st = escape(JSON.stringify({ value: value }));
    document.cookie = name + '=' + st + expires + '; path=/';
};



/***/ }),

/***/ "./dist/fn/browser/toggleFullScreen.js":
/*!*********************************************!*\
  !*** ./dist/fn/browser/toggleFullScreen.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggleFullScreen: () => (/* binding */ toggleFullScreen)
/* harmony export */ });
/* harmony import */ var _style_resize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/resize.js */ "./dist/fn/style/resize.js");

var toggleFullScreen = function () {
    if ('mozRequestFullScreen' in window.document.documentElement) {
        if (window.document['mozFullScreen']) {
            window.document['mozCancelFullScreen']();
        }
        else if (typeof window.document.documentElement.mozRequestFullScreen === 'function') {
            window.document.documentElement.mozRequestFullScreen();
        }
    }
    else if ('webkitRequestFullScreen' in window.document.documentElement) {
        if (window.document['webkitIsFullScreen']) {
            window.document['webkitCancelFullScreen']();
        }
        else if (typeof window.document.documentElement.webkitRequestFullScreen === 'function') {
            window.document.documentElement.webkitRequestFullScreen();
        }
    }
    else if ('msRequestFullScreen' in window.document.documentElement) {
        if (window.document['msFullscreenEnabled']) {
            window.document['msExitFullscreen']();
        }
        else if (typeof window.document.documentElement.msRequestFullScreen === 'function') {
            window.document.documentElement.msRequestFullScreen();
        }
    }
    else if ('requestFullscreen' in window.document) {
        if (window.document.fullscreenEnabled) {
            window.document.exitFullscreen();
        }
        else {
            window.document.documentElement.requestFullscreen();
        }
    }
    setTimeout(function () {
        (0,_style_resize_js__WEBPACK_IMPORTED_MODULE_0__.resize)();
    }, 0);
};



/***/ }),

/***/ "./dist/fn/browser/warning.js":
/*!************************************!*\
  !*** ./dist/fn/browser/warning.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   warning: () => (/* binding */ warning)
/* harmony export */ });
/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log.js */ "./dist/fn/browser/log.js");

/**
 * Logs the given argument in the browser's console highlighting it with a yellow background and red color.
 * @method   warning
 * @global
 * @example
 * ```javascript
 * bbn.fn.warning('whatever you want to log as a warning');
 * ```
 * @memberof bbn.fn
 * @param    {...any} args
 * @returns
 */
var warning = function (message) {
    var args = ['BBN: ' + message];
    var obj = {
        _bbn_console_mode: 'warn',
        _bbn_console_level: 2,
        _bbn_console_style: 'color: #E64141; background: #F7E195; font-size: 14px',
    };
    args.unshift(obj);
    _log_js__WEBPACK_IMPORTED_MODULE_0__.log.apply(this, args);
};



/***/ }),

/***/ "./dist/fn/convert/arrayBuffer2String.js":
/*!***********************************************!*\
  !*** ./dist/fn/convert/arrayBuffer2String.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrayBuffer2String: () => (/* binding */ arrayBuffer2String)
/* harmony export */ });
var arrayBuffer2String = function (buf) {
    return String.fromCharCode.apply(null, new Uint16Array(buf));
};



/***/ }),

/***/ "./dist/fn/convert/canvasToImage.js":
/*!******************************************!*\
  !*** ./dist/fn/convert/canvasToImage.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canvasToImage: () => (/* binding */ canvasToImage)
/* harmony export */ });
/**
 * Returns a canvas in a HTML element img
 * @method   canvasToImage
 * @global
 * ``` javascript
 * //<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAgCAYAAABO6BuSAAAUzUlEQVRYRz2ZWXBc95Xef/f27Xtv7w000AsaADdwh0iKlETRtrbYpi3ZsZNUJaOZcs2MPQ95SSaVrSqVqrykUqmkKp4lNfMwM/Ikk1lijxyrrLEkW5QtS6LMVQt3guAGEGiggUbv611T54+xu6rJJtG493/O+b7vfOdc7RuxUmhGoxiageYF6B5E0dFCndD30cKAqGXg+z66pWOnEnRHPYpTBV7+1m+hj2X5P//7L+jeqRBrjUj1QoqRNLrvE8XCwyCMRhgRMHJHRAiIYxJDJ4K8Qhz5GWBkEhC3WFlbYVdhGqfeJuVHsQPUdzU0PM3CsyJ4tklogE2A6zpomkY0ZhOJ6nhaSBjRiVombuCqu/zypf3PL/yTMBKJoPsa/sjBH3rgBwQjF9d16TRbGJbBYNij2WsT6iFDd8gLp7/Ar3/zN/GSMVpbLb73R6/QWVylGMQY1hpMmuOMHBcHjT4OHpCIJcjEEliBRtAf4DsOqWSGdr/HyAwZRaA56hOPx0noUZIYxAYhtgemrxNqOkHE+FXAkgVTCwlch1CPqMJEDANfRwVsmFGCwCMMQ/UOggDtR//6P4a6rqP7EDgumgdaCHg+nuOqyvphQK/XoTPsEUvY1DsNTn/5y+w8uAd9PKO+f/uDy7z//TcZrdSwHQ2n45BIp3ElYF8C1ojqEXAc/N6QGBFSsTgjb8Sm28C0UoxPFbDTGY7Mz3Pr8qe0KxtMECPmhBiehh6CF4ngRyO4UR1NA9330AMfLRJVAUuQEqwe3f4ssW0H620H/Np/+E+hwEEPQgIvwAx1LIE4xt9nRyMMfQICvMAlOZaiUq3w+S9+ga1+m5nD++i02+QzBRZ++iFnX38bYwROb0TUjrHV6+GGPm4YbCfS8dAdh1hgYBkRuqMBVirGrkP7OXj0KOUds8QnClx6/U0+fPMM8UFIwgXLEwpohJoEbBAYusJ5OmKhE4D8qQUEoYaPJMBAi0DMToAWCEkVqrXv/5f/HIZBgDdycEceJjp21CSiRQh9D0KNqGmgR3Vanaa6SavT4uXf+HXabp9qr0EymSQVmhST41z78BKfXviUfL5IbWuLmX1zdAd9esOBuu5kKosVQm2pwtLSQ1zdZ+7wQeYOHSBXKJJIJakuV1i+vcjP/t8bUOuRcMB2NSIBBBoEuo6no3ib0AzMiIFhmEQimqq0YUYwTVv9WxKhS24ExbqO9vZ3/vhXAXuOCI1U2EYHfNdTMBTOur5DvVUnYuhKGL74pdMMQ5fYWBJDkrFeRxv6dDebvP3jM3z80RXFpcT4OC4BumEwOZZlZ2GKQnacWKDjuyP2zB8gVyqgm1Fc31fJ21qvkcLi0jvv0bhbwR4FRPoefn/E0BkxkLfr4PshfndEzDAxDEFkgE+oPkej23CWZAiktVBTXNXO/fCvBGiEfoAWaOoLZsRUwY5GI9zhSAmWF3pKZS0rSiwZozhVUhCPxqNAQC41xvK9hwollco6r73+JnrMZBh4dIcDBSdLbt4dYnge+6d3Mj9/iGe++CxO4NF3XFw/JJMZI5fIovVd7l25QT6awRz66AMfdzBkNBhuB+06eJ5HMPQx9CiO49BsNmk3mgyHQ/UzeacSSXwRz6HLyBmgXfjxdxWHJQMiChHNUH8PekP6vY66kG2bZLMZVeXBaEgqlSCejpPPT7CyusRseUrdtFarce4XF1l8+JBWr8+Z994lm5+gVt/Ctm1mSmVioQ6DIY8fOMwLzz9DOpdR7SU7llO867UH7JiaZfHGAr2NJtlIDNuPIJgT9ClYahqBgiuM+h521FKf+/2+SoigU4mVD51Oh2F/QLfVpdtuoV1977VQSi6V6Xe6DPtD1ZaEE9GIQSqVYqu+iWWZmKYhlFZipkU1ds6WWVpcIJtJEYsnGToe12/eYml1lbfefYfKxiaT5RJ3794nk0kxv28fq/cesnuqzKkTT1IuFnj+hc8qfnt+oEROojcjUT4+9zFxw8bWTEbtHk5/SMKyFVRFQwS6k/kCth0nYpjYpqUq22q0MXSdRCwOfkjMklRp+I7PcNRHu3X270LJQrvdVYFKr5Q+GCGiILGy/IioGaFQyBONRhgMBmzUqgShx7HHDnPrysdkUkl27Znj+u0F7j5cYml1hffPn1OGQoLodLt02k12l6fZXF2jPDnJP//m72CbOsXCBPv375Wz0ZF2ZafYXK/x0zM/wx0GtBttVbVBt690NhLRGbkOZsykWCpTmpkhm82qt7TRfqdPzLaZyOSwLIt0LKXi8F1ftVjt5s9fD4Xsnucr3gYBGJquVE4CfLS0jB0zyWTSCtry3WvXr7C4uMDeXTthNGRu107agwEeIWubNWrNOj95910erVbYtXs316/f4qknj7F8/z4bK22+8qXPUMwXmD+wl3w+zdHHDrO50WCr0aGQn+LDDy/w8/fOMhx4tNpdwhDava6CbBhKe/QV2jK5cdK5HIVCgVK+QDKeIJPKMF2aojRZVAFLe5UieW6AaZpo1376WigwsaKWykCvN8AZDIlEosRiMfXlmGUqJTYM6YQBZ8++zwcffMBMKc9sqcBnnz6llDhi2bz2xt9R3rGDv/6b7zI1M836+jr1zRqF/ARWJMLqoxVeeO4ZJsbHmCpOUi7lsE2DtUoVy0pQzM/w6g9+yK3bi3T6DoOhCKON4/r0hj3FX1/6ujdSajzyHdLpNKlkkuJkkaOH5jl04DCTuQlipo1kq9PuEYaa6gDatTOvhYL9AE0Ji23FFeal0mI4JKvZdBLD0BkM+wz7PS5eOs+1K1fZN7ebmVJBZS4/VeLR2hrvnn2fr339H/PK//pzXnjh83zvr/6G9UqFbDrF/n1zrK2s8OJLX1Ktbv7QfvxRF2c0UM46m5nAGYX86I23qTc6rKxv0h6MlH/3xVCEHrGYhR7RGI0GBL67rSeapooUtxMc3n+A/XsPsHNmlumpGZLJFMPeUImY6JH2yVuvho4nBlvfhkDEVBeIx5MqI5IM35VM9+iJyumw/PABN2/eZHwsQ7O+Qahr9EdDDDtGIptmLJtT6BAH9nDxHjeuXuPpkycZz2a4fuMqJ04c560zb/HM506yY7ZILGqQScq1ely9coubN+8ycAPuL6+gW3GMmMXI93B9D9uMoimP6WHo0l1cdC2kudVkNPDJpVMU8nkeP/I4zz/7HIVCCV8cpGkrbdI++ckPQjEFsVgCGSL6/aEKMplIMTGZU9Vr1bfo9Tu4oyF2zKJR2+TcuXOsr1dYfLDIY0eOELUtJosldbBLlz7iX/3L32Xt0Qp/9Ad/yEyxyOPHjnHyySdY31hjbWMND5/sWBJNG5FOxDF1m5WlClc/uclmrcX9BxVagyH56WmVSMd1GTgDQt9lNOyj+yHZVBycIVZEo91s4zkOlljNEOYPPcbXvvaP2Lf3AJZlq/iEutrt998KhbsSWCKVUdXt9Xo4jqcSoIge+IonoszOcMDa2hpn33+P24t32HfoIENnwLPPP8dGrcathZu4jsOTxx9nZnqaP/79P1SW8tf+6T9jc3OTO3cX+fjKp6zXqszuKLN3bppkPIahmYg1a9S7rK3Xef1HP8OwDYrlaWKppDqLJz6g16XbbCirWMiNYRIgtnrU6xONbLenRm2LwmSRF09/ic997lmS6SyJRBIEEa2Fj8J6va4a99hYTl242W4pVRNIi/GIaDqLi4vq8+H5g7TbbS5fvkyvP2R65y4uXrxIt9fkt377G3zw/jtU1h6xd88Ojswf5s9feYW9e+b4F7/7b/n3/+bfMbtjN49Wqzx18hTtTp0zP/4hG9VVchNFDh6Yp9bscOHSp6xX60TtuDrXxMSEsrSa7yF+Y9CRXhsyO1NWVROtkYDFLI1nsmpIEed49OhRXn75ZaamZ2i1WtjxGNryuXfCsYmcqkK1tkm1WlXeM5lMKx4K0UXMpFdvbW2RiKdIZ5IsPXzE5Y8/otntK5v5ve/+Nb434Pf+x3+lUnnID77/f/nqV19irVJhfGyCVrPLu++dpVSeZdfO/cw/doQb16+xvnqXpQf36fT6YJjUWwOqtTrdvoMfhOr+YxKEjKmeg21EwHOI6JCTCtuWapUDCbjbYyKXU/7fGY7Ys2cPzz33HEcfP6aQO5RFQe36xbDT66ov6EZEZUsatTiUTCaj/LRAfnx8XGW71+6RTMZZXl7he99/leT4OOXpaXxvyBs/+iE6Hom4RbddZ3aHwDXBoD/i6vUbvPTSV/nGb36Tsx+c50//7DtSBp55+rhS3Ga7w/0Hy9y5v0RPWpEps7LP5OSkMhW4PsNeC1M2G4amAhZfn8qkt1V6OKLbbpNNZ1TxBv0++Xxe/e6LL75IuVym1++jrV07H969e1cZ71KpxEy5rMYpxWsjquArcJYqT5VLWEZUXURucufuPaqNBoVSnlKxwO3bN3nt1b/lyNFDpONxqtU1njh+gm9/+/dJplN02l1qjSarK5uUZ6Z47tnPsGdmmnKpgGHafPTpVd58+6fcf7iMJ23IC5mZmVHnipkW7WadUa+j5mgruu2lJ/J54smEssH1Wo3A89UAJDoiVJAYTp8+zfHjx4lEDbR7l95TKx5Z50im43aMsbExJf29dkcNDQJzuYD4YbmYwFtdOBGj57ps1mrEbJPp6Wnu3l5QQ0Wv2ebPXvkThRCp0te//nX+8i//guXVClNTU+zYuZOt2gajTpt0Mkk8maa2VefarTtUN2tiY8TpKk3ZvXMXhckc7VaTerWKGY2QTgq/A/KlIrlcjlx2TInpxnpV7eIMPUK5NKViOHDgAE888QTjkxNoGwtXQk32QkGAMxopOMu/pbfJa/H2bXbt2kXm781H3LLpdsUsjEiPj3Hv0RJvvPUmhw/O89RTTymxiOpRxnbv5jv/7b/Tbjf51re+xdbWJucvn+fpp59Sq5dqdZ12s8Wo0+Hm1WvcvfeApnjuXp92t0+7M6DR7qvlXblcpDxVwh0OVEtMJWJM5sYVyrLjY6THsspabmxssHTvvmqrMjzsnN2BFoRKi0TABNZar/IgrG6sq1aUsC2VUTEZooYiGJ7rKOUT87+6+khdIJGMKZNixmx67ohzly4y6A7UiPjFz59GDzVMw+Lq1asc2DtHPBFTM7S4tcraMpc/vry9PgoCwqHL5fMXuHHzNgPHQfYyoSzqvEB1gdFwqDy96Imhge+MKBUmKRWK+IGHZdsqcEGR0G91aXnbR8QTzM7MMOz1VWv9zNOntgMOO5shAulen3pjS01M2WwaSyAjA2UY0tiosrb6iGZ9SyVkYnJcCUOj22R5vcLySkVNKeJXT544ydGjx+g1trePWuirRJVmpjhz5i26gxatVlOZiFwmzfpShWqlqtqGBCzDgidjXSyGYdnq8M1mXe2zbFk+2Ca7ZncwVSoquggOBXGiK0LLzY0Nta4SzZGkeK6rIP8PX/oKs7OzaJWFa2p4ENFynCGtZoODB/eTjMXxA1e5q/PnfsHlyxe5t7igLlooTBI1DLWY002dTm9A3IozMZHHH/k4jsvhvfM888wz6jD9QZeLF89z4+ZVIrIgMba3iBPZMfqNLtlURvXTlco6D5YeokeiqivIcCDDhwQmBxfOCrV2795NPpfbnn9bbeUPpMpCR9EXYaMacTVNBSsLgFMnn+bUqVNoreV7ykvLaChZXVp6oMy5cHVyMkejucUf/N63SaWTLC0tqSoL36dnpkgkk0TjJlHTVmCYKkzR2GoogVtdXlXzqQig3LzRrLG5tYFs4gSiYlEnx3OkrQS+G6hD15tS/ZY6R0ZaESjz8+DBA2qbVfUdz3OIx2IUiwVy2XGVDBFVme7Gx7Mq+XLmfC7P3NxutW4SJ3f8+BPs2zeH5m9WQ1mgjXpdtpoNlpeXGRvLKCsp20rJ8Hf+9E+IJ2zeeecdZmbK3Lt3Tz0xmD96RJmRQqmo1P3Q/oNsVjewTJOl+w+UgdnarGFaUTzfV5WWRb4cTNrS1GSJTr2tYCj8EygLZSRJskaSxMpbLKn8rrTKVquhEimJSCYS6KGMrQYj12cw6BG1bHV90YJWu8Heuf0cO/oYJ0+eojhVRBs8Wg7tdErBpddqKfGaLBbQDIP6ZpWFhQUuXDyvAv/bV1/lyadOKPmXG8vgLT8X6ApfpJUZocbBQwfYqq5z48YN1itrJBIJ8sWCamuyV5bZWlAhra2+scnm+qYaQ0UIZfwTgZKAxATJZwXddoOVlRVVTRE/mX4EqhPjk+rMruuTTCdIpjJq4RiJyh4uzeOPn+Cznz3F3Nw+1X206vVroazw84UCqMCVCiij7fuu2hDeunWLO3fucOHyBSqVilrWabrOtWvXlBLi+8rXyqrm9OefVw5o7dEyn3zyEbG4pR6niOuJRi3WqpusVTdoNdt0O2IionTbHcVBCVgIKNsMgbW8hOtSWYFzo9FQkDflkYoepdtq0+8OGB8bw44l1D5aNy0iZoTdc3t54qkTHD70GHvmdim3d//BXbStGzdCWW6LaDxaWVHiJQ+hDj02T2pyUjq/PMWiX6+r/xfIN1pNVQGB4UeXLnP+Fx8SFTM/O8XXvvJlms2aspr12qY6oHBY1yPUm10ePFzh0fIKw6GHGbVJxIX/rrq/vGQakplbYKr4KvxvbOuG3P+XVlf+P2bF2VnewaFDh1Rvr7eapMayTE2XyU7kGMuNq7FVUCLUk7Nr4dp6iBFRcH7zJz9mZXVVwe/Z5/+BUsr1japyKM1WCytmq6cI3X6PMEAN2mPJNGHgs1Wt8PP3zmBHIZGMYkZ1FhZucG9xUT3uGLoeriPMN6hvdWh3+qpXxmP2r7YW4vSG/b4SNV2TFWtLwVmClTOJAZJ+WyqX2bdvH9NTUxTzZdpbddbW18lMjFM8eAA8l2Gviz0xjtPrYgpyfvkwLRw5If2+quSju3cUV4WjpfIUVizBkSeO8/DhEpP5Io7vsXjvjvK30vdaggZ0XGdE3DawTI3axiq3F67TaddJJhNqfbO2VuXC+YtUN+rkJ8sEga4CTidT8rQI1x2p3ik8llaoVjFhQG1rU/H/+IkTyg/vO3hAmQhJgKCrWlljx8wOxeFPrnxKrVHn6LFj7JjbjS+otUwsO67alax4hDL/H0xJ7BFdZf6MAAAAAElFTkSuQmCC">
 * let a = '<canvas width="60" height="32"></canvas>';
 * bbn.fn.canvasToImage(a);
 * ```
 *
 * @memberof bbn.fn
 * @param {canvas} canvas
 * @returns  {HTMLElement}
 */
var canvasToImage = function (canvas) {
    var img = new Image();
    img.src = canvas.toDataURL('image/png');
    return img;
};



/***/ }),

/***/ "./dist/fn/convert/colorToHex.js":
/*!***************************************!*\
  !*** ./dist/fn/convert/colorToHex.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colorToHex: () => (/* binding */ colorToHex)
/* harmony export */ });
/**
 * Returns the hex color of the given rgb or color name.
 * @method   colorToHex
 * @global
 * @example
 * ```javascript
 * //"#ff0000"
 * bbn.fn.colorToHex('red');
 * ```
 *
 * @example
 * ```javascript
 * //"#ff0000"
 * bbn.fn.colorToHex('rgb(255,0,0)');
 * ```
 * @memberof bbn.fn
 * @returns  {String}
 */
var colorToHex = function (color) {
    var canvas = document.createElement("canvas").getContext("2d");
    canvas.fillStyle = color;
    return canvas.fillStyle;
};



/***/ }),

/***/ "./dist/fn/convert/fromXml.js":
/*!************************************!*\
  !*** ./dist/fn/convert/fromXml.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromXml: () => (/* binding */ fromXml)
/* harmony export */ });
/**
 * Parses XML and returns an object.
 *
 * Picked from https://stackoverflow.com/questions/4200913/xml-to-javascript-object
 *
 * @memberof bbn.fn
 * @param   {String} xml       The XML to be parsed
 * @param   {Array}  arrayTags An array of tag names which should always be returned as array (even if single)
 * @returns {Object}
 */
var fromXml = function (xml, arrayTags) {
    var dom = null;
    if (window.DOMParser)
        dom = new DOMParser().parseFromString(xml, "text/xml");
    else if (window["ActiveXObject"]) {
        dom = new window["ActiveXObject"]("Microsoft.XMLDOM");
        dom.async = false;
        if (!dom.loadXML(xml))
            throw dom.parseError.reason + " " + dom.parseError.srcText;
    }
    else
        throw new Error("cannot parse xml string!");
    function parseNode(xmlNode, result) {
        if (xmlNode.nodeName == "#text") {
            var v = xmlNode.nodeValue;
            if (v.trim())
                result["#text"] = v;
            return;
        }
        var jsonNode = {}, existing = result[xmlNode.nodeName];
        if (existing) {
            if (!Array.isArray(existing))
                result[xmlNode.nodeName] = [existing, jsonNode];
            else
                result[xmlNode.nodeName].push(jsonNode);
        }
        else {
            if (arrayTags && arrayTags.indexOf(xmlNode.nodeName) != -1)
                result[xmlNode.nodeName] = [jsonNode];
            else
                result[xmlNode.nodeName] = jsonNode;
        }
        if (xmlNode.attributes)
            for (var _i = 0, _a = xmlNode.attributes; _i < _a.length; _i++) {
                var attribute = _a[_i];
                jsonNode[attribute.nodeName] = attribute.nodeValue;
            }
        for (var _b = 0, _c = xmlNode.childNodes; _b < _c.length; _b++) {
            var node = _c[_b];
            parseNode(node, jsonNode);
        }
    }
    var result = {};
    for (var _i = 0, _a = dom.childNodes; _i < _a.length; _i++) {
        var node = _a[_i];
        parseNode(node, result);
    }
    return result;
};



/***/ }),

/***/ "./dist/fn/convert/hex2rgb.js":
/*!************************************!*\
  !*** ./dist/fn/convert/hex2rgb.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hex2rgb: () => (/* binding */ hex2rgb)
/* harmony export */ });
/**
 * Convert an hexadecimmal string to RGB.
 *
 * Converts a string that expresses a color in hexadecimal format into an object with
 * the properties that define the color and the corresponding value.
 *
 * @method   hex2rgb
 * @global
 *
 * @example
 * ```javascript
 * //{r:255, g:0, b:0}
 * bbn.fn.hex2rgb("#FF0000");
 * ```
 *
 * @memberof bbn.fn
 * @returns  {*}
 */
var hex2rgb = function (hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
        }
        : null;
};



/***/ }),

/***/ "./dist/fn/convert/imageToCanvas.js":
/*!******************************************!*\
  !*** ./dist/fn/convert/imageToCanvas.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   imageToCanvas: () => (/* binding */ imageToCanvas)
/* harmony export */ });
/**
 * Draws the given html image nto a canvas.
 * @method   imageToCanvas
 * @example
 * ``` javascript
 * //<canvas width="60" height="32"></canvas>
 * bbn.fn.imageToCanvas('<img src="path/myImage.png">');
 * ```
 * @global
 * @memberof bbn.fn
 * @param {HTMLElement} img
 * @returns {HTMLCanvasElement}
 */
var imageToCanvas = function (img) {
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    canvas.getContext('2d').drawImage(img, 0, 0);
    return canvas;
};



/***/ }),

/***/ "./dist/fn/convert/imgToBase64.js":
/*!****************************************!*\
  !*** ./dist/fn/convert/imgToBase64.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   imgToBase64: () => (/* binding */ imgToBase64)
/* harmony export */ });
/* harmony import */ var _imageToCanvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imageToCanvas.js */ "./dist/fn/convert/imageToCanvas.js");

var imgToBase64 = function (img, type) {
    if (type === void 0) { type = 'image/png'; }
    var canvas = (0,_imageToCanvas_js__WEBPACK_IMPORTED_MODULE_0__.imageToCanvas)(img);
    return canvas.toDataURL(type);
};



/***/ }),

/***/ "./dist/fn/convert/rgb2hex.js":
/*!************************************!*\
  !*** ./dist/fn/convert/rgb2hex.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rgb2hex: () => (/* binding */ rgb2hex)
/* harmony export */ });
/**
 * Convert an RGB string to hexadecimal.
 *
 * Passing a string with the format that defines the rgb value as an argument,
 * it will return the corresponding string in hexadecimal format.
 *
 * @method   rgb2hex
 * @global
 *
 * @example
 * ```javascript
 * //"#ff0000"
 * bbn.fn.rgb2hex("rgb(255, 0, 0)");
 * ```
 * @memberof bbn.fn
 * @param    {String} rgb
 * @returns  {String}
 */
var rgb2hex = function (rgb) {
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return rgb && rgb.length === 4
        ? "#" +
            ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2)
        : "";
};



/***/ }),

/***/ "./dist/fn/convert/string2ArrayBuffer.js":
/*!***********************************************!*\
  !*** ./dist/fn/convert/string2ArrayBuffer.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   string2ArrayBuffer: () => (/* binding */ string2ArrayBuffer)
/* harmony export */ });
var string2ArrayBuffer = function (str) {
    var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
    var bufView = new Uint16Array(buf);
    for (var i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
};



/***/ }),

/***/ "./dist/fn/convert/toCSV.js":
/*!**********************************!*\
  !*** ./dist/fn/convert/toCSV.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toCSV: () => (/* binding */ toCSV)
/* harmony export */ });
/* harmony import */ var _loop_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loop/each.js */ "./dist/fn/loop/each.js");
/* harmony import */ var _type_isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/isArray.js */ "./dist/fn/type/isArray.js");
/* harmony import */ var _string_replaceAll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../string/replaceAll.js */ "./dist/fn/string/replaceAll.js");



/**
 * Returns a CSV string from the given array of arrays or objects.
 *
 * @method   toCSV
 * @global
 * @example
 * ```javascript
 * bbn.fn.toCSV([['a', 'b', 'c'], ['d', 'e', 'f']]);
 * // "a","b","c";
 * // "d","e","f"
 * ```
 * @example
 * ```javascript
 * bbn.fn.toCSV([{name: "Capuche", fname: "Marc-Antoine"}, {name: "Orfin", fname: "Louis"}]);
 * // "Capuche","Marc-Antoine";
 * // "Orfin","Louis"
 * ```
 * @memberof bbn.fn
 * @param    {Array}  arr        The array to convert
 * @param    {String} [valSep=,] The value separator character
 * @param    {String} [rowSep=;] The row separator character
 * @param    {String} [valEsc="] The string escaper character
 * @returns  {String} A CSV string
 */
var toCSV = function (arr, valSep, rowSep, valEsc) {
    if (valSep === void 0) { valSep = ","; }
    if (rowSep === void 0) { rowSep = ""; }
    if (valEsc === void 0) { valEsc = '"'; }
    if (!valSep) {
        valSep = ",";
    }
    if (!valEsc) {
        valEsc = '"';
    }
    var csvContent = "";
    var total = arr.length;
    (0,_loop_each_js__WEBPACK_IMPORTED_MODULE_0__.each)(arr, function (a, i) {
        var num = (0,_type_isArray_js__WEBPACK_IMPORTED_MODULE_1__.isArray)(a) ? a.length : Object.values(a).length;
        var j = 0;
        (0,_loop_each_js__WEBPACK_IMPORTED_MODULE_0__.each)(a, function (b) {
            if (typeof b === "string") {
                csvContent += valEsc + (0,_string_replaceAll_js__WEBPACK_IMPORTED_MODULE_2__.replaceAll)(valEsc, "\\" + valEsc, b) + valEsc;
            }
            else if (b === 0) {
                csvContent += "0";
            }
            else if (!b) {
                csvContent += valEsc + valEsc;
            }
            else {
                csvContent += b.toString ? b.toString() : valEsc + valEsc;
            }
            j++;
            if (j < num) {
                csvContent += valSep;
            }
        });
        if (i < total - 1) {
            csvContent += rowSep + "\n";
        }
    });
    return csvContent;
};



/***/ }),

/***/ "./dist/fn/datetime/calendar.js":
/*!**************************************!*\
  !*** ./dist/fn/datetime/calendar.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calendar: () => (/* binding */ calendar)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs_plugin_calendar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/calendar.js */ "./node_modules/dayjs/plugin/calendar.js");
/* harmony import */ var _fdate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fdate.js */ "./dist/fn/datetime/fdate.js");
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date.js */ "./dist/fn/datetime/date.js");
/* harmony import */ var _type_isDate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../type/isDate.js */ "./dist/fn/type/isDate.js");
/* harmony import */ var _type_isString_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../type/isString.js */ "./dist/fn/type/isString.js");






var bbn = {
    _: function (st) { return st; }
};
dayjs__WEBPACK_IMPORTED_MODULE_0__.extend(dayjs_plugin_calendar_js__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Returns a date relative to the current day.
 *
 * @method   calendar
 * @global
 *
 * @example
 * ``` javascript
 * //"2020-04-16 16:15:23"
 * let date = new Date();
 * bbn.fn.dateSQL(date,false);
 * ```
 *
 * @memberof bbn.fn
 * @param    {Date|String} d
 * @param    {String | Boolean} wrong_result Whether or not include the time in the date
 * @returns  {String}
 */
var calendar = function (d, wrong_result) {
    if (wrong_result === void 0) { wrong_result = false; }
    if (undefined === dayjs__WEBPACK_IMPORTED_MODULE_0__) {
        return (0,_fdate_js__WEBPACK_IMPORTED_MODULE_2__.fdate)(d, wrong_result);
    }
    var r = (0,_date_js__WEBPACK_IMPORTED_MODULE_3__.date)(d);
    if (!(0,_type_isDate_js__WEBPACK_IMPORTED_MODULE_4__.isDate)(r)) {
        return wrong_result && (0,_type_isString_js__WEBPACK_IMPORTED_MODULE_5__.isString)(wrong_result) ? wrong_result : '';
    }
    return dayjs__WEBPACK_IMPORTED_MODULE_0__(r).calendar(null, {
        sameDay: '[' + bbn._('Today') + ']',
        nextDay: '[' + bbn._('Tomorrow') + ']',
        nextWeek: 'ddd D',
        lastDay: '[' + bbn._('Yesterday') + ']',
        lastWeek: 'ddd D',
        sameElse: 'L',
    });
};



/***/ }),

/***/ "./dist/fn/datetime/chrono.js":
/*!************************************!*\
  !*** ./dist/fn/datetime/chrono.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startChrono: () => (/* binding */ startChrono),
/* harmony export */   stopChrono: () => (/* binding */ stopChrono)
/* harmony export */ });
/* harmony import */ var _loop_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loop/each.js */ "./dist/fn/loop/each.js");

var _private = [];
/**
 * Starts a timer and gives it a name.
 * @method   startChrono
 * @global
 * ``` javascript
 * bbn.fn.startChrono('myChrono');
 * ```
 * @memberof bbn.fn
 * @returns
 */
var startChrono = function (name) {
    var now = new Date().getTime();
    var h1 = 3600 * 1000;
    if (_private.length) {
        (0,_loop_each_js__WEBPACK_IMPORTED_MODULE_0__.each)(_private, function (t, n) {
            if (now - t > h1) {
                delete _private[n];
            }
        });
        now = new Date().getTime();
    }
    _private[name] = now;
};
/**
 * @method   stopChrono
 * @global
 * @example
 * ``` javascript
 * bbn.fn.stopChrono('myChrono');
 * // 20162
 * ```
 * @memberof bbn.fn
 * @param {String} name
 * @returns  {Number}
 */
var stopChrono = function (name) {
    if (_private[name]) {
        var now = new Date().getTime();
        var diff = now - _private[name];
        return diff;
    }
};



/***/ }),

/***/ "./dist/fn/datetime/date.js":
/*!**********************************!*\
  !*** ./dist/fn/datetime/date.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   date: () => (/* binding */ date)
/* harmony export */ });
/* harmony import */ var _type_isNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isNumber.js */ "./dist/fn/type/isNumber.js");
/* harmony import */ var _string_substr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../string/substr.js */ "./dist/fn/string/substr.js");
/* harmony import */ var _type_isDate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/isDate.js */ "./dist/fn/type/isDate.js");



/**
 * Returns a date object from the given argument.
 *
 * @method   date
 * @global
 *
 * @example
 * ``` javascript
 * //Mon Feb 11 2019 12:00:00 GMT+0100 (Central European Standard Time)
 * bbn.fn.date('2019/02/11')
 * ```
 *
 * @memberof bbn.fn
 * @param    {String|Number} v
 * @returns  {date}
 */
var date = function (v) {
    var d = false, t = typeof v;
    if (v === undefined) {
        return new Date();
    }
    if (t === 'number' || ((0,_type_isNumber_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(v) && v !== '')) {
        if (v < 10000000000) {
            v = v * 1000;
        }
        return new Date(v);
    }
    if (t === 'string') {
        if (v.length === 10) {
            return new Date(parseInt((0,_string_substr_js__WEBPACK_IMPORTED_MODULE_1__.substr)(v, 0, 4)), parseInt((0,_string_substr_js__WEBPACK_IMPORTED_MODULE_1__.substr)(v, 5, 2)) - 1, parseInt((0,_string_substr_js__WEBPACK_IMPORTED_MODULE_1__.substr)(v, 8, 2)), 12);
        }
        else if (v.length === 19) {
            return new Date(parseInt((0,_string_substr_js__WEBPACK_IMPORTED_MODULE_1__.substr)(v, 0, 4)), parseInt((0,_string_substr_js__WEBPACK_IMPORTED_MODULE_1__.substr)(v, 5, 2)) - 1, parseInt((0,_string_substr_js__WEBPACK_IMPORTED_MODULE_1__.substr)(v, 8, 2)), parseInt((0,_string_substr_js__WEBPACK_IMPORTED_MODULE_1__.substr)(v, 11, 2)), parseInt((0,_string_substr_js__WEBPACK_IMPORTED_MODULE_1__.substr)(v, 14, 2)), parseInt((0,_string_substr_js__WEBPACK_IMPORTED_MODULE_1__.substr)(v, 17, 2)));
        }
    }
    else if ((0,_type_isDate_js__WEBPACK_IMPORTED_MODULE_2__.isDate)(v)) {
        return v;
    }
    return d;
};



/***/ }),

/***/ "./dist/fn/datetime/dateSQL.js":
/*!*************************************!*\
  !*** ./dist/fn/datetime/dateSQL.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dateSQL: () => (/* binding */ dateSQL)
/* harmony export */ });
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date.js */ "./dist/fn/datetime/date.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");


/**
 * Returns a date with SQL format.
 *
 * @method   dateSQL
 * @global
 *
 * @example
 * ``` javascript
 * //"2020-04-16 16:15:23"
 * let date = new Date();
 * bbn.fn.dateSQL(date,false);
 * ```
 *
 * @memberof bbn.fn
 * @param    {Date|String} v
 * @param    {Boolean}     dayOnly Whether or not include the time in the date
 * @returns  {String}
 */
var dateSQL = function (v, dayOnly) {
    var value = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.date)(v);
    if (value) {
        return dayjs__WEBPACK_IMPORTED_MODULE_1__(value).format('YYYY-MM-DD' + (dayOnly ? '' : ' HH:mm:ss'));
    }
};



/***/ }),

/***/ "./dist/fn/datetime/daysInMonth.js":
/*!*****************************************!*\
  !*** ./dist/fn/datetime/daysInMonth.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInMonth: () => (/* binding */ daysInMonth)
/* harmony export */ });
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date.js */ "./dist/fn/datetime/date.js");

/**
 * Returns the number of days of the month given in the date.
 * @method   daysInMonth
 * @global
 *
 * @example
 * ``` javascript
 * //30
 * bbn.fn.daysInMonth(new Date());
 * ```
 *
 * @memberof bbn.fn
 * @param    {String|Date} v
 * @returns  {Number}
 */
var daysInMonth = function (v) {
    var d = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.date)(v);
    if (d) {
        return dayjs(d).daysInMonth();
    }
    return false;
};



/***/ }),

/***/ "./dist/fn/datetime/fdate.js":
/*!***********************************!*\
  !*** ./dist/fn/datetime/fdate.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fdate: () => (/* binding */ fdate)
/* harmony export */ });
/* harmony import */ var _fdatetime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fdatetime.js */ "./dist/fn/datetime/fdatetime.js");
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date.js */ "./dist/fn/datetime/date.js");
/* harmony import */ var _type_isDate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/isDate.js */ "./dist/fn/type/isDate.js");
/* harmony import */ var _type_isString_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../type/isString.js */ "./dist/fn/type/isString.js");




/**
 * @method   fdate
 * @todo     Add method description for fdate
 * @global
 * @memberof bbn.fn
 * @param    {String|Date} d
 * @param    {String}      wrong_result
 * @returns
 */
var fdate = function (d, wrong_result) {
    if (wrong_result === void 0) { wrong_result = false; }
    // Retro compatibility
    if (wrong_result === true) {
        return (0,_fdatetime_js__WEBPACK_IMPORTED_MODULE_0__.fdatetime)(d);
    }
    var r = (0,_date_js__WEBPACK_IMPORTED_MODULE_1__.date)(d);
    if (!(0,_type_isDate_js__WEBPACK_IMPORTED_MODULE_2__.isDate)(r)) {
        return wrong_result && (0,_type_isString_js__WEBPACK_IMPORTED_MODULE_3__.isString)(wrong_result) ? wrong_result : '';
    }
    if (undefined !== dayjs) {
        return dayjs(r).format('L');
    }
    return r.toLocaleDateString();
};



/***/ }),

/***/ "./dist/fn/datetime/fdatetime.js":
/*!***************************************!*\
  !*** ./dist/fn/datetime/fdatetime.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fdatetime: () => (/* binding */ fdatetime)
/* harmony export */ });
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date.js */ "./dist/fn/datetime/date.js");
/* harmony import */ var _type_isDate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/isDate.js */ "./dist/fn/type/isDate.js");
/* harmony import */ var _type_isString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/isString.js */ "./dist/fn/type/isString.js");



/**
 * @method   fdatetime
 * @todo     Add method description for fdatetime
 * @global
 * @memberof bbn.fn
 * @returns  {*}
 */
var fdatetime = function (d, wrong_result) {
    if (wrong_result === void 0) { wrong_result = false; }
    var r = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.date)(d);
    if (!(0,_type_isDate_js__WEBPACK_IMPORTED_MODULE_1__.isDate)(r)) {
        return wrong_result && (0,_type_isString_js__WEBPACK_IMPORTED_MODULE_2__.isString)(wrong_result) ? wrong_result : '';
    }
    if (undefined !== dayjs) {
        //return dayjs(r).format('lll');
        return dayjs(r).calendar(null, {
            sameDay: '[' + bbn._('Today') + '] HH:mm',
            nextDay: '[' + bbn._('Tomorrow') + '] HH:mm',
            nextWeek: 'ddd D HH:mm',
            lastDay: '[' + bbn._('Yesterday') + '] HH:mm',
            lastWeek: 'ddd D HH:mm',
            sameElse: 'DD/MM/YYYY HH:mm',
        });
        //return dayjs(r).format("DD/MM/YYYY HH:mm")
    }
    return r.toLocaleDateString();
};



/***/ }),

/***/ "./dist/fn/datetime/formatDate.js":
/*!****************************************!*\
  !*** ./dist/fn/datetime/formatDate.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDate: () => (/* binding */ formatDate)
/* harmony export */ });
var formatDate = function (date, format) {
    return dayjs(date).format(format);
};



/***/ }),

/***/ "./dist/fn/datetime/ftime.js":
/*!***********************************!*\
  !*** ./dist/fn/datetime/ftime.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ftime: () => (/* binding */ ftime)
/* harmony export */ });
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date.js */ "./dist/fn/datetime/date.js");
/* harmony import */ var _type_isDate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/isDate.js */ "./dist/fn/type/isDate.js");
/* harmony import */ var _type_isString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/isString.js */ "./dist/fn/type/isString.js");



/**
 * @method   ftime
 * @todo     Add method description for ftime
 * @global
 * @memberof bbn.fn
 * @returns  {*}
 */
var ftime = function (d, wrong_result) {
    var r = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.date)(d);
    if (!(0,_type_isDate_js__WEBPACK_IMPORTED_MODULE_1__.isDate)(r)) {
        return wrong_result && (0,_type_isString_js__WEBPACK_IMPORTED_MODULE_2__.isString)(wrong_result) ? wrong_result : '';
    }
    if (undefined !== dayjs) {
        return dayjs(r).calendar();
    }
    return r.toLocaleDateString();
};



/***/ }),

/***/ "./dist/fn/datetime/getDay.js":
/*!************************************!*\
  !*** ./dist/fn/datetime/getDay.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDay: () => (/* binding */ getDay)
/* harmony export */ });
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date.js */ "./dist/fn/datetime/date.js");

/**
 * @method   getDay
 * @ignore
 * @todo     Add method description for getDay
 * @global
 * @memberof bbn.fn
 * @param    {String|Date} v
 * @returns
 */
var getDay = function (v) {
    var biss = 1972;
    var d = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.date)(v);
    if (d) {
        var t = d.getTime(), y = d.getYear(), m = d.getMonth(), days = (y - 1970) * 365;
        if (m < 2) {
            y--;
        }
        for (var i = biss; i <= y; i += 4) {
            days++;
        }
        return days + Math.floor(t / (24 * 3600000));
    }
    return false;
};



/***/ }),

/***/ "./dist/fn/datetime/timestamp.js":
/*!***************************************!*\
  !*** ./dist/fn/datetime/timestamp.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timestamp: () => (/* binding */ timestamp)
/* harmony export */ });
/**
 * Returns the timestamp of the given seconds if an argument is given, else returns the timestamp of new Date().
 * @method   timestamp
 * @global
 * @example
 * ```javascript
 * //1587031047918
 * bbn.fn.timestamp();
 * ```
 * @memberof bbn.fn
 * @param    {Number} seconds
 * @returns  {Boolean}
 */
var timestamp = function (seconds) {
    if (seconds === void 0) { seconds = false; }
    var r = new Date().getTime();
    return seconds ? Math.round(r / 1000) : r;
};



/***/ }),

/***/ "./dist/fn/default/defaultAjaxAbortFunction.js":
/*!*****************************************************!*\
  !*** ./dist/fn/default/defaultAjaxAbortFunction.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultAjaxAbortFunction: () => (/* binding */ defaultAjaxAbortFunction)
/* harmony export */ });
/* harmony import */ var _browser_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../browser/log.js */ "./dist/fn/browser/log.js");

var defaultAjaxAbortFunction = function (message, url) {
    if (url === void 0) { url = ""; }
    (0,_browser_log_js__WEBPACK_IMPORTED_MODULE_0__.log)(message);
};



/***/ }),

/***/ "./dist/fn/default/defaultAjaxErrorFunction.js":
/*!*****************************************************!*\
  !*** ./dist/fn/default/defaultAjaxErrorFunction.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultAjaxErrorFunction: () => (/* binding */ defaultAjaxErrorFunction)
/* harmony export */ });
/* harmony import */ var _browser_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../browser/log.js */ "./dist/fn/browser/log.js");

var defaultAjaxErrorFunction = function (jqXHR, textStatus, errorThrown) {
    if (textStatus === void 0) { textStatus = null; }
    if (errorThrown === void 0) { errorThrown = null; }
    (0,_browser_log_js__WEBPACK_IMPORTED_MODULE_0__.log)(textStatus, errorThrown);
};



/***/ }),

/***/ "./dist/fn/default/defaultAlertFunction.js":
/*!*************************************************!*\
  !*** ./dist/fn/default/defaultAlertFunction.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultAlertFunction: () => (/* binding */ defaultAlertFunction)
/* harmony export */ });
var defaultAlertFunction = function (msg, title) {
    if (title === void 0) { title = null; }
    /** @todo */
    alert(msg);
};



/***/ }),

/***/ "./dist/fn/default/defaultConfirmFunction.js":
/*!***************************************************!*\
  !*** ./dist/fn/default/defaultConfirmFunction.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultConfirmFunction: () => (/* binding */ defaultConfirmFunction)
/* harmony export */ });
/* harmony import */ var _type_isFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isFunction.js */ "./dist/fn/type/isFunction.js");

var defaultConfirmFunction = function (text, yesFn, noFn) {
    if (noFn === void 0) { noFn = null; }
    var ok = 0;
    if (confirm(text)) {
        if ((0,_type_isFunction_js__WEBPACK_IMPORTED_MODULE_0__.isFunction)(yesFn)) {
            yesFn();
            ok = 1;
        }
    }
    if (!ok && (0,_type_isFunction_js__WEBPACK_IMPORTED_MODULE_0__.isFunction)(noFn)) {
        noFn();
    }
};



/***/ }),

/***/ "./dist/fn/default/defaultEndLoadingFunction.js":
/*!******************************************************!*\
  !*** ./dist/fn/default/defaultEndLoadingFunction.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultEndLoadingFunction: () => (/* binding */ defaultEndLoadingFunction)
/* harmony export */ });
var defaultEndLoadingFunction = function (url, timestamp, data, res) {
    if (data === void 0) { data = null; }
    if (res === void 0) { res = null; }
    return true;
};



/***/ }),

/***/ "./dist/fn/default/defaultErrorFunction.js":
/*!*************************************************!*\
  !*** ./dist/fn/default/defaultErrorFunction.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultErrorFunction: () => (/* binding */ defaultErrorFunction)
/* harmony export */ });
/* harmony import */ var _browser_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../browser/log.js */ "./dist/fn/browser/log.js");

var defaultErrorFunction = function (message) {
    (0,_browser_log_js__WEBPACK_IMPORTED_MODULE_0__.log)(message);
};



/***/ }),

/***/ "./dist/fn/default/defaultHistoryFunction.js":
/*!***************************************************!*\
  !*** ./dist/fn/default/defaultHistoryFunction.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultHistoryFunction: () => (/* binding */ defaultHistoryFunction)
/* harmony export */ });
var defaultHistoryFunction = function (obj) {
    return true;
};



/***/ }),

/***/ "./dist/fn/default/defaultLinkFunction.js":
/*!************************************************!*\
  !*** ./dist/fn/default/defaultLinkFunction.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultLinkFunction: () => (/* binding */ defaultLinkFunction)
/* harmony export */ });
var defaultLinkFunction = function (responseObj, ele) {
    return true;
};



/***/ }),

/***/ "./dist/fn/default/defaultPostLinkFunction.js":
/*!****************************************************!*\
  !*** ./dist/fn/default/defaultPostLinkFunction.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultPostLinkFunction: () => (/* binding */ defaultPostLinkFunction)
/* harmony export */ });
var defaultPostLinkFunction = function (r, ele) {
    if (ele === void 0) { ele = null; }
    return true;
};



/***/ }),

/***/ "./dist/fn/default/defaultPreLinkFunction.js":
/*!***************************************************!*\
  !*** ./dist/fn/default/defaultPreLinkFunction.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultPreLinkFunction: () => (/* binding */ defaultPreLinkFunction)
/* harmony export */ });
/* harmony import */ var _browser_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../browser/log.js */ "./dist/fn/browser/log.js");

var defaultPreLinkFunction = function (url, force, ele) {
    if (force === void 0) { force = false; }
    if (ele === void 0) { ele = null; }
    (0,_browser_log_js__WEBPACK_IMPORTED_MODULE_0__.log)("defaultPreLinkFunction", url, force, ele);
    return true;
};



/***/ }),

/***/ "./dist/fn/default/defaultResizeFunction.js":
/*!**************************************************!*\
  !*** ./dist/fn/default/defaultResizeFunction.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultResizeFunction: () => (/* binding */ defaultResizeFunction)
/* harmony export */ });
var defaultResizeFunction = function () {
    return true;
};



/***/ }),

/***/ "./dist/fn/default/defaultStartLoadingFunction.js":
/*!********************************************************!*\
  !*** ./dist/fn/default/defaultStartLoadingFunction.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultStartLoadingFunction: () => (/* binding */ defaultStartLoadingFunction)
/* harmony export */ });
var defaultStartLoadingFunction = function (url, tst, data, requestId) {
    if (data === void 0) { data = null; }
    if (requestId === void 0) { requestId = null; }
    return true;
};



/***/ }),

/***/ "./dist/fn/form/addInputs.js":
/*!***********************************!*\
  !*** ./dist/fn/form/addInputs.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addInputs: () => (/* binding */ addInputs)
/* harmony export */ });
/* harmony import */ var _loop_iterate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loop/iterate.js */ "./dist/fn/loop/iterate.js");

/**
 * Adds the given data to the given form by inserting hidden inputs.
 *
 * @method   addInputs
 * @global
 * @memberof bbn.fn
 *
 * @example
 * ```javascript
 * let o = {name: "Smith", fname: "John"};
 * bbn.fn.addInputs(document.getElementById('myform'), o, 'bbn');
 * // Will write at the end of the given form:
 * // <input type="hidden" name="bbn[name]" value="Smith">
 * // <input type="hidden" name="bbn[fname]" value="John">
 *
 * ```
 *
 * @example
 * ```javascript
 * let o = {
 *   People: [
 *     {name: "Smith", fname: "John"},
 *     {name: "Smith", fname: "Eileen"}
 *   ],
 *   Dates: ['2021-08-25', '2021-09-06']
 * };
 * bbn.fn.addInputs(document.getElementById('myform'), o);
 * // Will write at the end of the given form:
 * // <input type="hidden" name="People[0][name]" value="Smith">
 * // <input type="hidden" name="People[0][fname]" value="John">
 * // <input type="hidden" name="People[1][name]" value="Smith">
 * // <input type="hidden" name="People[1][fname]" value="Eileen">
 * // <input type="hidden" name="Dates[0]" value="2021-08-25">
 * // <input type="hidden" name="Dates[1]" value="2021-09-06">
 * ```
 *
 * @param    {HTMLElement} form   The form to which the inputs should be added
 * @param    {Object}      params The data which will be added
 * @param    {String}      prefix The optional object's name of the fields in the form
 * @returns  {undefined}
 */
var addInputs = function (form, params, prefix) {
    if (params === void 0) { params = null; }
    if (prefix === void 0) { prefix = ''; }
    if (form && form.tagName === 'FORM') {
        var appendToForm_1 = function (name, val) {
            var input = document.createElement('input');
            input.setAttribute('type', 'hidden');
            input.setAttribute('name', name);
            input.setAttribute('value', val);
            form.appendChild(input);
        };
        params = JSON.parse(JSON.stringify(params || {}));
        prefix = prefix || '';
        if (params) {
            (0,_loop_iterate_js__WEBPACK_IMPORTED_MODULE_0__.iterate)(params, function (param, key) {
                var name = prefix ? "".concat(prefix, "[").concat(key, "]") : key;
                if (param instanceof Date) {
                    appendToForm_1(name, param.toISOString());
                }
                else if (param instanceof Array) {
                    param.forEach(function (e, i) {
                        var tempName = "".concat(name, "[").concat(i, "]");
                        if (typeof e === 'object') {
                            addInputs(form, e, tempName);
                        }
                        else {
                            appendToForm_1(tempName, e.toString());
                        }
                    });
                }
                else if (typeof param === 'object' && !(param instanceof File)) {
                    addInputs(form, param, name);
                }
                else {
                    appendToForm_1(name, param.toString());
                }
            });
        }
    }
};



/***/ }),

/***/ "./dist/fn/form/fieldValue.js":
/*!************************************!*\
  !*** ./dist/fn/form/fieldValue.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fieldValue: () => (/* binding */ fieldValue)
/* harmony export */ });
/**
 * Returns the value of a form's input, differenciating between checkboxes, radio and other inputs.
 *
 * @method   fieldValue
 * @global
 * @memberof bbn.fn
 * @param    {HTMLElement} field The input element
 *
 * @returns  {Mixed}       The value
 */
var fieldValue = function (field) {
    var v;
    if (field.type === 'checkbox') {
        if (field.checked) {
            v = field.value;
            if (!v) {
                v = 1;
            }
        }
        else {
            v = 0;
        }
    }
    else if (field.type === 'radio') {
        if (field.checked) {
            v = field.value;
        }
    }
    else {
        v = field.value;
    }
    return v;
};



/***/ }),

/***/ "./dist/fn/form/formdata.js":
/*!**********************************!*\
  !*** ./dist/fn/form/formdata.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formdata: () => (/* binding */ formdata)
/* harmony export */ });
/* harmony import */ var _loop_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loop/each.js */ "./dist/fn/loop/each.js");
/* harmony import */ var _fieldValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fieldValue.js */ "./dist/fn/form/fieldValue.js");
/* harmony import */ var _string_replaceAll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../string/replaceAll.js */ "./dist/fn/string/replaceAll.js");
/* harmony import */ var _string_substr_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../string/substr.js */ "./dist/fn/string/substr.js");




/**
 * Returns all the data contained in a form as a single object.
 *
 * @method   formdata
 * @global
 * @memberof bbn.fn
 * @fires    {*}
 *
 * @example
 * ```javascript
 * // <form id="myform">
 * // <input type="hidden" name="bbn[name]" value="Smith">
 * // <input type="hidden" name="bbn[fname]" value="John">
 * // </form>
 * bbn.fn.formdata(document.getElementById('myform'));
 * // {name: "Smith", fname: "John"};
 *
 * ```
 *
 * @example
 * ```javascript
 * // <form id="myform">
 * // <input type="hidden" name="People[0][name]" value="Smith">
 * // <input type="hidden" name="People[0][fname]" value="John">
 * // <input type="hidden" name="People[1][name]" value="Smith">
 * // <input type="hidden" name="People[1][fname]" value="Eileen">
 * // <input type="hidden" name="Dates[0]" value="2021-08-25">
 * // <input type="hidden" name="Dates[1]" value="2021-09-06">
 * // </form>
 * bbn.fn.formdata(document.getElementById('myform'));
 * // {
 * //   People: [
 * //     {name: "Smith", fname: "John"},
 * //     {name: "Smith", fname: "Eileen"}
 * //   ],
 * //   Dates: ['2021-08-25', '2021-09-06']
 * // }
 * ```
 *
 * @param    {HTMLElementL} form
 *
 * @returns  {Object}
 */
var formdata = function (form) {
    var $inputs = form.querySelectorAll('input[name],select[name],textarea[name],button[name]');
    var res = {};
    var n;
    var v;
    (0,_loop_each_js__WEBPACK_IMPORTED_MODULE_0__.each)($inputs, function (input, i) {
        v = (0,_fieldValue_js__WEBPACK_IMPORTED_MODULE_1__.fieldValue)(input);
        if (v !== undefined && !input.disabled) {
            var name_1 = input.name;
            if (name_1.indexOf('[]') === -1 &&
                name_1.indexOf('[') > -1 &&
                name_1.indexOf(']') > -1 &&
                name_1.lastIndexOf(']') === name_1.length - 1) {
                name_1 = (0,_string_replaceAll_js__WEBPACK_IMPORTED_MODULE_2__.replaceAll)('][', '.', name_1);
                name_1 = (0,_string_replaceAll_js__WEBPACK_IMPORTED_MODULE_2__.replaceAll)('[', '.', name_1);
                name_1 = (0,_string_replaceAll_js__WEBPACK_IMPORTED_MODULE_2__.replaceAll)(']', '', name_1);
            }
            if (name_1.length > 2 && name_1.indexOf('[]') === name_1.length - 2) {
                n = (0,_string_substr_js__WEBPACK_IMPORTED_MODULE_3__.substr)(name_1, 0, name_1.length - 2);
                if (res[n] === undefined) {
                    res[n] = [];
                }
                res[n].push(v);
            }
            else if (name_1.indexOf('.') > -1) {
                var tmp = void 0, parts = name_1.split('.');
                tmp = res;
                for (var i_1 = 0; i_1 < parts.length; i_1++) {
                    if (res[parts[i_1]] === undefined) {
                        if (i_1 < parts.length - 1) {
                            tmp[parts[i_1]] = {};
                        }
                        else {
                            tmp[parts[i_1]] = v;
                        }
                    }
                    tmp = tmp[parts[i_1]];
                }
            }
            else {
                res[name_1] = v;
            }
        }
    });
    // return num_changes ? res : false;
    return res;
};



/***/ }),

/***/ "./dist/fn/form/objectToFormData.js":
/*!******************************************!*\
  !*** ./dist/fn/form/objectToFormData.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   objectToFormData: () => (/* binding */ objectToFormData)
/* harmony export */ });
/* harmony import */ var _type_isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isArray.js */ "./dist/fn/type/isArray.js");
/* harmony import */ var _loop_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loop/each.js */ "./dist/fn/loop/each.js");
/* harmony import */ var _type_isObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/isObject.js */ "./dist/fn/type/isObject.js");
/* harmony import */ var _loop_iterate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loop/iterate.js */ "./dist/fn/loop/iterate.js");
/* harmony import */ var _type_isNull_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../type/isNull.js */ "./dist/fn/type/isNull.js");





/**
 * @method   objectToFormData
 * @todo     Add method description for objectToFormData
 * @global
 * @memberof bbn.fn
 * @param    {Object|Array|File} obj
 * @param    {String}            key
 * @param    {Array}             ignoreList
 * @returns
 */
var objectToFormData = function (obj, key, ignoreList) {
    if (key === void 0) { key = ''; }
    if (ignoreList === void 0) { ignoreList = null; }
    var formData = new FormData();
    var appendFormData = function (data, key) {
        if (key === void 0) { key = ''; }
        if (!ignoreList || ((0,_type_isArray_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(ignoreList) && !ignoreList.includes(key))) {
            if (data instanceof File) {
                formData.append(key, data);
            }
            else if ((0,_type_isArray_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(data)) {
                (0,_loop_each_js__WEBPACK_IMPORTED_MODULE_1__.each)(data, function (v, i) {
                    appendFormData(v, key + '[' + i + ']');
                });
            }
            else if ((0,_type_isObject_js__WEBPACK_IMPORTED_MODULE_2__.isObject)(data) && Object.keys(data).length) {
                (0,_loop_iterate_js__WEBPACK_IMPORTED_MODULE_3__.iterate)(data, function (v, i) {
                    if (i in data) {
                        appendFormData(v, !key ? i : key + '[' + i + ']');
                    }
                });
            }
            else {
                if (!(0,_type_isNull_js__WEBPACK_IMPORTED_MODULE_4__.isNull)(data) && data !== undefined) {
                    formData.append(key, data);
                }
            }
        }
    };
    appendFormData(obj, key);
    return formData;
};



/***/ }),

/***/ "./dist/fn/form/submit.js":
/*!********************************!*\
  !*** ./dist/fn/form/submit.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   submit: () => (/* binding */ submit)
/* harmony export */ });
/* harmony import */ var _formdata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formdata.js */ "./dist/fn/form/formdata.js");
/* harmony import */ var _ajax_post_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ajax/post.js */ "./dist/fn/ajax/post.js");


/**
 * Submit a form's data through an Ajax request.
 *
 * It will also prevent the event if given, and execute the given callback,
 * or look for one in the data-script attribute.
 *
 * @method   submit
 * @global
 * @memberof bbn.fn
 * @fires    {*}
 * @fires    {*}
 *
 * @param    {HTMLElement} form The form to submit
 * @param    {Event}       e    The optional submit event - which will be prevented
 * @param    {Function}    fn   An optional callback function
 *
 * @returns  {*}
 */
var submit = function (form, e, fn) {
    var url = form.getAttribute('action') || bbn.env.path;
    var data;
    if (url === '') {
        url = '.';
    }
    //if ( (typeof(url) === 'string') && (url.indexOf("http") !== 0 || url.indexOf(window.document.location.hostname) !== -1) && !form.is("[target]") ){
    if (typeof url === 'string' &&
        (url.indexOf('http') !== 0 || url.indexOf(window.document.location.hostname) !== -1) &&
        !form.getAttribute('target')) {
        if (e) {
            e.preventDefault();
        }
        data = (0,_formdata_js__WEBPACK_IMPORTED_MODULE_0__.formdata)(form);
        if (data) {
            //$form.attr("action", null);
            form.setAttribute('action', null);
            //$form.data("bbnSubmit", 1);
            if (!fn) {
                fn = form.getAttribute('data-script') ? eval(form.getAttribute('data-script')) : null;
            }
            if (fn) {
                (0,_ajax_post_js__WEBPACK_IMPORTED_MODULE_1__.post)(url, data, fn);
            }
            else {
                (0,_ajax_post_js__WEBPACK_IMPORTED_MODULE_1__.post)(url, data);
            }
        }
    }
};



/***/ }),

/***/ "./dist/fn/html/adjustHeight.js":
/*!**************************************!*\
  !*** ./dist/fn/html/adjustHeight.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adjustHeight: () => (/* binding */ adjustHeight)
/* harmony export */ });
/* harmony import */ var _type_isIterable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isIterable.js */ "./dist/fn/type/isIterable.js");
/* harmony import */ var _adjustSize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adjustSize.js */ "./dist/fn/html/adjustSize.js");


var adjustHeight = function () {
    var args = arguments;
    if (args.length === 1 && (0,_type_isIterable_js__WEBPACK_IMPORTED_MODULE_0__.isIterable)(args[0])) {
        args = args[0];
    }
    return (0,_adjustSize_js__WEBPACK_IMPORTED_MODULE_1__.adjustSize)('height', args);
};



/***/ }),

/***/ "./dist/fn/html/adjustSize.js":
/*!************************************!*\
  !*** ./dist/fn/html/adjustSize.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adjustSize: () => (/* binding */ adjustSize)
/* harmony export */ });
/* harmony import */ var _loop_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loop/each.js */ "./dist/fn/loop/each.js");

var adjustSize = function (type, eles) {
    var max = 0, idx;
    (0,_loop_each_js__WEBPACK_IMPORTED_MODULE_0__.each)(eles, function (el) {
        el.style[type] = 'auto';
    });
    (0,_loop_each_js__WEBPACK_IMPORTED_MODULE_0__.each)(eles, function (el, i) {
        var rect = el.getBoundingClientRect(), s = rect[type] % 1 ? rect[type] - (rect[type] % 1) + 1 : rect[type];
        //s = rect[type];
        if (s > max) {
            max = s;
            idx = i;
        }
    });
    (0,_loop_each_js__WEBPACK_IMPORTED_MODULE_0__.each)(eles, function (el, i) {
        if (max) {
            el.style[type] = max + 'px';
        }
    });
};



/***/ }),

/***/ "./dist/fn/html/adjustWidth.js":
/*!*************************************!*\
  !*** ./dist/fn/html/adjustWidth.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adjustWidth: () => (/* binding */ adjustWidth)
/* harmony export */ });
/* harmony import */ var _type_isIterable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isIterable.js */ "./dist/fn/type/isIterable.js");
/* harmony import */ var _adjustSize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adjustSize.js */ "./dist/fn/html/adjustSize.js");


var adjustWidth = function () {
    var args = arguments;
    if (args.length === 1 && (0,_type_isIterable_js__WEBPACK_IMPORTED_MODULE_0__.isIterable)(args[0])) {
        args = args[0];
    }
    return (0,_adjustSize_js__WEBPACK_IMPORTED_MODULE_1__.adjustSize)('width', args);
};



/***/ }),

/***/ "./dist/fn/html/getAllTags.js":
/*!************************************!*\
  !*** ./dist/fn/html/getAllTags.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllTags: () => (/* binding */ getAllTags)
/* harmony export */ });
/* harmony import */ var _object_unique_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../object/unique.js */ "./dist/fn/object/unique.js");

/**
 * Gets all the tag names present in the DOM
 * @returns array
 */
var getAllTags = function () {
    return (0,_object_unique_js__WEBPACK_IMPORTED_MODULE_0__.unique)(Array.prototype.map.apply(document.all, [function (a) { return a.tagName.toLowerCase(); }]));
};



/***/ }),

/***/ "./dist/fn/html/getAncestors.js":
/*!**************************************!*\
  !*** ./dist/fn/html/getAncestors.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAncestors: () => (/* binding */ getAncestors)
/* harmony export */ });
var getAncestors = function (ele, selector) {
    if (selector === void 0) { selector = null; }
    var r = [];
    if (typeof ele === 'string') {
        ele = document.querySelector(ele);
    }
    if (ele instanceof HTMLElement) {
        if (ele.parentElement) {
            if (typeof selector === 'string') {
                while ((ele = ele.parentElement.closest(selector))) {
                    r.push(ele);
                }
            }
            else {
                if (selector === true) {
                    r.push(ele);
                }
                while ((ele = ele.parentElement)) {
                    r.push(ele);
                }
            }
        }
    }
    return r;
};



/***/ }),

/***/ "./dist/fn/html/getAttributes.js":
/*!***************************************!*\
  !*** ./dist/fn/html/getAttributes.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAttributes: () => (/* binding */ getAttributes)
/* harmony export */ });
/* harmony import */ var _browser_error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../browser/error.js */ "./dist/fn/browser/error.js");

/**
 * Check if the property contain sizing
 * @return {Boolean}
 */
var getAttributes = function (ele) {
    if (!ele.getAttributeNames) {
        (0,_browser_error_js__WEBPACK_IMPORTED_MODULE_0__.error)('The element is not a proper HTML Element');
    }
    var res = Object.create(null);
    ele.getAttributeNames().forEach(function (name) {
        res[name] = ele.getAttribute(name);
    });
    return res;
};



/***/ }),

/***/ "./dist/fn/html/getHTMLOfSelection.js":
/*!********************************************!*\
  !*** ./dist/fn/html/getHTMLOfSelection.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHTMLOfSelection: () => (/* binding */ getHTMLOfSelection)
/* harmony export */ });
/* harmony import */ var _browser_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../browser/log.js */ "./dist/fn/browser/log.js");

var getHTMLOfSelection = function () {
    var range;
    var selection = window.getSelection();
    if (selection.rangeCount > 0) {
        range = selection.getRangeAt(0);
        (0,_browser_log_js__WEBPACK_IMPORTED_MODULE_0__.log)('RANGE', range);
        var clonedSelection = range.cloneContents();
        (0,_browser_log_js__WEBPACK_IMPORTED_MODULE_0__.log)('clonedSelection', clonedSelection);
        var div = document.createElement('div');
        div.appendChild(clonedSelection);
        return div.innerHTML;
    }
    else {
        return '';
    }
};



/***/ }),

/***/ "./dist/fn/html/getHtml.js":
/*!*********************************!*\
  !*** ./dist/fn/html/getHtml.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHtml: () => (/* binding */ getHtml)
/* harmony export */ });
/* harmony import */ var _string_removeHtmlComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../string/removeHtmlComments.js */ "./dist/fn/string/removeHtmlComments.js");

var getHtml = function (ele, stripComments) {
    if (stripComments === void 0) { stripComments = false; }
    var st = ele.innerHTML();
    if (stripComments) {
        st = (0,_string_removeHtmlComments_js__WEBPACK_IMPORTED_MODULE_0__.removeHtmlComments)(st);
    }
    return st.trim();
};



/***/ }),

/***/ "./dist/fn/html/getPath.js":
/*!*********************************!*\
  !*** ./dist/fn/html/getPath.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPath: () => (/* binding */ getPath)
/* harmony export */ });
/* harmony import */ var _string_replaceAll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../string/replaceAll.js */ "./dist/fn/string/replaceAll.js");

/**
 * @method   getPath
 * @todo     Add method description for getPath
 * @global
 * @ignore
 * @memberof bbn.fn
 * @returns  {*}
 */
var getPath = function (element) {
    var path, 
    //node = $(element),
    node = element, done = 0;
    var _loop_1 = function () {
        //let realNode = node[0],
        var realNode = node, name_1 = realNode.localName;
        if (!name_1)
            return "break";
        if (realNode === document.body)
            return "break";
        if (realNode.id) {
            return { value: '#' + realNode.id };
        }
        if (!done) {
            if (realNode.className && realNode.className !== ' ') {
                name_1 += '.' + (0,_string_replaceAll_js__WEBPACK_IMPORTED_MODULE_0__.replaceAll)(' ', '.', (0,_string_replaceAll_js__WEBPACK_IMPORTED_MODULE_0__.replaceAll)('  ', ' ', realNode.className));
            }
            done = 1;
        }
        //var parent = node.parent(),
        var parent_1 = node.parentNode, 
        //sameTagSiblings = parent.children(name);
        sameTagSiblings = parent_1.children.filter(function (val) {
            return val.tagName === name_1;
        });
        if (sameTagSiblings.length > 1) {
            //var allSiblings = parent.children(),
            var allSiblings = parent_1.children, 
            //index = allSiblings.index(realNode) + 1;
            index = allSiblings.indexOf(realNode) + 1;
            if (index > 1) {
                name_1 += ':nth-child(' + index + ')';
            }
        }
        path = name_1 + (path ? '>' + path : '');
        node = parent_1;
    };
    while (node.length) {
        var state_1 = _loop_1();
        if (typeof state_1 === "object")
            return state_1.value;
        if (state_1 === "break")
            break;
    }
    return path;
};



/***/ }),

/***/ "./dist/fn/html/getText.js":
/*!*********************************!*\
  !*** ./dist/fn/html/getText.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getText: () => (/* binding */ getText)
/* harmony export */ });
var getText = function (ele) {
    return ele.innerText().trim();
};



/***/ }),

/***/ "./dist/fn/html/html2text.js":
/*!***********************************!*\
  !*** ./dist/fn/html/html2text.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   html2text: () => (/* binding */ html2text)
/* harmony export */ });
/**
 * Convert text in html format to plain text.
 *
 * @method   html2text
 * @global
 *
 * @example
 * ```javascript
 * //"Hello world!"
 * bbn.fn.html2text("<div><p>Hello <b>world!</b></p></div>");
 * ```
 * @memberof bbn.fn
 * @param    {String} st
 * @returns {String}
 */
var html2text = function (st) {
    var $test = document.createElement("div");
    $test.innerHTML = st;
    st = $test.innerText;
    return st;
};



/***/ }),

/***/ "./dist/fn/html/isInViewport.js":
/*!**************************************!*\
  !*** ./dist/fn/html/isInViewport.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isInViewport: () => (/* binding */ isInViewport)
/* harmony export */ });
var isInViewport = function (ele, fully) {
    if (fully === void 0) { fully = false; }
    var bounding = ele.getBoundingClientRect();
    if (fully) {
        return (bounding.top >= 0
            && bounding.left >= 0
            && bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
            && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight));
    }
    var eleHeight = ele.offsetHeight;
    var eleWidth = ele.offsetWidth;
    return (bounding.top >= -eleHeight
        && bounding.left >= -eleWidth
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + eleWidth
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + eleHeight);
};



/***/ }),

/***/ "./dist/fn/html/isInside.js":
/*!**********************************!*\
  !*** ./dist/fn/html/isInside.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isInside: () => (/* binding */ isInside)
/* harmony export */ });
/* harmony import */ var _getAncestors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAncestors.js */ "./dist/fn/html/getAncestors.js");
/* harmony import */ var _type_isString_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/isString.js */ "./dist/fn/type/isString.js");
/* harmony import */ var _loop_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loop/each.js */ "./dist/fn/loop/each.js");



var isInside = function (ele, ancestor) {
    var ancestors = (0,_getAncestors_js__WEBPACK_IMPORTED_MODULE_0__.getAncestors)(ele);
    if (ancestors.length) {
        if ((0,_type_isString_js__WEBPACK_IMPORTED_MODULE_1__.isString)(ancestor)) {
            var ok_1 = false;
            (0,_loop_each_js__WEBPACK_IMPORTED_MODULE_2__.each)(ancestors, function (a) {
                if (a.matches && a.matches(ancestor)) {
                    ok_1 = true;
                    return false;
                }
            });
            return ok_1;
        }
        if (ancestor instanceof HTMLElement) {
            return ancestors.indexOf(ancestor) > -1;
        }
    }
    return false;
};



/***/ }),

/***/ "./dist/fn/html/makeReactive.js":
/*!**************************************!*\
  !*** ./dist/fn/html/makeReactive.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeReactive: () => (/* binding */ makeReactive)
/* harmony export */ });
/* harmony import */ var _browser_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../browser/log.js */ "./dist/fn/browser/log.js");
/* harmony import */ var _object_createObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../object/createObject.js */ "./dist/fn/object/createObject.js");
/* harmony import */ var _type_isSymbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/isSymbol.js */ "./dist/fn/type/isSymbol.js");
/* harmony import */ var _type_isNumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../type/isNumber.js */ "./dist/fn/type/isNumber.js");
/* harmony import */ var _type_isArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../type/isArray.js */ "./dist/fn/type/isArray.js");
/* harmony import */ var _browser_warning_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../browser/warning.js */ "./dist/fn/browser/warning.js");
/* harmony import */ var _type_isFunction_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../type/isFunction.js */ "./dist/fn/type/isFunction.js");
/* harmony import */ var _type_isSame_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../type/isSame.js */ "./dist/fn/type/isSame.js");








var makeReactive = function (obj, onSet, parent, parentProp) {
    var parentString = (parent === null || parent === void 0 ? void 0 : parent.$cid) || '';
    var prefix = '__bbn_' + (parentString ? parentString + '_' : '');
    if (obj && typeof obj === 'object' && [undefined, Object, Array].includes(obj.constructor)) {
        if (obj.__bbnIsProxy && obj.__bbnParent === parent) {
            return obj;
        }
        if (parent && parent.$options && parent.$options.name === 'bbn-loadbar') {
            (0,_browser_log_js__WEBPACK_IMPORTED_MODULE_0__.log)(['MAKING bbn-loadbar', obj]);
        }
        if (!obj.__bbnWatchers) {
            Reflect.defineProperty(obj, '__bbnWatchers', {
                value: (0,_object_createObject_js__WEBPACK_IMPORTED_MODULE_1__.createObject)(),
                writable: true,
                configurable: true,
                enumerable: false,
            });
        }
        var handler = {
            get: function (target, key) {
                var realValue = Reflect.get(target, key);
                var realTarget = target.__bbnRoot || target;
                if ((0,_type_isSymbol_js__WEBPACK_IMPORTED_MODULE_2__.isSymbol)(key)) {
                    return Reflect.get(realTarget, key);
                }
                var propName = parentProp ? parentProp + '.' + key : key;
                var hiddenKey = prefix + ((0,_type_isNumber_js__WEBPACK_IMPORTED_MODULE_3__.isNumber)(key) ? key.toString() : key);
                if (['fill', 'pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'].includes(key) &&
                    (0,_type_isArray_js__WEBPACK_IMPORTED_MODULE_4__.isArray)(target)) {
                    return function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var res = realTarget[key].apply(realTarget, args);
                        (0,_browser_warning_js__WEBPACK_IMPORTED_MODULE_5__.warning)('DOING ARRAY STUFF');
                        (0,_browser_log_js__WEBPACK_IMPORTED_MODULE_0__.log)(target.__bbnParent);
                        onSet(target, 'length', parent);
                        return res;
                    };
                }
                if ((0,_type_isFunction_js__WEBPACK_IMPORTED_MODULE_6__.isFunction)(realValue)) {
                    return realValue;
                }
                if (key === '__bbnRoot') {
                    var root = obj;
                    while (root && (root === null || root === void 0 ? void 0 : root.__bbnTarget)) {
                        root = root.__bbnTarget;
                    }
                    return root;
                }
                if (key === '__bbnIsProxy') {
                    return true;
                }
                if (key === '__bbnTarget') {
                    return target;
                }
                if (key === '__bbnParent') {
                    return parent;
                }
                if (key === '__bbnWatchers') {
                    return target.__bbnWatchers;
                }
                if (key.indexOf('__bbn_') === 0) {
                    return Reflect.get(target, key);
                }
                if (key === 'length' && (0,_type_isArray_js__WEBPACK_IMPORTED_MODULE_4__.isArray)(target.__bbnRoot || target)) {
                    return realTarget.length;
                }
                if (!(key in target)) {
                    return realValue;
                }
                if (realValue &&
                    typeof realValue === 'object' &&
                    [undefined, Object, Array].includes(realValue.constructor)) {
                    if (realValue.__bbnIsProxy && realValue.__bbnParent === parent) {
                        return realTarget[hiddenKey];
                    }
                    if (!(hiddenKey in realTarget)) {
                        Reflect.defineProperty(realTarget, hiddenKey, {
                            value: makeReactive(realValue, onSet, parent, propName),
                            writable: true,
                            configurable: true,
                            enumerable: false,
                        });
                    }
                    if (realTarget[hiddenKey].__bbnIsProxy && !realTarget.__bbnWatchers[parentString]) {
                        realTarget.__bbnWatchers[parentString] = propName;
                    }
                    return realTarget[hiddenKey];
                }
                return realValue;
            },
            set: function (target, key, value) {
                if ((0,_type_isSymbol_js__WEBPACK_IMPORTED_MODULE_2__.isSymbol)(key)) {
                    return Reflect.get(target, key, value);
                }
                var realTarget = target.__bbnRoot || target;
                var propName = parentProp ? parentProp + '.' + key : key;
                if ((0,_type_isSymbol_js__WEBPACK_IMPORTED_MODULE_2__.isSymbol)(key)) {
                    return Reflect.get(target, key);
                }
                if (parent && parent.$options && parent.$options.name === 'bbn-loadbar') {
                    (0,_browser_log_js__WEBPACK_IMPORTED_MODULE_0__.log)(['Setting proxy prop in ' + parent.$options.name, target, key, value]);
                }
                if (!(0,_type_isSame_js__WEBPACK_IMPORTED_MODULE_7__.isSame)(realTarget[key], value)) {
                    if (key.indexOf('__bbn_') === 0) {
                        Reflect.defineProperty(realTarget, key, {
                            value: makeReactive(value, onSet, parent, propName),
                            writable: true,
                            configurable: true,
                            enumerable: false,
                        });
                    }
                    else {
                        if (value &&
                            typeof value === 'object' &&
                            [undefined, Object, Array].includes(value.constructor)) {
                            var hiddenKey = prefix + ((0,_type_isNumber_js__WEBPACK_IMPORTED_MODULE_3__.isNumber)(key) ? key.toString() : key);
                            Reflect.defineProperty(realTarget, hiddenKey, {
                                value: makeReactive(value, onSet, parent, propName),
                                writable: true,
                                configurable: true,
                                enumerable: false,
                            });
                            if (realTarget[hiddenKey].__bbnIsProxy && !realTarget.__bbnWatchers[parentString]) {
                                realTarget.__bbnWatchers[parentString] = propName;
                            }
                        }
                    }
                    if (parent && parent.$options && parent.$options.name === 'bbn-loadbar') {
                        (0,_browser_log_js__WEBPACK_IMPORTED_MODULE_0__.log)([
                            'Setting proxy prop in ' +
                                parent.$options.name +
                                ' ' +
                                ((0,_type_isNumber_js__WEBPACK_IMPORTED_MODULE_3__.isNumber)(key) ? key.toString() : key),
                            value,
                            target,
                        ]);
                    }
                    Reflect.set(realTarget, key, value);
                    onSet(target, key, parent);
                }
                return true;
            },
            defineProperty: function (target, key, description) {
                var realTarget = target;
                var propName = parentProp ? parentProp + '.' + key : key;
                if (key === '__bbnWatchers' || (0,_type_isSymbol_js__WEBPACK_IMPORTED_MODULE_2__.isSymbol)(key) || key.indexOf('__bbn_') === 0) {
                    Reflect.defineProperty(realTarget, key, description);
                }
                else {
                    var hiddenKey = prefix + ((0,_type_isNumber_js__WEBPACK_IMPORTED_MODULE_3__.isNumber)(key) ? key.toString() : key);
                    Reflect.defineProperty(realTarget, hiddenKey, {
                        value: makeReactive(description.value, onSet, parent, propName),
                        writable: true,
                        configurable: true,
                        enumerable: false,
                    });
                }
                onSet(target, key, parent);
                return true;
            },
            deleteProperty: function (target, key) {
                var realTarget = target;
                if (key.indexOf('__bbn_') === 0) {
                    Reflect.deleteProperty(realTarget, key);
                }
                else {
                    var hiddenKey = prefix + ((0,_type_isNumber_js__WEBPACK_IMPORTED_MODULE_3__.isNumber)(key) ? key.toString() : key);
                    Reflect.deleteProperty(realTarget, hiddenKey);
                    Reflect.deleteProperty(target, key);
                }
                return true;
            },
        };
        return new Proxy(obj, handler);
    }
    return obj;
};



/***/ }),

/***/ "./dist/fn/html/selector.js":
/*!**********************************!*\
  !*** ./dist/fn/html/selector.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selector: () => (/* binding */ selector)
/* harmony export */ });
/**
 * @ignore
 * @method   selector
 * @todo     Add method description for selector
 * @global
 * @memberof bbn.fn
 * @returns  {HTMLElement | undefined}
 */
var selector = function (ele) {
    return typeof ele === "string" ? document.querySelector(ele) : ele;
};



/***/ }),

/***/ "./dist/fn/init.js":
/*!*************************!*\
  !*** ./dist/fn/init.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _string_substr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string/substr.js */ "./dist/fn/string/substr.js");
/* harmony import */ var _loop_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loop/each.js */ "./dist/fn/loop/each.js");
/* harmony import */ var _object_extend_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object/extend.js */ "./dist/fn/object/extend.js");
/* harmony import */ var _style_addColors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/addColors.js */ "./dist/fn/style/addColors.js");
/* harmony import */ var _ajax_link_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ajax/link.js */ "./dist/fn/ajax/link.js");
/* harmony import */ var _form_submit_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form/submit.js */ "./dist/fn/form/submit.js");
/* harmony import */ var _style_resize_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style/resize.js */ "./dist/fn/style/resize.js");
/* harmony import */ var _browser_isMobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./browser/isMobile.js */ "./dist/fn/browser/isMobile.js");
/* harmony import */ var _browser_isTabletDevice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./browser/isTabletDevice.js */ "./dist/fn/browser/isTabletDevice.js");
/* harmony import */ var _type_isFunction_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./type/isFunction.js */ "./dist/fn/type/isFunction.js");
/* harmony import */ var _browser_log_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./browser/log.js */ "./dist/fn/browser/log.js");











/**
 * Initializes the library bbn basing on the given configuration object.
 * - Gives to the environment the dimension of the window.innerWidth and window.innerHeight
 * - Defines the server's path (difference between the host and the current dir)
 * - Adds the colors contained in bbn.var.colors to define the css classes for background and colors.
 * - Adds the event listener to the document
 * - Activates the history
 * @method   init
 * @global
 * @memberof bbn.fn
 * @param    {Object} cfg
 * @returns
 */
var init = function (cfg, force) {
    var parts;
    if (!bbn.env.isInit || force) {
        bbn.env.root =
            document.baseURI.length > 0 ? document.baseURI : bbn.env.host;
        if (bbn.env.root.length && (0,_string_substr_js__WEBPACK_IMPORTED_MODULE_0__.substr)(bbn.env.root, -1) !== "/") {
            bbn.env.root += "/";
        }
        if (!bbn.env.isInit && typeof dayjs !== "undefined") {
            (0,_loop_each_js__WEBPACK_IMPORTED_MODULE_1__.each)([
                "advancedFormat",
                "arraySupport",
                "badMutable",
                "buddhistEra",
                "calendar",
                "customParseFormat",
                "dayOfYear",
                "devHelper",
                "duration",
                "isBetween",
                "isLeapYear",
                "isSameOrAfter",
                "isSameOrBefore",
                "isToday",
                "isTomorrow",
                "isYesterday",
                "isoWeek",
                "isoWeeksInYear",
                "localeData",
                "localizedFormat",
                "minMax",
                "objectSupport",
                "pluralGetSet",
                "quarterOfYear",
                "relativeTime",
                "timezone",
                "toArray",
                "toObject",
                "updateLocale",
                "utc",
                "weekOfYear",
                "weekYear",
                "weekday",
            ], function (plugin) {
                if (window["dayjs_plugin_" + plugin]) {
                    dayjs.extend(window["dayjs_plugin_" + plugin]);
                }
            });
        }
        /* The server's path (difference between the host and the current dir */
        if (typeof cfg === "object") {
            (0,_object_extend_js__WEBPACK_IMPORTED_MODULE_2__.extend)(true, bbn, cfg);
        }
        bbn.env.path = (0,_string_substr_js__WEBPACK_IMPORTED_MODULE_0__.substr)(bbn.env.url, bbn.env.root.length);
        parts = bbn.env.path.split("/");
        //$.each(parts, function(i, v){
        (0,_loop_each_js__WEBPACK_IMPORTED_MODULE_1__.each)(parts, function (v, i) {
            v = decodeURI(v.trim());
            if (v !== "") {
                bbn.env.params.push(v);
            }
        });
        if (bbn.var.colors) {
            (0,_style_addColors_js__WEBPACK_IMPORTED_MODULE_3__.addColors)(bbn.var.colors);
        }
        if (bbn.env.lang && undefined !== dayjs) {
            dayjs.locale(bbn.env.lang);
        }
        window.onfocus = function () {
            bbn.env.isFocused = true;
        };
        window.onblur = function () {
            bbn.env.isFocused = false;
            bbn.env.timeoff = Math.round(new Date().getTime() / 1000);
        };
        document.addEventListener("focusin", function (e) {
            if (e.target instanceof HTMLElement &&
                !e.target.classList.contains("bbn-no")) {
                bbn.env.focused = e.target;
            }
            bbn.env.last_focus = new Date().getTime();
        });
        document.addEventListener("click", function (e) {
            bbn.env.last_focus = new Date().getTime();
            if (bbn.env.nav !== "ajax") {
                return;
            }
            var target = e.target;
            if (target instanceof HTMLElement && target.tagName !== "A") {
                var p = target;
                while (p && p.tagName !== "A") {
                    if (p.tagName === "BODY") {
                        break;
                    }
                    p = p.parentElement;
                }
                if (p && p.tagName === "A") {
                    target = p;
                }
                else {
                    target = null;
                }
            }
            if (target instanceof HTMLElement &&
                target.hasAttribute("href") &&
                !target.hasAttribute("target") &&
                !target.classList.contains("bbn-no")) {
                e.preventDefault();
                e.stopPropagation();
                (0,_ajax_link_js__WEBPACK_IMPORTED_MODULE_4__.link)(target.getAttribute("href"));
                return false;
            }
        });
        (0,_loop_each_js__WEBPACK_IMPORTED_MODULE_1__.each)(document.querySelectorAll("form:not(.bbn-no), form:not(.bbn-form)"), function (ele) {
            ele.addEventListener("submit", function (e) {
                (0,_form_submit_js__WEBPACK_IMPORTED_MODULE_5__.submit)(ele, e);
            });
        });
        window.addEventListener("hashchange", function () {
            bbn.env.hashChanged = new Date().getTime();
        }, false);
        window.addEventListener("resize", function () {
            (0,_style_resize_js__WEBPACK_IMPORTED_MODULE_6__.resize)();
        });
        window.addEventListener("orientationchange", function () {
            (0,_style_resize_js__WEBPACK_IMPORTED_MODULE_6__.resize)();
        });
        (0,_style_resize_js__WEBPACK_IMPORTED_MODULE_6__.resize)();
        if ((0,_browser_isMobile_js__WEBPACK_IMPORTED_MODULE_7__.isMobile)()) {
            document.body.classList.add("bbn-mobile");
            if ((0,_browser_isTabletDevice_js__WEBPACK_IMPORTED_MODULE_8__.isTabletDevice)()) {
                document.body.classList.add("bbn-tablet");
            }
        }
        if (window.history) {
            window.onpopstate = function (e) {
                var h = window.history;
                if (!bbn.env.historyDisabled && h) {
                    //e.preventDefault();
                    if (bbn.fn.defaultHistoryFunction(h.state)) {
                        var state = h.state;
                        if (state) {
                            //link(substr(state.url, bbn.env.root.length), $.extend({title: state.title}, state.data));
                            (0,_ajax_link_js__WEBPACK_IMPORTED_MODULE_4__.link)(state.url, (0,_object_extend_js__WEBPACK_IMPORTED_MODULE_2__.extend)({ title: state.title || bbn.env.siteTitle }, state.data || {}));
                        }
                        else if (state && state.data && (0,_type_isFunction_js__WEBPACK_IMPORTED_MODULE_9__.isFunction)(state.data.script)) {
                            state.data.script();
                        }
                    }
                }
            };
        }
        bbn.env.isInit = true;
        document.dispatchEvent(new Event("bbninit"));
        if (bbn.env.logging) {
            (0,_browser_log_js__WEBPACK_IMPORTED_MODULE_10__.log)("Logging in bbn is enabled");
        }
    }
};



/***/ }),

/***/ "./dist/fn/loop/each.js":
/*!******************************!*\
  !*** ./dist/fn/loop/each.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   each: () => (/* binding */ each)
/* harmony export */ });
/* harmony import */ var _type_isNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isNumber.js */ "./dist/fn/type/isNumber.js");
/* harmony import */ var _type_isIterable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/isIterable.js */ "./dist/fn/type/isIterable.js");
/* harmony import */ var _iterate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iterate.js */ "./dist/fn/loop/iterate.js");



/**
 * Executes the provided function on each element of the given array.
 *
 * Returning false will stop the loop.
 *
 * @method   each
 * @global
 * @example
 * ```javascript
 * let res = 0;
 * bbn.fn.each([4, 5, 5, 10, 1, 2], d => {
 *   res += d;
 * });
 * // res = 27
 * ```
 * @example
 * ```javascript
 * let res = 0;
 * bbn.fn.each([4, 5, 5, 10, 1, 2], d => {
 *   if (res >= 20) {
 *     return false;
 *   }
 *   res += d;
 * });
 * // res = 24
 * ```
 * @memberof bbn.fn
 * @param    {*}     arr The array to loop on
 * @param    {Function}  fn  The function, gets the array's element and the index as arguments
 * @returns  {[Array, Object, void]}
 */
var each = function (arr, fn) {
    if ((0,_type_isNumber_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(arr) && arr > 0) {
        for (var i = 0; i < arr; i++) {
            if (fn(i, i) === false) {
                return;
            }
        }
        return;
    }
    if ((0,_type_isIterable_js__WEBPACK_IMPORTED_MODULE_1__.isIterable)(arr)) {
        for (var i = 0; i < arr.length; i++) {
            if (fn(arr[i], i) === false) {
                return;
            }
        }
        return arr;
    }
    return (0,_iterate_js__WEBPACK_IMPORTED_MODULE_2__.iterate)(arr, fn);
};



/***/ }),

/***/ "./dist/fn/loop/fori.js":
/*!******************************!*\
  !*** ./dist/fn/loop/fori.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fori: () => (/* binding */ fori)
/* harmony export */ });
/* harmony import */ var _type_isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isArray.js */ "./dist/fn/type/isArray.js");
/* harmony import */ var _type_isNumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/isNumber.js */ "./dist/fn/type/isNumber.js");


/**
 * Executes the provided function on each element of the given array.
 *
 * A minimum and a maximum value can be provided, within the boundaries of the
 * array's indexes. Returning false will stop the loop.
 *
 * @method   fori
 * @global
 * @example
 * ```javascript
 * let res = 0;
 * bbn.fn.fori([4, 5, 5, 10, 1, 2], d => {
 *   res += d;
 * }, 3);
 * // res = 24
 * ```
 * @example
 * ```javascript
 * let res = 0;
 * bbn.fn.fori([4, 5, 5, 10, 1, 2], d => {
 *   if (res >= 20) {
 *     return false;
 *   }
 *   res += d;
 * }, 4, 1);
 * // res = 20
 * ```
 * @memberof bbn.fn
 * @param    {Array}     arr The array to loop on
 * @param    {Function}  fn  The function, gets the array's element and the index as arguments
 * @param    {Number}    max The index to which the loop will stop
 * @param    {Number}    min The index at which the loop will start
 * @returns  {undefined}
 */
var fori = function (arr, fn, max, min) {
    if (max === void 0) { max = arr.length - 1; }
    if (min === void 0) { min = 0; }
    if ((0,_type_isArray_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(arr)) {
        var realMax = arr.length - 1;
        if (!(0,_type_isNumber_js__WEBPACK_IMPORTED_MODULE_1__.isNumber)(max) || !(0 < max && max <= realMax)) {
            max = realMax;
        }
        if (!(0,_type_isNumber_js__WEBPACK_IMPORTED_MODULE_1__.isNumber)(min) || !(0 <= min && min < realMax) || min > max) {
            min = 0;
        }
        for (var i = min; i <= max; i++) {
            if (fn(arr[i], i) === false) {
                return;
            }
        }
    }
};



/***/ }),

/***/ "./dist/fn/loop/forir.js":
/*!*******************************!*\
  !*** ./dist/fn/loop/forir.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   forir: () => (/* binding */ forir)
/* harmony export */ });
/* harmony import */ var _type_isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isArray.js */ "./dist/fn/type/isArray.js");
/* harmony import */ var _type_isNumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/isNumber.js */ "./dist/fn/type/isNumber.js");


/**
 * Executes the provided function on each element of the given array, going backward.
 *
 * A maximum and a minimum value can be provided, within the boundaries of the
 * array's indexes. Returning false will stop the loop.
 *
 * @method   forir
 * @global
 * @example
 * ```javascript
 * let res = 0;
 * bbn.fn.forir([4, 5, 5, 10, 1, 2], d => {
 *   res += d;
 * }, 4, 2);
 * // res = 16
 * ```
 * @example
 * ```javascript
 * let res = 0;
 * bbn.fn.forir([4, 5, 5, 10, 1, 2], d => {
 *   if (res >= 20) {
 *     return false;
 *   }
 *   res += d;
 * });
 * // res = 23
 * ```
 * @memberof bbn.fn
 * @param    {Array}     arr The array to loop on
 * @param    {Function}  fn  The function, gets the array's element and the index as arguments
 * @param    {Number}    max The index to which the loop will stop
 * @param    {Number}    min The index at which the loop will start
 * @returns  {undefined}
 */
var forir = function (arr, fn, max, min) {
    if (max === void 0) { max = arr.length - 1; }
    if (min === void 0) { min = 0; }
    if ((0,_type_isArray_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(arr)) {
        var realMax = arr.length - 1;
        if (!(0,_type_isNumber_js__WEBPACK_IMPORTED_MODULE_1__.isNumber)(max) || !(0 < max && max <= realMax)) {
            max = realMax;
        }
        if (!(0,_type_isNumber_js__WEBPACK_IMPORTED_MODULE_1__.isNumber)(min) || !(0 <= min && min < realMax) || min > max) {
            min = 0;
        }
        for (var i = max; i >= min; i--) {
            if (fn(arr[i], i) === false) {
                return;
            }
        }
    }
};



/***/ }),

/***/ "./dist/fn/loop/iterate.js":
/*!*********************************!*\
  !*** ./dist/fn/loop/iterate.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iterate: () => (/* binding */ iterate)
/* harmony export */ });
/* harmony import */ var _object_removePrivateProp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../object/removePrivateProp.js */ "./dist/fn/object/removePrivateProp.js");

/**
 * Executes the provided function on each property of the given object.
 *
 * @method   iterate
 * @global
 * @example
 * ```javascript
 * //["value1", 2]
 * let arr = [];
 * bbn.fn.iterate({field1: "value1", field2: 2}, (val, idx) => {
 *   arr.push(value);
 * });
 * ```
 * @memberof bbn.fn
 * @param    {(Object|Number)} obj       The object to loop on
 * @param    {Function}        fn        The function, gets the array's element and the index as arguments
 * @param    {Boolean}         noPrivate If set to true the _private_ properties won't be included
 * @param    {Boolean}         reverse   If set to true the order of the keys will be reversed
 * @returns  {Object}
 */
var iterate = function (obj, fn, noPrivate, reverse) {
    if (noPrivate === void 0) { noPrivate = false; }
    if (reverse === void 0) { reverse = false; }
    if (obj !== null && typeof obj === "object") {
        var iter = Object.keys(noPrivate ? (0,_object_removePrivateProp_js__WEBPACK_IMPORTED_MODULE_0__.removePrivateProp)(obj) : obj);
        if (reverse) {
            iter.reverse();
        }
        for (var _i = 0, iter_1 = iter; _i < iter_1.length; _i++) {
            var prop = iter_1[_i];
            if (fn(obj[prop], prop) === false) {
                break;
            }
        }
    }
    return obj;
};



/***/ }),

/***/ "./dist/fn/loop/riterate.js":
/*!**********************************!*\
  !*** ./dist/fn/loop/riterate.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   riterate: () => (/* binding */ riterate)
/* harmony export */ });
/* harmony import */ var _iterate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iterate.js */ "./dist/fn/loop/iterate.js");

/**
 * Executes the provided function on each property of the given object.
 *
 * @method   riterate
 * @global
 * @example
 * ```javascript
 * //["value1", 2]
 * let arr = [];
 * bbn.fn.iterate({field1: "value1", field2: 2}, (val, idx) => {
 *   arr.push(value);
 * });
 * ```
 * @memberof bbn.fn
 * @param    {(Object|Number)} obj       The object to loop on
 * @param    {Function}        fn        The function, gets the array's element and the index as arguments
 * @param    {Boolean}         noPrivate If set to true the _private_ properties won't be included
 * @returns  {Object}
 */
var riterate = function (obj, fn, noPrivate) {
    if (noPrivate === void 0) { noPrivate = false; }
    return (0,_iterate_js__WEBPACK_IMPORTED_MODULE_0__.iterate)(obj, fn, noPrivate, true);
};



/***/ }),

/***/ "./dist/fn/misc/analyzeFunction.js":
/*!*****************************************!*\
  !*** ./dist/fn/misc/analyzeFunction.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   analyzeFunction: () => (/* binding */ analyzeFunction)
/* harmony export */ });
/* harmony import */ var _string_md5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../string/md5.js */ "./dist/fn/string/md5.js");

/**
 * Analyzes the given function and extracts details about its structure.
 *
 * @function analyzeFunction
 * @param {Function} fn - The function to analyze.
 * @returns {Object} An object containing details about the function.
 * @throws {Error} When unexpected syntax is encountered while parsing.
 */
var analyzeFunction = function (fn) {
    var all = typeof fn === "function" ? fn.toString() : fn;
    if (typeof all !== "string") {
        throw Error("Unexpected type " + typeof fn + " while parsing function");
    }
    var exp = "";
    var isArrow = false;
    var isAsync = false;
    var hasFunction = false;
    var name = "";
    var parOpened = 0;
    var parClosed = 0;
    var args = [];
    var currentArg = {};
    var body;
    var currentQuote = "";
    var escapable = ['"', "'", "`"];
    var isEscaped = false;
    var settingDefault = false;
    var isComment = false;
    var isCommentLine = false;
    var isDestructuring = false;
    var returnType = "";
    for (var i = 0; i < all.length; i++) {
        // Handle string literals
        if (!isComment && all[i] === "/" && all[i + 1] === "*") {
            isComment = true;
            exp = "";
        }
        else if (all[i] === "/" && all[i - 1] === "*") {
            isComment = false;
        }
        else if (!isCommentLine && all[i] === "/" && all[i + 1] === "/") {
            isCommentLine = true;
            exp = "";
        }
        else if (all[i] === "\n") {
            isCommentLine = false;
        }
        else if (isComment || isCommentLine) {
            continue;
        }
        else if (all[i] === currentQuote && !isEscaped && currentQuote) {
            currentQuote = "";
            exp += all[i];
        }
        else if (currentQuote) {
            isEscaped = all[i] === "\\" && !isEscaped;
            exp += all[i];
        }
        else if (escapable.includes(all[i]) && !isEscaped) {
            currentQuote = all[i];
            exp += all[i];
        }
        else if (all[i] === "(") {
            parOpened++;
            if (exp.trim() !== "") {
                if (exp.trim() === "function") {
                    hasFunction = true;
                }
                else if (exp.trim() !== "async") {
                    name = exp.trim();
                    var tmp = name.match(/^([a-zA-Z0-9_]+)<[a-zA-Z0-9_]+>$/);
                    if (tmp) {
                        name = tmp[1];
                    }
                }
                exp = "";
            }
        }
        else if (all[i] === ")") {
            if (parOpened === parClosed + 1) {
                if (settingDefault) {
                    currentArg["default"] = exp.trim();
                    settingDefault = false;
                }
                else if (exp) {
                    currentArg["name"] = exp.trim();
                }
                if (currentArg["name"] || currentArg["default"]) {
                    args.push(currentArg);
                    currentArg = {};
                }
                exp = "";
            }
            parClosed++;
        }
        else if (isDestructuring && all[i] !== "}") {
            exp += all[i];
        }
        else if (parOpened && parOpened === parClosed && all[i] === ":") {
            var matches = all.substring(i + 1).trim().match(/^\s*([a-zA-Z0-9_]+)\s*\{/);
            if (!matches) {
                throw Error("Unexpected ':' while parsing function");
            }
            returnType = matches[1];
            body = all.substring(i + matches[0].length).trim();
            break;
        }
        else if (all[i] === "=" && all[i + 1] === ">") {
            if (exp.trim() !== "" && parOpened === parClosed) {
                currentArg["name"] = exp.trim();
                args.push(currentArg);
                currentArg = {};
                exp = "";
            }
            isArrow = true;
            i++;
            continue;
        }
        else if (all[i] === "=" && parOpened > parClosed && !settingDefault) {
            currentArg["name"] = exp.trim();
            exp = "";
            settingDefault = true;
        }
        else if (all[i] === ",") {
            if (isDestructuring) {
                exp += all[i];
            }
            else if (parOpened > parClosed) {
                if (settingDefault) {
                    currentArg["default"] = exp.trim();
                    settingDefault = false;
                }
                else if (exp) {
                    currentArg["name"] = exp.trim();
                }
                if (currentArg["name"] || currentArg["default"]) {
                    args.push(currentArg);
                    currentArg = {};
                }
                exp = "";
            }
            else {
                throw Error("Unexpected ',' while parsing function");
            }
        }
        else if (all[i] === "{" || all[i] === "}") {
            if (parOpened === parClosed) {
                body = all.substring(i).trim();
                break;
            }
            else {
                if (parOpened > parClosed) {
                    if (all[i] === "{" && !isDestructuring) {
                        isDestructuring = true;
                        exp = all[i];
                    }
                    else if (all[i] === "}" && isDestructuring) {
                        isDestructuring = false;
                        exp += all[i];
                    }
                }
                else {
                    exp = "";
                }
            }
        }
        else if (isArrow) {
            body = all.substring(all.indexOf("=>") + 2).trim();
            break;
        }
        else if (all[i] === " ") {
            if (exp.trim() !== "") {
                if (exp.trim() === "async") {
                    isAsync = true;
                }
                if (parOpened > parClosed) {
                    exp += all[i];
                }
                else {
                    exp = "";
                }
            }
        }
        else {
            exp += all[i];
        }
    }
    if (!body) {
        if (isArrow) {
            body = exp;
        }
        else {
            throw Error("Unexpected end of function while parsing function");
        }
    }
    var argString = args
        .map(function (arg) { return arg.name + (arg.default ? " = " + arg.default : ""); })
        .join(", ");
    var hash = (0,_string_md5_js__WEBPACK_IMPORTED_MODULE_0__.md5)(body + (name ? "-" + name : "") + (argString ? "-" + argString : ""));
    return {
        body: body,
        args: args,
        argString: argString,
        isArrow: isArrow,
        hasFunction: hasFunction,
        name: name,
        isAsync: isAsync,
        hash: hash,
        returnType: returnType
    };
};



/***/ }),

/***/ "./dist/fn/misc/getTimeoff.js":
/*!************************************!*\
  !*** ./dist/fn/misc/getTimeoff.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTimeoff: () => (/* binding */ getTimeoff)
/* harmony export */ });
/**
 * Returns the length of time the window has not been focused in seconds.
 * @method   getTimeoff
 * @global
 * @example
 * ``` javascript
 * bbn.fn.getTimeoff();
 * // 0
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
var getTimeoff = function () {
    if (!bbn.env.isFocused) {
        return Math.round(new Date().getTime() / 1000 - bbn.env.timeoff);
    }
    return 0;
};



/***/ }),

/***/ "./dist/fn/misc/money.js":
/*!*******************************!*\
  !*** ./dist/fn/misc/money.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   money: () => (/* binding */ money)
/* harmony export */ });
/* harmony import */ var _type_isNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isNumber.js */ "./dist/fn/type/isNumber.js");

/**
 * Returns the given value to money format basing on the given configuration.
 *
 * @method   money
 * @global
 *
 * @example
 * ``` javascript
 * // "5 856.0 $"
 * bbn.fn.money(5856, false, '$', false, '.' ,false, 1);
 * ```
 *
 * @memberof bbn.fn
 * @param {String|Number} val The value.
 * @param {Boolean} kilo If the value has to be rendered in kilo.
 * @param {String} currency The currency.
 * @param {String} novalue The string to return if no valid value is given.
 * @param {String} decimal The character to use separate decimals.
 * @param {String} thousands The character to use to separate thounsands.
 * @param {Number} precision The number of decimals places.
 */
var money = function (val, kilo, currency, novalue, decimal, thousands, precision) {
    /*
    money(val, kilo){
      let decimal = ',',
          currency = '€',
          thousands = ' ';
      if ( (isNaN(val) || !val) ){
        return '-';
      }
      if ( isNaN(val) || !val ){
        return 0;
      }
      if ( kilo && val ){
        val = val / 1000;
        if ( currency ){
          currency = 'K' + currency;
        }
      }
      return parseFloat(val).toFixed(0).replace(/./g, function(c, i, a) {
        if ( c === '.' ){
          return decimal;
        }
        return i && ((a.length - i) % 3 === 0) ? thousands + c : c;
      }) + ( currency ? ' ' + currency : '');
    },

       */
    if (!decimal) {
        decimal =
            decimal === undefined && bbn.env.money && bbn.env.money.decimal !== undefined ? bbn.env.money.decimal : '.';
    }
    if (!currency) {
        currency =
            currency === undefined && bbn.env.money && bbn.env.money.currency !== undefined
                ? bbn.env.money.currency
                : '';
    }
    if (!thousands) {
        thousands =
            thousands === undefined && bbn.env.money && bbn.env.money.thousands !== undefined
                ? bbn.env.money.thousands
                : ' ';
    }
    if (!precision) {
        precision =
            precision === undefined && bbn.env.money && bbn.env.money.precision !== undefined
                ? bbn.env.money.precision
                : 0;
    }
    if (!kilo) {
        kilo = kilo === undefined && bbn.env.money && bbn.env.money.kilo !== undefined ? bbn.env.money.kilo : false;
    }
    if (!novalue) {
        novalue =
            novalue === undefined && bbn.env.money && bbn.env.money.novalue !== undefined
                ? bbn.env.money.novalue
                : false;
    }
    if (!(0,_type_isNumber_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(precision)) {
        precision = kilo ? 3 : 0;
    }
    if ((val === 0) && (typeof precision === 'number') && (precision > 0)) {
        var res = val.toFixed(precision).replace('.', decimal);
        if (currency) {
            res += ' ' + (kilo ? 'K' + currency : currency);
        }
        return res;
    }
    if ((isNaN(val) || !val) && novalue) {
        return novalue;
    }
    if (isNaN(val) || !val) {
        return 0 + (currency ? ' ' + currency : '');
    }
    if (kilo && val) {
        val = val / 1000;
        if (currency) {
            currency = 'K' + currency;
        }
    }
    var v = val.toFixed(precision);
    var decimalPosition = 0;
    var decimalIdx = 10000;
    if (v) {
        decimalIdx = v.indexOf('.');
        if (decimalIdx <= 0) {
            decimalIdx = 10000;
        }
        else {
            decimalPosition = v.length - decimalIdx;
        }
    }
    return (v.replace(/./g, function (c, i, a) {
        if (c === '.') {
            return decimal;
        }
        return i && (a.length - i - decimalPosition) % 3 === 0 && i < decimalIdx ? thousands + c : c;
    }) + (currency ? ' ' + currency : ''));
};



/***/ }),

/***/ "./dist/fn/misc/percent.js":
/*!*********************************!*\
  !*** ./dist/fn/misc/percent.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   percent: () => (/* binding */ percent)
/* harmony export */ });
/**
 * Returns the value of the proportion giving the percentage and the total from where to be calculated.
 * @method   percent
 * @global
 *
 * @example
 * ```javascript
 * //150
 * bbn.fn.percent('15',1000);
 * ```
 *
 * @example
 * ```javascript
 * //75
 * bbn.fn.percent(15,500);
 * ```
 * @memberof bbn.fn
 * @param    {Number|String} percent
 * @param    {Number|String} cent
 * @returns  {Number}
 */
var percent = function (percent, cent) {
    return (cent / 100) * percent;
};



/***/ }),

/***/ "./dist/fn/misc/randomInt.js":
/*!***********************************!*\
  !*** ./dist/fn/misc/randomInt.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   randomInt: () => (/* binding */ randomInt)
/* harmony export */ });
/**
 * Returns a random integer.
 *
 * Generates and returns a random number in a range of numbers defined
 * by passed arguments a minimum and a maximum.
 *
 * @method   randomInt
 * @global
 *
 * @example
 * ```javascript
 * //56
 * bbn.fn.randomInt(1,100);
 * ```
 *
 * @memberof bbn.fn
 * @param    {Number} min
 * @param    {Number} max
 * @returns  {Number}
 */
var randomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};



/***/ }),

/***/ "./dist/fn/misc/roundDecimal.js":
/*!**************************************!*\
  !*** ./dist/fn/misc/roundDecimal.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   roundDecimal: () => (/* binding */ roundDecimal)
/* harmony export */ });
/**
 * @method   roundDecimal
 * @todo     Add method description for roundDecimal
 * @global
 * @memberof bbn.fn
 * @param    {Number} value
 * @param    {Number} decimals
 * @returns  {}
 */
var roundDecimal = function (value, decimals) {
    return Math.round(Math.pow(Math.pow(value, decimals), -decimals));
};



/***/ }),

/***/ "./dist/fn/misc/translate.js":
/*!***********************************!*\
  !*** ./dist/fn/misc/translate.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   translate: () => (/* binding */ translate)
/* harmony export */ });
/* harmony import */ var _loop_iterate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loop/iterate.js */ "./dist/fn/loop/iterate.js");

var translate = function (o, namespace) {
    var lng = namespace ? bbn.lng[namespace.indexOf('_') === 0 ? namespace : '_' + namespace] : bbn.lng;
    (0,_loop_iterate_js__WEBPACK_IMPORTED_MODULE_0__.iterate)(o, function (v, k) {
        lng[k] = v;
    });
};



/***/ }),

/***/ "./dist/fn/object/_compareValues.js":
/*!******************************************!*\
  !*** ./dist/fn/object/_compareValues.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _compareValues: () => (/* binding */ _compareValues)
/* harmony export */ });
/* harmony import */ var _getProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getProperty.js */ "./dist/fn/object/getProperty.js");
/* harmony import */ var _type_isString_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/isString.js */ "./dist/fn/type/isString.js");
/* harmony import */ var _string_removeAccents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../string/removeAccents.js */ "./dist/fn/string/removeAccents.js");
/* harmony import */ var _type_isDate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../type/isDate.js */ "./dist/fn/type/isDate.js");




/**
  * Compares the given property in the given objects and returns -1, 1, or 0 depending on their difference.
  *
  * This is only used as a sorting function by bbn.fn.order and bbn.fn.multiorder.
  *
  * @method   _compareValues
  * @global
  * @example
  * ```javascript
  * // Same value
  * bbn.fn._compareValues({year: 2015, value: 2}, {year: 2016, value: 2}, 'value');
  * // 0
  * ```
  * @example
  * ```javascript
  * // First value smaller than second
  * bbn.fn._compareValues({year: 2015, value: 2}, {year: 2016, value: 2}, 'year');
  * // -1
  * ```
  * @example
  * ```javascript
  * // First value greater than second
  * bbn.fn._compareValues({year: 2017, value: 2}, {year: 2016, value: 2}, 'year');
  * // 1
  * ```
  * @example
  * ```javascript
  * // First value is undefined
  * bbn.fn._compareValues({year: 2017}, {year: 2016, value: 2}, 'value');
  * // 1
  * ```
  * @memberof bbn.fn
  * @param    {Object} a    First object for comparison
  * @param    {Object} b    Second object for comparison
  * @param    {String} prop Property to compare
  * @param    {String} [dir=asc]  Direction of comparison (desc or asc by default)
  * @returns  {Number} Always either -1, 1, or 0
  */
var _compareValues = function (a, b, prop, dir) {
    if (dir === void 0) { dir = "asc"; }
    var va = (0,_getProperty_js__WEBPACK_IMPORTED_MODULE_0__.getProperty)(a, prop), vb = (0,_getProperty_js__WEBPACK_IMPORTED_MODULE_0__.getProperty)(b, prop), ta = (typeof va).toLowerCase(), tb = (typeof vb).toLowerCase();
    if (dir !== "asc" && (0,_type_isString_js__WEBPACK_IMPORTED_MODULE_1__.isString)(dir) && dir.toLowerCase() === "desc") {
        dir = "desc";
    }
    if (ta !== tb) {
        va = ta;
        vb = tb;
    }
    else {
        switch (ta) {
            case "string":
                va = (0,_string_removeAccents_js__WEBPACK_IMPORTED_MODULE_2__.removeAccents)(va).toLowerCase();
                vb = (0,_string_removeAccents_js__WEBPACK_IMPORTED_MODULE_2__.removeAccents)(vb).toLowerCase();
                break;
            case "boolean":
                va = va ? 1 : 0;
                vb = vb ? 1 : 0;
                break;
            case "object":
                if ((0,_type_isDate_js__WEBPACK_IMPORTED_MODULE_3__.isDate)(va)) {
                    va = va.getTime();
                    vb = (0,_type_isDate_js__WEBPACK_IMPORTED_MODULE_3__.isDate)(vb) ? vb.getTime() : 0;
                }
                break;
        }
    }
    if (va < vb) {
        return dir === "desc" ? 1 : -1;
    }
    if (va > vb) {
        return dir === "desc" ? -1 : 1;
    }
    return 0;
};



/***/ }),

/***/ "./dist/fn/object/arrayFromProp.js":
/*!*****************************************!*\
  !*** ./dist/fn/object/arrayFromProp.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrayFromProp: () => (/* binding */ arrayFromProp)
/* harmony export */ });
/* harmony import */ var _loop_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loop/each.js */ "./dist/fn/loop/each.js");
/* harmony import */ var _getProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getProperty.js */ "./dist/fn/object/getProperty.js");


/**
 * Creates and returns a new array made of the given property's values from the given array of objects.
 *
 * The returned array will always have the same length of the given array, even if the property is not found.
 *
 * @method   arrayFromProp
 * @global
 * @example
 * ```javascript
 * bbn.fn.arrayFromProp([
 *   {movie: "Brazil", year: 1985},
 *   {movie: "Donnie Darko", year: 2001},
 *   {movie: "Barry Lindon", year: 1976}
 * ], "year");
 * // [1985, 2001, 1976]
 * ```
 * @example
 * ```javascript
 * bbn.fn.arrayFromProp([
 *   {pupil: "Agnes Varda", grade: {year: "B", month: "A"}},
 *   {pupil: "Jacques Rivette"},
 *   {pupil: "Luc Besson", grade: {year: "C", month: "D"}},
 *   {pupil: "Nicole Garcia", grade: {year: "B", month: "B"}}
 * ], "grade.month");
 * // ["A", undefined, "D", "B"]
 * ```
 * @memberof bbn.fn
 * @param    {Array}  arr
 * @param    {String} prop
 * @returns  {Array}  The new array
 */
var arrayFromProp = function (arr, prop) {
    var r = [];
    (0,_loop_each_js__WEBPACK_IMPORTED_MODULE_0__.each)(arr, function (a, i) {
        r.push((0,_getProperty_js__WEBPACK_IMPORTED_MODULE_1__.getProperty)(a, prop));
    });
    return r;
};



/***/ }),

/***/ "./dist/fn/object/autoExtend.js":
/*!**************************************!*\
  !*** ./dist/fn/object/autoExtend.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   autoExtend: () => (/* binding */ autoExtend)
/* harmony export */ });
/* harmony import */ var _extend_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extend.js */ "./dist/fn/object/extend.js");

/**
 * Extends the bbn object by passing the namespace and the object it will merge with.
 *
 * This function is a self-centric shortcut for adding functions or proerties
 * to the bbn object itself.
 *
 * @method   autoExtend
 * @global
 * @example
 * ```javascript
 * bbn.fn.autoExtend("fn", {myOwnFunction: () => "Result of my own function"});
 * bbn.fn.myOwnFunction();
 * // Result of my own function
 * ```
 * @example
 * ```javascript
 * bbn.fn.autoExtend("env", {serverLanguage: "php"});
 * bbn.env.sercerLanguage
 * // php
 * ```
 * @example
 * ```javascript
 * bbn.fn.autoExtend("myProject", {name: "My Project"});
 * bbn.myProject.name
 * // Project
 * ```
 * @memberof bbn.fn
 * @param    {String}    namespace The bbn property, existing or not, in which the object will be merged
 * @param    {Object}    obj       The object to merge
 * @returns  {undefined} No return value
 */
var autoExtend = function (namespace, obj) {
    if (!bbn[namespace]) {
        bbn[namespace] = {};
        //$.extend(true, bbn[namespace], obj);
        (0,_extend_js__WEBPACK_IMPORTED_MODULE_0__.extend)(bbn[namespace], obj);
    }
    else {
        // $.extend(true, bbn[namespace], obj);
        (0,_extend_js__WEBPACK_IMPORTED_MODULE_0__.extend)(bbn[namespace], obj);
    }
};



/***/ }),

/***/ "./dist/fn/object/checkProps.js":
/*!**************************************!*\
  !*** ./dist/fn/object/checkProps.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkProps: () => (/* binding */ checkProps)
/* harmony export */ });
/* harmony import */ var _checkPropsDetails_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkPropsDetails.js */ "./dist/fn/object/checkPropsDetails.js");

var checkProps = function (obj, props, checkEmpty) {
    if (checkEmpty === void 0) { checkEmpty = false; }
    return (0,_checkPropsDetails_js__WEBPACK_IMPORTED_MODULE_0__.checkPropsDetails)(obj, props, checkEmpty).result;
};



/***/ }),

/***/ "./dist/fn/object/checkPropsDetails.js":
/*!*********************************************!*\
  !*** ./dist/fn/object/checkPropsDetails.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkPropsDetails: () => (/* binding */ checkPropsDetails)
/* harmony export */ });
/* harmony import */ var _type_isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isArray.js */ "./dist/fn/type/isArray.js");
/* harmony import */ var _type_isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/isObject.js */ "./dist/fn/type/isObject.js");
/* harmony import */ var _loop_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loop/each.js */ "./dist/fn/loop/each.js");
/* harmony import */ var _string_substr_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../string/substr.js */ "./dist/fn/string/substr.js");




var checkPropsDetails = function (obj, props, checkEmpty) {
    if (checkEmpty === void 0) { checkEmpty = false; }
    var res = {
        error: false,
        result: true,
    };
    if (typeof props === "string") {
        props = [props];
    }
    if (!(0,_type_isArray_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(props)) {
        res.error = bbn._("checkProps must receive a string or an array as props argument");
    }
    if (!(0,_type_isObject_js__WEBPACK_IMPORTED_MODULE_1__.isObject)(obj)) {
        res.error = bbn._("checkProps must receive an object as obj argument");
    }
    if (!res.error) {
        var check_1;
        (0,_loop_each_js__WEBPACK_IMPORTED_MODULE_2__.each)(props, function (varName) {
            varName = varName.trim().split(":");
            var type = varName[1] || false;
            varName = varName[0];
            if (obj[varName] === undefined) {
                res.error = varName + " " + bbn._("is not defined");
            }
            else if (type) {
                check_1 =
                    "is" +
                        (0,_string_substr_js__WEBPACK_IMPORTED_MODULE_3__.substr)(type, 0, 1).toUpperCase() +
                        (0,_string_substr_js__WEBPACK_IMPORTED_MODULE_3__.substr)(type, 1).toLowerCase();
                if (bbn.fn[check_1] === undefined) {
                    res.error = type + " " + bbn._("is not a valid type");
                }
                else if (!bbn.fn[check_1](obj[varName])) {
                    res.error = varName + " " + bbn._("is not a") + " " + type;
                }
            }
            else if (checkEmpty && !obj[varName]) {
                res.error = varName + " " + bbn._("is empty");
            }
            if (res.error) {
                return false;
            }
        });
    }
    if (res.error) {
        res.result = false;
    }
    return res;
};



/***/ }),

/***/ "./dist/fn/object/checkPropsOrDie.js":
/*!*******************************************!*\
  !*** ./dist/fn/object/checkPropsOrDie.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkPropsOrDie: () => (/* binding */ checkPropsOrDie)
/* harmony export */ });
/* harmony import */ var _checkPropsDetails_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkPropsDetails.js */ "./dist/fn/object/checkPropsDetails.js");

var checkPropsOrDie = function (obj, props, checkEmpty) {
    if (checkEmpty === void 0) { checkEmpty = false; }
    var res = (0,_checkPropsDetails_js__WEBPACK_IMPORTED_MODULE_0__.checkPropsDetails)(obj, props, checkEmpty);
    if (res.error) {
        throw new Error(res.error);
    }
    return true;
};



/***/ }),

/***/ "./dist/fn/object/circularReplacer.js":
/*!********************************************!*\
  !*** ./dist/fn/object/circularReplacer.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   circularReplacer: () => (/* binding */ circularReplacer)
/* harmony export */ });
/* harmony import */ var _type_isDom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isDom.js */ "./dist/fn/type/isDom.js");
/* harmony import */ var _type_isCp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/isCp.js */ "./dist/fn/type/isCp.js");


/**
 * Returns a function to give to JSON.stringify in order to avoid circular values.
 *
 * @returns Function
 */
var circularReplacer = function () {
    var visited = new WeakSet();
    return function (key, value) {
        if (typeof value === "object" && value !== null) {
            if (visited.has(value)) {
                return;
            }
            visited.add(value);
            if (![undefined, Object, Array, null].includes(value.constructor)) {
                if ((0,_type_isDom_js__WEBPACK_IMPORTED_MODULE_0__.isDom)(value)) {
                    if (value.bbnId) {
                        value =
                            "__BBN_DOM__" + value.tagName + "/" + value.bbnId + value.bbnHash;
                    }
                    else {
                        value = "__BBN_DOM__" + value.tagName + "/" + value.className;
                    }
                }
                else if ((0,_type_isCp_js__WEBPACK_IMPORTED_MODULE_1__.isCp)(value)) {
                    value = "__BBN_CP__" + value.$options.name + "/" + value.$cid;
                }
                else {
                    value = value.constructor.toString();
                }
            }
        }
        return value;
    };
};



/***/ }),

/***/ "./dist/fn/object/clone.js":
/*!*********************************!*\
  !*** ./dist/fn/object/clone.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clone: () => (/* binding */ clone)
/* harmony export */ });
/* harmony import */ var _type_isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isArray.js */ "./dist/fn/type/isArray.js");
/* harmony import */ var _type_isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/isObject.js */ "./dist/fn/type/isObject.js");
/* harmony import */ var _extend_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extend.js */ "./dist/fn/object/extend.js");



/**
 * Creates and returns a perfect clone - but different - from the given object.
 *
 * @method   clone
 * @global
 * @example
 * ```javascript
 * let obj = {name: "Thomas"};
 * let objCopy = bbn.fn.clone(obj);
 * obj.name = "Julie";
 * // obj:     {name: "Julie"}
 * // objCopy: {name: "Thomas"}
 * ```
 * @memberof bbn.fn
 * @param    {Object} obj The source object
 * @returns  {Object} A new object
 */
var clone = function (obj) {
    if ((0,_type_isArray_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(obj)) {
        return obj.slice().map(function (a) {
            return typeof a === "object" ? clone(a) : a;
        });
    }
    if ((0,_type_isObject_js__WEBPACK_IMPORTED_MODULE_1__.isObject)(obj)) {
        var o = Object.create(Object.getPrototypeOf(obj));
        return (0,_extend_js__WEBPACK_IMPORTED_MODULE_2__.extend)(true, o, obj);
    }
    return obj;
};



/***/ }),

/***/ "./dist/fn/object/compare.js":
/*!***********************************!*\
  !*** ./dist/fn/object/compare.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compare: () => (/* binding */ compare)
/* harmony export */ });
/* harmony import */ var _type_isEmpty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isEmpty.js */ "./dist/fn/type/isEmpty.js");
/* harmony import */ var _string_removeAccents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../string/removeAccents.js */ "./dist/fn/string/removeAccents.js");
/* harmony import */ var _type_isNull_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/isNull.js */ "./dist/fn/type/isNull.js");
/* harmony import */ var _type_isObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../type/isObject.js */ "./dist/fn/type/isObject.js");
/* harmony import */ var _type_isSame_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../type/isSame.js */ "./dist/fn/type/isSame.js");





/**
 * Performs a comparison between two values based on the given operator and returns a boolean.
 *
 * It is internally used by all the filtering functions; the available operators are:
 * - _===_, _=_, _equal_, _eq_, _is_, which stand for __===__
 * - _!==_, _notequal_, _neq_, _isnot_, which stand for __!==__
 * - _!=_, _different_, which stand for __!=__
 * - _contains_, _contain_, _icontains_, _icontain_
 * - _starts_, _start_
 * - _startswith_, _startsi_, _starti_, _istarts_, _istart_
 * - _endswith_, _endsi_, _endi_, _iends_, _iend_
 * - _like_
 * - _gt_, _>_, which stand for __>__
 * - _lt_, _<_, which stand for __<__
 * - _gte_, _>=_, which stand for __>=__
 * - _lte_, _<=_, which stand for __<=__
 * - _isnull_, which stands for __=== null__
 * - _isnotnull_, which stands for __!== null__
 * - _isempty_, which stands for __=== ''__
 * - _isnotempty_, which stands for __!== ''__
 *
 * The defaut operator (if none is given) is __==__ .
 *
 * @method   compare
 * @global
 * @example
 * ```javascript
 * bbn.fn.compare('foo', 'bar', 'eq');
 * // false
 * ```
 * @example
 * ```javascript
 * bbn.fn.compare('foo', 'bar', 'neq');
 * // true
 * ```
 * @example
 * ```javascript
 * bbn.fn.compare(3, 1, '>');
 * // true
 * ```
 * @example
 * ```javascript
 * bbn.fn.compare("JavaScript", "script", 'contain');
 * // true
 * ```
 * @memberof bbn.fn
 * @param    {String|Number} v1
 * @param    {String|Number} v2
 * @param    {String}        operator
 * @returns  {Boolean}       True if the values' comparison complies with the operator, false otherwise
 */
var compare = function (v1, v2, operator) {
    switch (operator) {
        case '===':
        case '=':
        case 'equal':
        case 'eq':
        case 'is':
            return v1 === v2;
        case '!==':
        case 'notequal':
        case 'neq':
        case 'isnot':
            return v1 !== v2;
        case '!=':
        case 'different':
            return v1 != v2;
        case 'contains':
        case 'contain':
        case 'icontains':
        case 'icontain':
            if ((0,_type_isEmpty_js__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(v1) || (0,_type_isEmpty_js__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(v2)) {
                return false;
            }
            return (0,_string_removeAccents_js__WEBPACK_IMPORTED_MODULE_1__.removeAccents)(v1).toLowerCase().indexOf((0,_string_removeAccents_js__WEBPACK_IMPORTED_MODULE_1__.removeAccents)(v2).toLowerCase()) !== -1;
        case 'doesnotcontain':
        case 'donotcontain':
            if ((0,_type_isNull_js__WEBPACK_IMPORTED_MODULE_2__.isNull)(v1) || (0,_type_isNull_js__WEBPACK_IMPORTED_MODULE_2__.isNull)(v2)) {
                return true;
            }
            return (0,_string_removeAccents_js__WEBPACK_IMPORTED_MODULE_1__.removeAccents)(v1.toLowerCase()).indexOf((0,_string_removeAccents_js__WEBPACK_IMPORTED_MODULE_1__.removeAccents)(v2.toLowerCase())) === -1;
        case 'starts':
        case 'start':
            if ((0,_type_isNull_js__WEBPACK_IMPORTED_MODULE_2__.isNull)(v1) || (0,_type_isNull_js__WEBPACK_IMPORTED_MODULE_2__.isNull)(v2)) {
                return false;
            }
            if (typeof v1 !== 'string') {
                v1 = v1.toString() || '';
            }
            if (typeof v2 !== 'string') {
                v2 = v2.toString() || '';
            }
            return v1.indexOf(v2) === 0;
        case 'startswith':
        case 'startsi':
        case 'starti':
        case 'istarts':
        case 'istart':
            if ((0,_type_isNull_js__WEBPACK_IMPORTED_MODULE_2__.isNull)(v1) || (0,_type_isNull_js__WEBPACK_IMPORTED_MODULE_2__.isNull)(v2)) {
                return false;
            }
            return (0,_string_removeAccents_js__WEBPACK_IMPORTED_MODULE_1__.removeAccents)(v1).toLowerCase().indexOf((0,_string_removeAccents_js__WEBPACK_IMPORTED_MODULE_1__.removeAccents)(v2).toLowerCase()) === 0;
        case 'endswith':
        case 'endsi':
        case 'endi':
        case 'iends':
        case 'iend':
            if ((0,_type_isNull_js__WEBPACK_IMPORTED_MODULE_2__.isNull)(v1) || (0,_type_isNull_js__WEBPACK_IMPORTED_MODULE_2__.isNull)(v2)) {
                return false;
            }
            return v1.lastIndexOf(v2) === v1.length - v2.length;
        case 'like':
            if ((0,_type_isNull_js__WEBPACK_IMPORTED_MODULE_2__.isNull)(v1) || (0,_type_isNull_js__WEBPACK_IMPORTED_MODULE_2__.isNull)(v2)) {
                return false;
            }
            return (0,_string_removeAccents_js__WEBPACK_IMPORTED_MODULE_1__.removeAccents)(v1).toLowerCase() === (0,_string_removeAccents_js__WEBPACK_IMPORTED_MODULE_1__.removeAccents)(v2).toLowerCase();
        case 'gt':
        case '>':
            return v1 > v2;
        case 'gte':
        case '>=':
            return v1 >= v2;
        case 'lt':
        case '<':
            return v1 < v2;
        case 'lte':
        case '<=':
            return v1 <= v2;
        case 'isnull':
            return v1 === null;
        case 'isnotnull':
            return v1 !== null;
        case 'isempty':
            return v1 === '';
        case 'isnotempty':
            return v1 !== '';
        case '==':
            if ((0,_type_isObject_js__WEBPACK_IMPORTED_MODULE_3__.isObject)(v1, v2)) {
                return (0,_type_isSame_js__WEBPACK_IMPORTED_MODULE_4__.isSame)(v1, v2);
            }
        default:
            return v1 == v2;
    }
};



/***/ }),

/***/ "./dist/fn/object/compareConditions.js":
/*!*********************************************!*\
  !*** ./dist/fn/object/compareConditions.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compareConditions: () => (/* binding */ compareConditions)
/* harmony export */ });
/* harmony import */ var _type_isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isArray.js */ "./dist/fn/type/isArray.js");
/* harmony import */ var _loop_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loop/each.js */ "./dist/fn/loop/each.js");
/* harmony import */ var _compare_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compare.js */ "./dist/fn/object/compare.js");
/* harmony import */ var _getProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getProperty.js */ "./dist/fn/object/getProperty.js");




/**
 * Checks whether the given data object complies or not with the given filter.
 *
 * The filter format must be full (i.e. with the properties logic and conditions) such as
 * seen in the function bbn.fn.search and can be generated by the function bbn.fn.filterToConditions.
 *
 * @method   compareConditions
 * @global
 * @example
 * ```javascript
 * let item = {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589};
 * bbn.fn.compareConditions(item, {
 *   logic: "AND",
 *   conditions: [
 *     {
 *        field: "director",
 *        value: "Steven Spielberg"
 *     }
 *   ]
 * });
 * // true
 * bbn.fn.compareConditions(item, bbn.fn.filterToConditions({director: "Steven Soderberg"}));
 * // false
 * bbn.fn.compareConditions(item, bbn.fn.filterToConditions({director: "Steven Spielberg"}));
 * // true
 * bbn.fn.compareConditions(item, bbn.fn.filterToConditions({year: 1980}, ">"));
 * // true
 * bbn.fn.compareConditions(item, {
 *   logic: "AND",
 *   conditions: [
 *     {
 *        field: "year",
 *        operator: "<",
 *        value: 1980
 *     }
 *   ]
 * });
 * // false
 * ```
 * @memberof bbn.fn
 * @param    {Object} data
 * @param    {Object} filter
 * @returns  {Boolean}
 */
var compareConditions = function (data, filter) {
    if (!filter.conditions || !filter.logic || !(0,_type_isArray_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(filter.conditions)) {
        throw new Error("Error in compareConditions: the filter should an abject with conditions and logic properties and conditions should be an array of objects");
    }
    var ok = filter.logic === "AND" ? true : false;
    (0,_loop_each_js__WEBPACK_IMPORTED_MODULE_1__.each)(filter.conditions, function (a) {
        var comparator;
        if (a.conditions && (0,_type_isArray_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(a.conditions)) {
            comparator = compareConditions(data, a);
        }
        else {
            comparator = (0,_compare_js__WEBPACK_IMPORTED_MODULE_2__.compare)((0,_getProperty_js__WEBPACK_IMPORTED_MODULE_3__.getProperty)(data, a.field), a.value, a.operator);
            if (comparator) {
                var bits = a.field.split(".");
                var prop = bits.pop();
                if (bits.length) {
                    (0,_loop_each_js__WEBPACK_IMPORTED_MODULE_1__.each)(bits, function (b) { return (data = data[b]); });
                }
                // Case where both are undefined: value and prop which doesn't exist; they are not the same!
                if ((0,_getProperty_js__WEBPACK_IMPORTED_MODULE_3__.getProperty)(data, prop) === undefined && a.value !== undefined) {
                    comparator = false;
                }
            }
        }
        if (comparator) {
            if (filter.logic === "OR") {
                ok = true;
                return false;
            }
        }
        else if (filter.logic === "AND") {
            ok = false;
            return false;
        }
    });
    return ok;
};



/***/ }),

/***/ "./dist/fn/object/count.js":
/*!*********************************!*\
  !*** ./dist/fn/object/count.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   count: () => (/* binding */ count)
/* harmony export */ });
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.js */ "./dist/fn/object/filter.js");

/**
 * Counts the number of objects matching the given filter in the given array.
 *
 * The arguments follow the same scheme as bbn.fn.search.
 *
 * @method   count
 * @global
 * @example
 * ```javascript
 * let ar = [
 *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
 *   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
 *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
 *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
 * ];
 * bbn.fn.count(ar, "id", 256);
 * // 1
 * bbn.fn.count(ar, {director: "Steven Spielberg"});
 * // 2
 * bbn.fn.search(ar, "year", 1975, ">");
 * // 3
 * // Complex filters: all the movies from Spielberg between 1974 and 1980
 * bbn.fn.search(ar, {
 *   logic: "AND",
 *   conditions: [
 *     {
 *       field: "director",
 *       operator: "eq",
 *       value: "Steven Spielberg"
 *     }, {
 *       logic: "AND",
 *       conditions: [
 *         {
 *            field: "year",
 *            operator: ">=",
 *            value: 1974
 *         }, {
 *            field: "year",
 *            operator: "<=",
 *            value: 1980
 *         }
 *       ]
 *     }
 *   ]
 * });
 * // 1
 * ```
 * @memberof bbn.fn
 * @param    {Array}                    arr       The subject array
 * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
 * @param    {*}                        val       The value with which comparing the given property
 * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
 * @returns  {Number}                   The number of items
 */
var count = function (arr, prop, val, operator) {
    if (val === void 0) { val = null; }
    if (operator === void 0) { operator = '='; }
    return (0,_filter_js__WEBPACK_IMPORTED_MODULE_0__.filter)(arr, prop, val, operator).length || 0;
};



/***/ }),

/***/ "./dist/fn/object/createObject.js":
/*!****************************************!*\
  !*** ./dist/fn/object/createObject.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createObject: () => (/* binding */ createObject)
/* harmony export */ });
/* harmony import */ var _extend_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extend.js */ "./dist/fn/object/extend.js");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

var createObject = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var obj = Object.create(null);
    if (args.length) {
        _extend_js__WEBPACK_IMPORTED_MODULE_0__.extend.apply(void 0, __spreadArray([obj], args, false));
    }
    return obj;
};



/***/ }),

/***/ "./dist/fn/object/deepPath.js":
/*!************************************!*\
  !*** ./dist/fn/object/deepPath.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deepPath: () => (/* binding */ deepPath)
/* harmony export */ });
/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.js */ "./dist/fn/object/search.js");
/* harmony import */ var _loop_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loop/each.js */ "./dist/fn/loop/each.js");
/* harmony import */ var _type_isArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/isArray.js */ "./dist/fn/type/isArray.js");



/**
 * Retrieves all elements of a hierarchical array corresponding to the filter.
 *
 * The arguments follow the same scheme as bbn.fn.search.
 *
 * @method   findAll
 * @global
 * @example
 * ```javascript
 * let ar = [
 *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
 *   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
 *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
 *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
 * ];
 * bbn.fn.count(ar, "id", 256);
 * // 1
 * bbn.fn.count(ar, {director: "Steven Spielberg"});
 * // 2
 * bbn.fn.search(ar, "year", 1975, ">");
 * // 3
 * // Complex filters: all the movies from Spielberg between 1974 and 1980
 * bbn.fn.search(ar, {
 *   logic: "AND",
 *   conditions: [
 *     {
 *       field: "director",
 *       operator: "eq",
 *       value: "Steven Spielberg"
 *     }, {
 *       logic: "AND",
 *       conditions: [
 *         {
 *            field: "year",
 *            operator: ">=",
 *            value: 1974
 *         }, {
 *            field: "year",
 *            operator: "<=",
 *            value: 1980
 *         }
 *       ]
 *     }
 *   ]
 * });
 * // 1
 * ```
 * @memberof bbn.fn
 * @todo Do the doc!
 * @param    {Array}                    arr       The subject array
 * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
 * @param    {*}                        val       The value with which comparing the given property
 * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
 * @returns  {Number}                   The number of items
 */
var deepPath = function (arr, filter, deepProperty, res) {
    if (res === void 0) { res = []; }
    var idx;
    var start = 0;
    if ((idx = (0,_search_js__WEBPACK_IMPORTED_MODULE_0__.search)(arr, filter, start)) > -1) {
        res.push(idx);
        return res;
    }
    (0,_loop_each_js__WEBPACK_IMPORTED_MODULE_1__.each)(arr, function (it, i) {
        if ((0,_type_isArray_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(it[deepProperty])) {
            var r = res.slice();
            r.push(i);
            var tmp = deepPath(it[deepProperty], filter, deepProperty, r);
            if (tmp !== false) {
                return tmp;
            }
        }
    });
    return false;
};



/***/ }),

/***/ "./dist/fn/object/deleteProp.js":
/*!**************************************!*\
  !*** ./dist/fn/object/deleteProp.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteProp: () => (/* binding */ deleteProp)
/* harmony export */ });
/* harmony import */ var _type_checkType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/checkType.js */ "./dist/fn/type/checkType.js");

/**
 * Gets the given property from the given object
 * @param {Object} obj
 * @param {String} prop
 * @returns
 */
var deleteProp = function (obj, prop) {
    (0,_type_checkType_js__WEBPACK_IMPORTED_MODULE_0__.checkType)(obj, "object", bbn._("The obj must be an object in setProp"));
    (0,_type_checkType_js__WEBPACK_IMPORTED_MODULE_0__.checkType)(prop, "string", bbn._("The prop must be a string in setProp"));
    delete obj[prop];
};



/***/ }),

/***/ "./dist/fn/object/diffObj.js":
/*!***********************************!*\
  !*** ./dist/fn/object/diffObj.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   diffObj: () => (/* binding */ diffObj)
/* harmony export */ });
/* harmony import */ var _type_isDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isDate.js */ "./dist/fn/type/isDate.js");
/* harmony import */ var _createObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createObject.js */ "./dist/fn/object/createObject.js");
/* harmony import */ var _type_isFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/isFunction.js */ "./dist/fn/type/isFunction.js");
/* harmony import */ var _type_isValue_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../type/isValue.js */ "./dist/fn/type/isValue.js");
/* harmony import */ var _type_isDom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../type/isDom.js */ "./dist/fn/type/isDom.js");
/* harmony import */ var _numProperties_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./numProperties.js */ "./dist/fn/object/numProperties.js");






var diffObjProcessed = [];
/**
  * Returns an object describing the differences for transforming the first given object into the second.
  *
  * The returned data will use the objects properties as keys. If unchanged is set to true, all the
  * properties will be returned, otherwise only the different ones. Each of these keys will have the
  * following properties:
  * - type: can be _modified_, _created_, _deleted_, and if unchanged is set to true _unchanged_
  * - data: the first object's property's value, or the second if type is _created_
  * - newData: the second object's property's value in case of type _updated_
  *
  * @method   diffObj
  * @global
  * @example
  * ```javascript
  * bbn.fn.diffObj(
  *   {
  *     name: "Thomas",
  *     age: 45
  *   }, {
  *     name: "Eva",
  *     sex: "Female",
  *     retired: false
  *   }
  * );
  * // {
  * //   name: {
  * //     type: "updated",
  * //     data: "Thomas",
  * //     newData: "Eva"
  * //   },
  * //   age: {
  * //     type: "deleted",
  * //     data: 45
  * //   },
  * //   sex: {
  * //     type: "created",
  * //     data: "Female"
  * //   },
  * //   retired: {
  * //     type: "created",
  * //     data: false
  * //   }
  * // }
  * ```
  * @example
  * ```javascript
  * bbn.fn.diffObj(
  *   {pupil: "Agnes Varda", grade: {year: "B", month: "A"}},
  *   {pupil: "Luc Besson", grade: {year: "C", month: "D"}}
  * );
  * // {
  * //   "pupil": {
  * //     "type": "updated",
  * //     "data": "Agnes Varda",
  * //     "newData": "Luc Besson"
  * //   },
  * //   "grade": {
  * //     "year": {
  * //       "type": "updated",
  * //       "data": "B",
  * //       "newData": "C"
  * //     },
  * //     "month": {
  * //       "type": "updated",
  * //       "data": "A",
  * //       "newData": "D"
  * //     }
  * //   }
  * // }
  * ```
  * @memberof bbn.fn
  * @param    {Object}  obj1
  * @param    {Object}  obj2
  * @param    {String}  unchanged
  * @param    {Boolean} notRoot
  * @returns  {Object}
  */
var diffObj = function (obj1, obj2, unchanged, notRoot) {
    if (unchanged === void 0) { unchanged = false; }
    if (notRoot === void 0) { notRoot = false; }
    if (!notRoot) {
        diffObjProcessed = [];
    }
    var VALUE_CREATED = 'created', VALUE_UPDATED = 'updated', VALUE_DELETED = 'deleted', VALUE_UNCHANGED = 'unchanged', _compareValues = function (value1, value2) {
        if (value1 === value2) {
            return VALUE_UNCHANGED;
        }
        if ((0,_type_isDate_js__WEBPACK_IMPORTED_MODULE_0__.isDate)(value1) && (0,_type_isDate_js__WEBPACK_IMPORTED_MODULE_0__.isDate)(value2) && value1.getTime() === value2.getTime()) {
            return VALUE_UNCHANGED;
        }
        if ('undefined' == typeof value1) {
            return VALUE_CREATED;
        }
        if ('undefined' == typeof value2) {
            return VALUE_DELETED;
        }
        return VALUE_UPDATED;
    };
    if (notRoot === undefined) {
        notRoot = false;
    }
    var diff = (0,_createObject_js__WEBPACK_IMPORTED_MODULE_1__.createObject)();
    if (!(0,_type_isFunction_js__WEBPACK_IMPORTED_MODULE_2__.isFunction)(obj1) && !(0,_type_isFunction_js__WEBPACK_IMPORTED_MODULE_2__.isFunction)(obj2)) {
        if ((0,_type_isValue_js__WEBPACK_IMPORTED_MODULE_3__.isValue)(obj1) || (0,_type_isValue_js__WEBPACK_IMPORTED_MODULE_3__.isValue)(obj2)) {
            var res = _compareValues(obj1, obj2);
            if (unchanged || res !== VALUE_UNCHANGED) {
                var ret = (0,_createObject_js__WEBPACK_IMPORTED_MODULE_1__.createObject)();
                Object.defineProperty(ret, 'type', {
                    value: res,
                    enumerable: false,
                });
                Object.defineProperty(ret, 'data', {
                    value: obj1 === undefined ? obj2 : obj1,
                    enumerable: false,
                });
                Object.defineProperty(ret, '_bbnDiffObjProof', {
                    value: true,
                    enumerable: false,
                });
                if (obj1 !== undefined) {
                    Object.defineProperty(ret, 'newData', {
                        value: obj2,
                        enumerable: false,
                    });
                }
                return ret;
            }
            return false;
        }
        if ((0,_type_isDom_js__WEBPACK_IMPORTED_MODULE_4__.isDom)(obj1) || (0,_type_isDom_js__WEBPACK_IMPORTED_MODULE_4__.isDom)(obj2)) {
            return false;
        }
        if (diffObjProcessed.includes(obj1) || diffObjProcessed.includes(obj2)) {
            //error(bbn._("Can't compare objects because they contain circular references"));
            return false;
        }
        diffObjProcessed.push(obj1, obj2);
        for (var key in obj1) {
            if ((0,_type_isFunction_js__WEBPACK_IMPORTED_MODULE_2__.isFunction)(obj1[key])) {
                continue;
            }
            var value2 = undefined;
            if ('undefined' != typeof obj2[key]) {
                value2 = obj2[key];
            }
            var res = diffObj(obj1[key], value2, unchanged, true);
            if (res) {
                diff[key] = res;
            }
        }
        for (var key in obj2) {
            if ((0,_type_isFunction_js__WEBPACK_IMPORTED_MODULE_2__.isFunction)(obj2[key]) || 'undefined' != typeof obj1[key]) {
                continue;
            }
            var res = diffObj(undefined, obj2[key], unchanged, true);
            if (res) {
                diff[key] = res;
            }
        }
    }
    return !notRoot || unchanged || (0,_numProperties_js__WEBPACK_IMPORTED_MODULE_5__.numProperties)(diff) ? diff : false;
};



/***/ }),

/***/ "./dist/fn/object/extend.js":
/*!**********************************!*\
  !*** ./dist/fn/object/extend.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extend: () => (/* binding */ extend)
/* harmony export */ });
/* harmony import */ var _loop_iterate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loop/iterate.js */ "./dist/fn/loop/iterate.js");
/* harmony import */ var _type_isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/isArray.js */ "./dist/fn/type/isArray.js");
/* harmony import */ var _loop_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loop/each.js */ "./dist/fn/loop/each.js");
/* harmony import */ var _type_isObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../type/isObject.js */ "./dist/fn/type/isObject.js");




/**
 * Merges the contents of two or more objects together into the first object.
 *
 * A boolean true argument can be done to operate a deep extend. In this case,
 * the content of properties or subproperties arrays and objects will also be merged.
 *
 * @method   extend
 * @global
 * @example
 * ```javascript
 * bbn.fn.extend(
 *   {prop1: 10, prop2: 20},
 *   {prop1: 11, prop3: 21},
 *   {prop2: 22, prop4: false},
 *   {prop5: false, prop3: 45}
 * );
 * // {prop1: 11, prop2: 22, prop3: 45, prop4: false, prop5: false}
 * ```
 * @example
 * ```javascript
 * bbn.fn.extend(
 *   {
 *     prop1: [3, 5, 6],
 *     prop2: {
 *       subprop1: 87,
 *       subprop2: 100
 *     }
 *   }, {
 *     prop1: 11,
 *     prop3: [8, 12, {aProperty: 1, anotherProperty: true}, 26]
 *   }, {
 *     prop2: {
 *       subprop1: 90,
 *       subprop3: 25
 *     },
 *     prop4: false
 *   }, {
 *     prop5: false,
 *     prop3: [8, 45, {anotherProperty: false, andAnother: true}]
 *   }
 * );
 * // {
 * //   prop1: 11,
 * //   prop2: {subprop1: 90, subprop3: 25},
 * //   prop3: [8, 45, {anotherProperty: false, andAnother: true}],
 * //   prop4: false,
 * //   prop5: false
 * // }
 * ```
 * @example
 * ```javascript
 * // Deep
 * bbn.fn.extend(
 *   true,
 *   {
 *     prop1: [3, 5, 6],
 *     prop2: {
 *       subprop1: 87,
 *       subprop2: 100
 *     }
 *   }, {
 *     prop1: 11,
 *     prop3: [8, 12, {aProperty: 1, anotherProperty: true}, 26]
 *   }, {
 *     prop2: {
 *       subprop1: 90,
 *       subprop3: 25
 *     },
 *     prop4: false
 *   }, {
 *     prop5: false,
 *     prop3: [8, 45, {anotherProperty: false, andAnother: true}]
 *   }
 * );
 * // {
 * //   prop1: 11,
 * //   prop2: {subprop1: 90, subprop3: 25},
 * //   prop3: [8, 45, {aProperty: 1, anotherProperty: false, andAnother: true}, 26],
 * //   prop4: false,
 * //   prop5: false
 * // }
 * ```
 * @memberof bbn.fn
 * @returns  {Object} The first object argument, merged with the other objects given
 */
var extend = function () {
    var originalArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        originalArgs[_i] = arguments[_i];
    }
    var deep = false;
    var args = [];
    for (var i = 0; i < originalArgs.length; i++) {
        if (originalArgs[i] === true) {
            deep = true;
        }
        else if (!originalArgs[i]) {
            continue;
        }
        else if (typeof originalArgs[i] !== "object") {
            throw new Error(bbn._("Error in extend: all arguments should be object, you have given ") + typeof originalArgs[i]);
        }
        else {
            args.push(originalArgs[i]);
        }
    }
    if (!args.length) {
        throw new Error("No argument given");
    }
    var out = args[0];
    for (var i = 1; i < args.length; i++) {
        (0,_loop_iterate_js__WEBPACK_IMPORTED_MODULE_0__.iterate)(args[i], function (a, key) {
            if (deep) {
                if ((0,_type_isArray_js__WEBPACK_IMPORTED_MODULE_1__.isArray)(a)) {
                    out[key] = (0,_type_isArray_js__WEBPACK_IMPORTED_MODULE_1__.isArray)(out[key]) ? out[key] : [];
                    (0,_loop_each_js__WEBPACK_IMPORTED_MODULE_2__.each)(a, function (b, i) {
                        if (b && typeof b === "object") {
                            var tmp = out[key][i];
                            if ((0,_type_isArray_js__WEBPACK_IMPORTED_MODULE_1__.isArray)(b)) {
                                if (!(0,_type_isArray_js__WEBPACK_IMPORTED_MODULE_1__.isArray)(tmp)) {
                                    tmp = [];
                                }
                            }
                            else if (!(0,_type_isObject_js__WEBPACK_IMPORTED_MODULE_3__.isObject)(tmp)) {
                                tmp = {};
                            }
                            out[key][i] = extend(true, tmp, b);
                        }
                        else {
                            out[key][i] = b;
                        }
                    });
                }
                else if ((0,_type_isObject_js__WEBPACK_IMPORTED_MODULE_3__.isObject)(a)) {
                    out[key] = extend(true, out[key] && typeof out[key] === "object"
                        ? out[key]
                        : Object.create(Object.getPrototypeOf(a)), a);
                }
                else {
                    out[key] = a;
                }
            }
            else if (out[key] !== a) {
                out[key] = a;
            }
        });
        if (args[i].__bbnNoData) {
            Object.defineProperty(out, "__bbnNoData", {
                value: true,
                enumerable: false,
                configurable: false,
                writable: false,
            });
        }
    }
    return out;
};



/***/ }),

/***/ "./dist/fn/object/extendOut.js":
/*!*************************************!*\
  !*** ./dist/fn/object/extendOut.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extendOut: () => (/* binding */ extendOut)
/* harmony export */ });
/* harmony import */ var _type_isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isObject.js */ "./dist/fn/type/isObject.js");

/**
 * Returns a new object made of the properties from all the given objects.
 *
 * Compared to bbn.fn.extend this still treats the arguments from left to right
 * but without overwriting existing properties, and returning a new object.
 *
 * @method   extendOut
 * @global
 * @example
 * ```javascript
 * //{field1: 1, field2: 2, field3: 3, items: {item: 0, item1: 1, item2: 2}, field4: 4}
 * bbn.fn.extendOut({field1: 1, field2: 2, field3: 3, items: {item: 0}}, {field4: 4, items: {item1: 1, item2: 2}});
 * ```
 * @memberof bbn.fn
 * @returns  {Object}
 */
var extendOut = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var r = null;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if (!(0,_type_isObject_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(a)) {
            throw new Error("Each argument for extendOut must be an object, " + typeof a + " given");
        }
        if (r === null) {
            r = a;
        }
        else {
            for (var n in a) {
                if ((0,_type_isObject_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(r[n], a[n])) {
                    extendOut(r[n], a[n]);
                }
                else if (r[n] === undefined) {
                    r[n] = a[n];
                }
            }
        }
    }
    return r;
};



/***/ }),

/***/ "./dist/fn/object/filter.js":
/*!**********************************!*\
  !*** ./dist/fn/object/filter.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filter: () => (/* binding */ filter)
/* harmony export */ });
/* harmony import */ var _type_isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isArray.js */ "./dist/fn/type/isArray.js");
/* harmony import */ var _loop_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loop/each.js */ "./dist/fn/loop/each.js");
/* harmony import */ var _filterToConditions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filterToConditions.js */ "./dist/fn/object/filterToConditions.js");
/* harmony import */ var _compareConditions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compareConditions.js */ "./dist/fn/object/compareConditions.js");




/**
 * Returns a new array with only the data matching the given filter.
 *
 * The filtering arguments follow the same scheme as bbn.fn.search.
 *
 * @method   filter
 * @global
 * @example
 * ```javascript
 * let ar = [
 *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
 *   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
 *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
 *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
 * ];
 * bbn.fn.filter(ar, {director: "Steven Spielberg"});
 * // [
 * //   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
 * //   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
 * // ]
 * bbn.fn.filter(ar, "director", "Steven Spielberg");
 * // Same result as the previous example
 * bbn.fn.filter(ar, {
 *   logic: "OR",
 *   conditions: [
 *     {
 *        field: "director",
 *        value: "Richard Donner"
 *     }, {
 *        field: "director",
 *        value: "George Lucas"
 *     }
 *   ]
 * );
 * // [
 * //   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
 * //   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
 * // ]
 * ```
 *
 * @memberof bbn.fn
 * @param    {Array}                    arr       The subject array
 * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
 * @param    {*}                        val       The value with which comparing the given property
 * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
 * @returns  {Array}                    A new filtered array
 */
var filter = function (arr, prop, val, operator) {
    if (val === void 0) { val = null; }
    if (operator === void 0) { operator = '='; }
    if (!(0,_type_isArray_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(arr)) {
        bbn.fn.log("NOT ARRAY", arr);
        throw new Error('Error in filter: The first argument must be an array');
    }
    var cfg = {};
    var res = [];
    var isFn = typeof (prop) === 'function';
    if (!prop || !arr.length) {
        return arr;
    }
    if (arr.length) {
        if (typeof prop === 'object') {
            operator = val;
            cfg = prop;
        }
        else if (typeof prop === 'string') {
            cfg[prop] = val;
        }
        else if (!isFn) {
            throw new Error('Search function error: The prop argument should be a string or an object');
        }
        if (typeof (prop) === 'function') {
            (0,_loop_each_js__WEBPACK_IMPORTED_MODULE_1__.each)(arr, function (a, i) {
                if (prop(a, i)) {
                    res.push(a);
                }
            });
        }
        else {
            cfg = (0,_filterToConditions_js__WEBPACK_IMPORTED_MODULE_2__.filterToConditions)(cfg, operator);
            if (cfg.conditions && cfg.logic) {
                (0,_loop_each_js__WEBPACK_IMPORTED_MODULE_1__.each)(arr, function (a) {
                    if ((0,_compareConditions_js__WEBPACK_IMPORTED_MODULE_3__.compareConditions)(a, cfg)) {
                        res.push(a);
                    }
                });
            }
        }
        return res;
    }
};



/***/ }),

/***/ "./dist/fn/object/filterToConditions.js":
/*!**********************************************!*\
  !*** ./dist/fn/object/filterToConditions.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterToConditions: () => (/* binding */ filterToConditions)
/* harmony export */ });
/* harmony import */ var _type_isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isObject.js */ "./dist/fn/type/isObject.js");
/* harmony import */ var _type_isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/isArray.js */ "./dist/fn/type/isArray.js");
/* harmony import */ var _loop_iterate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loop/iterate.js */ "./dist/fn/loop/iterate.js");



/**
 * Converts the given object 'filter' to a valid format of condition.
 *
 * The resulting format will comply with bbn.fn.compareConditions and also with
 * bbn databases functions and complex filters applied to bbn-vue list components.
 *
 * @method   filterToConditions
 * @global
 * @example
 * ```javascript
 * bbn.fn.filterToConditions({num: 3});
 * // {
 * //   logic: "AND",
 * //   conditions: [{
 * //     field: "num",
 * //     operator: "=",
 * //     value: 3
 * //   }]
 * // }
 * ```
 * @example
 * ```javascript
 * bbn.fn.filterToConditions({num: 3}, '>');
 * // {
 * //   logic: "AND",
 * //   conditions: [{
 * //     field: "num",
 * //     operator: ">",
 * //     value: 3
 * //   }]
 * // }
 * ```
 * @memberof bbn.fn
 * @param    {Object} filter
 * @param    {String} operator
 * @returns  {Object}
 */
var filterToConditions = function (filter, operator) {
    if (operator === void 0) { operator = "="; }
    if (!(0,_type_isObject_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(filter)) {
        throw new Error("Error in filterToCondition: filter must be an object");
    }
    if (!filter.conditions || !(0,_type_isArray_js__WEBPACK_IMPORTED_MODULE_1__.isArray)(filter.conditions)) {
        var tmp_1 = [];
        (0,_loop_iterate_js__WEBPACK_IMPORTED_MODULE_2__.iterate)(filter, function (a, n) {
            if ((0,_type_isObject_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(a) && typeof a.conditions === "object") {
                tmp_1.push(filterToConditions(a));
            }
            else {
                tmp_1.push({
                    field: n,
                    operator: operator,
                    value: a,
                });
            }
        });
        filter = {
            conditions: tmp_1,
        };
    }
    if (!filter.logic) {
        filter.logic = "AND";
    }
    return filter;
};



/***/ }),

/***/ "./dist/fn/object/findAll.js":
/*!***********************************!*\
  !*** ./dist/fn/object/findAll.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findAll: () => (/* binding */ findAll)
/* harmony export */ });
/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.js */ "./dist/fn/object/search.js");
/* harmony import */ var _loop_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loop/each.js */ "./dist/fn/loop/each.js");
/* harmony import */ var _type_isArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/isArray.js */ "./dist/fn/type/isArray.js");



/**
 * Retrieves all elements of a hierarchical array corresponding to the filter.
 *
 * The arguments follow the same scheme as bbn.fn.search.
 *
 * @method   findAll
 * @global
 * @example
 * ```javascript
 * let ar = [
 *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
 *   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
 *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
 *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
 * ];
 * bbn.fn.count(ar, "id", 256);
 * // 1
 * bbn.fn.count(ar, {director: "Steven Spielberg"});
 * // 2
 * bbn.fn.search(ar, "year", 1975, ">");
 * // 3
 * // Complex filters: all the movies from Spielberg between 1974 and 1980
 * bbn.fn.search(ar, {
 *   logic: "AND",
 *   conditions: [
 *     {
 *       field: "director",
 *       operator: "eq",
 *       value: "Steven Spielberg"
 *     }, {
 *       logic: "AND",
 *       conditions: [
 *         {
 *            field: "year",
 *            operator: ">=",
 *            value: 1974
 *         }, {
 *            field: "year",
 *            operator: "<=",
 *            value: 1980
 *         }
 *       ]
 *     }
 *   ]
 * });
 * // 1
 * ```
 * @memberof bbn.fn
 * @todo Do the doc!
 * @param    {Array}                    arr       The subject array
 * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
 * @param    {*}                        val       The value with which comparing the given property
 * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
 * @returns  {Number}                   The number of items
 */
var findAll = function (arr, filter, deepProperty, res) {
    if (res === void 0) { res = []; }
    var idx;
    var start = 0;
    while ((idx = (0,_search_js__WEBPACK_IMPORTED_MODULE_0__.search)(arr, filter, start)) > -1) {
        res.push(arr[idx]);
        start = idx + 1;
    }
    (0,_loop_each_js__WEBPACK_IMPORTED_MODULE_1__.each)(arr, function (it) {
        if ((0,_type_isArray_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(it[deepProperty])) {
            findAll(it[deepProperty], filter, deepProperty, res);
        }
    });
    return res;
};



/***/ }),

/***/ "./dist/fn/object/getField.js":
/*!************************************!*\
  !*** ./dist/fn/object/getField.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getField: () => (/* binding */ getField)
/* harmony export */ });
/* harmony import */ var _getRow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getRow.js */ "./dist/fn/object/getRow.js");

/**
  * Returns the value of the given field (property) from the first object matching the given filter in an array of objects.
  *
  * The filtering arguments follow the same scheme as bbn.fn.search.
  *
  * @method   getField
  * @global
  * @example
  * ```javascript
  * let ar = [
  *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
  *   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
  *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
  *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
  * ];
  * bbn.fn.getField(ar, "name", {id: 256});
  * // Star wars
  * bbn.fn.getField(ar, "name", "id", 689);
  * // Goonies
  * ```
  * @memberof bbn.fn
  * @param    {Array}                    arr       The subject array
  * @param    {String}                   field     The property from which the value is returned
  * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
  * @param    {*}                        val       The value with which comparing the given property
  * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
  * @returns  {*}
  */
var getField = function (arr, field, prop, val, operator) {
    if (prop === void 0) { prop = ''; }
    if (val === void 0) { val = null; }
    if (operator === void 0) { operator = '='; }
    var r;
    if (field && (r = (0,_getRow_js__WEBPACK_IMPORTED_MODULE_0__.getRow)(arr, prop, val, operator))) {
        return r[field];
    }
    return undefined;
};



/***/ }),

/***/ "./dist/fn/object/getFieldValues.js":
/*!******************************************!*\
  !*** ./dist/fn/object/getFieldValues.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFieldValues: () => (/* binding */ getFieldValues)
/* harmony export */ });
/* harmony import */ var _type_checkType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/checkType.js */ "./dist/fn/type/checkType.js");
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.js */ "./dist/fn/object/filter.js");
/* harmony import */ var _loop_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loop/each.js */ "./dist/fn/loop/each.js");



/**
 * Returns all the unique values of the given field (property) from the first object matching the given filter in an array.
 *
 * The filtering arguments follow the same scheme as bbn.fn.search.
 *
 * @method   getFieldValues
 * @global
 * @example
 * ```javascript
 * let ar = [
 *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
 *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
 *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
 *   {name: "Barry Lindon", director: "Stanley Kubrick", year: 1975, id: 802}
 * ];
 * bbn.fn.getFieldValues(ar, "director");
 * // ["Steven Spielberg", "George Lucas", "Stanley Kubrick"]
 * bbn.fn.getFieldValues(ar, "name", {year: 1975});
 * // ["Jaws", "Barry Lindon"]
 * ```
 * @memberof bbn.fn
 * @param    {Array}                    arr       The subject array
 * @param    {String}                   field     The property from which the values are returned
 * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
 * @param    {*}                        val       The value with which comparing the given property
 * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
 * @returns  {*}
 */
var getFieldValues = function (arr, field, prop, val, operator) {
    (0,_type_checkType_js__WEBPACK_IMPORTED_MODULE_0__.checkType)(field, 'string');
    if (prop) {
        arr = (0,_filter_js__WEBPACK_IMPORTED_MODULE_1__.filter)(arr, prop, val, operator);
    }
    var res = [];
    (0,_loop_each_js__WEBPACK_IMPORTED_MODULE_2__.each)(arr, function (a) { return (res.indexOf(a[field]) === -1 ? res.push(a[field]) : null); });
    return res;
};



/***/ }),

/***/ "./dist/fn/object/getProp.js":
/*!***********************************!*\
  !*** ./dist/fn/object/getProp.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProp: () => (/* binding */ getProp)
/* harmony export */ });
/* harmony import */ var _type_checkType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/checkType.js */ "./dist/fn/type/checkType.js");

/**
 * Gets the given property from the given object
 * @param {Object} obj
 * @param {String} prop
 * @returns
 */
var getProp = function (obj, prop) {
    (0,_type_checkType_js__WEBPACK_IMPORTED_MODULE_0__.checkType)(obj, "object", bbn._("The obj must be an object in setProp"));
    (0,_type_checkType_js__WEBPACK_IMPORTED_MODULE_0__.checkType)(prop, "string", bbn._("The prop must be a string in setProp"));
    return obj[prop];
};



/***/ }),

/***/ "./dist/fn/object/getProperty.js":
/*!***************************************!*\
  !*** ./dist/fn/object/getProperty.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProperty: () => (/* binding */ getProperty)
/* harmony export */ });
/**
 * Returns the value of the given property from the given object.
 *
 * Looks for the given property in the given object, accepting dot (.) separator
 * for deep property access, and returns its value if found and undefined otherwise.
 *
 * @method   getProperty
 * @global
 * @example
 * ```javascript
 * bbn.fn.getProperty({a: 1, b: 2}, 'b');
 * // 2
 * ```
 * @example
 * ```javascript
 * bbn.fn.getProperty({a: 1, b: {o: {a: 33, h: 5}}}, 'b.o.a');
 * // 33
 * ```
 * @example
 * ```javascript
 * bbn.fn.getProperty({a: 1, b: {o: {a: 33, h: 5}}}, 'b.h.a');
 * // undefined
 * ```
 * @memberof bbn.fn
 * @param    {Object} obj
 * @param    {String} props
 * @returns  {*}      The property's value or undefined
 */
var getProperty = function (obj) {
    var props = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        props[_i - 1] = arguments[_i];
    }
    if (typeof obj === 'object') {
        var arr = [];
        if (props.length === 1 && typeof props[0] === 'string') {
            arr.push.apply(arr, props[0].split('.'));
        }
        return arr.reduce(function (o, i) {
            if (o) {
                return o[i];
            }
            return undefined;
        }, obj);
    }
};



/***/ }),

/***/ "./dist/fn/object/getRow.js":
/*!**********************************!*\
  !*** ./dist/fn/object/getRow.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRow: () => (/* binding */ getRow)
/* harmony export */ });
/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.js */ "./dist/fn/object/search.js");

/**
 * Returns the first object matching the given filter in an array of objects.
 *
 * The filtering arguments follow the same scheme as bbn.fn.search.
 *
 * @method    getRow
 * @global
 * @example
 * ```javascript
 * let ar = [
 *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
 *   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
 *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
 *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
 * ];
 * bbn.fn.getRow(ar, {director: "Steven Spielberg"});
 * // {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
 * bbn.fn.getRow(ar, "director", "Steven Spielberg");
 * // Same result as the previous example
 * bbn.fn.getRow(ar, {
 *   logic: "OR",
 *   conditions: [
 *     {
 *        field: "director",
 *        value: "Richard Donner"
 *     }, {
 *        field: "director",
 *        value: "George Lucas"
 *     }
 *   ]
 * );
 * // {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
 * ```
 * @memberof bbn.fn
 * @param    {Array}                    arr       The subject array
 * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
 * @param    {*}                        val       The value with which comparing the given property
 * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
 * @returns  {Object|Boolean}           The item if found, false otherwise
 */
var getRow = function (arr, prop, val, operator) {
    if (val === void 0) { val = null; }
    if (operator === void 0) { operator = '='; }
    var idx = (0,_search_js__WEBPACK_IMPORTED_MODULE_0__.search)(arr, prop, val, operator);
    if (idx > -1) {
        return arr[idx];
    }
    return false;
};



/***/ }),

/***/ "./dist/fn/object/map.js":
/*!*******************************!*\
  !*** ./dist/fn/object/map.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   map: () => (/* binding */ map)
/* harmony export */ });
/* harmony import */ var _type_isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isArray.js */ "./dist/fn/type/isArray.js");

/**
 * Returns a new array generated by the execution of a function for each item of the given array.
 *
 * The deepProp argument is the name of property which should contain a nested array on which
 * the function should also be applied recursively.
 *
 * @method   map
 * @global
 * @example
 * ```javascript
 * bbn.fn.map([1, 2, 3, 4], a => {
 *   return a + 1;
 * });
 * // [2, 3, 4, 5]
 * ```
 * @example
 * ```javascript
 * bbn.fn.map(
 *   [{
 *     name: "tools",
 *     items: [
 *       {
 *          name: "hammers"
 *       }, {
 *          name: "screwdrivers",
 *          items: [
 *            {name: "flat screwdrivers"},
 *            {name: "slotted screwdrivers"},
 *            {name: "Hex screwdrivers"},
 *          ]
 *       }
 *     ]
 *   }, {
 *     name: "Kitchenware"
 *   }],
 *   d => {
 *     d.warranty = d.name === "Hex screwdrivers" ? "10 years" : "1 year";
 *     return d;
 *   },
 *   "items"
 * );
 * // [
 * //    {
 * //       name: "tools",
 * //       warranty: "1 year",
 * //       items: [
 * //         {
 * //            name: "hammers",
 * //            warranty: "1 year",
 * //         }, {
 * //            name: "screwdrivers",
 * //            warranty: "1 year",
 * //            items: [
 * //              {name: "flat screwdrivers", warranty: "1 year"},
 * //              {name: "slotted screwdrivers", warranty: "1 year"},
 * //              {name: "Hex screwdrivers", warranty: "10 year"},
 * //            ]
 * //         }
 * //       ]
 * //    }, {
 * //       name: "Kitchenware",
 * //       warranty: "1 year"
 * //    }
 * // ]
 * ```
 * @memberof bbn.fn
 * @param    {Array}    arr
 * @param    {Function} fn
 * @param    {Boolean}  deepProp
 * @param    {Number}   level
 * @returns  {Array}
 */
var map = function (arr, fn, deepProp, level) {
    if (level === void 0) { level = 0; }
    return arr.map(function (a, i) {
        a = fn(a, i, level);
        if (deepProp && a[deepProp] && (0,_type_isArray_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(a[deepProp])) {
            a[deepProp] = map(a[deepProp], fn, deepProp, level + 1);
        }
        return a;
    });
};



/***/ }),

/***/ "./dist/fn/object/move.js":
/*!********************************!*\
  !*** ./dist/fn/object/move.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   move: () => (/* binding */ move)
/* harmony export */ });
/**
 * Moves an element to a different position within the given array.
 *
 * The same array is returned, with its elements reordered according to the executed movement.
 *
 * @method   move
 * @global
 * @todo     Finish doc
 * @example
 * ```javascript
 * bbbn.fn.move([
 *   {movie: "Brazil", year: 1985},
 *   {movie: "Donnie Darko", year: 2001},
 *   {movie: "Out of Africa", year: 1985}
 * ], 1, 2);
 * // [
 * //   {movie: "Brazil", year: 1985},
 * //   {movie: "Out of Africa", year: 1985},
 * //   {movie: "Donnie Darko", year: 2001}
 * // ]
 * ```
 *  @example
 * ```javascript
 * bbn.fn.move([1, 2, 3, 4], 3, 0);
 * // [4, 1, 2, 3]
 * ```
 * @memberof bbn.fn
 * @param    {Array}  arr       The array
 * @param    {Number} fromIndex The index of the element to move
 * @param    {Number} toIndex   The future index of the element
 * @returns  {Array}  The same array, with elements repositionned.
 */
var move = function (arr, fromIndex, toIndex) {
    if (toIndex >= arr.length) {
        var k = toIndex - arr.length;
        while (k-- + 1) {
            arr.push(undefined);
        }
    }
    arr.splice(toIndex, 0, arr.splice(fromIndex, 1)[0]);
    return arr;
};



/***/ }),

/***/ "./dist/fn/object/multiorder.js":
/*!**************************************!*\
  !*** ./dist/fn/object/multiorder.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   multiorder: () => (/* binding */ multiorder)
/* harmony export */ });
/* harmony import */ var _compareValues_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_compareValues.js */ "./dist/fn/object/_compareValues.js");

/**
 * Sorts an array of objects based on a set of properties.
 *
 * The resulting array is the same object, the order is based on _compareValues function
 * applied for each given properties in orders argument.
 *
 * @method   multiorder
 * @global
 * @example
 * ```javascript
 * let ar = [
 *   {movie: "Brazil", year: 1985},
 *   {movie: "Donnie Darko", year: 2001},
 *   {movie: "Out of Africa", year: 1985},
 *   {movie: "Ran", year: 1985},
 *   {movie: "Back to the future", year: 1985},
 *   {movie: "Barry Lindon", year: 1976}
 * ];
 * bbn.fn.multiorder(ar, [
 *   {field: "year", dir: "desc"},
 *   {field: "movie", dir: "asc"}
 * ]);
 * // [
 * //   {movie: "Donnie Darko", year: 2001},
 * //   {movie: "Back to the future", year: 1985},
 * //   {movie: "Brazil", year: 1985},
 * //   {movie: "Out of Africa", year: 1985},
 * //   {movie: "Ran", year: 1985},
 * //   {movie: "Barry Lindon", year: 1976}
 * // ]
 * bbn.fn.multiorder(ar, {year: "desc", movie: "asc"});
 * // Same result with object shortcut
 * ```
 * @memberof bbn.fn
 * @param    {Array}        arr    The array to order
 * @param    {Array|Object} orders The properties and directions (asc, desc) to order by
 * @returns  {Array}        The same array (arr), ordered differently
 */
var multiorder = function (arr, orders) {
    if (!orders) {
        return arr;
    }
    var currentOrders;
    if (!Array.isArray(orders) && typeof orders === 'object') {
        currentOrders = [];
        for (var n in orders) {
            currentOrders.push({ field: n, dir: orders[n] });
        }
    }
    else {
        currentOrders = orders;
    }
    if (!Array.isArray(currentOrders)) {
        throw new Error('The orders argument must be an array');
    }
    var r = arr.slice();
    return r.sort(function (a, b) {
        var res;
        for (var _i = 0, currentOrders_1 = currentOrders; _i < currentOrders_1.length; _i++) {
            var order = currentOrders_1[_i];
            res = (0,_compareValues_js__WEBPACK_IMPORTED_MODULE_0__._compareValues)(a, b, order.field, order.dir);
            if (res !== 0) {
                return res;
            }
        }
        return 0;
    });
};



/***/ }),

/***/ "./dist/fn/object/mutateArray.js":
/*!***************************************!*\
  !*** ./dist/fn/object/mutateArray.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mutateArray: () => (/* binding */ mutateArray)
/* harmony export */ });
/* harmony import */ var _type_isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isArray.js */ "./dist/fn/type/isArray.js");
/* harmony import */ var _string_hash_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../string/hash.js */ "./dist/fn/string/hash.js");
/* harmony import */ var _type_isSame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/isSame.js */ "./dist/fn/type/isSame.js");
/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.js */ "./dist/fn/object/search.js");




var mutateArray = function (a1, a2) {
    if (!(0,_type_isArray_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(a1, a2)) {
        throw new TypeError('mutateArray can only be called with arrays');
    }
    var mapA2 = new Map(a2.map(function (item) { return [(0,_string_hash_js__WEBPACK_IMPORTED_MODULE_1__.hash)(item), item]; }));
    var a1Ordered = [];
    // Build a1Ordered to have the same order and contents as a2
    a2.forEach(function (item) {
        a1Ordered.push(item);
    });
    // Remove items from a1 that are not in a2
    var i = a1.length;
    while (i--) {
        if (!mapA2.has((0,_string_hash_js__WEBPACK_IMPORTED_MODULE_1__.hash)(a1[i]))) {
            a1.splice(i, 1);
        }
    }
    // Insert or move items to match the order of a2
    for (var j = 0; j < a1Ordered.length; j++) {
        if ((j >= a1.length) || !(0,_type_isSame_js__WEBPACK_IMPORTED_MODULE_2__.isSame)(a1[j], a1Ordered[j])) {
            // Find the index of the item in a1, if it exists
            var indexInA1 = (0,_search_js__WEBPACK_IMPORTED_MODULE_3__.search)(a1, a1Ordered[j]);
            if (indexInA1 !== -1) {
                // Move the item to the correct position if it already exists in a1
                var itemToMove = a1.splice(indexInA1, 1)[0];
                a1.splice(j, 0, itemToMove);
            }
            else {
                // Insert the new item from a2 into a1
                a1.splice(j, 0, a1Ordered[j]);
            }
        }
    }
    // If a1 has extra items at the end (not present in a2), remove them
    if (a1.length > a1Ordered.length) {
        a1.splice(a1Ordered.length, a1.length - a1Ordered.length);
    }
    return a1;
};



/***/ }),

/***/ "./dist/fn/object/numProperties.js":
/*!*****************************************!*\
  !*** ./dist/fn/object/numProperties.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   numProperties: () => (/* binding */ numProperties)
/* harmony export */ });
/**
  * Returns the number of properties contained in the object.
  *
  * Only takes into account the own properties - not the inherited ones - and the non _private_ ones.
  *
  * @method   numProperties
  * @global
  * @example
  * ```javascript
  * bbn.fn.numProperties({author: "Chuck Palahniuk", "title": "Fight club"});
  * // 2
  * ```
  * @example
  * ```javascript
  * bbn.fn.numProperties({username: "chuck", "password": "soap", _bbn_timestamp: 1587323193751});
  * // 2
  * @example
  * ```javascript
  * let d = new Date();
  * bbn.fn.numProperties(d);
  * // 0
  * d.myProp = 1;
  * bbn.fn.numProperties(d);
  * // 1
  * ```
  * @memberof bbn.fn
  * @param    {Object} obj The object to analyze
  * @returns  {Number} The number of properties
  */
var numProperties = function (obj) {
    if (!obj || typeof obj !== 'object') {
        return 0;
    }
    return Object.keys(obj).length;
};



/***/ }),

/***/ "./dist/fn/object/order.js":
/*!*********************************!*\
  !*** ./dist/fn/object/order.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   order: () => (/* binding */ order)
/* harmony export */ });
/* harmony import */ var _compareValues_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_compareValues.js */ "./dist/fn/object/_compareValues.js");

/**
 * Sorts an array of objects based on the given property.
 *
 * The resulting array is the same object, the order is based on _compareValues function.
 *
 * @method   order
 * @global
 * @example
 * ```javascript
 * bbn.fn.order([
 *   {movie: "Brazil", year: 1985},
 *   {movie: "Donnie Darko", year: 2001},
 *   {movie: "Barry Lindon", year: 1976}
 * ], 'year', 'DESC')
 * // [
 * //   {movie: "Donnie Darko", year: 2001},
 * //   {movie: "Brazil", year: 1985},
 * //   {movie: "Barry Lindon", year: 1976}
 * // ]
 * ```
 * @memberof bbn.fn
 * @param    {Array}  arr       The array to order
 * @param    {String} prop      The property on which the order is based
 * @param    {String} [dir=asc] The direction of the order (desc or asc by default)
 * @returns  {Array}
 */
var order = function (arr, prop, dir) {
    if (dir === void 0) { dir = 'asc'; }
    if (arr) {
        return arr.sort(function (a, b) {
            return (0,_compareValues_js__WEBPACK_IMPORTED_MODULE_0__._compareValues)(a, b, prop, dir);
        });
    }
    return arr;
};



/***/ }),

/***/ "./dist/fn/object/pickValue.js":
/*!*************************************!*\
  !*** ./dist/fn/object/pickValue.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pickValue: () => (/* binding */ pickValue)
/* harmony export */ });
var pickValue = function (arr) {
    if (Array.isArray(arr) && arr.length) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
};



/***/ }),

/***/ "./dist/fn/object/removeEmpty.js":
/*!***************************************!*\
  !*** ./dist/fn/object/removeEmpty.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeEmpty: () => (/* binding */ removeEmpty)
/* harmony export */ });
/* harmony import */ var _type_isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isArray.js */ "./dist/fn/type/isArray.js");
/* harmony import */ var _type_isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/isObject.js */ "./dist/fn/type/isObject.js");
/* harmony import */ var _numProperties_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./numProperties.js */ "./dist/fn/object/numProperties.js");



/**
 * Returns a new array, having removed all elements deemed empty from the given array.
 *
 * Removes all the elements which are empty, i.e. false, 0, null, '', NaN, or undefined.
 *
 * @method   removeEmpty
 * @global
 * @example
 * ```javascript
 * bbn.fn.removeEmpty([{prop1: 10, prop2: 20}, '', {}, null, 1, undefined, 0, false, 25]);
 * // [{prop1: 10, prop2: 20}, 1, 25]
 * ```
 * @memberof bbn.fn
 * @param    {Array} arr
 * @returns  {Array}
 */
var removeEmpty = function (arr) {
    var tmp = [];
    if ((0,_type_isArray_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(arr)) {
        for (var i = 0; i < arr.length; i++) {
            var ok = false;
            if (arr[i]) {
                if ((0,_type_isArray_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(arr[i])) {
                    if (arr[i].length) {
                        ok = true;
                    }
                }
                else if ((0,_type_isObject_js__WEBPACK_IMPORTED_MODULE_1__.isObject)(arr[i])) {
                    if ((0,_numProperties_js__WEBPACK_IMPORTED_MODULE_2__.numProperties)(arr[i])) {
                        ok = true;
                    }
                }
                else {
                    ok = true;
                }
            }
            if (ok) {
                tmp.push(arr[i]);
            }
        }
    }
    return tmp;
};



/***/ }),

/***/ "./dist/fn/object/removePrivateProp.js":
/*!*********************************************!*\
  !*** ./dist/fn/object/removePrivateProp.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removePrivateProp: () => (/* binding */ removePrivateProp)
/* harmony export */ });
/* harmony import */ var _string_substr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../string/substr.js */ "./dist/fn/string/substr.js");

/**
  * Returns an object with the original objects' properties starting with an alphanumeric character.
  *
  * It is presumed that external libraries, bbn variables use prefixes such as _ or $ for
  * naming private properties; this returns a new object purged from these properties.
  *
  * @method   removePrivateProp
  * @global
  * @example
  * ```javascript
  * bbn.fn.removePrivateProp({
  *   _bbn_timestamp: 1587269593987,
  *   name: "Wonka",
  *   fname: "Willy"
  * });
  * // {name: "Wonka", fname: "Willy"}
  * ```
  * @memberof bbn.fn
  * @param    {Object}  obj  The original object
  * @param    {Boolean} deep If true the function will be reapplied on object properties
  * @returns  {Object}  A new object without only the _public_ properties.
  */
var removePrivateProp = function (obj, deep) {
    if (deep === void 0) { deep = false; }
    var r = null;
    if (typeof obj === 'object') {
        r = {};
        for (var n in obj) {
            if ((0,_string_substr_js__WEBPACK_IMPORTED_MODULE_0__.substr)(n, 0, 1).match(/^[A-z0-9]$/) && (n in obj)) {
                if (deep && typeof obj[n] === 'object') {
                    r[n] = removePrivateProp(obj[n], true);
                }
                else {
                    r[n] = obj[n];
                }
            }
        }
    }
    return r || false;
};



/***/ }),

/***/ "./dist/fn/object/search.js":
/*!**********************************!*\
  !*** ./dist/fn/object/search.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   search: () => (/* binding */ search)
/* harmony export */ });
/* harmony import */ var _type_isIterable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isIterable.js */ "./dist/fn/type/isIterable.js");
/* harmony import */ var _compareConditions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compareConditions.js */ "./dist/fn/object/compareConditions.js");
/* harmony import */ var _filterToConditions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filterToConditions.js */ "./dist/fn/object/filterToConditions.js");
/* harmony import */ var _type_isObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../type/isObject.js */ "./dist/fn/type/isObject.js");
/* harmony import */ var _numProperties_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./numProperties.js */ "./dist/fn/object/numProperties.js");
/* harmony import */ var _type_isNumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../type/isNumber.js */ "./dist/fn/type/isNumber.js");






/**
 * Retrieves the index of the array's first element corresponding to the given filter.
 *
 * Returns -1 if the element is not found. If the second parameter is an object or function
 * for filtering as defined in bbn.fn.filter, the remaining parameters will be shifted to the
 * left, i.e. val becomes operator, and operator startFrom. And if operator is a number, its value will
 * be given to startFrom and operator will be undefined. The filter object can be complex with different
 * operators (as seen in bbn.fn.compare) and logics (AND/OR), and infinitely nested, of this form:
 * ```javascript
 * {
 *   logic: "AND",
 *   conditions: [
 *     {
 *       field: "prop1",
 *       operator: "eq",
 *       value: "value1"
 *     }, {
 *       logic: "OR",
 *       conditions: [
 *         {
 *            field: "prop2",
 *            operator: "eq",
 *            value: 1
 *         }. {
 *            field: "prop2",
 *            operator: "eq",
 *            value: 2
 *         }
 *       ]
 *     }
 *   ]
 * }
 * ```
 * This way of managing the arguments is used in all the filtering functions.
 *
 * @method   search
 * @global
 * @example
 * ```javascript
 * let ar = [
 *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
 *   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
 *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
 *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
 * ];
 *
 * bbn.fn.search(ar, "id", 256);
 * // 2
 *
 * bbn.fn.search(ar, {director: "Steven Spielberg"});
 * // 0
 *
 * bbn.fn.search(ar, {year: 1975, director: "Steven Spielberg"});
 * // 3
 *
 * bbn.fn.search(ar, {director: "Steven Spielberg"}, 1);
 * // 3
 *
 * // Complex filters
 * bbn.fn.search(ar, {
 *   logic: "AND",
 *   conditions: [
 *     {
 *       field: "director",
 *       operator: "eq",
 *       value: "Steven Spielberg"
 *     }, {
 *       logic: "OR",
 *       conditions: [
 *         {
 *            field: "year",
 *            operator: "eq",
 *            value: 1974
 *         }, {
 *            field: "year",
 *            operator: "eq",
 *            value: 1975
 *         }
 *       ]
 *     }
 *   ]
 * });
 * // 3
 *
 * Simple array
 * bbn.fn.search(['a', 'b', 'c'], null, 'b');
 * // 1
 *
 * ```
 *
 * @memberof bbn.fn
 * @param    {Array}                    arr       The subject array
 * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
 * @param    {*}                        val       The value with which comparing the given property
 * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
 * @param    {Number}                   startFrom The index from which the search should start
 * @returns  {Number}                   The index if found, otherwise -1
 */
var search = function (arr, prop, val, operator, startFrom) {
    if (val === void 0) { val = null; }
    if (operator === void 0) { operator = '='; }
    if (startFrom === void 0) { startFrom = 0; }
    if (!(0,_type_isIterable_js__WEBPACK_IMPORTED_MODULE_0__.isIterable)(arr)) {
        throw new Error(bbn._('The first argument for a search should be iterable') + ' ' + typeof arr + ' ' + bbn._('given'));
    }
    if (!arr.length) {
        return -1;
    }
    var filter;
    var isFn = false;
    if (typeof prop === 'string') {
        filter = {
            conditions: [
                {
                    field: prop,
                    value: val,
                    operator: operator || '=',
                },
            ]
        };
    }
    else if (!prop) {
        isFn = true;
        filter = function (a) {
            return (0,_compareConditions_js__WEBPACK_IMPORTED_MODULE_1__.compareConditions)({ value: a }, (0,_filterToConditions_js__WEBPACK_IMPORTED_MODULE_2__.filterToConditions)({
                logic: 'AND',
                conditions: [
                    {
                        field: 'value',
                        operator: operator || '=',
                        value: val,
                    },
                ],
            }));
        };
    }
    else {
        startFrom = typeof (operator) === 'number' ? operator : 0;
        operator = val;
        if ((0,_type_isObject_js__WEBPACK_IMPORTED_MODULE_3__.isObject)(prop)) {
            filter = prop;
        }
        else if (typeof (prop) === 'function') {
            isFn = true;
            filter = prop;
        }
    }
    if (isFn || ((0,_type_isObject_js__WEBPACK_IMPORTED_MODULE_3__.isObject)(filter) && (0,_numProperties_js__WEBPACK_IMPORTED_MODULE_4__.numProperties)(filter))) {
        if ((0,_type_isNumber_js__WEBPACK_IMPORTED_MODULE_5__.isNumber)(operator)) {
            startFrom = typeof (operator) === 'number' ? operator : 0;
            operator = undefined;
        }
        if (!(0,_type_isNumber_js__WEBPACK_IMPORTED_MODULE_5__.isNumber)(startFrom)) {
            startFrom = 0;
        }
        if (typeof filter === 'function') {
            for (var i = startFrom; i < arr.length; i++) {
                if (filter(arr[i])) {
                    return i;
                }
            }
        }
        else {
            filter = (0,_filterToConditions_js__WEBPACK_IMPORTED_MODULE_2__.filterToConditions)(filter);
            for (var i = startFrom; i < arr.length; i++) {
                if ((0,_compareConditions_js__WEBPACK_IMPORTED_MODULE_1__.compareConditions)(arr[i], filter)) {
                    return i;
                }
            }
        }
    }
    return -1;
};



/***/ }),

/***/ "./dist/fn/object/setProp.js":
/*!***********************************!*\
  !*** ./dist/fn/object/setProp.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setProp: () => (/* binding */ setProp)
/* harmony export */ });
/**
 * Sets a given property on the given object
 *
 * @param {Object} obj
 * @param {String} prop
 * @param {*} value
 * @param {Boolean} writable
 * @param {Boolean} configurable
 */
var setProp = function (obj, prop, value, writable, configurable) {
    if (writable === void 0) { writable = true; }
    if (configurable === void 0) { configurable = true; }
    Object.defineProperty(obj, prop, {
        value: value,
        writable: writable,
        configurable: configurable,
    });
};



/***/ }),

/***/ "./dist/fn/object/setProperty.js":
/*!***************************************!*\
  !*** ./dist/fn/object/setProperty.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setProperty: () => (/* binding */ setProperty)
/* harmony export */ });
/* harmony import */ var _loop_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loop/each.js */ "./dist/fn/loop/each.js");

/**
 * Returns the value of the given property from the given object.
 *
 * Looks for the given property in the given object, accepting dot (.) separator
 * for deep property access, and returns its value if found and undefined otherwise.
 *
 * @method   getProperty
 * @global
 * @example
 * ```javascript
 * bbn.fn.getProperty({a: 1, b: 2}, 'b');
 * // 2
 * ```
 * @example
 * ```javascript
 * bbn.fn.getProperty({a: 1, b: {o: {a: 33, h: 5}}}, 'b.o.a');
 * // 33
 * ```
 * @example
 * ```javascript
 * bbn.fn.getProperty({a: 1, b: {o: {a: 33, h: 5}}}, 'b.h.a');
 * // undefined
 * ```
 * @memberof bbn.fn
 * @param    {Object} obj
 * @param    {String} prop
 * @returns  {*}      The property's value or undefined
 */
var setProperty = function (obj, prop, value, force) {
    if (typeof obj === 'object' && typeof prop === 'string') {
        var o_1 = obj;
        var bits_1 = prop.split('.');
        (0,_loop_each_js__WEBPACK_IMPORTED_MODULE_0__.each)(bits_1, function (v, i) {
            if (!o_1) {
                if (!force) {
                    throw new Error(bbn._('The object is invalid'));
                }
                o_1 = {};
            }
            if (bits_1.length - 1 === i) {
                o_1[v] = value;
            }
            else {
                o_1 = o_1[v];
            }
        });
    }
};



/***/ }),

/***/ "./dist/fn/object/shortenObj.js":
/*!**************************************!*\
  !*** ./dist/fn/object/shortenObj.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shortenObj: () => (/* binding */ shortenObj)
/* harmony export */ });
/* harmony import */ var _clone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clone.js */ "./dist/fn/object/clone.js");
/* harmony import */ var _loop_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loop/each.js */ "./dist/fn/loop/each.js");
/* harmony import */ var _type_isString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/isString.js */ "./dist/fn/type/isString.js");
/* harmony import */ var _string_shorten_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../string/shorten.js */ "./dist/fn/string/shorten.js");




/**
 * Shortens all the strings contained in the object properties or element in a array.
 *
 * Modifies directly the given object by cuttin all its too long strings, and adding ellipsis (...) in this case.
 *
 * @method   shortenObj
 * @global
 * @example
 * ```javascript
 * bbn.fn.shortenObj({
 *   title: "Once upon a time in the west",
 *   synopsis: "There's a single piece of land around Flagstone with water on it, and rail baron Morton (Gabriele Ferzetti) aims to have it, knowing the new railroad will have to stop there. He sends his henchman Frank (Henry Fonda) to scare the land's owner, McBain (Frank Wolff), but Frank kills him instead and pins it on a known bandit, Cheyenne (Jason Robards). Meanwhile, a mysterious gunslinger with a score to settle (Charles Bronson) and McBain's new wife, Jill (Claudia Cardinale), arrive in town."
 * }, 50)
 * // {
 * //   "title": "Once upon a time in the west",
 * //   "synopsis": "There's a single piece of land around Flagstone wi..."
 * // }
 * ```
 * @memberof bbn.fn
 * @param    {(Object|Array)} obj
 * @param    {Number}         [max=100]
 * @returns  {(Object|Array)} The same object, modified
 */
var shortenObj = function (obj, max) {
    if (max === void 0) { max = 100; }
    var o = (0,_clone_js__WEBPACK_IMPORTED_MODULE_0__.clone)(obj);
    (0,_loop_each_js__WEBPACK_IMPORTED_MODULE_1__.each)(o, function (a, n) {
        if ((0,_type_isString_js__WEBPACK_IMPORTED_MODULE_2__.isString)(a) && a.length > max) {
            o[n] = (0,_string_shorten_js__WEBPACK_IMPORTED_MODULE_3__.shorten)(a, max);
        }
        else if (a && typeof a === "object") {
            o[n] = shortenObj(a);
        }
    });
    return o;
};



/***/ }),

/***/ "./dist/fn/object/shuffle.js":
/*!***********************************!*\
  !*** ./dist/fn/object/shuffle.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shuffle: () => (/* binding */ shuffle)
/* harmony export */ });
var shuffle = function (array) {
    var _a;
    var currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        _a = [array[randomIndex], array[currentIndex]], array[currentIndex] = _a[0], array[randomIndex] = _a[1];
    }
    return array;
};



/***/ }),

/***/ "./dist/fn/object/sum.js":
/*!*******************************!*\
  !*** ./dist/fn/object/sum.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sum: () => (/* binding */ sum)
/* harmony export */ });
/* harmony import */ var _loop_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loop/each.js */ "./dist/fn/loop/each.js");
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.js */ "./dist/fn/object/filter.js");


/**
 * Returns the sum of the given property or function for the array's elements matching the filter.
 *
 * The filtering arguments follow the same scheme as bbn.fn.search.
 *
 * @method   sum
 * @global
 * @example
 * ```javascript
 * let invited = [
 *   {name: "Robert De Niro", attendees: 2, confirmed: true},
 *   {name: "Al Pacino", attendees: 1, confirmed: false},
 *   {name: "James Caan", attendees: 4, confirmed: false},
 *   {name: "Harvey Keitel", attendees: 5, confirmed: true}
 * ];
 * // No filter
 * bbn.fn.sum(invited, "attendees");
 * // 12
 * // Filter
 * bbn.fn.sum(invited, "attendees", {confirmed: true});
 * // 7
 * ```
 * @example
 * ```javascript
 * let cart = [
 *    {article: "Toothpaste", price: 2.50, quantity: 1},
 *    {article: "Toothbrush", price: 6, quantity: 2},
 *    {article: "Banana", price: 0.50, quantity: 3},
 *    {article: "T-shirt", price: 14, quantity: 3}
 * ];
 * bbn.fn.sum(cart, a => a.price * a.quantity);
 * // 58
 * // Only the items with a quantity equal to 3
 * bbn.fn.sum(cart, a => a.price * a.quantity, {quantity: 3});
 * // 43.5
 * ```
 * @memberof bbn.fn
 * @param    {Array}                    arr        The subject array
 * @param    {(String|Function)}        numberProp The property's name for which the value should be added to the sum, or a function returning the number.
 * @param    {(String|Object|Function)} prop       A property's name or a filter object or function
 * @param    {*}                        val        The value with which comparing the given property
 * @param    {String}                   operator   The operator to use for comparison with the value as used in bbn.fn.compare
 * @returns  {Number}                   The sum
 */
var sum = function (arr, numberProp, prop, val, operator) {
    var r = 0;
    (0,_loop_each_js__WEBPACK_IMPORTED_MODULE_0__.each)((0,_filter_js__WEBPACK_IMPORTED_MODULE_1__.filter)(arr, prop, val, operator), function (a) {
        var tmp = typeof numberProp === 'function' ? numberProp(a) : a[numberProp];
        if (tmp) {
            r += parseFloat(tmp) || 0;
        }
    });
    return r;
};



/***/ }),

/***/ "./dist/fn/object/unique.js":
/*!**********************************!*\
  !*** ./dist/fn/object/unique.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   unique: () => (/* binding */ unique)
/* harmony export */ });
/**
 * Removes duplicate values from an array.
 *
 * Takes an input array and returns a new array without duplicate values.
 *
 * @method   unique
 * @global
 * @example
 * ```javascript
 * bbn.fn.unique(["a", "b", "a", "b", "a", "b", "c", "c", "d"]);
 * // ["a", "b", "c", "d"]
 * ```
 * @memberof bbn.fn
 * @param    {Array} arr
 * @returns  {Array}
 */
var unique = function (arr) {
    return arr.filter(function (el, index, ar) {
        return index === ar.indexOf(el);
    });
};



/***/ }),

/***/ "./dist/fn/string/baseName.js":
/*!************************************!*\
  !*** ./dist/fn/string/baseName.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   baseName: () => (/* binding */ baseName)
/* harmony export */ });
/* harmony import */ var _type_isString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isString.js */ "./dist/fn/type/isString.js");
/* harmony import */ var _substr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./substr.js */ "./dist/fn/string/substr.js");


/**
 * Returns the name of the element indicated by path given to it as an argument.
 *
 * @method   baseName
 * @global
 *
 * @example
 * ```javascript
 * // "file.png"
 * bbn.fn.baseName('folder/other_folder/file.png');
 * ```
 * @example
 * ```javascript
 * // "file"
 * bbn.fn.baseName('folder/other_folder/file.png', '.png');
 * ```
 *
 * @memberof bbn.fn
 * @param    {String} path   The path from which the basename must be extracted
 * @param    {String} suffix An optional suffix that will be removed from the basename
 * @returns  {String} The basename of path
 */
var baseName = function (path, suffix) {
    if (path && (0,_type_isString_js__WEBPACK_IMPORTED_MODULE_0__.isString)(path)) {
        var bits = path.split("/");
        var res = bits.pop();
        if (!suffix) {
            return res;
        }
        var len = suffix.length;
        if (res && (0,_substr_js__WEBPACK_IMPORTED_MODULE_1__.substr)(res, -len) === suffix) {
            return (0,_substr_js__WEBPACK_IMPORTED_MODULE_1__.substr)(res, 0, res.length - len);
        }
    }
    return "";
};



/***/ }),

/***/ "./dist/fn/string/br2nl.js":
/*!*********************************!*\
  !*** ./dist/fn/string/br2nl.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   br2nl: () => (/* binding */ br2nl)
/* harmony export */ });
/* harmony import */ var _replaceAll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./replaceAll.js */ "./dist/fn/string/replaceAll.js");

/**
 * Replaces the html <br> tag with new line characters '\ n' if present in the string.
 *
 * @method   br2nl
 * @global
 *
 * @example
 * ```javascript
 * //"hello
 * //world!"
 * bbn.fn.br2nl('hello <br> world!')
 * ```
 *
 * @memberof bbn.fn
 * @param    string st
 * @returns  {String}
 */
var br2nl = function (st) {
    return (0,_replaceAll_js__WEBPACK_IMPORTED_MODULE_0__.replaceAll)("<br />", "\n", (0,_replaceAll_js__WEBPACK_IMPORTED_MODULE_0__.replaceAll)("<br/>", "\n", (0,_replaceAll_js__WEBPACK_IMPORTED_MODULE_0__.replaceAll)("<br>", "\n", st)));
};



/***/ }),

/***/ "./dist/fn/string/camelToCss.js":
/*!**************************************!*\
  !*** ./dist/fn/string/camelToCss.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   camelToCss: () => (/* binding */ camelToCss)
/* harmony export */ });
/**
 * Returns the string passed as an argument in camelize mode for css.
 *
 * @method   camelToCss
 * @global
 *
 * @example
 * ```javascript
 * //"this-is-a-test"
 * bbn.fn.camelToCss("thisIsATest");
 * ```
 *
 * @memberof bbn.fn
 * @param   {String} str
 * @returns {String}
 */
var camelToCss = function (str) {
    return str
        .replace(/([A-Z])/g, function (st) {
        return "-" + st.toLowerCase();
    })
        .replace("/^./", function (st) {
        return st.toLowerCase();
    });
};



/***/ }),

/***/ "./dist/fn/string/camelize.js":
/*!************************************!*\
  !*** ./dist/fn/string/camelize.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   camelize: () => (/* binding */ camelize)
/* harmony export */ });
/**
 * Returns the string passed as an argument in camelize mode.
 *
 * A string can be separated for example by a underscore, a dash or space;
 * so the camelize function will automatically convert them to a single string.
 *
 * @method   camelize
 * @global
 *
 * @example
 * ```javascript
 * //"thisIsATest"
 * bbn.fn.camelize("this_is-a test");
 * ```
 * @memberof bbn.fn
 * @param    {String} str
 * @returns  {String}
 */
var camelize = function (str) {
    return str.replace(/^([A-Z])|[\s-](\w)/g, function (match, p1, p2, offset) {
        if (p2) {
            return p2.toUpperCase();
        }
        return p1.toLowerCase();
    });
};



/***/ }),

/***/ "./dist/fn/string/correctCase.js":
/*!***************************************!*\
  !*** ./dist/fn/string/correctCase.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   correctCase: () => (/* binding */ correctCase)
/* harmony export */ });
/**
 * Converts the first character of the string to uppercase.
 *
 * @method   correctCase
 * @global
 *
 * @example
 * ```javascript
 * //"This is a test"
 * bbn.fn.correctCase("this is a test");
 * ```
 *
 * @memberof bbn.fn
 * @param    {STring} str
 * @returns  {String}
 */
var correctCase = function (str) {
    return str.replace(/[A-z]{1}/, function (c) { return c.toUpperCase(); });
};



/***/ }),

/***/ "./dist/fn/string/crc32.js":
/*!*********************************!*\
  !*** ./dist/fn/string/crc32.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   crc32: () => (/* binding */ crc32)
/* harmony export */ });
/**
 * CRC32 implementation.
 */
var crc32Table = [];
for (var i = 0; i < 256; i++) {
    var c = i;
    for (var j = 0; j < 8; j++) {
        c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    crc32Table.push(c);
}
var crc32 = function (str) {
    var crc = 0 ^ -1;
    for (var i = 0; i < str.length; i++) {
        var charCode = str.charCodeAt(i);
        crc = (crc >>> 8) ^ crc32Table[(crc ^ charCode) & 0xff];
    }
    return (crc ^ -1) >>> 0; // Make sure the result is a 32-bit positive integer
};



/***/ }),

/***/ "./dist/fn/string/dirName.js":
/*!***********************************!*\
  !*** ./dist/fn/string/dirName.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dirName: () => (/* binding */ dirName)
/* harmony export */ });
/* harmony import */ var _type_isString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isString.js */ "./dist/fn/type/isString.js");
/* harmony import */ var _substr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./substr.js */ "./dist/fn/string/substr.js");


/**
 * Returns the path of the folder containing the last hierarchical element of the path.
 *
 * @method   dirName
 * @global
 *
 * @example
 * ```javascript
 * //"folder/other_folder"
 * bbn.fn.dirName('folder/other_folder/file');
 * ```
 * @memberof bbn.fn
 * @param    {String} path
 * @returns  {String} path of the folder
 */
var dirName = function (path) {
    if ((0,_type_isString_js__WEBPACK_IMPORTED_MODULE_0__.isString)(path) && path) {
        while ((0,_substr_js__WEBPACK_IMPORTED_MODULE_1__.substr)(path, path.length - 1) === "/") {
            path = (0,_substr_js__WEBPACK_IMPORTED_MODULE_1__.substr)(path, 0, path.length - 1);
        }
        var pos = path.lastIndexOf("/");
        if (pos > 0) {
            return (0,_substr_js__WEBPACK_IMPORTED_MODULE_1__.substr)(path, 0, pos);
        }
        if (pos === 0) {
            return "/";
        }
    }
    return "";
};



/***/ }),

/***/ "./dist/fn/string/escapeDquotes.js":
/*!*****************************************!*\
  !*** ./dist/fn/string/escapeDquotes.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   escapeDquotes: () => (/* binding */ escapeDquotes)
/* harmony export */ });
/* harmony import */ var _type_isString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isString.js */ "./dist/fn/type/isString.js");

var escapeDquotes = function (str) {
    if (!(0,_type_isString_js__WEBPACK_IMPORTED_MODULE_0__.isString)(str)) {
        return str;
    }
    return str.replace(/"/g, '\\"');
};



/***/ }),

/***/ "./dist/fn/string/escapeRegExp.js":
/*!****************************************!*\
  !*** ./dist/fn/string/escapeRegExp.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   escapeRegExp: () => (/* binding */ escapeRegExp)
/* harmony export */ });
/**
 * Returns a string escaped.
 *
 * To escape the string by reducing the ambiguity between quotation marks and other characters used.
 *
 * @method   escapeRegExp
 * @global
 *
 * @example
 * ```javascript
 * //"this\/is\/a\/test\/string"
 * bbn.fn.escapeRegExp("this/is/a/test/string");
 * ```
 * @memberof bbn.fn
 * @param    {String} str
 * @returns  {String} string with escape
 */
var escapeRegExp = function (str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
};



/***/ }),

/***/ "./dist/fn/string/escapeSquotes.js":
/*!*****************************************!*\
  !*** ./dist/fn/string/escapeSquotes.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   escapeSquotes: () => (/* binding */ escapeSquotes)
/* harmony export */ });
/* harmony import */ var _type_isString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isString.js */ "./dist/fn/type/isString.js");

var escapeSquotes = function (str) {
    if (!(0,_type_isString_js__WEBPACK_IMPORTED_MODULE_0__.isString)(str)) {
        return str;
    }
    return str.replace(/'/g, "\\'");
};



/***/ }),

/***/ "./dist/fn/string/escapeTicks.js":
/*!***************************************!*\
  !*** ./dist/fn/string/escapeTicks.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   escapeTicks: () => (/* binding */ escapeTicks)
/* harmony export */ });
/* harmony import */ var _type_isString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isString.js */ "./dist/fn/type/isString.js");

var escapeTicks = function (str) {
    if (!(0,_type_isString_js__WEBPACK_IMPORTED_MODULE_0__.isString)(str)) {
        return str;
    }
    return str.replace(/`/g, '\\`');
};



/***/ }),

/***/ "./dist/fn/string/escapeUrl.js":
/*!*************************************!*\
  !*** ./dist/fn/string/escapeUrl.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   escapeUrl: () => (/* binding */ escapeUrl)
/* harmony export */ });
/* harmony import */ var _loop_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loop/each.js */ "./dist/fn/loop/each.js");
/* harmony import */ var _dirName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dirName.js */ "./dist/fn/string/dirName.js");
/* harmony import */ var _baseName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baseName.js */ "./dist/fn/string/baseName.js");
/* harmony import */ var _type_isString_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../type/isString.js */ "./dist/fn/type/isString.js");




/**
 * Escapes a URL or a file path, optionally adding parameters (get type, to append to the URL without the first separator).
 *
 * @param {*} url
 * @param {*} params
 * @returns
 */
var escapeUrl = function (url, params) {
    var st = "";
    if (url.match("^(http|https)://")) {
        st += "http";
        url = url.substring(4);
        if (url.substr(0, 1) === "s") {
            st += "s";
            url = url.substring(1);
        }
        st += "://";
        url = url.substring(3);
    }
    (0,_loop_each_js__WEBPACK_IMPORTED_MODULE_0__.each)((0,_dirName_js__WEBPACK_IMPORTED_MODULE_1__.dirName)(url).split("/"), function (a) {
        st += encodeURIComponent(a) + "/";
    });
    var base = (0,_baseName_js__WEBPACK_IMPORTED_MODULE_2__.baseName)(url);
    var sep = "?";
    var existingParams = "";
    if (base.indexOf(sep)) {
        var tmp = base.split("?");
        sep = "&";
        existingParams = "?" + tmp[1];
        base = tmp[0];
    }
    if (params && (0,_type_isString_js__WEBPACK_IMPORTED_MODULE_3__.isString)(params)) {
        if (params.match("^(\\&|\\?)")) {
            params = params.substring(1);
        }
        params = sep + params;
    }
    else {
        params = "";
    }
    return st + encodeURIComponent(base) + existingParams + params;
};



/***/ }),

/***/ "./dist/fn/string/fileExt.js":
/*!***********************************!*\
  !*** ./dist/fn/string/fileExt.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fileExt: () => (/* binding */ fileExt)
/* harmony export */ });
/* harmony import */ var _type_isString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isString.js */ "./dist/fn/type/isString.js");

/**
 * Gets the extension from a file's name.
 *
 * The extension is returned in lower case; if the filename has no extension
 * or is not valid it will return an empty string.
 *
 * @method   fileExt
 * @global
 *
 * @example
 * ```javascript
 * // "txt"
 * bbn.fn.fileExt('my_file.txt')
 * ```
 *
 * @example
 * ```javascript
 * // "txt"
 * bbn.fn.fileExt('MY_FILE.TXT')
 * ```
 *
 * @example
 * ```javascript
 * // ""
 * bbn.fn.fileExt('MY_FILE')
 * ```
 *
 * @example
 * ```javascript
 * // ""
 * bbn.fn.fileExt('.MY_FILE')
 * ```
 *
 * @param   {String} filename
 * @returns {String} The file's extension
 */
var fileExt = function (filename) {
    if (filename && (0,_type_isString_js__WEBPACK_IMPORTED_MODULE_0__.isString)(filename)) {
        var bits = filename.split(".");
        if (bits[0] && bits.length > 1) {
            return bits[bits.length - 1].toLowerCase();
        }
    }
    return "";
};



/***/ }),

/***/ "./dist/fn/string/format.js":
/*!**********************************!*\
  !*** ./dist/fn/string/format.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   format: () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _type_checkType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/checkType.js */ "./dist/fn/type/checkType.js");

var format = function (str) {
    var args = Array.prototype.slice.call(arguments, 1);
    if (args.length) {
        var i_1 = 0;
        return str.replace(/\%([d|s])/g, function (match, type) {
            var tmp = args[i_1++];
            (0,_type_checkType_js__WEBPACK_IMPORTED_MODULE_0__.checkType)(tmp, type === 'd' ? 'number' : 'string', bbn._("The value doesn't correspond to the format"));
            return tmp;
        });
    }
    return str;
};



/***/ }),

/***/ "./dist/fn/string/formatBytes.js":
/*!***************************************!*\
  !*** ./dist/fn/string/formatBytes.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatBytes: () => (/* binding */ formatBytes)
/* harmony export */ });
/**
 * Formats the value given in bytes.
 * @method   formatBytes
 * @global
 * @example
 * //"52.23 MB"
 * ``` javascript
 * bbn.fn.formatBytes(54764654);
 * ```
 * @memberof bbn.fn
 * @returns  {String}
 */
var formatBytes = function (bytes, decimals) {
    if (decimals === void 0) { decimals = 2; }
    if (!bytes) {
        return '0 B';
    }
    var k = 1024, s = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals < 0 ? 0 : decimals)) + ' ' + s[i];
};



/***/ }),

/***/ "./dist/fn/string/formatSize.js":
/*!**************************************!*\
  !*** ./dist/fn/string/formatSize.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatSize: () => (/* binding */ formatSize)
/* harmony export */ });
/* harmony import */ var _type_isNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isNumber.js */ "./dist/fn/type/isNumber.js");
/* harmony import */ var _type_isString_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/isString.js */ "./dist/fn/type/isString.js");


var formatSize = function (st, noValid) {
    if ((0,_type_isNumber_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(st)) {
        return st + 'px';
    }
    if ((0,_type_isString_js__WEBPACK_IMPORTED_MODULE_1__.isString)(st)) {
        return st;
    }
    return noValid ? false : 'auto';
};



/***/ }),

/***/ "./dist/fn/string/hash.js":
/*!********************************!*\
  !*** ./dist/fn/string/hash.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hash: () => (/* binding */ hash)
/* harmony export */ });
/* harmony import */ var _type_isDom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isDom.js */ "./dist/fn/type/isDom.js");
/* harmony import */ var _type_isCp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/isCp.js */ "./dist/fn/type/isCp.js");
/* harmony import */ var _object_circularReplacer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../object/circularReplacer.js */ "./dist/fn/object/circularReplacer.js");
/* harmony import */ var _simpleHash_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simpleHash.js */ "./dist/fn/string/simpleHash.js");




/**
 * Makes a hash out of anything
 * @param {Object|Array} obj
 * @returns {String}
 */
var hash = function (obj) {
    //log(obj);
    var st = "__bbn__";
    for (var i in arguments) {
        if (arguments[i]) {
            var value = arguments[i];
            if ((0,_type_isDom_js__WEBPACK_IMPORTED_MODULE_0__.isDom)(value)) {
                if (value.bbnId) {
                    st +=
                        "__BBN_DOM__" + value.tagName + "/" + value.bbnId + value.bbnHash;
                }
                else {
                    st += "__BBN_DOM__" + value.tagName + "/" + value.className;
                }
            }
            else if ((0,_type_isCp_js__WEBPACK_IMPORTED_MODULE_1__.isCp)(value)) {
                st += "__BBN_CP__" + value.$options.name + "/" + value.$cid;
            }
            else {
                try {
                    st += JSON.stringify(arguments[i], (0,_object_circularReplacer_js__WEBPACK_IMPORTED_MODULE_2__.circularReplacer)());
                }
                catch (e) {
                    st += ".";
                }
            }
        }
    }
    return (0,_simpleHash_js__WEBPACK_IMPORTED_MODULE_3__.simpleHash)(st);
};



/***/ }),

/***/ "./dist/fn/string/md5.js":
/*!*******************************!*\
  !*** ./dist/fn/string/md5.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   md5: () => (/* binding */ md5)
/* harmony export */ });
/**
 * Converts and returns the argument passed in a string in md5 format.
 *
 * This is a formatted version of popular md5 implementation
 * Original copyright (c) Paul Johnston & Greg Holt.
 *
 *
 * @method   md5
 * @global
 *
 * @example
 * ```javascript
 * //"486eb65274adb86441072afa1e2289f3"
 * bbn.fn.md5("this is a test string");
 * ```
 *
 * @memberof bbn.fn
 * @param    {Mixed} st
 * @returns  {String} in md5 format
 */
var md5 = function (st) {
    var hc = "0123456789abcdef";
    function rh(n) {
        var j, s = "";
        for (j = 0; j <= 3; j++)
            s +=
                hc.charAt((n >> (j * 8 + 4)) & 0x0f) + hc.charAt((n >> (j * 8)) & 0x0f);
        return s;
    }
    function ad(x, y) {
        var l = (x & 0xffff) + (y & 0xffff);
        var m = (x >> 16) + (y >> 16) + (l >> 16);
        return (m << 16) | (l & 0xffff);
    }
    function rl(n, c) {
        return (n << c) | (n >>> (32 - c));
    }
    function cm(q, a, b, x, s, t) {
        return ad(rl(ad(ad(a, q), ad(x, t)), s), b);
    }
    function ff(a, b, c, d, x, s, t) {
        return cm((b & c) | (~b & d), a, b, x, s, t);
    }
    function gg(a, b, c, d, x, s, t) {
        return cm((b & d) | (c & ~d), a, b, x, s, t);
    }
    function hh(a, b, c, d, x, s, t) {
        return cm(b ^ c ^ d, a, b, x, s, t);
    }
    function ii(a, b, c, d, x, s, t) {
        return cm(c ^ (b | ~d), a, b, x, s, t);
    }
    function sb(x) {
        var i;
        var nblk = ((x.length + 8) >> 6) + 1;
        var blks = new Array(nblk * 16);
        for (i = 0; i < nblk * 16; i++)
            blks[i] = 0;
        for (i = 0; i < x.length; i++)
            blks[i >> 2] |= x.charCodeAt(i) << ((i % 4) * 8);
        blks[i >> 2] |= 0x80 << ((i % 4) * 8);
        blks[nblk * 16 - 2] = x.length * 8;
        return blks;
    }
    var i, x = sb(st), a = 1732584193, b = -271733879, c = -1732584194, d = 271733878, olda, oldb, oldc, oldd;
    for (i = 0; i < x.length; i += 16) {
        olda = a;
        oldb = b;
        oldc = c;
        oldd = d;
        a = ff(a, b, c, d, x[i + 0], 7, -680876936);
        d = ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = ff(c, d, a, b, x[i + 10], 17, -42063);
        b = ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = gg(b, c, d, a, x[i + 0], 20, -373897302);
        a = gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = hh(a, b, c, d, x[i + 5], 4, -378558);
        d = hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = hh(d, a, b, c, x[i + 0], 11, -358537222);
        c = hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = ii(a, b, c, d, x[i + 0], 6, -198630844);
        d = ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = ad(a, olda);
        b = ad(b, oldb);
        c = ad(c, oldc);
        d = ad(d, oldd);
    }
    return rh(a) + rh(b) + rh(c) + rh(d);
};



/***/ }),

/***/ "./dist/fn/string/nl2br.js":
/*!*********************************!*\
  !*** ./dist/fn/string/nl2br.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   nl2br: () => (/* binding */ nl2br)
/* harmony export */ });
/* harmony import */ var _replaceAll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./replaceAll.js */ "./dist/fn/string/replaceAll.js");

/**
 * Replaces all new line characters '\ n' with html tag '<br>'.
 *
 * @method   nl2br
 * @global
 *
 * @example
 * ```javascript
 * bbn.fn.nl2br('hello \n world!');
 * //"hello <br> world!"
 * ```
 * @memberof bbn.fn
 * @param    {String} st
 * @returns  {String}
 */
var nl2br = function (st, keepNl) {
    return (0,_replaceAll_js__WEBPACK_IMPORTED_MODULE_0__.replaceAll)("\n", "<br>" + (keepNl ? "\n" : ""), st);
};



/***/ }),

/***/ "./dist/fn/string/printf.js":
/*!**********************************!*\
  !*** ./dist/fn/string/printf.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printf: () => (/* binding */ printf)
/* harmony export */ });
/**
 * @method   printf
 * @todo     Add method description for printf
 * @global
 * @memberof bbn.fn
 * @param    String format
 * @returns  {*}
 */
var printf = function (format) {
    var args = Array.prototype.slice.call(arguments, 1);
    return format.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != "undefined" ? args[number] : match;
    });
};



/***/ }),

/***/ "./dist/fn/string/quotes2html.js":
/*!***************************************!*\
  !*** ./dist/fn/string/quotes2html.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   quotes2html: () => (/* binding */ quotes2html)
/* harmony export */ });
/* harmony import */ var _replaceAll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./replaceAll.js */ "./dist/fn/string/replaceAll.js");

/**
 * Replace quotes in ASCII code
 *
 * @method   quotes2html
 * @global
 *
 * @example
 * ```javascript
 * bbn.fn.quotes2html("hello 'world'!", 's');
 * // hello &#39;world&#39;!
 * ```
 *
 * @example
 * ```javascript
 * bbn.fn.quotes2html('hello "world\'s"!', 'd');
 * // hello &quot;world'sd&quot;!
 * ```
 *
 * @example
 * ```javascript
 * bbn.fn.quotes2html('hello "world\'s"!');
 * // hello &quot;world&#39;sd&quot;!
 * ```
 *
 * @memberof bbn.fn
 * @param    {String} st
 * @returns  {String}
 */
var quotes2html = function (st, type) {
    if (!type || type.toLowerCase().indexOf("s") === 0) {
        st = (0,_replaceAll_js__WEBPACK_IMPORTED_MODULE_0__.replaceAll)("'", "&#39;", st);
    }
    if (!type || type.toLowerCase().indexOf("d") === 0) {
        st = (0,_replaceAll_js__WEBPACK_IMPORTED_MODULE_0__.replaceAll)('"', "&quot;", st);
    }
    return st;
};



/***/ }),

/***/ "./dist/fn/string/randomString.js":
/*!****************************************!*\
  !*** ./dist/fn/string/randomString.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   randomString: () => (/* binding */ randomString)
/* harmony export */ });
/* harmony import */ var _misc_randomInt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../misc/randomInt.js */ "./dist/fn/misc/randomInt.js");

/**
 * Returns a random String with random lenght,
 *
 * Generates a random string from the length of the random number,
 * taken from a range of numbers providing either only the minimum or also the maximum as arguments.
 *
 * @method   randomString
 * @global
 *
 * @example
 * ```javascript
 * //"U7xXO0Xb"
 * bbn.fn.randomString(3,10);
 * ```
 *
 * @example
 * ```javascript
 * //"H8F"
 * bbn.fn.randomString(3);
 * ```
 *
 * @memberof bbn.fn
 * @param    {Number} length
 * @param    {String} chars
 * @returns  {String}
 */
var randomString = function (min, max, types) {
    var length;
    var type;
    var chars = {
        n: "0123456789",
        l: "abcdefghijklmnopqrstuvwxyz",
        u: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    };
    if (!types) {
        types = "nlu";
    }
    if (!min) {
        length = (0,_misc_randomInt_js__WEBPACK_IMPORTED_MODULE_0__.randomInt)(8, 14);
    }
    if (typeof max === "string") {
        types = "n";
        delete chars.l;
        delete chars.u;
        chars.n = max;
        if (!length) {
            length = min;
        }
    }
    else if (typeof max === "number" && min < max) {
        length = (0,_misc_randomInt_js__WEBPACK_IMPORTED_MODULE_0__.randomInt)(min, max);
    }
    else if (min) {
        length = min;
    }
    var result = "";
    for (var i = 0; i < length; i++) {
        // Not a number for the first char
        if (i === 0) {
            if (types !== "n") {
                type = types.indexOf("u") === -1 ? "l" : "u";
            }
        }
        else {
            type = types[Math.floor(Math.random() * types.length)];
        }
        result += chars[type][Math.floor(Math.random() * chars[type].length)];
    }
    return result;
};



/***/ }),

/***/ "./dist/fn/string/removeAccents.js":
/*!*****************************************!*\
  !*** ./dist/fn/string/removeAccents.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeAccents: () => (/* binding */ removeAccents)
/* harmony export */ });
/* harmony import */ var _type_isString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isString.js */ "./dist/fn/type/isString.js");
/* harmony import */ var _browser_log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../browser/log.js */ "./dist/fn/browser/log.js");


/**
 * Returns the string passed as an argument without accents.
 *
 * @method   removeAccents
 * @global
 *
 * @example
 * ```javascript
 * //"eeou"
 * bbn.fn.removeAccents("èéòù");
 * ```
 * @memberof bbn.fn
 * @param    {String} st
 * @returns  {String}
 */
var removeAccents = function (st) {
    if (!(0,_type_isString_js__WEBPACK_IMPORTED_MODULE_0__.isString)(st)) {
        if (st.toString) {
            st = st.toString();
        }
        else {
            (0,_browser_log_js__WEBPACK_IMPORTED_MODULE_1__.log)(st);
            throw new Error(bbn._("removeAccent expects a string"));
        }
    }
    return st.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};



/***/ }),

/***/ "./dist/fn/string/removeExtraSpaces.js":
/*!*********************************************!*\
  !*** ./dist/fn/string/removeExtraSpaces.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeExtraSpaces: () => (/* binding */ removeExtraSpaces)
/* harmony export */ });
/**
 * Removes all group of spaces by one single space.
 * @param {String} str
 * @returns
 */
var removeExtraSpaces = function (str) {
    return str.replace(/\s+/g, " ").trim();
};



/***/ }),

/***/ "./dist/fn/string/removeHtmlComments.js":
/*!**********************************************!*\
  !*** ./dist/fn/string/removeHtmlComments.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeHtmlComments: () => (/* binding */ removeHtmlComments)
/* harmony export */ });
/* harmony import */ var _type_isString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isString.js */ "./dist/fn/type/isString.js");

var removeHtmlComments = function (str) {
    if (!(0,_type_isString_js__WEBPACK_IMPORTED_MODULE_0__.isString)(str)) {
        return str;
    }
    return str.replace(/<!--[\s\S]*?-->/g, '');
};



/***/ }),

/***/ "./dist/fn/string/removeTrailingChars.js":
/*!***********************************************!*\
  !*** ./dist/fn/string/removeTrailingChars.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeTrailingChars: () => (/* binding */ removeTrailingChars)
/* harmony export */ });
/* harmony import */ var _substr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./substr.js */ "./dist/fn/string/substr.js");

/**
 * @method   removeTrailingChars
 * @todo     Add method description for removeTrailingChars
 * @global
 * @memberof bbn.fn
 * @param    {String} st
 * @param    {String} char
 * @returns  {*}
 */
var removeTrailingChars = function (st, char) {
    if (!char) {
        char = " ";
    }
    if (char.length) {
        while ((0,_substr_js__WEBPACK_IMPORTED_MODULE_0__.substr)(st, -char.length) === char) {
            st = (0,_substr_js__WEBPACK_IMPORTED_MODULE_0__.substr)(st, 0, st.length - char.length);
        }
        while ((0,_substr_js__WEBPACK_IMPORTED_MODULE_0__.substr)(st, 0, char.length) === char) {
            st = (0,_substr_js__WEBPACK_IMPORTED_MODULE_0__.substr)(st, char.length);
        }
    }
    return st;
};



/***/ }),

/***/ "./dist/fn/string/repeat.js":
/*!**********************************!*\
  !*** ./dist/fn/string/repeat.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   repeat: () => (/* binding */ repeat)
/* harmony export */ });
/**
 * Returns a string which is the repetition of the first argument for the number passed in the second argument.
 *
 * @method   repeat
 * @global
 *
 * @example
 * ```javascript
 * //"HelloHelloHello"
 * bbn.fn.repeat('Hello', 3);
 * ```
 * @memberof bbn.fn
 * @returns  {String}
 */
var repeat = function (st, num) {
    return st.repeat(num);
};



/***/ }),

/***/ "./dist/fn/string/replaceAll.js":
/*!**************************************!*\
  !*** ./dist/fn/string/replaceAll.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   replaceAll: () => (/* binding */ replaceAll)
/* harmony export */ });
/* harmony import */ var _type_isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isObject.js */ "./dist/fn/type/isObject.js");
/* harmony import */ var _escapeRegExp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./escapeRegExp.js */ "./dist/fn/string/escapeRegExp.js");


/**
 * Looks for and replaces parts of string with what we want.
 *
 * With the first argument you define what to replace,
 * the second argument with what you have to replace instead and the third argument is the string to be replaced.
 *
 * @method   replaceAll
 * @global
 *
 * @example
 * ```javascript
 * bbn.fn.replaceAll('day', 'night', 'Today is a beautiful day');
 * //"Tonight is a beautiful night"
 * ```
 * @memberof bbn.fn
 * @param    {String} find
 * @param    {String} replace
 * @param    {String|RegExp} str
 * @param    {String} flags
 * @returns  {String}
 */
var replaceAll = function (find, replace, str, flags) {
    if (flags === void 0) { flags = ""; }
    return str
        .toString()
        .replace((0,_type_isObject_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(find) ? find : new RegExp((0,_escapeRegExp_js__WEBPACK_IMPORTED_MODULE_1__.escapeRegExp)(find), "g" + flags), replace);
};



/***/ }),

/***/ "./dist/fn/string/sanitize.js":
/*!************************************!*\
  !*** ./dist/fn/string/sanitize.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sanitize: () => (/* binding */ sanitize)
/* harmony export */ });
/* harmony import */ var _removeAccents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeAccents.js */ "./dist/fn/string/removeAccents.js");
/* harmony import */ var _trim_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trim.js */ "./dist/fn/string/trim.js");


/**
 * Removes all unacceptable characters in a DOM node.
 *
 * @method   sanitize
 * @global
 *
 * @example
 * ```javascript
 * //"this_is_a_test"
 * bbn.fn.sanitize("this&is_$a^test");
 * ```
 *
 * @memberof bbn.fn
 * @returns  {String} str
 */
var sanitize = function (str, separator) {
    if (separator === void 0) { separator = "_"; }
    var escaped = ["[", "]", "{", "}", "(", ")", "-", "+", "*", "/"];
    var exp = "[";
    for (var i = 0; i < separator.length; i++) {
        if (escaped.includes(separator[i])) {
            exp += "\\";
        }
        exp += separator[i];
    }
    exp += "]+";
    var re = new RegExp(exp, "g");
    var res = (0,_removeAccents_js__WEBPACK_IMPORTED_MODULE_0__.removeAccents)(str)
        .replace(/[^a-z0-9]/gi, separator)
        .replace(re, separator);
    return (0,_trim_js__WEBPACK_IMPORTED_MODULE_1__.trim)(res, separator);
};



/***/ }),

/***/ "./dist/fn/string/shorten.js":
/*!***********************************!*\
  !*** ./dist/fn/string/shorten.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shorten: () => (/* binding */ shorten)
/* harmony export */ });
/* harmony import */ var _type_isString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isString.js */ "./dist/fn/type/isString.js");
/* harmony import */ var _substr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./substr.js */ "./dist/fn/string/substr.js");


/**
 * Shortens the given string after *len* characters.
 *
 * Provides an abbreviation to the string passed as the first argument,
 * deciding through the second argument the number of characters to keep and the remainder replaced
 * by what is passed as the third argument and if not given a defalut it is: '...'
 *
 * @method   shorten
 * @global
 *
 * @example
 * ```javascript
 * //"test***"
 * bbn.fn.shorten('testing', 4, '***');
 * ```
 *  @example
 * ```javascript
 * //"test..."
 * bbn.fn.shorten('testing', 4);
 * ```
 * @memberof bbn.fn
 * @param    {String} st
 * @param    {Number} len
 * @returns  {String}
 */
var shorten = function (st, len, adj) {
    if (typeof st.toLowerCase() === "string") {
        if (!len) {
            len = bbn.var.shortenLen;
        }
        if (adj === undefined || !(0,_type_isString_js__WEBPACK_IMPORTED_MODULE_0__.isString)(adj)) {
            adj = "...";
        }
        if (st.length > len) {
            st = (0,_substr_js__WEBPACK_IMPORTED_MODULE_1__.substr)(st, 0, len) + adj;
        }
    }
    return st;
};



/***/ }),

/***/ "./dist/fn/string/simpleHash.js":
/*!**************************************!*\
  !*** ./dist/fn/string/simpleHash.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   simpleHash: () => (/* binding */ simpleHash)
/* harmony export */ });
/* harmony import */ var _simpleHash1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simpleHash1.js */ "./dist/fn/string/simpleHash1.js");
/* harmony import */ var _simpleHash2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simpleHash2.js */ "./dist/fn/string/simpleHash2.js");


var simpleHash = function (str) {
    var part1 = (0,_simpleHash1_js__WEBPACK_IMPORTED_MODULE_0__.simpleHash1)(str).padStart(8, '0');
    var part2 = (0,_simpleHash2_js__WEBPACK_IMPORTED_MODULE_1__.simpleHash2)(str).padStart(8, '0');
    return part1 + part2;
};



/***/ }),

/***/ "./dist/fn/string/simpleHash1.js":
/*!***************************************!*\
  !*** ./dist/fn/string/simpleHash1.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   simpleHash1: () => (/* binding */ simpleHash1)
/* harmony export */ });
var simpleHash1 = function (str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0; // Convert to 32-bit integer
    }
    return Math.abs(hash).toString(16);
};



/***/ }),

/***/ "./dist/fn/string/simpleHash2.js":
/*!***************************************!*\
  !*** ./dist/fn/string/simpleHash2.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   simpleHash2: () => (/* binding */ simpleHash2)
/* harmony export */ });
var simpleHash2 = function (str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        hash = char + (hash << 6) + (hash << 16) - hash;
        hash |= 0; // Convert to 32-bit integer
    }
    return Math.abs(hash).toString(16);
};



/***/ }),

/***/ "./dist/fn/string/substr.js":
/*!**********************************!*\
  !*** ./dist/fn/string/substr.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   substr: () => (/* binding */ substr)
/* harmony export */ });
/* harmony import */ var _type_isString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isString.js */ "./dist/fn/type/isString.js");
/* harmony import */ var _type_isInt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/isInt.js */ "./dist/fn/type/isInt.js");
/* harmony import */ var _browser_log_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../browser/log.js */ "./dist/fn/browser/log.js");



/**
 * Basic substring function accepting both positive and negative values.
 *
 * @method   substr
 * @global
 *
 * @example
 * ```javascript
 * bbn.fn.substr(bbn.fn, 'Hello', -3, -1);
 * // "ll"
 * bbn.fn.substr(bbn.fn, 'Hello', -3);
 * // "llo"
 * bbn.fn.substr(bbn.fn, 'Hello', 0, 1);
 * // "H"
 * ```
 * @memberof bbn.fn
 * @param    {String} str
 * @param    {Number} from
 * @param    {Number} length
 * @returns  {String} Result substring
 */
var substr = function (str, from, length) {
    if (!(0,_type_isString_js__WEBPACK_IMPORTED_MODULE_0__.isString)(str) || !(0,_type_isInt_js__WEBPACK_IMPORTED_MODULE_1__.isInt)(from)) {
        (0,_browser_log_js__WEBPACK_IMPORTED_MODULE_2__.log)(arguments);
        throw new Error(bbn._("The substr function should be applied to a string and at least a `from` argument should be given"));
    }
    if (from < 0) {
        from = str.length + from;
    }
    if (!(0,_type_isInt_js__WEBPACK_IMPORTED_MODULE_1__.isInt)(length)) {
        return str.substring(from);
    }
    return str.substring(from, (length < 0 ? str.length : from) + length);
};



/***/ }),

/***/ "./dist/fn/string/trim.js":
/*!********************************!*\
  !*** ./dist/fn/string/trim.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   trim: () => (/* binding */ trim)
/* harmony export */ });
/* harmony import */ var _substr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./substr.js */ "./dist/fn/string/substr.js");

var trim = function (str, hair) {
    if (hair === void 0) { hair = ' '; }
    if (hair === ' ') {
        return str.trim();
    }
    if (!hair) {
        return str;
    }
    if (hair === str) {
        return '';
    }
    while (str.indexOf(hair) === 0) {
        str = (0,_substr_js__WEBPACK_IMPORTED_MODULE_0__.substr)(str, hair.length);
    }
    while (str.lastIndexOf(hair) === str.length - hair.length) {
        str = (0,_substr_js__WEBPACK_IMPORTED_MODULE_0__.substr)(str, 0, str.length - hair.length);
    }
    return str;
};



/***/ }),

/***/ "./dist/fn/string/uniqString.js":
/*!**************************************!*\
  !*** ./dist/fn/string/uniqString.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uniqString: () => (/* binding */ uniqString)
/* harmony export */ });
/* harmony import */ var _type_isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isArray.js */ "./dist/fn/type/isArray.js");
/* harmony import */ var _loop_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loop/each.js */ "./dist/fn/loop/each.js");
/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./md5.js */ "./dist/fn/string/md5.js");



/**
 * Create a unique string in md5 format.
 *
 * Converts and return all the arguments inserted in a unique string in md5 format.
 *
 * @method   uniqString
 * @global
 *
 * @example
 * ```javascript
 * //"6cb083da4d4987af9b4fa4ad8ca23bb1"
 * bbn.fn.uniqString('test',['test'],{id:1, test:2},4);
 * ```
 * @memberof bbn.fn
 * @returns  {String} The unique string in md5 format
 */
var uniqString = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var st = "";
    var _loop_1 = function () {
        if (!args[i]) {
            st += "__bbn_empty__";
        }
        else if (typeof args[i] === "object") {
            if ((0,_type_isArray_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(args[i])) {
                st += JSON.stringify(args[i]);
            }
            else {
                // An object with the same properties, even in different order, should produce the same answer
                var tmp_1 = {};
                var ks = Object.keys(args[i]).sort();
                (0,_loop_each_js__WEBPACK_IMPORTED_MODULE_1__.each)(ks, function (k) {
                    tmp_1[k] = args[i][k];
                });
                st += JSON.stringify(tmp_1);
            }
        }
        else if (typeof args[i] !== "string") {
            st += args[i].toString();
        }
        else {
            st += args[i];
        }
    };
    for (var i = 0; i < args.length; i++) {
        _loop_1();
    }
    return (0,_md5_js__WEBPACK_IMPORTED_MODULE_2__.md5)(st);
};



/***/ }),

/***/ "./dist/fn/style/addColors.js":
/*!************************************!*\
  !*** ./dist/fn/style/addColors.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addColors: () => (/* binding */ addColors)
/* harmony export */ });
/* harmony import */ var _object_numProperties_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../object/numProperties.js */ "./dist/fn/object/numProperties.js");
/* harmony import */ var _loop_iterate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loop/iterate.js */ "./dist/fn/loop/iterate.js");


/**
 * Adds the given color to the object bbn.var.colors in order to be able to use
 * the css classes bbn-bg-myColor for the background and bbn-myColor for the text color.
 *
 * @method   addColors
 * @global
 * @example
 * ```javascript
 * //<div class="bbn-bg-maroon">background</div> <span class="bbn-maroon">text color</span>
 * bbn.fn.addColors({maroon: '#800000'});
 * ```
 * @memberof bbn.fn
 * @param    {Object} colors
 * @returns
 */
var addColors = function (colors) {
    if ((0,_object_numProperties_js__WEBPACK_IMPORTED_MODULE_0__.numProperties)(colors)) {
        if (!bbn.var.colors) {
            bbn.var.colors = {};
        }
        var element = document.createElement("style");
        document.head.appendChild(element);
        var sheet_1 = element.sheet;
        // Append style element to head
        var i_1 = 0;
        (0,_loop_iterate_js__WEBPACK_IMPORTED_MODULE_1__.iterate)(colors, function (v, n) {
            bbn.var.colors[n] = v;
            sheet_1.insertRule(".bbn-" +
                n +
                ", .bbn-color-text-" +
                n +
                " {color: " +
                v +
                " !important;}", i_1);
            sheet_1.insertRule("svg.bbn-" +
                n +
                ", .bbn-" +
                n +
                " svg, svg.bbn-color-text-" +
                n +
                ", .bbn-color-text-" +
                n +
                " svg {fill: " +
                v +
                ";}", i_1);
            sheet_1.insertRule(".bbn-bg-" +
                n +
                ", .bbn-color-bg-" +
                n +
                ", .bbn-color-background-" +
                n +
                " {background-color: " +
                v +
                " !important;}", i_1);
            sheet_1.insertRule(".bbn-border-" +
                n +
                ", .bbn-color-border-" +
                n +
                " {border-color: " +
                v +
                " !important;}", i_1);
            sheet_1.insertRule(".bbn-color-" +
                n +
                " {border-color: " +
                v +
                "; background-color: " +
                v +
                "; color: " +
                v +
                ";}", i_1);
        });
    }
};



/***/ }),

/***/ "./dist/fn/style/addStyle.js":
/*!***********************************!*\
  !*** ./dist/fn/style/addStyle.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addStyle: () => (/* binding */ addStyle)
/* harmony export */ });
/* harmony import */ var _type_isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/isObject.js */ "./dist/fn/type/isObject.js");
/* harmony import */ var _loop_iterate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loop/iterate.js */ "./dist/fn/loop/iterate.js");


/**
 * @ignore
 * @method   addStyle
 * @todo     Add method description for addStyle
 * @global
 * @memberof bbn.fn
 * @param    {HTMLElement} ele
 * @param    {Object}      o
 * @returns  {*}
 */
var addStyle = function (ele, o) {
    if ((0,_type_isObject_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(o)) {
        (0,_loop_iterate_js__WEBPACK_IMPORTED_MODULE_1__.iterate)(o, function (v, k) {
            ele.style[k] = v;
        });
    }
};



/***/ }),

/***/ "./dist/fn/style/animateCss.js":
/*!*************************************!*\
  !*** ./dist/fn/style/animateCss.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animateCss: () => (/* binding */ animateCss)
/* harmony export */ });
/**
 * @ignore
 * @method   animateCss
 * @todo     Add method description for animateCss
 * @global
 * @memberof bbn.fn
 * @param    {HTMLElement} ele
 * @param    {String}      animationName
 * @param    {Function}    callback
 * @returns  {*}
 */
var animateCss = function (ele, animationName, callback) {
    var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
    /*$(ele).addClass('animated ' + animationName).one(animationEnd, function(){
          if ( typeof callback == 'function' ){ // make sure the callback is a function
            callback.call(this); // brings the scope to the callback
          }
          $(this).removeClass('animated ' + animationName);
        })*/
    ele.classList.add("animated");
    ele.classList.add(animationName);
    ele.addEventListener(animationEnd, function animationEndHandler(e) {
        e.target.removeEventListener(e.type, animationEndHandler);
        if (typeof callback == "function") {
            // make sure the callback is a function
            callback.call(this); // brings the scope to the callback
        }
        e.target.classList.remove(animationName);
    });
};



/***/ }),

/***/ "./dist/fn/style/center.js":
/*!*********************************!*\
  !*** ./dist/fn/style/center.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   center: () => (/* binding */ center)
/* harmony export */ });
/**
 * Centers the given element by giving it a position absolute.
 *
 * @method   center
 * @global
 * @example
 * ```javascript
 * //<div style="position: absolute; top: 73px; left: 0px;">Documentation</div>
 * bbn.fn.center('<div>Documentation</div>')
 * ```
 * @memberof bbn.fn
 * @param    {HTMLElement} ele
 * @returns  {HTMLElement} The dom element with the new style.
 */
var center = function (ele) {
    //ele = $(ele);
    var parent = ele.parentNode, 
    //w = parent.width(),
    w = parent.clientWidth, 
    //h = parent.height();
    h = parent.clientHeight;
    while (parent && (!w || !h)) {
        /*parent = parent.parent(),
              w = parent.width(),
              h = parent.height();*/
        parent = ele.parentNode;
        w = parent.clientWidth;
        h = parent.clientHeight;
    }
    //ele.css("position","absolute");
    ele.style.position = "absolute";
    //ele.css("top", Math.max(0, ((h - ele.outerHeight()) / 2) + parent.scrollTop()) + "px");
    ele.style.top =
        Math.max(0, (h - ele.offsetHeight) / 2 + parent.scrollTop) + "px";
    //ele.css("left", Math.max(0, ((w - ele.outerWidth()) / 2) + parent.scrollLeft()) + "px");
    ele.style.left =
        Math.max(0, (h - ele.offsetWidth) / 2 + parent.scrollLeft) + "px";
    return ele;
};



/***/ }),

/***/ "./dist/fn/style/cssExists.js":
/*!************************************!*\
  !*** ./dist/fn/style/cssExists.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssExists: () => (/* binding */ cssExists)
/* harmony export */ });
/* harmony import */ var _string_escapeRegExp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../string/escapeRegExp.js */ "./dist/fn/string/escapeRegExp.js");
//import { log } from './log.js'  ;

/**
 * not used
 * @ignore
 * @method   cssExists
 * @todo     Add method description for cssExists
 * @global
 * @memberof bbn.fn
 * @param    {String} f
 * @returns
 */
var cssExists = function (f) {
    var ok;
    var rules;
    var css = document.styleSheets;
    for (var sx = 0; sx < css.length; sx++) {
        ok = 1;
        try {
            rules = css[sx].rules || css[sx].cssRules;
        }
        catch (e) {
            ok = false;
            if (e.name !== "SecurityError") {
                throw e;
            }
        }
        if (ok) {
            //log(rules);
            for (var cx = 0; cx < rules.length; cx++) {
                //log(rules[cx].selectorText);
                if (new RegExp("(^|\\s)" + (0,_string_escapeRegExp_js__WEBPACK_IMPORTED_MODULE_0__.escapeRegExp)(f) + "(\\{|\\s)", "g").test(rules[cx].selectorText)) {
                    return true;
                }
            }
        }
    }
    return false;
};



/***/ }),

/***/ "./dist/fn/style/getCssVar.js":
/*!************************************!*\
  !*** ./dist/fn/style/getCssVar.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCssVar: () => (/* binding */ getCssVar)
/* harmony export */ });
/**
 * Gets a CSS variable value
 * @param {String*} varname
 * @returns
 */
var getCssVar = function (varname) {
    if (varname.indexOf("--") !== 0) {
        varname = "--" + varname;
    }
    return getComputedStyle(document.documentElement).getPropertyValue(varname);
};



/***/ }),

/***/ "./dist/fn/style/getScrollBarSize.js":
/*!*******************************************!*\
  !*** ./dist/fn/style/getScrollBarSize.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getScrollBarSize: () => (/* binding */ getScrollBarSize)
/* harmony export */ });
var getScrollBarSize = function () {
    if (bbn.env.scrollBarSize === undefined) {
        var outer = document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.width = '100px';
        if ('msOverflowStyle' in outer.style) {
            outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
        }
        document.body.appendChild(outer);
        var widthNoScroll = outer.offsetWidth;
        // force scrollbars
        outer.style.overflow = 'scroll';
        // add innerdiv
        var inner = document.createElement('div');
        inner.style.width = '100%';
        outer.appendChild(inner);
        var widthWithScroll = inner.offsetWidth;
        // remove divs
        outer.parentNode.removeChild(outer);
        var sz = widthNoScroll - widthWithScroll;
        bbn.env.scrollBarSize = sz ? sz + 1 : 0;
    }
    return bbn.env.scrollBarSize;
};



/***/ }),

/***/ "./dist/fn/style/lightenDarkenHex.js":
/*!*******************************************!*\
  !*** ./dist/fn/style/lightenDarkenHex.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightenDarkenHex: () => (/* binding */ lightenDarkenHex)
/* harmony export */ });
/**
 * Takes color in hex format and lightens or darkens it with the given value.
 * @method   lightenDarkenHex
 * @global
 * @example
 * ```javascript
 * //"#eccb28"
 * bbn.fn.lightenDarkenHex('#c4a300', 40);
 * ```
 *
 * @example
 * ```javascript
 * //"#9c7b00"
 * bbn.fn.lightenDarkenHex(#c4a300', -40);
 * ```
 * @memberof bbn.fn
 * @returns  {String}
 */
var lightenDarkenHex = function (hex, amt) {
    if (hex && amt) {
        var ht = hex[0] === "#";
        hex = ht ? hex.slice(1) : hex;
        var num = parseInt(hex, 16), r = (num >> 16) + amt, b = ((num >> 8) & 0x00ff) + amt, g = (num & 0x0000ff) + amt;
        if (r > 255) {
            r = 255;
        }
        else if (r < 0) {
            r = 0;
        }
        if (b > 255) {
            b = 255;
        }
        else if (b < 0) {
            b = 0;
        }
        if (g > 255) {
            g = 255;
        }
        else if (g < 0) {
            g = 0;
        }
        return (ht ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
    }
};



/***/ }),

/***/ "./dist/fn/style/outerHeight.js":
/*!**************************************!*\
  !*** ./dist/fn/style/outerHeight.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   outerHeight: () => (/* binding */ outerHeight)
/* harmony export */ });
/* harmony import */ var _html_selector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../html/selector.js */ "./dist/fn/html/selector.js");

/**
 *
 * @ignore
 * @method   outerHeight
 * @todo     Add method description for outerHeight
 * @global
 * @memberof bbn.fn
 * @returns  {*}
 */
var outerHeight = function (ele) {
    ele = (0,_html_selector_js__WEBPACK_IMPORTED_MODULE_0__.selector)(ele);
    if (ele && "offsetHeight" in ele) {
        var styles = window.getComputedStyle(ele);
        var margin = parseFloat(styles["marginTop"]) + parseFloat(styles["marginBottom"]);
        return Math.ceil(ele.offsetHeight + margin);
    }
};



/***/ }),

/***/ "./dist/fn/style/outerWidth.js":
/*!*************************************!*\
  !*** ./dist/fn/style/outerWidth.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   outerWidth: () => (/* binding */ outerWidth)
/* harmony export */ });
/* harmony import */ var _html_selector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../html/selector.js */ "./dist/fn/html/selector.js");

/**
 * @ignore
 * @method   outerWidth
 * @todo     Add method description for outerWidth
 * @global
 * @memberof bbn.fn
 * @returns  {*}
 */
var outerWidth = function (ele) {
    ele = (0,_html_selector_js__WEBPACK_IMPORTED_MODULE_0__.selector)(ele);
    var styles = window.getComputedStyle(ele);
    var margin = parseFloat(styles["marginLeft"]) + parseFloat(styles["marginRight"]);
    return Math.ceil(ele.offsetWidth + margin);
};



/***/ }),

/***/ "./dist/fn/style/resize.js":
/*!*********************************!*\
  !*** ./dist/fn/style/resize.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resize: () => (/* binding */ resize)
/* harmony export */ });
/* harmony import */ var _getCssVar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCssVar.js */ "./dist/fn/style/getCssVar.js");
/* harmony import */ var _loop_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loop/each.js */ "./dist/fn/loop/each.js");


var resize = function () {
    var diffW = bbn.env.width !== window.innerWidth;
    var diffH = bbn.env.height !== window.innerHeight;
    if (diffW || diffH) {
        if (diffW) {
            bbn.env.width =
                window.innerWidth || window.document.documentElement.clientWidth || window.document.body.clientWidth;
            document.documentElement.style.setProperty('--vw', bbn.env.width * 0.01 + 'px');
        }
        if (diffH) {
            bbn.env.height =
                window.innerHeight || window.document.documentElement.clientHeight || window.document.body.clientHeight;
            document.documentElement.style.setProperty('--vh', bbn.env.height * 0.01 + 'px');
        }
        var smallWidth = parseInt((0,_getCssVar_js__WEBPACK_IMPORTED_MODULE_0__.getCssVar)('mobile-limit')) || 650;
        var newCls_1 = 'bbn-screen-' + (bbn.env.width < smallWidth ? 'small' : 'regular');
        var classes_1 = (document.body.className || '').split(' ');
        var done_1 = false;
        (0,_loop_each_js__WEBPACK_IMPORTED_MODULE_1__.each)(classes_1, function (cls, idx) {
            var bits = cls.split('-');
            if (bits.length === 3 && cls.indexOf('bbn-screen-') === 0) {
                done_1 = true;
                if (cls !== newCls_1) {
                    classes_1.splice(idx, 1, newCls_1);
                }
                return false;
            }
        });
        if (!done_1) {
            classes_1.push(newCls_1);
        }
        bbn.fn.defaultResizeFunction();
        document.body.className = classes_1.join(' ');
    }
};



/***/ }),

/***/ "./dist/fn/style/setCssVar.js":
/*!************************************!*\
  !*** ./dist/fn/style/setCssVar.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setCssVar: () => (/* binding */ setCssVar)
/* harmony export */ });
/**
 * Creates a CSS variable
 * @param {String*} varname
 * @param {String*} value
 * @returns
 */
var setCssVar = function (varname, value) {
    if (varname.indexOf("--") !== 0) {
        varname = "--" + varname;
    }
    /** @todo To Fix */
    document.documentElement.style.setProperty(varname, value);
};



/***/ }),

/***/ "./dist/fn/type/checkType.js":
/*!***********************************!*\
  !*** ./dist/fn/type/checkType.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkType: () => (/* binding */ checkType)
/* harmony export */ });
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ "./dist/fn/type/isArray.js");
/* harmony import */ var _loop_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loop/each.js */ "./dist/fn/loop/each.js");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isFunction.js */ "./dist/fn/type/isFunction.js");
/* harmony import */ var _isString_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isString.js */ "./dist/fn/type/isString.js");
/* harmony import */ var _string_correctCase_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../string/correctCase.js */ "./dist/fn/string/correctCase.js");
/* harmony import */ var _browser_error_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../browser/error.js */ "./dist/fn/browser/error.js");
/* harmony import */ var _browser_log_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../browser/log.js */ "./dist/fn/browser/log.js");







var checkType = function (value, type, msg) {
    var logs = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        logs[_i - 3] = arguments[_i];
    }
    var ok = false;
    if (!(0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(type)) {
        type = [type];
    }
    var typesList = [];
    (0,_loop_each_js__WEBPACK_IMPORTED_MODULE_1__.each)(type, function (t) {
        var _a;
        if (t === String) {
            t = 'string';
        }
        else if (t === Number) {
            t = 'number';
        }
        else if (t === Array) {
            t = 'array';
        }
        else if (t === Boolean) {
            t = 'boolean';
        }
        else if (t === Object) {
            t = 'object';
        }
        else if (t === Function) {
            t = 'function';
        }
        if ((0,_isFunction_js__WEBPACK_IMPORTED_MODULE_2__.isFunction)(t)) {
            typesList.push(t.name || ((_a = t.constructor) === null || _a === void 0 ? void 0 : _a.name) || t.toString());
            if (value instanceof t) {
                ok = true;
                return false;
            }
        }
        else if (!(0,_isString_js__WEBPACK_IMPORTED_MODULE_3__.isString)(t) || !(0,_isFunction_js__WEBPACK_IMPORTED_MODULE_2__.isFunction)(bbn.fn['is' + (0,_string_correctCase_js__WEBPACK_IMPORTED_MODULE_4__.correctCase)(t)])) {
            (0,_browser_error_js__WEBPACK_IMPORTED_MODULE_5__.error)("The type ".concat(t, " is not recognized"));
        }
        else if (bbn.fn['is' + (0,_string_correctCase_js__WEBPACK_IMPORTED_MODULE_4__.correctCase)(t)](value)) {
            ok = true;
            return false;
        }
        else {
            typesList.push(t);
        }
    });
    if (!ok) {
        (0,_browser_log_js__WEBPACK_IMPORTED_MODULE_6__.log)(['Value given', value, 'type', typeof value, 'expected', typesList.join(' or ')]);
        if (logs.length) {
            (0,_browser_log_js__WEBPACK_IMPORTED_MODULE_6__.log)(logs);
        }
        throw new Error((msg ? msg + ' - ' : '') + bbn._('The value should be a %s', typesList.join(' ' + bbn._('or a') + ' ')));
    }
};



/***/ }),

/***/ "./dist/fn/type/isArray.js":
/*!*********************************!*\
  !*** ./dist/fn/type/isArray.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isArray: () => (/* binding */ isArray)
/* harmony export */ });
/**
 * Returns true if the given argument is array.
 * @method   isArray
 * @global
 * @example
 * ```javascript
 * bbn.fn.isArray([5,2,6]);
 * //true
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
var isArray = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if (!Array.isArray(a)) {
            return false;
        }
    }
    return true;
};



/***/ }),

/***/ "./dist/fn/type/isBlob.js":
/*!********************************!*\
  !*** ./dist/fn/type/isBlob.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isBlob: () => (/* binding */ isBlob)
/* harmony export */ });
/**
 * @method   isBlob
 * @todo     Add method description for isFunction
 * @global
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
var isBlob = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if ({}.toString.apply(a) !== "[object Blob]") {
            return false;
        }
    }
    return true;
};



/***/ }),

/***/ "./dist/fn/type/isBoolean.js":
/*!***********************************!*\
  !*** ./dist/fn/type/isBoolean.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isBoolean: () => (/* binding */ isBoolean)
/* harmony export */ });
/**
 * Returns true if the given argument is a boolean
 * @method   isBoolean
 * @global
 * @example
 * ```javascript
 * const sb = true;
 * bbn.fn.isBoolean(sb); // true
 * const sb = 1;
 * bbn.fn.isBoolean(sb); // false
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
var isBoolean = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if (![true, false].includes(a)) {
            return false;
        }
    }
    return true;
};



/***/ }),

/***/ "./dist/fn/type/isCanvas.js":
/*!**********************************!*\
  !*** ./dist/fn/type/isCanvas.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isCanvas: () => (/* binding */ isCanvas)
/* harmony export */ });
/**
 * Returns true if the given argumen is a Canvas.
 *
 * @method   isCanvas
 * @global
 * @example
 * ```javascript
 * let myCanvas = document.createElement('canvas');
 * bbn.fn.isCanvas(myCanvas);
 * //true
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
var isCanvas = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if (!(a instanceof HTMLCanvasElement)) {
            return false;
        }
    }
    return true;
};



/***/ }),

/***/ "./dist/fn/type/isColor.js":
/*!*********************************!*\
  !*** ./dist/fn/type/isColor.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isColor: () => (/* binding */ isColor)
/* harmony export */ });
/* harmony import */ var _isString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isString.js */ "./dist/fn/type/isString.js");

/**
 * Intended to check if the argument provided is a color.
 *
 * It is possible to pass as argument a string with hexadecimal value in rgb or the name of the color.
 *
 * @method   isColor
 * @global
 *
 * @example
 * ```javascript
 * bbn.fn.isColor("#FF0000")
 * //true
 * ```
 *
 * @example
 * ```javascript
 * bbn.fn.isColor("rgb 255, 0, 0");
 * //true
 * ```
 *
 * @example
 * ```javascript
 * bbn.fn.isColor("red");
 * //true
 * ```
 * @memberof bbn.fn
 * @param    {String} st
 * @returns  {Boolean}
 */
var isColor = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    var reg = new RegExp("^(#[a-f0-9]{6}|#[a-f0-9]{3}|rgb *( *[0-9]{1,3}%? *, *[0-9]{1,3}%? *, *[0-9]{1,3}%? *)|rgba *( *[0-9]{1,3}%? *, *[0-9]{1,3}%? *, *[0-9]{1,3}%? *, *[0-9]{1,3}%? *)|black|green|silver|gray|olive|white|yellow|maroon|navy|red|blue|purple|teal|fuchsia|aqua)$", "i");
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var st = args_1[_a];
        if (!(0,_isString_js__WEBPACK_IMPORTED_MODULE_0__.isString)(st)) {
            return false;
        }
        if (!reg.test(st)) {
            return false;
        }
    }
    return true;
};



/***/ }),

/***/ "./dist/fn/type/isComment.js":
/*!***********************************!*\
  !*** ./dist/fn/type/isComment.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isComment: () => (/* binding */ isComment)
/* harmony export */ });
/**
 * Returns true if the given argument is a dom comment;
 * @method   isComment
 * @example
 * ```javascript
 * bbn.fn.isComment(node.childNodes[0]);
 * //true
 * ```
 * @global
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
var isComment = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if (!(a instanceof Comment)) {
            return false;
        }
    }
    return true;
};



/***/ }),

/***/ "./dist/fn/type/isCp.js":
/*!******************************!*\
  !*** ./dist/fn/type/isCp.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isCp: () => (/* binding */ isCp)
/* harmony export */ });
/* harmony import */ var _isDom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isDom.js */ "./dist/fn/type/isDom.js");

var isCp = function () {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length) {
        return false;
    }
    if (!('cp' in bbn) || !('isComponent' in bbn['cp']) || !(typeof bbn['cp'].isComponent === 'function')) {
        return false;
    }
    for (var _b = 0, args_1 = args; _b < args_1.length; _b++) {
        var a = args_1[_b];
        var res = bbn.cp.isComponent(a);
        if (!res || (0,_isDom_js__WEBPACK_IMPORTED_MODULE_0__.isDom)(a) || !((_a = a.$el) === null || _a === void 0 ? void 0 : _a.bbnCid)) {
            return false;
        }
    }
    return true;
};



/***/ }),

/***/ "./dist/fn/type/isDate.js":
/*!********************************!*\
  !*** ./dist/fn/type/isDate.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isDate: () => (/* binding */ isDate)
/* harmony export */ });
/**
 * Returns true if the given argument is a date object.
 * @method   isDate
 * @global
 * @example
 * ```javascript
 * let date = new Date();
 * bbn.fn.isDate(date);
 * //true
 * ```
 * @example
 * ```javascript
 * bbn.fn.isDate('16/04/2020');
 * //false
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
var isDate = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if ({}.toString.apply(a) !== "[object Date]") {
            return false;
        }
    }
    return true;
};



/***/ }),

/***/ "./dist/fn/type/isDimension.js":
/*!*************************************!*\
  !*** ./dist/fn/type/isDimension.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isDimension: () => (/* binding */ isDimension)
/* harmony export */ });
/* harmony import */ var _isValidDimension_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isValidDimension.js */ "./dist/fn/type/isValidDimension.js");

/**
 * Returns true if the given value is a valid CSS dimension string or a number, false otherwise.
 *
 * @method   isDimension
 * @global
 * @memberof bbn.fn
 * @param    {String} st
 * @returns
 */
var isDimension = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var st = args_1[_a];
        if (typeof st !== "number" || st < 0) {
            return false;
        }
        if (!(0,_isValidDimension_js__WEBPACK_IMPORTED_MODULE_0__.isValidDimension)(st)) {
            return false;
        }
    }
    return true;
};



/***/ }),

/***/ "./dist/fn/type/isDom.js":
/*!*******************************!*\
  !*** ./dist/fn/type/isDom.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isDom: () => (/* binding */ isDom)
/* harmony export */ });
/**
 * Returns true if the given argument is a dom element;
 * @method   isDom
 * @example
 * ```javascript
 * bbn.fn.isDom(document.body.childNodes[0]);
 * //true
 * ```
 * @global
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
var isDom = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if (!(a instanceof HTMLElement)) {
            return false;
        }
    }
    return true;
};



/***/ }),

/***/ "./dist/fn/type/isEmail.js":
/*!*********************************!*\
  !*** ./dist/fn/type/isEmail.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isEmail: () => (/* binding */ isEmail)
/* harmony export */ });
/* harmony import */ var _isString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isString.js */ "./dist/fn/type/isString.js");

/**
 * Intended to check if the argument provided is an e-mail address written correctly
 *
 * @method   isEmail
 * @global
 *
 * @example
 * ```javascript
 * bbn.fn.isEmail('test@testorg');
 * //false
 * ```
 *
 * @example
 * ```javascript
 * bbn.fn.isEmail('test@test.org');
 * //true
 * ```
 * @memberof bbn.fn
 * @param    {String} st
 * @returns  {Boolean}
 */
var isEmail = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var st = args_1[_a];
        if (!(0,_isString_js__WEBPACK_IMPORTED_MODULE_0__.isString)(st)) {
            return false;
        }
        if (!regex.test(st)) {
            return false;
        }
    }
    return true;
};



/***/ }),

/***/ "./dist/fn/type/isEmpty.js":
/*!*********************************!*\
  !*** ./dist/fn/type/isEmpty.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isEmpty: () => (/* binding */ isEmpty)
/* harmony export */ });
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ "./dist/fn/type/isArray.js");
/* harmony import */ var _object_numProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../object/numProperties.js */ "./dist/fn/object/numProperties.js");


/**
 * Checks if the argument is empty or not.
 * @method   isEmpty
 * @global
 *
 * @example
 * ```javascript
 * bbn.fn.isEmpty({});
 * //true
 * ```
 * @example
 * ```javascript
 * bbn.fn.isEmpty({test : 1});
 * //false
 * ```
 * @example
 * ```javascript
 * bbn.fn.isEmpty([]);
 * //true
 * ```
 * @example
 * ```javascript
 * bbn.fn.isEmpty(['test']);
 * //false
 * ```
 * @example
 * ```javascript
 * bbn.fn.isEmpty('');
 * //true
 * ```
 * @example
 * ```javascript
 * bbn.fn.isEmpty('test');
 * //false
 * ```
 * @memberof bbn.fn
 * @param    {*} obj
 * @returns  {Boolean}
 */
var isEmpty = function (obj) {
    if (!obj) {
        return true;
    }
    if ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(obj)) {
        return obj.length ? false : true;
    }
    if (typeof obj === "object") {
        if ((0,_object_numProperties_js__WEBPACK_IMPORTED_MODULE_1__.numProperties)(obj)) {
            return false;
        }
        return true;
    }
    return false;
};



/***/ }),

/***/ "./dist/fn/type/isEvent.js":
/*!*********************************!*\
  !*** ./dist/fn/type/isEvent.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isEvent: () => (/* binding */ isEvent)
/* harmony export */ });
/**
 * Returns true if the given argument is an event.
 * @method   isEvent
 * @global
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
var isEvent = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if (!(a instanceof Event)) {
            return false;
        }
    }
    return true;
};



/***/ }),

/***/ "./dist/fn/type/isFunction.js":
/*!************************************!*\
  !*** ./dist/fn/type/isFunction.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFunction: () => (/* binding */ isFunction)
/* harmony export */ });
/**
 * Returns true if the given argument is a function.
 * @global
 * @example
 * ```javascript
 * bbn.fn.isFunction(() => {
 *  alert('Hello world');
 * });
 * //true
 * ```
 * @method   isFunction
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
var isFunction = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var obj = args_1[_a];
        if (!(obj && obj.constructor && obj.call && obj.apply)) {
            return false;
        }
    }
    return true;
};



/***/ }),

/***/ "./dist/fn/type/isHostname.js":
/*!************************************!*\
  !*** ./dist/fn/type/isHostname.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isHostname: () => (/* binding */ isHostname)
/* harmony export */ });
/* harmony import */ var _isString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isString.js */ "./dist/fn/type/isString.js");
/* harmony import */ var _isIP_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isIP.js */ "./dist/fn/type/isIP.js");


var isHostname = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var st = args_1[_a];
        if (!(0,_isString_js__WEBPACK_IMPORTED_MODULE_0__.isString)(st)) {
            return false;
        }
        if (!(0,_isIP_js__WEBPACK_IMPORTED_MODULE_1__.isIP)(st) && !bbn.var.regexp.hostname.test(st)) {
            return false;
        }
    }
    return true;
};



/***/ }),

/***/ "./dist/fn/type/isIP.js":
/*!******************************!*\
  !*** ./dist/fn/type/isIP.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isIP: () => (/* binding */ isIP)
/* harmony export */ });
/* harmony import */ var _isString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isString.js */ "./dist/fn/type/isString.js");

var isIP = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var st = args_1[_a];
        if (!(0,_isString_js__WEBPACK_IMPORTED_MODULE_0__.isString)(st) || !bbn.var.regexp.ip.test(st)) {
            return false;
        }
    }
    return true;
};



/***/ }),

/***/ "./dist/fn/type/isInt.js":
/*!*******************************!*\
  !*** ./dist/fn/type/isInt.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isInt: () => (/* binding */ isInt)
/* harmony export */ });
/**
 * Returns true if the given argument is an integer
 * @method   isInt
 * @global
 * @example
 * ```javascript
 * bbn.fn.isInt(5);
 * // true
 * bbn.fn.isInt(0.5);
 * // false
 * bbn.fn.isInt("hello");
 * // false
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
var isInt = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if (!Number.isInteger(a)) {
            return false;
        }
    }
    return true;
};



/***/ }),

/***/ "./dist/fn/type/isIterable.js":
/*!************************************!*\
  !*** ./dist/fn/type/isIterable.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isIterable: () => (/* binding */ isIterable)
/* harmony export */ });
/**
 * Returns true if the given object can be iterated as an array (numerically).
 *
 * It is possible to pass as argument a string with hexadecimal value in rgb or the name of the color.
 *
 * @method   isIterable
 * @global
 * @memberof bbn.fn
 *
 * @example
 * ```javascript
 * bbn.fn.isIterable([1, 2])
 * // true
 * bbn.fn.isIterable({a: 1, b: 2})
 * // false
 * bbn.fn.isIterable(25)
 * // false
 * bbn.fn.isIterable(document.body.querySelectorAll('.container > div'))
 * // true
 * ```
 *
 * @param    {String} st
 *
 * @returns  {Boolean}
 */
var isIterable = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length) {
        return false;
    }
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if (!a ||
            (typeof a !== "object") ||
            !(Symbol.iterator in Object(a))) {
            return false;
        }
    }
    return true;
};



/***/ }),

/***/ "./dist/fn/type/isNull.js":
/*!********************************!*\
  !*** ./dist/fn/type/isNull.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isNull: () => (/* binding */ isNull)
/* harmony export */ });
/**
 * Returns true if the given argument is null;
 * @method   isNull
 * @global
 * @example
 * ```javascript
 * bbn.fn.isNull(myData);
 * //true
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
var isNull = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if ({}.toString.apply(a) !== "[object Null]") {
            return false;
        }
    }
    return true;
};



/***/ }),

/***/ "./dist/fn/type/isNumber.js":
/*!**********************************!*\
  !*** ./dist/fn/type/isNumber.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isNumber: () => (/* binding */ isNumber)
/* harmony export */ });
/**
 * Returns true if the given argument is a number
 * @method   isNumber
 * @global
 * @example
 * ```javascript
 * bbn.fn.isNumber(5);
 * //true
 * ```
 * @example
 * ```javascript
 * bbn.fn.isNumber(0.5);
 * //true
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
var isNumber = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if (["boolean", "object", "symbol"].includes(typeof a) ||
            a === "" ||
            isNaN(a)) {
            return false;
        }
    }
    return true;
};



/***/ }),

/***/ "./dist/fn/type/isObject.js":
/*!**********************************!*\
  !*** ./dist/fn/type/isObject.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isObject: () => (/* binding */ isObject)
/* harmony export */ });
/**
 * Returns true if the given argument is an object.
 * @method   isObject
 * @global
 * @example
 * ```javascript
 * bbn.fn.isObject({name: 'cami', age: 7});
 * //true
 * ```
 * @example
 * ```javascript
 * bbn.fn.isObject([{name: 'cami', age: 7}]);
 * //false
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
var isObject = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if ({}.toString.apply(a) !== "[object Object]") {
            return false;
        }
    }
    return true;
};



/***/ }),

/***/ "./dist/fn/type/isPercent.js":
/*!***********************************!*\
  !*** ./dist/fn/type/isPercent.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isPercent: () => (/* binding */ isPercent)
/* harmony export */ });
/**
 * Returns true if the given argument is a percentage.
 * @method   isPercent
 * @global
 * @example
 * ```javascript
 * bbn.fn.isPercent('5%');
 * //true
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
var isPercent = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if (typeof a !== "string" || !a.match(/^\d+(?:\.\d+)?%$/)) {
            return false;
        }
    }
    return true;
};



/***/ }),

/***/ "./dist/fn/type/isPrimitive.js":
/*!*************************************!*\
  !*** ./dist/fn/type/isPrimitive.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isPrimitive: () => (/* binding */ isPrimitive)
/* harmony export */ });
/**
 * Returns true if the given arguments are primitive;
 * @method   isPrimitive
 * @global
 * @example
 * ```javascript
 * bbn.fn.isPrimitive('myString', 6, true);
 * //true
 * bbn.fn.isPrimitive([80,10,22]);
 * //false
 * bbn.fn.isPrimitive({});
 * //false
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
var isPrimitive = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if (a !== null && (typeof a == "object" || typeof a == "function")) {
            return false;
        }
    }
    return true;
};



/***/ }),

/***/ "./dist/fn/type/isPromise.js":
/*!***********************************!*\
  !*** ./dist/fn/type/isPromise.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isPromise: () => (/* binding */ isPromise)
/* harmony export */ });
/**
 * Returns true if the given argument is a promise.
 * @global
 * @example
 * ```javascript
 * bbn.fn.isPromise(bbn.fn.post('myUrl'));
 * // true
 * bbn.fn.isPromise(setTimeout(() => {}))
 * // false
 * bbn.fn.isPromise(myVueObject.$nextTick());
 * // true
 * ```
 * @method   isFunction
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
var isPromise = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if ({}.toString.apply(a) !== "[object Promise]") {
            return false;
        }
    }
    return true;
};



/***/ }),

/***/ "./dist/fn/type/isPropSize.js":
/*!************************************!*\
  !*** ./dist/fn/type/isPropSize.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isPropSize: () => (/* binding */ isPropSize)
/* harmony export */ });
/* harmony import */ var _loop_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loop/each.js */ "./dist/fn/loop/each.js");

var isPropSize = function (name) {
    var isTrue = false;
    (0,_loop_each_js__WEBPACK_IMPORTED_MODULE_0__.each)(['width', 'height', 'gap', 'margin', 'padding', 'top', 'left', 'right', 'bottom'], function (a) {
        if (name.indexOf(a) !== -1) {
            isTrue = true;
            return false;
        }
    });
    return isTrue;
};



/***/ }),

/***/ "./dist/fn/type/isSQLDate.js":
/*!***********************************!*\
  !*** ./dist/fn/type/isSQLDate.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSQLDate: () => (/* binding */ isSQLDate)
/* harmony export */ });
/**
 * @ignore
 * @method   isSQLDate
 * @todo     Add method description for isSQLDate
 * @global
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
var isSQLDate = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if (typeof a !== "string" ||
            !a.match(/^([1-2]\d{3})-((0\d)|(1[12]))-(([0-2]\d)|(3[01]))(?:( [0-2]\d):([0-5]\d):([0-5]\d))?$/)) {
            return false;
        }
    }
    return true;
};



/***/ }),

/***/ "./dist/fn/type/isSame.js":
/*!********************************!*\
  !*** ./dist/fn/type/isSame.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSame: () => (/* binding */ isSame)
/* harmony export */ });
/* harmony import */ var _string_hash_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../string/hash.js */ "./dist/fn/string/hash.js");
/* harmony import */ var _loop_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loop/each.js */ "./dist/fn/loop/each.js");
/* harmony import */ var _misc_analyzeFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../misc/analyzeFunction.js */ "./dist/fn/misc/analyzeFunction.js");



/**
  * Checks whether the data contained in the given objects is identical.
  *
  * The properties starting with a non alphanumerical character and the
  * inherited ones are removed for the comparison, then the properties are
  * compared individually without the order being taken into account.
  *
  * @method   isSame
  * @global
  * @example
  * ```javascript
  * bbn.fn.isSame(
  *   {name: "Wonka", fname: "Willy"},
  *   {fname: "Willy", name: "Wonka"}
  * );
  * // true
  * ```
  * @example
  * ```javascript
  * // Doesn't take into account properties starting with non-alphanumeric characters
  * bbn.fn.isSame(
  *   {name: "Wonka", fname: "Willy", _bbn_timestamp: 1587269593987},
  *   {fname: "Willy", name: "Wonka"}
  * );
  * // true
  * ```
  * @example
  * ```javascript
  * bbn.fn.isSame(
  *   {name: "Wonka", fname: "Willy", real: false},
  *   {fname: "Willy", name: "Wonka"}
  * );
  * // false
  * ```
  * @memberof bbn.fn
  * @param    {Object} obj1
  * @param    {Object} obj2
  * @returns  {Boolean}
  */
var isSame = function (obj1, obj2, done) {
    if (!done) {
        done = [];
    }
    if (obj1 === obj2) {
        return true;
    }
    if (obj1 && obj2 && typeof obj1 === 'object' && typeof obj2 === 'object') {
        var tmp1 = Object.keys(obj1).sort(), tmp2 = Object.keys(obj2).sort();
        // Case where the keys are different
        if ((0,_string_hash_js__WEBPACK_IMPORTED_MODULE_0__.hash)(tmp1) !== (0,_string_hash_js__WEBPACK_IMPORTED_MODULE_0__.hash)(tmp2)) {
            return false;
        }
        var ok_1 = true;
        if (obj1 && typeof obj1 === 'object') {
            if (done.includes(obj1)) {
                return ok_1;
            }
            done.push(obj1);
        }
        (0,_loop_each_js__WEBPACK_IMPORTED_MODULE_1__.each)(tmp1, function (a) {
            if (!isSame(obj1[a], obj2[a])) {
                ok_1 = false;
                return false;
            }
        });
        return ok_1;
    }
    else if (obj1 && obj2 && typeof obj1 === 'function' && typeof obj2 === 'function') {
        var tmp1 = (0,_misc_analyzeFunction_js__WEBPACK_IMPORTED_MODULE_2__.analyzeFunction)(obj1);
        var tmp2 = (0,_misc_analyzeFunction_js__WEBPACK_IMPORTED_MODULE_2__.analyzeFunction)(obj2);
        return tmp1.hash === tmp2.hash;
    }
    return false;
};



/***/ }),

/***/ "./dist/fn/type/isString.js":
/*!**********************************!*\
  !*** ./dist/fn/type/isString.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isString: () => (/* binding */ isString)
/* harmony export */ });
/**
 * Returns true if the given argument is a string;
 * @method   isString
 * @global
 * @example
 * ```javascript
 * bbn.fn.isString('bbn');
 * //true
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
var isString = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if ({}.toString.apply(a) !== "[object String]") {
            return false;
        }
    }
    return true;
};



/***/ }),

/***/ "./dist/fn/type/isSymbol.js":
/*!**********************************!*\
  !*** ./dist/fn/type/isSymbol.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSymbol: () => (/* binding */ isSymbol)
/* harmony export */ });
/**
 * Returns true if the given argument is a symbol;
 * @method   isSymbol
 * @global
 * @example
 * ```javascript
 * const sb = Symbol();
 * bbn.fn.isSymbol(sb);
 * //true
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
var isSymbol = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if ({}.toString.apply(a) !== "[object Symbol]") {
            return false;
        }
    }
    return true;
};



/***/ }),

/***/ "./dist/fn/type/isURL.js":
/*!*******************************!*\
  !*** ./dist/fn/type/isURL.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isURL: () => (/* binding */ isURL)
/* harmony export */ });
var isURL = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var str = args_1[_a];
        if (!bbn.var.regexp.url.test(str)) {
            return false;
        }
    }
    return true;
};



/***/ }),

/***/ "./dist/fn/type/isValidDimension.js":
/*!******************************************!*\
  !*** ./dist/fn/type/isValidDimension.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidDimension: () => (/* binding */ isValidDimension)
/* harmony export */ });
/* harmony import */ var _isNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNumber.js */ "./dist/fn/type/isNumber.js");
/* harmony import */ var _string_substr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../string/substr.js */ "./dist/fn/string/substr.js");


/**
 * Returns true if the given value is a valid CSS dimension string, false otherwise.
 *
 * @method   isValidDimension
 * @global
 * @memberof bbn.fn
 * @param    {String} st
 * @returns
 */
var isValidDimension = function (st) {
    if (typeof st === "string" &&
        st.length > 0 &&
        (st.indexOf("calc") === 0 || (0,_isNumber_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)((0,_string_substr_js__WEBPACK_IMPORTED_MODULE_1__.substr)(st, 0, 1)))) {
        var el = document.createElement("div");
        el.style.width = st;
        var res = !!el.style.width.length;
        el.remove();
        return res;
    }
    return false;
};



/***/ }),

/***/ "./dist/fn/type/isValidName.js":
/*!*************************************!*\
  !*** ./dist/fn/type/isValidName.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidName: () => (/* binding */ isValidName)
/* harmony export */ });
/* harmony import */ var _isString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isString.js */ "./dist/fn/type/isString.js");

/**
 * Returns true if the given value is a valid name for a function without checking in reserved words, false otherwise
 * @method   isValidName
 * @global
 * @example
 * ```javascript
 * bbn.fn.isValidName('$myFunc_tion')
 * // true
 * ```
 * @example
 * ```javascript
 * bbn.fn.isValidName('7Y')
 * // false
 * ```
 *
 * @example
 * ```javascript
 * bbn.fn.isValidName('function')
 * // true
 * ```
 *
 * @memberof bbn.fn
 * @param    {String} st
 * @returns {Boolean}
 */
var isValidName = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length) {
        return false;
    }
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        if (!(0,_isString_js__WEBPACK_IMPORTED_MODULE_0__.isString)(arg) || !/^[$A-Z_][0-9A-Z_$]*$/i.test(arg)) {
            return false;
        }
    }
    return true;
};



/***/ }),

/***/ "./dist/fn/type/isValue.js":
/*!*********************************!*\
  !*** ./dist/fn/type/isValue.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValue: () => (/* binding */ isValue)
/* harmony export */ });
/* harmony import */ var _isNull_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNull.js */ "./dist/fn/type/isNull.js");

/**
 * Returns true if the given argument is not null or type object or array.
 * @method   isValue
 * @deprecated
 * @see bbn.fn.isPrimitive
 * @example
 * ```javascript
 * bbn.fn.isValue('myString');
 * //true
 * ```
 * @example
 * ```javascript
 * bbn.fn.isValue(6);
 * //true
 * ```
 * @example
 * ```javascript
 * bbn.fn.isValue([80,10,22]);
 * //false
 * ```
 * @global
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
var isValue = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if (typeof a === "object" && !(0,_isNull_js__WEBPACK_IMPORTED_MODULE_0__.isNull)(a)) {
            return false;
        }
    }
    return true;
};



/***/ }),

/***/ "./dist/fn/type/isVue.js":
/*!*******************************!*\
  !*** ./dist/fn/type/isVue.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isVue: () => (/* binding */ isVue)
/* harmony export */ });
/**
 * Returns true if the given argumen is a VueJS object.
 *
 * @method   isVue
 * @global
 * @example
 * ```javascript
 * let myObj =  new Vue({});
 * bbn.fn.isVue(myObj);
 * //true
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
var isVue = function () {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length) {
        return false;
    }
    if ("vue" in bbn && window["Vue"]) {
        if ("app" in bbn.vue) {
            for (var _b = 0, args_1 = args; _b < args_1.length; _b++) {
                var a = args_1[_b];
                if (!a || typeof a.render !== "function") {
                    return false;
                }
            }
        }
        else {
            for (var _c = 0, args_2 = args; _c < args_2.length; _c++) {
                var a = args_2[_c];
                if (!(a instanceof window["Vue"])) {
                    return false;
                }
            }
        }
    }
    if ("cp" in bbn &&
        "isComponent" in bbn["cp"] &&
        typeof bbn["cp"].isComponent === "function") {
        return (_a = bbn.cp).isComponent.apply(_a, args);
    }
    return true;
};



/***/ }),

/***/ "./dist/lng.js":
/*!*********************!*\
  !*** ./dist/lng.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lng: () => (/* binding */ lng)
/* harmony export */ });
var lng = {
    /* User-defined languages elements */
    select_unselect_all: "Select/Clear all",
    select_all: "Select all",
    search: 'Search',
    loading: 'Loading...',
    choose: 'Choose',
    error: 'Error',
    server_response: 'Server response',
    reload: 'Reload',
    errorText: 'Something went wrong',
    closeAll: "Close all",
    closeOthers: "Close others",
    pin: "Pin",
    arrange: "Arrange",
    cancel: "Cancel",
    unpin: "Unpin",
    yes: "Yes",
    no: "No",
    unknown: "Unknown",
    untitled: "Untitled",
    confirmation: "Confirmation",
    Today: "Today",
    Tomorrow: "Tomorrow",
    Yesterday: "Yesterday"
};



/***/ }),

/***/ "./dist/vars.js":
/*!**********************!*\
  !*** ./dist/vars.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   vars: () => (/* binding */ vars)
/* harmony export */ });
var vars = {
    loggers: {
        _num: 0
    },
    /* Usable datatypes through Ajax function */
    datatypes: ['xml', 'html', 'script', 'json', 'jsonp', 'text', 'blob'],
    /* The default value used by the function shorten */
    shortenLen: 30,
    /* Categorizing keyboard map */
    keys: {
        upDown: [33, 34, 35, 36, 38, 40],
        leftRight: [36, 35, 37, 39],
        dels: [8, 46, 45],
        confirm: [13, 9],
        alt: [20, 16, 17, 18, 144],
        numbers: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105],
        numsigns: [109, 110, 189, 190]
    },
    comparators: [">=", "<=", ">", "<", "="],
    operators: ["+", "-", "/", "*"],
    tags: ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'slot', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr'],
    colors: {
        darkgrey: '#5a6a62',
        black: '#000000',
        anthracite: '#454545',
        grey: '#d3d3d3',
        white: '#ffffff',
        beige: '#fdfdfd',
        lightgrey: '#dcdcdc',
        pastelblue: '#ddebf6',
        cyan: '#00c8f8',
        blue: '#6e9ecf',
        indigo: '#3f51b5',
        navy: '#354458',
        webblue: '#2196f3',
        teal: '#009688',
        turquoise: '#1fda9a',
        pastelgreen: '#e2efda',
        palegreen: '#ccffcc',
        green: '#00a03e',
        olive: '#92b06a',
        pastelorange: '#fff2cc',
        yellow: '#fdf200',
        orange: '#ff9900',
        pink: '#eb65a0',
        purple: '#a333c8',
        red: '#db3340',
        brown: '#8c6954'
    },
    reserved: ['abstract', 'boolean', 'break', 'byte', 'case', 'catch', 'char', 'class', 'continue', 'const', 'debugger', 'default', 'delete', 'do', 'double', 'else', 'enum', 'export', 'extends', 'false', 'final', 'finally', 'float', 'for', 'function', 'goto', 'if', 'implements', 'import', 'in', 'instanceof', 'int', 'interface', 'long', /*'native', */ 'new', 'null', 'package', /*'private', 'protected', 'public', */ 'return', /*'short', 'static',*/ 'super', 'switch', 'synchronized', 'this', 'throw', 'throws', 'transient', 'true', 'try', 'typeof', 'var', 'void', 'while', 'with'],
    mockText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    regexp: {
        url: new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'),
        ip: /^((\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/,
        hostname: /^[a-z\d]([a-z\d-]{0,61}[a-z\d])?(\.[a-z\d]([a-z\d-]{0,61}[a-z\d])?)*$/i,
    }
};



/***/ }),

/***/ "./node_modules/axios/lib/adapters/adapters.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/adapters/adapters.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _http_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.js */ "./node_modules/axios/lib/helpers/null.js");
/* harmony import */ var _xhr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xhr.js */ "./node_modules/axios/lib/adapters/xhr.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");





const knownAdapters = {
  http: _http_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  xhr: _xhr_js__WEBPACK_IMPORTED_MODULE_1__["default"]
}

_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});

const renderReason = (reason) => `- ${reason}`;

const isResolvedHandle = (adapter) => _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isFunction(adapter) || adapter === null || adapter === false;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getAdapter: (adapters) => {
    adapters = _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isArray(adapters) ? adapters : [adapters];

    const {length} = adapters;
    let nameOrAdapter;
    let adapter;

    const rejectedReasons = {};

    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;

      adapter = nameOrAdapter;

      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];

        if (adapter === undefined) {
          throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"](`Unknown adapter '${id}'`);
        }
      }

      if (adapter) {
        break;
      }

      rejectedReasons[id || '#' + i] = adapter;
    }

    if (!adapter) {

      const reasons = Object.entries(rejectedReasons)
        .map(([id, state]) => `adapter ${id} ` +
          (state === false ? 'is not supported by the environment' : 'is not available in the build')
        );

      let s = length ?
        (reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0])) :
        'as no adapter specified';

      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"](
        `There is no suitable adapter to dispatch the request ` + s,
        'ERR_NOT_SUPPORT'
      );
    }

    return adapter;
  },
  adapters: knownAdapters
});


/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_settle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../core/settle.js */ "./node_modules/axios/lib/core/settle.js");
/* harmony import */ var _helpers_cookies_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../helpers/cookies.js */ "./node_modules/axios/lib/helpers/cookies.js");
/* harmony import */ var _helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../helpers/buildURL.js */ "./node_modules/axios/lib/helpers/buildURL.js");
/* harmony import */ var _core_buildFullPath_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/buildFullPath.js */ "./node_modules/axios/lib/core/buildFullPath.js");
/* harmony import */ var _helpers_isURLSameOrigin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../helpers/isURLSameOrigin.js */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
/* harmony import */ var _defaults_transitional_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../defaults/transitional.js */ "./node_modules/axios/lib/defaults/transitional.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _helpers_parseProtocol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helpers/parseProtocol.js */ "./node_modules/axios/lib/helpers/parseProtocol.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _helpers_speedometer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/speedometer.js */ "./node_modules/axios/lib/helpers/speedometer.js");
















function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = (0,_helpers_speedometer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(50, 250);

  return e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e
    };

    data[isDownloadStream ? 'download' : 'upload'] = true;

    listener(data);
  };
}

const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config.data;
    const requestHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(config.headers).normalize();
    const responseType = config.responseType;
    let onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    let contentType;

    if (_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isFormData(requestData)) {
      if (_platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].isStandardBrowserEnv || _platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].isStandardBrowserWebWorkerEnv) {
        requestHeaders.setContentType(false); // Let the browser set it
      } else if(!requestHeaders.getContentType(/^\s*multipart\/form-data/)){
        requestHeaders.setContentType('multipart/form-data'); // mobile/desktop app frameworks
      } else if(_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isString(contentType = requestHeaders.getContentType())){
        // fix semicolon duplication issue for ReactNative FormData implementation
        requestHeaders.setContentType(contentType.replace(/^\s*(multipart\/form-data);+/, '$1'))
      }
    }

    let request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      const username = config.auth.username || '';
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
    }

    const fullPath = (0,_core_buildFullPath_js__WEBPACK_IMPORTED_MODULE_4__["default"])(config.baseURL, config.url);

    request.open(config.method.toUpperCase(), (0,_helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_5__["default"])(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };

      (0,_core_settle_js__WEBPACK_IMPORTED_MODULE_6__["default"])(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"]('Request aborted', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"]('Network Error', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = config.transitional || _defaults_transitional_js__WEBPACK_IMPORTED_MODULE_8__["default"];
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"](
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ETIMEDOUT : _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (_platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].isStandardBrowserEnv) {
      // Add xsrf header
      const xsrfValue = (config.withCredentials || (0,_helpers_isURLSameOrigin_js__WEBPACK_IMPORTED_MODULE_9__["default"])(fullPath))
        && config.xsrfCookieName && _helpers_cookies_js__WEBPACK_IMPORTED_MODULE_10__["default"].read(config.xsrfCookieName);

      if (xsrfValue) {
        requestHeaders.set(config.xsrfHeaderName, xsrfValue);
      }
    }

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_11__["default"](null, config, request) : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = (0,_helpers_parseProtocol_js__WEBPACK_IMPORTED_MODULE_12__["default"])(fullPath);

    if (protocol && _platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].protocols.indexOf(protocol) === -1) {
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"]('Unsupported protocol ' + protocol + ':', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData || null);
  });
});


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/bind.js */ "./node_modules/axios/lib/helpers/bind.js");
/* harmony import */ var _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Axios.js */ "./node_modules/axios/lib/core/Axios.js");
/* harmony import */ var _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/mergeConfig.js */ "./node_modules/axios/lib/core/mergeConfig.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpers/formDataToJSON.js */ "./node_modules/axios/lib/helpers/formDataToJSON.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _cancel_CancelToken_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancel/CancelToken.js */ "./node_modules/axios/lib/cancel/CancelToken.js");
/* harmony import */ var _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cancel/isCancel.js */ "./node_modules/axios/lib/cancel/isCancel.js");
/* harmony import */ var _env_data_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./env/data.js */ "./node_modules/axios/lib/env/data.js");
/* harmony import */ var _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _helpers_spread_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/spread.js */ "./node_modules/axios/lib/helpers/spread.js");
/* harmony import */ var _helpers_isAxiosError_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers/isAxiosError.js */ "./node_modules/axios/lib/helpers/isAxiosError.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./adapters/adapters.js */ "./node_modules/axios/lib/adapters/adapters.js");
/* harmony import */ var _helpers_HttpStatusCode_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helpers/HttpStatusCode.js */ "./node_modules/axios/lib/helpers/HttpStatusCode.js");




















/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"](defaultConfig);
  const instance = (0,_helpers_bind_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.request, context);

  // Copy axios.prototype to instance
  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].extend(instance, _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype, context, {allOwnKeys: true});

  // Copy context to instance
  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance((0,_core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"])(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(_defaults_index_js__WEBPACK_IMPORTED_MODULE_4__["default"]);

// Expose Axios class to allow class inheritance
axios.Axios = _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"];

// Expose Cancel & CancelToken
axios.CanceledError = _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_5__["default"];
axios.CancelToken = _cancel_CancelToken_js__WEBPACK_IMPORTED_MODULE_6__["default"];
axios.isCancel = _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_7__["default"];
axios.VERSION = _env_data_js__WEBPACK_IMPORTED_MODULE_8__.VERSION;
axios.toFormData = _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_9__["default"];

// Expose AxiosError class
axios.AxiosError = _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_10__["default"];

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = _helpers_spread_js__WEBPACK_IMPORTED_MODULE_11__["default"];

// Expose isAxiosError
axios.isAxiosError = _helpers_isAxiosError_js__WEBPACK_IMPORTED_MODULE_12__["default"];

// Expose mergeConfig
axios.mergeConfig = _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"];

axios.AxiosHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_13__["default"];

axios.formToJSON = thing => (0,_helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isHTMLForm(thing) ? new FormData(thing) : thing);

axios.getAdapter = _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_15__["default"].getAdapter;

axios.HttpStatusCode = _helpers_HttpStatusCode_js__WEBPACK_IMPORTED_MODULE_16__["default"];

axios.default = axios;

// this module should only have a default export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios);


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CanceledError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");




/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new _CanceledError_js__WEBPACK_IMPORTED_MODULE_0__["default"](message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CancelToken);


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CanceledError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CanceledError.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");





/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, message == null ? 'canceled' : message, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].inherits(CanceledError, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
  __CANCEL__: true
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanceledError);


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isCancel)
/* harmony export */ });


function isCancel(value) {
  return !!(value && value.__CANCEL__);
}


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/buildURL.js */ "./node_modules/axios/lib/helpers/buildURL.js");
/* harmony import */ var _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InterceptorManager.js */ "./node_modules/axios/lib/core/InterceptorManager.js");
/* harmony import */ var _dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dispatchRequest.js */ "./node_modules/axios/lib/core/dispatchRequest.js");
/* harmony import */ var _mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mergeConfig.js */ "./node_modules/axios/lib/core/mergeConfig.js");
/* harmony import */ var _buildFullPath_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buildFullPath.js */ "./node_modules/axios/lib/core/buildFullPath.js");
/* harmony import */ var _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/validator.js */ "./node_modules/axios/lib/helpers/validator.js");
/* harmony import */ var _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");











const validators = _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__["default"](),
      response: new _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__["default"]()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = (0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.defaults, config);

    const {transitional, paramsSerializer, headers} = config;

    if (transitional !== undefined) {
      _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }

    if (paramsSerializer != null) {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        }
      } else {
        _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    // Flatten headers
    let contextHeaders = headers && _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].merge(
      headers.common,
      headers[config.method]
    );

    headers && _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );

    config.headers = _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_4__["default"].concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [_dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__["default"].bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = _dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__["default"].call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = (0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.defaults, config);
    const fullPath = (0,_buildFullPath_js__WEBPACK_IMPORTED_MODULE_6__["default"])(config.baseURL, config.url);
    return (0,_helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_7__["default"])(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request((0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request((0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Axios);


/***/ }),

/***/ "./node_modules/axios/lib/core/AxiosError.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/core/AxiosError.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");




/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}

_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});

const prototype = AxiosError.prototype;
const descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype);

  _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosError);


/***/ }),

/***/ "./node_modules/axios/lib/core/AxiosHeaders.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/AxiosHeaders.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_parseHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/parseHeaders.js */ "./node_modules/axios/lib/helpers/parseHeaders.js");





const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) ? value.map(normalizeValue) : String(value);
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (isHeaderNameFilter) {
    value = header;
  }

  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(value)) return;

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(self, lHeader);

      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite)
    } else if(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders((0,_helpers_parseHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"])(header), valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(this, header);

      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;

    while (i--) {
      const key = keys[i];
      if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }

    return deleted;
  }

  normalize(format) {
    const self = this;
    const headers = {};

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this, (value, header) => {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
    });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
}

AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

// reserved names hotfix
_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].reduceDescriptors(AxiosHeaders.prototype, ({value}, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  }
});

_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].freezeMethods(AxiosHeaders);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosHeaders);


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");




class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InterceptorManager);


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFullPath)
/* harmony export */ });
/* harmony import */ var _helpers_isAbsoluteURL_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/isAbsoluteURL.js */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
/* harmony import */ var _helpers_combineURLs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/combineURLs.js */ "./node_modules/axios/lib/helpers/combineURLs.js");





/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !(0,_helpers_isAbsoluteURL_js__WEBPACK_IMPORTED_MODULE_0__["default"])(requestedURL)) {
    return (0,_helpers_combineURLs_js__WEBPACK_IMPORTED_MODULE_1__["default"])(baseURL, requestedURL);
  }
  return requestedURL;
}


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dispatchRequest)
/* harmony export */ });
/* harmony import */ var _transformData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transformData.js */ "./node_modules/axios/lib/core/transformData.js");
/* harmony import */ var _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cancel/isCancel.js */ "./node_modules/axios/lib/cancel/isCancel.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adapters/adapters.js */ "./node_modules/axios/lib/adapters/adapters.js");









/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_0__["default"](null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(config.headers);

  // Transform request data
  config.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(
    config,
    config.transformRequest
  );

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_3__["default"].getAdapter(config.adapter || _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__["default"].adapter);

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(
      config,
      config.transformResponse,
      response
    );

    response.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!(0,_cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_5__["default"])(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergeConfig)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");





const headersToObject = (thing) => thing instanceof _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? thing.toJSON() : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source, caseless) {
    if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(target) && _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(source)) {
      return _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].merge.call({caseless}, target, source);
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(source)) {
      return _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].merge({}, source);
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, caseless) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(a)) {
      return getMergedValue(undefined, a, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };

  _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ settle)
/* harmony export */ });
/* harmony import */ var _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");




/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"](
      'Request failed with status code ' + response.status,
      [_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_BAD_REQUEST, _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ transformData)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");






/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || _defaults_index_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  const context = response || config;
  const headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(context.headers);
  let data = context.data;

  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}


/***/ }),

/***/ "./node_modules/axios/lib/defaults/index.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/defaults/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _transitional_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitional.js */ "./node_modules/axios/lib/defaults/transitional.js");
/* harmony import */ var _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/toURLEncodedForm.js */ "./node_modules/axios/lib/helpers/toURLEncodedForm.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");
/* harmony import */ var _helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/formDataToJSON.js */ "./node_modules/axios/lib/helpers/formDataToJSON.js");










/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {

  transitional: _transitional_js__WEBPACK_IMPORTED_MODULE_1__["default"],

  adapter: ['xhr', 'http'],

  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(data);

    if (isObjectPayload && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFormData(data);

    if (isFormData) {
      if (!hasJSONContentType) {
        return data;
      }
      return hasJSONContentType ? JSON.stringify((0,_helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data)) : data;
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBuffer(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBuffer(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isStream(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFile(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBlob(data)
    ) {
      return data;
    }
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBufferView(data)) {
      return data.buffer;
    }
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return (0,_helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data, this.formSerializer).toString();
      }

      if ((isFileList = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return (0,_helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';

    if (data && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__["default"].from(e, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__["default"].ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: _platform_index_js__WEBPACK_IMPORTED_MODULE_6__["default"].classes.FormData,
    Blob: _platform_index_js__WEBPACK_IMPORTED_MODULE_6__["default"].classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': undefined
    }
  }
};

_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (method) => {
  defaults.headers[method] = {};
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaults);


/***/ }),

/***/ "./node_modules/axios/lib/defaults/transitional.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/defaults/transitional.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
});


/***/ }),

/***/ "./node_modules/axios/lib/env/data.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/env/data.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VERSION: () => (/* binding */ VERSION)
/* harmony export */ });
const VERSION = "1.5.1";

/***/ }),

/***/ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js":
/*!****************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/AxiosURLSearchParams.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toFormData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");




/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && (0,_toFormData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params, this, options);
}

const prototype = AxiosURLSearchParams.prototype;

prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosURLSearchParams);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/HttpStatusCode.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/HttpStatusCode.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};

Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HttpStatusCode);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ bind)
/* harmony export */ });


function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildURL)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/AxiosURLSearchParams.js */ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js");





/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  
  const _encode = options && options.encode || encode;

  const serializeFn = options && options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isURLSearchParams(params) ?
      params.toString() :
      new _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_1__["default"](params, options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ combineURLs)
/* harmony export */ });


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].isStandardBrowserEnv ?

// Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        const cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(path)) {
          cookie.push('path=' + path);
        }

        if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

// Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })());


/***/ }),

/***/ "./node_modules/axios/lib/helpers/formDataToJSON.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/formDataToJSON.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");




/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(target) ? target.length : name;

    if (isLast) {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFormData(formData) && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(formData.entries)) {
    const obj = {};

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formDataToJSON);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAbsoluteURL)
/* harmony export */ });


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAxiosError)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");




/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(payload) && (payload.isAxiosError === true);
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].isStandardBrowserEnv ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement('a');
    let originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      let href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
          urlParsingNode.pathname :
          '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      const parsed = (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
          parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })());


/***/ }),

/***/ "./node_modules/axios/lib/helpers/null.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/null.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// eslint-disable-next-line strict
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");




// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();

    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return;
    }

    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
});


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseProtocol.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseProtocol.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseProtocol)
/* harmony export */ });


function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/speedometer.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/speedometer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (speedometer);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ spread)
/* harmony export */ });


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/toFormData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/toFormData.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _platform_node_classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform/node/classes/FormData.js */ "./node_modules/axios/lib/helpers/null.js");




// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored


/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(thing) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(arr) && !arr.some(isVisitable);
}

const predicates = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"], {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (_platform_node_classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__["default"] || FormData)();

  // eslint-disable-next-line no-param-reassign
  options = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(source[option]);
  });

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isSpecCompliantForm(formData);

  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isDate(value)) {
      return value.toISOString();
    }

    if (!useBlob && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBlob(value)) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"]('Blob is not supported. Use a Buffer instead.');
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBuffer(value) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (value && !path && typeof value === 'object') {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) && isFlatArray(value)) ||
        ((_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFileList(value) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '[]')) && (arr = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const stack = [];

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });

  function build(value, path) {
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(value, function each(el, key) {
      const result = !(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(el) || el === null) && visitor.call(
        formData, el, _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(key) ? key.trim() : key, path, exposedHelpers
      );

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toFormData);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/toURLEncodedForm.js":
/*!************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/toURLEncodedForm.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toURLEncodedForm)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _toFormData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");






function toURLEncodedForm(data, options) {
  return (0,_toFormData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, new _platform_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (_platform_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].isNode && _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/validator.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/validator.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _env_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env/data.js */ "./node_modules/axios/lib/env/data.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");





const validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + _env_data_js__WEBPACK_IMPORTED_MODULE_0__.VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"](
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('options must be an object', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('option ' + opt + ' must be ' + result, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Unknown option ' + opt, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION);
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  assertOptions,
  validators
});


/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/classes/Blob.js":
/*!*****************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/Blob.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof Blob !== 'undefined' ? Blob : null);


/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/classes/FormData.js":
/*!*********************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/FormData.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof FormData !== 'undefined' ? FormData : null);


/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js":
/*!****************************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/AxiosURLSearchParams.js */ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof URLSearchParams !== 'undefined' ? URLSearchParams : _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes_URLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/URLSearchParams.js */ "./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js");
/* harmony import */ var _classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/FormData.js */ "./node_modules/axios/lib/platform/browser/classes/FormData.js");
/* harmony import */ var _classes_Blob_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Blob.js */ "./node_modules/axios/lib/platform/browser/classes/Blob.js");




/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const isStandardBrowserEnv = (() => {
  let product;
  if (typeof navigator !== 'undefined' && (
    (product = navigator.product) === 'ReactNative' ||
    product === 'NativeScript' ||
    product === 'NS')
  ) {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined';
})();

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
 const isStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  isBrowser: true,
  classes: {
    URLSearchParams: _classes_URLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    FormData: _classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    Blob: _classes_Blob_js__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  isStandardBrowserEnv,
  isStandardBrowserWebWorkerEnv,
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
});


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/bind.js */ "./node_modules/axios/lib/helpers/bind.js");




// utils is a library of generic helper functions non-specific to axios

const {toString} = Object.prototype;
const {getPrototypeOf} = Object;

const kindOf = (cache => thing => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
}

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
}

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject(val) && isFunction(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = (thing) => {
  let kind;
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) || (
      isFunction(thing.append) && (
        (kind = kindOf(thing)) === 'formdata' ||
        // detect form-data instance
        (kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]')
      )
    )
  )
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : global)
})();

const isContextDefined = (context) => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  const {caseless} = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  }

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = (0,_helpers_bind_js__WEBPACK_IMPORTED_MODULE_0__["default"])(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
}

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
}

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}


/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
}

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];

  const iterator = generator.call(obj);

  let result;

  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
}

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
}

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};

/* Creating a function that will check if an object has a property. */
const hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
}

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];

    if (!isFunction(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
}

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  }

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
}

const noop = () => {}

const toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
}

const ALPHA = 'abcdefghijklmnopqrstuvwxyz'

const DIGIT = '0123456789';

const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
}

const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {length} = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length|0]
  }

  return str;
}

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}

const toJSONObject = (obj) => {
  const stack = new Array(10);

  const visit = (source, i) => {

    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }

      if(!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};

        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });

        stack[i] = undefined;

        return target;
      }
    }

    return source;
  }

  return visit(obj, 0);
}

const isAsyncFn = kindOfTest('AsyncFunction');

const isThenable = (thing) =>
  thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   axios: () => (/* reexport safe */ axios__WEBPACK_IMPORTED_MODULE_23__["default"]),
/* harmony export */   bbn: () => (/* binding */ bbn),
/* harmony export */   dayjs: () => (/* reexport default export from named module */ dayjs__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "default": () => (/* binding */ bbn)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs_plugin_calendar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/calendar.js */ "./node_modules/dayjs/plugin/calendar.js");
/* harmony import */ var dayjs_plugin_dayOfYear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/dayOfYear.js */ "./node_modules/dayjs/plugin/dayOfYear.js");
/* harmony import */ var dayjs_plugin_duration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs/plugin/duration.js */ "./node_modules/dayjs/plugin/duration.js");
/* harmony import */ var dayjs_plugin_isBetween_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs/plugin/isBetween.js */ "./node_modules/dayjs/plugin/isBetween.js");
/* harmony import */ var dayjs_plugin_isLeapYear_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs/plugin/isLeapYear.js */ "./node_modules/dayjs/plugin/isLeapYear.js");
/* harmony import */ var dayjs_plugin_isoWeek_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs/plugin/isoWeek.js */ "./node_modules/dayjs/plugin/isoWeek.js");
/* harmony import */ var dayjs_plugin_localeData_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dayjs/plugin/localeData.js */ "./node_modules/dayjs/plugin/localeData.js");
/* harmony import */ var dayjs_plugin_localizedFormat_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dayjs/plugin/localizedFormat.js */ "./node_modules/dayjs/plugin/localizedFormat.js");
/* harmony import */ var dayjs_plugin_minMax_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dayjs/plugin/minMax.js */ "./node_modules/dayjs/plugin/minMax.js");
/* harmony import */ var dayjs_plugin_quarterOfYear_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dayjs/plugin/quarterOfYear.js */ "./node_modules/dayjs/plugin/quarterOfYear.js");
/* harmony import */ var dayjs_plugin_relativeTime_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! dayjs/plugin/relativeTime.js */ "./node_modules/dayjs/plugin/relativeTime.js");
/* harmony import */ var dayjs_plugin_timezone_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! dayjs/plugin/timezone.js */ "./node_modules/dayjs/plugin/timezone.js");
/* harmony import */ var dayjs_plugin_updateLocale_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! dayjs/plugin/updateLocale.js */ "./node_modules/dayjs/plugin/updateLocale.js");
/* harmony import */ var dayjs_plugin_utc_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! dayjs/plugin/utc.js */ "./node_modules/dayjs/plugin/utc.js");
/* harmony import */ var dayjs_plugin_weekOfYear_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! dayjs/plugin/weekOfYear.js */ "./node_modules/dayjs/plugin/weekOfYear.js");
/* harmony import */ var _js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_.js */ "./dist/_.js");
/* harmony import */ var _$_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./$.js */ "./dist/$.js");
/* harmony import */ var _lng_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lng.js */ "./dist/lng.js");
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./vars.js */ "./dist/vars.js");
/* harmony import */ var _env_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./env.js */ "./dist/env.js");
/* harmony import */ var _db_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./db.js */ "./dist/db.js");
/* harmony import */ var _fn_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./fn.js */ "./dist/fn.js");

















dayjs__WEBPACK_IMPORTED_MODULE_0__.extend(dayjs_plugin_calendar_js__WEBPACK_IMPORTED_MODULE_1__);
dayjs__WEBPACK_IMPORTED_MODULE_0__.extend(dayjs_plugin_dayOfYear_js__WEBPACK_IMPORTED_MODULE_2__);
dayjs__WEBPACK_IMPORTED_MODULE_0__.extend(dayjs_plugin_duration_js__WEBPACK_IMPORTED_MODULE_3__);
dayjs__WEBPACK_IMPORTED_MODULE_0__.extend(dayjs_plugin_isBetween_js__WEBPACK_IMPORTED_MODULE_4__);
dayjs__WEBPACK_IMPORTED_MODULE_0__.extend(dayjs_plugin_isLeapYear_js__WEBPACK_IMPORTED_MODULE_5__);
dayjs__WEBPACK_IMPORTED_MODULE_0__.extend(dayjs_plugin_isoWeek_js__WEBPACK_IMPORTED_MODULE_6__);
dayjs__WEBPACK_IMPORTED_MODULE_0__.extend(dayjs_plugin_localeData_js__WEBPACK_IMPORTED_MODULE_7__);
dayjs__WEBPACK_IMPORTED_MODULE_0__.extend(dayjs_plugin_localizedFormat_js__WEBPACK_IMPORTED_MODULE_8__);
dayjs__WEBPACK_IMPORTED_MODULE_0__.extend(dayjs_plugin_minMax_js__WEBPACK_IMPORTED_MODULE_9__);
dayjs__WEBPACK_IMPORTED_MODULE_0__.extend(dayjs_plugin_quarterOfYear_js__WEBPACK_IMPORTED_MODULE_10__);
dayjs__WEBPACK_IMPORTED_MODULE_0__.extend(dayjs_plugin_relativeTime_js__WEBPACK_IMPORTED_MODULE_11__);
dayjs__WEBPACK_IMPORTED_MODULE_0__.extend(dayjs_plugin_timezone_js__WEBPACK_IMPORTED_MODULE_12__);
dayjs__WEBPACK_IMPORTED_MODULE_0__.extend(dayjs_plugin_updateLocale_js__WEBPACK_IMPORTED_MODULE_13__);
dayjs__WEBPACK_IMPORTED_MODULE_0__.extend(dayjs_plugin_utc_js__WEBPACK_IMPORTED_MODULE_14__);
dayjs__WEBPACK_IMPORTED_MODULE_0__.extend(dayjs_plugin_weekOfYear_js__WEBPACK_IMPORTED_MODULE_15__);







var bbn = {
    version: "1.0.1",
    opt: {
        _cat: {}
    },
    app: {},
    _: _js__WEBPACK_IMPORTED_MODULE_16__._,
    $: _$_js__WEBPACK_IMPORTED_MODULE_17__.$,
    lng: _lng_js__WEBPACK_IMPORTED_MODULE_18__.lng,
    var: _vars_js__WEBPACK_IMPORTED_MODULE_19__.vars,
    env: _env_js__WEBPACK_IMPORTED_MODULE_20__.env,
    db: _db_js__WEBPACK_IMPORTED_MODULE_21__.db,
    fn: _fn_js__WEBPACK_IMPORTED_MODULE_22__.fn
};
if ('undefined' !== typeof window) {
    window.axios = axios__WEBPACK_IMPORTED_MODULE_23__["default"];
    window.dayjs = dayjs__WEBPACK_IMPORTED_MODULE_0__;
    window.bbn = bbn;
}


})();

((self.bbn = self.bbn || {}).axios = self.bbn.axios || {}).dayjs = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=bbn.js.map