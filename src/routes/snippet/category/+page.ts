import type { Post } from '$lib/types';

export async function load({ fetch }) {
	const response = await fetch(`../../api/snippets`);
	const list_of_posts: Post[] = await response.json();
	const posts: string[] = [];

	list_of_posts.forEach((i) => {
		i.categories.forEach((it) => {
			if (!posts.includes(it)) {
				posts.push(it);
			}
		});
	});
	// const filtered_list = posts.filter((item) => item.categories.includes(params.slug));

	return { params: { slug: 'Categories' }, posts };
}
