parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./..\\images\\hero\\hero-mobile1.png":[["hero-mobile1.73e038c7.png","Z0ST"],"Z0ST"],"./..\\images\\hero\\hero-mobile1@2x.png":[["hero-mobile1@2x.b0117319.png","aWHQ"],"aWHQ"],"./..\\images\\hero\\hero-mobile2.png":[["hero-mobile2.0aaee4fc.png","jrcZ"],"jrcZ"],"./..\\images\\hero\\hero-mobile2@2x.png":[["hero-mobile2@2x.0423c6e8.png","v2Lt"],"v2Lt"],"./..\\images\\hero\\hero-tablet.png":[["hero-tablet.fc6c11b5.png","nLKQ"],"nLKQ"],"./..\\images\\hero\\hero-tablet@2x.png":[["hero-tablet@2x.525fbc7b.png","T3F1"],"T3F1"],"./..\\images\\hero\\hero-desk1.png":[["hero-desk1.fbac290b.png","GW8L"],"GW8L"],"./..\\images\\hero\\hero-desk1@2x.png":[["hero-desk1@2x.e6bc8e90.png","hBCl"],"hBCl"],"./..\\images\\hero\\hero-desk2.png":[["hero-desk2.6c25e98d.png","TfgY"],"TfgY"],"./..\\images\\hero\\hero-desk2@2x.png":[["hero-desk2@2x.8eb2e7fb.png","RAcj"],"RAcj"],"./..\\images\\recruitment\\steps-flow-mob.png":[["steps-flow-mob.fe8204ff.png","agyU"],"agyU"],"./..\\images\\recruitment\\mob.png":[["mob.c660be89.png","cRxU"],"cRxU"],"./..\\images\\recruitment\\mob2.png":[["mob2.743b1370.png","TOSg"],"TOSg"],"./..\\images\\recruitment\\ellipse.png":[["ellipse.b6607a3f.png","LkyB"],"LkyB"],"./..\\images\\recruitment\\steps-flow-tab.png":[["steps-flow-tab.5544e1ef.png","x23h"],"x23h"],"./..\\images\\recruitment\\desc2.png":[["desc2.bc6391e3.png","KwPZ"],"KwPZ"],"./..\\images\\recruitment\\steps-flow-desc.png":[["steps-flow-desc.652d690e.png","hzXa"],"hzXa"]}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");const e={menuBtnRef:document.querySelector("[data-menu-button]"),mobileMenuRef:document.querySelector("[data-menu]")},n=()=>{e.mobileMenuRef.classList.toggle("is-open"),e.menuBtnRef.classList.toggle("is-open")};e.menuBtnRef.addEventListener("click",n),new Swiper(".swiper",{pagination:{el:".swiper-pagination",clickable:!0},slidesPerView:"auto",matchOverFlow:!0,spaceBetween:10});
},{"./sass/main.scss":"clu1"}]},{},["Focm"], null)
//# sourceMappingURL=/freySoft/src.cf336767.js.map