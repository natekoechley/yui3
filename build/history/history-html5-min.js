YUI.add("history-html5",function(F){var B=F.HistoryBase,E=F.config.doc,D=F.config.win,G="popstate",C=B.SRC_REPLACE;function A(){A.superclass.constructor.apply(this,arguments);}F.extend(A,B,{_init:function(){F.on("popstate",this._onPopState,D,this);A.superclass._init.apply(this,arguments);},_storeState:function(J,I,H){if(J!==G){D.history[J===C?"replaceState":"pushState"](I,H.title||E.title||"",H.url||null);}A.superclass._storeState.apply(this,arguments);},_onPopState:function(H){this._resolveChanges(G,H._event.state||{});}},{NAME:"historyhtml5",SRC_POPSTATE:G});if(!F.Node.DOM_EVENTS.popstate){F.Node.DOM_EVENTS.popstate=1;}F.HistoryHTML5=A;if(!F.History&&B.html5){F.History=A;}},"@VERSION@",{requires:["event-base","history-base","node-base"]});