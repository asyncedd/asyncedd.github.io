import type { Post } from '$lib/types';

export async function load({ fetch, params }) {
	const response = await fetch(`../../api/posts`);
	const posts: Post[] = await response.json();
	const categories: string[] = [];

	posts.forEach((i) => {
		i.categories.forEach((it) => {
			if (!categories.includes(it)) {
				categories.push(it);
			}
		});
	});
	// const filtered_list = posts.filter((item) => item.categories.includes(params.slug));

	return { params, categories };
}
