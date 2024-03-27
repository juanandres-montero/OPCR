/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, n as renderComponent, m as maybeRenderHead } from '../astro_COMPlC6x.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$Button, a as $$BlogList, b as $$Default } from './404_CjakqvGJ.mjs';

const $$Astro = createAstro("https://localhost:3000/");
async function getStaticPaths() {
  const allPosts = await getCollection("blog").then(
    (collection) => collection.reverse()
  );
  const tags = [];
  allPosts.forEach((post) => {
    post.data.tags.forEach((tag) => {
      tags.push(tag.toLowerCase());
    });
  });
  return Array.from(new Set(tags)).map((tag) => {
    return {
      params: { tag },
      props: {
        tag,
        blogposts: allPosts.filter(
          (post) => post.data.tags.map((tag2) => tag2.toLowerCase()).includes(tag)
        )
      }
    };
  });
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag, blogposts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Default, { "title": `Blog: ${tag}`, "description": `Brutal Blog | All posts tagged with ${tag}`, "pageTitle": `Brutal Blog |\xA0Blogposts tagged with ${tag}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="p-6 bg-purple grid gap-4"> <div> ${renderComponent($$result2, "Button", $$Button, { "href": "/blog/" }, { "default": ($$result3) => renderTemplate`&larr; Volver a la página principal` })} </div> ${renderComponent($$result2, "BlogList", $$BlogList, { "posts": blogposts })} </main> ` })}`;
}, "C:/Users/juanm/Documents/Respaldo/juanandres-montero/Obras P\xFAblicas de Costa Rica/OPCR/src/pages/blog/tags/[tag].astro", void 0);

const $$file = "C:/Users/juanm/Documents/Respaldo/juanandres-montero/Obras Públicas de Costa Rica/OPCR/src/pages/blog/tags/[tag].astro";
const $$url = "/OPCR/blog/tags/[tag]";

export { $$tag as default, $$file as file, getStaticPaths, $$url as url };
