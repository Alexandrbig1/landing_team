import{f as h,p as i,a as o,b as u,c as y,d as w,R as b,j as a,H as f,C as k,m as v}from"./index-CkNUyC34.js";import{T as x}from"./index-BeeRRV4p.js";const j=[{name:"Alex Smagin",linkedin:"https://www.linkedin.com/in/alex-smagin29/",twitter:"https://x.com/alexsmagin29",web:"https://www.alexsmagin.dev/",github:"https://github.com/Alexandrbig1",profession:"Fullstack Developer",img:"images/team/alex.jpg",webpImg:"images/team/alex.webp"},{name:"Sofia Protsiv",linkedin:"https://www.linkedin.com/in/sofia-protsiv-9743a6201/",github:"https://github.com/SofiaProtsiv",profession:"Fullstack Developer",img:"images/team/sofia.jpeg",webpImg:"images/team/sofia.webp"},{name:"Nikita Zeleniak",linkedin:"https://www.linkedin.com/in/zeleniak-nikita/",github:"https://github.com/NikitaZelenyak",profession:"Fullstack Developer",img:"images/team/nikita.jpeg",webpImg:"images/team/nikita.webp"},{name:"Mykhailo Startsev",linkedin:"https://www.linkedin.com/in/m-startsev/",github:"https://github.com/MStartsev",profession:"Fullstack Developer",img:"images/team/mykhailo.jpg",webpImg:"images/team/mykhailo.webp"},{name:"Yuriy Staynov",linkedin:"https://www.linkedin.com/in/yuriy-staynov-8a2832219/",github:"https://github.com/Yuriy-St",profession:"Fullstack Developer",img:"images/team/yuriy.jpg",webpImg:"images/team/yuriy.webp"},{name:"Galamaga Yevgen",linkedin:"https://www.linkedin.com/in/yevgen-galamaga-964481187/",github:"https://github.com/EvgeniyGal",profession:"Fullstack Developer",img:"images/team/galamaga.jpg",webpImg:"images/team/galamaga.webp"},{name:"Artur Didur",linkedin:"https://www.linkedin.com/in/artur-didur-257a57204/",github:"https://github.com/Art-of-D",profession:"Fullstack Developer",img:"images/team/artur.jpg",webpImg:"images/team/artur.webp"},{name:"Ilya Bondarchuk",linkedin:"https://www.linkedin.com/in/ilyabondarchuk/",github:"https://github.com/cod3provider",profession:"Fullstack Developer",img:"images/team/ilya.jpg",webpImg:"images/team/ilya.webp"},{name:"Vladyslav Mykhalytsky",linkedin:"https://www.linkedin.com/in/vladyslav-mykhalytskyi-b42250185/",github:"https://github.com/vmykhali666",profession:"Fullstack Developer",img:"images/team/vladyslav.jpeg",webpImg:"images/team/vladyslav.webp"}],n=h`
  0% {
transform: scale(1);
  }
  50% {
transform: scale(1.2);
  }
  100% {
transform: scale(1);
  }
`,$=i.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 3.2rem;
  margin: 0 auto;
  border-radius: 1.2rem;
  padding: 2.4rem 1.2rem;
  margin-top: 6.2rem;
  margin-bottom: 12.2rem;

  @media (min-width: 1440px) {
    max-height: 100vh;
    height: 100%;
    margin-top: 0;
    margin-bottom: 0;
    overflow: hidden;
  }
`,T=i.img`
  width: 22rem;
  height: 22rem;
  border-radius: 100rem;
  object-fit: cover;

  @media (min-width: 1440px) {
    width: 18rem;
    height: 18rem;
  }
`,t=i(x)`
  font-size: 2.4rem;
  color: ${({theme:e})=>e.colors.whiteColor};
  transition: all var(--primary-transition);
`,s=i(u)`
  font-size: 2.4rem;
  color: ${({theme:e})=>e.colors.whiteColor};
  transition: all var(--primary-transition);
`,l=i(y)`
  font-size: 2.4rem;
  color: ${({theme:e})=>e.colors.whiteColor};
  transition: all var(--primary-transition);
`,c=i(w)`
  font-size: 2.4rem;
  color: ${({theme:e})=>e.colors.whiteColor};
  transition: all var(--primary-transition);
`,p=i.a`
  background-color: ${({theme:e})=>e.colors.mainBgColor};
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

  @media (min-width: 1440px) {
    opacity: 0;
  }

  &:hover,
  &:focus {
    ${t} {
      animation: ${n} 1s ease-in-out infinite;
    }
  }
