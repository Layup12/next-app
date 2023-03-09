import { getPost, Post } from "@services/posts";

interface IPost {
    post: Post;
}

export default function PostPage({ post }: IPost) {
    const { id, userId, title, body } = post;

    return (
        <>
            <h4>{`Post ID: ${id}`}</h4>
            <h4>{`User ID: ${userId}`}</h4>
            <h2>{title}</h2>
            <span>{body}</span>
        </>
    );
}

export async function getServerSideProps(context: any) {
    const post = await getPost(context.params.id);

    if (!post) {
        return {
            notFound: true,
        };
    }

    return { props: { post } };
}
