import { findAfter } from 'unist-util-find-after';
import { visit } from 'unist-util-visit';
import GithubSlugger from 'github-slugger';

const slugger = new GithubSlugger();

const MAX_HEADING_DEPTH = 6;

function plugin() {
	return transform;
}

function transform(tree) {
	for (let depth = MAX_HEADING_DEPTH; depth > 0; depth--) {
		visit(tree, (node) => node.type === 'heading' && node.depth === depth, sectionize);
	}
}

function sectionize(node, index, parent) {
	const start = node;
	const startIndex = index;
	const depth = start.depth;

	const isEnd = (node) =>
		(node.type === 'heading' && node.depth <= depth) || node.type === 'export';
	const end = findAfter(parent, start, isEnd);
	const endIndex = parent.children.indexOf(end);

	const between = parent.children.slice(startIndex, endIndex > 0 ? endIndex : undefined);

	slugger.reset();

	const sectionId = slugger.slug(start.children[0].value); // Creating section ID from header text
	const section = {
		type: 'section',
		depth: depth,
		children: between,
		data: {
			hName: 'section',
			hProperties: {
				id: sectionId // Using the existing header ID as the section ID
			}
		}
	};

	parent.children.splice(startIndex, section.children.length, section);
}

export default plugin;
