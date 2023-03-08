import { getAllUsers, getUser, User } from "@/services/users";

interface IUser {
    user: User;
}

export default function UserPage({ user }: IUser) {
    const { name, username, email, address } = user;

    return (
        <>
            <h1>{name}</h1>
            <h4>{username}</h4>
            <h4>{`Email: ${email}`}</h4>
            <h4>{`City: ${address.city}`}</h4>
            <h4>{`Street: ${address.street}`}</h4>
            <h4>{`Suite: ${address.suite}`}</h4>
            <h4>{`Zipcode: ${address.zipcode}`}</h4>
        </>
    );
}

export async function getStaticProps(context: any) {
    const user = await getUser(context.params.id);

    return { props: { user } };
}

export async function getStaticPaths() {
    const users = await getAllUsers();

    return {
        paths: users?.map(({ id }) => ({ params: { id: id.toString() } })),
        fallback: false,
    };
}
