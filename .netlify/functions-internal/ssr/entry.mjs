import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BjkhgNfL.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_cKxCWsJK.mjs');
const _page1 = () => import('./chunks/404_nhT5zoys.mjs');
const _page2 = () => import('./chunks/_tag__D-imqrmz.mjs');
const _page3 = () => import('./chunks/_slug__6v1R0xAU.mjs');
const _page4 = () => import('./chunks/index_B2oJqaUz.mjs');
const _page5 = () => import('./chunks/feed_BP4u3LmO.mjs');
const _page6 = () => import('./chunks/default_B-7yKZdK.mjs');
const _page7 = () => import('./chunks/_slug__BMEk_CoH.mjs');
const _page8 = () => import('./chunks/index_BmYoPlgY.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/blog/tags/[tag].astro", _page2],
    ["src/pages/blog/[slug].astro", _page3],
    ["src/pages/blog/index.astro", _page4],
    ["src/pages/feed.xml.js", _page5],
    ["src/pages/v1/generate/og/default.png.ts", _page6],
    ["src/pages/v1/generate/og/[slug].png.ts", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "b75acc55-a220-4269-a393-7f4f210a0ef4"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
