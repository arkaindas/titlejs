/**********************
titleJs v1.0 | (c) 2014 | Plugin Uri:http://github.com/arkaindas/titlejs | Author: Arkaprava Majumder | Author Uri: http://arkapravamajumder.com 
**********************/
var Title = {
   vars: {
   	sourceTitle: document.title,
   	counter: 0
   },
   typeWriter: function(){
	document.title=this.vars.sourceTitle.substring(0,this.vars.counter);
	if(this.vars.counter==this.vars.sourceTitle.length)
	{
		this.vars.counter=0;
		setTimeout("Title.typeWriter()",200);
	} else {
		this.vars.counter++;
		setTimeout("Title.typeWriter()",400);
	}
   },
   marquee: function(){
   	document.title = this.vars.sourceTitle.substring(this.vars.counter, this.vars.sourceTitle.length)+" "+this.vars.sourceTitle.substring(0,this.vars.counter);
	this.vars.counter++;
	    if (this.vars.counter > this.vars.sourceTitle.length)
	    {
		this.vars.counter = 0;
	    }
	setTimeout("Title.marquee()", 200);
   },
   pref: function(param){
   	if(param.trim()!=""){
	   this.vars.sourceTitle=document.title=param+" "+this.vars.sourceTitle;
	}
   },
   suf: function(param){
  	if(param.trim()!=""){
	   this.vars.sourceTitle=document.title=this.vars.sourceTitle+" "+param;
	}
	   
   },
   change: function(param){
   	if(param.trim()!=""){
	   	this.vars.sourceTitle=document.title=param;
	}
   },
   animation: function(param){
   	switch(param) {
	   	case "typeWriter":
	   	this.typeWriter();
	   	break;
	   	case "marquee":
	   	this.marquee();
   	}
   }

};
