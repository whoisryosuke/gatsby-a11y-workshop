(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{678:function(e,t,n){"use strict";n.r(t);n(13);var a=n(1),i=n(0),s=n(684),c=n(156);n(685),n(699);var o=function(e){var t,n;function i(t){var n;return(n=e.call(this,t)||this).state={isActive:!1},n}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=i.prototype;return s.handleHover=function(){this.setState({isActive:!this.state.isActive})},s.render=function(){var e=this.state.isActive?"active":"";return Object(a.d)("div",{className:"card-flip-mouse-demo"},Object(a.d)("div",{className:"team-member"},Object(a.d)("div",{className:"team-content"},Object(a.d)("div",{className:"team-image "+e,onMouseEnter:this.handleHover.bind(this),onMouseLeave:this.handleHover.bind(this)},Object(a.d)("img",{src:this.props.image,alt:""}),Object(a.d)("div",{className:"team-content-hover",style:{background:"#1c6300"}},Object(a.d)("div",{className:"gradient-overlay"}),Object(a.d)("h5",null,this.props.memberName),Object(a.d)("span",{className:"team-subtitle"},this.props.subtitle),Object(a.d)("p",null,this.props.bio),Object(a.d)("div",{className:"team-socials"},Object(a.d)("a",{href:this.props.twitterLink,target:" _blank",title:""},Object(a.d)("svg",{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 273.4 222.2",style:{enableBackground:"new 0 0 273.4 222.2"}},Object(a.d)("path",{style:{fill:"#fff"},d:"M273.4,26.3c-10.1,4.5-20.9,7.5-32.2,8.8c11.6-6.9,20.5-17.9,24.7-31C255,10.5,243,15.2,230.2,17.7C220,6.8,205.4,0,189.3,0 c-31,0-56.1,25.1-56.1,56.1c0,4.4,0.5,8.7,1.5,12.8C88,66.5,46.7,44.2,19,10.3c-4.8,8.3-7.6,17.9-7.6,28.2c0,19.5,9.9,36.6,25,46.7 c-9.2-0.3-17.8-2.8-25.4-7c0,0.2,0,0.5,0,0.7c0,27.2,19.3,49.8,45,55c-4.7,1.3-9.7,2-14.8,2c-3.6,0-7.1-0.4-10.6-1 c7.1,22.3,27.9,38.5,52.4,39c-19.2,15-43.4,24-69.7,24c-4.5,0-9-0.3-13.4-0.8c24.8,15.9,54.3,25.2,86,25.2 c103.2,0,159.6-85.5,159.6-159.6c0-2.4-0.1-4.9-0.2-7.3C256.4,47.4,265.9,37.5,273.4,26.3z"})))))),Object(a.d)("h5",null,this.props.memberName),Object(a.d)("span",{className:"team-subtitle"},this.props.subtitle))))},i}(i.Component);n(700);var d=function(e){var t=Object(i.useRef)(null),n=Object(i.useRef)(null),s=Object(i.useRef)(null),c=Object(i.useState)(!1),o=c[0],d=c[1],l=Object(i.useState)(0);l[0],l[1],Object(i.useEffect)(function(){window.addEventListener("transitionend",function(e){"opacity"===e.propertyName&&null!==n.current&&n.current.focus()})},[]);var r=o?"active":"",u=!!o&&Object(a.d)("div",null,Object(a.d)("div",null,Object(a.d)("div",{className:"gradient-overlay"}),Object(a.d)("button",{className:"team-close-button","aria-label":"Close "+e.memberName,onClick:function(){d(!1),t.current.focus()},ref:n},"X"),Object(a.d)("h5",{className:"team-name"},e.memberName),Object(a.d)("span",{className:"team-subtitle"},e.subtitle),Object(a.d)("p",null,e.bio),Object(a.d)("div",{className:"team-socials"},Object(a.d)("a",{href:e.twitterLink,target:" _blank",title:""},Object(a.d)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 404.98 404.98"},Object(a.d)("path",{d:"M340.73 115.23a112.014 112.014 0 0 1-32.21 8.83c11.58-6.94 20.47-17.93 24.66-31.03a112.12 112.12 0 0 1-35.62 13.61c-10.23-10.9-24.81-17.71-40.94-17.71-30.98 0-56.09 25.11-56.09 56.09 0 4.4.5 8.68 1.45 12.78-46.62-2.34-87.94-24.67-115.61-58.6-4.83 8.28-7.59 17.92-7.59 28.2 0 19.46 9.9 36.63 24.95 46.69a55.803 55.803 0 0 1-25.41-7.02v.71c0 27.18 19.33 49.85 44.99 55a56.259 56.259 0 0 1-14.78 1.97c-3.61 0-7.13-.35-10.55-1.01 7.14 22.28 27.85 38.5 52.4 38.95-19.2 15.04-43.38 24.01-69.66 24.01-4.53 0-8.99-.27-13.38-.78 24.82 15.91 54.3 25.2 85.98 25.2 103.17 0 159.58-85.47 159.58-159.59 0-2.43-.05-4.85-.16-7.26a113.994 113.994 0 0 0 27.99-29.04z",fill:"#fff"}))))));return Object(a.d)("div",{className:"team-member"},Object(a.d)("div",{className:"team-content "+r},Object(a.d)("button",{className:"toggle-button",onClick:function(e){d(!o)},ref:t},Object(a.d)("span",{className:"team-image"},Object(a.d)("img",{src:e.image,alt:""})),Object(a.d)("span",{className:"team-name"},e.memberName),Object(a.d)("span",{className:"team-subtitle"},e.subtitle)),Object(a.d)("div",{role:"dialog",className:"team-content-overlay",ref:s},u)))},l=n(209),r=n(701),u=n.n(r),m=n(702),b=n.n(m),v=[{name:"Rainier McCheddarton",headshot:u.a,subtitle:"Labradoodle, squeaker, cheese fan",bio:"Doggo ipsum very hand that feed shibe heckin good boys and girls fat boi much ruin diet you are doing me the shock wrinkler length boy, I am bekom fat lotsa pats dat tungg tho shooberino.",twitterLink:"http://twitter.com"},{name:"Bagley Fluffpants",headshot:b.a,subtitle:"Cheshire cat, supreme loaf",bio:"The door is opening! how exciting oh, it's you, meh drink water out of the faucet. Spend six hours per day washing, but still have a crusty butthole, so lies down or sit on human they not getting up ever, but lick human with sandpaper tongue.",twitterLink:"http://twitter.com"}];t.default=function(){return Object(a.d)(s.a,null,Object(a.d)(c.a,{title:"Reducing motion",keywords:["javascript","accessibility","react"]}),Object(a.d)("div",null,Object(a.d)("h2",null,"Reducing motion for accessibility"),Object(a.d)("p",null,"Let‘s build safe interfaces that delight."),Object(a.d)("section",{className:"two-col"},Object(a.d)("div",null,Object(a.d)("h3",null,"Inaccessible animation demo ",Object(a.d)("br",null),"[",Object(a.d)("a",{href:"https://github.com/marcysutton/gatsby-a11y-workshop/blob/master/src/components/bad/card-flip.js"},"source 1"),"]"),Object(a.d)(o,{member:v[0],memberName:v[0].name,image:v[0].headshot,subtitle:v[0].subtitle,bio:v[0].bio,twitterLink:v[0].twitterLink})),Object(a.d)("div",null,Object(a.d)("h3",null,"Animation demo 2: add styles ",Object(a.d)("br",null),"[",Object(a.d)("a",{href:"https://github.com/marcysutton/gatsby-a11y-workshop/blob/master/src/components/better/card-flip.js"},"source 2"),"]"),Object(a.d)(d,{member:v[1],memberName:v[1].name,image:v[1].headshot,subtitle:v[1].subtitle,bio:v[1].bio,twitterLink:v[1].twitterLink})),Object(a.d)(l.a,null))))}},682:function(e){e.exports={data:{site:{siteMetadata:{title:"Building Accessible Sites with Gatsby"}}}}},683:function(e,t,n){!function(){"use strict";function e(e){var t=!0,n=!1,a=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function s(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function c(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function o(e){t=!1}function d(){document.addEventListener("mousemove",l),document.addEventListener("mousedown",l),document.addEventListener("mouseup",l),document.addEventListener("pointermove",l),document.addEventListener("pointerdown",l),document.addEventListener("pointerup",l),document.addEventListener("touchmove",l),document.addEventListener("touchstart",l),document.addEventListener("touchend",l)}function l(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",l),document.removeEventListener("mousedown",l),document.removeEventListener("mouseup",l),document.removeEventListener("pointermove",l),document.removeEventListener("pointerdown",l),document.removeEventListener("pointerup",l),document.removeEventListener("touchmove",l),document.removeEventListener("touchstart",l),document.removeEventListener("touchend",l))}document.addEventListener("keydown",function(n){n.metaKey||n.altKey||n.ctrlKey||(s(e.activeElement)&&c(e.activeElement),t=!0)},!0),document.addEventListener("mousedown",o,!0),document.addEventListener("pointerdown",o,!0),document.addEventListener("touchstart",o,!0),document.addEventListener("visibilitychange",function(e){"hidden"==document.visibilityState&&(n&&(t=!0),d())},!0),d(),e.addEventListener("focus",function(e){var n,a,o;s(e.target)&&((t||(n=e.target,a=n.type,"INPUT"==(o=n.tagName)&&i[a]&&!n.readOnly||"TEXTAREA"==o&&!n.readOnly||n.isContentEditable))&&c(e.target))},!0),e.addEventListener("blur",function(e){var t;s(e.target)&&((e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(a),a=window.setTimeout(function(){n=!1,window.clearTimeout(a)},100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added"))))},!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&document.documentElement.classList.add("js-focus-visible")}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(n){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}()},684:function(e,t,n){"use strict";var a=n(1),i=n(682),s=(n(0),n(68)),c=function(e){var t=e.siteTitle;return Object(a.d)("header",{className:"globalHeader"},Object(a.d)("ul",{className:"skip-link"},Object(a.d)("li",null,Object(a.d)("a",{href:"#main"},"Skip to main"))),Object(a.d)("h1",null,Object(a.d)(s.Link,{to:"/"},t)))};c.defaultProps={siteTitle:""};var o=c,d=n(686),l=n.n(d),r=function(){return Object(a.d)("nav",{className:"nav "+l.a.nav},Object(a.d)("h2",{className:"visually-hidden"},"Navigation"),Object(a.d)("ul",{id:"navigation",tabIndex:"-1"},Object(a.d)("li",null,Object(a.d)(s.Link,{to:"/"},"App Home")),Object(a.d)("li",null,Object(a.d)(s.Link,{to:"/slides"},"Slide deck")),Object(a.d)("li",{className:"navItemGroup "+l.a.navItemGroup+" "},Object(a.d)("h3",{className:"navHeading "+l.a.navHeading},"Demos"),Object(a.d)("ul",{id:"page-navigation"},Object(a.d)("li",null,Object(a.d)(s.Link,{to:"/dropdown"},"Dropdown")),Object(a.d)("li",null,Object(a.d)(s.Link,{to:"/announcer"},"Announcer")),Object(a.d)("li",null,Object(a.d)(s.Link,{to:"/layout"},"Layout")),Object(a.d)("li",null,Object(a.d)(s.Link,{to:"/animation"},"Animation")),Object(a.d)("li",null,Object(a.d)(s.Link,{to:"/enhanced-tablist"},"Enhanced Tablist")))),Object(a.d)("li",{className:"navItemGroup "+l.a.navItemGroup+" "},Object(a.d)("h3",{className:"navHeading "+l.a.navHeading},"Concepts"),Object(a.d)("ul",null,Object(a.d)("li",null,"Focus management"),Object(a.d)("li",null,"Announcements"),Object(a.d)("li",null,"Semantic HTML"),Object(a.d)("li",null,"Unobtrusive motion"),Object(a.d)("li",null,"Progressive enhancement")))))};n(687),n(683),t.a=function(e){var t=e.children,n=i.data;return Object(a.d)("div",{className:"js-workshop-app"},Object(a.d)(o,{siteTitle:n.site.siteMetadata.title}),Object(a.d)(r,null),Object(a.d)("main",{className:"app",id:"main"},t))}},685:function(e,t,n){"use strict";var a=n(1),i=n(0),s=n.n(i);t.a=function(e){e.children;return Object(a.d)(s.a.Fragment,null)}},701:function(e,t,n){e.exports=n.p+"static/rainier-headshot-047e8eb47de7f1364471861d488ce5d3.jpg"},702:function(e,t,n){e.exports=n.p+"static/bagley-daea38ceb3082df7cce4f394f6b70d53.jpg"}}]);
//# sourceMappingURL=component---src-pages-animation-jsx-4b6c746df05baf59c932.js.map