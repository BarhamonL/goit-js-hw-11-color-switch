(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(t,e,o){"use strict";var r,n=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],a={start:document.querySelector('[data-action="start"]'),stop:document.querySelector('[data-action="stop"]'),body:document.querySelector("body")},d=function(t){return t[(e=0,o=t.length-1,Math.floor(Math.random()*(o-e+1)+e))];var e,o};a.start.addEventListener("click",(function(){r=setInterval((function(){a.body.style.backgroundColor=d(n)}),1e3),a.stop.removeAttribute("disabled"),a.start.setAttribute("disabled","true")})),a.stop.addEventListener("click",(function(){clearInterval(r),a.stop.setAttribute("disabled","true"),a.start.removeAttribute("disabled"),a.body.style.backgroundColor="#FFFFFF"}))}},[["QfWi",1]]]);
//# sourceMappingURL=main.f8ce4b33133d67ba3453.js.map