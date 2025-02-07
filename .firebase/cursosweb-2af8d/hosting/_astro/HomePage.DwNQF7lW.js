import{j as e}from"./jsx-runtime.CLpGMVip.js";import{r as l}from"./index.D15Q2Owl.js";import{u as b}from"./useAuthStore.ClZDrIRE.js";import{u as w}from"./firebase.2mqXQHq0.js";function N({cursos:a}){const[m,x]=l.useState(""),[u,d]=l.useState([]),[i,h]=l.useState(!1),o=l.useRef(null),r=l.useRef(null),t=s=>{const c=s.target.value;if(x(c),c.trim()===""){d([]),h(!1);return}const f=c.toLowerCase(),j=a.filter(g=>g.titulo?.toLowerCase().includes(f)||g.resumen?.toLowerCase().includes(f)||g.descripcion?.toLowerCase().includes(f));console.log("Filtered Results:",j),d(j),h(!0)},n=()=>{h(!1)};return l.useEffect(()=>{const s=c=>{c.key==="Escape"&&i&&n()};return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[i]),l.useEffect(()=>{const s=c=>{o.current&&!o.current.contains(c.target)&&r.current&&!r.current.contains(c.target)&&n()};return i&&window.addEventListener("click",s),()=>window.removeEventListener("click",s)},[i]),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"p-4 w-96 ml-10",children:e.jsx("input",{type:"text",placeholder:"Buscar...",value:m,onChange:t,className:"w-full px-3 py-2 z-40 text-gray-800 bg-gray-100 rounded-lg focus:outline-none focus:ring focus:ring-gray-400",ref:r})}),i&&e.jsxs("div",{className:"absolute left-14 top-full mt-2 bg-black p-4 rounded-lg shadow-xl z-50 w-full md:w-10/12 max-h-96 overflow-y-auto",ref:o,children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h2",{className:"text-6xl text-white font-simplicity font-york",children:"Resultados"}),e.jsx("button",{onClick:n,className:"text-2xl font-bold text-gray-400 hover:text-red-500 transition","aria-label":"Cerrar búsqueda",children:"×"})]}),e.jsx("div",{className:"space-y-4",children:u.length>0?u.map(s=>e.jsxs("a",{href:`/blog/${s.id}`,className:"flex items-center gap-4 bg-white p-3 rounded-lg hover:bg-gray-200 transition transform hover:scale-105",onClick:n,children:[s.imagen&&e.jsx("img",{src:s.imagen,alt:s.titulo,className:"w-20 h-20 object-cover rounded-md shadow"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-lg font-bold text-red-500 hover:underline font-oswald text-center",children:s.titulo}),e.jsx("p",{className:"text-sm text-black text-center",children:s.resumen})]})]},s.id)):e.jsx("p",{className:"text-center text-black",children:"No se encontraron resultados."})})]})]})}function y({postsData:a,onOpenCart:m,onOpenLogin:x}){const[u,d]=l.useState(!1),i=b(o=>o.user),h=b(o=>o.logout);return l.useEffect(()=>{const o=()=>{d(window.scrollY>50)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]),e.jsx("header",{className:`${u?"bg-red-600":"bg-black"} text-white shadow z-30 sticky top-0 transition-colors duration-300`,children:e.jsxs("div",{className:"container mx-auto py-6 px-8 flex items-center justify-between",children:[e.jsx("div",{className:"flex items-center space-x-8 relative",children:e.jsxs("h1",{className:"font-bold relative",children:[e.jsx("span",{className:"text-white text-5xl font-wolkeroutline relative",children:"Pixel"}),e.jsx("span",{className:"text-red-500 text-8xl font-quintaras absolute top-4 left-20 z-10",children:"Flow"})]})}),e.jsx(N,{cursos:a}),e.jsx("nav",{children:e.jsxs("ul",{className:"flex space-x-8 items-center text-lg font-semibold uppercase",children:[e.jsx("li",{children:e.jsx("a",{href:"/",className:"relative text-white hover:text-red-500 transition duration-300 after:block after:content-[''] after:h-0.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 after:absolute after:left-0 after:bottom-0 hover:after:w-full",children:"Home"})}),e.jsx("li",{children:i?e.jsx("button",{onClick:m,className:"relative text-white hover:text-red-500 transition duration-300",children:"CART"}):e.jsx("button",{onClick:()=>alert("Debes iniciar sesión para ver tu carrito"),className:"relative text-white hover:text-red-500 transition duration-300",children:"CESTA"})}),e.jsx("li",{children:i?e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"text-white",children:["Hola, ",i.nombre_usuario]}),e.jsx("button",{onClick:h,className:"relative text-white hover:text-red-500 transition duration-300",children:"Logout"})]}):e.jsx("button",{onClick:x,className:"relative text-white hover:text-red-500 transition duration-300",children:"LOG IN"})})]})})]})})}const p=[{image:"/img/spman1.jpg",title:"Explorando nuevos horizontes",description:"Descubre cómo la creatividad y la innovación pueden transformar el mundo digital y expandir tu visión artística."},{image:"/img/karakter-ntr-sea-key-dock.jpg",title:"Concept Art y su impacto",description:"Desde la imaginación hasta la realidad, el arte conceptual es clave en la producción visual y el desarrollo de proyectos."},{image:"/img/friendly-robot-020-too-far-away-2560-001.jpg",title:"Tecnología y diseño juntos",description:"La inteligencia artificial revoluciona la ilustración y redefine el futuro del diseño con nuevas posibilidades creativas."},{image:"/img/anato-finnstark-anato-finnstark-web-petit-1fdg.jpg",title:"Ilustración y arte digital",description:"Explora el poder de la ilustración en la era digital y cómo puede dar vida a conceptos visuales con un estilo único."},{image:"/img/tumblr_de58418d9a10389607969b5def68f8d1_0076bfa1_2048.jpg",title:"Diseño y animación gráfica",description:"Sumérgete en el mundo de la animación y el diseño en movimiento para contar historias de manera dinámica y atractiva."},{image:"/img/gaelle-seguillon-gaelle-seguillon-balaur-bondoc-portrait-web.jpg",title:"Escultura y modelado 3D",description:"Explora las técnicas más avanzadas de modelado en 3D y cómo dar vida a tus ideas con realismo y profundidad."}],k=()=>{const[a,m]=l.useState(0),[x,u]=l.useState(null),[d,i]=l.useState(!0);l.useEffect(()=>{if(!d)return;const r=setInterval(()=>{u(a),m(t=>(t+1)%p.length)},3e3);return()=>clearInterval(r)},[d,a]);const h=()=>{u(a),m(r=>(r+1)%p.length)},o=()=>{u(a),m(r=>r===0?p.length-1:r-1)};return e.jsxs("div",{className:"relative w-full lg:h-screen md:h-3/4 h-1/3 flex items-center justify-between",children:[e.jsxs("div",{className:"flex space-x-3 ml-44 self-end lg:mb-32 md:mb-16 mb-8",children:[e.jsx("button",{onClick:()=>i(!d),className:"bg-zinc-800 text-white p-4 rounded",children:d?e.jsx("img",{className:"w-4 h-4",src:"/img/pausa.png",alt:"Pause"}):e.jsx("img",{className:"w-4 h-4",src:"/img/jugar.png",alt:"Play"})}),e.jsx("button",{onClick:o,className:"bg-zinc-800 text-white p-4 rounded",children:e.jsx("img",{className:"w-4 h-4",src:"/img/izqarrow.png",alt:"Previous"})}),e.jsx("button",{onClick:h,className:"bg-zinc-800 text-white p-4 rounded",children:e.jsx("img",{className:"w-4 h-4",src:"/img/dchaarrow.png",alt:"Next"})})]}),e.jsxs("div",{className:"w-3/5 h-2/3 ml-20 overflow-hidden relative",children:[e.jsx("div",{className:"absolute top-0 left-0 w-full h-full pointer-events-none z-10",style:{background:"linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.9) 10%, rgba(0, 0, 0, 0) 50%)",opacity:1}}),p.map((r,t)=>e.jsx("img",{src:r.image,alt:"Slide Background",className:`absolute top-0 left-0 w-full h-full object-cover object-center transition-all duration-700 ease-in-out ${t===a?"translate-x-0 opacity-100":t===x?"-translate-x-full opacity-0":"translate-x-full opacity-0"}`},t))]}),e.jsx("div",{className:"absolute lg:top-48 md:top-32 top-10 left-44 z-10",children:e.jsxs("div",{className:"relative w-[500px]",children:[e.jsx("img",{src:"/img/dots3.png",alt:"Dots Decor",className:"w-8/12 md:w-10/12 lg:w-max mx-auto opacity-40"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center lg:w-10/12 md:w-5/12 w-3/12",children:p.map((r,t)=>{const n=r.title.toUpperCase().split(" ");let s=Math.floor(n.length/2);n.length===2&&(s=1),n.length>4&&(s=Math.ceil(n.length/2));const c=n.slice(0,s).join(" "),f=n.slice(s).join(" ");return e.jsxs("div",{className:`absolute text-white transition-all duration-700 ease-in-out ${t===a?"lg:translate-x-[12%] md:translate-x-[80%] translate-x-[80%] opacity-100 z-10":t===x?"-translate-x-[100%] opacity-0 z-10":"translate-x-[250%] opacity-0 z-0"}`,children:[e.jsxs("h1",{className:"text-sm md:text-lg lg:text-4xl font-extrabold font-oswald uppercase leading-tight",children:[e.jsx("span",{className:"text-white block ",children:c}),e.jsx("span",{className:"text-red-500 block",children:f})]}),e.jsx("p",{className:"text-xs md:text-sm lg:text-lg text-gray-300 mt-2",style:{fontFamily:"Helvetica, Arial, sans-serif"},children:r.description})]},t)})})]})}),e.jsx("div",{className:"flex flex-col space-y-4 lg:mr-16 md:mr-8 mr-2",children:p.map((r,t)=>e.jsx("button",{onClick:()=>{u(a),m(t)},className:`w-2 h-2 transition-all duration-300 ${a===t?"bg-red-500 scale-[2.5]":"bg-white"}`},t))})]})},C=()=>e.jsxs("div",{className:"absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-12 font-oswald",children:[e.jsxs("a",{href:"#",className:"flex flex-col items-center space-y-11",children:[e.jsx("span",{className:"text-white hover:text-red-500 text-sm uppercase tracking-widest -rotate-90 origin-center",children:"Instagram"}),e.jsx("img",{src:"/img/instagram.png",className:"w-9 h-9 -rotate-90",alt:"Instagram"})]}),e.jsxs("a",{href:"#",className:"flex flex-col items-center space-y-10",children:[e.jsx("span",{className:"text-white hover:text-red-500 text-sm uppercase tracking-widest -rotate-90 origin-center",children:"Facebook"}),e.jsx("img",{src:"/img/facebook.png",className:"w-9 h-9 -rotate-90",alt:"Facebook"})]}),e.jsxs("a",{href:"#",className:"flex flex-col items-center space-y-7",children:[e.jsx("span",{className:"text-white hover:text-red-500 text-sm uppercase tracking-widest -rotate-90 origin-center",children:"Twitter"}),e.jsx("img",{src:"/img/twitter.png",className:"w-9 h-9 -rotate-90",alt:"Twitter"})]})]}),E=()=>e.jsxs("section",{className:"pt-4 relative w-full lg:h-[80vh] md:h-[40vh] h-[30vh] bg-black flex items-center justify-center ",children:[e.jsx(k,{}),e.jsx(C,{})]});function S({onClose:a,usuarios:m}){const[x,u]=l.useState(""),[d,i]=l.useState(""),[h,o]=l.useState(""),r=l.useRef(null),t=b(s=>s.login);l.useEffect(()=>{function s(c){r.current&&!r.current.contains(c.target)&&a()}return document.addEventListener("mousedown",s),()=>document.removeEventListener("mousedown",s)},[a]);function n(s){s.preventDefault();const c=m.find(f=>f.nombre_usuario===x&&f.contraseña===d);c?(t(c),a()):o("Usuario o contraseña incorrectos")}return e.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",children:e.jsxs("div",{ref:r,className:"bg-white p-6 rounded shadow w-80",children:[e.jsx("h2",{className:"text-6xl mb-4 font-york",children:"Iniciar Sesión"}),h&&e.jsx("p",{className:"text-red-500 mb-2",children:h}),e.jsxs("form",{onSubmit:n,className:"flex flex-col gap-2",children:[e.jsx("input",{type:"text",placeholder:"Usuario",value:x,onChange:s=>u(s.target.value),className:"border px-2 py-1"}),e.jsx("input",{type:"password",placeholder:"Contraseña",value:d,onChange:s=>i(s.target.value),className:"border px-2 py-1"}),e.jsx("button",{type:"submit",className:"bg-red-500 text-white py-2 mt-2 rounded",children:"Entrar"})]}),e.jsx("button",{onClick:a,className:"mt-4 bg-gray-400 text-white py-1 px-3 rounded",children:"Cerrar"})]})})}function L({user:a,onClose:m,onUpdateUser:x,cursos:u}){const d=l.useRef(null);l.useEffect(()=>{function t(n){d.current&&!d.current.contains(n.target)&&m()}return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[m]);const i=u.filter(t=>a.carrito.includes(t.id)),h=i.reduce((t,n)=>t+n.precio,0);async function o(){const t={...a,carrito:[]};await w(a.id,t)?x(t,!1):alert("Error al actualizar el carrito en Firebase")}async function r(){if(i.length===0){alert("El carrito está vacío.");return}const t=[...a.comprado];i.forEach(c=>{t.includes(c.id)||t.push(c.id)});const n={...a,comprado:t,carrito:[]};await w(a.id,n)?x(n,!0):alert("Error al realizar la compra en Firebase")}return e.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",children:e.jsxs("div",{ref:d,className:"bg-white p-6 rounded shadow-lg w-96",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Tu Carrito"}),i.length===0?e.jsx("p",{children:"No tienes cursos en el carrito"}):e.jsx("ul",{className:"mb-4 space-y-2",children:i.map(t=>e.jsxs("li",{className:"border-b py-2 flex justify-between",children:[e.jsx("span",{className:"font-semibold",children:t.titulo}),e.jsxs("span",{children:["$",t.precio]})]},t.id))}),e.jsxs("p",{className:"font-bold mb-4 text-lg",children:["Total: $",h.toFixed(2)]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:o,className:"bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600",children:"Vaciar Carrito"}),e.jsx("button",{onClick:r,className:"bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700",children:"Comprar"})]}),e.jsx("button",{onClick:m,className:"mt-4 bg-gray-400 text-white py-1 px-3 rounded hover:bg-gray-500",children:"Cerrar"})]})})}function P({cursos:a,usuarios:m,showHero:x=!0}){const u=b(g=>g.user),[d,i]=l.useState(!1),[h,o]=l.useState(!1),[r,t]=l.useState("");function n(){i(!0)}function s(){i(!1)}function c(){if(!u){alert("Debes iniciar sesión para ver tu carrito");return}o(!0)}function f(){o(!1)}function j(g,v=!1){v&&(t("¡Compra realizada con éxito!"),o(!1))}return e.jsxs("div",{className:"bg-gray-100 flex flex-col",children:[r&&e.jsxs("div",{className:"bg-green-500 text-white p-3 flex justify-between items-center",children:[e.jsx("span",{children:r}),e.jsx("button",{onClick:()=>t(""),className:"bg-white text-green-700 px-2 py-1 rounded ml-4",children:"Cerrar"})]}),e.jsx(y,{postsData:a,onOpenCart:c,onOpenLogin:n}),x&&e.jsx(E,{}),d&&e.jsx(S,{onClose:s,usuarios:m}),h&&u&&e.jsx(L,{user:u,onClose:f,onUpdateUser:j,cursos:a})]})}export{P as default};
