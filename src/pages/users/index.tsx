import { getAllUsers, User } from "@services/users";
import Link from "next/link";

interface IUsers {
    users: User[];
}

export default function Users({ users }: IUsers) {
    console.log("test compiler remove console");
    return (
        <>
            <h1>Users</h1>
            <h3>User list</h3>
            {Boolean(users.length) && (
                <ul data-testid="user-list">
                    {users.map(({ name, id }) => (
                        <li key={id}>
                            <Link href={`/users/${id}`}>{name}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export async function getServerSideProps() {
    const users = await getAllUsers();

    if (!users) {
        return {
            notFound: true,
        };
    }

    return { props: { users } };
}
