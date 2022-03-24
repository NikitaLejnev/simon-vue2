(function(){"use strict";var e={525:function(e,t,n){var i=n(144),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{attrs:{id:"app"}},[n("page-header",[e._v("Simon Game")]),n("game-field")],1)},o=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h1",{staticClass:"heading"},[e._t("default",(function(){return[e._v(e._s(e.headerText))]}))],2)])},s=[],a={name:"PageHeader"},u=a,c=n(1),f=(0,c.Z)(u,l,s,!1,null,null,null),d=f.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"game-field"}},[n("tile-container",{attrs:{tiles:e.tiles,isUnclickable:e.areTilesUnclickable},on:{"tile-click":e.handleTileClick}}),n("info-section",{attrs:{gameStatus:this.gameStarted},on:{"game-start":this.startGame,"select-difficulty":function(t){e.newTileDelay=t}}},[e._v(e._s(this.infoText))])],1)},h=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"info-section"}},[n("start-button",{class:{hidden:e.isGameOn},on:{"game-start":function(t){return e.$emit("game-start")}}}),n("difficulty-selector",{class:{hidden:e.isGameOn},on:{"select-difficulty":function(t){return e.$emit("select-difficulty",t)}}}),n("info-display",{attrs:{gameOn:e.isGameOn}},[e._t("default",(function(){return[e._v(e._s(e.infoText))]}))],2)],1)},v=[],y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"difficulty-selector"}},e._l(e.difficultyLevels,(function(t){return n("button",{key:t.id,on:{click:function(n){return e.$emit("select-difficulty",t.delay)}}},[e._v(" "+e._s(t.name)+" ")])})),0)},g=[],T={name:"DifficultySelector",data(){return{difficultyLevels:[{name:"Easy",id:"easy",delay:1500},{name:"Medium",id:"medium",delay:1e3},{name:"Hard",id:"hard",delay:400}]}}},_=T,b=(0,c.Z)(_,y,g,!1,null,null,null),w=b.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"info",class:{hidden:!e.gameOn}},[e._t("default",(function(){return[e._v(e._s(e.infoText))]}))],2)},x=[],k={name:"InfoDisplay",props:["gameOn"]},O=k,$=(0,c.Z)(O,S,x,!1,null,null,null),q=$.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{attrs:{id:"start-button"},on:{click:function(t){return e.$emit("game-start")}}},[e._v("Start")])},E=[],Z={name:"StartButton"},G=Z,A=(0,c.Z)(G,C,E,!1,null,null,null),D=A.exports,R={name:"InfoSection",components:{"difficulty-selector":w,"start-button":D,"info-display":q},props:["gameStatus"],computed:{isGameOn:{get:function(){return this.gameStatus}}}},j=R,P=(0,c.Z)(j,p,v,!1,null,null,null),B=P.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{unclickable:e.isUnclickable},attrs:{id:"tile-container"}},e._l(e.tiles,(function(t){return n("color-tile",e._b({key:t.color,on:{"tile-click":function(t){return e.$emit("tile-click",t)}}},"color-tile",t,!1))})),1)},W=[],z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tile",class:{activated:e.isActivated},attrs:{id:e.color},on:{click:function(t){return e.$emit("tile-click",e.color)}}})},M=[],H={name:"ColorTile",props:["color","active"],computed:{isActivated:{get:function(){return this.active}}}},I=H,L=(0,c.Z)(I,z,M,!1,null,null,null),F=L.exports,J={name:"TileContainer",components:{"color-tile":F},props:["tiles","isUnclickable"]},K=J,N=(0,c.Z)(K,U,W,!1,null,null,null),Q=N.exports,V={name:"App",components:{"tile-container":Q,"info-section":B},data(){return{tiles:[{color:"red",active:!1,sound:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3")},{color:"green",active:!1,sound:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3")},{color:"blue",active:!1,sound:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3")},{color:"yellow",active:!1,sound:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")}],gameStarted:!1,sequence:[],playerSequence:[],playerTurn:!1,roundWon:!1,level:0,newTileDelay:1500}},computed:{areTilesUnclickable:{get:function(){return!this.playerTurn}},infoText:{get:function(){return this.roundWon?"Correct! Onto the next level.":this.playerTurn?`Pick ${this.remainingTaps} tile${this.remainingTaps>1?"s":""}`:"Observe ..."}},remainingTaps:function(){return this.sequence.length-this.playerSequence.length}},methods:{startGame:function(){this.gameStarted=!0,this.nextRound()},nextRound:function(){this.level+=1,this.playerTurn=!1;const e=this.nextTile();this.sequence.push(e),this.playRound()},nextTile:function(){const e=Math.floor(Math.random()*this.tiles.length);return this.tiles[e]},activateTile:function(e){e.active=!0,e.sound.play(),setTimeout((()=>{e.active=!1}),300)},playRound:function(){this.displaySequence(),this.waitBeforePlayerTurn()},displaySequence:function(){this.sequence.forEach(((e,t)=>{setTimeout((()=>{this.activateTile(e)}),(t+1)*this.newTileDelay)}))},waitBeforePlayerTurn:function(){const e=500;setTimeout((()=>{this.playerTurn=!0}),this.level*this.newTileDelay+e)},handleTileClick:function(e){const t=this.findTileByColor(e);t.sound.play(),this.playerSequence.push(t),this.determineTurnOutcome()},determineTurnOutcome:function(){const e=this.playerSequence.length-1;return this.sequence[e]!==this.playerSequence[e]?this.resetGame("Wrong tile. Game over."):this.playerSequence.length===this.sequence.length?this.winRound():void 0},winRound:function(){this.roundWon=!0,this.playerSequence=[],setTimeout((()=>{this.roundWon=!1,this.nextRound()}),this.newTileDelay)},findTileByColor:function(e){return this.tiles.find((t=>t.color===e))},resetGame:function(e){alert(e),this.gameStarted=!1,this.playerTurn=!1,this.sequence=[],this.playerSequence=[],this.level=0}}},X=V,Y=(0,c.Z)(X,m,h,!1,null,null,null),ee=Y.exports,te={name:"App",components:{"page-header":d,"game-field":ee}},ne=te,ie=(0,c.Z)(ne,r,o,!1,null,null,null),re=ie.exports;i.Z.config.productionTip=!1,i.Z.config.devtools=!0,new i.Z({render:function(e){return e(re)}}).$mount("#app")}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,i,r,o){if(!i){var l=1/0;for(c=0;c<e.length;c++){i=e[c][0],r=e[c][1],o=e[c][2];for(var s=!0,a=0;a<i.length;a++)(!1&o||l>=o)&&Object.keys(n.O).every((function(e){return n.O[e](i[a])}))?i.splice(a--,1):(s=!1,o<l&&(l=o));if(s){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[i,r,o]}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,o,l=i[0],s=i[1],a=i[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(a)var c=a(n)}for(t&&t(i);u<l.length;u++)o=l[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},i=self["webpackChunksimon_vue2"]=self["webpackChunksimon_vue2"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(525)}));i=n.O(i)})();
//# sourceMappingURL=app.756bcd37.js.map