import{a as c,j as e}from"./query-Cs__jwGN.js";import{L as f}from"./index-B-kyK3ZX.js";import{m as y}from"./motion-C493eqpB.js";import{A as w}from"./arrow-right-Cyu47VwU.js";const k={blue:{base:220,spread:200},purple:{base:280,spread:300},green:{base:120,spread:200},red:{base:0,spread:200},orange:{base:30,spread:200}},z={sm:"w-48 h-64",md:"w-64 h-80",lg:"w-80 h-96"},j=({children:s,className:n="",glowColor:l="blue",size:i="md",width:r,height:a,customSize:u=!1})=>{const t=c.useRef(null),b=c.useRef(null);c.useEffect(()=>{const o=h=>{const{clientX:d,clientY:p}=h;t.current&&(t.current.style.setProperty("--x",d.toFixed(2)),t.current.style.setProperty("--xp",(d/window.innerWidth).toFixed(2)),t.current.style.setProperty("--y",p.toFixed(2)),t.current.style.setProperty("--yp",(p/window.innerHeight).toFixed(2)))};return document.addEventListener("pointermove",o),()=>document.removeEventListener("pointermove",o)},[]);const{base:v,spread:x}=k[l],g=()=>u?"":z[i],m=()=>{const o={"--base":v,"--spread":x,"--radius":"16","--border":"2","--backdrop":"hsl(0 0% 100% / 1)","--backup-border":"hsl(0 0% 90% / 1)","--size":"280","--outer":"1","--border-size":"calc(var(--border, 2) * 1px)","--spotlight-size":"calc(var(--size, 150) * 1px)","--hue":"calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))",backgroundImage:`radial-gradient(
        var(--spotlight-size) var(--spotlight-size) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 70) * 1%) / var(--bg-spot-opacity, 0.07)), transparent
      )`,backgroundColor:"var(--backdrop, transparent)",backgroundSize:"calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))",backgroundPosition:"50% 50%",backgroundAttachment:"fixed",border:"var(--border-size) solid var(--backup-border)",position:"relative",touchAction:"none"};return r!==void 0&&(o.width=typeof r=="number"?`${r}px`:r),a!==void 0&&(o.height=typeof a=="number"?`${a}px`:a),o};return e.jsxs(e.Fragment,{children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
    [data-glow]::before,
    [data-glow]::after {
      pointer-events: none;
      content: "";
      position: absolute;
      inset: calc(var(--border-size) * -1);
      border: var(--border-size) solid transparent;
      border-radius: calc(var(--radius) * 1px);
      background-attachment: fixed;
      background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
      background-repeat: no-repeat;
      background-position: 50% 50%;
      mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
      mask-clip: padding-box, border-box;
      mask-composite: intersect;
    }
    [data-glow]::before {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 50) * 1%) / var(--border-spot-opacity, 0.8)), transparent 100%
      );
      filter: brightness(1.5);
    }
    [data-glow]::after {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(0 100% 100% / var(--border-light-opacity, 0.5)), transparent 100%
      );
    }
    [data-glow] [data-glow] {
      position: absolute;
      inset: 0;
      will-change: filter;
      opacity: var(--outer, 1);
      border-radius: calc(var(--radius) * 1px);
      border-width: calc(var(--border-size) * 20);
      filter: blur(calc(var(--border-size) * 10));
      background: none;
      pointer-events: none;
      border: none;
    }
    [data-glow] > [data-glow]::before {
      inset: -10px;
      border-width: 10px;
    }
  `}}),e.jsxs("div",{ref:t,"data-glow":!0,style:m(),className:`
          ${g()}
          rounded-2xl
          relative
          overflow-hidden
          shadow-sm
          hover:shadow-lg
          transition-shadow
          duration-300
          flex
          flex-col
          h-full
          ${n}
        `,children:[e.jsx("div",{ref:b,"data-glow":!0}),s]})]})};function P({title:s,description:n,image:l,slug:i,delay:r=0}){const a=i?`/service/${i}`:"/services";return e.jsx(y.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.5,delay:r},className:"h-full",children:e.jsxs(j,{customSize:!0,glowColor:"blue",className:"group",children:[e.jsxs("div",{className:"aspect-[16/9] overflow-hidden relative flex-shrink-0",children:[e.jsx("img",{src:l,alt:s,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"}),e.jsx("div",{className:"absolute inset-0 bg-[#142E36]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),e.jsxs("div",{className:"p-6 md:p-7 flex flex-col flex-grow",children:[e.jsx("h3",{className:"text-xl font-bold font-display text-foreground mb-3",children:s}),e.jsx("p",{className:"text-slate-500 text-sm leading-relaxed mb-6 flex-grow",children:n}),e.jsx(f,{href:a,children:e.jsxs("div",{className:"inline-flex items-center text-sm font-semibold text-[#142E36] hover:text-sky-600 transition-colors mt-auto cursor-pointer group/link gap-1",children:["More Details",e.jsx(w,{className:"w-4 h-4 transition-transform group-hover/link:translate-x-1"})]})})]})]})})}export{P as S};
