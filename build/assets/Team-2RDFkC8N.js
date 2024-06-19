import{f as g,p as a,a as o,c as u,d as y,e as f,j as e,H as w,b,C as k,m as v}from"./index-CpuwrDsG.js";import{T as x}from"./index-DHDY57Fp.js";const j=[{name:"Alex Smagin",linkedin:"https://www.linkedin.com/in/alex-smagin29/",twitter:"https://x.com/alexsmagin29",web:"https://www.alexsmagin.dev/",github:"https://github.com/Alexandrbig1",profession:"Fullstack Developer",img:"images/team/alex.jpg"},{name:"Sofia Protsiv",linkedin:"https://www.linkedin.com/in/sofia-protsiv-9743a6201/",github:"https://github.com/SofiaProtsiv",profession:"Fullstack Developer",img:"images/team/sofia.jpeg"},{name:"Nikita Zeleniak",linkedin:"https://www.linkedin.com/in/zeleniak-nikita/",github:"https://github.com/NikitaZelenyak",profession:"Fullstack Developer",img:"images/team/nikita.jpeg"},{name:"Mykhailo Startsev",linkedin:"https://www.linkedin.com/in/m-startsev/",github:"https://github.com/MStartsev",profession:"Fullstack Developer",img:"images/team/mykhailo.jpg"},{name:"Yuriy Staynov",linkedin:"https://www.linkedin.com/in/yuriy-staynov-8a2832219/",github:"https://github.com/Yuriy-St",profession:"Fullstack Developer",img:"images/team/yuriy.jpg"},{name:"Galamaga Yevgen",linkedin:"https://www.linkedin.com/in/yevgen-galamaga-964481187/",github:"https://github.com/EvgeniyGal",profession:"Fullstack Developer",img:"images/team/galamaga.jpg"},{name:"Artur Didur",linkedin:"https://www.linkedin.com/in/artur-didur-257a57204/",github:"https://github.com/Art-of-D",profession:"Fullstack Developer",img:"images/team/artur.jpg"},{name:"Ilya Bondarchuk",linkedin:"https://www.linkedin.com/in/ilyabondarchuk/",github:"https://github.com/cod3provider",profession:"Fullstack Developer",img:"images/team/ilya.jpg"},{name:"Vladyslav Mykhalytsky",linkedin:"https://www.linkedin.com/in/vladyslav-mykhalytskyi-b42250185/",github:"https://github.com/vmykhali666",profession:"Fullstack Developer",img:"images/team/vladyslav.jpeg"}],n=g`
  0% {
transform: scale(1);
  }
  50% {
transform: scale(1.2);
  }
  100% {
transform: scale(1);
  }
`,$=a.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  /* overflow: scroll; */
  gap: 3.2rem;
  margin: 0 auto;
  border-radius: 1.2rem;
  padding: 2.4rem 1.2rem;
  margin-top: 6.2rem;
  margin-bottom: 12.2rem;

  @media (min-width: 1440px) {
    max-height: 100vh;
    height: 100%;
    /* width: 90%; */
    margin-top: 0;
    margin-bottom: 0;
    overflow: hidden;
  }
`,T=a.img`
  width: 22rem;
  height: 22rem;
  border-radius: 100rem;
  object-fit: cover;

  @media (min-width: 1440px) {
    width: 18rem;
    height: 18rem;
  }
`,t=a(x)`
  font-size: 2.4rem;
  color: ${({theme:i})=>i.colors.whiteColor};
  transition: all var(--primary-transition);
`,s=a(u)`
  font-size: 2.4rem;
  color: ${({theme:i})=>i.colors.whiteColor};
  transition: all var(--primary-transition);
`,l=a(y)`
  font-size: 2.4rem;
  color: ${({theme:i})=>i.colors.whiteColor};
  transition: all var(--primary-transition);
`,c=a(f)`
  font-size: 2.4rem;
  color: ${({theme:i})=>i.colors.whiteColor};
  transition: all var(--primary-transition);
