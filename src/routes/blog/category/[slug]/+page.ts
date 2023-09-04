import type { Post } from '$lib/types';

export async function load({ fetch, params }) {
	const response = await fetch(`../../../api/posts`);
	let list_of_posts: Post[] = await response.json();

	const posts = list_of_posts.filter((item) => item.categories.includes(params.slug));

	return { params, posts };
}
