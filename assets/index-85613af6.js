import{R as h,r as d}from"./index-f1f749bf.js";import{_ as M}from"./extends-98964cd2.js";import{r as De}from"./index-96c5f47c.js";import{a as X,j as B}from"./jsx-runtime-670450c2.js";var S="colors",w="sizes",p="space",xe={gap:p,gridGap:p,columnGap:p,gridColumnGap:p,rowGap:p,gridRowGap:p,inset:p,insetBlock:p,insetBlockEnd:p,insetBlockStart:p,insetInline:p,insetInlineEnd:p,insetInlineStart:p,margin:p,marginTop:p,marginRight:p,marginBottom:p,marginLeft:p,marginBlock:p,marginBlockEnd:p,marginBlockStart:p,marginInline:p,marginInlineEnd:p,marginInlineStart:p,padding:p,paddingTop:p,paddingRight:p,paddingBottom:p,paddingLeft:p,paddingBlock:p,paddingBlockEnd:p,paddingBlockStart:p,paddingInline:p,paddingInlineEnd:p,paddingInlineStart:p,top:p,right:p,bottom:p,left:p,scrollMargin:p,scrollMarginTop:p,scrollMarginRight:p,scrollMarginBottom:p,scrollMarginLeft:p,scrollMarginX:p,scrollMarginY:p,scrollMarginBlock:p,scrollMarginBlockEnd:p,scrollMarginBlockStart:p,scrollMarginInline:p,scrollMarginInlineEnd:p,scrollMarginInlineStart:p,scrollPadding:p,scrollPaddingTop:p,scrollPaddingRight:p,scrollPaddingBottom:p,scrollPaddingLeft:p,scrollPaddingX:p,scrollPaddingY:p,scrollPaddingBlock:p,scrollPaddingBlockEnd:p,scrollPaddingBlockStart:p,scrollPaddingInline:p,scrollPaddingInlineEnd:p,scrollPaddingInlineStart:p,fontSize:"fontSizes",background:S,backgroundColor:S,backgroundImage:S,borderImage:S,border:S,borderBlock:S,borderBlockEnd:S,borderBlockStart:S,borderBottom:S,borderBottomColor:S,borderColor:S,borderInline:S,borderInlineEnd:S,borderInlineStart:S,borderLeft:S,borderLeftColor:S,borderRight:S,borderRightColor:S,borderTop:S,borderTopColor:S,caretColor:S,color:S,columnRuleColor:S,fill:S,outline:S,outlineColor:S,stroke:S,textDecorationColor:S,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:w,minBlockSize:w,maxBlockSize:w,inlineSize:w,minInlineSize:w,maxInlineSize:w,width:w,minWidth:w,maxWidth:w,height:w,minHeight:w,maxHeight:w,flexBasis:w,gridTemplateColumns:w,gridTemplateRows:w,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},He=(e,t)=>typeof t=="function"?{"()":Function.prototype.toString.call(t)}:t,U=()=>{const e=Object.create(null);return(t,r,...n)=>{const o=(i=>JSON.stringify(i,He))(t);return o in e?e[o]:e[o]=r(t,...n)}},N=Symbol.for("sxs.internal"),se=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),de=e=>{for(const t in e)return!0;return!1},{hasOwnProperty:Ue}=Object.prototype,ie=e=>e.includes("-")?e:e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()),Ve=/\s+(?![^()]*\))/,D=e=>t=>e(...typeof t=="string"?String(t).split(Ve):[t]),ue={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:D((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e})),marginInline:D((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e})),maxSize:D((e,t)=>({maxBlockSize:e,maxInlineSize:t||e})),minSize:D((e,t)=>({minBlockSize:e,minInlineSize:t||e})),paddingBlock:D((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e})),paddingInline:D((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e}))},oe=/([\d.]+)([^]*)/,Ge=(e,t)=>e.length?e.reduce((r,n)=>(r.push(...t.map(o=>o.includes("&")?o.replace(/&/g,/[ +>|~]/.test(n)&&/&.*&/.test(o)?`:is(${n})`:n):n+" "+o)),r),[]):t,Ye=(e,t)=>e in qe&&typeof t=="string"?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(r,n,o,i)=>n+(o==="stretch"?`-moz-available${i};${ie(e)}:${n}-webkit-fill-available`:`-moz-fit-content${i};${ie(e)}:${n}fit-content`)+i):String(t),qe={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},j=e=>e?e+"-":"",Se=(e,t,r)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(n,o,i,l,a)=>l=="$"==!!i?n:(o||l=="--"?"calc(":"")+"var(--"+(l==="$"?j(t)+(a.includes("$")?"":j(r))+a.replace(/\$/g,"-"):a)+")"+(o||l=="--"?"*"+(o||"")+(i||"1")+")":"")),Ze=/\s*,\s*(?![^()]*\))/,Ke=Object.prototype.toString,H=(e,t,r,n,o)=>{let i,l,a;const s=(u,g,f)=>{let c,m;const b=y=>{for(c in y){const v=c.charCodeAt(0)===64,E=v&&Array.isArray(y[c])?y[c]:[y[c]];for(m of E){const C=/[A-Z]/.test($=c)?$:$.replace(/-[^]/g,R=>R[1].toUpperCase()),V=typeof m=="object"&&m&&m.toString===Ke&&(!n.utils[C]||!g.length);if(C in n.utils&&!V){const R=n.utils[C];if(R!==l){l=R,b(R(m)),l=null;continue}}else if(C in ue){const R=ue[C];if(R!==a){a=R,b(R(m)),a=null;continue}}if(v&&(x=c.slice(1)in n.media?"@media "+n.media[c.slice(1)]:c,c=x.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(R,I,P,W,z,A)=>{const F=oe.test(I),Z=.0625*(F?-1:1),[K,ce]=F?[W,I]:[I,W];return"("+(P[0]==="="?"":P[0]===">"===F?"max-":"min-")+K+":"+(P[0]!=="="&&P.length===1?ce.replace(oe,(Fe,re,ne)=>Number(re)+Z*(P===">"?1:-1)+ne):ce)+(z?") and ("+(z[0]===">"?"min-":"max-")+K+":"+(z.length===1?A.replace(oe,(Fe,re,ne)=>Number(re)+Z*(z===">"?-1:1)+ne):A):"")+")"})),V){const R=v?f.concat(c):[...f],I=v?[...g]:Ge(g,c.split(Ze));i!==void 0&&o(fe(...i)),i=void 0,s(m,I,R)}else i===void 0&&(i=[[],g,f]),c=v||c.charCodeAt(0)!==36?c:`--${j(n.prefix)}${c.slice(1).replace(/\$/g,"-")}`,m=V?m:typeof m=="number"?m&&C in Je?String(m)+"px":String(m):Se(Ye(C,m??""),n.prefix,n.themeMap[C]),i[0].push(`${v?`${c} `:`${ie(c)}:`}${m}`)}}var x,$};b(u),i!==void 0&&o(fe(...i)),i=void 0};s(e,t,r)},fe=(e,t,r)=>`${r.map(n=>`${n}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(r.length?r.length+1:0).join("}")}`,Je={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},pe=e=>String.fromCharCode(e+(e>25?39:97)),L=e=>(t=>{let r,n="";for(r=Math.abs(t);r>52;r=r/52|0)n=pe(r%52)+n;return pe(r%52)+n})(((t,r)=>{let n=r.length;for(;n;)t=33*t^r.charCodeAt(--n);return t})(5381,JSON.stringify(e))>>>0),Y=["themed","global","styled","onevar","resonevar","allvar","inline"],Xe=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch{return!1}},Qe=e=>{let t;const r=()=>{const{cssRules:o}=t.sheet;return[].map.call(o,(i,l)=>{const{cssText:a}=i;let s="";if(a.startsWith("--sxs"))return"";if(o[l-1]&&(s=o[l-1].cssText).startsWith("--sxs")){if(!i.cssRules.length)return"";for(const u in t.rules)if(t.rules[u].group===i)return`--sxs{--sxs:${[...t.rules[u].cache].join(" ")}}${a}`;return i.cssRules.length?`${s}${a}`:""}return a}).join("")},n=()=>{if(t){const{rules:a,sheet:s}=t;if(!s.deleteRule){for(;Object(Object(s.cssRules)[0]).type===3;)s.cssRules.splice(0,1);s.cssRules=[]}for(const u in a)delete a[u]}const o=Object(e).styleSheets||[];for(const a of o)if(Xe(a)){for(let s=0,u=a.cssRules;u[s];++s){const g=Object(u[s]);if(g.type!==1)continue;const f=Object(u[s+1]);if(f.type!==4)continue;++s;const{cssText:c}=g;if(!c.startsWith("--sxs"))continue;const m=c.slice(14,-3).trim().split(/\s+/),b=Y[m[0]];b&&(t||(t={sheet:a,reset:n,rules:{},toString:r}),t.rules[b]={group:f,index:s,cache:new Set(m)})}if(t)break}if(!t){const a=(s,u)=>({type:u,cssRules:[],insertRule(g,f){this.cssRules.splice(f,0,a(g,{import:3,undefined:1}[(g.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return s==="@media{}"?`@media{${[].map.call(this.cssRules,g=>g.cssText).join("")}}`:s}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:a("","text/css"),rules:{},reset:n,toString:r}}const{sheet:i,rules:l}=t;for(let a=Y.length-1;a>=0;--a){const s=Y[a];if(!l[s]){const u=Y[a+1],g=l[u]?l[u].index:i.cssRules.length;i.insertRule("@media{}",g),i.insertRule(`--sxs{--sxs:${a}}`,g),l[s]={group:i.cssRules[g+1],index:g,cache:new Set([a])}}et(l[s])}};return n(),t},et=e=>{const t=e.group;let r=t.cssRules.length;e.apply=n=>{try{t.insertRule(n,r),++r}catch{}}},G=Symbol(),tt=U(),me=(e,t)=>tt(e,()=>(...r)=>{let n={type:null,composers:new Set};for(const o of r)if(o!=null)if(o[N]){n.type==null&&(n.type=o[N].type);for(const i of o[N].composers)n.composers.add(i)}else o.constructor!==Object||o.$$typeof?n.type==null&&(n.type=o):n.composers.add(rt(o,e));return n.type==null&&(n.type="span"),n.composers.size||n.composers.add(["PJLV",{},[],[],{},[]]),nt(e,n,t)}),rt=({variants:e,compoundVariants:t,defaultVariants:r,...n},o)=>{const i=`${j(o.prefix)}c-${L(n)}`,l=[],a=[],s=Object.create(null),u=[];for(const c in r)s[c]=String(r[c]);if(typeof e=="object"&&e)for(const c in e){g=s,f=c,Ue.call(g,f)||(s[c]="undefined");const m=e[c];for(const b in m){const y={[c]:String(b)};String(b)==="undefined"&&u.push(c);const x=m[b],$=[y,x,!de(x)];l.push($)}}var g,f;if(typeof t=="object"&&t)for(const c of t){let{css:m,...b}=c;m=typeof m=="object"&&m||{};for(const x in b)b[x]=String(b[x]);const y=[b,m,!de(m)];a.push(y)}return[i,n,l,a,s,u]},nt=(e,t,r)=>{const[n,o,i,l]=ot(t.composers),a=typeof t.type=="function"||t.type.$$typeof?(f=>{function c(){for(let m=0;m<c[G].length;m++){const[b,y]=c[G][m];f.rules[b].apply(y)}return c[G]=[],null}return c[G]=[],c.rules={},Y.forEach(m=>c.rules[m]={apply:b=>c[G].push([m,b])}),c})(r):null,s=(a||r).rules,u=`.${n}${o.length>1?`:where(.${o.slice(1).join(".")})`:""}`,g=f=>{f=typeof f=="object"&&f||it;const{css:c,...m}=f,b={};for(const $ in i)if(delete m[$],$ in f){let v=f[$];typeof v=="object"&&v?b[$]={"@initial":i[$],...v}:(v=String(v),b[$]=v!=="undefined"||l.has($)?v:i[$])}else b[$]=i[$];const y=new Set([...o]);for(const[$,v,E,C]of t.composers){r.rules.styled.cache.has($)||(r.rules.styled.cache.add($),H(v,[`.${$}`],[],e,I=>{s.styled.apply(I)}));const V=ge(E,b,e.media),R=ge(C,b,e.media,!0);for(const I of V)if(I!==void 0)for(const[P,W,z]of I){const A=`${$}-${L(W)}-${P}`;y.add(A);const F=(z?r.rules.resonevar:r.rules.onevar).cache,Z=z?s.resonevar:s.onevar;F.has(A)||(F.add(A),H(W,[`.${A}`],[],e,K=>{Z.apply(K)}))}for(const I of R)if(I!==void 0)for(const[P,W]of I){const z=`${$}-${L(W)}-${P}`;y.add(z),r.rules.allvar.cache.has(z)||(r.rules.allvar.cache.add(z),H(W,[`.${z}`],[],e,A=>{s.allvar.apply(A)}))}}if(typeof c=="object"&&c){const $=`${n}-i${L(c)}-css`;y.add($),r.rules.inline.cache.has($)||(r.rules.inline.cache.add($),H(c,[`.${$}`],[],e,v=>{s.inline.apply(v)}))}for(const $ of String(f.className||"").trim().split(/\s+/))$&&y.add($);const x=m.className=[...y].join(" ");return{type:t.type,className:x,selector:u,props:m,toString:()=>x,deferredInjector:a}};return se(g,{className:n,selector:u,[N]:t,toString:()=>(r.rules.styled.cache.has(n)||g(),n)})},ot=e=>{let t="";const r=[],n={},o=[];for(const[i,,,,l,a]of e){t===""&&(t=i),r.push(i),o.push(...a);for(const s in l){const u=l[s];(n[s]===void 0||u!=="undefined"||a.includes(u))&&(n[s]=u)}}return[t,r,n,new Set(o)]},ge=(e,t,r,n)=>{const o=[];e:for(let[i,l,a]of e){if(a)continue;let s,u=0,g=!1;for(s in i){const f=i[s];let c=t[s];if(c!==f){if(typeof c!="object"||!c)continue e;{let m,b,y=0;for(const x in c){if(f===String(c[x])){if(x!=="@initial"){const $=x.slice(1);(b=b||[]).push($ in r?r[$]:x.replace(/^@media ?/,"")),g=!0}u+=y,m=!0}++y}if(b&&b.length&&(l={["@media "+b.join(", ")]:l}),!m)continue e}}}(o[u]=o[u]||[]).push([n?"cv":`${s}-${i[s]}`,l,g])}return o},it={},at=U(),st=(e,t)=>at(e,()=>(...r)=>{const n=()=>{for(let o of r){o=typeof o=="object"&&o||{};let i=L(o);if(!t.rules.global.cache.has(i)){if(t.rules.global.cache.add(i),"@import"in o){let l=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let a of[].concat(o["@import"]))a=a.includes('"')||a.includes("'")?a:`"${a}"`,t.sheet.insertRule(`@import ${a};`,l++);delete o["@import"]}H(o,[],[],e,l=>{t.rules.global.apply(l)})}}return""};return se(n,{toString:n})}),lt=U(),ct=(e,t)=>lt(e,()=>r=>{const n=`${j(e.prefix)}k-${L(r)}`,o=()=>{if(!t.rules.global.cache.has(n)){t.rules.global.cache.add(n);const i=[];H(r,[],[],e,a=>i.push(a));const l=`@keyframes ${n}{${i.join("")}}`;t.rules.global.apply(l)}return n};return se(o,{get name(){return o()},toString:o})}),dt=class{constructor(e,t,r,n){this.token=e==null?"":String(e),this.value=t==null?"":String(t),this.scale=r==null?"":String(r),this.prefix=n==null?"":String(n)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+j(this.prefix)+j(this.scale)+this.token}toString(){return this.computedValue}},ut=U(),ft=(e,t)=>ut(e,()=>(r,n)=>{n=typeof r=="object"&&r||Object(n);const o=`.${r=(r=typeof r=="string"?r:"")||`${j(e.prefix)}t-${L(n)}`}`,i={},l=[];for(const s in n){i[s]={};for(const u in n[s]){const g=`--${j(e.prefix)}${s}-${u}`,f=Se(String(n[s][u]),e.prefix,s);i[s][u]=new dt(u,f,s,e.prefix),l.push(`${g}:${f}`)}}const a=()=>{if(l.length&&!t.rules.themed.cache.has(r)){t.rules.themed.cache.add(r);const s=`${n===e.theme?":root,":""}.${r}{${l.join(";")}}`;t.rules.themed.apply(s)}return r};return{...i,get className(){return a()},selector:o,toString:a}}),pt=U(),mt=U(),gt=e=>{const t=(r=>{let n=!1;const o=pt(r,i=>{n=!0;const l="prefix"in(i=typeof i=="object"&&i||{})?String(i.prefix):"",a=typeof i.media=="object"&&i.media||{},s=typeof i.root=="object"?i.root||null:globalThis.document||null,u=typeof i.theme=="object"&&i.theme||{},g={prefix:l,media:a,theme:u,themeMap:typeof i.themeMap=="object"&&i.themeMap||{...xe},utils:typeof i.utils=="object"&&i.utils||{}},f=Qe(s),c={css:me(g,f),globalCss:st(g,f),keyframes:ct(g,f),createTheme:ft(g,f),reset(){f.reset(),c.theme.toString()},theme:{},sheet:f,config:g,prefix:l,getCssText:f.toString,toString:f.toString};return String(c.theme=c.createTheme(u)),c});return n||o.reset(),o})(e);return t.styled=(({config:r,sheet:n})=>mt(r,()=>{const o=me(r,n);return(...i)=>{const l=o(...i),a=l[N].type,s=h.forwardRef((u,g)=>{const f=u&&u.as||a,{props:c,deferredInjector:m}=l(u);return delete c.as,c.ref=g,m?h.createElement(h.Fragment,null,h.createElement(f,c),h.createElement(m,null)):h.createElement(f,c)});return s.className=l.className,s.displayName=`Styled.${a.displayName||a.name||a}`,s.selector=l.selector,s.toString=()=>l.selector,s[N]=l[N],s}}))(t),t};function ye(e,t=[]){let r=[];function n(i,l){const a=d.createContext(l),s=r.length;r=[...r,l];function u(f){const{scope:c,children:m,...b}=f,y=(c==null?void 0:c[e][s])||a,x=d.useMemo(()=>b,Object.values(b));return d.createElement(y.Provider,{value:x},m)}function g(f,c){const m=(c==null?void 0:c[e][s])||a,b=d.useContext(m);if(b)return b;if(l!==void 0)return l;throw new Error(`\`${f}\` must be used within \`${i}\``)}return u.displayName=i+"Provider",[u,g]}const o=()=>{const i=r.map(l=>d.createContext(l));return function(a){const s=(a==null?void 0:a[e])||i;return d.useMemo(()=>({[`__scope${e}`]:{...a,[e]:s}}),[a,s])}};return o.scopeName=e,[n,ht(o,...t)]}function ht(...e){const t=e[0];if(e.length===1)return t;const r=()=>{const n=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const l=n.reduce((a,{useScope:s,scopeName:u})=>{const f=s(i)[`__scope${u}`];return{...a,...f}},{});return d.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return r.scopeName=t.scopeName,r}function le(e){const t=d.useRef(e);return d.useEffect(()=>{t.current=e}),d.useMemo(()=>(...r)=>{var n;return(n=t.current)===null||n===void 0?void 0:n.call(t,...r)},[])}const Q=globalThis!=null&&globalThis.document?d.useLayoutEffect:()=>{};function bt(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function ve(...e){return t=>e.forEach(r=>bt(r,t))}function ke(...e){return d.useCallback(ve(...e),e)}const Ce=d.forwardRef((e,t)=>{const{children:r,...n}=e,o=d.Children.toArray(r),i=o.find(xt);if(i){const l=i.props.children,a=o.map(s=>s===i?d.Children.count(l)>1?d.Children.only(null):d.isValidElement(l)?l.props.children:null:s);return d.createElement(ae,M({},n,{ref:t}),d.isValidElement(l)?d.cloneElement(l,void 0,a):null)}return d.createElement(ae,M({},n,{ref:t}),r)});Ce.displayName="Slot";const ae=d.forwardRef((e,t)=>{const{children:r,...n}=e;return d.isValidElement(r)?d.cloneElement(r,{...St(n,r.props),ref:ve(t,r.ref)}):d.Children.count(r)>1?d.Children.only(null):null});ae.displayName="SlotClone";const $t=({children:e})=>d.createElement(d.Fragment,null,e);function xt(e){return d.isValidElement(e)&&e.type===$t}function St(e,t){const r={...t};for(const n in t){const o=e[n],i=t[n];/^on[A-Z]/.test(n)?o&&i?r[n]=(...a)=>{i(...a),o(...a)}:o&&(r[n]=o):n==="style"?r[n]={...o,...i}:n==="className"&&(r[n]=[o,i].filter(Boolean).join(" "))}return{...e,...r}}const yt=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],q=yt.reduce((e,t)=>{const r=d.forwardRef((n,o)=>{const{asChild:i,...l}=n,a=i?Ce:t;return d.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),d.createElement(a,M({},l,{ref:o}))});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),Ee="Avatar",[vt,Wr]=ye(Ee),[kt,we]=vt(Ee),Ct=d.forwardRef((e,t)=>{const{__scopeAvatar:r,...n}=e,[o,i]=d.useState("idle");return d.createElement(kt,{scope:r,imageLoadingStatus:o,onImageLoadingStatusChange:i},d.createElement(q.span,M({},n,{ref:t})))}),Et="AvatarImage",wt=d.forwardRef((e,t)=>{const{__scopeAvatar:r,src:n,onLoadingStatusChange:o=()=>{},...i}=e,l=we(Et,r),a=zt(n),s=le(u=>{o(u),l.onImageLoadingStatusChange(u)});return Q(()=>{a!=="idle"&&s(a)},[a,s]),a==="loaded"?d.createElement(q.img,M({},i,{ref:t,src:n})):null}),Rt="AvatarFallback",It=d.forwardRef((e,t)=>{const{__scopeAvatar:r,delayMs:n,...o}=e,i=we(Rt,r),[l,a]=d.useState(n===void 0);return d.useEffect(()=>{if(n!==void 0){const s=window.setTimeout(()=>a(!0),n);return()=>window.clearTimeout(s)}},[n]),l&&i.imageLoadingStatus!=="loaded"?d.createElement(q.span,M({},o,{ref:t})):null});function zt(e){const[t,r]=d.useState("idle");return d.useEffect(()=>{if(!e){r("error");return}let n=!0;const o=new window.Image,i=l=>()=>{n&&r(l)};return r("loading"),o.onload=i("loaded"),o.onerror=i("error"),o.src=e,()=>{n=!1}},[e]),t}const Bt=Ct,Pt=wt,At=It;var Mt=d.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Re=function(t,r,n){var o=n.get(t);return o?o(r):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function he(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}var Ie=d.forwardRef(function(e,t){var r=e.alt,n=e.color,o=e.size,i=e.weight,l=e.mirrored,a=e.children,s=e.renderPath,u=he(e,["alt","color","size","weight","mirrored","children","renderPath"]),g=d.useContext(Mt),f=g.color,c=f===void 0?"currentColor":f,m=g.size,b=g.weight,y=b===void 0?"regular":b,x=g.mirrored,$=x===void 0?!1:x,v=he(g,["color","size","weight","mirrored"]);return h.createElement("svg",Object.assign({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o??m,height:o??m,fill:n??c,viewBox:"0 0 256 256",transform:l||$?"scale(-1, 1)":void 0},v,u),!!r&&h.createElement("title",null,r),a,h.createElement("rect",{width:"256",height:"256",fill:"none"}),s(i??y,n??c))});Ie.displayName="IconBase";const ze=Ie;var _=new Map;_.set("bold",function(e){return h.createElement(h.Fragment,null,h.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});_.set("duotone",function(e){return h.createElement(h.Fragment,null,h.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});_.set("fill",function(){return h.createElement(h.Fragment,null,h.createElement("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"}))});_.set("light",function(e){return h.createElement(h.Fragment,null,h.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});_.set("thin",function(e){return h.createElement(h.Fragment,null,h.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});_.set("regular",function(e){return h.createElement(h.Fragment,null,h.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var jt=function(t,r){return Re(t,r,_)},Be=d.forwardRef(function(e,t){return h.createElement(ze,Object.assign({ref:t},e,{renderPath:jt}))});Be.displayName="Check";const Wt=Be;var O=new Map;O.set("bold",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),h.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});O.set("duotone",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),h.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),h.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});O.set("fill",function(){return h.createElement(h.Fragment,null,h.createElement("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"}))});O.set("light",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),h.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});O.set("thin",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),h.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});O.set("regular",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),h.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var Nt=function(t,r){return Re(t,r,O)},Pe=d.forwardRef(function(e,t){return h.createElement(ze,Object.assign({ref:t},e,{renderPath:Nt}))});Pe.displayName="User";const Lt=Pe;function be(e,t,{checkForDefaultPrevented:r=!0}={}){return function(o){if(e==null||e(o),r===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function Tt({prop:e,defaultProp:t,onChange:r=()=>{}}){const[n,o]=_t({defaultProp:t,onChange:r}),i=e!==void 0,l=i?e:n,a=le(r),s=d.useCallback(u=>{if(i){const f=typeof u=="function"?u(e):u;f!==e&&a(f)}else o(u)},[i,e,o,a]);return[l,s]}function _t({defaultProp:e,onChange:t}){const r=d.useState(e),[n]=r,o=d.useRef(n),i=le(t);return d.useEffect(()=>{o.current!==n&&(i(n),o.current=n)},[n,o,i]),r}function Ot(e){const t=d.useRef({value:e,previous:e});return d.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}function Ft(e){const[t,r]=d.useState(void 0);return Q(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});const n=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let l,a;if("borderBoxSize"in i){const s=i.borderBoxSize,u=Array.isArray(s)?s[0]:s;l=u.inlineSize,a=u.blockSize}else l=e.offsetWidth,a=e.offsetHeight;r({width:l,height:a})});return n.observe(e,{box:"border-box"}),()=>n.unobserve(e)}else r(void 0)},[e]),t}function Dt(e,t){return d.useReducer((r,n)=>{const o=t[r][n];return o??r},e)}const Ae=e=>{const{present:t,children:r}=e,n=Ht(t),o=typeof r=="function"?r({present:n.isPresent}):d.Children.only(r),i=ke(n.ref,o.ref);return typeof r=="function"||n.isPresent?d.cloneElement(o,{ref:i}):null};Ae.displayName="Presence";function Ht(e){const[t,r]=d.useState(),n=d.useRef({}),o=d.useRef(e),i=d.useRef("none"),l=e?"mounted":"unmounted",[a,s]=Dt(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return d.useEffect(()=>{const u=J(n.current);i.current=a==="mounted"?u:"none"},[a]),Q(()=>{const u=n.current,g=o.current;if(g!==e){const c=i.current,m=J(u);e?s("MOUNT"):m==="none"||(u==null?void 0:u.display)==="none"?s("UNMOUNT"):s(g&&c!==m?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,s]),Q(()=>{if(t){const u=f=>{const m=J(n.current).includes(f.animationName);f.target===t&&m&&De.flushSync(()=>s("ANIMATION_END"))},g=f=>{f.target===t&&(i.current=J(n.current))};return t.addEventListener("animationstart",g),t.addEventListener("animationcancel",u),t.addEventListener("animationend",u),()=>{t.removeEventListener("animationstart",g),t.removeEventListener("animationcancel",u),t.removeEventListener("animationend",u)}}else s("ANIMATION_END")},[t,s]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:d.useCallback(u=>{u&&(n.current=getComputedStyle(u)),r(u)},[])}}function J(e){return(e==null?void 0:e.animationName)||"none"}const Me="Checkbox",[Ut,Nr]=ye(Me),[Vt,Gt]=Ut(Me),Yt=d.forwardRef((e,t)=>{const{__scopeCheckbox:r,name:n,checked:o,defaultChecked:i,required:l,disabled:a,value:s="on",onCheckedChange:u,...g}=e,[f,c]=d.useState(null),m=ke(t,E=>c(E)),b=d.useRef(!1),y=f?!!f.closest("form"):!0,[x=!1,$]=Tt({prop:o,defaultProp:i,onChange:u}),v=d.useRef(x);return d.useEffect(()=>{const E=f==null?void 0:f.form;if(E){const C=()=>$(v.current);return E.addEventListener("reset",C),()=>E.removeEventListener("reset",C)}},[f,$]),d.createElement(Vt,{scope:r,state:x,disabled:a},d.createElement(q.button,M({type:"button",role:"checkbox","aria-checked":T(x)?"mixed":x,"aria-required":l,"data-state":je(x),"data-disabled":a?"":void 0,disabled:a,value:s},g,{ref:m,onKeyDown:be(e.onKeyDown,E=>{E.key==="Enter"&&E.preventDefault()}),onClick:be(e.onClick,E=>{$(C=>T(C)?!0:!C),y&&(b.current=E.isPropagationStopped(),b.current||E.stopPropagation())})})),y&&d.createElement(Kt,{control:f,bubbles:!b.current,name:n,value:s,checked:x,required:l,disabled:a,style:{transform:"translateX(-100%)"}}))}),qt="CheckboxIndicator",Zt=d.forwardRef((e,t)=>{const{__scopeCheckbox:r,forceMount:n,...o}=e,i=Gt(qt,r);return d.createElement(Ae,{present:n||T(i.state)||i.state===!0},d.createElement(q.span,M({"data-state":je(i.state),"data-disabled":i.disabled?"":void 0},o,{ref:t,style:{pointerEvents:"none",...e.style}})))}),Kt=e=>{const{control:t,checked:r,bubbles:n=!0,...o}=e,i=d.useRef(null),l=Ot(r),a=Ft(t);return d.useEffect(()=>{const s=i.current,u=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(u,"checked").set;if(l!==r&&f){const c=new Event("click",{bubbles:n});s.indeterminate=T(r),f.call(s,T(r)?!1:r),s.dispatchEvent(c)}},[l,r,n]),d.createElement("input",M({type:"checkbox","aria-hidden":!0,defaultChecked:T(r)?!1:r},o,{tabIndex:-1,ref:i,style:{...e.style,...a,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function T(e){return e==="indeterminate"}function je(e){return T(e)?"indeterminate":e?"checked":"unchecked"}const Jt=Yt,Xt=Zt;var Qt=Object.defineProperty,er=Object.defineProperties,tr=Object.getOwnPropertyDescriptors,ee=Object.getOwnPropertySymbols,We=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable,$e=(e,t,r)=>t in e?Qt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,te=(e,t)=>{for(var r in t||(t={}))We.call(t,r)&&$e(e,r,t[r]);if(ee)for(var r of ee(t))Ne.call(t,r)&&$e(e,r,t[r]);return e},Le=(e,t)=>er(e,tr(t)),rr=(e,t)=>{var r={};for(var n in e)We.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&ee)for(var n of ee(e))t.indexOf(n)<0&&Ne.call(e,n)&&(r[n]=e[n]);return r},nr={white:"#FFF",black:"#000",gray100:"#E1E1E6",gray200:"#A9A9B2",gray400:"#7C7C8A",gray500:"#505059",gray600:"#323238",gray700:"#29292E",gray800:"#202024",gray900:"#121214",ignite300:"#00B37E",ignite500:"#00875F",ignite700:"#015F43",ignite900:"#00291D",test:"#FF0000"},or={1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",40:"10rem",64:"16rem",80:"20rem"},ir={px:"1px",xs:"4px",sm:"6px",md:"8px",lg:"16px",full:"99999px"},ar={default:"Roboto, sans-serif",code:"monospace"},sr={xxs:"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","4xl":"2rem","5xl":"2.25rem","6xl":"3rem","7xl":"4rem","8xl":"4.5rem","9xl":"6rem"},lr={regular:"400",medium:"500",bold:"700"},cr={shorter:"125%",short:"140%",base:"160%",tall:"180%"},{styled:k,css:Lr,globalCss:Tr,keyframes:Te,getCssText:_r,theme:Or,createTheme:Fr,config:Dr}=gt({themeMap:Le(te({},xe),{width:"space",height:"space"}),theme:{colors:nr,fontSizes:sr,fontWeights:lr,fonts:ar,lineHeights:cr,radii:ir,space:or}}),dr=k("div",{padding:"$6",borderRadius:"$md",backgroundColor:"$gray800",border:"1px solid $gray600"});dr.displayName="Box";var _e=k("p",{fontFamily:"$default",lineHeight:"$base",margin:0,color:"$gray100",variants:{size:{xxs:{fontSize:"$xxs"},xs:{fontSize:"$xs"},sm:{fontSize:"$sm"},md:{fontSize:"$md"},lg:{fontSize:"$lg"},xl:{fontSize:"$xl"},"2xl":{fontSize:"$2xl"},"4xl":{fontSize:"$4xl"},"5xl":{fontSize:"$5xl"},"6xl":{fontSize:"$6xl"},"7xl":{fontSize:"$7xl"},"8xl":{fontSize:"$8xl"},"9xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});_e.displayName="Text";var ur=k("h2",{fontFamily:"$default",lineHeight:"$shorter",margin:0,color:"$gray100",variants:{size:{sm:{fontSize:"$xl"},md:{fontSize:"$2xl"},lg:{fontSize:"$4xl"},xl:{fontSize:"$5xl"},"2xl":{fontSize:"$6xl"},"3xl":{fontSize:"$7xl"},"4xl":{fontSize:"$8xl"},"5xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});ur.displayName="Heading";var fr=k(Bt,{borderRadius:"$full",display:"inline-block",width:"$16",height:"$16",overflow:"hidden"}),pr=k(Pt,{width:"100%",height:"100%",objectFit:"cover",borderRadius:"inherit"}),mr=k(At,{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"$gray600",color:"$white",svg:{width:"$6",height:"$6"}});function gr(e){return X(fr,{children:[B(pr,te({},e)),B(mr,{delayMs:600,children:B(Lt,{})})]})}gr.displayName="Avatar";var hr=k("button",{all:"unset",borderRadius:"$sm",fontSize:"$sm",fontWeight:"$md",fontFamily:"$default",textAlign:"center",minWidth:120,padding:"0 $4",boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"center",gap:"$2",cursor:"pointer",svg:{width:"$4",height:"$4"},"&:disabled":{cursor:"not-allowed"},"&:focus":{boxShadow:"0 0 0 2px $colors$gray100"},variants:{variant:{primary:{color:"$white",backgroundColor:"$ignite500",transition:"background-color 0.2s ease-in-out","&:not(:disabled):hover":{backgroundColor:"$ignite300"},"&:disabled":{backgroundColor:"$gray200"}},secondary:{color:"$ignite300",border:"2px solid $ignite500",transition:"all 0.2s ease-in-out","&:not(:disabled):hover":{background:"$ignite500",color:"$white"},"&:disabled":{color:"$gray200",borderColor:"$gray200"}},tertiary:{color:"$gray100",transition:"color 0.2s ease-in-out","&:not(:disabled):hover":{color:"$white"},"&:disabled":{color:"$gray600"}}},size:{sm:{height:38},md:{height:46}}},defaultVariants:{variant:"primary",size:"md"}});hr.displayName="Button";var br=k("div",{backgroundColor:"$gray900",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",display:"flex",alignItems:"center",gap:"$2",variants:{size:{sm:{padding:"$2 $3"},md:{padding:"$3 $4"}}},"&:has(input:focus)":{borderColor:"$ignite300"},"&:has(input:disabled)":{opacity:.5,cursor:"not-allowed"},defaultVariants:{size:"md"}}),$r=k("span",{fontFamily:"$default",fontSize:"$sm",color:"$gray400",fontWeight:"$regular"}),xr=k("input",{fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"$regular",backgroundColor:"transparent",border:0,width:"100%","&:focus":{outline:0},"&:disabled":{cursor:"not-allowed"},"&::placeholder":{color:"$gray400"}}),Oe=d.forwardRef((e,t)=>{var r=e,{prefix:n}=r,o=rr(r,["prefix"]);return X(br,{children:[!!n&&B($r,{children:n}),B(xr,te({ref:t},o))]})});Oe.displayName="TextInput";var Sr=k("textarea",{backgroundColor:"$gray900",padding:"$3 $4",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"$regular",resize:"vertical",minHeight:80,"&:focus":{outline:0,borderColor:"$ignite300"},"&:disabled":{opacity:.5,cursor:"not-allowed"},"&:placeholder":{color:"$gray400"}});Sr.displayName="TextArea";var yr=k(Jt,{all:"unset",width:"$6",height:"$6",backgroundColor:"$gray900",borderRadius:"$xs",lineHeight:0,cursor:"pointer",overflow:"hidden",boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid $gray900",'&[data-state="checked"]':{backgroundColor:"$ignite300"},'&:focus, &[data-state="checked"]':{border:"2px solid $ignite300"}}),vr=Te({from:{transform:"translateY(-100%)"},to:{transform:"translateY(0)"}}),kr=Te({from:{transform:"translateY(0)"},to:{transform:"translateY(100%)"}}),Cr=k(Xt,{color:"$white",width:"$4",height:"$4",'&[data-state="checked"]':{animation:`${vr} 200ms ease-out`},'&[data-state="unchecked"]':{animation:`${kr} 200ms ease-out`}});function Er(e){return B(yr,Le(te({},e),{children:B(Cr,{asChild:!0,children:B(Wt,{weight:"bold"})})}))}Er.displayName="Checkbox";var wr=k("div",{}),Rr=k(_e,{color:"$gray200",defaultVariants:{size:"xs"}}),Ir=k("div",{display:"grid",gridTemplateColumns:"repeat(var(--steps-size), 1fr)",gridGap:"$2",marginTop:"$1"}),zr=k("div",{height:"$1",borderRadius:"$px",backgroundColor:"$gray600",variants:{active:{true:{backgroundColor:"$gray100"}}}});function Br({size:e,currentStep:t}){return X(wr,{children:[X(Rr,{children:["Passo ",t," de ",e]}),B(Ir,{css:{"--steps-size":e},children:Array.from({length:e},(r,n)=>n+1).map(r=>B(zr,{active:t>=r,children:r},r))})]})}Br.displayName="MultiStep";Oe.__docgenInfo={description:"",methods:[],displayName:"TextInput"};export{gr as A,dr as B,Er as C,ur as H,ze as I,Br as M,_e as T,hr as a,Sr as b,Oe as c,Re as r};
//# sourceMappingURL=index-85613af6.js.map
