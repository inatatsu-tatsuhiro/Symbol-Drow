(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[14],{1700:function(t,a,n){"use strict";var r=n(5),e=n(1),i=n(0),o=(n(23),n(6)),c=n(110),p=n(105),h=n(12),s=n(17),l=n(13),u=n(85),j=n(106);function d(t){return Object(u.a)("MuiTypography",t)}Object(j.a)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var v=n(2),b=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],g=Object(h.a)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(t,a){var n=t.ownerState;return[a.root,n.variant&&a[n.variant],"inherit"!==n.align&&a["align".concat(Object(l.a)(n.align))],n.noWrap&&a.noWrap,n.gutterBottom&&a.gutterBottom,n.paragraph&&a.paragraph]}})((function(t){var a=t.theme,n=t.ownerState;return Object(e.a)({margin:0},n.variant&&a.typography[n.variant],"inherit"!==n.align&&{textAlign:n.align},n.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n.gutterBottom&&{marginBottom:"0.35em"},n.paragraph&&{marginBottom:16})})),m={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},x={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},O=i.forwardRef((function(t,a){var n=Object(s.a)({props:t,name:"MuiTypography"}),i=function(t){return x[t]||t}(n.color),h=Object(c.a)(Object(e.a)({},n,{color:i})),u=h.align,j=void 0===u?"inherit":u,O=h.className,f=h.component,y=h.gutterBottom,w=void 0!==y&&y,W=h.noWrap,C=void 0!==W&&W,R=h.paragraph,B=void 0!==R&&R,T=h.variant,M=void 0===T?"body1":T,N=h.variantMapping,S=void 0===N?m:N,k=Object(r.a)(h,b),z=Object(e.a)({},h,{align:j,color:i,className:O,component:f,gutterBottom:w,noWrap:C,paragraph:B,variant:M,variantMapping:S}),A=f||(B?"p":S[M]||m[M])||"span",H=function(t){var a=t.align,n=t.gutterBottom,r=t.noWrap,e=t.paragraph,i=t.variant,o=t.classes,c={root:["root",i,"inherit"!==t.align&&"align".concat(Object(l.a)(a)),n&&"gutterBottom",r&&"noWrap",e&&"paragraph"]};return Object(p.a)(c,d,o)}(z);return Object(v.jsx)(g,Object(e.a)({as:A,ref:a,ownerState:z,className:Object(o.a)(H.root,O)},k))}));a.a=O},1736:function(t,a,n){"use strict";n.r(a);var r,e=n(0),i=n(4),o=n(14),c=n(1700),p=n(112),h=n(18),s=n(46),l=n(349),u=n(353),j=n(27),d=n(54),v=n(2),b=function(t){var a=t.inputRef,n=t.openCanvasWithHash,r=t.openCanvas,e=Object(d.a)().getI18nText;return Object(v.jsxs)(u.a,{direction:"column",holizontal:"start",children:[Object(v.jsxs)(j.a,{margin:"8px",children:[Object(v.jsx)(c.a,{variant:"h4",component:"div",children:"Art Chain"}),Object(v.jsx)(c.a,{variant:"body1",component:"div",children:e("description_artchaining")})]}),Object(v.jsx)(l.a,{text:"TransactionHash",inputRef:a}),Object(v.jsx)(j.a,{margin:"4px 16px",children:Object(v.jsxs)(g,{children:[Object(v.jsx)(p.a,{sx:{flexGrow:1}}),Object(v.jsx)(j.a,{margin:"0px 8px",children:Object(v.jsx)(s.a,{text:"Re Chain With TRANSACTION Hash",onClick:n})}),Object(v.jsx)(j.a,{margin:"0px 8px",children:Object(v.jsx)(s.a,{text:"Create Chain",onClick:r})})]})}),Object(v.jsxs)(j.a,{margin:"8px",children:[Object(v.jsx)(c.a,{variant:"h4",component:"div",children:"?????"}),Object(v.jsx)(c.a,{variant:"body1",component:"div",children:"Coming soon ....."})]}),Object(v.jsx)(j.a,{margin:"4px 16px"})]})},g=Object(h.a)("div")(r||(r=Object(o.a)(["\n  display: flex;\n"])));a.default=function(){var t=Object(i.f)(),a=Object(e.useRef)(null);return Object(v.jsx)(b,{inputRef:a,openCanvasWithHash:function(){null!==a.current&&t("/canvas/".concat(a.current.value))},openCanvas:function(){t("/canvas")}})}},349:function(t,a,n){"use strict";var r=n(287),e=n(490),i=n(1730),o=n(1738),c=n(1734),p=(n(0),n(2)),h=["inputRef","text"];a.a=function(t){var a=t.inputRef,n=t.text,s=Object(e.a)(t,h);return Object(p.jsxs)(o.a,{fullWidth:!0,children:[Object(p.jsx)(c.a,{htmlFor:"outlined-adornment-password",children:n}),Object(p.jsx)(i.a,Object(r.a)(Object(r.a)({},s),{},{fullWidth:!0,label:n,inputRef:a}))]})}},353:function(t,a,n){"use strict";var r,e=n(14),i=(n(0),n(18)),o=n(2);a.a=function(t){var a=t.direction,n=void 0===a?"row":a,r=t.nowrap,e=void 0!==r&&r,i=t.vertical,p=void 0===i?"center":i,h=t.holizontal,s=void 0===h?"center":h,l=t.width,u=void 0===l?"100%":l,j=t.height,d=void 0===j?"100%":j,v=t.items,b=void 0===v?"normal":v,g=t.children;return Object(o.jsx)(c,{direction:n,holizontal:s,vertical:p,width:u,height:d,items:b,wrap:e?"nowrap":"wrap",children:g})};var c=Object(i.a)("div")(r||(r=Object(e.a)(["\n  display: flex;\n  width: ",";\n  height: ",";\n  flex-direction: ",";\n  ",";\n  justify-content: ",";\n  align-content: ",";\n  align-items: ",";\n"])),(function(t){return t.width}),(function(t){return t.height}),(function(t){return t.direction}),(function(t){return t.wrap&&"flex-wrap: wrap"}),(function(t){return t.holizontal}),(function(t){return t.vertical}),(function(t){return t.items}))}}]);
//# sourceMappingURL=14.e1e41177.chunk.js.map