import { f as createComponent, r as renderTemplate, n as renderComponent, u as unescapeHTML } from './astro_COMPlC6x.mjs';
import 'kleur/colors';
import { $ as $$BlogPost } from './BlogPost_B_4cnUPr.mjs';

const html = "<h2 id=\"deorum-petiit-ignis\">Deorum petiit ignis</h2>\n<p>Lorem markdownum longo os thyrso telum, continet servat fetus nymphae, <em>vox\r\nnocte sedesque</em>, decimo. Omnia esse, quam sive; conplevit illis indestrictus\r\nadmovit dedit sub quod protectus, impedit non.</p>\n<h2 id=\"iovis-late-orbem-perseus-sunt\">Iovis late orbem Perseus sunt</h2>\n<p>Aras reperire, sui motis correpti coniunx Onetor amore ferire lacertis, petiit.\r\nBis pallor et mecum me, igne patruelibus <em>tendebam</em>, vultu sterilique terruerat\r\n<em>tempore</em> medium aera <strong>eadem Mittor</strong>.</p>\n<ul>\n<li>Non turba loca dederunt primordia ineamus Dictys</li>\n<li>Tanti amat mundus sedula</li>\n<li>Potuissent aetas parili coniuge se lumina breve</li>\n<li>Tamen ille crepitantibus ulla coeperunt quibus iugulo</li>\n<li>Pindusque solacia luctataque felix</li>\n</ul>\n<h2 id=\"longum-minus-sic-saepe\">Longum minus sic saepe</h2>\n<p>Genu cupiens quoque: cum dolor: sollicitive cantu, et piae Leuconoe, huius non\r\nnil tuli Peleusque rauca. Et alvum cuncti Hippodamas meritis nec coniunx ausa,\r\npete. Congestaque nisi nullus poena. Tanto cum, curvis vulnera quod optatis,\r\ntrahens conplexa saepe.</p>\n<p>Hominum quo. Signa germanaeque iuvat at feruntur precantibus corpus praebuerat\r\nexcipit mixtaeque inferior, haec percepit regum: nec nec sit ferenti.</p>\n<h2 id=\"geminas-namque-quod-referitur-argenteus-aderat-superstes\">Geminas namque quod referitur argenteus aderat superstes</h2>\n<p>Insistere pugno. Cum morae vigilantibus dulces Cycnus: neque cum sororis.</p>\n<p>Hac Aestas solet docebo tandem tamquam omnis vitiantur mitte, vatis in animique\r\ninfelix passimque. Superasset onus.</p>";

				const frontmatter = {"title":"Blogpost 3","description":"Lorem markdownum longo os thyrso telum, continet servat fetus nymphae, vox nocte sedesque, decimo. Omnia esse, quam sive; conplevit illis indestrictus admovit dedit sub quod protectus, impedit non.","pubDate":"2023-02-14 23:49","author":"Elian Van Cutsem","tags":["CSS","Astro","Vite"],"imgUrl":"../../assets/astro.jpeg","layout":"../../layouts/BlogPost.astro"};
				const file = "C:/Users/juanm/Documents/Respaldo/juanandres-montero/Obras Públicas de Costa Rica/OPCR/src/content/blog/blogpost-3.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## Deorum petiit ignis\r\n\r\nLorem markdownum longo os thyrso telum, continet servat fetus nymphae, *vox\r\nnocte sedesque*, decimo. Omnia esse, quam sive; conplevit illis indestrictus\r\nadmovit dedit sub quod protectus, impedit non.\r\n\r\n## Iovis late orbem Perseus sunt\r\n\r\nAras reperire, sui motis correpti coniunx Onetor amore ferire lacertis, petiit.\r\nBis pallor et mecum me, igne patruelibus *tendebam*, vultu sterilique terruerat\r\n*tempore* medium aera **eadem Mittor**.\r\n\r\n- Non turba loca dederunt primordia ineamus Dictys\r\n- Tanti amat mundus sedula\r\n- Potuissent aetas parili coniuge se lumina breve\r\n- Tamen ille crepitantibus ulla coeperunt quibus iugulo\r\n- Pindusque solacia luctataque felix\r\n\r\n## Longum minus sic saepe\r\n\r\nGenu cupiens quoque: cum dolor: sollicitive cantu, et piae Leuconoe, huius non\r\nnil tuli Peleusque rauca. Et alvum cuncti Hippodamas meritis nec coniunx ausa,\r\npete. Congestaque nisi nullus poena. Tanto cum, curvis vulnera quod optatis,\r\ntrahens conplexa saepe.\r\n\r\nHominum quo. Signa germanaeque iuvat at feruntur precantibus corpus praebuerat\r\nexcipit mixtaeque inferior, haec percepit regum: nec nec sit ferenti.\r\n\r\n## Geminas namque quod referitur argenteus aderat superstes\r\n\r\nInsistere pugno. Cum morae vigilantibus dulces Cycnus: neque cum sororis.\r\n\r\nHac Aestas solet docebo tandem tamquam omnis vitiantur mitte, vatis in animique\r\ninfelix passimque. Superasset onus.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"deorum-petiit-ignis","text":"Deorum petiit ignis"},{"depth":2,"slug":"iovis-late-orbem-perseus-sunt","text":"Iovis late orbem Perseus sunt"},{"depth":2,"slug":"longum-minus-sic-saepe","text":"Longum minus sic saepe"},{"depth":2,"slug":"geminas-namque-quod-referitur-argenteus-aderat-superstes","text":"Geminas namque quod referitur argenteus aderat superstes"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$BlogPost, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
