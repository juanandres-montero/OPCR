/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, n as renderComponent, m as maybeRenderHead, h as addAttribute } from '../astro_COMPlC6x.mjs';
import 'kleur/colors';
import { g as getCollection, a as $$BlogList, b as $$Default, d as $$Card, $ as $$Button, e as $$Pill, f as $$RecentBlogPosts } from './404_Cj-01DDb.mjs';
import 'clsx';

const $$Astro$2 = createAstro("https://localhost:3000/");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$1;
  const posts = await getCollection("blog").then(
    (collection) => collection.reverse()
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Default, { "title": "Blog", "description": "Brutal Blog |\xA0On this page you can find a collection of blogposts", "pageTitle": "Brutal Blog" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-green p-6"> ${renderComponent($$result2, "BlogList", $$BlogList, { "posts": posts })} </main> ` })}`;
}, "C:/Users/juanm/Documents/Respaldo/juanandres-montero/Obras P\xFAblicas de Costa Rica/OPCR/src/pages/blog/index.astro", void 0);

const $$file$1 = "C:/Users/juanm/Documents/Respaldo/juanandres-montero/Obras Públicas de Costa Rica/OPCR/src/pages/blog/index.astro";
const $$url$1 = "/OPCR/blog";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://localhost:3000/");
const $$MobileSocials = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MobileSocials;
  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/juanandres-montero",
      icon: "i-uil-github"
    },
    {
      name: "Twitter",
      url: "https://www.twitter.com/montero_juan_",
      icon: "i-uil-twitter"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/juanandres-montero",
      icon: "i-uil-linkedin"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="md:hidden"> <h2 class="hidden">Socials section</h2> <ul class="flex justify-between"> ${socials.map((item) => renderTemplate`<li class="bg-white px-4 py-2 text-green border-black border-2 rounded card-shadow"> <a${addAttribute(item.url, "href")} target="_blank"${addAttribute(`Go to ${item.name}`, "title")}> <div${addAttribute([item.icon, "p-6"], "class:list")}></div> </a> </li>`)} </ul> </section>`;
}, "C:/Users/juanm/Documents/Respaldo/juanandres-montero/Obras P\xFAblicas de Costa Rica/OPCR/src/components/home/MobileSocials.astro", void 0);

const $$Astro = createAstro("https://localhost:3000/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const builtWith = [
    { name: "Astro", url: "https://astro.build/" },
    { name: "UnoCSS", url: "https://uno.antfu.me/" },
    {
      name: "Content Collections",
      url: "https://docs.astro.build/en/guides/content-collections/"
    },
    { name: "RSS", url: "https://docs.astro.build/en/guides/rss/" },
    {
      name: "Sitemap",
      url: "https://docs.astro.build/en/guides/integrations-guide/sitemap/"
    },
    { name: "Vercel", url: "https://vercel.com" },
    { name: "TypeScript", url: "https://www.typescriptlang.org/" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Default, { "title": "Home", "pageTitle": "Brutal Theme |\xA0Home", "description": "Brutal is a minimalistic, neobrutalism theme for Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-pink p-6"> ${renderComponent($$result2, "MobileSocials", $$MobileSocials, {})} <section id="about" class="grid md:grid-cols-8 gap-8 mt-4"> <h2 class="hidden">About OPCR</h2> <div class="col-span-4"> ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="flex flex-col justify-between items-start gap-4"> <p class="mt-4 outfit text-2xl md:text-5xl lg:text-7xl">
Obras Públicas de <a class="text-white" target="_blank" href="https://astro.build/">Costa Rica</a> </p> <p class="mt-2 outfit text-xl md:text-3xl lg:text-5xl">
Un minimalista registro de todas las obras públicas de Costa Rica.
</p> ${renderComponent($$result3, "Button", $$Button, { "target": "_self", "href": "/blog/" }, { "default": ($$result4) => renderTemplate`
Ver las obras públicas registradas &rarr;
` })} </div> ` })} </div> <div class="col-span-2"> ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <h2 class="text-2xl md:text-4xl lg:text-6xl mb-8 dm-serif">
OPCR es construido con:
</h2> <ul class="flex gap-4 flex-wrap"> ${builtWith.map((item) => renderTemplate`<li> ${renderComponent($$result3, "Pill", $$Pill, {}, { "default": ($$result4) => renderTemplate` <a class="sanchez"${addAttribute(item.url, "href")} target="_blank"${addAttribute(`Go to ${item.name}`, "title")}> ${item.name} </a> ` })} </li>`)} </ul> ` })} </div> <div class="col-span-2"> ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <h2 class="text-2xl md:text-4xl lg:text-6xl mb-4 dm-serif">
¿Qué es OPCR?
</h2> <p class="poppins">
OPCR es una página web creada por <a href="https://juanandres-montero.github.io">Juan Andrés</a>, que tiene como objetivo registrar todas las obras públicas de Costa Rica como base de datos. De esta manera puede proveer información a la ciudadanía sobre las obras que se están realizando en el país.
</p> ` })} </div> </section> ${renderComponent($$result2, "RecentBlogPosts", $$RecentBlogPosts, {})} </main> ` })}`;
}, "C:/Users/juanm/Documents/Respaldo/juanandres-montero/Obras P\xFAblicas de Costa Rica/OPCR/src/pages/index.astro", void 0);

const $$file = "C:/Users/juanm/Documents/Respaldo/juanandres-montero/Obras Públicas de Costa Rica/OPCR/src/pages/index.astro";
const $$url = "/OPCR";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
