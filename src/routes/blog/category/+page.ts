import type { Post } from '$lib/types';

export async function load({ fetch }) {
	const response = await fetch(`../../api/posts`);
	let list_of_post: Post[] = await response.json();
	let posts: string[] = [];

	list_of_post.forEach((i) => {
		i.categories.forEach((it) => {
			if (!posts.includes(it)) {
				posts.push(it);
			}
		});
	});
	// const filtered_list = posts.filter((item) => item.categories.includes(params.slug));

	return { params: { slug: 'Categories' }, posts };
}
