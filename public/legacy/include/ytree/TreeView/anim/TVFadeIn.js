/* Copyright (c) 2006 Yahoo! Inc. All rights reserved. */YAHOO.widget.TVFadeIn=function(el,callback){this.el=el;this.callback=callback;this.logger=new ygLogger("TVFadeIn");};YAHOO.widget.TVFadeIn.prototype={animate:function(){var tvanim=this;var s=this.el.style;s.opacity=0.1;s.filter="alpha(opacity=10)";s.display="";var dur=0.4;var a=new YAHOO.util.Anim(this.el,{opacity:{from:0.1,to:1,unit:""}},dur);a.onComplete.subscribe(function(){tvanim.onComplete();});a.animate();},onComplete:function(){this.callback();}};