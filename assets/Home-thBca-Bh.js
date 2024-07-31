import{f as s,p as t,m as o,a as r,F as m,L as c,P as p,R as d,j as e,C as l,H as g}from"./index-CkNUyC34.js";const h=s`
  0% { background-position: 0 0; }
  50% { background-position: 400% 0; }
  100% { background-position: 0 0; }
`,f=t.section`
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 6.2rem;
  margin-bottom: 12.2rem;
  gap: 4.2rem;
  padding: 2.4rem 1.2rem;
  border-radius: 1.2rem;

  @media (min-width: 344px) {
    padding: 2.4rem;
  }

  @media (min-width: 385px) {
    width: 100%;
  }

  @media (min-width: 1440px) {
    margin-top: 0;
    margin-bottom: 0;
    display: grid;
    grid-template-columns: 1.25fr 1.75fr;
    justify-items: center;
    gap: 7.2rem;
    width: 85%;
  }
`,u=t(o.h1)`
  font-size: 7.2rem;
  color: transparent;
  -webkit-text-stroke: 1px #fff;
  -webkit-text-stroke-color: #e7e5e490;
  line-height: 0.78;
  text-transform: uppercase;
  position: relative;
  transition: all var(--primary-transition);
  position: relative;

  @media (min-width: 768px) {
    font-size: 8.2rem;
  }
`,x=t(o.span)`
  color: #f5f5f540;
  position: absolute;
  bottom: -0.6rem;
  right: 0;
  transform: rotate(180deg);

  @media (min-width: 768px) {
    top: 0;
    bottom: unset;
  }
`,w=t(m)`
  font-size: 6.4rem;
`,b=t.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
  padding: 2.4rem 1.2rem;
  border-radius: 1.2rem;
  position: relative;

  @media (min-width: 344px) {
    padding: 2.4rem;
  }

  @media (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }

  @media (min-width: 1440px) {
    width: 100%;
  }
`,j=t.p`
  font-family: ${r};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.3444;
  letter-spacing: -0.02em;
  color: ${({theme:i})=>i.colors.whiteColor};
`,y=t.div`
  width: 100%;
  max-width: 385px;
  height: auto;
  padding: 1.2rem;
  border-radius: 4% 4% 23% 37% / 4% 4% 42% 27%;
  border-radius: 23% 1% 23% 1% / 42% 1% 42% 1%;
  background-color: ${i=>i.theme.colors.mainBgColorLowOp};
  transform: scale(1.2);
  margin: 0 auto;

  @media (min-width: 334px) {
    max-width: unset;
  }

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1440px) {
    width: 100%;
  }
`,v=t.img`
  width: 100%;
  height: auto;
  border-radius: 1% 24% 23% 37% / 1% 24% 42% 27%;
`,k=t(c)`
  position: relative;
  border: none;
  background: none;
  outline: none;
  padding: 1.2rem;
  border-radius: 1.2rem;
  width: 100%;
  cursor: pointer;
  background-color: ${i=>i.theme.colors.mainBgColor};
  color: ${i=>i.theme.colors.whiteColor};
  text-transform: uppercase;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  font-family: ${r};
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.2;
  letter-spacing: -0.02em;

  &::before {
    content: "";
    background: linear-gradient(
      45deg,
      ${i=>i.theme.colors.whiteColorLowOp},
      transparent,
      ${i=>i.theme.colors.whiteColorLowOp},
      transparent,
      ${i=>i.theme.colors.whiteColorLowOp},
      transparent,
      ${i=>i.theme.colors.whiteColorLowOp}
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 600%;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    filter: blur(4px);
    animation: ${h} 40s linear infinite;
    transition: all 0.3s ease-in-out;
    border-radius: inherit;
    opacity: 1;
  }

  &:hover:before {
    animation-play-state: paused;
  }
`,S=t(p)`
  font-size: 2.4rem;
  color: ${i=>i.theme.colors.whiteColor};
`,a=d.memo(()=>e.jsx(y,{children:e.jsxs("picture",{children:[e.jsx("source",{srcSet:"images/hero_desktop@2x.webp 2x",media:"(min-width: 1024px)",type:"image/webp"}),e.jsx("source",{srcSet:"images/hero_desktop.webp",media:"(min-width: 1024px)",type:"image/webp"}),e.jsx("source",{srcSet:"images/hero_tablet.webp",media:"(min-width: 768px)",type:"image/webp"}),e.jsx("source",{srcSet:"images/hero_mobile.webp",media:"(max-width: 767px)",type:"image/webp"}),e.jsx("source",{srcSet:"images/hero_desktop@2x.jpg 2x",media:"(min-width: 1024px)",type:"image/jpeg"}),e.jsx("source",{srcSet:"images/hero_desktop.jpg",media:"(min-width: 1024px)",type:"image/jpeg"}),e.jsx("source",{srcSet:"images/hero_tablet.jpg",media:"(min-width: 768px)",type:"image/jpeg"}),e.jsx("source",{srcSet:"images/hero_mobile.jpg",media:"(max-width: 767px)",type:"image/jpeg"}),e.jsx(v,{src:"images/hero_mobile.jpg",alt:"Seventh Sense office space",loading:"lazy"})]})}));a.displayName="HeroImgComponent";const n={initial:{},animate:{color:["#f5f5f540","#f5f5f540","#f5f5f540","#f5f5f540","#f5f5f540","#f5f5f540","#f5f5f540","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","#f5f5f540","#f5f5f540","#f5f5f540","#f5f5f540","#f5f5f540","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","#f5f5f540","#f5f5f540","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","#f5f5f540","#f5f5f540"],transition:{duration:2,repeat:1/0,repeatType:"mirror",delay:1}}};function H(){return e.jsx(l,{children:e.jsxs(f,{children:[e.jsx(o.div,{initial:{opacity:0,y:100},animate:{opacity:1,y:0},transition:{type:"spring"},children:e.jsxs(b,{children:[e.jsxs(u,{variants:n,initial:"initial",animate:"animate",children:["Seventh Sense",e.jsx(x,{variants:n,initial:"initial",animate:"animate",children:e.jsx(w,{})})]}),e.jsx(j,{children:"is a team of computer science students specializing in software engineering. United by our passion for technology, we collaborate to tackle challenging projects and innovate solutions. As aspiring software engineers, we are dedicated to continuous learning and excellence. Check out our landing page to meet our team, explore our projects, and feel free to contact us!"}),e.jsxs(k,{to:"projects",children:[e.jsx("span",{children:"our projects"}),e.jsx(S,{})]})]})}),e.jsx(o.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1.5},children:e.jsx(a,{})})]})})}function $(){return e.jsxs(e.Fragment,{children:[e.jsxs(g,{children:[e.jsx("title",{children:"Seventh Sense - Home Page"}),e.jsx("meta",{name:"description",content:"Seventh Sense is a team of passionate computer science students specializing in software engineering. Explore our projects, meet our team, and discover innovative solutions to today's challenges. Join us in our journey of continuous learning and excellence."}),e.jsx("meta",{name:"keywords",content:"Seventh Sense, computer science, software engineering, student projects, technology, innovation, collaborative projects, coding, tech community, continuous learning"})]}),e.jsx("div",{children:e.jsx(H,{})})]})}export{$ as default};