`,p=a.a`
  background-color: ${({theme:i})=>i.colors.mainBgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50rem;
  padding: 0.8rem;
  opacity: 1;

  position: absolute;
  bottom: 6.2rem;
  left: 0.4rem;

  transition: all var(--primary-transition);
  transition: opacity var(--primary-transition);
  transition-delay: 0.5s;

  &:hover {
    cursor: pointer;
  }

  &:hover {
    ${t} {
      animation: ${n} 1s ease-in-out infinite;
    }
  }

  @media (min-width: 1440px) {
    opacity: 0;
  }
`,m=a.a`
  background-color: ${({theme:i})=>i.colors.mainBgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50rem;
  padding: 0.8rem;
  opacity: 1;

  transition: all var(--primary-transition);
  transition: opacity var(--primary-transition);
  transition-delay: 0.1s;

  position: absolute;
  top: 0.4rem;
  left: 0.4rem;

  &:hover {
    cursor: pointer;
  }

  &:hover {
    ${s} {
      animation: ${n} 1s ease-in-out infinite;
    }
  }

  @media (min-width: 1440px) {
    opacity: 0;
  }
`,d=a.a`
  background-color: ${({theme:i})=>i.colors.mainBgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50rem;
  padding: 0.8rem;
  opacity: 1;

  transition: all var(--primary-transition);
  transition: opacity var(--primary-transition);
  transition-delay: 0.75s;

  position: absolute;
  bottom: 6.2rem;
  right: 0.4rem;

  &:hover {
    cursor: pointer;
  }

  &:hover {
    ${l} {
      animation: ${n} 1s ease-in-out infinite;
    }
  }

  @media (min-width: 1440px) {
    opacity: 0;
  }
`,h=a.a`
  background-color: ${({theme:i})=>i.colors.mainBgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50rem;
  padding: 0.8rem;
  opacity: 1;
  transition: all var(--primary-transition);
  transition: opacity var(--primary-transition);
  transition-delay: 0.3s;

  position: absolute;
  top: 0.4rem;
  right: 0.4rem;

  &:hover {
    cursor: pointer;
  }
  &:hover {
    ${c} {
      animation: ${n} 1s ease-in-out infinite;
    }
  }

  @media (min-width: 1440px) {
    opacity: 0;
  }
`,S=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
`,F=a.h3`
  font-family: ${o};
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 1.14286;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  text-align: center;
  color: ${({theme:i})=>i.colors.whiteColor};
`,C=a.span`
  font-family: ${o};
  font-weight: 400;
  font-size: 1.4rem;
  color: ${({theme:i})=>i.colors.teamSecondaryTextColor};
  line-height: 1.5;
  letter-spacing: -0.02em;
  text-align: center;
`,D=a.div`
  /* max-width: 26rem; */
  width: 100%;
  /* width: 26rem; */
  height: auto;
  height: 100%;
  border-radius: 1.2rem;
  padding: 1.2rem;
  background-color: ${({theme:i})=>i.colors.mainBgColorLowOp};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  position: relative;

  &:hover {
    ${p} {
      opacity: 1;
    }
  }

  &:hover {
    ${m} {
      opacity: 1;
      animation-delay: 0.25s;
    }
  }

  &:hover {
    ${d} {
      opacity: 1;
      animation-delay: 0.5s;
    }
  }

  &:hover {
    ${h} {
      opacity: 1;
      animation-delay: 0.75s;
    }
  }

  @media (min-width: 1440px) {
    width: 22rem;
  }
`;function W(){return e.jsxs(e.Fragment,{children:[e.jsx(w,{children:e.jsxs(b,{children:[e.jsx("title",{children:"Seventh Sense - Team Page"}),e.jsx("meta",{name:"description",content:"Meet the Seventh Sense team, a group of dedicated computer science students specializing in software engineering. Learn about our skills, backgrounds, and the innovative work we're doing together."}),e.jsx("meta",{name:"keywords",content:"Seventh Sense, team, computer science students, software engineering, team members, collaboration, skills, technology, innovation"})]})}),e.jsx(k,{children:e.jsx($,{children:j.map((i,r)=>e.jsx(v.div,{initial:{opacity:0,y:100},animate:{opacity:1,y:0},transition:{type:"spring",duration:.5,delay:.5+r*.3},children:e.jsxs(D,{children:[e.jsx(T,{src:i==null?void 0:i.img,alt:i==null?void 0:i.name}),e.jsxs(S,{children:[e.jsx(F,{children:i==null?void 0:i.name}),e.jsx(C,{children:i==null?void 0:i.profession})]}),(i==null?void 0:i.github)&&e.jsx(m,{href:i==null?void 0:i.github,target:"_blank",rel:"noopener noreferrer","aria-label":`Visit ${i==null?void 0:i.name} GitHub profile`,children:e.jsx(s,{})}),(i==null?void 0:i.linkedin)&&e.jsx(h,{href:i==null?void 0:i.linkedin,target:"_blank",rel:"noopener noreferrer","aria-label":`Visit ${i==null?void 0:i.name} LinkedIn profile`,children:e.jsx(c,{})}),(i==null?void 0:i.web)&&e.jsx(p,{href:i==null?void 0:i.web,target:"_blank",rel:"noopener noreferrer","aria-label":`Visit ${i==null?void 0:i.name} website`,children:e.jsx(t,{})}),(i==null?void 0:i.twitter)&&e.jsx(d,{href:i==null?void 0:i.twitter,target:"_blank",rel:"noopener noreferrer","aria-label":`Visit ${i==null?void 0:i.name} Twitter profile`,children:e.jsx(l,{})})]})},r))})})]})}export{W as default};
