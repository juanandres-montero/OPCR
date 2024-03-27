import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BTBWJZ_9.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BN5MWTZU.mjs');
const _page1 = () => import('./chunks/404_Cc_KvGYl.mjs');
const _page2 = () => import('./chunks/_tag__CXxr3dDG.mjs');
const _page3 = () => import('./chunks/_slug__CMjL10WH.mjs');
const _page4 = () => import('./chunks/index_cXpxrvDr.mjs');
const _page5 = () => import('./chunks/feed_BUglmEKI.mjs');
const _page6 = () => import('./chunks/default_B-7yKZdK.mjs');
const _page7 = () => import('./chunks/_slug__CsbKJ6Tg.mjs');
const _page8 = () => import('./chunks/index_BxrbOV8s.mjs');
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
    "middlewareSecret": "b8053b0a-a1db-4c01-92ce-b13fdd5fafec"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
