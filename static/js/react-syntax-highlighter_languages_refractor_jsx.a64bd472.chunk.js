"use strict";(self.webpackChunkwbj_blog=self.webpackChunkwbj_blog||[]).push([[4657],{765:function(t){function e(t){!function(t){var e=t.util.clone(t.languages.javascript),n=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,s=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function g(t,e){return t=t.replace(/<S>/g,(function(){return n})).replace(/<BRACES>/g,(function(){return a})).replace(/<SPREAD>/g,(function(){return s})),RegExp(t,e)}s=g(s).source,t.languages.jsx=t.languages.extend("markup",e),t.languages.jsx.tag.pattern=g(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=e.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:g(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:g(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);var o=function t(e){return e?"string"===typeof e?e:"string"===typeof e.content?e.content:e.content.map(t).join(""):""},c=function e(n){for(var a=[],s=0;s<n.length;s++){var g=n[s],c=!1;if("string"!==typeof g&&("tag"===g.type&&g.content[0]&&"tag"===g.content[0].type?"</"===g.content[0].content[0].content?a.length>0&&a[a.length-1].tagName===o(g.content[0].content[1])&&a.pop():"/>"===g.content[g.content.length-1].content||a.push({tagName:o(g.content[0].content[1]),openedBraces:0}):a.length>0&&"punctuation"===g.type&&"{"===g.content?a[a.length-1].openedBraces++:a.length>0&&a[a.length-1].openedBraces>0&&"punctuation"===g.type&&"}"===g.content?a[a.length-1].openedBraces--:c=!0),(c||"string"===typeof g)&&a.length>0&&0===a[a.length-1].openedBraces){var r=o(g);s<n.length-1&&("string"===typeof n[s+1]||"plain-text"===n[s+1].type)&&(r+=o(n[s+1]),n.splice(s+1,1)),s>0&&("string"===typeof n[s-1]||"plain-text"===n[s-1].type)&&(r=o(n[s-1])+r,n.splice(s-1,1),s--),n[s]=new t.Token("plain-text",r,null,r)}g.content&&"string"!==typeof g.content&&e(g.content)}};t.hooks.add("after-tokenize",(function(t){"jsx"!==t.language&&"tsx"!==t.language||c(t.tokens)}))}(t)}t.exports=e,e.displayName="jsx",e.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_jsx.a64bd472.chunk.js.map