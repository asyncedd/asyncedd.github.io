import type { Post } from '$lib/types';

export async function load({ fetch, params }) {
	const response = await fetch(`../../api/snippet`);
	const posts: Post[] = await response.json();

	const filtered_list = posts.filter((item) => item.categories.includes(params.slug));

	return { params, filtered_list };
}
