!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i(require("three")):"function"==typeof define&&define.amd?define(["three"],i):((t=t||self).THREE=t.THREE||{},t.THREE.TextTexture=i(t.THREE))}(this,function(t){"use strict";function i(){return document.createElement("canvas")}function e(t){return void 0===t}function n(t,e){if(t.length){var n=i().getContext("2d");return n.font=e,t.map(function(t){return n.measureText(t).width}).reduce(function(t,i){return Math.max(t,i)})}return 0}return function(s){function h(e){void 0===e&&(e={});var n=e.anisotropy,h=e.autoRedraw;void 0===h&&(h=!0);var o=e.fillStyle;void 0===o&&(o="#fff");var r=e.fontFamily;void 0===r&&(r="sans-serif");var l=e.fontSize;void 0===l&&(l=16);var f=e.fontStyle;void 0===f&&(f="normal");var a=e.fontVariant;void 0===a&&(a="normal");var g=e.fontWeight;void 0===g&&(g="normal");var d=e.format,u=e.lineWidth;void 0===u&&(u=0);var x=e.magFilter;void 0===x&&(x=t.LinearFilter);var c=e.mapping,_=e.minFilter;void 0===_&&(_=t.LinearFilter);var I=e.padding;void 0===I&&(I=.25);var v=e.strokeStyle;void 0===v&&(v="#000");var y=e.text;void 0===y&&(y="");var p=e.textAlign;void 0===p&&(p="center");var W=e.textLineHeight;void 0===W&&(W=1.15);var S=e.type,m=e.wrapS,P=e.wrapT;s.call(this,i(),c,m,P,x,_,d,S,n),this.autoRedraw=h,this._text=y,this._textAlign=p,this._textLineHeight=W,this._fontFamily=r,this._fontSize=l,this._fontWeight=g,this._fontVariant=a,this._fontStyle=f,this._fillStyle=o,this._lineWidth=u,this._strokeStyle=v,this._padding=I,this.redraw()}s&&(h.__proto__=s),h.prototype=Object.create(s&&s.prototype),h.prototype.constructor=h;var o={text:{configurable:!0},textAlign:{configurable:!0},textLines:{configurable:!0},textLineHeight:{configurable:!0},textLineHeightInPixels:{configurable:!0},fontFamily:{configurable:!0},fontSize:{configurable:!0},fontWeight:{configurable:!0},fontVariant:{configurable:!0},fontStyle:{configurable:!0},font:{configurable:!0},fillStyle:{configurable:!0},lineWidth:{configurable:!0},lineWidthInPixels:{configurable:!0},strokeStyle:{configurable:!0},textWidthInPixels:{configurable:!0},textHeight:{configurable:!0},textHeightInPixels:{configurable:!0},padding:{configurable:!0},paddingInPixels:{configurable:!0},imageWidthInPixels:{configurable:!0},imageHeight:{configurable:!0},imageHeightInPixels:{configurable:!0},imageAspect:{configurable:!0}};return h.prototype.redraw=function(){var t=this,i=this.image.getContext("2d");if(i.clearRect(0,0,i.canvas.width,i.canvas.height),this.textWidthInPixels&&this.textHeightInPixels){var e;switch(i.canvas.width=this.imageWidthInPixels,i.canvas.height=this.imageHeightInPixels,i.font=this.font,i.textBaseline="middle",this.textAlign){case"left":i.textAlign="left",e=this.paddingInPixels+this.lineWidthInPixels/2;break;case"right":i.textAlign="right",e=this.paddingInPixels+this.lineWidthInPixels/2+this.textWidthInPixels;break;case"center":i.textAlign="center",e=this.paddingInPixels+this.lineWidthInPixels/4+this.textWidthInPixels/2}var n=this.paddingInPixels+this.lineWidthInPixels/2+this.fontSize/2;i.fillStyle=this.fillStyle,i.miterLimit=1,i.lineWidth=this.lineWidthInPixels,i.strokeStyle=this.strokeStyle,this.textLines.forEach(function(s){t.lineWidth&&i.strokeText(s,e,n),i.fillText(s,e,n),n+=t.textLineHeightInPixels})}else i.canvas.width=i.canvas.height=1;this.needsUpdate=!0},h.prototype._redrawIfAuto=function(){this.autoRedraw&&this.redraw()},o.text.get=function(){return this._text},o.text.set=function(t){this._text!==t&&(this._text=t,this._textLines=void 0,this._textWidthInPixels=void 0,this._redrawIfAuto())},o.textAlign.get=function(){return this._textAlign},o.textAlign.set=function(t){this._textAlign!==t&&(this._textAlign=t,this._redrawIfAuto())},o.textLines.get=function(){var t;return e(this._textLines)&&(this._textLines=(t=this.text)?t.split("\n"):[]),this._textLines},o.textLineHeight.get=function(){return this._textLineHeight},o.textLineHeight.set=function(t){this._textLineHeight!==t&&(this._textLineHeight=t,this._redrawIfAuto())},o.textLineHeightInPixels.get=function(){return this.fontSize*this.textLineHeight},o.fontFamily.get=function(){return this._fontFamily},o.fontFamily.set=function(t){this._fontFamily!==t&&(this._fontFamily=t,this._textWidthInPixels=void 0,this._redrawIfAuto())},o.fontSize.get=function(){return this._fontSize},o.fontSize.set=function(t){this._fontSize!==t&&(this._fontSize=t,this._textWidthInPixels=void 0,this._redrawIfAuto())},o.fontWeight.get=function(){return this._fontWeight},o.fontWeight.set=function(t){this._fontWeight!==t&&(this._fontWeight=t,this._textWidthInPixels=void 0,this._redrawIfAuto())},o.fontVariant.get=function(){return this._fontVariant},o.fontVariant.set=function(t){this._fontVariant!==t&&(this._fontVariant=t,this._textWidthInPixels=void 0,this._redrawIfAuto())},o.fontStyle.get=function(){return this._fontStyle},o.fontStyle.set=function(t){this._fontStyle!==t&&(this._fontStyle=t,this._textWidthInPixels=void 0,this._redrawIfAuto())},o.font.get=function(){return t=this.fontStyle,i=this.fontVariant,e=this.fontWeight,n=this.fontSize,s=this.fontFamily,[t,i,e,n+"px",s].join(" ");var t,i,e,n,s},o.fillStyle.get=function(){return this._fillStyle},o.fillStyle.set=function(t){this._fillStyle!==t&&(this._fillStyle=t,this._redrawIfAuto())},o.lineWidth.get=function(){return this._lineWidth},o.lineWidth.set=function(t){this._lineWidth!==t&&(this._lineWidth=t,this._redrawIfAuto())},o.lineWidthInPixels.get=function(){return this._lineWidth*this.fontSize},o.strokeStyle.get=function(){return this._strokeStyle},o.strokeStyle.set=function(t){this._strokeStyle!==t&&(this._strokeStyle=t,this._redrawIfAuto())},o.textWidthInPixels.get=function(){return e(this._textWidthInPixels)&&(this._textWidthInPixels=n(this.textLines,this.font)),this._textWidthInPixels},o.textHeight.get=function(){return this.textLineHeight*(this.textLines.length-1)+1},o.textHeightInPixels.get=function(){return this.textHeight*this.fontSize},o.padding.get=function(){return this._padding},o.padding.set=function(t){this._padding!==t&&(this._padding=t,this._redrawIfAuto())},o.paddingInPixels.get=function(){return this.padding*this.fontSize},o.imageWidthInPixels.get=function(){return this.textWidthInPixels+this.lineWidthInPixels+2*this.paddingInPixels},o.imageHeight.get=function(){return this.textHeight+this.lineWidth+2*this.padding},o.imageHeightInPixels.get=function(){return this.imageHeight*this.fontSize},o.imageAspect.get=function(){return this.image.width&&this.image.height?this.image.width/this.image.height:1},Object.defineProperties(h.prototype,o),h}(t.Texture)});
