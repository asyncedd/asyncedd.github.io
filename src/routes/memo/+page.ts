import type { Post } from '$lib/types';

export async function load({ fetch }) {
	const response = await fetch('api/memos');
	const posts: Post[] = await response.json();
	return { params: { slug: 'memos' }, posts };
}