`,m=i.a`
  background-color: ${({theme:e})=>e.colors.mainBgColor};
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

  &:hover,
  &:focus {
    ${s} {
      animation: ${n} 1s ease-in-out infinite;
    }
  }

  @media (min-width: 1440px) {
    opacity: 0;
  }
`,g=i.a`
  background-color: ${({theme:e})=>e.colors.mainBgColor};
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

  &:hover,
  &:focus {
    ${l} {
      animation: ${n} 1s ease-in-out infinite;
    }
  }

  @media (min-width: 1440px) {
    opacity: 0;
  }
`,d=i.a`
  background-color: ${({theme:e})=>e.colors.mainBgColor};
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
  &:hover,
  &:focus {
    ${c} {
      animation: ${n} 1s ease-in-out infinite;
    }
  }

  @media (min-width: 1440px) {
    opacity: 0;
  }
`,S=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
`,I=i.h3`
  font-family: ${o};
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 1.14286;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  text-align: center;
  color: ${({theme:e})=>e.colors.whiteColor};
`,F=i.span`
  font-family: ${o};
  font-weight: 400;
  font-size: 1.4rem;
  color: ${({theme:e})=>e.colors.teamSecondaryTextColor};
  line-height: 1.5;
  letter-spacing: -0.02em;
  text-align: center;
`,C=i.div`
  width: 100%;
  height: 100%;
  border-radius: 1.2rem;
  padding: 1.2rem;
  background-color: ${({theme:e})=>e.colors.mainBgColorLowOp};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  position: relative;

  &:hover,
  &:focus {
    ${p} {
      opacity: 1;
    }
  }

  &:hover,
  &:focus {
    ${m} {
      opacity: 1;
      animation-delay: 0.25s;
    }
  }

  &:hover,
  &:focus {
    ${g} {
      opacity: 1;
      animation-delay: 0.5s;
    }
  }

  &:hover,
  &:focus {
    ${d} {
      opacity: 1;
      animation-delay: 0.75s;
    }
  }

  @media (min-width: 1440px) {
    width: 22rem;
  }
`,D=b.memo(()=>a.jsxs(a.Fragment,{children:[a.jsxs(f,{children:[a.jsx("title",{children:"Seventh Sense - Team Page"}),a.jsx("meta",{name:"description",content:"Meet the Seventh Sense team, a group of dedicated computer science students specializing in software engineering. Learn about our skills, backgrounds, and the innovative work we're doing together."}),a.jsx("meta",{name:"keywords",content:"Seventh Sense, team, computer science students, software engineering, team members, collaboration, skills, technology, innovation"})]}),a.jsx(k,{children:a.jsx($,{children:j.map((e,r)=>a.jsx(v.div,{initial:{opacity:0,y:100},animate:{opacity:1,y:0},transition:{type:"spring",duration:.5,delay:.5+r*.3},children:a.jsxs(C,{children:[a.jsxs("picture",{children:[a.jsx("source",{srcSet:e==null?void 0:e.webpImg,type:"image/webp"}),a.jsx(T,{src:e==null?void 0:e.img,alt:e==null?void 0:e.name,loading:"lazy"})]}),a.jsxs(S,{children:[a.jsx(I,{children:e==null?void 0:e.name}),a.jsx(F,{children:e==null?void 0:e.profession})]}),(e==null?void 0:e.github)&&a.jsx(m,{href:e==null?void 0:e.github,target:"_blank",rel:"noopener noreferrer","aria-label":`Visit ${e==null?void 0:e.name} GitHub profile`,children:a.jsx(s,{})}),(e==null?void 0:e.linkedin)&&a.jsx(d,{href:e==null?void 0:e.linkedin,target:"_blank",rel:"noopener noreferrer","aria-label":`Visit ${e==null?void 0:e.name} LinkedIn profile`,children:a.jsx(c,{})}),(e==null?void 0:e.web)&&a.jsx(p,{href:e==null?void 0:e.web,target:"_blank",rel:"noopener noreferrer","aria-label":`Visit ${e==null?void 0:e.name} website`,children:a.jsx(t,{})}),(e==null?void 0:e.twitter)&&a.jsx(g,{href:e==null?void 0:e.twitter,target:"_blank",rel:"noopener noreferrer","aria-label":`Visit ${e==null?void 0:e.name} Twitter profile`,children:a.jsx(l,{})})]})},r))})})]}));D.displayName="Team";export{D as default};
