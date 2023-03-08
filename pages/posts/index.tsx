import { getAllPosts, Post } from "@/services/posts";
import Link from "next/link";

interface IPosts {
    posts: Post[];
}

export default function Posts({ posts }: IPosts) {
    return (
        <>
            <h1>Posts</h1>
            <h4>Posts list</h4>
            <ul>
                {posts.map(({ title, id }) => (
                    <li key={id}>
                        <Link href={`/posts/${id}`}>{title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export async function getServerSideProps() {
    const posts = await getAllPosts();

    if (!posts) {
        return {
            notFound: true,
        };
    }

    return { props: { posts } };
}
