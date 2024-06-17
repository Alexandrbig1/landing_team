import{f as a,p as i,m as o,a as n,F as s,L as l,P as c,j as t,C as f}from"./index-CZuYdWiT.js";const p=a`
  0% { background-position: 0 0; }
  50% { background-position: 400% 0; }
  100% { background-position: 0 0; }
`,d=i.section`
  width: 85%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 6.2rem;
  margin-bottom: 12.2rem;
  gap: 4.2rem;
  padding: 2.4rem;
  border-radius: 1.2rem;

  @media (min-width: 1440px) {
    margin-top: 0;
    margin-bottom: 0;
    display: grid;
    grid-template-columns: 1.25fr 1.75fr;
    justify-items: center;
    gap: 7.2rem;
  }
`,m=i(o.h1)`
  font-size: 7.2rem;
  color: transparent;
  -webkit-text-stroke: 1px #fff;
  -webkit-text-stroke-color: #e7e5e490;
  line-height: 0.78;
  text-transform: uppercase;
  position: relative;
  transition: all var(--primary-transition);
  position: relative;

  @media (min-width: 334px) {
    font-size: 8.2rem;
  }
`,g=i(o.span)`
  color: #f5f5f540;
  position: absolute;
  bottom: -0.6rem;
  right: 0;
  transform: rotate(180deg);

  @media (min-width: 768px) {
    top: 0;
    bottom: unset;
  }
`,h=i(s)`
  font-size: 6.4rem;
`,u=i.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
  padding: 2.4rem;
  border-radius: 1.2rem;
  position: relative;

  @media (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }

  @media (min-width: 1440px) {
    width: 100%;
  }
`,x=i.p`
  font-family: ${n};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.3444;
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.colors.whiteColor};
`,b=i.div`
  width: 100%;
  max-width: 385px;
  height: auto;
  padding: 1.2rem;
  border-radius: 4% 4% 23% 37% / 4% 4% 42% 27%;
  border-radius: 23% 1% 23% 1% / 42% 1% 42% 1%;
  background-color: ${e=>e.theme.colors.mainBgColorLowOp};
  transform: scale(1.2);

  @media (min-width: 334px) {
    max-width: unset;
  }
`,w=i.img`
  width: 100%;
  height: auto;
  border-radius: 1% 24% 23% 37% / 1% 24% 42% 27%;
`,j=i(l)`
  position: relative;
  border: none;
  background: none;
  outline: none;
  padding: 1.2rem;
  border-radius: 1.2rem;
  width: 100%;
  cursor: pointer;
  background-color: ${e=>e.theme.colors.mainBgColor};
  color: ${e=>e.theme.colors.whiteColor};
  text-transform: uppercase;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  font-family: ${n};
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.2;
  letter-spacing: -0.02em;

  &::before {
    content: "";
    background: linear-gradient(
      45deg,
      ${e=>e.theme.colors.whiteColorLowOp},
      transparent,
      ${e=>e.theme.colors.whiteColorLowOp},
      transparent,
      ${e=>e.theme.colors.whiteColorLowOp},
      transparent,
      ${e=>e.theme.colors.whiteColorLowOp}
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 600%;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    filter: blur(4px);
    animation: ${p} 40s linear infinite;
    transition: all 0.3s ease-in-out;
    border-radius: inherit;
    opacity: 1;
  }

  &:hover:before {
    animation-play-state: paused;
  }
`,y=i(c)`
  font-size: 2.4rem;
  color: ${e=>e.theme.colors.whiteColor};
`,r={initial:{},animate:{color:["#f5f5f540","#f5f5f540","#f5f5f540","#f5f5f540","#f5f5f540","#f5f5f540","#f5f5f540","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","#f5f5f540","#f5f5f540","#f5f5f540","#f5f5f540","#f5f5f540","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","#f5f5f540","#f5f5f540","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","#f5f5f540","#f5f5f540"],transition:{duration:2,repeat:1/0,repeatType:"mirror",delay:1}}};function k(){return t.jsx(f,{children:t.jsxs(d,{children:[t.jsx(o.div,{initial:{opacity:0,y:100},animate:{opacity:1,y:0},transition:{type:"spring"},children:t.jsxs(u,{children:[t.jsxs(m,{variants:r,initial:"initial",animate:"animate",children:["Seventh Sense",t.jsx(g,{variants:r,initial:"initial",animate:"animate",children:t.jsx(h,{})})]}),t.jsx(x,{children:"is a team of computer science students specializing in software engineering. United by our passion for technology, we collaborate to tackle challenging projects and innovate solutions. As aspiring software engineers, we are dedicated to continuous learning and excellence. Check out our landing page to meet our team, explore our projects, and feel free to contact us!"}),t.jsxs(j,{to:"projects",children:[t.jsx("span",{children:"our projects"}),t.jsx(y,{})]})]})}),t.jsx(o.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1.5},children:t.jsx(b,{children:t.jsx("picture",{children:t.jsx(w,{src:"images/hero_desktop.jpg",alt:"Seventh Sense office space"})})})})]})})}function C(){return t.jsx("div",{children:t.jsx(k,{})})}export{C as default};
