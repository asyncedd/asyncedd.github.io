import type { Post } from '$lib/types';

export async function load({ fetch }) {
	const response = await fetch('api/posts');
	const posts: Post[] = await response.json();

	return { params: { slug: 'Blogs' }, posts };
}
