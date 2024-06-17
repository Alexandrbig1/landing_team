import{f as h,p as r,a as e,b as u,c as y,d as f,j as a,C as w,m as b}from"./index-CuidSQrb.js";import{T as k}from"./index-CJKH1zYQ.js";const v=[{name:"Alex Smagin",linkedin:"https://www.linkedin.com/in/alex-smagin29/",twitter:"https://x.com/alexsmagin29",web:"https://www.alexsmagin.dev/",github:"https://github.com/Alexandrbig1",profession:"Fullstack Developer",img:"images/team/alex.jpg"},{name:"Sofia Protsiv",linkedin:"https://www.linkedin.com/in/sofia-protsiv-9743a6201/",github:"https://github.com/SofiaProtsiv",profession:"Fullstack Developer",img:"images/team/sofia.jpeg"},{name:"Nikita Zeleniak",linkedin:"https://www.linkedin.com/in/zeleniak-nikita/",github:"https://github.com/NikitaZelenyak",profession:"Fullstack Developer",img:"images/team/nikita.jpeg"},{name:"Mykhailo Startsev",linkedin:"https://www.linkedin.com/in/m-startsev/",github:"https://github.com/MStartsev",profession:"Fullstack Developer",img:"images/team/mykhailo.jpg"},{name:"Yuriy Staynov",linkedin:"https://www.linkedin.com/in/yuriy-staynov-8a2832219/",github:"https://github.com/Yuriy-St",profession:"Fullstack Developer",img:"images/team/yuriy.jpg"},{name:"Galamaga Yevgen",linkedin:"https://www.linkedin.com/in/yevgen-galamaga-964481187/",github:"https://github.com/EvgeniyGal",profession:"Fullstack Developer",img:"images/team/galamaga.jpg"},{name:"Artur Didur",linkedin:"https://www.linkedin.com/in/artur-didur-257a57204/",github:"https://github.com/Art-of-D",profession:"Fullstack Developer",img:"images/team/artur.jpg"},{name:"Ilya Bondarchuk",linkedin:"https://www.linkedin.com/in/ilyabondarchuk/",github:"https://github.com/cod3provider",profession:"Fullstack Developer",img:"images/team/ilya.jpg"},{name:"Vladyslav Mykhalytsky",linkedin:"https://www.linkedin.com/in/vladyslav-mykhalytskyi-b42250185/",github:"https://github.com/vmykhali666",profession:"Fullstack Developer",img:"images/team/vladyslav.jpeg"}],n=h`
  0% {
transform: scale(1);
  }
  50% {
transform: scale(1.2);
  }
  100% {
transform: scale(1);
  }
`,x=r.section`
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
`,j=r.img`
  width: 22rem;
  height: 22rem;
  border-radius: 100rem;
  object-fit: cover;

  @media (min-width: 1440px) {
    width: 18rem;
    height: 18rem;
  }
`,t=r(k)`
  font-size: 2.4rem;
  color: ${({theme:i})=>i.colors.whiteColor};
  transition: all var(--primary-transition);
`,s=r(u)`
  font-size: 2.4rem;
  color: ${({theme:i})=>i.colors.whiteColor};
  transition: all var(--primary-transition);
`,l=r(y)`
  font-size: 2.4rem;
  color: ${({theme:i})=>i.colors.whiteColor};
  transition: all var(--primary-transition);
`,c=r(f)`
  font-size: 2.4rem;
  color: ${({theme:i})=>i.colors.whiteColor};
  transition: all var(--primary-transition);
`,p=r.a`
  background-color: ${({theme:i})=>i.colors.mainBgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50rem;
  padding: 0.8rem;
  opacity: 0;

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
`,m=r.a`
  background-color: ${({theme:i})=>i.colors.mainBgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50rem;
  padding: 0.8rem;
  opacity: 0;

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
`,d=r.a`
  background-color: ${({theme:i})=>i.colors.mainBgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50rem;
  padding: 0.8rem;
  opacity: 0;

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
`,g=r.a`
  background-color: ${({theme:i})=>i.colors.mainBgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50rem;
  padding: 0.8rem;
  opacity: 0;
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
`,$=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
`,T=r.h3`
  font-family: ${e};
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 1.14286;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  text-align: center;
  color: ${({theme:i})=>i.colors.whiteColor};
`,S=r.span`
  font-family: ${e};
  font-weight: 400;
  font-size: 1.4rem;
  color: ${({theme:i})=>i.colors.teamSecondaryTextColor};
  line-height: 1.5;
  letter-spacing: -0.02em;
  text-align: center;
`,C=r.div`
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
    ${g} {
      opacity: 1;
      animation-delay: 0.75s;
    }
  }

  @media (min-width: 1440px) {
    width: 22rem;
  }
`;function L(){return a.jsx(w,{children:a.jsx(x,{children:v.map((i,o)=>a.jsx(b.div,{initial:{opacity:0,y:100},animate:{opacity:1,y:0},transition:{type:"spring",duration:.5,delay:.5+o*.3},children:a.jsxs(C,{children:[a.jsx(j,{src:i==null?void 0:i.img,alt:i==null?void 0:i.name}),a.jsxs($,{children:[a.jsx(T,{children:i==null?void 0:i.name}),a.jsx(S,{children:i==null?void 0:i.profession})]}),(i==null?void 0:i.github)&&a.jsx(m,{href:i==null?void 0:i.github,target:"_blank",rel:"noopener noreferrer","aria-label":`Visit ${i==null?void 0:i.name} GitHub profile`,children:a.jsx(s,{})}),(i==null?void 0:i.linkedin)&&a.jsx(g,{href:i==null?void 0:i.linkedin,target:"_blank",rel:"noopener noreferrer","aria-label":`Visit ${i==null?void 0:i.name} LinkedIn profile`,children:a.jsx(c,{})}),(i==null?void 0:i.web)&&a.jsx(p,{href:i==null?void 0:i.web,target:"_blank",rel:"noopener noreferrer","aria-label":`Visit ${i==null?void 0:i.name} website`,children:a.jsx(t,{})}),(i==null?void 0:i.twitter)&&a.jsx(d,{href:i==null?void 0:i.twitter,target:"_blank",rel:"noopener noreferrer","aria-label":`Visit ${i==null?void 0:i.name} Twitter profile`,children:a.jsx(l,{})})]})},o))})})}export{L as default};
